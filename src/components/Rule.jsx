import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import rule_photo1 from './image/rule1.png';
import rule_photo2 from './image/rule2.png';


function Rule(){
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    const navigateToGame = () => {
        navigate('/gamestart');
    };

    return(
        <section className="rule" id="rule">
            <div className="row">

                <div className="image1">
                    <img src={rule_photo1} alt="" />
                </div>

                <div className="content">
                    <div className="box">
                        <div className="contents">
                            <div class="bg"></div>
                            <div class="blob"></div>
                            <div class="card-text">
                                游戏规则<br/><br/>
                                玩家需要按照每道题目的要求，设计相应的对大模型提问的问题并提交，让大模型输出的内容符合题目要求便可通过相应关卡。<br/><br/>
                                玩家输入的问题和大模型给出的答案，两者若有一者不符合要求，关卡将无法通过。<br/><br/>
                                在特定关卡结束之后，游戏将给出一些补充知识讲解，帮助玩家学习和了解人工智能和大模型这一新兴领域。<br/><br/>
                                ps:由于大模型的原理，其针对相同的输入，所输出的解答不一定相同。所以同一个问题可以尝试多问一两次，没准能获取符合要求的回答。也因为此，制作组提供的解答仅供参考。恰如不断变化着运动着的世界一样，"唯一不变的只有变化本身"，这或许也是大模型的魅力之一吧!
游戏制作组真诚希望玩家能够在本游戏中收获愉快的游戏体验和学习到大模型的使用技巧～<br/><br/>
                                AIGC Dream!It's my LLM!制作组Alnitak全员献上<br/><br/>
                            </div>
                        </div>
                    </div>

                    <div className="rows">
                        <button onClick={navigateToHome} className="button">
                            <div class="bgContainer">
                                <span>Home</span>
                                <span>·Home</span>
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

                <div className="image2">
                    <img src={rule_photo2} alt="" />
                </div>

            </div>
        </section>
    );
}

export default Rule;