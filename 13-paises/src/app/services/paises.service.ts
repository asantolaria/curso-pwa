import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PaisInterface} from "../interfaces/pais.interface";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  private paises: PaisInterface[] = [];
  constructor(private http: HttpClient) { }

  getPaises() : Promise<PaisInterface[]> {
    if(this.paises.length > 0 ){
      return Promise.resolve(this.paises);
    }

    return new Promise(resolve => {
      this.http.get('http://api.countrylayer.com/v2/lang/es?access_key=c66e7b249fad80ba64209db28c139b8e')
        .subscribe( paises => {
          console.log(paises);
          this.paises = paises as PaisInterface[];
          resolve(paises as PaisInterface[]);
        });
    });

  }

  getPaisPorId(id:string|null) {
    if(this.paises.length > 0) {
      const pais = this.paises.find(p => p.alpha3Code === id);
      return Promise.resolve(pais);
    }
    return this.getPaises().then(paises => {
      const pais = this.paises.find(p => p.alpha3Code === id);
      return Promise.resolve(pais);
    });
  }
}
