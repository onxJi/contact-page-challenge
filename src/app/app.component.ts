import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InputTextComponent } from './shared/input-text/input-text.component';
import { ComboBoxComponent } from './shared/combo-box/combo-box.component';
import { TextBoxComponent } from './shared/text-box/text-box.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, InputTextComponent, ComboBoxComponent, TextBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contact-page-challenge';
}
