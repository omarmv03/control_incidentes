import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

    public visible = false;
    private visibleAnimate = false;

    @Input("display") set displatyEnable(value:boolean){
        this.visible = !!value;
        setTimeout(() => this.visibleAnimate = true, 100);
    }
    @Output() onCancel: EventEmitter<void> =  new EventEmitter<void>();

    constructor(){}

    public hide(): void {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
        this.onCancel.emit();
    }

    public onContainerClicked(event: MouseEvent): void {
        if ((<HTMLElement>event.target).classList.contains('modal')) {
            this.hide();
            this.onCancel.emit();
        }
    }

}
