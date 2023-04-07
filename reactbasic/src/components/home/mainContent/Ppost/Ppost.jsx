
import React from 'react'
import { ppost } from '../../../../dummyData'
import Heading from '../../../common/Heading/Heading'
import Slider from "react-slick";
// import "./popular.css"
import "./ppost.css"

const Ppost = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return <>
        <section className='popularPost'>
            <Heading title="Popular Posts" />
            <div className="items">
                <Slider {...settings}>
                    {ppost.map((val, index) => {
                        return (
                            <div key={index} className="items">
                                <div className="box shadow">
                                    <div className="images">
                                        <div className="img">
                                            <img src={val.cover} alt="" />
                                        </div>
                                        <div className="category category1">
                                            <span>{val.catgeory}</span>
                                        </div>
                                    </div>
                                    <div className="text row">
                                        <h1 className='title'>{val.title.slice(0, 40)}...</h1>
                                        <div className="date">
                                            <i className='fas fa-calendar-days'></i>
                                            <label htmlFor="">{val.date}</label>
                                        </div>
                                        <div className="comment">
                                            <i className='fas fa-comment'></i>
                                            <label htmlFor="">{val.date}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </section>
    </>

}

export default Ppost