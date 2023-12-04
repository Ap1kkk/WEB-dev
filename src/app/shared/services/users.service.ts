import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class UsersService {
    private userChanged = new EventEmitter<User>();

    private emitUserChangedEvent(user:User) {
        this.userChanged.emit(user);
    }
    getUserChangedEmitter() {
        return this.userChanged;
    }

    constructor(private http: HttpClient) {
    }

    getUsers() {
        return this.http.get(`http://localhost:3000/users`);
    }

    getUser(email: string): Observable<User> {
        return this.http.get(`http://localhost:3000/users?email=${email}`)
        .pipe(map((user: any) => user[0] ? user[0] : undefined));
    }
    createUser(user: User) {
        return this.http.post('http://localhost:3000/users', user);
    }
    deleteUser(user:User)
    {
        return this.http.delete(`http://localhost:3000/users/${user.id}`)
        .subscribe(() => console.log("user deleted"));
    }
    putUser(oldEmail:string, user:User)
    {
        return this.http.put(`http://localhost:3000/users/${user.id}`, user)
        .pipe(map((user: any) => user[0] ? user[0] : undefined))
        .subscribe(() => this.emitUserChangedEvent(user));
    }
}