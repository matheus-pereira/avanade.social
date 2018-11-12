import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { TokenService } from '../token/token.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root'})
export class UserService {
    
    private userSubject = new BehaviorSubject<User>(null);

    constructor (
        private tokenService: TokenService,
        private http: HttpClient
    ) {
        this.tokenService.hasToken() && this.decodeAndNotify();
    }

    setToken(token) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    getUserAsync(id: string) {
        return this.http.get<User>(`${API_URL}/users/${id}`);
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jwt_decode(token) as User;
        this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

}