import { Component, Input, OnInit } from '@angular/core';
import { CustomIconService } from '@common/custom-icons/custom-icon.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.html'
})
export class BreadcrumbComponent implements OnInit {
  @Input() filtersList: string;

  public filters: any;

  constructor(
    private customIconService: CustomIconService,
  ) { 
    this.customIconService.init();
  }

  ngOnInit() {
    this.filters = this.filtersList;
    console.log(this.filters);
  }

}
