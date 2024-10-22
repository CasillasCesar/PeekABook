import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input('auth') auth: boolean = false;

  items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
    },
    {
      label: 'Features',
      icon: 'pi pi-star',
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Components',
          icon: 'pi pi-bolt',
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server',
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil',
        },
        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette',
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette',
            },
          ],
        },
      ],
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
    },
  ];

  bread_items : MenuItem[] = [
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' }
];

home : MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  constructor(private router : Router){

  }

  buscar(){
    alert("Hola")
  }

  goHome(){
    console.warn(this.auth);

    if(this.auth){
      this.router.navigateByUrl("in-home")
    }else{
      this.router.navigateByUrl("home")
    }
  }

}
