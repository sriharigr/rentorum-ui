import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user.model';
import { UtilService } from 'src/app/services/util.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private loginService: LoginService, private utilService: UtilService, private postService: PostService) { }
  isLiked: Boolean = true;
  isAuthor: Boolean = false;
  loggedInUser: User;
  showCommentBlk: Boolean = false;
  content: String = '';
  viewState: String = 'ONLYVIEW';
  @Input() post: Post;
  ngOnInit() {
    this.loginService.loggedInUserSubject.subscribe((response: User) => {
      this.loggedInUser = response;
    });
  }

  takeAction(actionName) {
   if (actionName === 'LIKE') {
      this.isLiked = true;
   } else if (actionName === 'DISLIKE') {
    this.isLiked = false;
   } else if (actionName === 'EDIT') {
     this.viewState = 'EDITVIEW';
   } else if (actionName === 'SHOWCOMMENTS') {
     this.showCommentBlk = !this.showCommentBlk;
     if (this.showCommentBlk) {
      this.viewComments();
     }
   }
  }

  viewComments() {
    this.postService.getPost(this.post._id).subscribe((response: any) => {
      this.post = response.data[0];
    });
  }

  getPostedTime() {
    return this.utilService.userActionTime(this.post.lastUpdatedDateAndTime);
  }


}
