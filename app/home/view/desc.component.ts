import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import * as moment from 'moment/moment';

@Component({
  selector: 'desc-inc',
  templateUrl: './desc.component.html',
  styleUrls: ['./desc.component.scss']
})

export class DescComponent implements OnInit{

    @Input() valores: any;
    @Input('showModal') _showModal: boolean;

    @Output() onCanceled = new EventEmitter();
    // Constructor with injected service
    constructor(){}

    ngOnInit(){
        this.valores.FECHA = moment(this.valores.FECHA).format('YYYY-MM-DD h:mm:ss a');
        this.valores.FECHA_ULT_MOD = moment(this.valores.FECHA_ULT_MOD).format('YYYY-MM-DD h:mm:ss a');
    }
    onCancel(){
        this._showModal=false;
        this.onCanceled.emit();
    }
}