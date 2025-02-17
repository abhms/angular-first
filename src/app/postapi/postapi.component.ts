import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Product {
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-postapi',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './postapi.component.html',
  styleUrls: ['./postapi.component.css'],
})
export class PostapiComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.productForm = this.fb.group({
      title: [''],
      price: [''],
      description: [''],
      image: [''],
      category: [''],
    });
  }

  submitForm() {
    if (this.productForm.valid) {
      const formData: Product = this.productForm.value;
      console.log('Submitting Data:', formData);

      this.http.post<Product>('https://fakestoreapi.com/products', formData).subscribe(
        (response) => {
          console.log('Product Added Successfully:', response);
        },
        (error) => {
          console.error('Error submitting product:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
