import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(private http: HttpClient) { }

    getPosts(limit) {
        return this.http.get<Post[]>(`http://localhost:3000/posts?_limit=${limit}`);
    }
}
