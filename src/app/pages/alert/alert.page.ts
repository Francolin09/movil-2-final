import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({ //recordar que para poder usar esto antes se debe inyectar en el contructor con el nombre que se utilizara y el tipo debe ser de alert controller e importarlo desde angular
      backdropDismiss:false,
      header: 'Alert!',
      subHeader:'Subtitle',
      message:'esta es una alerrrta',
      buttons:['ok'] //aca se pueden ingresar toda la cantidad que uno quiera de botones que tendrá la alerta 
     
      
    });

    await alert.present();
  }

  async presentAlertMultipleButtons(){
    const alert = await this.alertController.create({
      
      header:'Alert',
      subHeader:'Subtitle',
      message:'Esta es otro mensaje de alerta',
      buttons:[
        {   //tambien se pueden agregar los botones en forma de objeto para asi tener la posibilidad de asignarles funciones al comportamiento de cada uno de estos botones
        text:'Ok!',
        handler: ()=>{ console.log("Click en OK")}
        },
        {   //tambien se pueden agregar los botones en forma de objeto para asi tener la posibilidad de asignarles funciones al comportamiento de cada uno de estos botones
          text:'Ok2!',
          handler: ()=>{ console.log("Click en OK2")}
        },
        {   
        text:'Cancelar',
        role:'cancel' //agregando el role cancel, el boton lo que hara será salir de la alerta sin hacer nada
        }
      ]
    })
    await alert.present()
  }


  async presentAlertPrompt() {
    const alert = await this.alertController.create({
     
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1',
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2',
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3',
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever',
        },
        // input date with min & max
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2018-01-12',
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date',
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10,
        },
        {
          name: 'name7',
          type: 'number',
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal',
          },
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',
          handler: (data:any) => {
            console.log('Confirm Ok');
            console.log(data)
          },
        },
      ],
    });

    await alert.present();
  }


}
