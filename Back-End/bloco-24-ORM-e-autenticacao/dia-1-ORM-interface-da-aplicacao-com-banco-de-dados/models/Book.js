module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Books', {
    id: { primaryKey: true, type: DataTypes.INTEGER, autoIncrement: true },
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
    createdAt: DataTypes.Date
  }, { timestamps: false });

  return Book;
}