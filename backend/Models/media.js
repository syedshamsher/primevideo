const mongoose = require("mongoose")
const Schema = mongoose.Schema
const mediaSchema = new Schema({
    adult: {
        type: Boolean,
        required: false
    },
    backdrop_path: {
        type: String,
        required: false
    },
    genre_ids: {
        type: Array,
        required: false
    },
    id: {
        type: String,
        required: false
    },
    original_language: {
        type: String,
        required: false
    },
    original_title: {
        type: String,
        required: false
    },
    overview: {
        type: String,
        required: false
    },
    poster_path: {
        type: String,
        required: false
    },
    release_date: {
        type: Date,
        required: false
    },
    first_air_date: {
        type: Date,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    vote_average: {
        type: String,
        required: false
    },
    vote_count: {
        type: String,
        required: false
    },
    popularity: {
        type: String,
        required: false
    },
    media_type: {
        type: String,
        required: false
    },
},
    {
        versionKey: false
    }
)

module.exports = mongoose.model("Media", mediaSchema)