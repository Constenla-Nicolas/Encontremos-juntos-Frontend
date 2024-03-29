import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { petModel } from './modelo/petModel';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL='/api';
  
  getPets(){
    return this.http.get(this.rootURL);
  }
  getLocations(){
    return this.http.get(`${this.rootURL}/getAllCords`)
  }

  getSpecificPet( id: number){
    return this.http.get(`${this.rootURL}/getPet/${id}`)
  }


  public lista(): Observable<petModel[]> {
    return this.http.get<petModel[]>(this.rootURL);
  }



}
