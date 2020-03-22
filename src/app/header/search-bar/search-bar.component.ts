import { Component, OnInit } from "@angular/core";
import { TransfereServiceService } from "../../transfere-service.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})

export class SearchBarComponent implements OnInit{

  constructor(private transfereService:TransfereServiceService){
  }

  ngOnInit(){
  //  this.transfereService.currentCity.subscribe(city => this.city = city);
  }
  onEnter(city: HTMLInputElement){
    this.transfereService.changeCity(city.value);
  }
}
