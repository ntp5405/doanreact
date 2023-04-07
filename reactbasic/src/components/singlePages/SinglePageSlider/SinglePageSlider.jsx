import React from 'react'
import "./SinglePageSlider.css"
import Slider from "react-slick";
import { popular } from '../../../dummyData';

const SinglePageSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
        ],
    };
    return (
        <>
            <section className='singlePopular'>
                <Slider {...settings}>
                    {popular.map((val) => {
                        return (
                            <div className="items">
                                <div className="box">
                                    <div className="images">
                                        <div className="img">
                                            <img src={val.cover} alt="" />
                                        </div>

                                    </div>
                                    <div className="text">
                                        <h1 className='title'>{val.title}</h1>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </section>
        </>
    )
}

export default SinglePageSlider