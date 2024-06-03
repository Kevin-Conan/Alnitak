import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import home1 from './image/home1.png';
import home2 from './image/home2.png';
import image1 from './image/all-application.png';
import image2 from './image/game.png';
import image3 from './image/api-app.png';



function Home(){
    const navigate = useNavigate();

    const navigateToRule = () => {
        navigate('/rule');
    };
    const navigateToGame = () => {
        navigate('/gamestart');
    };

    return (
        <>
        <section className="home" id="home">
            <div className="row">
                <div className="image1"><img src={home1} alt="" /></div>
                <div className="content">
                    <h3>AIGC Dream!<span><br />It's myLLM!!!!</span></h3>
                    <div className="rows">
                        <button onClick={navigateToRule} className="button">
                            <div class="bgContainer">
                                <span className='span'>Rule</span>
                                <span className='span'>·Rule</span>
                            </div>
                            <div class="arrowContainer">
                                <svg
                                   width="25"
                                   height="25"
                                   viewBox="0 0 45 38"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                                    fill="black"
                                ></path>
                                </svg>
                            </div>
                        </button>

                        <button onClick={navigateToGame} className="button">
                            <div class="bgContainer">
                                <span>Start</span>
                                <span>·Start</span>
                            </div>
                            <div class="arrowContainer">
                                <svg
                                   width="25"
                                   height="25"
                                   viewBox="0 0 45 38"
                                   fill="none"
                                   xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
                                    fill="black"
                                ></path>
                                </svg>
                            </div>
                        </button>

                    </div>
                </div>
                <div className="image2"><img src={home2} alt="" /></div>
            </div>
        </section>

        <section className="count">
            <div className="box-container">
     
                <div className="box">
                    <div className="small-image">
                        <img src={image1} alt="" />
                    </div>
                    <div className="content">
                        <h3>多模块</h3>
                        <p>multi-module</p>
                    </div>
                </div>

                <div className="box">
                    <div className="small-image">
                        <img src={image2} alt="" />
                    </div>
                    <div className="content">
                        <h3>超有趣</h3>
                        <p>super fun</p>
                    </div>
                </div>

                <div className="box">
                    <div className="small-image">
                        <img src={image3} alt="" />
                    </div>
                    <div className="content">
                        <h3>富益智</h3>
                        <p>intelligent</p>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
}


export default Home;