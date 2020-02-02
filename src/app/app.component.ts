import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-initiative-tracker';

  accessGranted:boolean = false


  onGrant() {
    console.log('parent granted')
    this.accessGranted = true
  }
}
