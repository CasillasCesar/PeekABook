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

  items: MenuItem[] = [];

  bread_items : MenuItem[] = [
    { label: 'Electronics' },
    { label: 'Computer' },
    { label: 'Accessories' },
    { label: 'Keyboard' },
    { label: 'Wireless' }
  ];

  home : MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.highlightActiveItem();
      });
  }

  ngOnInit(): void {
    const baseRoute = this.auth ? '/in-home' : '/home';

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: `${baseRoute}`,
      },
      {
        label: 'Catálogo',
        icon: 'pi pi-search',
        routerLink: `${baseRoute}/catalog`,
        items: [
          { label: 'Recientes', icon: 'pi pi-bolt', routerLink: `${baseRoute}/catalog/news` },
          { label: 'Ciencia y Tecnología', icon: 'pi pi-server', routerLink: `${baseRoute}/catalog/sci-ti` },
          { label: 'Historia', icon: 'pi pi-book', routerLink: `${baseRoute}/catalog/history` },
          { label: 'Arte y Cultura', icon: 'pi pi-palette', routerLink: `${baseRoute}/catalog/art` },
          { label: 'Ficción', icon: 'pi pi-star', routerLink: `${baseRoute}/catalog/fiction` },
          { label: 'Realismo Mágico', icon: 'pi pi-magic', routerLink: `${baseRoute}/catalog/magical-realism` },
          { label: 'Política y Distopía', icon: 'pi pi-exclamation-triangle', routerLink: `${baseRoute}/catalog/political-dystopian` },
          { label: 'Ciencia Ficción', icon: 'pi pi-rocket', routerLink: `${baseRoute}/catalog/science-fiction` },
          { label: 'Crecimiento Personal', icon: 'pi pi-user', routerLink: `${baseRoute}/catalog/coming-of-age` },
          { label: 'Romance', icon: 'pi pi-heart', routerLink: `${baseRoute}/catalog/romance` },
          { label: 'Aventura', icon: 'pi pi-compass', routerLink: `${baseRoute}/catalog/adventure` },
          { label: 'No Ficción', icon: 'pi pi-info-circle', routerLink: `${baseRoute}/catalog/non-fiction` },
        ],
      },
      {
        label: 'Sobre Nosotros',
        icon: 'pi pi-info-circle',
        routerLink: `${baseRoute}/about`,
      },
    ];
  }

  goHome(){
    const homeRoute = this.auth ? 'in-home' : 'home';
    this.router.navigateByUrl(`/${homeRoute}`);
  }

  highlightActiveItem() {
    const currentRoute = this.router.url;
    console.log("Current Route:", currentRoute);

    // Marcar el ítem activo en base a la ruta actual
    this.items.forEach(item => {
      item.styleClass = item.routerLink === currentRoute ? 'active-menu-item' : '';

      if (item.items) {
        item.items.forEach(subItem => {
          subItem.styleClass = subItem.routerLink === currentRoute ? 'active-menu-item' : '';
        });
      }
    });
  }

  move(route: string) {
    const baseRoute = this.auth ? 'in-home' : 'home';
    this.router.navigateByUrl(`/${baseRoute}/${route}`);
  }

  buscar(){

  }
}
