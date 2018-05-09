import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteChildComponent } from './quote-child.component';

describe('QuoteChildComponent', () => {
  let component: QuoteChildComponent;
  let fixture: ComponentFixture<QuoteChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
