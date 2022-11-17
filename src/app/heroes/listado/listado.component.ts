import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  heroes : string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitán América', 'Black Panter', 'Black Widow'];
  heroBorrado : string = '';
  borrarHero(){
    this.heroBorrado = this.heroes.pop() || '';
  }
}
