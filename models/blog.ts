import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '@/utils/sequalize';
import { Flamenco } from 'next/font/google';

const BlogModel = sequelize.define('Blog', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

sequelize.sync();
export default BlogModel
export type Blog = {
    title: string
    date: Date
    body: string
}