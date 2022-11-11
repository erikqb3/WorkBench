import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from './post.model';
import { PostsService } from "./posts.service";
import { map } from 'rxjs/operators';
import { Observable, Subscription } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription;

  constructor(
    private http: HttpClient, //http requests return observables
    private postsService: PostsService) {}

  ngOnInit() {
    // this.fetchPosts();
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })

    this.isFetching = true;
    this.fetchPostResponse(this.postsService.fetchPosts());
  }
  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  fetchPostResponse(observable: Observable<Post[]>) {
    observable.subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    });
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePosts()
      .subscribe(() => {
        this.loadedPosts = [];
      })
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content)
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.fetchPostResponse(this.postsService.fetchPosts());
  }

  onHandleError(){
    this.error = null;
  }



  // private fetchPosts(){
  //   this.isFetching = true;
  //   this.http
  //     // .get('https://making-http-requests-4f4a0-default-rtdb.firebaseio.com/post.json')
  //     // .pipe(map((responseData: {[key: string]: Post}) => {
  //       .get<{ [key: string]: Post }>('https://making-http-requests-4f4a0-default-rtdb.firebaseio.com/post.json')  
  //       .pipe(map(responseData => {
  //       const postsArray: Post[] = [];
  //       for (const key in responseData) {
  //         if (responseData.hasOwnProperty(key)){
  //           postsArray.push({ ...responseData[key], id: key })
  //         }
  //       }
  //       return postsArray;
  //     }))
  //     .subscribe(posts => {
  //       this.isFetching = false;
  //       this.loadedPosts = posts;
  //     })
  // }
}
