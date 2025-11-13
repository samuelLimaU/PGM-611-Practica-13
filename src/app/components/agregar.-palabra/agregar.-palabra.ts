import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-palabra',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agregar.-palabra.html',
  styleUrl: './agregar.-palabra.css',
})
export class AgregarPalabra {
  nuevaPalabra: string = '';

  @Output() palabraAgregada = new EventEmitter<string>();

  agregarPalabra() {
    if (this.nuevaPalabra.trim() !== '') {
      this.palabraAgregada.emit(this.nuevaPalabra.trim());
      this.nuevaPalabra = '';
    }
  }
}
