import { ZIdentifierTestUtil } from '../z-attr/z-abstract-attr-directive.class.spec';
import { ZForInputAttribute, ZForOutputAttribute } from './z-for.directive';

let testUtil = new ZIdentifierTestUtil();
testUtil.create('ZForIdentifierDirective', ZForInputAttribute, ZForOutputAttribute);
