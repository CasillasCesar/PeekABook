import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  bread_items: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/home' };

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    // Escucha los cambios de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.bread_items = this.createBreadcrumbs(this.route.root);
      });

    // Inicializa el breadcrumb cuando se carga manualmente
    this.bread_items = this.createBreadcrumbs(this.route.root);
  }

  private createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: MenuItem[] = []): MenuItem[] {
    const children: ActivatedRoute[] = route.children;
    console.log(children[0]);

    if (children.length === 0) {
      return breadcrumbs;
    }

    const childRoute = children[0];
    const routeURL: string = childRoute.snapshot.url.map(segment => segment.path).join('/');

    if (routeURL !== '') {
      url += `/${routeURL}`;
    }

    const breadcrumbLabel = childRoute.snapshot.data['breadcrumb'];
    if (breadcrumbLabel) {
      breadcrumbs.push({
        label: breadcrumbLabel,
        routerLink: url
      });
    }

    return this.createBreadcrumbs(childRoute, url, breadcrumbs);
  }
}
