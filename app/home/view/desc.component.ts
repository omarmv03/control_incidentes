import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

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

    }
    onCancel(){
        this._showModal=false;
        this.onCanceled.emit();
    }
}