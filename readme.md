1) Open a command prompt in the project's root directory (APM)

2) Type: `npm install`
    This installs the dependencies as defined in the package.json file.
    
3) Type: `npm start`
    This launches the TypeScript compiler (tsc) to compile the application and wait for changes. 
    It also starts the lite-server and launches the browser to run the application.

## Anatomía de Angular 2

Angular se compone de los siguientes bloques:
1. __Módulos__
2. __Componente__
3. __Templates__
4. __Metadatos__
5. __Data Binding__
6. __Servicio__
7. __Injectables__
8. __Dependency Injection__

### Introducción a Angular

Angular 2 es un framework que se ha hecho completamente desde cero y que no es compatible con la versión 1, además trabaja estrechamente con __TypeScript__ con lo que nos permiten trabajar con las últimas especificaciones de __EcmaScript 2015__ (ES6) y además podemos __tipar__ nuestro __JavaScript__ aportando mucha estabilidad a nuestros proyectos y evitando muchos errores y quebraderos de cabeza futuros.

Lo primero comentar es que __TypeScript__ compila directamente en __JavaScript__ y es un lenguaje de  alto nivel e implementa los típicos paradaigmas de la programación como por ejemplo la programación orientada a objetos con __clases__ que viene pisando fuerte en las nuevas versiones de __ES6__ respecto a la programación orientada a prototipos de la versión __ES5__ y todo el típico sistema de herencias como por ejemplo las __interfaces__ otras muchas cosas que nos van a ayudar en nuestros desarrollos que explicaremos brevemente más adelante.

Como __compila en JavaScript nativo__ va a ser altamente compatible por ejemplo con la mayoría de __navegadores web__, applicaiones móbiles como __PhoneGup__ o incluso con aplicaciones de escritorio como __Electron__.

Otra de la ventajas de __TypeScript__ es que se parece mucho a __JavaScript__ con lo que la gente que ya conoce el lenguaje no va a tener ningún problema con el lenguaje ya que la curva de aprendizaje es muy pequeña, y podemos utilizarlo en cualquier proyecto.

Respecto a __Angular 2__ hay que conocer exáctametne cuando utilizar este Framework.

1. Mejora la productividad sobre todo si trabajamos en equipo con otros diesñadores y programadores ya que utiliza el __MVW__ (Module -> Vista -> Whateaver) con lo que el código siempre queda organizado.
Cabe mencionar que el __MVW__ como lo definen como lo describen los creadores de este framework es muy similar al __MVC__ (Module -> Vista -> Controlador) solo que tiene algunas características propias como por ejemple pasar información directamente del modelo a la vista saltádose el controlador (en este caso componente) por ejemplo, de ahí el nombre __MVW__.

2. Al utilizar __TypeScript__ tenemos un código mucho __más estable__ que con __JavaScript nativo__, además de las incorporaciones más recientes de __ES6 y ES7__ con todas las ventajas que esto conlleva, y como punto fuerte no ayuda a manejar los errores de programación de una forma mucho más temprana con lo que la calidad de nuestro software mejora sustancialmente respecto a __JavaScript Nativo__.

3. __Open Source__ compeletamente gratis os lo podéis descargar desde la página de github y la comunidad de desarrolladores de __Angular 2__ va creciendo a un ritmo imparable, además este proyecto está respaldado por __Google__ y en esta versión por fín tenemos una versión estable con lo que tenemos una herramienta que solo va a ir a más, además cada vez es más demandado por empresas con lo que va a mejorar mucho nuestro curriculum a la hora de buscar trabajo con sueldos competitivos.

Anque no todo son ventajas, hay algunas cosas que hay que tener presente.

1. De base Angular 2 no se entiende bien con el __SEO__ ya que el __pintado del HTML (DOM)__ lo hace el cliente __(JavaScript del navegador)__ y no el servidor con lo que cuando pasen los spiders de Google se van a encontrar solo con un index prácitcamente sin contenido, que no cunda el pánico, si te está preguntando si entonces no lo vas a poder utilizar por ejemplo en una página web la respuesta es __Sí__ pero con peros.
__Angular 2__ se ha hecho global con lo que puedes utilziarlo por ejemplo con __NodeJs__ que es __JavaScript__ del lado del servidor para pre-renderizar el html inicial y corregir este problema.

2. La curva de aprendizaje para utilizar __Angular 2__ sobre todo si no se conoce previamente __JavaScript__.

## TypeScript

__TypeScript__ es un lenguaje open source desarrollado por _Microsoft_.
Es un superconjunto de _JavaScript_, que esencialmente añade tipado estático y objetos basados en clases.
__TypeScript__ puede ser usado para desarrollar aplicaciones _JavaScript_ que se ejecutará en el lado del servidor _(NodeJs)_.

Cualquier código de _JavaScript_ funciona sin problemas con __TypeScript__ y soporta las últimas versiones de _ECMAScript 2015 (ES6)_ como la mejora sintáctica de las clases sobre la herencia basada en prototipos y mucho más;

## Novedades ECMAScript 2015 (ES6)

Como ya comentamos __ES6__ añade muchas funcionalidades muy demandadas por los desarrolladores y __TypeScript__ las soporta una vez compilado a __JavaScript__ en el lado del servidor por __NodeJS__, este traduce todo el código que escribamos con está última versión a la versión anterior para objtener la mayor compatiblidad con todos los navegadores y asegurarnos de que todo funciona correctamente.

A continuación voy ha hacer un repaso de las principales novedades que vamos a utilizar contantemente a lo largo del curso.

1. Variable __let__:
    La variable __let__ a diferencia de la variable __var__ no puede ser accedsible más allá de su scope.
    A continuación vamos a ver algunos ejemplos:
    
    ```
    // Case 1
    
    var saluda = 'Hola Dani';
    var check = true;
    if(check) {
      let saluda = 'Hola alumnos de Pixelpro';
    }
    
    console.info(saluda);
    
    // Case 2
    
    var global = 'Esto es una variable Global';
    var testsVaras = function() {
      var check = true;
      if (check) {
        let local = 'Esto es una variable local, solo funciona dentro del if.';
      }
    };
    
    testsVaras();
    console.info(global);
    console.info(check);
    console.info(local);   
    ```
    
2. __Parámetros por defecto__
    Por fín podemos utilizar parámetros por defecto en los __métodos__ y functiones.
    
    ```
    function parameters(obligatorio, param1 = 1, param2 = 2) {
        console.log('Valor parámetro 1 = ' + param1 + ' ,valor parámetro 2 = ' + param2 + ' y el valor obligatorio es = ' + obligatorio );
    }
    
    console.info(parameters('Soy Obligatorio') );
    ```
    
3. __Arrow__
    Con esto conseguimos simplificar mucho el código
     ```
    // ES6
    function PersonaES5() {
      var $this = this;
      $this.edad = 0;
    
      setInterval(function() {
        $this.edad++;
        console.warn('ES5: ' + $this.edad);
      }, 1000);
    }
    // ES6
    function PersonaES6(){
      let $this = this;
      $this.edad = 0;
    
      setInterval(() => {
        $this.edad++; // |this| apunta al objeto Persona
        console.warn('ES6: ' + $this.edad);
      }, 1000);
    }
    
    new PersonaES5();
    new PersonaES6();
    
    // Ejemplo 2
    // ES5
    var multiES5 = function(a, b) {
      return a * b;
    };
    // ES6
    let multiES6 = (a, b) => a * b;
    
    console.info(multiES5(2, 2));
    console.info(multiES6(2, 2));
    
    // Ejample 3
    // ES5
    var saludo = function(saludo, check){
      if(check) {
        return 'Hola ' + saludo;
      }
    };
    
    console.log(saludo('Dani', true));
    
    // ES6
    let saludo = (saludo, check = true) => {
      if(check) {
        return 'Hola ' + saludo;
      }
    };
    console.log(saludo('Dani'));
    ```
    
4. __Classes__

    En la versión __ES5__ utilizamos Programación orientada a prototipos mientras que en la nueva versión _ES6_ ya por fín se utilizan clases y su correspondiente herencia, no hace falta mencionar que con la programación orientada a objetos que utilizan las clases se escribe mucho menos código y sobre todo este es mucho más legible y manejable.
    
    1. La programación basada ​​en prototipos es un estilo de programación orientada a objetos en la que las clases no están presentes y la reutilización de comportamiento (conocido como herencia en lenguajes basados ​​en clases) se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos. Este modelo también se conoce como programación sin clases, orientada a prototipos o basada en ejemplos.
    
    2. La programación orientada a objetos es un paradigma de programación que utiliza la abstracción para crear modelos basados ​​en el mundo real. Utiliza diversas técnicas de paradigmas previamente establecidas, incluyendo la modularidad, polimorfismo y encapsulamiento. Hoy en día, muchos lenguajes de programación (como Java, JavaScript, C#, C++, Python, PHP, Ruby y Objective-C) soportan programación orientada a objetos (POO).

### Componentes

Los __Componentes__ se encargan de manejar una vista *(Plantillas de HTML)*.

Son la principal forma para construir y especificar los elementos y la lógica de una plantilla.

Un componente __siempre__ está emparejado con una __plantilla__ y utiliza la función decoradora __@Component({})__, a continuación ponemos un ejemplo:
```
import { Component, OnInit }  from '@angular/core';

import { ICourse } from './product';
import { CourseService } from './product.service';

@Component({
    templateUrl: 'app/courses/courses-list.component.html',
    styleUrls: ['app/courses/courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
}
```
Voy ha hacer una breve descripción de qué es y para que se utilizan las funciones decoradoras:

Son una implementación de un patrón de diseño de software que que sirve para extender la funcionalidad de otra función, método o clase pero sin modificar la funcionalidad original que se está extendiendo. El decorador recibe la información en forma de parámetros y devuelve la función original con los añadidos que hemos extendido con la función decoradora.

A estos __parámetros__ los llamamos __metadatos__.

Es importante mencionar que todavía no ha sido implementado de base en la versión de __ES6__ pero que si está implementado en __TypScript__.

### Directivas

__Angular__ carga el html de manera dinámica en funcíon de las instrucciones que reciban en las directivas.

Las directivas son como los componentes pero sin asociar un template.

Hay varios tipos de deirectivas:

1. __Estructurales__ que se encargan de alterar la disposición de __DOM__ y añaden sustituyen o eleminan elementos.
  Los principales ejemplos de directiva     estructurales son:
    1. __*ngFor__: sirve para iterar de manera recursiva sobre un elemento del tipo objeto o __array__ como por ejemplo un array que contiene las opciones __(key, val)__ de un ```<select>```
    Ejemplo:
    ```
    <select *ngFor='let product of products | productFilter:listFilter'>
        <option [value]='product.val'>{{product.name}}</option>
    </select>
    ```
    2. __*ngIf__: sive para crear o eliminar una parte del __DOM__ en función de la expresión evaluada.
    Ejemplo:
    ```
    <div ng-if="expression">Hola</div>
    ```
2. __Atributo__ se encargan de modificar el aspecto do comportamiento de un elemento DOM. Se utilizan para manejar información de manera bidireccional.
  Los principales son:
    1. __ngSwitch__ es similar a __ngIF__ y funciona de manera similar al switch condicional en programación, ejemplo:
      ```
       <div ng-switch    on="valor">
          <div ng-switch-when="A">Es texto y sólo está si hay una A</div>
          <div ng-switch-when="B">Texto para el valor B</div>
          <div ng-switch-default>Texto para cuando no es ni A ni B</div>
      </div>
      ```
      2. __ngClass__ sirve para añadir varias clases a un elemento de forma dinámica, ejemplo:
      
      *HTML:*
      ```
      <div [ngClass]="setTodoClasses()">Cambia al hacer click!.</div>
      ```
      
      *En la calse del componente escribiríamos un nuevo método como por ejemplo:*
      ```
      setTodoClasses(){
          let classes = {
              pending: !this.isDone,      //true
              done: this.isDone,          //false
              important: this.isImportant //true
          };
          return classes;
      }
      ```
      3. __ngStyle__ funciona como __ngClass__ pero sirve para añadir css en línea.
      
      ```
      <!-- En HTML -->
      <div [ngStyle]="setInlineStyles()"></div>
      ```
      
      *En la calse del componente escribiríamos un nuevo método como por ejemplo:*
      
      ```
      setInlineStyles(){
          let styles= {
              'color': this.isDone ? 'red' : 'white',
              'font-weight': this.isImportant ? '600' : 'normal',
          };
          return styles;
      }
      ```

### Pipes

Los __pipes__ en __Angular 2__ equivalen a los __filtros__ en la primera versión del mismo y siven para alterar la forma en la que se van a visualizar los datos, como ejemplo sirven para formatear fechas, json, porcentajes, formato de monedas, funciones pra trabajar con elementos del tipo array como join etc.
Algunos ejemplos: 
```
<p>{{ array | join: '_' }}</p>
<p>{{ lowername | uppercase }}</p>
<p>{{ uppername | lowercase }}</p>
<p>{{ price | percent:'.2' }}</p>
<p>{{ price | currency: 'EUR' }}</p>
<p>{{ price | percent }}</p>
<p>{{ object | json }}</p>
<p>{{ date  | date:'mediumDate' }}</p>

```

Por supuesto también podemos hacer nuestros propios pipes como se muestra en el siguiente ejemplo:

__Pipe:__

```
import { PipeTransform, Pipe } from '@angular/core';

import { ICourses } from './courses';

// Función decoradora que se mete en el for del HTML *ngFor='let course of courses | CourseFilter:listFilter'
// listFilter es la información del usuario y que teníamos vinculado con el componente listFilter: string = '';
@Pipe({
    name: 'CourseFilter'
})

/**
 * Tuberías para pasar infromación
 */
export class courseFilterPipe implements PipeTransform {

    transform(value: ICourses[], filterBy: string): ICourses[] {
        filterBy = filterBy ? filterBy.toLowerCase() : null;
        // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter para el filtro
        return filterBy ? value.filter(
            (course: ICourses) => course.courseName.toLowerCase().indexOf(filterBy) !== -1 || course.author.toLowerCase().indexOf(filterBy) !== -1 || course.courseCode.toLowerCase().indexOf(filterBy) !== -1) 
            : value;
    }

}
```

__Componente__

```
export class CoursesListComponent extends OnInit {
    listFilter: string;
    ...
```

__Explicación__:

__listFilter__ estaría en el componente que recoge el __pipe__ y quedan vinculados como se muestra en el ejemplo __CourseFilter:listFilter__, en el HTML quedaría de la siguiente manera:

__[(ngModel)]="listFilter" />__ indicamos que es una tubería de doble sentido que conecta bidireccionalmente el HTML con el parámetro de componente cuando escribimos sobre el control.

__{{listFilter}}__ pintamos lo que vallamos escribiendo directamente en la variable.

__<tr *ngFor='let course of courses | CourseFilter:listFilter'>__ obtenemos resultados en base a el valor que hayamos escrito en el control y lo cotejamos con los datos recibidos en el servicio utilizando una __directiva de atributo__.



### Módulos

En la versión __ES5__ si no utilizábamos librearías o frameworks de __JavaScript__ para este propósito como __RequireJS__, Definicón de __Módulos Asíncronos (AMD)__, no había forma de utilizar el sistema de módulos con lo que esto es una nueva gran incorporación en __ES6__. Los módulos nos permiten exportar/importar objetos, funciones y clases desde el código, sin tener que importarlos desde HTML;


Un módulo es un conjunto de código dedicado a cumplir un único propósito. Separando por ejemplo la funcionalidad de cada página en módulos independientes vamos a cargar en cada momento justo lo que necesitamos con los que nuestro proyecto va a cargar más rápido y por supuesto va a ser mucho más manejable a la hora de extenderlo o mantenerlo.

Ya hablamos de ello en las novedades de ES6 en el ejemplo:

```
// ES6
// lib/utils.js
module "utils" {
    export function saludo(nombre){
        console.log("Hola! " + name);
    }
}

// ES6
// app.js
import { saludo } from "utils";
var app = {
    bienVenida: function(){
        saludo("Dani");
    }
}
export app;
```

Angular 2 trabaja en base a esta premisa y tiene un móntón de librerías preparados para reutilizarlos en cualquier momento desde node_modules y que hemos instalado previamente con el comando en la __Consola/Terminal__ con  __npm install__ y nuestro archivo __package.json__ como por ejemplo:

@angular/core
@angular/platform-browse
@angular/forms
@angular/router
@angular/common
Aunque existe muchas más.

A continuación ejemplo de importación de un módulo de Angular 2

```
import { NgModule } from '@angular/core';
```

__Angular__ utiliza un módulo principal que se encarga de cargar la configuración y de cargar todas las dependencias de nuestra app todo y se llama __app.module.ts__.

Un ejemplo de los que nos podemos encontrar en este archivo sería:

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
```
__imports:__ sirve para cargar módulos dentro del módulo en el que estamos trabajando.

__exports:__ sirve para exportar componentes, directivas o pipes a otros módulos, __no__ se pueden exportar __servicios__, estos deben estar instanciados en el __en el módulo __ que corresponda.

__declarations:__ sirve para cargar componentes, directivas o pipes (nuestras clases exportadas) que se van a encargar de manerjar los templates del módulo que estamos utilizando.

__provider__ sirve para cargar todos los servicios de este módulo.

__bootstrap__ sirve para cargar el componente principal y que inserta la información en el index.html

__Modulos compartidos__ podemos crear módulos que pueden extender su funcionalidad a otros módulos. Instanciaresmos dichos módulo en el apartado __imports__ del módulo que queramos que herede del módulo compartido. El módulo compartido además deberá especificar que partes del mismo quiere compartir, ejemplo:

*Módulo compartido*

```
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// Component
import { StarComponent } from './star.component'

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        StarComponent
    ],
    declarations: [
        StarComponent
    ]
}) 

export class SharedModule {}
```

*Módulo que hereda*

```
@NgModule({
    declarations: [
        CoursesListComponent,
        CourseDetailComponent,
        CourseFilterPipe
    ],
    imports: [
        // Módulo Compartido
        SharedModule,
        RouterModule.forChild(appRoutes)
    ],
    providers: [
        CourseGuardService,
        CourseService
    ]
})
```

### Templates
Los templates son la parte pubíca con la que el cliente va a interactuar, podríamos decir que es HTML enriquecido que se va a cargar de manera dinámica bajos el control de __Angular 2__.
Un ejemplo muy básico sería:
```
<div>
  Hola mi nombre {{name}}y vivo en {{location}}
</div>
```
Hay varias maneras en las que __Angular 2__ trabaja con las plantillas:
1. __Renderizado__ que se encarga de reemplazar una variable *{{name}}* por un valor que tengamos espcificado en un componente y se suele utilizar para valores estáticos.
2. __Manejo de eventos__ sirve para la utilización de eventos, por ejemplo, cuando hacemos click en una etiqueta se llama a un método de la clase de nuestro componente y se especifica con *()*, como por ejemplo ```<my-component (click)="onClick($event)"></my-component>```
3. __Propiedades vinculantes__ sirve para enlazar una variable con un componente y va a quedar sincronizado, es decir, si la variable cambia de manera dinámica en el componente también lo hará en la plantilla. Se especifica con *[]* y como ejemplo ```<audio [volume]="currentVolume"></audio>``` 
4. __Vinculación de datos en dos vías__ combina el menejo de eventos y las propiedades vinculantes *(puntos 2 y 3)* y se especifica con *[()]* y como ejemplo ```<input [(ngModel)]="myName">```.
5. __Directivas__ ya explicamos que son y para que se usan las directivas y para especificarlo en la plantilla utilizamos el asterisco como ejemplo ```<my-component *ngFor="let course of coursess"></my-component>```

### Metadatos
Sirven para configurar y especificar la funcionalidad de la función __decoradora__, por ejemplo de un componente.
Ejemplo:
```
@Component({
  moduleId: module.id,
  selector: 'test-angular2-app',
  templateUrl: 'test-angular2.component.html',
  styleUrls: ['test-angular2.component.css']
})
```

En este ejemplo utilizamos:
1. __moduleId__ es una propiedad que se encarga de obtener la url relativa a el componente con el que estamos trabajando.
2. __selector__ es el nombre de la etiqueta que vamos a crear cuando se procese el componente y que va a buscar dentro de la plantilla html asociada a dicho componente.
3. __templateUrl__ es la url al archvivo de la plantilla html asociada a el componente que estamos utilizando
4. __styleUrls__ es la url al css que utiliza solo  la plantilla asociada con el componente que estamos utilizando.

### Permisos para acceder a partes de nuestros desarrollos
1. __CanLoad__: Es una interface que se encarga de checkear permisos para cargar una determinada parte de la funcionalidad.

```
class UserToken {}
class Permissions {
  canLoadChildren(user: UserToken, id: string): boolean {
    return true;
  }
}
@Injectable()
class CanLoadTeamSection implements CanLoad {
  constructor(private permissions: Permissions, private currentUser: UserToken) {}
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.permissions.canLoadChildren(this.currentUser, route);
  }
}
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'team/:id',
        component: TeamCmp,
        loadChildren: 'team.js',
        canLoad: [CanLoadTeamSection]
      }
    ])
  ],
  providers: [CanLoadTeamSection, UserToken, Permissions]
})
class AppModule {}
```

2. __CanActivate__ se encarga de activar una __ruta__ si ha permisos para hacerlo.
```
class UserToken {}
class Permissions {
  canActivate(user: UserToken, id: string): boolean {
    return true;
  }
}
@Injectable()
class CanActivateTeam implements CanActivate {
  constructor(private permissions: Permissions, private currentUser: UserToken) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return this.permissions.canActivate(this.currentUser, route.params.id);
  }
}
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'team/:id',
        component: TeamCmp,
        canActivate: [CanActivateTeam]
      }
    ])
  ],
  providers: [CanActivateTeam, UserToken, Permissions]
})
class AppModule {}

```
3. __CanDeActivate__ se encarga de desactivar una __ruta__ si hay permisos para hacerlo.
```
class UserToken {}
class Permissions {
  canDeactivate(user: UserToken, id: string): boolean {
    return true;
  }
}
@Injectable()
class CanDeactivateTeam implements CanDeactivate<TeamComponent> {
  constructor(private permissions: Permissions, private currentUser: UserToken) {}
  canDeactivate(
    component: TeamComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    return this.permissions.canDeactivate(this.currentUser, route.params.id);
  }
}
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'team/:id',
        component: TeamCmp,
        canDeactivate: [CanDeactivateTeam]
      }
    ])
  ],
  providers: [CanDeactivateTeam, UserToken, Permissions]
})
class AppModule {}

```

4. __Resolve__ se encarga de dar pemisos para obtener datos de un servicio si hay permisos para hacerlo.

```
class Backend {
  fetchTeam(id: string) {
    return 'someTeam';
  }
}
@Injectable()
class TeamResolver implements Resolve<Team> {
  constructor(private backend: Backend) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.backend.fetchTeam(route.params.id);
  }
}
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'team/:id',
        component: TeamCmp,
        resolve: {
          team: TeamResolver
        }
      }
    ])
  ],
  providers: [TeamResolver]
})
class AppModule {}

```

### Servicios

Los servicios en Angular 2 son clases que básicamente funcionan como un modulo y proveen toda la lógica de negocios al componente, por ejemplo recuperando y actualizando toda la información de las tablas de una base de datos y pasándosela a el componente.

También es el encargado de validar los tipos de datos por ejemplo en un formulario y de loguear en la consola todo lo que ocurre en nuestra aplicación por ejemplo la obtención de errores.

#### Injectables

La función decoradora __@Injectable__ nos permite inyectar dependencias en diferentes componentes a través de nuestras aplicaciones, sin necesidad de conocer, como se crean esas dependencias, además informa al servicio de que estamos insertando otros servicios a nuestro servicio, aunque no sea el caso es aconsejable ponerlo siempre, para evitar posibles errores y dejarlo preparado por si queremos escalar nuestro servicio.

*Injector -> Proveedor -> Objecto*

*Servicio*

```
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { ICourses } from './courses';

@Injectable()
/**
 * Servicio
 */
export class CourseService {

    /**
     * Aquí llamamos a nuestro php o lenguage del lado del servidor
     */
    private _courseUrl = 'api/courses/course.json';

    constructor(private _http: Http) {}

    getCourses() : Observable<ICourses[]> {
        return this._http.get(this._courseUrl)
        .map((response: Response) => <ICourses[]> response.json())
        .do(data => console.log(data))
        .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Error del servidor');
    }
}

```

*Componente*

```
// Cargamos todo lo que necesitamos para este componente
import { Component, OnInit } from '@angular/core';

// Nuestro componente
import { ICourses } from './courses';
import { CourseService } from './courses-service';

/**
 * Función decoradora
 * Nombre selector
 * URL HTML 
 * Hojas de estilos
 */
@Component({
    moduleId: module.id, // Coge la raiz de la carpeta del componente app/courses/ con esto lo quitamos en las rutas absolutas
    templateUrl: 'courses-list.compoment.html',
    styleUrls: ['courses-list.component.css']
})

/**
 * Clase que maneja el componente
 * Metemos una interface para validar que el json tiene los nombres correctos
 * Extendemos con clase del core que inicia y destruye cuando corresponda
 */
export class CoursesListComponent extends OnInit {
    listFilter: string;
    courses: ICourses[];
    errorMessage: string;

    constructor(private _courseService: CourseService)  {
        super();     
    }

    /**
     * Se carga antes de ejecutar cualquier cosa de angular, genial para cargar datos
     */
    ngOnInit() : void {
        this._courseService.getCourses()
        .subscribe(
           courses => this.courses = courses,
           error => this.errorMessage = <any>error
        );
    }
}
```

La función decoradora __@Inject__ y los metadatos de configuración se une a la __CourseService__, así que básicamente  le indicamos al proveedor que el primer parámetro del constructor es una clase que se llama ___http__.

### Data Binding

Con __Angular 2__ podemos sincronizar el modelo y la vista automáticamente utilizando ciertas directive, (ng-model por ejemplo). Esta sincronización es bidireccional, es decir, la información se sincroniza tanto si cambia el valor en la vista como si lo hace el valor en el modelo. 

