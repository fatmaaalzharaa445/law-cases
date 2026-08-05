import { Component, input } from '@angular/core';
import { Case } from '../../mock/model/case.model';
import { StatusBadgeComponent } from '../status-badge/status-badge';
import { NgIcon } from '@ng-icons/core';

@Component({

   selector: 'tr[appCaseRow]',
  imports: [StatusBadgeComponent,NgIcon],
  templateUrl: './case-row.html',
})
export class CaseRow {
  caseItem = input.required<Case>();

}
