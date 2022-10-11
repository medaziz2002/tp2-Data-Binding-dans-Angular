import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html'
})
export class BindingComponent implements OnInit {
titre : string ="Demo du date Binding Interpolation";
status : boolean=false;
nom : string ="belhaj hassine";
  constructor() { }

  ngOnInit(): void {
  }
changerTitre()
  {
    this.titre="Nouveau Titre";
  }




}
