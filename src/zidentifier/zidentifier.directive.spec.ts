import * as ng from 'angular';
import 'angular-mocks';

import {IZIdGeneratorService} from '@zthun/zidentifier.core';

import {ZIdentifierModuleName} from './zidentifier.module';

describe('ZIdentifierDirective', () => {
    const ZId: string = 'bar';

    let compile: ng.ICompileService;
    let zIdGeneratorSvc: IZIdGeneratorService;
    let scope: ng.IScope;

    beforeEach(ng.mock.module(ZIdentifierModuleName));
    beforeEach(ng.mock.inject(($compile: ng.ICompileService) => compile = $compile));
    beforeEach(ng.mock.inject(($rootScope: ng.IRootScopeService) => scope = $rootScope.$new()));

    beforeEach(ng.mock.inject((zIdGeneratorService: IZIdGeneratorService) => {
        zIdGeneratorSvc = zIdGeneratorService;

        spyOn(zIdGeneratorSvc, 'generateIdForElement').and.callFake((zid: string, el: HTMLElement) => {
            el.setAttribute('id', `foo-${zid}`);
            return el;
        });
    }));

    function createHtml(): ng.IAugmentedJQuery {
        let element = ng.element(document.createElement('div'));
        element.attr('data-z-id', ZId);
        return element;
    }

    function createTarget(): ng.IAugmentedJQuery {
        let html = createHtml();
        let compiledElement = compile(html[0].outerHTML)(scope);
        scope.$apply();
        return compiledElement;
    }

    it('updates the id on the element.', () => {
        // Arrange
        let expected = `foo-${ZId}`;
        let target = createTarget();
        // Act
        let id = target.attr('id');
        // Assert
        expect(id).toEqual(expected);
    });
});
