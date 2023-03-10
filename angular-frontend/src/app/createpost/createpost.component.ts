import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent {
  post:any;
  postForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    author_id: new FormControl('')
  });

  constructor(private postService: PostService) {
  
  }
  
  
  onSubmit(){
    this.postService.addPost(this.postForm.value).subscribe(
      post => {
        this.post = post
      }
    )
  }
}
