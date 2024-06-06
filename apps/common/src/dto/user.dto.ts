import { tags } from 'typia';

export interface UserDto {
  /**
   * Primary Key.
   */
  id: string & tags.Format<'uuid'>;
  /**
   * name of the user.
   */
  name: string & tags.MinLength<3> & tags.MaxLength<20>;
  /**
   * email of the user.
   */
  email: string & tags.Format<'email'>;
  /**
   * password of the user.
   *
   * @internal
   */
  password: string & tags.MinLength<6>;
}

export interface CreateUserDto {
  name: string & tags.MinLength<3> & tags.MaxLength<20>;
  email: string & tags.Format<'email'>;
  password: string & tags.MinLength<6>;
  passwordConfirm: string & tags.MinLength<6>;
}
