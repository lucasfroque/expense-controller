import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  showItem = this.sidebarService.showItem;


  constructor(private sidebarService: SidebarService) { }

  ngOnInit(): void {
  }


  toggleItem(item: string){
    this.sidebarService.toggleItem(item);
    this.showItem = this.sidebarService.showItem;
  }
}
