import { Component, input, output } from '@angular/core';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-pagination',
  imports: [NgIcon],
  templateUrl: './pagination.html',
})
export class Pagination {

  currentPage = input(1);

  totalPages = input(8);

   page = input(1);


  pageSize = input(18);


  total = input(0);

  pageChange = output<number>();

  pageSizeChange = output<number>();

viewMode = input<'table' | 'grid'>('table');
}
