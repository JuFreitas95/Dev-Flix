import React, { useEffect, useState } from 'react';
import { Background, StyledIframe } from './style';
import { getPopularSeries, getTopSeries } from '../../services/getData';
import Slider from '../../components/Slider';
import { Swiper, SwiperSlide } from 'swiper/react';





function Series() {
    const [topseries, setTopSeries] = useState([]);
    const [seriespopular, setSeriesPopular] = useState([]);

    useEffect(() => {
        async function fetchSeries() {

            const topSeriesData = await getTopSeries();
            setTopSeries(topSeriesData);


            if (topSeriesData.length > 0) {
                const seriesPopularData = await getPopularSeries();
                setSeriesPopular(seriesPopularData);
            }
        }

        fetchSeries();
    }, []);

    return (
        <Background>




            <Swiper>
                <SwiperSlide>
                    <Slider info={topseries} title="Top Séries" />
                    <Slider info={seriespopular} title="Séries Populares" />
                </SwiperSlide>
            </Swiper>

           

            <StyledIframe 
            src="https://www.youtube.com/embed/HhesaQXLuRY?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&start=10"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
        />
        </Background>


    );





}
export default Series;