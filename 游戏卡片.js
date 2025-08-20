// 从 CSV 文件中读取数据并插入到 HTML 中
async function fetchAndDisplayData() {
  try {
    const response = await fetch('游戏.csv');
    const text = await response.text();
    const rows = text.split('\n').slice(1); // 跳过表头
    const details = rows.map(row => row.split(','));

    // 获取已存在的 div1
    const div1 = document.getElementById('div1');

    // 遍历数组并插入数据
    details.forEach(detail => {
      // 创建 gamecard
      const gamecard = document.createElement('div');
      gamecard.className = 'gamecard';
      gamecard.id = `gamecard-${detail[0]}`; // 为每个div设置唯一的id

      // 创建 gameimgcard
      const gameimgcard = document.createElement('div');
      gameimgcard.className = 'gameimgcard';
      gameimgcard.id = `gameimgcard-${detail[0]}`; // 为每个div设置唯一的id

      // 创建 img 标签
      const gameimg = document.createElement('img');
      gameimg.src = `游戏图片/${detail[0]}.jpg`; // 示例图片
      gameimg.alt = '示例图片';
      gameimg.className = 'gameimg';
      gameimg.id = `gameimg-${detail[0]}`; // 为每个div设置唯一的id

      // 创建 gamepcard
      const gamepcard = document.createElement('div');
      gamepcard.className = 'gamepcard';
      gamepcard.id = `gamepcard-${detail[0]}`; // 为每个div设置唯一的id

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
      
      
      // 将 gameimg 插入到 gameimgcard 中
      gameimgcard.appendChild(gameimg);

      // 将 p 插入到 gamepcard 中
      gamepcard.appendChild(p);

      // 将 pp 插入到 gamepcard 中
      gamepcard.appendChild(pp);
      
      // 将 ppp 插入到 gamepcard 中
      gamepcard.appendChild(ppp);
      
      // 将 pppp 插入到 gamepcard 中
      gamepcard.appendChild(pppp);

      // 将 gameimgcard 插入到 gamecard 中
      gamecard.appendChild(gameimgcard);

      // 将 gamepcard 插入到 gamecard 中
      gamecard.appendChild(gamepcard);

      // 将 gamecard 插入到 div1 中
      div1.appendChild(gamecard);
    });
  } catch (error) {
    console.error('加载 CSV 文件时出错:', error);
  }
}

// 页面加载完成后调用函数
window.onload = fetchAndDisplayData;
