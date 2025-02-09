import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js'; 

const Answer = sequelize.define('Answer', {
  question_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  answer_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'answers', 
  timestamps: false, 
});

export default Answer;
