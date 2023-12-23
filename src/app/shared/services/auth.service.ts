import { Observable } from "rxjs";
import { User } from "../models/user.model";
import { UsersService } from "./users.service";
import { EventEmitter, Injectable, Output } from "@angular/core";

@Injectable()
export class AuthService {

    private userChanged = new EventEmitter<User>();

    private emitUserChangedEvent(user:User) {
        this.userChanged.emit(user);
    }
    getUserChangedEmitter() {
        return this.userChanged;
    }


    constructor(private usersService: UsersService)
    {
        this.usersService.getUserChangedEmitter()
        .subscribe(user => {
            window.localStorage.clear();
            window.localStorage.setItem('user', JSON.stringify(user));
            this.emitUserChangedEvent(user)
        })
    }

    public get CurrentUser(): User {
        return JSON.parse(window.localStorage.getItem("user")!);
    }
    
    private _isAuthenticated = false;

    login(user:User) {
      this._isAuthenticated = true;
      window.localStorage.setItem('user', JSON.stringify(user));
      this.userChanged.emit(this.CurrentUser);
      console.log(this.CurrentUser);
    }
  
    logout() {
        this._isAuthenticated = false;
        window.localStorage.clear();
    }
  
    isAuthenticated(): boolean {
      if(this.CurrentUser)
      {
        return true;
      }
      return false;
    }
    
    isUserAdmin(): boolean
    {
        if(this._isAuthenticated)
            return this.CurrentUser.isAdmin;
        return false;
    }
  }