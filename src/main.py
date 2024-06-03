import uvicorn
from fastapi import FastAPI

app = FastAPI()  

@app.get("/")
def sayHi():
    return {"message":"Hello world!"}

# 启动uvicorn服务，默认端口8000，main对应文件名
if __name__ == '__main__':
    uvicorn.run('main:app')