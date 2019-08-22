import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  @Output() saveEvent = new EventEmitter<Boolean>();
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postForm = new FormGroup({
      content: new FormControl('')
    });
  }
  save() {
    this.postService.savePost(this.postForm.value).subscribe((response: any) => {
       console.log('Response from POST SAVE ', response);
       this.saveEvent.emit(true);
       this.postForm.reset();
    });
  }

}
