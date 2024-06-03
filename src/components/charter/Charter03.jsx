import React, { useState,useEffect} from 'react';
import "./charter.css";
import json_data1 from "./data3.json"    
import Modal from './Modal';
import Character1 from '../image/character1.png'
import Character2 from '../image/character2.png'
function Charter01(){
    const [content, setContent] = useState('');//用户提交的内容
    const [feng,setfeng]=useState(1);//当前章节的关卡
    var print_data='';
    var ans_data='';
    var title_data="";
    const [ans,setans]=useState("若有文字框重叠情况，请缩放网页(╥╯θ╰╥)");//控制答案框内容的输出
    const [modal_open,setmodal_open]=useState(0);
    const [modal_content,setmodal_content]=useState("");
    const [loading,setloading]=useState(0);
    const [modal_title,setmodal_title]=useState("");
    var flag2=0;
    var tmp=localStorage.getItem('session3');
    if(tmp==null){
      localStorage.setItem('session3',0);
    }
    const handleCloseModal = () => {
      setmodal_open(0);
    };
    const handleItemClick = async (item) => {
      // 当li被点击时，更新selectedItem的值
      const session1_now=Number(localStorage.getItem('session3'))+1;
      if(session1_now>=item){
         setfeng(item);
         setans("");
         setContent("")
      }
      else {
        alert("请先完成前面的关卡");
      }
    };
    const handleNextSession = async () => {
      const session1_now=Number(localStorage.getItem('session3'));
      if(feng<=session1_now){
        if(feng==4){
          alert("你已经完成所有关卡了惹<(￣︶￣)>")
        }
        else setfeng(feng+1);
         setans("");
         setContent("");
      }
      else {
        alert("请先完成前面的关卡");
      }
    };
    const handleSubmit = async (event) => {
      event.preventDefault(); // 阻止表单默认提交行为
      
      if(feng==1){
        const regex = /^[A-Za-z0-9\s.,;!?'\-]+$/;
        if(regex.test(content)==false){
          alert("请输入纯英文内容");
          return;
        }
      }
      else if(feng==2){
        const regex = /^[A-Za-z0-9\s.,;!?'\-]+$/;
        if(regex.test(content)==false){
          alert("请输入纯英文内容");
          return;
        }
        const words = content.trim().split(/\s+/);
        if(words.length<=8){
          alert("请输入8个单词以上哦~");
          return;
        }
      }
      else if(feng==3){
        const regex = /^[A-Za-z0-9\s.,;!?'\-]+$/;
        if(regex.test(content)==false){
          alert("请输入纯英文内容");
          return;
        }
        const flag1=content.indexOf("Good");
        const flag2=content.indexOf("good");
        if(flag1!=-1||flag2!=-1){
          alert("人家都说了不要good不要good！");
          return;
        }
      }
      else if(feng==4){
        const regex =/^[A-Za-z0-9\s.,;!?'\-]+$/;
        if(regex.test(content)==false){
          alert("请输入纯英文内容");
          return;
        }
        let zt_json_response1
        let reversedStr = content.split('').reverse().join('');
        console.log(reversedStr);
        if(content==reversedStr){
          alert("请不要输入回文字符~");
          return;
        }
        setloading(1);
        try {
          // 使用fetch发送POST请求到后端
          const data_send1={
            charter:1,
            session:feng,
            content:content,
          };//发送内容的定义
          const response1 = await fetch('http://8.130.179.92:1314', {//后端接口链接
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data_send1),
          });
          const zt_json1=await response1.json();// 读取后端返回内容，具体需要再根据json格式文件修改
          if (response1.ok) { 
            zt_json_response1=zt_json1.response;
          
          } else {
            alert('内容提交失败,请重试');
          }
        } catch (error) {
          console.error('请求错误:', error);
        } 

        try {
          // 使用fetch发送POST请求到后端
          const data_send={
            charter:1,
            session:feng,
            content:reversedStr,
          };//发送内容的定义
          let response;
          try{
            response = await fetch('http://8.130.179.92:1314', {//后端接口链接
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data_send),
           });
          }finally{
            setloading(0);
          }  
          const zt_json=await response.json();// 读取后端返回内容，具体需要再根据json格式文件修改
          const zt_json_response=zt_json.response;
          if (response.ok) {
            if(zt_json_response==zt_json_response1){
              setmodal_title("All Correct!!!");
              setmodal_open(1);
              setmodal_content("大模型认可了玩家你的回答！!\n大模型的回答如下:\n"+zt_json_response);
              alert("您已完成所有本章所有挑战，请选择其它章节挑战吧");
            }
            else {
              setmodal_title("Wrong Answer");
              setmodal_open(1);
              setmodal_content("大模型觉得你还有进步空间,大模型的回答如下:\n"+zt_json_response1+"\n以及第二个回答\n"+zt_json_response);
            }
          } else {
            alert('内容提交失败,请重试');
          }
        } catch (error) {
          alert('内容提交失败,请重试');
          console.error('请求错误:', error);
        } 
        return;
      }


      setloading(1);
      try {
        // 使用fetch发送POST请求到后端
        const data_send={
          charter:3,
          session:feng,
          content:content,
        };//发送内容的定义
        let response;
        try{
          response = await fetch('http://8.130.179.92:1314', {//后端接口链接
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data_send),
         });
        }finally{
          setloading(0);
        }
        
        const zt_json=await response.json();// 读取后端返回内容，具体需要再根据json格式文件修改
        const zt_json_status=zt_json.status;
        const zt_json_response=zt_json.response;
        const zt_json_check=zt_json.check;
        if (response.ok) {
          if(zt_json_check==1){
            setmodal_title("All Correct!!!");
            setmodal_open(1);
            setmodal_content("大模型认可了玩家你的回答！！\n大模型的回答如下:\n"+zt_json_response);
            setans(json_data1[feng].ans)
            const dq=Number(localStorage.getItem('session3'));
            if(dq<feng+1){
                localStorage.setItem('session3',feng);
            } 
            if(feng==7){
              alert("您已完成所有本章所有挑战，请选择其它章节挑战吧");
              localStorage.setItem('session3',feng);
            }          
          }
          else {
            setmodal_title("Wrong Answer");
            setmodal_open(1);
            setmodal_content("大模型觉得你还有进步空间\n大模型的回答如下:\n"+zt_json_response);
          }
        } else {
          console.error('内容提交失败,请重试');
          alert('内容提交失败,请重试')
        }
      } catch (error) {
        console.error('请求错误:', error);
        alert('请求错误:')
      }

    };
    print_data=json_data1[feng].name;
    title_data=json_data1[feng].title;
    const dq=Number(localStorage.getItem('session1'));
    var ans_data;
    
    if(feng<=dq){
      ans_data=json_data1[feng].ans;
    }
    else {
      ans_data=""
    }
    return(
        <div className='zoom'>
           
            <div className='chapter1 cursor'> 
            {loading ? (
         <Modal isOpen={1} onClose={handleCloseModal} p_content="" h1_content="加载中....." img_content="true">
         </Modal>
      ) : (
        <Modal isOpen={modal_open} onClose={handleCloseModal} p_content={modal_content} h1_content={modal_title} img_content="">
              </Modal>
      )}
              
              <div className='loader_container '>
                <progress max="4" value={Number(localStorage.getItem('session3'))} className='yoda'>
                </progress>
                <span className='jindu_span'>当前进度3-{Number(localStorage.getItem('session3'))}</span>
              </div>
              <div className='grid_container'>
              <div className='griditem' id='grid1'>
             
              <div id="sidebarMenu">
              <ul className="sidebarMenuInner">
              <li>选关:</li>
              <li onClick={() => handleItemClick(1)}>{json_data1[1].title}</li>
              <li onClick={() => handleItemClick(2)}>{json_data1[2].title}</li>
              <li onClick={() => handleItemClick(3)}>{json_data1[3].title}</li>
              <li onClick={() => handleItemClick(4)}>{json_data1[4].title}</li>
              </ul>
              </div>
            </div>
              <div className='griditem grid_child' id='grid3'>
                    <div className='grid2'>
                      <div id="grid2_title">
                        <h1 id="grid2_title">{title_data}</h1>
                      </div>
                      <div id='grid2_1'> 
                        <div className='grid3'>
                          <img src={Character1} alt="" id="character1"/>
                        <div className="box2" id='box1'>
                          {print_data}
                        </div>
                        </div>
                      </div>                      
                      <div id='grid2_2'>
                        <div className='grid3'>
                        <img src={Character2} alt="" id="character1" className='float-div'/>
                          <div className='box2' id='box2'>
                          {ans_data}
                          </div> 
                        </div>  
                      </div>
                      <div id='grid2_3'> 
                        <form onSubmit={handleSubmit} id='form2'>
                          <div className='grid4'>
                            <textarea className="input" value={content} onChange={(e) => setContent(e.target.value)} placeholder="请输入内容..."id='textarea2'/>
                            <div className='grid4_button'>
                                <div className='button' id='button2' onClick={() => handleNextSession()}>下一关</div>
                                <button type="submit" className='button' id='button1'>提交</button>                                
                            </div>
                          </div>
                        </form>
                          
                      </div>
                    </div>
              </div>
              </div>
            </div>
        </div>
    )
}

export default Charter01;