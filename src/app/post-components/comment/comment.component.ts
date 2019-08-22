import { Component, OnInit, Input } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  showReplyBlk: Boolean = false;
  viewState: String = 'ONLYVIEW';

  constructor(private utilService: UtilService) { }

  ngOnInit() {
    console.log(this.comment);
  }

  takeAction(actionName) {
    if (actionName === 'EDIT') {
      this.viewState = 'EDITVIEW';
    } else if (actionName === 'SHOWCOMMENTS') {
      this.showReplyBlk = !this.showReplyBlk;
    }
  }

  getCommentedTime() {
    return this.utilService.userActionTime(this.comment.lastUpdatedDateAndTime);
  }
}
