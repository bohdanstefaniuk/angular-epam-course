import { TestBed } from '@angular/core/testing';

import { GeneratorService, GeneratorFactory } from './generator.service';

describe('GeneratorService', () => {
  it('should generate string of length  8', () => {
    const service: GeneratorService = new GeneratorService();

    // Act
    const randomString = service.generate(8);

    // Assert
    expect(randomString.length).toBe(8);
  });
});

describe('GeneratorFactory', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [GeneratorService]
  }));

  it('should generate string of length 5', () => {
    const service: GeneratorService = new GeneratorService();

    // Act
    const randomString = GeneratorFactory(5).call(this, service);

    // Assert
    expect(randomString.length).toBe(5);
  });
});