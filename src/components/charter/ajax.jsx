import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [data, setData] = useState(null); // 初始化数据状态为null

  useEffect(() => {
    // 在组件挂载后获取数据
    async function fetchData() {
      try {
        const response = await fetch('你的后端API地址');
        const jsonData = await response.json(); // 假设后端返回的是JSON格式的数据
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []); // 空依赖数组意味着这个effect只在组件挂载和卸载时执行

  // 如果data还是null，表示数据还在加载中，可以渲染加载提示
  if (data === null) {
    return <div>Loading...</div>;
  }

  // 根据获取到的数据渲染内容
  return (
    <div>
      {/* 假设后端返回的是一个用户列表 */}
      {data.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;