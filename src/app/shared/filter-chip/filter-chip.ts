import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-filter-chip',
  standalone: true,
  templateUrl: './filter-chip.html',
})
export class FilterChipComponent {

  label = input.required<string>();

  selected = input(false);

clicked = output<void>();
}
