import { Component, computed, EventEmitter, INJECTOR, Input, Output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  @Input({required : true}) user!: User;
  @Input({required: true}) selected!: boolean;
  // avatar = input.required<string>();
  // name = input.required<string>();
   @Output () select = new EventEmitter<string>();
  // select = Output();

  imagePath = computed(() => {
    return 'assets/users/' + this.user.avatar;
  });
  //  get imagePath(){
  //   return 'assets/users/' + this.avatar;
  //  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
