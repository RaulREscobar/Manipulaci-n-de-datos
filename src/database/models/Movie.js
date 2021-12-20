module.exports = (sequelize, dataTypes) => {
    let alias = 'Movies';
    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type : dataTypes.STRING(500),
            allowNull: false,
        },
        rating: {
            type : dataTypes.DECIMAL(3, 1).UNSIGNED,
            allowNull : false,
        },
        awards: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull:false,
            dafaultValue: 0
        },
        release_date: {
            type : dataTypes.DATEONLY,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        },
        genre_id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
        }
    }
    let config = {
        tableNames: 'Movies',
        tiemestamps: true
    }

    const Movie = sequelize.define(alias, cols, config)

    Movie.associate = models => {
        Movie.belongsTo(models.Genres, {
            as : "genre",
            foreignKey: "genre_id"
        })
    }
    return Movie
}