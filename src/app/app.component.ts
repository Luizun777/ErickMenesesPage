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
    localStorage.setItem('carrito', JSON.stringify([]));
  }
}
