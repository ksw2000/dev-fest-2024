import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodComponent } from './cod.component';

describe('CodComponent', () => {
  let component: CodComponent;
  let fixture: ComponentFixture<CodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
