import { Injectable } from '@angular/core';
import { Comment } from '../models/comment.model';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  headers: HttpHeaders;
  nodeEndPoint: String = environment.nodeEndPoint;
  constructor(private http: HttpClient, private loginService: LoginService) { }

  saveComment(postId: String, comment: Comment) {
    this.headers = new HttpHeaders
    ({ 'Content-Type': 'application/json', 'X-USER':  this.loginService.loggedInUserSubject.getValue().username + ''});
    return this.http.post(`${this.nodeEndPoint}/post/${postId}/comment`,
    comment, { headers: this.headers }
    );
   }

}
