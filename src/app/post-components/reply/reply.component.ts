import { Component, OnInit, Input } from '@angular/core';
import { Reply } from 'src/app/models/reply.model';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {

  @Input() reply: Reply;
  constructor() { }

  ngOnInit() {
  }

}
