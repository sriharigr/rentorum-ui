import { Comment } from './comment.model';
  
export interface Post {
    _id: String;
    comments: Comment [];
    createdDateAndTime: Date;
    lastUpdatedDateAndTime: Date;
    content: String;
    createdBy: String;
    _v: Number;
  }
