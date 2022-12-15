import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private  modalCtrl:ModalController) { }  //Recordar que aca se debe inyectar e importar el controlador del modal

  ngOnInit() {
  }

  async mostrarModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps:{
        nombre:'Macaco',
        pais:'Brasil'
      }
    });
    await modal.present();

    const resp = await modal.onDidDismiss()

    console.log(resp)

  }

}
