/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefaultUserService } from './DefaultUser.service';

describe('Service: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultUserService]
    });
  });

  it('should ...', inject([DefaultUserService], (service: DefaultUserService) => {
    expect(service).toBeTruthy();
  }));
});
