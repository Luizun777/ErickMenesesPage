import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  cuentaMovil = false;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private media: MediaMatcher
  ) { }

  ngOnInit(): void {
    this.responsive();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this.mobileQueryListener);
  }

  private mobileQueryListener: () => void;

  responsive() {
    this.mobileQuery = this.media.matchMedia('(max-width: 598px)');
    this.cuentaMovil = !this.mobileQuery.matches;
    this.mobileQueryListener = () => {
      this.cuentaMovil = !this.mobileQuery.matches;
      this.changeDetectorRef.detectChanges();
    };
  }

}
