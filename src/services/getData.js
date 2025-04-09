import api from './api'

export async function getMovies() {

  const {
    data: { results } } = await api.get('/movie/popular')

  return results[4]
}


export async function getTopMovies() {

  const {
    data: { results } } = await api.get('/tv/top_rated')

  return results

 
}

export async function getTopSeries() {

  const {
    data: { results } } = await api.get('/tv/top_rated')

  return results
}

export async function getPopularSeries() {

  const {
    data: { results } } = await api.get('/tv/popular')

  return results
}

export async function getTopPeople() {

  const {
    data: { results } } = await api.get('/person/popular')

  return results
}



export async function getMovieSimilar(movieId) {

  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/similar`)

  return results
}



export async function getMovieVideos(movieId) {

  const {
    data: { results }
  } = await api.get(`/movie/${movieId}/videos`)

  return results[0]

}

export async function getMovieCredits(movieId) {

  const { data: { cast } } = await api.get(`/movie/${movieId}/credits`)

  return cast
}


export async function getMovieById(movieId) {

  const { data } = await api.get(`/movie/${movieId}`)

  return data
}




export const getPopularMovies = async () => {
  try {
      const { data } = await api.get('/movie/popular'); 
      return data.results;  
  } catch (error) {
      console.error("Erro ao buscar filmes populares:", error);
      throw error; 
  }
};

export const getRecomendation = async (movieId) => {
  try {
      const { data } = await api.get(`/movie/${movieId}/recommendations`); 
      return data.results; 
  } catch (error) {
      console.error("Erro ao buscar recomendações:", error);
      throw error;
  }
};


