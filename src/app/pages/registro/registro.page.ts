import { Component, OnInit } from '@angular/core';
import { AlertController,ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/services/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuarios:Usuario[]=[];

  constructor(private usuarioService:UsuarioService, private alertCtrl: AlertController, private toastCtrl: ToastController, private router:Router) { }

  ngOnInit() {
    this.addUsuario()
  }

  async addUsuario(){
    const alert = await this.alertCtrl.create({
      backdropDismiss:false,
      cssClass:'alerta',
      header:'Agregar usuario',
      inputs:[
        {
          name:'name',
          type:'text',
          placeholder:'Nombre'
        },
        {
          name:'lastname',
          type:'text',
          placeholder:'Apeliido'
        },
        {
          name:'gender',
          type:'text',
          placeholder:'Género'
        },
        {
          name:'age',
          type:'number',
          placeholder:'Edad'
        },
        {
          name:'Rol',
          type:'text',
          placeholder:'Rol'
        },
        {
          name:'email',
          type:'email',
          placeholder:'Email'
        },
        {
          name:'Asignatura',
          type:'text',
          placeholder:'Asignatura'
        },
        {
          name:'password',
          type:'password',
          placeholder:'contraseña'
        },
        {
          name:'Carrera',
          type:'text',
          placeholder:'Carrera'
        },
        {
          name:'Sede',
          type:'text',
          placeholder:'Sede'
        },
        {
          name:'imagen',
          type:'url',
          placeholder:'Imagen'
        }

      ],
      buttons:[{
        text:'Cancelar',
        role:'cancel'
      },
    {
      text:'Guardar',
      role:'confirm',
      handler:(data)=>{
        this.usuarioService.addUsuario(data);
        this.toastPresent('Usuario agregado')
        this.router.navigate(['input'])
      }
    }
  ]
    });
    alert.present()
  }

  async toastPresent(message:string){
    const toast = await this.toastCtrl.create({
      message,
      duration:650,
    });
    toast.present();
  }

}
