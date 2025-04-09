
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {
    getMovieById,
    getMovieCredits,
    getMovieSimilar,
    getMovieVideos

} from "../../services/getData"
import { getImages } from "../../services/utils/getImages"
import { Container, Background, Cover, Info, ContainerMovies } from "./styles"
import SpanGenres from "../../components/SpanGenres"
import Credits from "../../components/Credits"
import Slider from '../../components/Slider'

function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    useEffect(() => {
        async function getAllData() {
            
                    Promise.all([
                    getMovieById(id),
                    getMovieVideos(id),
                    getMovieCredits(id),
                    getMovieSimilar(id)
                ])
               
                .then(([movie, video, credits, similar]) => {
                setMovie(movie)
                setMovieVideos(video)
                setMovieCredits(credits)
                setMovieSimilar(similar)

            }) 
            .catch((error) => console.error(error))
            
              
    }
        

        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />

                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt={movie.title} />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>
                        </Info>
                    </Container>

                    <ContainerMovies>
    {movieVideos && movieVideos.length > 0 ? ( 
        movieVideos.map((video) => (
            <div key={video.id}>
                <h4>{video.name}</h4>
                {video.key ? ( 
                    <iframe
                        src={`https://www.youtube.com/embed/${video.key}`}
                        title="YouTube Video Player"
                        height="500px"
                        width="100%"
                    ></iframe>
                ) : (
                    <p>Video não disponível</p> 
                )}
            </div>
        ))
    ) : (
        <p>Nenhum vídeo disponível</p> 
    )}
</ContainerMovies>
                    {movieSimilar && (
                     <Slider info={movieSimilar} title="Filmes Similares"/>
                    )}
                </>
            )}
        </>
    );
}

export default Detail
