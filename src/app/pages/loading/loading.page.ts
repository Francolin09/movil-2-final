import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading:HTMLIonLoadingElement;

  constructor( private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading(){

    this.presentLoading('Cargaaaando');

    setTimeout(()=>{
      this.loading.dismiss();
    },2000)
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtrl.create({ //Al revisar el create podemos ver que es una promesa que recibe un elemento HTMLonLoading element
                                                  //por lo mismo debemos crear arriba la variable loading que sea de este mismo tipo de dato
                                                  //es decir HTMLonLoadingelement
                                                  //de esta forma podemos utilizar el mismo elemento en todas las funciones

      
      message,
      
    });
    await this.loading.present();

    
  }

}

//Explicacion del codigo entero:
//primero recordar que para el uso de loading al igual que otros elementos se debe importar desde angular y este se agrega en el constructor
//Luego se crea el metodo presentloading el cual contiene el loading como tal y su funcionalidad, y como ya habiamos definido 
//una variable para el loading aqui solo se le asigna el valor que corresponde con el metodo create
//luego tenemos el metodo mostrarLoading el cual es el metodo usado directamente en el html por lo que este metodo
//llamará al metodo present loading (el cual tiene la funcionalidad) para ser ejecutado una vez se llame al metodo mostrarLoading
//además se le agrega un setTimeout para controlar el tiempo que estara visible el loading en pantalla antes de que se
//deshabiluite con el mertodo dismiss
