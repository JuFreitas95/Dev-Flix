import { Container } from "./style"

function SpanGenres ({ genres }) {

    return (

     <Container>
        {genres && 
        genres.map((genres) => <span key={genres.id}>{genres.name}</span>)}
     </Container>
    )

}



export default SpanGenres