# 🎒 校园跳蚤市场 (Campus Flea Market)

一个面向校园的二手交易平台，让同学们可以方便地发布、浏览和交易闲置物品。这是一个用于学习全栈开发与 Git/GitHub 协作的练习项目。

## ✨ 功能规划

### 第一阶段：基础功能（MVP）
- [ ] 浏览商品列表
- [ ] 查看商品详情
- [ ] 发布新商品（标题、价格、描述、分类）
- [ ] 按关键词搜索商品
- [ ] 按分类筛选商品

### 第二阶段：用户系统
- [ ] 用户注册 / 登录
- [ ] 我的发布 / 我的收藏
- [ ] 卖家与买家联系方式

### 第三阶段：「智能」功能
- [ ] 智能分类（根据描述自动推荐分类）
- [ ] 价格建议（参考同类商品给出合理定价）
- [ ] 个性化推荐（根据浏览历史推荐商品）

## 🛠️ 技术栈

| 层 | 技术 |
|----|------|
| 前端 | HTML / CSS / JavaScript（后续可升级为 React） |
| 后端 | Node.js + Express |
| 数据库 | SQLite（轻量、零配置） |

## 📁 项目结构

```
campus_flea_market/
├── backend/          # 后端服务（Express API）
│   ├── server.js     # 服务器入口
│   └── package.json  # 后端依赖配置
├── frontend/         # 前端页面
│   └── index.html    # 商品列表页
└── README.md         # 项目说明（就是本文件）
```

## 🚀 快速开始

### 启动后端

```bash
cd backend
npm install
npm start
```

服务器默认运行在 `http://localhost:3000`。

### 打开前端

直接用浏览器打开 `frontend/index.html` 即可。

## 📝 开发笔记

这是我的第一个 GitHub 项目，用于学习：
- Git 基本操作（add / commit / push）
- 全栈项目的组织方式
- 前后端如何协作

## 📄 许可证

MIT
