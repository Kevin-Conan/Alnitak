import random
from http import HTTPStatus
from dashscope import Generation  # 建议dashscope SDK 的版本 >= 1.14.0
import dashscope
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
import asyncio
import aiohttp
dashscope.api_key="sk-8bfe6470e3204d66a4cd011190893ece"
app = FastAPI()
from http import HTTPStatus
import dashscope  
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import re
# -*- coding: UTF-8 -*-
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],          # 允许所有HTTP方法
    allow_headers=["*"],          # 允许所有头部信息
) 
def split_chinese_chars(s):
    return [char for char in s]
allowed_chars_pattern = r'^[\u4e00-\u9fa5\s\r\n\t\v\f\W\w]+$'
def check(charter,session,content,question):
    if charter == 1:
        if session == 0:
            content=content.replace('\n', '').replace('\t', '').replace(' ', '')
            if(content=="水是剧毒的"):
                return 1
        if session==1:
            return "强化学习" in content
        if session==2:
            return "忍俊不禁" in content
        if session==3:
            return len(content) > 400
        if session==4:
            return len(content) > 100 and content.count('赞') >= 5
        if session  == 5:
            return len(content) > 100 and all(char not in "的一了是我" for char in content) and re.match(allowed_chars_pattern, content)
        if session == 6:
            if len(content) > 20 and re.match(allowed_chars_pattern, content) and re.match(allowed_chars_pattern, question):
                chinese_content = set(re.findall(r'[\u4e00-\u9fff]+', content))
                chinese_question = set(re.findall(r'[\u4e00-\u9fff]+', question))
                content_chars = split_chinese_chars(content)
                question_chars = split_chinese_chars(question)
                return  all(char not in  content_chars for char in question_chars) and all(char not in question_chars for char in content_chars) 
            else:
                return False
        if session ==7:
            return 1
        
    elif charter==2:
        if session==1:
            return "显卡" in content
        if session==2:
            return content.count(question) >= 3
        if session==3:  
            length=len(question)
            while True:
                length+=1
                flag=0
                for i in range(2,length//2+1):
                    if length%i==0:
                        flag=1
                        break
                if flag==1:
                    break
            basic_chars_pattern = r'[a-zA-Z0-9\u4e00-\u9fa5]'
             
            return len(re.findall(basic_chars_pattern, content))==length
        if session==4:
            return question[-7:]==content[:7]
        if session==5:
            len1=len(question)
            len2=len(content)
            return len1%len2==0
        if session==6:
            non_overlapping_digits = set(filter(lambda x: x.isdigit(), content)) - set(filter(lambda x: x.isdigit(), question))
            return len(non_overlapping_digits) > 3
        if session==7:
            a=int(question)
            return content.count(str(a+1))!=0 or content.count(str(a-1))!=0
        
        
    elif charter==3:    
        forbidden_words = [
        "the", "The", "tHe", "thE", "ThE", "tHE", "TeH", "THE",
        "be", "Be", "bE", "BE",
        "of", "Of", "oF", "OF",
        "a", "A",
        "in", "In", "iN", "IN"
        ]
        if session == 1:
            allowed_pattern = r'^[a-zA-Z0-9.,!?@#$%^&*():;<>{}[\]-=_\'\"]+$'
    
    # Check length and that no forbidden words are present and the content matches the allowed pattern
            return len(content) >= 40 and all(word not in content for word in forbidden_words) and re.match(allowed_chars_pattern, content) 
  
    
   
        if session==2:
            content_words = re.split(r'\W+', content.lower())
            question_words = re.split(r'\W+', question.lower())
            return len(content_words) > 10 and not any(word in content_words for word in question_words)
        if session==3:
            words = content.split()
            good_count = words.count('good')
            return len(words) >= 50 and good_count >= 5
        if session==4:
            return 1
class Item(BaseModel):
    charter:int
    session:int
    content:str
@app.post("/")
def read_root(item: Item):
    response = dashscope.Generation.call(
        model=dashscope.Generation.Models.qwen_turbo,
        prompt=item.content
    )
    if response.status_code == HTTPStatus.OK:
        print(response)
    else:
        print(response.code)
        print(response.message)    
    answer = {
        "response": response.output.text,
        "status": 200,
        "check":check(item.charter,item.session,response.output.text,item.content),
    }
    return answer
if __name__ == '__main__':
    uvicorn.run('main:app')