import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async presentPopover(ev:any){
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent, //aca va el componente que quiero mostrar y ese lo hemos creado como popoverinfo en los componentes
      event:ev,
      translucent:true,
      backdropDismiss:false       //Esto es para que se tenga que elegir una opcion para que se cierre, pero a mi no me gusta asi que lo saco hehe
    });

     await popover.present()

     const {data} =await popover.onWillDismiss();
     console.log(data)
  }

}
