import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TransfereServiceService } from "../transfere-service.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit{

  constructor(private httpClient: HttpClient, private transfereService:TransfereServiceService){}
  city: string;
  respons;
  Url;
  data: any[] = [];
  ngOnInit(){
    this.transfereService.currentCity.subscribe(city => this.city = city);
    this.respons = this.getWeatherdata(this.city);
    this.respons.subscribe(data => this.data = data);
    console.log(this.data);
  }

  getWeatherdata (city): Observable<any[]> {
    this.Url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=cd648da3327777260b63e3a221e02fbd'
    return this.httpClient.get<any[]>(this.Url);
  }
}
