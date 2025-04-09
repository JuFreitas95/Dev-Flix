import { Route, Routes } from 'react-router-dom'

import Detail from '../containers/Detail'
import Home from '../containers/Home'
import Movies from '../containers/movies'
import Series from '../containers/series'
import DefaultLayout from '../Layout/DefaultLayout'


function Router() {
    return (

        <Routes>

                <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/filmes/" element={<Movies />} />
                <Route path="/series" element={<Series />} />
                <Route path="/detalhe/:id" element={<Detail />} />
            </Route>
        </Routes>
    )


}

export default Router