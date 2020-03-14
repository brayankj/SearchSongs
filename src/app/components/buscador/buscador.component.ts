import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {BuscadorService} from '../../services/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  formBuscar: FormGroup;
  letra:[] = null;
  loading:Boolean;
  msgErr:Boolean = false;

  createFormGrup(){
    return new FormGroup ({
      Artista : new FormControl('',[Validators.required]),
      Cancion : new FormControl('' ,[Validators.required])
    });
  }
  constructor(
    private _bsService: BuscadorService
  ){ }

  ngOnInit() {
    this.formBuscar = this.createFormGrup();
  }

  
  Buscar(){
    if(this.formBuscar.valid){
      let artist = this.formBuscar.value.Artista;
      let song = this.formBuscar.value.Cancion;
      this._bsService.buscarsong(artist,song).subscribe(
        (res:any) => { 
          setTimeout( () => {
            this.loading = true;
            this.letra = res.lyrics
          },1500);
          this.loading = false;
          this.msgErr = false;
        }, err => {
          this.letra = null;
          setTimeout( () => {
            this.loading = true;
            this.msgErr = true;
          },1500 );
          this.loading = false;
        }
      );
    }
    
  }

  get Artista() { return this.formBuscar.get('Artista');}
  get Cancion() { return this.formBuscar.get('Cancion');}

}
