import { JSONFilePreset } from 'lowdb/node'
import User from '../models/user.model';
import { DEFAULT_USERS } from './constants';

type Data = {
    users: User[];
}

const defaultData: Data = { users: [...DEFAULT_USERS] };

const db = await JSONFilePreset('./db.json', defaultData);

export default db;
