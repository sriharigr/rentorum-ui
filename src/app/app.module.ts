import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PostLineComponent } from './post-components/post-line/post-line.component';
import { AddPostComponent } from './post-components/add-post/add-post.component';
import { PostComponent } from './post-components/post/post.component';
import { ViewPostComponent } from './post-components/view-post/view-post.component';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReplyComponent } from './post-components/reply/reply.component';
import { CommentComponent } from './post-components/comment/comment.component';
import { AddCommentComponent } from './post-components/add-comment/add-comment.component';
import { AddReplyComponent } from './post-components/add-reply/add-reply.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostLineComponent,
    AddPostComponent,
    PostComponent,
    ViewPostComponent,
    ReplyComponent,
    CommentComponent,
    AddCommentComponent,
    AddReplyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
