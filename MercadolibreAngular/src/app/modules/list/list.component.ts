import {
  Component,
  OnChanges,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MercadoLibreService } from '@services/mercadoLibre.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.html',
})
export class ListComponent implements OnInit, OnChanges {
  public searchOrigin: any;
  public filterSearch: string;
  public filterBreadcrumb: any;

  resultQuery: any;
  items: any;
  loading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private mercadolibreService: MercadoLibreService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.searchOrigin = {
        search: params['search'],
      };
    });
    this.filterSearch = this.searchOrigin.search;

    this.searchFunction(this.searchOrigin.search);
  }

  changueFilter(event) {
    this.loading = false;
    this.searchFunction(event.search);
  }

  ngOnChanges(changes) {
    console.log(changes);
  }

  searchFunction(value: string) {
    const valueSearch = {
      q: value,
    };
    this.mercadolibreService.getBuscador(valueSearch).subscribe((response) => {
      this.loading = true;
      this.resultQuery = response;
      this.items = this.resultQuery.items;
      this.filterBreadcrumb = this.resultQuery.categories;
    });
  }

  itemInfo(item: any) {
    console.log(item);
  }
}
