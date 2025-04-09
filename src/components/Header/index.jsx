import { Link, useLocation} from 'react-router-dom'

import { Container, Menu, Li } from "./style"
import Logo from '../../assets/dev.png'
import { useState } from 'react'



function Header() {
   
    const [changeBackground, setChangeBackground] = useState(true)
    const { pathname } = useLocation()

    window.onscroll = () => {
        if(!changeBackground && window.pageYOffset > 500) {
            setChangeBackground(true)
        }
    
        if(changeBackground && window.pageYOffset <= 150) {
            setChangeBackground(false)
        }
    }


    return (

        <Container $changeBackground={changeBackground}>
            <img src={Logo} alt="logo-devflix" />
        
        <Menu>
            <Li $isActive={pathname === '/'}>
                <Link to="/">Home</Link>
            </Li>
            <Li $isActive={pathname.includes('filmes')}>
                <Link onClick={() => navigate(`/filmes/${movieId}`)} to="filmes">Filmes</Link>
            </Li>
            <Li $isActive={pathname.includes('series')}>
                <Link to="series">Séries</Link>
            </Li>
           
   
        </Menu>
    </Container>
    )
}


export default Header


