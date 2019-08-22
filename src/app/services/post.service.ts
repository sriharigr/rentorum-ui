import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  nodeEndPoint: String = environment.nodeEndPoint;
  headers: HttpHeaders;
  constructor(private http: HttpClient, private loginService: LoginService) {
    this.headers = new HttpHeaders
    ({ 'Content-Type': 'application/json', 'X-USER':  this.loginService.loggedInUserSubject.getValue().username + ''});
  }

  getPosts() {
    this.headers = new HttpHeaders
    ({ 'Content-Type': 'application/json', 'X-USER':  this.loginService.loggedInUserSubject.getValue().username + ''});
   return this.http.get(`${this.nodeEndPoint}/post`, {headers: this.headers});
  }

  getPost(postId) {
    this.headers = new HttpHeaders
    ({ 'Content-Type': 'application/json', 'X-USER':  this.loginService.loggedInUserSubject.getValue().username + ''});
   return this.http.get(`${this.nodeEndPoint}/post/${postId}/comment`, {headers: this.headers});
  }

  savePost(post: Post) {
    this.headers = new HttpHeaders
    ({ 'Content-Type': 'application/json', 'X-USER':  this.loginService.loggedInUserSubject.getValue().username + ''});
    return this.http.post(`${this.nodeEndPoint}/post`,
     post, { headers: this.headers }
    );
   }
}
