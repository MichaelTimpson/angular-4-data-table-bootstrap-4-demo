import { Component } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import persons from './data-table-demo1-data';


@Component({
    selector: 'data-table-demo-1',
    providers: [],
    templateUrl: 'app/demo1/data-table-demo1.html',
    styleUrls: ['app/demo1/data-table-demo1.css']
})
export class DataTableDemo1 {

    itemResource = new DataTableResource(persons);
    items = [];
    itemCount = 0;

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
    }

    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:

    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }
}
