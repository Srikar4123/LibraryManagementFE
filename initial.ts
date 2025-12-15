import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-initial',
  imports: [FormsModule],
  templateUrl: './initial.html',
  styleUrls: ['./initial.css'],
  standalone: true
  
})
export class Initial { 
  goToAdminLogin() {
  console.log("Admin Login Clicked");
}

goToUserLogin() {
  console.log("User Login Clicked");
}
  email= '';
  password= '';

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
  } 

}

