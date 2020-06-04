import { HeaderService } from './header.service';
import { Component, OnInit } from '@angular/core';
import { toBase64String } from '@angular/compiler/src/output/source_map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private headerService : HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string{
     return this.headerService.HeaderData.title;
  }

  get icon(): string {
    return this.headerService.HeaderData.icon;
  }

  get routerUrl(): string {
    return this.headerService.HeaderData.routeUrl;
  }

}
