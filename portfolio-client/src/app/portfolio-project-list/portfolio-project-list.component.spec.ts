import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioProjectListComponent } from './portfolio-project-list.component';

describe('PortfolioProjectListComponent', () => {
  let component: PortfolioProjectListComponent;
  let fixture: ComponentFixture<PortfolioProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioProjectListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfolioProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
