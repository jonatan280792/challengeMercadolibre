import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MercadoLibreService } from '@services/mercadoLibre.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.html'
})
export class ItemComponent implements OnInit {
  public filterBreadcrumb: any;
  public returnIdItem: any;
  public itemDetail: any;
  loading = false;
  item: any;
  condition: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mercadolibreService: MercadoLibreService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.returnIdItem = {
        id: params["id"],
      };
    });

    this.getInfoDetail(this.returnIdItem);
  }

  getInfoDetail(resultId: any) {
    this.mercadolibreService.getItemDetail(resultId).subscribe((response) => {
      this.loading = true;
      this.itemDetail = response;
      this.item = this.itemDetail.item;
      this.condition = this.item.condition === 'new' ? 'Nuevo' : 'Usado';
      this.filterBreadcrumb = this.itemDetail.categories;
    });
  }
}
