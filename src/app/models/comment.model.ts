import { Reply } from './reply.model';

export interface Comment {
    _id: String;
    replies: Reply [];
    createdDateAndTime: Date;
    lastUpdatedDateAndTime: Date;
    content: String;
    createdBy: String;
    _v: Number;
  }
