import { TestBed } from '@angular/core/testing';

import { PortfolioProjectServiceService } from './portfolio-project.service';

describe('PortfolioProjectServiceService', () => {
  let service: PortfolioProjectServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioProjectServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
