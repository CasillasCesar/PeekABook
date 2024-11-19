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
  searchValue: string = '';

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
  baseRoute : string = this.auth ? '/in-home' : '/home';

  ngOnInit(): void {
    this.baseRoute = this.auth ? '/in-home' : '/home';

    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-home',
        routerLink: `${this.baseRoute}`,
      },
      {
        label: 'Catálogo',
        icon: 'pi pi-search',
        routerLink: `${this.baseRoute}/catalog`,
        items: [
          { label: 'Recientes', icon: 'pi pi-bolt', routerLink: `${this.baseRoute}/catalog/news` },
          { label: 'Ciencia y Tecnología', icon: 'pi pi-server', routerLink: `${this.baseRoute}/catalog/sci-ti` },
          { label: 'Historia', icon: 'pi pi-book', routerLink: `${this.baseRoute}/catalog/history` },
          { label: 'Arte y Cultura', icon: 'pi pi-palette', routerLink: `${this.baseRoute}/catalog/art` },
          { label: 'Ficción', icon: 'pi pi-star', routerLink: `${this.baseRoute}/catalog/fiction` },
          { label: 'Realismo Mágico', icon: 'pi pi-magic', routerLink: `${this.baseRoute}/catalog/magical-realism` },
          { label: 'Política y Distopía', icon: 'pi pi-exclamation-triangle', routerLink: `${this.baseRoute}/catalog/political-dystopian` },
          { label: 'Ciencia Ficción', icon: 'pi pi-rocket', routerLink: `${this.baseRoute}/catalog/science-fiction` },
          { label: 'Crecimiento Personal', icon: 'pi pi-user', routerLink: `${this.baseRoute}/catalog/coming-of-age` },
          { label: 'Romance', icon: 'pi pi-heart', routerLink: `${this.baseRoute}/catalog/romance` },
          { label: 'Aventura', icon: 'pi pi-compass', routerLink: `${this.baseRoute}/catalog/adventure` },
          { label: 'No Ficción', icon: 'pi pi-info-circle', routerLink: `${this.baseRoute}/catalog/non-fiction` },
        ],
      },
      {
        label: 'Sobre Nosotros',
        icon: 'pi pi-info-circle',
        routerLink: `${this.baseRoute}/about`,
      },
    ];

    if (this.auth) {
      this.items.push({
        label: 'Publicar Libro',
        icon: 'pi pi-pencil',
        routerLink: '/in-home/publish',
      });}
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
    this.router.navigateByUrl(`/${this.baseRoute}/${route}`);
  }

  buscar() {
    if (this.searchValue.trim()) {
      // Redirigir con la ruta correcta
      this.router.navigateByUrl(`/${this.baseRoute}/catalog/search/${this.searchValue}`);
      this.searchValue = "";
    } else {
      alert('Por favor ingresa un valor para buscar');
    }
  }
}
