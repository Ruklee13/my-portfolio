import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '@/utils/sequalize';
import dbConnect from '@/utils/dbconnect';

const ImageModel = sequelize.define('images',{
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data: {
      type: DataTypes.BLOB,
      allowNull: false,
    },
    mimetype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
});

//ImageModel.sync();

export default ImageModel;
export type Images = {
  id: number
  filename: string
  date: Buffer
  mimetype: string
  created_at: Date
}