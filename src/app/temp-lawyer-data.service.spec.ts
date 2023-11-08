import { TestBed } from '@angular/core/testing';

import { TempLawyerDataService } from './temp-lawyer-data.service';

describe('TempLawyerDataService', () => {
  let service: TempLawyerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempLawyerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
