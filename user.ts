import {ModelBase} from './model-base';
import {Profile} from './profile-configuration';
import {Group} from "./group";
import {Biometry} from './biometry';

export class User extends ModelBase {
  public register: string;
  public email: string;
  public password: string;
  public biometry: string;
  public group_list: Group[]= [];
  public biometry_list: Biometry[];
  public groups: number[];
  public employee: any;
  public login: string;
}

/// aula git