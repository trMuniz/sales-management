import { TestBed } from '@angular/core/testing';

import { ImmunizationRecordService } from './immunization-record.service';

describe('ImmunizationRecordService', () => {
  let service: ImmunizationRecordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImmunizationRecordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
