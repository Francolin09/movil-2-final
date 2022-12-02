import { Component } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { AnimationComponent } from './components/animation/animation.component';
//import { ApiClimaService } from './api-clima.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  ClimaInfo:any = [];
  ciudad:string = "";

  componentes: Observable <Componente[]>;
  constructor(
//    private clima:ApiClimaService,
    private modalController: ModalController,
    private platform:Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private dataService:DataService) 
  {
    this.initializeApp();
    this.presentAnimation();
//    this.getCurrentPosition();
    console.log(this.ClimaInfo)
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.componentes = this.dataService.getSideMenuOpts();
    })
  }

  async presentAnimation() {
    const modal = await this.modalController.create({
      component: AnimationComponent,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  

//  getCurrentPosition(){
//    this.clima.getLocation().then(resp=>{
//      this.clima.getFromActualPoisition(resp.lon,resp.lat).subscribe(data=>{
//        this.ClimaInfo = data;
//      })
//    })
//  }
//  getClimaInfo(value:string){
//    this.clima.getFromUserSelection(value).subscribe(data=>{
//      this.ClimaInfo = data
//      console.log(this.ClimaInfo)
//    });
//  }

}
