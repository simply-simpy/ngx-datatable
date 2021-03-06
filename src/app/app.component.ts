import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="devices-controls">
      <mat-form-field class="devices-sort" appearance="fill">
        <mat-label>Sort by</mat-label>
        <mat-select disableRipple>
          <mat-option *ngFor="let column of columns" (click)="sort(column.prop)">
            {{ column.prop }}
          </mat-option>
          <ng-template #nameTemplate let-rowIndex="rowIndex" let-row="row" let-value="value" ngx-datatable-cell-template>
            <span>{{value.name}}</span>
          </ng-template>
        </mat-select>
      </mat-form-field>
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
  sort(prop: string | number): void {
    // @ts-ignore
    this.rows.sort((a, b) => a[prop].localeCompare(b[prop], 'en', { numeric: true }));
    this.rows = [...this.rows];
  }
}
