import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
        <h1>{{ title }}</h1>
        <h3>La base es: {{ base }}</h3>
        <button (click)="acomular( base )"> + {{ base }} </button>
        <span> {{ numero }} </span>
        <button (click)=" acomular( - base ) "> - {{ base}} </button>
    `
})
export class ContadorComponent {
    title = 'Contador App';
    numero:number = 10;
    base: number = 5;
  
  
    acomular(valor:number){
      this.numero += valor;
    }
}