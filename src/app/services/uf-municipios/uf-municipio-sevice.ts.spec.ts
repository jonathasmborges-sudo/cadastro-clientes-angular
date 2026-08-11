import { TestBed } from '@angular/core/testing';

import { UfMunicipioSeviceTs } from './uf-municipio-sevice.ts';

describe('UfMunicipioSeviceTs', () => {
  let service: UfMunicipioSeviceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfMunicipioSeviceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
