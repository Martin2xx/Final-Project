import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('final_project_db', 'root', '2155631Mr!', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  await sequelize.authenticate();
  console.log('Connection to MySQL has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;
