import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-line',
  templateUrl: './post-line.component.html',
  styleUrls: ['./post-line.component.css']
})
export class PostLineComponent implements OnInit {

  loggedInUser: User;
  listOfPosts: Post[];
  hasError: Boolean = false;
  errorMessage: String = 'Something went wrong. Try again later!';
  constructor(private loginService: LoginService, private postService: PostService) { }

  ngOnInit() {
    try {
      this.loginService.loggedInUserSubject.subscribe((lgSrvResponse: User) => {
        this.loggedInUser = lgSrvResponse;
        console.log('I am called');
        this.getPosts();
      });
    } catch (error) {
     this.hasError = true;
    }
  }

  getPosts() {
    this.postService.getPosts().subscribe((psSrvResponse: any) => {
      this.hasError = false;
      this.listOfPosts = psSrvResponse.data;
    }, (error) => {
      this.hasError = true;
      this.errorMessage = error.description;
    });
  }

}
