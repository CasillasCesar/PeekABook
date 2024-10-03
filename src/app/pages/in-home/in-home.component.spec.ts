import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InHomeComponent } from './in-home.component';

describe('InHomeComponent', () => {
  let component: InHomeComponent;
  let fixture: ComponentFixture<InHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
