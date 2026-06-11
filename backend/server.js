// 校园跳蚤市场 - 后端服务器
// 这是一个最小可运行版本，先用内存里的数组存商品，后面再换成数据库。

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// 中间件
app.use(cors());          // 允许前端跨域访问
app.use(express.json());  // 解析 JSON 请求体

// 临时的"数据库"：先用数组存几条示例商品
let products = [
  {
    id: 1,
    title: "二手自行车",
    price: 150,
    category: "交通工具",
    description: "九成新，骑了一学期，毕业了便宜出。",
  },
  {
    id: 2,
    title: "高等数学教材",
    price: 20,
    category: "书籍",
    description: "同济版第七版，有少量笔记，不影响阅读。",
  },
  {
    id: 3,
    title: "台灯",
    price: 35,
    category: "生活用品",
    description: "护眼台灯，三档调光，宿舍必备。",
  },
];

// 下一个商品的 id
let nextId = 4;

// 路由：根路径，用来测试服务器是否在跑
app.get("/", (req, res) => {
  res.send("校园跳蚤市场后端正在运行 🎒");
});

// 路由：获取所有商品（支持按关键词搜索）
app.get("/api/products", (req, res) => {
  const keyword = req.query.search;
  if (keyword) {
    const filtered = products.filter(
      (p) =>
        p.title.includes(keyword) || p.description.includes(keyword)
    );
    return res.json(filtered);
  }
  res.json(products);
});

// 路由：获取单个商品详情
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === Number(req.params.id));
  if (!product) {
    return res.status(404).json({ error: "找不到该商品" });
  }
  res.json(product);
});

// 路由：发布新商品
app.post("/api/products", (req, res) => {
  const { title, price, category, description } = req.body;
  if (!title || price == null) {
    return res.status(400).json({ error: "标题和价格是必填的" });
  }
  const newProduct = {
    id: nextId++,
    title,
    price,
    category: category || "其他",
    description: description || "",
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器已启动：http://localhost:${PORT}`);
});
