import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from '../app.component'

@Component({
  selector: 'tracker-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {

  @Output() access = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  grantAccess() {
    console.log('child granted')
    this.access.emit(true)
  }
}
