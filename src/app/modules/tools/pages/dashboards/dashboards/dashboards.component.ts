import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  url: string = '';

  ngOnInit(): void {
    // Obtener la ruta completa
    this.route.url.pipe(
      map(segments => segments.map(segment => segment.path))
    ).subscribe(segments => {
      // segments es un array de segmentos de ruta
      const currentUrl = segments.join('/');
      this.url = currentUrl;
    });
  }
}
