import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastController:ToastController) { }

  async presentToast(){
    const toast= await this.toastController.create({
      message:'TOOOAST',
      duration:2000
    });
    toast.present();
  }


  async presentToastWithOption(){
    const toast = await this.toastController.create({
      header:'Toast header',
      message:'Click para cerrar',
      position:'top',
      buttons:[
        {
          side:'start',
          icon:'star',
          text:'Favorite',
          handler: ()=> console.log('Agregado a favoritoo')
        },
        {
         
          text:'Favorite',
          role:'cancel',
          handler: ()=> console.log('Caancelado')

        }
      ]
    })
    toast.present();
  }

  ngOnInit() {
  }

}
