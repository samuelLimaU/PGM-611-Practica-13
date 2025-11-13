import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgregarPalabra } from './components/agregar.-palabra/agregar.-palabra';
import { ListaPalabras } from './components/lista.-palabras/lista.-palabras';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, AgregarPalabra, ListaPalabras],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  palabras: string[] = []; 

  agregarPalabraLista(palabra: string) {
    if (palabra.trim() !== '') {
      this.palabras.push(palabra);
    }
  }

    editarPalabra(index: number) {
    const nueva = prompt('Editar palabra:', this.palabras[index]);
    if (nueva !== null && nueva.trim() !== '') {
      this.palabras[index] = nueva.trim();
    }
  }

  eliminarPalabra(index: number) {
    if (confirm(`¿Seguro que deseas eliminar "${this.palabras[index]}"?`)) {
      this.palabras.splice(index, 1);
    }
  } 
}
