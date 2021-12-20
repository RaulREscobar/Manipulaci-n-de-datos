module.exports = (sequelize, dataTypes) => {
    let alias = 'Genres';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type : dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique: true
        },
        active: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            dafaultValue: 1
        }
    }
    let config = {
        tableNames: 'Genres',
        tiemestamps: true
    }

    const Genre = sequelize.define(alias, cols, config)

    Genre.associate = models => {
        Genre.hasMany(models.Movies, {
            as : "movies",
            foreignKey: "genre_id"
        })
    }
    return Genre
}