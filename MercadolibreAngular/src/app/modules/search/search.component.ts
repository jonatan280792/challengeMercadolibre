import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MercadoLibreService } from '@services/mercadoLibre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.html'
})
export class SearchComponent implements OnInit {
  @Output() emitFilter = new EventEmitter<any>();
  @Input() inputFilter: string;
  value = '';
  filter = '';

  constructor(
    private mercadolibreService: MercadoLibreService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.value = this.inputFilter;
  }

  searchProducts() {
    const data = {
      search: this.value,
    };

    if(this.inputFilter !== data.search) {
      this.emitFilter.emit(data);
    } else {
      this.router.navigate(['/items'], { queryParams: data });
    }
    this.router.navigate(['/items'], { queryParams: data });
    
    // const valueSearch = {
    //   q: this.value
    // }
    // this.mercadolibreService.getBuscador(valueSearch).subscribe(response => {

    // })
  }
}
