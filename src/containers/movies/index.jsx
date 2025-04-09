import React, { useEffect, useState } from "react";
import { getPopularMovies, getRecomendation } from "../../services/getData"; 
import { Container, Background, StyledIframe } from './style'; 
import Slider from "../../components/Slider"; 

function Movies() {
    const [movies, setMovies] = useState([]); 
    const [movieRecommendation, setMovieRecommendation] = useState([]); 


    useEffect(() => {
        async function fetchMovies() {
            try {
              const popularMovies = await getPopularMovies(); 
                setMovies(popularMovies); 

                console.log(popularMovies);

                if (popularMovies.length > 0) {
                    const recommendations = await getRecomendation(popularMovies[0].id); 
                    setMovieRecommendation(recommendations); 



                }
            } catch (error) {
            

            }
        }

        fetchMovies(); 
    }, []); 


    return (
        <>
            <Background >


                <Container>



                <StyledIframe 
            src="https://www.youtube.com/embed/esy1i3kpaOU?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&start=10"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />
                </Container>

            </Background>


            <>


                <Slider info={movies} title="Filmes Populares" />
                <Slider info={movieRecommendation} title="Recomendações" />


            </>

        </>
    );
}

export default Movies

