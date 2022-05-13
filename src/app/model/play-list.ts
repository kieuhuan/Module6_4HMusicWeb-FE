import {User} from './user';
import {Song} from './song';

export interface PlayList {
  id?: number;
  name?: string;
  createdDate?: string;
  createDate?: string;
  song?: Song;
  songs?: Song[];
  user?: User;
  lastUpdate?: string;
  views?: number;
  description?: string;
}
