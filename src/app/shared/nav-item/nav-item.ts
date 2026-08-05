import { Component, input } from '@angular/core';
import { NavItem } from '../../mock/model/nav-item.model';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-nav-item',
  imports:[NgIcon],
  standalone: true,
  templateUrl: './nav-item.html',
})
export class NavItemComponent {

  item = input.required<NavItem>();
collapsed = input(false);
}
