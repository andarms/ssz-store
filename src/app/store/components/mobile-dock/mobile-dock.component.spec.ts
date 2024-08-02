import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDockComponent } from './mobile-dock.component';

describe('MobileDockComponent', () => {
  let component: MobileDockComponent;
  let fixture: ComponentFixture<MobileDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MobileDockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
