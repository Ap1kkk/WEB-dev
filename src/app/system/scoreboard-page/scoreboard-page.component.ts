import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-scoreboard-page',
  templateUrl: './scoreboard-page.component.html',
  styleUrls: ['./scoreboard-page.component.css']
})
export class ScoreboardPageComponent implements OnInit{
    users!: Array<User>;
    constructor(private usersService:UsersService)
    {}
    
    ngOnInit(): void {
        this.usersService.getUsers()
        .subscribe(users => {
            this.users = users as Array<User>
            this.sortUsersByScore()
        })
    }

    private sortUsersByScore() {
        this.users.sort((a, b) => (a.clickedValue > b.clickedValue ? -1 : 1));
    }
}
