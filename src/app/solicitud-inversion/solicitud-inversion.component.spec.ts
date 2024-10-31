import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudInversionComponent } from './solicitud-inversion.component';

describe('SolicitudInversionComponent', () => {
  let component: SolicitudInversionComponent;
  let fixture: ComponentFixture<SolicitudInversionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudInversionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudInversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
