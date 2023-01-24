const getGenreId = (genres, genre) => {
    if (!genres || !genre) return 0

    let genreId
    let _genre = genre.toLowerCase()

    genres.filter(genre => {
        if (genre.uid === _genre) genreId = genre.id
    })

    return genreId
}

export default getGenreId