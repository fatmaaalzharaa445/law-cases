import { Component, computed, input } from '@angular/core';
import { CaseStatus } from '../../mock/model/case.model';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  templateUrl: './status-badge.html',
})
export class StatusBadgeComponent {

  status = input.required<CaseStatus>();

  text = computed(() => {
    switch (this.status()) {
      case 'active':
        return 'ساريه';
      case 'urgent':
        return 'عاجلة';
      case 'closed':
        return 'مننهية';
    }
  });

  classes = computed(() => {
    switch (this.status()) {
      case 'active':
        return 'bg-active-light text-active';

      case 'urgent':
        return 'bg-urgent-light text-urgent';

      case 'closed':
        return 'bg-neutral-light text-neutral';
    }
  });

}
