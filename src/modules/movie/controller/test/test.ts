import {CoolController, BaseController} from '@cool-midway/core';
import {MovieCategoryEntity} from "../../entity/movieCategoryEntity";
import {Provide} from "@midwayjs/core";

/**
 * 描述
 */
@Provide()
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: MovieCategoryEntity,
})
export class TestController extends BaseController {
}
