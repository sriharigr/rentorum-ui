import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { Reply } from '../models/reply.model';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {
  headers: HttpHeaders;
  nodeEndPoint: String = environment.nodeEndPoint;
  constructor(private http: HttpClient, private loginService: LoginService) { }

  save(commentId: String, reply: Reply) {
    this.headers = new HttpHeaders
    ({ 'Content-Type': 'application/json', 'X-USER':  this.loginService.loggedInUserSubject.getValue().username + ''});
    return this.http.post(`${this.nodeEndPoint}/post/comment/${commentId}/reply`,
    reply, { headers: this.headers }
    );
   }
}
