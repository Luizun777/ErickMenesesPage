import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ErickMeneses';

  constructor() { }

  ngOnInit(): void {
    JSON.parse(localStorage.getItem('carrito')) ? null : localStorage.setItem('carrito', JSON.stringify([]));
  }
}
