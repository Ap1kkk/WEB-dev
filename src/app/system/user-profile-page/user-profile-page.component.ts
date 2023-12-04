import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/shared/models/message.model';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UsersService } from 'src/app/shared/services/users.service';

const EMAIL_PATTERN =
"^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@" +
"[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent implements OnInit, OnDestroy{
    user:User|any;
    form: FormGroup|any
    message: Message|any
    
    editMode = false;
  
    subscription: Subscription;

    constructor(private authService: AuthService, private usersService: UsersService, private router: Router)
    {
        this.user = this.authService.CurrentUser;

        this.subscription = authService.getUserChangedEmitter()
        .subscribe(user => this.user = user)

    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
    ngOnInit(): void {
        this.user = this.authService.CurrentUser;
        this.message = new Message('danger', '');

        this.form = new FormGroup({
            'name': new FormControl(null, [Validators.required, Validators.minLength(4)]),
            'password': new FormControl(null, [Validators.required, Validators.minLength(8)]),
            'email': new FormControl(null, [Validators.required, Validators.email, Validators.pattern(EMAIL_PATTERN)]),
            'clickedValue': new FormControl(null, [Validators.required]),
          });
          this.form.value.name = this.user.name;
          this.form.value.email = this.user.email;
          this.form.value.clickedValue = this.user.clickedValue;
    }


    toggleEditMode() {
      this.editMode = !this.editMode;
    }
  
    saveChanges() {
      this.toggleEditMode();
    }
  
    cancelEdit() {
      this.toggleEditMode();
    }

    logout()
    {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
    
    deleteAccount()
    {
        this.usersService.deleteUser(this.user);
        this.logout();
    }

    onSubmit()
    {
        let formData = this.form.value;

        if(formData.name == null || formData.name == '')
        {
            formData.name = this.user.name;
        }
        if(formData.email == null || formData.email == '')
        {
            formData.email = this.user.email;
        }
        if(formData.password == null || formData.password == '')
        {
            formData.password = this.user.password;
        }
        if(formData.clickedValue == null)
        {
            formData.clickedValue = this.user.clickedValue;
        }

        let re = new RegExp(EMAIL_PATTERN);
        if(!re.test(formData.email))
        {
            console.log('invalid email')
            this.showMessage({
                text: 'Почта введена неверно',
                type: 'danger'
              });
    
            return;
        }

        console.log(formData)

        let newUser = new User(formData.email, this.user.password, formData.name, formData.clickedValue, this.user.id); 
        this.usersService.getUser(formData.email)
        .subscribe((user: User) => {
            if (user) {
                if(this.user.email !== user.email)
                {
                    console.log('already exist')
                    this.showMessage({
                        text: 'Пользователь с такой почтой уже существует',
                        type: 'danger'
                      });
                    return;
                }
            } 
            this.changeUser(newUser);
            this.saveChanges();
          });   
    }

    private changeUser(newUser: User)
    {
        const formData = this.form.value; 
        this.usersService.putUser(this.user.email, newUser);
    }

    private showMessage(message:Message){
        this.message = message;
        window.setTimeout(()=>{
            this.message.text ='';
        }, 5000);
      }
}
