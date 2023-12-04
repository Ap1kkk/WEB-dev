import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
    faUser = faUser;
    user: User|any;

    subscription: Subscription;

    constructor(private authService:AuthService)
    {
        this.user = this.authService.CurrentUser;
        
        this.subscription = this.authService.getUserChangedEmitter()
        .subscribe(user => {
            this.user = user
            console.log("user changed -> ", user)
        })
    }

    ngOnInit(): void {
        this.user = this.authService.CurrentUser;
    }
}   
