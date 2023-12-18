import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {
  menuItems = [
    { label: 'Home', route: '/' },
    {
      label: 'Products',
      children: [
        { label: 'Category 1', route: '/category1' },
        { label: 'Category 2', route: '/category2' }
      ]
    },
    { label: 'About', route: '/about' }
  ];
}