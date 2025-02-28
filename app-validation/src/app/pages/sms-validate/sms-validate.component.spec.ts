import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsValidateComponent } from './sms-validate.component';

describe('SmsValidateComponent', () => {
  let component: SmsValidateComponent;
  let fixture: ComponentFixture<SmsValidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SmsValidateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
