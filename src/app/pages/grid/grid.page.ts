import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiClimaService } from 'src/app/services/apiclima.service';
import { AuthService } from 'src/app/services/auth.service';
import { LogeosService } from 'src/app/services/logeos.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
  logeado:{[key:string]: String;}
  weatherInfo:any;
  ciudad:string = "";
  climaDia:string = "";
  tempMinina: number = -273.15;
  tempMaxima: number = -273.15;
  tempActual: number = -273.15;
  porcentajehumedad: number;
  nombreciudad:string = "";
  tempMininatruncada: string;
  tempMaximatruncada: string;
  tempActualtruncada: string;
  
  constructor(private servicio: LogeosService,
    private router:Router, private clima:ApiClimaService
    ) {
      const navigation = this.router.getCurrentNavigation();
      this.state = navigation?.extras.state as {
        idAlumno: string;
        nombre: string;
        apellido: string;
        tipo: string;
        rol: string;
        foto: string;
        telefono: number;
        carreera: string;
        perfil:string;
        
        

      };
      
      }


      async getCurrentPosition(){
        this.clima.getLocation().then((resp=>{
          this.clima.getFromActualPoisition(resp.lon, resp.lat).subscribe(data=>{
            this.weatherInfo=  data;
            console.log("get localtion",this.weatherInfo)
            this.climaDia = this.weatherInfo.weather[0].description;
            this.tempMaxima += this.weatherInfo.main.temp_max
            this.tempMinina += this.weatherInfo.main.temp_min
            this.tempActual += this.weatherInfo.main.temp
            this.tempMininatruncada = this.tempMinina.toFixed(2);
            this.tempMaximatruncada = this.tempMaxima.toFixed(2);
            this.tempActualtruncada = this.tempActual.toFixed(2);
            this.porcentajehumedad = this.weatherInfo.main.humidity
            this.nombreciudad = this.weatherInfo.name
            console.log(this.climaDia)
            //return this.weatherInfo;
          });
          //return this.weatherInfo
        }));
        setTimeout(()=>{
          if(this.weatherInfo.length ===0){
            this.getWeatherInfo("Santiago")
          }
        },3500)
        //return this.weatherInfo;
     }

     getWeatherInfo(value:string){
      this.clima.getFromUserSelection(value).subscribe(data=>{
        this.weatherInfo = data
        console.log("weter info xDDDDDDDDDDDDDDDDDDD",this.weatherInfo)
      })
     }

    state: any;
    nombre: String;
    apellido: String;
    tipo: String;
    rol: String;
    foto: String;
    telefono: Number;
    carreera: String;
    perfil:String;

  async ngOnInit() 
  {
    console.log("redireccionando a grid")
    console.log("this nopmbre",this.nombre)
    // this.clima.getLocation().then((data => {
    //   console.log(data)
    //   return data;

    // }));
    //console.log("esta es la api del clima-->"+apiclima);
    await this.getCurrentPosition();
    console.log("soy  this.weatherInfo ",  this.weatherInfo)
    //this.servicio.$getObjectSource.subscribe(data => this.logeado=data)
    //console.log(this.logeado)     
    this.nombre = this.state.nombre;
    this.apellido = this.state.apellido;
    this.tipo = this.state.tipo;
    this.rol = this.state.rol;
    this.foto = this.state.foto;
    this.telefono = this.state.telefono;
    this.carreera = this.state.carreera;
    this.perfil = this.state.perfil;
  }




  



}
