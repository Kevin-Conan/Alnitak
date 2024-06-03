import React from 'react';
import about from './image/about.png';

function About() {
    return (
        <section className='about' id="about">
            <h1 className="heading"><span>About </span>this game</h1>
            <div className="row">
                <div className="box">
                    <div className="content">
                        <h3>创作者想说</h3>
                    </div>
                    <p className='image'>
                        <img src={about} alt="关于图标"/>
                    </p>
                </div>
                <div className="content">
                    <p>AI时代，未来已来！<br/>
                    亲爱的玩家，欢迎来到“AIGC Dream!It is my LLM！”游戏页面！ <br/>
                    这是一款由Alnitak小组开发的趣味智力解谜游戏，玩家将通过这款游戏对人工智能与大模型产生更为深刻的理解，<br/>
                    同时提升自己运用大模型获取所需信息的能力。<br/>
                    在人工智能飞速发展的今天，即使拥有强大性能的大模型，但恰如爱因斯坦所言：<br/>
                    “好的提问比问题的解答更重要。”我们需要好的问题来获得相应的答案！<br/>
                    正可谓:“人类不是万能的，但没有人类是万万不能的！” <br/>
                    在游戏中，玩家需要巧妙构造问题来调教“大模型”，使其能针对所需回答的问题给出满足特定条件的回答。<br/>
                    在这里，你可以和大模型斗智斗勇，充分运用你的聪明才智构造相应问题，<br/>
                    让大模型成为人类的好帮手，符合人类需要地完成人类提供的任务。<br/>
                    一起来享受玩“坏”大模型的乐趣吧！<br/>
                    感谢阿里云服务器和通义千问提供的大模型支持！感谢 Haoqiang Fan的基础创意！ <br/>
                    若有疑问，吐槽，建议，打赏……请于下方链接联系我们！感谢您的支持与帮助！<br/>
                          ——Alnitak小队全员祝您游戏愉快，有所收获！<br/>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;