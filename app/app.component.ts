import { Component } from '@angular/core';

import {} from './bienvenida/bienvenida.component';

/**
 * Providers encargado de recuperar datos y pasar a sus hijos
 * Sin <base href="/"> nos da un error y no funciona bien el licado de los cursos
 */
@Component({
    selector: 'pm-app',
    template: `
        <div>
             <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <a class="navbar-brand">{{pageTitle}}</a>
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['/bienvenida']">Inicio</a></li>
                        <li><a [routerLink]="['/cursos']">Cursos</a></li>
                    </ul>
                </div>
            </nav>  
             <div class='container'>
                <router-outlet></router-outlet>
            </div>
        </div>
    `
})

export class AppComponent {
    pageTitle: string = "Archivos Pixelpro";
}