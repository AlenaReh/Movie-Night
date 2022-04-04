import React from 'react';
import HeroSlide from '../components/Hero/Hero';
import MovieList from '../components/MovieList/MovieList';
import { category, movieType, tvType } from '../api/tmdbApi';
import { Link } from 'react-router-dom';
import { OutlineButton } from '../components/Btn/Btn';

const Home = () => {
    return (
        <>
            <HeroSlide/>

            <div className="container">
                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Popular Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated Movies</h2>
                        <Link to="/movie">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.top_rated}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Popular TV Shows</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.popular}/>
                </div>

                <div className="section mb-3">
                    <div className="section__header mb-2">
                        <h2>Top Rated TV Shows</h2>
                        <Link to="/tv">
                            <OutlineButton className="small">View more</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.tv} type={tvType.top_rated}/>
                </div>
            </div>

        </>
    )
}

export default Home;