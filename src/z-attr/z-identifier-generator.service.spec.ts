import { ZIdentifierGenerator } from '@zthun/identifier.core';
import { mock } from 'angular';
import { ZIdentifierModuleName } from '../z-identifier.module';

describe('ZIdGeneratorService', () => {
  let target: ZIdentifierGenerator;

  beforeEach(() => mock.module(ZIdentifierModuleName));
  beforeEach(mock.inject((zIdentifierGenerator: ZIdentifierGenerator) => target = zIdentifierGenerator));

  it('defines the common service.', () => {
    // Arrange
    // Act
    // Assert
    expect(target).toBeDefined();
  });
});
