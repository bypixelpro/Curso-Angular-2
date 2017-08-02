import { Component } from "@angular/core";

@Component({
    selector: 'app-bienvenida',
    moduleId: module.id,
    templateUrl: 'bienvenida.component.html'
})

export class BienvenidaComponent {
    public pageTitle: string = 'Bienvenid@ al curso de Angular 2 por Pixelpro';
}