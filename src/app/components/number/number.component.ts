import { Component, input } from '@angular/core';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [],
  templateUrl: './number.component.html',
  styleUrl: './number.component.scss',
})
export class NumberComponent {
  phoneNumber = input.required<string>();
}
