import {Component, OnInit} from '@angular/core';
import {HistoryRecord} from '../../models/history.record';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  historyData!: HistoryRecord[];
  accountRest!: number;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.accountRest = 100.95;
    this.historyData = [
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      },
      {
        operation: '修改',
        status: '正常',
        date: '10/21/21',
        clientPermission: '否'
      }
    ];
  }

  logout() {
    this.router.navigateByUrl('login');
  }

}
