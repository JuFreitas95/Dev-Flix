import { useEffect, useState } from 'react';
import { Container, Background } from './styles';
import { getMovieVideos } from '../../services/getData'

function Modal({ movieId, setShowModal }) {
  const [movie, setMovie] = useState();

  useEffect(() => {
    async function getMovies() {
      const movie = await getMovieVideos(movieId);
      setMovie(movie)
    }
    getMovies();
  }, [movieId]);



  return (

    <Background onClick={() => setShowModal(false)}>
    
      { movie && (

      <Container>
        <iframe
          src={`https://www.youtube.com/embed/${movie.key}`}
          title='Video You Tube'
        height="500px"
        width= "500px"
       
        />
      </Container>
      )}
    </Background>


  );
}

export default Modal



