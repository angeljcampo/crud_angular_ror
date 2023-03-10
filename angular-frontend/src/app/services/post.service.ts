import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url:string = "http://127.0.0.1:3000";
  constructor(private http: HttpClient) { }

  listPosts() {
    return this.http.get( this.url + '/api/v1/posts');
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  addPost(data:any){
    return this.http.post( this.url + '/api/v1/posts', data, this.httpOptions);
  }

  findPost(id:any){
    return this.http.get( this.url + '/api/v1/posts/' + id);
  }

  updatePost(data:any, id: any){
    return this.http.put( this.url + '/api/v1/posts/'+ id, data, this.httpOptions);
  }

  deletePost(id:any){
    return this.http.delete( this.url + '/api/v1/posts/' + id);
  }

}
