import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { LogeosService } from 'src/app/services/logeos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  users:any[]=[];
  textoBuscar: string = '';
  

  constructor(
    private dataService:DataService,
    private router:Router
    ) {
      const navigation = this.router.getCurrentNavigation();
      this.state = navigation?.extras.state as {
        idAlumno: string;
        nombre: string;
        apellido: string;
        tipo: string,
        rol: string,
        foto: string,
        telefono: number,
        carreera: string,
        perfil:string
      };
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

  ngOnInit() {
    // this.dataService.getBddusus().subscribe(users =>{
      

      

      
    //   console.log("1"+users)
    //   this.users = users;
    //   console.log("2"+users)
    // })
    this.nombre = this.state.nombre;
    this.apellido = this.state.apellido;
    this.tipo = this.state.tipo;
    this.rol = this.state.rol;
    this.foto = this.state.foto;
    this.telefono = this.state.telefono;
    this.carreera = this.state.carreera;
    this.perfil = this.state.perfil;
  }

  onSearchChange(event){
    //console.log(event.detail.value)

    this.textoBuscar=event.detail.value;
    console.log(this.textoBuscar)
    

  }

}