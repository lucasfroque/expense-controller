import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  showItem: String[] = [];

  toggleItem(item: string) {
    if (this.showItem.includes(item)) {
      this.showItem = [];
    } else {
      if (this.showItem.length > 0) {
        this.showItem = [];
      }
      this.showItem.push(item)
    }
  }
}