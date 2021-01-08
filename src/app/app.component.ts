import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ngx-datatable
        [rows]="rows"
        [columns]="columns"
        [sorts]="sorts"

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
  sorts = [{ prop: 'company', dir: 'asc' }];
}
