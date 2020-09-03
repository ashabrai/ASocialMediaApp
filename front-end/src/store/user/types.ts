/* eslint-disable @typescript-eslint/naming-convention */
export enum User_Action_Constants {
  CREATE_POST = '@@user/CREATE_POST',
  CREATE_POST_SUCCEEDED = '@@user/CREATE_POST_SUCCEEDED',
  CREATE_POST_FAILED = '@@user/CREATE_POST_FAILED',
}

export interface UserState {
  readonly errors?: string;
  readonly isCreatingNewPost?: boolean;
  readonly createdNewPost?: boolean;
}
