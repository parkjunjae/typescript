import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  // @Input({required: true}) image!: { src: string; alt: string };
  // @Input({required: true}) title!: string;
  // 둘다 똑같은 기능을 한다.
  image = input.required<{ src: string; alt: string }>(); // 입력하는것이라고 알려준다.
  title = input.required<string>();
}
