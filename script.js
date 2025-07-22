// 导航栏功能
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 汉堡菜单切换
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击导航链接时关闭菜单
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 平滑滚动
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
});

// 项目详情模态框
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// 项目详情数据
const projectDetails = {
    'emby-crx': {
        title: 'Emby CRX - Chrome扩展',
        description: `
            <h3>项目简介</h3>
            <p>Emby CRX 是一个专为 Emby 媒体服务器设计的 Chrome 浏览器扩展，旨在提供更好的用户体验和增强功能。</p>
            
            <h3>主要功能</h3>
            <ul>
                <li><strong>自定义主题：</strong>支持多种主题切换，个性化界面</li>
                <li><strong>快捷键操作：</strong>提供便捷的键盘快捷键支持</li>
                <li><strong>批量管理：</strong>支持批量操作媒体文件</li>
                <li><strong>增强搜索：</strong>改进的搜索功能和过滤选项</li>
                <li><strong>播放控制：</strong>增强的播放器控制功能</li>
            </ul>
            
            <h3>技术栈</h3>
            <ul>
                <li>Chrome Extension API</li>
                <li>JavaScript ES6+</li>
                <li>CSS3 / SCSS</li>
                <li>Emby API 集成</li>
            </ul>
            
            <h3>开发历程</h3>
            <p>这个项目源于对 Emby 媒体服务器的使用体验优化需求。通过深入分析用户痛点，开发了一系列实用功能，提升了整体的使用体验。</p>
            
            <h3>项目亮点</h3>
            <ul>
                <li>完全开源，欢迎社区贡献</li>
                <li>持续更新维护</li>
                <li>用户友好的界面设计</li>
                <li>高性能和稳定性</li>
            </ul>
        `
    },
    'cosDnaPorxy': {
        title: 'cosDnaPorxy - 智能DNS优化工具',
        description: `
            <h3>项目简介</h3>
            <p>cosDnaPorxy 是一个基于Go语言开发的智能DNS优化工具，通过本地智能识别并篡改DNS解析结果，将Cloudflare污染或劣质IP替换为优选节点，实现无需代理的加速和防DNS污染。</p>
            
            <h3>核心功能</h3>
            <ul>
                <li><strong>智能DNS解析：</strong>自动识别并替换被污染的DNS记录</li>
                <li><strong>IP优选算法：</strong>智能选择最优的网络节点</li>
                <li><strong>本地代理：</strong>无需额外代理软件，本地即可实现加速</li>
                <li><strong>防DNS污染：</strong>有效防止DNS劫持和污染攻击</li>
                <li><strong>高性能：</strong>基于Go语言开发，性能优异</li>
                <li><strong>跨平台支持：</strong>支持Windows、macOS、Linux等主流系统</li>
            </ul>
            
            <h3>技术栈</h3>
            <ul>
                <li>Go语言</li>
                <li>DNS协议</li>
                <li>网络编程</li>
                <li>系统调用</li>
                <li>并发处理</li>
            </ul>
            
            <h3>解决的核心问题</h3>
            <ul>
                <li><strong>DNS污染问题：</strong>解决某些地区DNS被污染导致的访问问题</li>
                <li><strong>网络延迟：</strong>通过优选IP节点降低网络延迟</li>
                <li><strong>访问稳定性：</strong>提高网络访问的稳定性和可靠性</li>
                <li><strong>用户体验：</strong>无需复杂配置，开箱即用</li>
            </ul>
            
            <h3>技术亮点</h3>
            <ul>
                <li>高效的DNS解析算法</li>
                <li>智能的IP优选机制</li>
                <li>低资源占用</li>
                <li>易于部署和维护</li>
                <li>完善的错误处理机制</li>
            </ul>
            
            <h3>应用场景</h3>
            <ul>
                <li>企业网络优化</li>
                <li>个人网络加速</li>
                <li>开发环境网络配置</li>
                <li>服务器网络优化</li>
            </ul>
        `
    }
};

// 显示项目详情
function showProjectDetails(projectId) {
    const project = projectDetails[projectId];
    if (project) {
        let githubLink = '';
        if (projectId === 'emby-crx') {
            githubLink = 'https://github.com/dingdadao/emby-crx';
        } else if (projectId === 'cosDnaPorxy') {
            githubLink = 'https://github.com/dingdadao/cosDnaPorxy';
        }
        
        modalContent.innerHTML = `
            <h2>${project.title}</h2>
            ${project.description}
            <div style="margin-top: 2rem; text-align: center;">
                <a href="${githubLink}" class="btn btn-primary" target="_blank">
                    <i class="fab fa-github"></i> 查看源码
                </a>
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// 关闭模态框
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// 点击模态框外部关闭
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// 滚动动画
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .blog-card, .skill-item, .stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 页面加载完成后初始化动画
document.addEventListener('DOMContentLoaded', function() {
    animateOnScroll();
});

// 打字机效果
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 为英雄区域的标题添加打字机效果
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 150);
    }
});

// 技能进度条动画
function animateSkills() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'scale(1.05)';
            setTimeout(() => {
                item.style.transform = 'scale(1)';
            }, 200);
        }, index * 100);
    });
}

// 统计数字动画
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.textContent);
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
        }, 30);
    });
}

// 监听滚动事件，触发动画
window.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about');
    const aboutPosition = aboutSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    if (scrollPosition > aboutPosition && !aboutSection.classList.contains('animated')) {
        aboutSection.classList.add('animated');
        animateSkills();
        animateStats();
    }
});

// 添加一些交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 为按钮添加点击波纹效果
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// 添加CSS样式用于波纹效果
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 

// 动态加载GitHub热门项目新闻
function renderNews() {
    fetch('news.json')
        .then(res => res.json())
        .then(news => {
            const newsList = document.getElementById('news-list');
            if (!newsList) return;
            newsList.innerHTML = news.map(item => `
                <div class="news-card">
                    <div class="news-header">
                        <a href="${item.url}" target="_blank" class="news-title">${item.name}</a>
                    </div>
                    <div class="news-desc">${item.description}</div>
                    <div class="news-meta">
                        <span class="news-lang"><i class="fas fa-code"></i> ${item.language || '未知'}</span>
                        <span class="news-stars"><i class="fas fa-star"></i> ${item.stars.toLocaleString()}</span>
                    </div>
                </div>
            `).join('');
        });
}

document.addEventListener('DOMContentLoaded', function() {
    renderNews();
}); 