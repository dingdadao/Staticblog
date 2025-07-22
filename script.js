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

// 贪吃蛇小游戏（升级：初始不自动开始，最高分，暂停/继续，主站风格提示）
(function() {
    const canvas = document.getElementById('snake-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const box = 20;
    const rows = canvas.width / box;
    const cols = canvas.height / box;
    // 全局对象保存状态
    const INIT_SPEED = 200;
    const MIN_SPEED = 80;
    const SPEED_STEP = 10;
    const SPEED_FOOD_STEP = 3;
    window.snakeGame = {
        snake: [{x: 8, y: 10}],
        direction: 'RIGHT',
        food: null,
        score: 0,
        best: 0,
        gameOver: false,
        started: false,
        paused: false,
        timer: null,
        speed: INIT_SPEED
    };
    // 最高分本地存储
    function loadBest() {
        let best = 0;
        try { best = parseInt(localStorage.getItem('snake-best')||'0',10)||0; } catch(e){}
        window.snakeGame.best = best;
        document.getElementById('snake-best').textContent = best;
    }
    function saveBest() {
        if (window.snakeGame.score > window.snakeGame.best) {
            window.snakeGame.best = window.snakeGame.score;
            localStorage.setItem('snake-best', window.snakeGame.best);
            document.getElementById('snake-best').textContent = window.snakeGame.best;
        }
    }
    function randomFood() {
        let f;
        do {
            f = {
                x: Math.floor(Math.random() * rows),
                y: Math.floor(Math.random() * cols)
            };
        } while (window.snakeGame.snake.some(s => s.x === f.x && s.y === f.y));
        return f;
    }
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 画蛇
        for (let i = 0; i < window.snakeGame.snake.length; i++) {
            ctx.fillStyle = i === 0 ? '#6366f1' : '#a5b4fc';
            ctx.fillRect(window.snakeGame.snake[i].x * box, window.snakeGame.snake[i].y * box, box-2, box-2);
        }
        // 画食物
        if (window.snakeGame.started && !window.snakeGame.gameOver && !window.snakeGame.paused) {
            ctx.fillStyle = '#10b981';
            ctx.fillRect(window.snakeGame.food.x * box, window.snakeGame.food.y * box, box-2, box-2);
        }
        // 状态提示
        if (!window.snakeGame.started) {
            drawMsg('点击“开始游戏”按钮来轻松一下！');
        } else if (window.snakeGame.paused) {
            drawMsg('已暂停\n点击“继续”或空格恢复');
        } else if (window.snakeGame.gameOver) {
            drawMsg('游戏结束\n按空格或“开始游戏”重来');
        }
    }
    function drawMsg(msg) {
        ctx.save();
        ctx.globalAlpha = 0.85;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, canvas.height/2-60, canvas.width, 120);
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#6366f1';
        ctx.font = 'bold 1.6rem Inter, sans-serif';
        ctx.textAlign = 'center';
        // 自动换行
        const maxWidth = canvas.width * 0.85;
        const lines = [];
        let line = '';
        for (let word of msg.split('')) {
            const testLine = line + word;
            if (ctx.measureText(testLine).width > maxWidth && line.length > 0) {
                lines.push(line);
                line = word;
            } else {
                line = testLine;
            }
        }
        if (line) lines.push(line);
        lines.forEach((line,i)=>{
            ctx.fillText(line, canvas.width/2, canvas.height/2 + (i-0.5)*32);
        });
        ctx.restore();
    }
    function move() {
        if (!window.snakeGame.started || window.snakeGame.paused || window.snakeGame.gameOver) return;
        let head = { ...window.snakeGame.snake[0] };
        if (window.snakeGame.direction === 'LEFT') head.x--;
        if (window.snakeGame.direction === 'RIGHT') head.x++;
        if (window.snakeGame.direction === 'UP') head.y--;
        if (window.snakeGame.direction === 'DOWN') head.y++;
        // 撞墙
        if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
            endGame();
            return;
        }
        // 撞自己
        if (window.snakeGame.snake.some(s => s.x === head.x && s.y === head.y)) {
            endGame();
            return;
        }
        window.snakeGame.snake.unshift(head);
        // 吃到食物
        if (head.x === window.snakeGame.food.x && head.y === window.snakeGame.food.y) {
            window.snakeGame.score++;
            document.getElementById('snake-score').textContent = window.snakeGame.score;
            window.snakeGame.food = randomFood();
            // 动态加速：每吃到3个食物加快一次
            if (window.snakeGame.score % SPEED_FOOD_STEP === 0 && window.snakeGame.speed > MIN_SPEED) {
                window.snakeGame.speed = Math.max(MIN_SPEED, window.snakeGame.speed - SPEED_STEP);
                clearInterval(window.snakeGame.timer);
                window.snakeGame.timer = setInterval(move, window.snakeGame.speed);
            }
        } else {
            window.snakeGame.snake.pop();
        }
        draw();
    }
    function endGame() {
        window.snakeGame.gameOver = true;
        saveBest();
        clearInterval(window.snakeGame.timer);
        draw();
        showStartBtn();
        showPauseBtn(false);
    }
    function reset() {
        window.snakeGame.snake = [{x: 8, y: 10}];
        window.snakeGame.direction = 'RIGHT';
        window.snakeGame.food = randomFood();
        window.snakeGame.score = 0;
        window.snakeGame.speed = INIT_SPEED;
        document.getElementById('snake-score').textContent = 0;
        window.snakeGame.gameOver = false;
        window.snakeGame.started = true;
        window.snakeGame.paused = false;
        draw();
        clearInterval(window.snakeGame.timer);
        window.snakeGame.timer = setInterval(move, window.snakeGame.speed);
        showStartBtn(false);
        showPauseBtn(true);
    }
    function pauseGame() {
        if (!window.snakeGame.started || window.snakeGame.gameOver) return;
        window.snakeGame.paused = true;
        draw();
        showPauseBtn(true, true);
    }
    function resumeGame() {
        if (!window.snakeGame.started || window.snakeGame.gameOver) return;
        window.snakeGame.paused = false;
        draw();
        showPauseBtn(true, false);
    }
    function showStartBtn(show=true) {
        document.getElementById('snake-start-btn').style.display = show ? '' : 'none';
    }
    function showPauseBtn(show=true, paused=false) {
        const btn = document.getElementById('snake-pause-btn');
        btn.style.display = show ? '' : 'none';
        btn.textContent = paused ? '继续' : '暂停';
    }
    // 供外部事件调用的键盘处理
    window.snakeGameKeyHandler = function(e) {
        if (!window.snakeGame.started) return;
        if (window.snakeGame.gameOver && (e.code === 'Space' || e.key === ' ')) {
            reset();
            return;
        }
        if ((e.code === 'Space' || e.key === ' ') && !window.snakeGame.gameOver) {
            if (window.snakeGame.paused) resumeGame();
            else pauseGame();
            return;
        }
        const key = (e.key||'').toLowerCase();
        if (["ArrowLeft","KeyA"].includes(e.code) || key === 'a') window.snakeGame.direction = 'LEFT';
        if (["ArrowUp","KeyW"].includes(e.code) || key === 'w') window.snakeGame.direction = 'UP';
        if (["ArrowRight","KeyD"].includes(e.code) || key === 'd') window.snakeGame.direction = 'RIGHT';
        if (["ArrowDown","KeyS"].includes(e.code) || key === 's') window.snakeGame.direction = 'DOWN';
    };
    // 虚拟按钮事件也用全局对象
    (function() {
        const btnUp = document.getElementById('btn-up');
        const btnDown = document.getElementById('btn-down');
        const btnLeft = document.getElementById('btn-left');
        const btnRight = document.getElementById('btn-right');
        if (!btnUp) return;
        function setDir(dir) {
            if (!window.snakeGame.started || window.snakeGame.paused || window.snakeGame.gameOver) return;
            if (dir === 'LEFT' && window.snakeGame.direction !== 'RIGHT') window.snakeGame.direction = 'LEFT';
            if (dir === 'RIGHT' && window.snakeGame.direction !== 'LEFT') window.snakeGame.direction = 'RIGHT';
            if (dir === 'UP' && window.snakeGame.direction !== 'DOWN') window.snakeGame.direction = 'UP';
            if (dir === 'DOWN' && window.snakeGame.direction !== 'UP') window.snakeGame.direction = 'DOWN';
        }
        [
            [btnUp, 'UP'],
            [btnDown, 'DOWN'],
            [btnLeft, 'LEFT'],
            [btnRight, 'RIGHT']
        ].forEach(([btn, dir]) => {
            btn.addEventListener('touchstart', function(e) {
                e.preventDefault();
                setDir(dir);
            }, {passive: false});
            btn.addEventListener('mousedown', function(e) {
                e.preventDefault();
                setDir(dir);
            });
        });
    })();
    // 按钮事件
    document.getElementById('snake-start-btn').onclick = function() {
        if (!window.snakeGame.started || window.snakeGame.gameOver) {
            reset();
        }
    };
    document.getElementById('snake-pause-btn').onclick = function() {
        if (!window.snakeGame.started || window.snakeGame.gameOver) return;
        if (window.snakeGame.paused) resumeGame();
        else pauseGame();
    };
    // canvas点击也可开始
    canvas.addEventListener('mousedown', function() {
        if (!window.snakeGame.started || window.snakeGame.gameOver) {
            reset();
        }
    });
    canvas.addEventListener('touchstart', function() {
        if (!window.snakeGame.started || window.snakeGame.gameOver) {
            reset();
        }
    });
    // 初始化
    loadBest();
    window.snakeGame.food = randomFood();
    draw();
    showStartBtn(true);
    showPauseBtn(false);
})(); 

// 判断是否移动端
function isMobile() {
    return /Mobi|Android|iPhone|iPad|iPod|Mobile|Phone/i.test(navigator.userAgent) || window.innerWidth <= 600;
}

// 小游戏乐园弹窗控制（含方向按钮位置切换+全局键盘监听）
(function() {
    const snakeModal = document.getElementById('snake-modal');
    const snakeStartBtns = document.querySelectorAll('.game-start-btn[data-game="snake"]');
    const snakeModalClose = document.getElementById('snake-modal-close');
    const fabControls = document.querySelector('.snake-fab-controls');
    const snakeCanvas = document.getElementById('snake-canvas');
    const snakeStartBtn = document.getElementById('snake-start-btn');
    let keyHandler = null;
    if (!snakeModal) return;
    function openSnakeModal() {
        snakeModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // 方向按钮位置切换
        if (fabControls) {
            if (isMobile()) {
                fabControls.style.display = 'flex';
                fabControls.style.position = 'static';
                fabControls.style.margin = '1.2rem auto 0 auto';
                fabControls.style.justifyContent = 'center';
                fabControls.style.setProperty('display', 'flex', 'important');
                // 插入到弹窗canvas下方
                const snakeGameWrapper = snakeModal.querySelector('.snake-game-wrapper');
                if (snakeGameWrapper && !snakeGameWrapper.contains(fabControls)) {
                    snakeGameWrapper.appendChild(fabControls);
                }
            } else {
                fabControls.style.setProperty('display', 'none', 'important');
            }
        }
        // 重新初始化游戏（防止残留状态）
        if(window.snakeGame && typeof window.snakeGame.timer === 'number') clearInterval(window.snakeGame.timer);
        if(window.snakeGame && typeof window.snakeGameKeyHandler === 'function') {
            window.snakeGame.started = false;
            window.snakeGame.gameOver = false;
            window.snakeGame.paused = false;
            window.snakeGame.score = 0;
            window.snakeGame.snake = [{x: 8, y: 10}];
            window.snakeGame.direction = 'RIGHT';
            window.snakeGame.food = (function randomFood() {
                let f, box=20, rows=20, cols=20;
                do {
                    f = {
                        x: Math.floor(Math.random() * rows),
                        y: Math.floor(Math.random() * cols)
                    };
                } while (window.snakeGame.snake.some(s => s.x === f.x && s.y === f.y));
                return f;
            })();
            document.getElementById('snake-score').textContent = 0;
            if(window.snakeGame.timer) clearInterval(window.snakeGame.timer);
            window.snakeGame.timer = null;
            // 重新绘制初始界面
            if(typeof window.snakeGameKeyHandler === 'function') {
                window.snakeGameKeyHandler({});
            }
            // 触发一次draw
            if(typeof window.snakeGame.food !== 'undefined') {
                const evt = new Event('draw');
                document.getElementById('snake-canvas').dispatchEvent(evt);
            }
        }
        // 全局键盘监听（无需canvas聚焦）
        if (!keyHandler) {
            keyHandler = function(e) {
                if (document.getElementById('snake-modal').style.display === 'block') {
                    window.snakeGameKeyHandler(e);
                }
            };
            window.addEventListener('keydown', keyHandler, {capture:true});
        }
    }
    function closeSnakeModal() {
        snakeModal.style.display = 'none';
        document.body.style.overflow = '';
        // 关闭时清理定时器，防止内存泄漏
        if(window.snakeGame && window.snakeGame.timer) clearInterval(window.snakeGame.timer);
        // 恢复方向按钮到全局悬浮
        if (fabControls) {
            fabControls.style.removeProperty('display');
            fabControls.style.position = '';
            fabControls.style.margin = '';
            fabControls.style.justifyContent = '';
            document.body.appendChild(fabControls);
        }
        // 移除全局键盘监听
        if (keyHandler) {
            window.removeEventListener('keydown', keyHandler, {capture:true});
            keyHandler = null;
        }
    }
    snakeStartBtns.forEach(btn => btn.onclick = openSnakeModal);
    snakeModalClose.onclick = closeSnakeModal;
    // 点击模态框外部关闭
    window.addEventListener('click', function(e) {
        if(e.target === snakeModal) closeSnakeModal();
    });

    // 虚拟按钮点击时如果未开始则自动开始游戏
    const btnUp = document.getElementById('btn-up');
    const btnDown = document.getElementById('btn-down');
    const btnLeft = document.getElementById('btn-left');
    const btnRight = document.getElementById('btn-right');
    function ensureGameStarted() {
        if(window.snakeGame && (!window.snakeGame.started || window.snakeGame.gameOver)) {
            if(snakeStartBtn) snakeStartBtn.click();
        }
    }
    [[btnUp,'UP'],[btnDown,'DOWN'],[btnLeft,'LEFT'],[btnRight,'RIGHT']].forEach(([btn,dir]) => {
        if(!btn) return;
        btn.addEventListener('touchstart', function(e) {
            e.preventDefault();
            ensureGameStarted();
        }, {passive: false});
        btn.addEventListener('mousedown', function(e) {
            e.preventDefault();
            ensureGameStarted();
        });
    });
})(); 