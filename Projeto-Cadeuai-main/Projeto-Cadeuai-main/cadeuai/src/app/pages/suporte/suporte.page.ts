import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})
export class SuportePage implements OnInit {
  public clicado = false

  constructor() { }

  ngOnInit() {
    
  }
  mudar_click(){
    if (this.clicado){
      this.clicado = false
    }
    else{
      this.clicado = true
    }
  }

}
