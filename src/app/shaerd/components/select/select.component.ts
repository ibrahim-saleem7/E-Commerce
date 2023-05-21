import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})

export class SelectComponent implements OnInit {
  @Input() data:string [] =[];
  @Output() selectedValue = new EventEmitter();

  constructor(){}

  ngOnInit(): void {
  }

  fliter(event:any){
    this.selectedValue.emit(event);
  }

}


