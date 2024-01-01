import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [],
  templateUrl: './input-text.component.html',
  styleUrl: './input-text.component.css'
})
export class InputTextComponent {
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() value: string = '';
}
