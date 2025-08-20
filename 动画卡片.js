// 从 CSV 文件中读取数据并插入到 HTML 中
async function fetchAndDisplayData() {
  try {
    const response = await fetch('追番.csv');
    const text = await response.text();
    const rows = text.split('\n').slice(1); // 跳过表头
    const details = rows.map(row => row.split(','));

    // 获取已存在的 div1
    const div1 = document.getElementById('div1');

    // 遍历数组并插入数据
    details.forEach(detail => {
      // 创建 card1
      const card1 = document.createElement('div');
      card1.className = 'card1';
      card1.id = `card1-${detail[0]}`; // 为每个div设置唯一的id

      // 创建 img1
      const img1 = document.createElement('div');
      img1.className = 'img1';
      img1.id = `img1-${detail[0]}`; // 为每个div设置唯一的id

      // 创建 img 标签
      const webp1 = document.createElement('img');
      webp1.src = `追番图片/${detail[0]}.webp`; // 示例图片
      webp1.alt = '示例图片';
      webp1.className = 'webp1';
      webp1.id = `webp1-${detail[0]}`; // 为每个div设置唯一的id

      // 创建 pp1
      const pp1 = document.createElement('div');
      pp1.className = 'pp1';
      pp1.id = `pp1-${detail[0]}`; // 为每个div设置唯一的id

      // 创建 p 标签
      const p = document.createElement('p');
      p.textContent = `${detail[1]}`;
      p.id = `p-${detail[0]}`; // 为每个div设置唯一的id

      // 创建 pp 标签
      const pp = document.createElement('p');
      pp.textContent = `时间: ${detail[2]}`;
      pp.id = `pp-${detail[0]}`; // 为每个div设置唯一的id
      
     // 创建 ppp 标签
      const ppp = document.createElement('p');
      ppp.textContent = `${detail[3]}`;
      ppp.id = `ppp-${detail[0]}`; // 为每个div设置唯一的id
      
      // 创建 pppp 标签
      const pppp = document.createElement('p');
      pppp.textContent = `状态: ${detail[5]}`;
      pppp.id = `pppp-${detail[0]}`; // 为每个div设置唯一的id
      
      
      // 将 webp1 插入到 img1 中
      img1.appendChild(webp1);

      // 将 p 插入到 pp1 中
      pp1.appendChild(p);

      // 将 pp 插入到 pp1 中
      pp1.appendChild(pp);
      
      // 将 ppp 插入到 pp1 中
      pp1.appendChild(ppp);
      
      // 将 pppp 插入到 pp1 中
      pp1.appendChild(pppp);

      // 将 img1 插入到 card1 中
      card1.appendChild(img1);

      // 将 pp1 插入到 card1 中
      card1.appendChild(pp1);

      // 将 card1 插入到 div1 中
      div1.appendChild(card1);
    });
  } catch (error) {
    console.error('加载 CSV 文件时出错:', error);
  }
}

// 页面加载完成后调用函数
window.onload = fetchAndDisplayData;
