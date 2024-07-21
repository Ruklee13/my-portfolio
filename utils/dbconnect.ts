import sequelize from "./sequalize";

const dbConnect = async () => {
    try {
      await sequelize.authenticate();
      console.log('it worked');
    } catch (error) {
      console.log("not it didn't", error);
    }
  };

  export default dbConnect;