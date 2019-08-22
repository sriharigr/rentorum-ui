import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReplyService } from 'src/app/services/reply.service';

@Component({
  selector: 'app-add-reply',
  templateUrl: './add-reply.component.html',
  styleUrls: ['./add-reply.component.css']
})
export class AddReplyComponent implements OnInit {

  replyForm: FormGroup;
  @Output() saveEvent = new EventEmitter<Boolean>();
  @Input() commentId: String;
  constructor(private replyService: ReplyService) { }

  ngOnInit() {
    this.replyForm = new FormGroup({
      content: new FormControl('')
    });
  }

  save() {
    this.replyService.save(this.commentId, this.replyForm.value).subscribe((response: any) => {
       console.log('Response from COMMENT SAVE ', response);
       this.saveEvent.emit();
       this.replyForm.reset();
    });
  }

}
