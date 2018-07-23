import { ZIdentifierTestUtil } from '../z-attr/z-abstract-attr-directive.class.spec';
import { ZIdInputAttribute, ZIdOutputAttribute } from './z-id.directive';

let testUtil = new ZIdentifierTestUtil();
testUtil.create('ZIdentifierDirective', ZIdInputAttribute, ZIdOutputAttribute);
