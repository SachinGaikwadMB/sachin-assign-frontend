import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'final-assignment-ui'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('final-assignment-ui');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('final-assignment-ui app is running!');
  // });

  it('should have app-navbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const { debugElement } = fixture;
    const navbar = debugElement.query(By.css('app-navbar'));
     expect(navbar).toBeTruthy();
  });


  it('should have router outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const { debugElement } = fixture;
    const router = debugElement.query(By.css('router-outlet'));
     expect(router).toBeTruthy();
  });
});
