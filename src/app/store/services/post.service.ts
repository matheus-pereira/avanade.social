import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

const API_URL = environment.apiUrl;

@Injectable({
    providedIn: 'root'
})
export class PostService {
    constructor(private http: HttpClient) { }

    getPosts(timestamp: Date = new Date()): Observable<Post[]> {
        return this.http.get<Post[]>(`${API_URL}/posts?start=${timestamp}`);
    }

    getPost(id: string): Observable<Post> {
        return this.http.get<Post>(`${API_URL}/post/${id}`);
    }
}