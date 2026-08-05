import { Component } from '@angular/core';
import { CASES } from '../../mock/data/cases.data';
import { CaseCardComponent } from '../../shared/case-card/case-card';
import { FilterChipComponent } from '../../shared/filter-chip/filter-chip';
import { CaseRow } from '../../shared/case-row/case-row';
import { computed, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { Pagination } from '../../shared/pagination/pagination';

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [CaseCardComponent, FilterChipComponent, CaseRow,NgIcon,Pagination],
  templateUrl: './cases.html',
})
export class CasesComponent {
viewMode = signal<'table' | 'grid'>('table');
filters = signal([
  'الكل',
  'سارية',
  'عاجلة',
  'منتهية'
]);
selectedFilter = signal('الكل');

search = signal('');

cases = signal(CASES);
onSearch(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  this.search.set(value);
}
filteredCases = computed(() => {
  let data = this.cases();

  if (this.selectedFilter() !== 'الكل') {
    data = data.filter(
      item => item.status === this.selectedFilter()
    );
  }

  const query = this.search().trim().toLowerCase();

  if (query) {
    data = data.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.number.toLowerCase().includes(query)
    );
  }

  return data;
});
}
