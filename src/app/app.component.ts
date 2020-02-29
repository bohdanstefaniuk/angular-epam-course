import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle', {static: false}) appTitleElement: ElementRef;
  title = 'shop';

  ngAfterViewInit(): void {
    this.appTitleElement.nativeElement.textContent = 'Apple shop';
  }
}
