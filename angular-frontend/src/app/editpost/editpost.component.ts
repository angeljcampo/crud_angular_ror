import {FormControl, FormGroup} from '@angular/forms';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent {

  postForm!: FormGroup;
  post:any;
  id: any;
  constructor(
    private postService: PostService,
    private route: ActivatedRoute){}
  
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    this.id = Number(routeParams.get('post_id'));
    console.log(this.id);
    this.postService.findPost(this.id).subscribe(
      (post) => {
        this.post = post
        this.postForm = new FormGroup({
          title: new FormControl(this.post.title),
          description: new FormControl(this.post.description),
          author_id: new FormControl(this.post.author_id)
        });
      
      }
    )
  }

  onSubmit() {
    this.postService.updatePost(this.postForm.value, this.id).subscribe(
      post => {
        console.log("El post fue actualizado");
      }
    )
  }

}
