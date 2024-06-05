import { tags } from 'typia';

export interface UserDto {
  id: string & tags.Format<'uuid'>;
  name: string;
}
