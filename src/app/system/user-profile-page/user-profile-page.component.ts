import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.css']
})
export class UserProfilePageComponent {
    userName = 'John Doe';
    userEmail = 'john.doe@example.com';
    editMode = false;
  
    toggleEditMode() {
      this.editMode = !this.editMode;
    }
  
    saveChanges() {
      // Implement logic to save changes to the backend (e.g., API call)
      this.toggleEditMode();
    }
  
    cancelEdit() {
      // Reset form fields or perform any necessary cleanup
      this.toggleEditMode();
    }
}
