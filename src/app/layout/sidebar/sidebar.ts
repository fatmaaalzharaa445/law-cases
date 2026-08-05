import { Component, signal } from '@angular/core';
import { NavItemComponent } from '../../shared/nav-item/nav-item';
import { NAV_ITEMS } from '../../mock/data/navigation.data';
import { NgIcon } from '@ng-icons/core';
import { CHATHISTORY } from '../../mock/data/chat-history.data';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NavItemComponent, NgIcon],
  templateUrl: './sidebar.html',
})
export class SidebarComponent {
  navigation = NAV_ITEMS;
  chatHistory = CHATHISTORY;
  collapsed = signal(false);
  toggleSidebar() {
    this.collapsed.update((v) => !v);
  }
}
