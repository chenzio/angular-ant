import { Component } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent {
  model = {
    title: 'A Demo',
    width: 200,
    items: [{
      label: 'Dashboard',
      iconType: 'dashboard',
      router: ['dashboard']
    },{
      label: 'Photos',
      iconType: 'laptop',
      router: ['photos']
    },{
      label: 'other',
      iconType: 'user',
      router: ['other']
    }]

  }
}
