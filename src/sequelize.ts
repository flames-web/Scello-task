import { Sequelize } from 'sequelize-typescript';
import { development } from './config';

const sequelize = new Sequelize(development);

export default sequelize;
