import styled from 'styled-components';


export const Background = styled.div`
    

    background-color: black;
    position: relative;
    height: 100vh;
    width: 100vw;
    
 
   
   
`

export const StyledIframe = styled.iframe`
     position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    border: none;

   
`
    


export const Container = styled.div`
    
    
    margin: 0 auto;
    text-align: center;
    margin: auto;
   


    .movie-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
         top: 50px;
        position: relative;
        color: white;
     
        

    }

    h1, h2 {
        color: red;
        font-size: 25px;
        position: relative;
        top: 50px;
        
    }


  


    .movie-recomendation {
        display: flex;
       flex-wrap: wrap;
        justify-content: space-evenly;
         top: 80px;
        position: relative;
        color: white;
       
    }
      
    




`;

export const MovieCard = styled.div`
    margin: 10px;
    width: 140px;
    text-align: center;
    
    cursor: pointer;
    & :hover {
        transform: scale(0.8)
        
        
    
    }
  

    

 
    img {
        width: 100%;
        border-radius: 8px;
    }

    h3 {
        font-size: 1rem;
        margin-top: 5px;
    }
`
