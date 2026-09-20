import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Iproduct } from '../../model/Iproduct';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss'],
})
export class ProductDashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
