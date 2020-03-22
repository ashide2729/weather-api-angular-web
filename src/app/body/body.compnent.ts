import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TransfereServiceService } from "../transfere-service.service";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit{

  constructor(private httpClient: HttpClient, private transfereService:TransfereServiceService){}
  city: string;
  response;
  ngOnInit(){
    this.transfereService.currentCity.subscribe(city => this.city = city);
    this.response = this.getWeatherdata(this.city);
    console.log(this.response);
  }
  getWeatherdata(city){
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=cd648da3327777260b63e3a221e02fbd');
  }
}
