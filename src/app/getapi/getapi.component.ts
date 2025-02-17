import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getapi',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './getapi.component.html',
  styleUrls: ['./getapi.component.css'],
})
export class GetapiComponent implements OnInit {
  data: any[] = []; 

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(
      (response) => {
        this.data = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
