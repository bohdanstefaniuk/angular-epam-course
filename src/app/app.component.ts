import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { CartService } from './cart';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('appTitle', {static: false}) appTitleElement: ElementRef;
  title = 'shop';

  constructor(
    public cartService: CartService,
    public auth: AuthService
  ) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.appTitleElement.nativeElement.textContent = 'Apple shop';
  }
}
