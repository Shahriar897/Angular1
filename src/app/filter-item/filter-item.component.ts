import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter-item',
  standalone: true,
  imports: [],
  templateUrl: './filter-item.component.html',
  styleUrl: './filter-item.component.css',
})
export class FilterItemComponent {
  @Input()
  handleSearch!: (event: any) => void;

  @Input()
  onFieldSelected!: (value: string) => void;

  @Input()
  onOperatorSelected!: (value: string) => void;
}
