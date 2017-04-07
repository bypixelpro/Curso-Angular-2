## TypeScript

__TypeScript__ es un lenguaje open source desarrollado por _Microsoft_.
Es un superconjunto de _JavaScript_, que esencialmente añade tipado estático y objetos basados en clases.
__TypeScript__ puede ser usado para desarrollar aplicaciones _JavaScript_ que se ejecutará en el lado del servidor _(NodeJs)_.

Cualquier código de _JavaScript_ funciona sin problemas con __TypeScript__ y soporta las últimas versiones de _ECMAScript 2015 (ES6)_ como la mejora sintáctica de las clases sobre la herencia basada en prototipos y mucho más;

## Angular 2

__Angular 2__ es framework para aplicaciones web de __TypeScript__ de código abierto, mantenido por __Google__.
Su objetivo es aumentar las aplicaciones basadas en navegador con capacidad Modulo Vista Controlador _(MVC)_.

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

5. __Módulos__

    En la versión __ES5__ si no utilizábamos librearías o frameworks de __JavaScript__ para este propósito como __RequireJS__, __Definicón de Módulos Asíncronos (AMD)__, no había forma de utilizar el sistema de módulos con lo que esto es una nueva gran incorporación en __ES6__.
    Los módulos nos permiten exportar/importar objetos, funciones y clases desde el código, sin tener que importarlos desde HTML;
    
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
 
## Anatomía de Angular 2

La estructuración de un proyecto en __Angular 2__ funciona en base al __Modelo Vista Controlador (MVC)__:
1. __SERVICIOS__ Toda la lógica de la aplicación por ejemplo el manejo de datos. _(MODELO)_. 
2. __HTML__ _(Plantillas HTML)_ que corresponde con la Vista y la parte pública con la que interactuan los clientes: _(VISTA)_.
3. __COMPONENTES__ que son los encargados de genstionar las plantillas de __HTML__: _(CONTROLADOR)_.

A continuación voy a detallar un poco la anatomía de Angular 2:

### Módulos
Un módulo es un conjunto de código dedicado a cumplir un único propósito. Separando por ejemplo la funcionalidad de cada página en módulos independientes vamos a cargar en cada momento justo lo que necesitamos con los que nuestro proyecto va a cargar más rápido y por supuesto va a ser mucho más manejable a la hora de extenderlo o mantenerlo.

Ya hablamos de ello en las novedades de __ES6__ en el ejemplo:
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

Angular 2 trabaja en base a esta premisa y tiene un móntón de módulos preparados para reutilizarlos en cualquier momento como por ejemplo:
* @angular/core
* @angular/platform-browse
* @angular/forms
* @angular/router
* @angular/common

Aunque existe muchas más.

A continuación ejemplo de importación de un módulo de __Angular 2__

```
import { NgModule } from '@angular/core';
```

### COMPONENTE

El componente se encarga de manejar todo lo que pasa en la vista __(HTML)__ y cada __Vista__ _(Plantilla HTML)_ tendría que tener su propio componente.

Vamos con algún ejemplo antes de empezar a escribir algo de código:

Imageinar que tenemos lo siguiente en una carpeta que se llama __bienvenida__:

1. Un archivo llamado _bienvenida.component.html_ y dentro de este archivo

```
<h1>{{title}}</h1>
```

2. Otro archvio llamado _bienvenida.component.ts_, ya sabéis que esto es un archvio de __TypeScript__ y que __NodeJs__ va a compilar en __JavaScript__ de manera automática.
Dentro de este nos encontraremos con algo parecido a esto:

```
import { Component } from '@angular/core';

@Component({
    templateUrl: 'app/bienvenida/bienvenida.component.html'
})

export class bienVenidaComponent {
    public title: string = 'Bienvenidos';
}
```

Lo que hacemos en el contralador es:
1. Cargamos el módulo principal de Angular 2.
2. Utilizamos una función decoradora que registra el componente
3. La clase se encarga de manejar todo lo que pasa en el HTML, _(en este ejemplo reemplaza {{tittle}} por el valor que hemos puesto en la clase "Bienvenidos")_.

Esto es una descripción muy simplificada del funcionamiento de cada una de las partes, más adelante aprenderemos como implementar cada nueva funcionalidad en nuestro proyecto así como los enrutadores y todas las opciones disponibles en cada uno de los elementos.


