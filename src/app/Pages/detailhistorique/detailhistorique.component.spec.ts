import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailhistoriqueComponent } from './detailhistorique.component';

describe('DetailhistoriqueComponent', () => {
  let component: DetailhistoriqueComponent;
  let fixture: ComponentFixture<DetailhistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailhistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailhistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
