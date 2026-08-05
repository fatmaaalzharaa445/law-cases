import { Component, input } from '@angular/core';
import { StatusBadgeComponent } from '../status-badge/status-badge';
import { Case } from '../../mock/model/case.model';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-case-card',
  standalone: true,
  imports: [StatusBadgeComponent,NgIcon],
  templateUrl: './case-card.html',
})
export class CaseCardComponent {

  caseItem = input.required<Case>();

}
