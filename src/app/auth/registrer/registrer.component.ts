import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/shared/services/users.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';

const EMAIL_PATTERN =
"^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.css']
})
export class RegistrerComponent implements OnInit {
    form: FormGroup|any;

    constructor(private usersService: UsersService,
        private router: Router) { }
    
    ngOnInit(): void {
        this.form = new FormGroup({
            'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(EMAIL_PATTERN)], this.forbiddenEmails.bind(this)),
            'name': new FormControl(null, [Validators.required]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
            'agree': new FormControl(true, [Validators.requiredTrue])
          });
    }

    onSubmit() {
        const {email, password, name} = this.form.value;
        const user = new User(email, password, name, 0);
      
        this.usersService.createUser(user)
          .subscribe(() => {
            this.router.navigate(['/login'], {
              queryParams: {
                canLogin: true
              }
            });
          });
      }

    forbiddenEmails(control: AbstractControl): Promise<any> {
        return new Promise((resolve, reject) => {
            this.usersService.getUsers(control.value)
            .subscribe((user: User) => {
                if (user) {
                resolve({forbiddenEmail: true});
                } else {
                resolve(null);
                }
            });
        });
    }
}
