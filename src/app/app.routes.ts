import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
    },
    {
        path: 'catalogo',
        loadComponent: () => import('./pages/store/store.component').then(m => m.StoreComponent)
    },
    {
        path: 'promociones',
        loadComponent: () => import('./pages/promotions/promotions.component').then(m => m.PromotionsComponent)
    },
    {
        path: 'blog',
        loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent)
    },
    {
        path: 'blog-detail/:id',
        loadComponent: () => import('./pages/blog-detail/blog-detail.component').then(m => m.BlogDetailComponent)
    },
    {
        path: 'contacto',
        loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent)
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];
