import { Sequelize } from 'sequelize';
import pg from 'pg';
const sequelize = new Sequelize('EEP', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  dialectModule:pg,
  define: {
    timestamps: false
  }
});

const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log('it worked');
  } catch (error) {
    console.log("not it didn't", error);
  }
};

export default sequelize;
