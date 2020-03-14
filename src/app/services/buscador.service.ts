import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private _http : HttpClient) { }

  // getPlaylist(idlist:String , id: String){
  //   return this._http.get(this.url+'playlist/'+idlist+'/'+id)
  //     .pipe(map((res:any) => res.playlists[0]));
  // }

  buscarsong(Artist:string,Song:string){
    return this._http.get(`https://api.lyrics.ovh/v1/${Artist}/${Song}`);
  }

}
