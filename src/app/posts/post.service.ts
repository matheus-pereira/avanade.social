import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(filter: { fromDate?: string; userId?: string; } = {}) {
    return this.http.get<Post[]>(`${API_URL}/publications`, { params: filter });
  }

  createPost(text: string) {
    return this.http.post<Post>(`${API_URL}/publications`, { text });
  }

  likePost(postId: string) {
    return this.http.put<Post>(`${API_URL}/publications/${postId}/like`, {});
  }

  unlikePost(postId: string) {
    return this.http.put<Post>(`${API_URL}/publications/${postId}/unlike`, {});
  }

}
