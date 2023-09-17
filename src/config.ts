import { Dialect } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const development = {
  username: 'olalekan',
  password: 'olalekan247',
  database: 'coupon',
  host: 'localhost',
  dialect: 'postgres' as Dialect,
};
