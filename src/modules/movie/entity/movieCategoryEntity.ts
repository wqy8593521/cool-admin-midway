import {BaseEntity} from '@cool-midway/core';
import {Column, Entity} from 'typeorm';

/**
 * 描述
 */
@Entity('movie_category')
export class MovieCategoryEntity extends BaseEntity {
  @Column({comment: '分类名称'})
  name: string;

  @Column({comment: '分类图标'})
  icon: string;

}
