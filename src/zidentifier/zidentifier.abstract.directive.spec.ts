import * as ng from 'angular';
import 'angular-mocks';

import {IZIdGeneratorService} from '@zthun/zidentifier.core';

import {ZIdentifierModuleName} from './zidentifier.module';

export class ZIdentifierTestUtil {

    public create(name: string, directiveAttribute: string, generateAttribute: string) {
        describe(name, () => {
            const ZValue: string = 'bar';

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
                element.attr(directiveAttribute, ZValue);
                return element;
            }

            function createTarget(html: ng.IAugmentedJQuery): ng.IAugmentedJQuery {
                let compiledElement = compile(html[0].outerHTML)(scope);
                scope.$apply();
                return compiledElement;
            }

            it(`updates the ${generateAttribute} on the element.`, () => {
                // Arrange
                // Act
                createTarget(createHtml());
                // Assert
                expect(zIdGeneratorSvc.generateAttributeForElement).toHaveBeenCalledWith(generateAttribute, ZValue, jasmine.anything());
            });

            it('leaves the element alone if the directive value is not set.', () => {
                // Arrange
                let html = createHtml();
                html.attr(directiveAttribute, '');
                // Act
                createTarget(html);
                // Assert
                expect(zIdGeneratorSvc.generateAttributeForElement).toHaveBeenCalledWith(generateAttribute, null, jasmine.anything());
            });

            it('correctly interpolates values from the scope.', () => {
                // Arrange
                let html = createHtml();
                scope.prop = 'my-value';
                html.attr(directiveAttribute, `${ZValue}-{{prop}}`);
                // Act
                createTarget(html);
                // Assert
                expect(zIdGeneratorSvc.generateAttributeForElement).toHaveBeenCalledWith(generateAttribute, `${ZValue}-my-value`, jasmine.anything());
            });
        });

    }
}
