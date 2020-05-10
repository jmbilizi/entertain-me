import React from 'react';
import { Carousel } from 'react-materialize';

const Trending = (props) => {

    return (
        <div className='center-align'>
            <h3>TRENDING MOVIES/TV</h3>
            <Carousel
                carouselId="movies"
                className="white-text center"
                options={{
                    fullWidth: true,
                    indicators: true
                }}
            >
                <div className="black">
                    <h2>#1: EXTRACTION</h2>
                    <img src='https://www.indiewire.com/wp-content/uploads/2020/03/Screen-Shot-2020-04-07-at-8.04.30-AM.png?w=780' alt='trending-1' />
                </div>
                <div className="black">
                    <h2>#2: STAR WARS: THE RISE OF SKYWALKER</h2>
                    <img src='https://specials-images.forbesimg.com/imageserve/5df92d2625ab5d0007cea565/960x0.jpg?cropX1=37&cropX2=904&cropY1=32&cropY2=519' alt='trending-2' />
                </div>
                <div className="black">
                    <h2>#3: OZARK</h2>
                    <img src='https://img.cinemablend.com/filter:scale/quill/9/3/2/a/3/b/932a3bc407c90272d1b228938426b97dcef9fb80.jpg?fw=1200' alt='trending-3' />
                </div>
                <div className="black">
                    <h2>#4: TIGER KING</h2>
                    <img src='https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABYjI3IGWp6ZG81rxU5Cd-iX_aTvVL9WG7bA90_LXZrwSlCBqVe0QQVG2ZT1NC2LUX7FyClUEnMxpMlY7sBnRI3oNPYzu.jpg?r=65d' alt='trending-4' />
                </div>
                <div className="black">
                    <h2>#: BROOKLYN NINE-NINE</h2>
                    <img src='https://img1.looper.com/img/gallery/the-real-reason-fox-canceled-brooklyn-nine-nine/intro-1579801657.jpg' alt='trending-5' />
                </div>
            </Carousel>
        </div>
    )
}

export default Trending;