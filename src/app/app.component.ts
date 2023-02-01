import { Component, ViewChild } from '@angular/core';

import { NzTableComponent } from 'ng-zorro-antd/table';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}

@Component({
  selector: 'my-app',
  template: `
  <nz-table
    #virtualTable
    [nzBordered]="true"
    [nzVirtualItemSize]="54"
    [nzData]="listOfData"
    [nzVirtualForTrackBy]="trackByIndex"
    [nzFrontPagination]="false"
    [nzShowPagination]="false"
    [nzScroll]="{ x: '2200px', y: '240px' }"
  >
    <thead>
      <tr>
        <th nzLeft>Full Name</th>
        <th nzLeft>Age</th>
        <th>Index</th>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
        <th>Column 4</th>
        <th>Column 5</th>
        <th>Column 6</th>
        <th>Column 7</th>
        <th>Column 8</th>
        <th>Column 9</th>
        <th>Column 10</th>
        <th>Column 11</th>
        <th>Column 12</th>
        <th>Column 13</th>
        <th>Column 14</th>
        <th>Column 15</th>
        <th>Column 16</th>
        <th>Column 17</th>
        <th>Column 18</th>
        <th nzRight>Action</th>
      </tr>
    </thead>
    <tbody>
      <ng-template nz-virtual-scroll let-data let-index="index">
        <tr>
          <td nzLeft>{{ data.name }}</td>
          <td nzLeft>{{ data.age }}</td>
          <td>{{ data.index }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td>{{ data.address }}</td>
          <td nzRight>
            <a>action</a>
          </td>
        </tr>
      </ng-template>
    </tbody>
  </nz-table>
`,
})
export class AppComponent {
  listOfData: VirtualDataInterface[] = [];

  trackByIndex(_: number, data: VirtualDataInterface): number {
    return data.index;
  }

  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 20000; i++) {
      data.push({
        index: i,
        name: `Edward`,
        age: i,
        address: `London`,
      });
    }
    this.listOfData = data;
  }
}
