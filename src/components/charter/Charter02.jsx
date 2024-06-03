import React, { useState,useEffect} from 'react';
import "./charter.css";
import json_data1 from "./data2.json"    
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
    var tmp=localStorage.getItem('session2');
    //localStorage.setItem('session2',6);
    if(tmp==null){
      localStorage.setItem('session2',0);
    }
    const handleCloseModal = () => {
      setmodal_open(0);
    };
    const handleItemClick = async (item) => {
      // 当li被点击时，更新selectedItem的值
      const session1_now=Number(localStorage.getItem('session2'))+1;
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
      const session1_now=Number(localStorage.getItem('session2'));
      if(feng<=session1_now){
        if(feng==7){
          alert("你已经完成所有关卡了惹<(￣︶￣)>")
        }
        else {
          setfeng(feng+1);
          setans("");
         setContent("");
        }
      }
      else {
        alert("请先完成前面的关卡");
      }
    };
    const handleSubmit = async (event) => {
      event.preventDefault(); // 阻止表单默认提交行为
      if(feng==1){
        const numericPattern = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
        if(numericPattern.test(content)==false){
          alert("只能输入数字哦~");
          return;
        }
        setContent(content);
      }
      else if(feng==2){
        const numericPattern = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
        if(numericPattern.test(content)==false){
          alert("只能输入数字哦~");
          return;
        }
        if(content.length<=1){
          alert("你都不愿意多输入一个数字吗（可怜~~~");
          return;
        }
      }
      else if(feng==3){
        const n=content.length;
        if (n < 2) {
          alert("合数怎么能小于2呐");
          return ;
        }
        let flag=0;
      // 从2开始检查到sqrt(n)，如果n能被其中任意一个数整除，则是合数
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                flag=1;
                break;
            }
        }
        if(flag==0){
          alert("不是说好字数是合数了吗（委屈~");
          return;
        }    
      }
      else if(feng==4){
        if(content.length<=10){
          alert("请输入10个字以上嘤嘤嘤~~~");
          return;
        }
      }
      else if(feng==6){
        const numericPattern = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
        if(numericPattern.test(content)==false){
          alert("只能输入数字哦~");
          return;
        }
      }
      else if(feng==7){
        const numericPattern = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
        if(numericPattern.test(content)==false){
          alert("只能输入数字哦~");
          return;
        }
      }
      setloading(1);
      try {
        // 使用fetch发送POST请求到后端
        let data_send;
        if(feng==1){
          data_send={
            charter:2,
            session:feng,
            content:content+",代表什么",
          };
        }
        else {
          data_send={
            charter:2,
            session:feng,
            content:content,
          };
        }
        
        let response;
        console.log(data_send.content);
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
            setmodal_content("大模型认可了玩家你的回答！\n大模型的回答如下:\n"+zt_json_response);
            setans(json_data1[feng].ans)
            const dq=Number(localStorage.getItem('session2'));
            if(dq<feng+1){
                localStorage.setItem('session2',feng);
            } 
            if(feng==7){
              alert("您已完成所有本章所有挑战，请选择其它章节挑战吧");
              localStorage.setItem('session2',feng);
            }          
          }
          else {
            setmodal_title("Wrong Answer");
            setmodal_open(1);
            setmodal_content("大模型觉得你还有进步空间\n大模型的回答如下:\n"+zt_json_response);
          }
        } else {
          alert('内容提交失败,请重试');
        }
      } catch (error) {
        alert('请求错误:', error);
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
                <progress max="7" value={Number(localStorage.getItem('session2'))} className='yoda'>
                </progress>
                <span className='jindu_span'>当前进度2-{Number(localStorage.getItem('session2'))}</span>
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
              <li onClick={() => handleItemClick(5)}>{json_data1[5].title}</li>
              <li onClick={() => handleItemClick(6)}>{json_data1[6].title}</li>
              <li onClick={() => handleItemClick(7)}>{json_data1[7].title}</li>
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