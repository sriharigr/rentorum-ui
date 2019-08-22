import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  commentForm: FormGroup;
  @Output() saveEvent = new EventEmitter<Boolean>();
  @Input() postId: String;
  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentForm = new FormGroup({
      content: new FormControl('')
    });
  }

  save() {
    this.commentService.saveComment(this.postId, this.commentForm.value).subscribe((response: any) => {
       console.log('Response from COMMENT SAVE ', response);
       this.saveEvent.emit();
       this.commentForm.reset();
    });
  }

}
