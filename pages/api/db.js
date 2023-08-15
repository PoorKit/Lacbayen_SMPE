import Sequelize from 'sequelize';

const sequelize = new Sequelize('smpe', 'root', 'defaultroot', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
