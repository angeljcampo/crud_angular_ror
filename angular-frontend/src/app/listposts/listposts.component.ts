import { Component } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-listposts',
  templateUrl: './listposts.component.html',
  styleUrls: ['./listposts.component.css']
})
export class ListpostsComponent {

  posts:any;
  constructor(private postService:PostService){

  }

  ngOnInit(){
    this.PostList();
  }

  PostList(){
      this.posts = this.postService.listPosts().subscribe(
        post =>{
          this.posts = post
          console.log(this.posts);
      }
    )
  }

  deletePost(id:any){
    this.postService.deletePost(id).subscribe(
      (post) => {
        console.log("El post fue eliminado correctamente");
      }  
    )
  }

}
