# Staticblog - 丁大刀的个人博客

一个现代化、响应式的个人博客网站，用于展示 GitHub 项目和分享技术文章。

## 🌟 特性

- **现代化设计**: 采用最新的设计趋势，界面简洁美观
- **完全响应式**: 支持各种设备尺寸，移动端友好
- **交互丰富**: 包含动画效果、模态框、平滑滚动等交互功能
- **项目展示**: 重点展示 GitHub 项目，包括 Emby CRX 和 cosDnaPorxy
- **博客功能**: 支持技术文章分享
- **性能优化**: 轻量级设计，加载速度快

## 📁 项目结构

```
staticBlog/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript交互
└── README.md           # 项目说明
```

## 🚀 快速开始

1. **克隆或下载项目**

   ```bash
   git clone https://github.com/dingdadao/Staticblog.git
   cd Staticblog
   ```

2. **本地预览**

   - 直接打开 `index.html` 文件
   - 或使用本地服务器：

     ```bash
     # 使用Python
     python3 -m http.server 8000

     # 使用Node.js
     npx serve .
     ```

3. **访问网站**
   - 打开浏览器访问 `http://localhost:8000`

## 🎨 设计特色

### 色彩方案

- 主色调: `#6366f1` (靛蓝色)
- 渐变背景: 紫色到蓝色渐变
- 文字颜色: 深灰色 `#333`
- 背景色: 浅灰色 `#fafafa`

### 字体

- 主要字体: Inter (Google Fonts)
- 代码字体: Monaco, Menlo, Ubuntu Mono

### 响应式断点

- 移动端: < 768px
- 平板: 768px - 1024px
- 桌面: > 1024px

## 📱 功能模块

### 1. 导航栏

- 固定顶部导航
- 响应式汉堡菜单
- 平滑滚动到对应区域

### 2. 英雄区域

- 个人介绍
- 代码窗口展示
- 行动按钮

### 3. 项目展示

- 项目卡片布局
- 技术标签
- 项目详情模态框
- 重点展示项目：
  - **Emby CRX**: Chrome 扩展，为 Emby 媒体服务器提供增强功能
  - **cosDnaPorxy**: 智能 DNS 优化工具，解决网络访问问题

### 4. 关于我

- 个人介绍
- 技术栈展示
- 统计数据

### 5. 博客区域

- 文章卡片
- 分类标签
- 阅读更多链接

### 6. 页脚

- 联系信息
- 社交媒体链接
- 项目链接

## 🔧 自定义配置

### 修改个人信息

编辑 `index.html` 文件中的相关内容：

- 姓名和标题
- 个人描述
- 技术栈
- 统计数据

### 添加新项目

在 `script.js` 的 `projectDetails` 对象中添加新项目：

```javascript
const projectDetails = {
  "your-project-id": {
    title: "项目标题",
    description: `
            <h3>项目简介</h3>
            <p>项目描述...</p>
            
            <h3>主要功能</h3>
            <ul>
                <li>功能1</li>
                <li>功能2</li>
            </ul>
        `,
  },
};
```

### 修改样式

编辑 `styles.css` 文件：

- 修改颜色变量
- 调整布局
- 自定义动画效果

## 📝 博客文章

要添加新的博客文章，在 `index.html` 的博客区域添加新的文章卡片：

```html
<article class="blog-card">
  <div class="blog-image">
    <img src="文章图片URL" alt="文章标题" />
  </div>
  <div class="blog-content">
    <div class="blog-meta">
      <span class="blog-date">发布日期</span>
      <span class="blog-category">分类</span>
    </div>
    <h3 class="blog-title">文章标题</h3>
    <p class="blog-excerpt">文章摘要...</p>
    <a href="#" class="blog-link">阅读更多</a>
  </div>
</article>
```

## 🌐 部署

### GitHub Pages

1. 将项目推送到 GitHub 仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择主分支作为源

### Netlify

1. 连接 GitHub 仓库
2. 自动部署
3. 自定义域名（可选）

### Vercel

1. 导入 GitHub 仓库
2. 自动构建和部署
3. 获得生产 URL

## 📄 许可证

MIT License - 可自由使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📞 联系

- GitHub: [@dingdadao](https://github.com/dingdadao)
- 项目:
  - [Emby CRX](https://github.com/dingdadao/emby-crx)
  - [cosDnaPorxy](https://github.com/dingdadao/cosDnaPorxy)

---

**丁大刀** - 全栈开发者，开源爱好者
