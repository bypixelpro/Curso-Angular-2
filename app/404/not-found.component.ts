import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    templateUrl: 'not-found.component.html'
})

export class NotFoundComponent {
    headerText: string = 'Error 404';
    notFoundMsg: string = 'La página que estás buscando no existe, por favor, prueba con las siguientes direcciones:'; 
}