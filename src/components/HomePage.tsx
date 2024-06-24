import React from 'react';
import '../Styles/HomePage.scss'
import img1 from '../images/slid1.webp'
import img2 from '../images/slid2.webp'
import img3 from '../images/slid3.webp'
import img4 from '../images/slid4.webp'

const HomePage = () => {
    return (
        <div className='HomePage'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={img4} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default HomePage;