import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickcartComponent } from './quickcart.component';

describe('QuickcartComponent', () => {
  let component: QuickcartComponent;
  let fixture: ComponentFixture<QuickcartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickcartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuickcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
