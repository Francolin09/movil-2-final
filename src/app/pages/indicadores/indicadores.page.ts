import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IndicadorService } from 'src/app/services/indicador.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.page.html',
  styleUrls: ['./indicadores.page.scss'],
})
export class IndicadoresPage implements OnInit {

  indicadores:any[];
  dolar:number;
  euro:number;
  uf:number;
  utm:number;
  bitcoin:number;

  constructor(private indicadorService: IndicadorService) {
    this.mostrarIndicadores()
   }

  ngOnInit() {
    this.mostrarIndicadores();
  }

  mostrarIndicadores():void{
    this.indicadorService.obtenerindicador()
    .then(respuesta=>{
      console.log('respueexx',respuesta.dolar.valor)
      this.dolar=respuesta.dolar.valor;
      this.bitcoin=respuesta.bitcoin.valor;
      this.uf=respuesta.uf.valor;
      this.utm=respuesta.utm.valor;
      this.indicadores = respuesta;
      this.euro = respuesta.euro.valor
      console.log('resssp indicadores',this.indicadores)
    },
    (error)=>{
      console.log(error);
    })
  }


}
