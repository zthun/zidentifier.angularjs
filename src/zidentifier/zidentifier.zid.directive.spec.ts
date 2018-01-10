import { ZIdentifierTestUtil } from './zidentifier.abstract.directive.spec';

export const ZIdentifierDirectiveAttribute = 'data-z-id';
export const ZIdentifierDirectiveAttributeToGenerate = 'id';

let testUtil = new ZIdentifierTestUtil();
testUtil.create('ZIdentifierDirective', ZIdentifierDirectiveAttribute, ZIdentifierDirectiveAttributeToGenerate);

/*
import * as ng from 'angular';
import 'angular-mocks';

import {IZIdGeneratorService} from '@zthun/zidentifier.core';

import {ZIdentifierModuleName} from './zidentifier.module';

describe('ZIdentifierDirective', () => {
    const ZId: string = 'bar';

    let compile: ng.ICompileService;
    let zIdGeneratorSvc: IZIdGeneratorService;
    let scope: any;

    beforeEach(ng.mock.module(ZIdentifierModuleName));
    beforeEach(ng.mock.inject(($compile: ng.ICompileService) => compile = $compile));
    beforeEach(ng.mock.inject(($rootScope: ng.IRootScopeService) => scope = $rootScope.$new()));

    beforeEach(ng.mock.inject((zIdGeneratorService: IZIdGeneratorService) => {
        zIdGeneratorSvc = zIdGeneratorService;

        spyOn(zIdGeneratorSvc, 'generateAttributeForElement').and.callFake((attr: string, zid: string, el: HTMLElement) => {
            el.setAttribute(attr, `foo-${zid}`);
            return el;
        });
    }));

    function createHtml(): ng.IAugmentedJQuery {
        let element = ng.element(document.createElement('div'));
        element.attr('data-z-id', ZId);
        return element;
    }

    function createTarget(html: ng.IAugmentedJQuery): ng.IAugmentedJQuery {
        let compiledElement = compile(html[0].outerHTML)(scope);
        scope.$apply();
        return compiledElement;
    }

    it('updates the id on the element.', () => {
        // Arrange
        let target = createTarget(createHtml());
        // Act
        let id = target.attr('id');
        // Assert
        expect(zIdGeneratorSvc.generateAttributeForElement).toHaveBeenCalledWith('id', ZId, jasmine.anything());
    });

    it('leaves the element alone if the zid is not set.', () => {
        // Arrange
        let html = createHtml();
        html.attr('data-z-id', '');
        let target = createTarget(html);
        // Act
        let id = target.attr('id');
        // Assert
        expect(zIdGeneratorSvc.generateAttributeForElement).toHaveBeenCalledWith('id', null, jasmine.anything());
    });

    it('correctly interpolates values from the scope.', () => {
        // Arrange
        let html = createHtml();
        scope.prop = 'my-value';
        html.attr('data-z-id', `${ZId}-{{prop}}`);
        let target = createTarget(html);
        // Act
        let id = target.attr('id');
        // Assert
        expect(zIdGeneratorSvc.generateAttributeForElement).toHaveBeenCalledWith('id', `${ZId}-my-value`, jasmine.anything());
    });
});
*/
