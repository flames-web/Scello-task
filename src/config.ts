import { Dialect } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

// export const development = {
//   username: 'olalekan',
//   password: 'olalekan247',
//   database: 'coupon',
//   host: '127.0.0.1',
//   dialect: 'postgres' as Dialect,
// };

// export const development =
//    {
//     host: 'bubble.db.elephantsql.com',
//     port: 5432,
//     database: 'ihpbgoha',
//     username: 'ihpbgoha',
//     password: 'FCce7c7cZ__47t_XVvaLe4U2CMkq-Zz-',
//     dialect: 'postgres' as Dialect,
//   };
// Other application configurations...

// export const development = {
//   dialect: 'postgres' as Dialect,
//   host: 'bubble.db.elephantsql.com',
//   port: 5432,
//   username: 'ihpbgoha',
//   password: 'FCce7c7cZ__47t_XVvaLe4U2CMkq-Zz-',
//   database: 'ihpbgoha',
// };

export const development = {
  dialect: 'postgres' as Dialect,
  host: 'bubble.db.elephantsql.com',
  port: 5432,
  username: 'rqswcuyr',
  password: 'GKuqtGu47Yu-2pQtgZLVu5Mnyx7-W3pW',
  database: 'rqswcuyr',
};

// {
//   host: config.development.host,
//   port: config.development.port,
//   dialect: 'postgres',
// }
