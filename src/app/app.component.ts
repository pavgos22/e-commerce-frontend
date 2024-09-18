import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'e-commerce-fe';

  constructor(private notifierService: NotifierService) {}

  ngOnInit(): void {
    this.notifierService.notify('success', 'Udało się!');
  }
}
