import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType} from '@angular/common/http';
import { Post } from './post.model';
import { map, catchError, tap } from 'rxjs/operators'
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  error = new Subject<string>();
  fireBase_link: string = 'https://making-http-requests-4f4a0-default-rtdb.firebaseio.com/post.json'

  constructor(
    private http: HttpClient //http requests return observables
  ) { }
  
  createAndStorePost(title: string, content: string){
    const postData: Post = {
      title: title,
      content: content
    }
    this.http
      .post<{ name: string }>(
        this.fireBase_link,
        postData,
        {
          observe:'response'
        }
    )
    .subscribe(responseData => { //subscribing to http request automatically provides response data
      console.log(responseData, responseData.body)
    },
    error => {
      this.error.next(error.message);
    });
  }

  deletePosts(){
    return this.http.delete(
      this.fireBase_link,
      {
        observe:'events',
        responseType:'json' //default is json
      })
        .pipe(tap(event => {
          console.log(event);
          if (event.type === HttpEventType.Sent){
            // ...
          }
          if (event.type === HttpEventType.Response){
            console.log(event.body);
          }
        }))
  }

  fetchPosts(){
    let searchParams = new HttpParams();
    searchParams = searchParams.append("name","Honest");
    searchParams = searchParams.append('name','Loyal');
    searchParams = searchParams.append('print','pretty'); // shows Response in a better format
    return this.http
    // .get('https://making-http-requests-4f4a0-default-rtdb.firebaseio.com/post.json')
    // .pipe(map((responseData: {[key: string]: Post}) => {
      .get<{ [key: string]: Post }>(
        this.fireBase_link,
        {
          headers: new HttpHeaders({ 'Custom-Header' : 'Hellow'}),
          // params: new HttpParams(). set('print','pretty')
          params: searchParams,
          responseType: 'json' //default is json, no need to overwrite it
          //responseType: 'text'
        }
      )  
      .pipe(map(responseData => {
      const postsArray: Post[] = [];
      for (const key in responseData) {
        if (responseData.hasOwnProperty(key)){
          postsArray.push({ ...responseData[key], id: key })
        }
      }
      return postsArray;
    }),
    catchError(errorRes => {
      //Send to analytics server
      return throwError(errorRes);
    }));
    // .subscribe(posts => {
    //   // this.isFetching = false;
    //   // this.loadedPosts = posts;
    // })
  }
  
}
//tap: allows us to execute some code without altering the response, do something with the response but not disturb our subscribe function and funcitons we passed 