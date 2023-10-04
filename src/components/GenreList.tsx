import FetchGenres from "../hooks/FetchGenres"

const GenreList = () => {
    const {genres, error, isLoading} = FetchGenres();
    return(
        <ul>
            {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
        </ul>
    )
}
export default GenreList 
