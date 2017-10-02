import * as ng from 'angular';
import 'angular-mocks';

import {IZIdGeneratorService} from '@zthun/zidentifier.core';

import './zidgenerator.service';

import {ZIdentifierModuleName} from './zidentifier.module';

describe('ZIdGeneratorService', () => {
    let target: IZIdGeneratorService;

    beforeEach(()=>ng.mock.module(ZIdentifierModuleName));
    beforeEach(ng.mock.inject((zIdGeneratorService: IZIdGeneratorService) => target = zIdGeneratorService));

    it('defines the common service.', () => {
        // Arrange
        // Act
        // Assert
        expect(target).toBeDefined();
    });
});
