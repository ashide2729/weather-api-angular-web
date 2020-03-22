import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class TransfereServiceService {

  private citySource = new BehaviorSubject<string>('bangalore');
  currentCity = this.citySource.asObservable();

  constructor() { }

  changeCity(city: string){
    this.citySource.next(city);
  }

  // private data: string;

  // setData(data){
  //   this.data = data;
  // }

  // getData(){
  //   let temp = this.data;
  //   this.clearData();
  //   return temp;
  // }

  // clearData(){
  //   this.data = undefined;
  // }

}
