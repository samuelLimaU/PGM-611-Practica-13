import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-palabras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.-palabras.html',
  styleUrl: './lista.-palabras.css',
})
export class ListaPalabras {
  @Input() palabras: string[] = [];

  @Output() editar = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();

  onEditar(index: number) {
    this.editar.emit(index);
  }

  onEliminar(index: number) {
    this.eliminar.emit(index);
  }
}
