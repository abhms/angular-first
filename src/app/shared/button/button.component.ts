import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import this

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  template: `<button [ngClass]="'btn btn-' + color">{{ label }}</button>`,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() color: string = 'primary';
}
