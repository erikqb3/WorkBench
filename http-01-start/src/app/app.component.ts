import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{ name: string }>(
        "https://making-http-requests-4f4a0-default-rtdb.firebaseio.com/post.json",
        postData
    )
    .subscribe(responseData => { //subscribing to http request automatically provides response data
      console.log(responseData)
    })
    ;
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts(){
    this.http
      // .get('https://making-http-requests-4f4a0-default-rtdb.firebaseio.com/post.json')
      // .pipe(map((responseData: {[key: string]: Post}) => {
        .get<{ [key: string]: Post }>('https://making-http-requests-4f4a0-default-rtdb.firebaseio.com/post.json')  
        .pipe(map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)){
            postsArray.push({ ...responseData[key], id: key })
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
        this.loadedPosts = posts
      })
  }
}
