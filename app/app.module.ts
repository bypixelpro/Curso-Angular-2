import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// My Modules
import { BienvenidaModule } from './bienvenida/bienvenida.module';
import { CourseModule } from './cursos/cursos.module';
import { NotFoundModule } from './404/not-found.module';

const appRoutes: Routes = [];

/**
 * Use Hash: true para cuando no esté activo el mod-rewrite enchufa # entre cadenas
 * Ojo al orden de carga de los módulos, si no no tira
 */
@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    BienvenidaModule,
    CourseModule,
    NotFoundModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }

