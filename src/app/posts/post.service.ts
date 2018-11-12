import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {}

  getPosts(fromDate?: string) {
    let params:any = {};
    
    if (fromDate) {
      params.fromDate = fromDate;
    }

    return this.http.get<Post[]>(`${API_URL}/publications`, { params });
  }

  likePost(postId: string) {
    return this.http.put<Post>(`${API_URL}/publications/${postId}/like`, {});
  }

  unlikePost(postId: string) {
    return this.http.put<Post>(`${API_URL}/publications/${postId}/unlike`, {});
  }

}
