import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnselectedPageComponent } from './unselected-page.component';

describe('UnselectedPageComponent', () => {
  let component: UnselectedPageComponent;
  let fixture: ComponentFixture<UnselectedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnselectedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnselectedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
