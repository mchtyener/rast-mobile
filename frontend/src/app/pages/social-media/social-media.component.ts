import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import {SocialMediaItem } from "../../core/model/socialMediaItem";
import { NgxMaskDirective, provideNgxMask } from "ngx-mask";
import { FormsModule } from "@angular/forms";
import { ModalComponent } from "../../layout/modal/modal.component";
import { AsyncPipe, NgClass, NgForOf, NgIf, UpperCasePipe } from "@angular/common";
import { RouterLink } from "@angular/router";
import { SocialMediaService } from "../../core/services/social-media.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ColumnMode, DatatableComponent, NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SocialMediaPagerComponent } from "./social-media-pager/social-media-pager.component";
import { filters } from "../../core/data/data";


@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    NgxMaskDirective,
    FormsModule,
    ModalComponent,
    NgForOf,
    NgIf,
    RouterLink,
    NgClass,
    AsyncPipe,
    NgxDatatableModule,
    SocialMediaPagerComponent,
    UpperCasePipe,
  ],
  providers: [
    provideNgxMask(),
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialMediaComponent implements OnInit {
  @ViewChild(DatatableComponent) public table!: DatatableComponent;


  rows: SocialMediaItem[] = [];
  tempData: SocialMediaItem[] = [];

  searchBox: boolean = false;

  currentPageLimit: number = 10;
  currentVisible: number = 2;
  rowCount: number = 3;

  filteredText: string = ''
  filteredCheckout: string = 'link'

  ColumnMode = ColumnMode;


  constructor(private socialMediaService: SocialMediaService, private modalService: NgbModal) {

    this.socialMediaService.listAll.subscribe((data: boolean) => {
      this.getLinkItem()
    })


  }

  ngOnInit() {
    this.getLinkItem()
  }


  getLinkItem() {
    this.socialMediaService.getAllSocialMedia().subscribe((data: SocialMediaItem[]) => {
      this.rows = data;
      this.tempData = this.rows
      this.onLimitChange();
      this.onVisibleChange();
      this.tableSearch();
    })
  }

  showModal() {
    this.modalService.open(ModalComponent)
  }


  onLimitChange(): void {
    this.changePageLimit(this.rowCount);
    this.table.limit = this.currentPageLimit;
    this.table.recalculate();
  }

  increaseRowCount() {
    this.rowCount++;
    this.onLimitChange();
  }

  decreaseRowCount() {
    if (this.rowCount > 0) {
      this.rowCount--;
      this.onLimitChange();
    }
  }

  onVisibleChange(): void {
    this.currentVisible = parseInt('2', 10);
  }

  changePageLimit(limit: any): void {
    this.currentPageLimit = parseInt(limit, 10);
  }


  tableSearch(type?: string) {
    const val = this.filteredText.toLowerCase();

    this.rows = this.tempData.filter((d: SocialMediaItem) => {
      const propToSearch = (type === 'link') ? d.link.toLowerCase() : d.name.toLowerCase();
      this.filteredCheckout = type === 'link' ? 'link' : 'name'
      return propToSearch.indexOf(val) !== -1 || !val;
    });
  }


  onActivate(data: SocialMediaItem) {
    const modal = this.modalService.open(ModalComponent)
    modal.componentInstance.data = data
  }

  hideFilterContainer() {
    this.searchBox = false
  }

  showFilterContainer() {
    this.searchBox = true
  }

  checkFilter(name: string) {
    this.tableSearch(name)
  }

  protected readonly filters = filters;
}
