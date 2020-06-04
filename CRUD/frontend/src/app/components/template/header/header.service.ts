import { Router } from '@angular/router';
import { HeaderData } from './header-data.modules';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>({
    title: "Inicio",
    icon: 'home',
    routeUrl: ''
  });

  constructor() { }

  get HeaderData(): HeaderData{
    return this._headerData.value
  }

  set HeaderData(headerData: HeaderData){
    this._headerData.next(headerData);
  }
}
