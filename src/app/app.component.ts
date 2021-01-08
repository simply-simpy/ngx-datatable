import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div ngbDropdown class="d-inline-block">
      <button class="btn btn-light filter-button" id="input1" ngbDropdownToggle>Select an option</button>
      <div ngbDropdownMenu aria-labelledby="inputmethod">
        <button ngbDropdownItem *ngFor="let column of columns" (click)="sort(column.prop)">
          {{ column.prop }}
        </button>
      </div>
    </div>
    <div>
      <ngx-datatable
        [rows]="rows"
        [columns]="columns"
      >
      </ngx-datatable>
    </div>
  `
})
export class AppComponent {
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  // sorts = [{ prop: 'name', dir: 'desc' }];
  // sorts = [{ prop: 'company', dir: 'desc' }];
  sort(prop: string | number): void {
    // @ts-ignore
    this.rows.sort((a, b) => a[prop].localeCompare(b[prop], 'en', { numeric: true }));
    this.rows = [...this.rows];
  }
}
