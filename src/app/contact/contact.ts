import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtonComponent],  // ✅ Import the button component here
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
})
export class ContactComponent {
  constructor(private router: Router) {}

  goToHome() {
    this.router.navigateByUrl('/home');
  }
}
