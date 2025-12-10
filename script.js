// Projects Data
const projects = [
    {
        title: "E-Commerce Platform",
        description: "High-performance Go microservices architecture supporting 10,000+ concurrent users with 99.99% uptime.",
        tech: ["Go", "React", "PostgreSQL", "Redis", "Docker", "AWS"],
        github: "https://github.com/snowopard-alex/ecommerce-platform"
    },
    {
        title: "AI Document Processor",
        description: "Intelligent workflow automation system reducing manual review time by 85% using Python and LangChain.",
        tech: ["Python", "FastAPI", "LangChain", "OpenAI", "React", "MongoDB"],
        github: "https://github.com/snowopard-alex/ai-document-processor"
    },
    {
        title: "HR Tech Platform",
        description: "Full-stack applicant tracking system for 25+ recruiters managing 5,000+ candidates with automated workflows.",
        tech: ["Laravel", "React", "MySQL", "Elasticsearch", "AWS"],
        github: "https://github.com/snowopard-alex/hr-tech-platform"
    },
    {
        title: "Distributed Task Scheduler",
        description: "Go-based distributed system with Redis job queues and real-time monitoring dashboard.",
        tech: ["Go", "Redis", "WebSocket", "React", "Docker"],
        github: "https://github.com/snowopard-alex/distributed-scheduler"
    },
    {
        title: "Go Microservices Template",
        description: "Production-ready template for building scalable Go microservices with best practices and Kubernetes.",
        tech: ["Go", "Docker", "Kubernetes", "GRPC", "Prometheus"],
        github: "https://github.com/snowopard-alex/go-microservices-template"
    }
];

// Load Projects
function loadProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    grid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <i class="fas fa-code"></i>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="tech-tags">
                    ${project.tech.map(tag => `<span class="tech-tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// Mobile Menu
function initMobileMenu() {
    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');
    
    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
            if (nav.style.display === 'flex') {
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'white';
                nav.style.padding = '1rem';
            }
        });
    }
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form Submission
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    
    // Update year in footer
    document.querySelector('footer p').textContent = 
        document.querySelector('footer p').textContent.replace('2024', new Date().getFullYear());
});