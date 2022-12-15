import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { url } from 'inspector';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiClimaService {
  apiKey: string = "3242b1dab11daf94dbb5c2c45df0e07a"
  url: string = ""
  constructor(private http: HttpClient) { }
getFromUserSelection(ciudad:string){ //el usuario brindara la ciudad que prefiera
  this.url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.apiKey}`;
  return this.http.get(this.url);
}
getFromActualPoisition(lon,lat){
  this.url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`;
  return this.http.get(this.url);
}
getLocation():Promise<any>{
  return new Promise((resolve, reject)=>{
    console.log("esto es el resolve-->"+resolve)
    navigator.geolocation.getCurrentPosition(resp=>{
      resolve({lon:resp.coords.longitude, lat:resp.coords.latitude});
      console.log("esto es la wea de resolve con lon y lan-->"+resp.coords.longitude+" "+resp.coords.latitude)
    })
  })
}
}