import { Component, OnInit, Input, OnChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Incidents } from '../../shared/models/incidents';
import { ServerService } from '../../shared/services/server.service';

@Component({
  selector: 'view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

    incidents:Incidents[]; 
    _filteredInc:Incidents[];
    _selectSprint: number [] = [];
    incSelected: Incidents;
    _showModal:boolean =false;

    // Constructor with injected service
    constructor(private serverService: ServerService) {
    }

    saveData(val){
        this.incidents = val;
        this._filteredInc = this.incidents;
        this.itemsSelect();
    }

    reloadData(val){
        this.incidents = val;
        this._filteredInc = this.incidents;
    }

    ngOnInit(){
        // Get all incidents for sprint
        this.serverService.getIncidents().subscribe(
                data => this.saveData(data),
                err => err,
                () => console.log('Random Quote Complete')
        );
    }

    filters(filtro) {

        if (filtro == null || filtro == ''){
            this._filteredInc = this.incidents;
        }else{
            this._filteredInc = this.incidents.filter((a: Incidents) =>
             (a.INCIDENCIA.indexOf(filtro) !== -1)||
             (a.MODULO.indexOf(filtro) !== -1)||
             (a.PAQUETE.indexOf(filtro) !== -1)||
            // (a.SP.indexOf(filtro) !== -1)||
             (a.TIPO.indexOf(filtro) !== -1)||
             (a.SPRINT.indexOf(filtro) !== -1));
        }
    }
    itemsSelect(){
        for(var i:number = 1; i <= parseInt(this.incidents[0].SPRINT); i++){
            this._selectSprint[i-1] = i;
        }
        this._selectSprint.reverse();
    }
    optionSelected(num){
        console.log(num);
        // Get all incidents for sprint
        this.serverService.getIncidentsForSprint(num).subscribe(
                data => this.reloadData(data),
                err => err,
                () => console.log('Random Quote Complete')
        );
    }
    setSelected(val){
        this.incSelected = val;
        this._showModal=true;
        console.log(this.incSelected);
    }
  /* ******************************************** */
 /* public changePage(page:any, data:Array<any> = this._filteredInc):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }*/

  public changeSort(columnName:string) {
    let sort:string = void 0;

    if (columnName) {
        // simple sorting
        console.log(this._filteredInc);
        this._filteredInc.sort((previous:Incidents, current:Incidents) => {
        console.log('previous[columnName]');
        console.log(previous[columnName]);
        console.log('current[columnName]');
        console.log(current[columnName]);
        if (previous[columnName].toString() >= current[columnName].toString()) {
            //return  1;
            console.log('MAYOR');
            return sort === 'desc' ? -1 : 1;
        } else if (previous[columnName].toString() <= current[columnName].toString()) {
            //return -1 ;
            console.log('MENOR');
            return sort === 'asc' ? -1 : 1;
        }
        return 0;
        });
    }
    /*if (this._filteredInc) {
      return  this._filteredInc.sort((a: Incidents, b: Incidents) => {
            console.log(a.INCIDENCIA);
            console.log(b.INCIDENCIA);
            if (a.INCIDENCIA < b.INCIDENCIA) {
                return -1;
            }
            else if (a.INCIDENCIA > b.INCIDENCIA) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }*/
  }

  /*public changeFilter(data:any, config:any):any {
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].match(column.filtering.filterString);
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config.filtering.columnName].match(this.config.filtering.filterString));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().match(this.config.filtering.filterString)) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config.filtering, config.filtering);
    }

    if (config.sorting) {
      Object.assign(this.config.sorting, config.sorting);
    }

    let filteredData = this.changeFilter(this._filteredInc, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this._filteredInc = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data);
        this.incSelected = data.row;
        this._showModal=true;
        console.log(this.incSelected);
  }*/
}