import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  personajes:string[]=['Aquaman','Superman','Batman','WonderWoman','Flash']
  ReorderDisable:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any){
    console.log(event)
    //Pero haciendo solo esto el orden del arreglo se cambia solo visualmente sin embargo por dentro sigue siendo el mismo
    //para que se cambien a medida que se aplica el regroup haremos lo siguienbteeeee:

    const itemMover = this.personajes.splice(event.detail.from,1)[0]; //aca se esta cortando un elemento del arreglo, este metodo de por si retorna un arreglo por eso se le indica que solo queremos el primer elemento con la posicion 0


    this.personajes.splice(event.detail.to,0,itemMover)// aca se indica a donde será puesto el elemento que se tomo en el paso anterior 
    event.detail.complete(); // este metodo es para que finalice el reordenado y no se quede pegado

    console.log(this.personajes)
  }

}
