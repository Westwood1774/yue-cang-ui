import {Component, OnInit} from '@angular/core';
import {Box} from '../../models/box';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-goods-checking',
  templateUrl: './goods-checking.component.html',
  styleUrls: ['./goods-checking.component.css']
})
export class GoodsCheckingComponent implements OnInit {

  BoxData!: Box[];
  showSKU = false;

  constructor(private confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    this.BoxData = [
      // {
      //   boxId: '1',
      //   boxSize: 10,
      //   actualReceiveDate: '10/30/21',
      //   BillDate: '10/30/21',
      //   sku: 'https://www.youtube.com/',
      // },
    ];
  }

  openSKUModal() {
    this.showSKU = true;
    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        console.log('click yes');
        this.closeModal();
      },
      reject: () => {
        console.log('click no');
        this.closeModal();
      }
    });
  }

  closeModal() {
    this.showSKU = false;
  }

}
