import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftMenuComponent } from './left-menu.component';

describe('LeftMenuComponent', () => {
  let component: LeftMenuComponent;
  let fixture: ComponentFixture<LeftMenuComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeftMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
