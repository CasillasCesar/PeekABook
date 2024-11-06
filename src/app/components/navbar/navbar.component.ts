import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input('auth') auth: boolean = false;

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/home',
    },
    {
      label: 'Features',
      icon: 'pi pi-star',
      routerLink: '/home/features',
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      routerLink: '/home/projects',
      items: [
        {
          label: 'Components',
          icon: 'pi pi-bolt',
          routerLink: '/home/projects/components',
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server',
          routerLink: '/home/projects/blocks',
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil',
          routerLink: '/home/projects/ui-kit',
        },
        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette',
              routerLink: '/home/projects/templates/apollo',
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette',
              routerLink: '/home/projects/templates/ultima',
            },
          ],
        },
      ],
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      routerLink: '/home/contact',
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


  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.highlightActiveItem();
    });
  }

  ngOnInit(): void {


  }

  buscar(){
    alert("Hola")
  }

  goHome(){
    console.log(this.auth);

    if(this.auth){
      this.router.navigateByUrl("in-home")
    }else{
      this.router.navigateByUrl("home")
    }
  }

  highlightActiveItem() {
    const currentRoute = this.router.url;
    console.log(currentRoute);

    this.items.forEach(item => {
      item.styleClass = item.routerLink === currentRoute ? 'active-menu-item' : '';

      // Verificar submenús
      if (item.items) {
        item.items.forEach(subItem => {
          subItem.styleClass = subItem.routerLink === currentRoute ? 'active-menu-item' : '';
        });
      }
    });
    if(currentRoute=="/home/content" || currentRoute=="/in-home/content")
      this.items[0].styleClass = 'active-menu-item'
  }

  move(route:string){
    this.router.navigateByUrl(`home/${route}`)
  }
}
