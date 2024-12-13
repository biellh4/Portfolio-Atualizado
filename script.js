// Smooth Scroll Functionality
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Skill Hover Effect
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        const skillDetail = document.createElement('div');
        skillDetail.classList.add('skill-detail');
        skillDetail.innerText = `${skill.querySelector('.skill-title').innerText} - Detalhes sobre esta habilidade.`;
        skill.appendChild(skillDetail);
    });

    skill.addEventListener('mouseleave', () => {
        const skillDetail = skill.querySelector('.skill-detail');
        if (skillDetail) skillDetail.remove();
    });
});

// Portfolio Item Hover Effect
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.overlay').style.opacity = '1';
    });

    item.addEventListener('mouseleave', () => {
        item.querySelector('.overlay').style.opacity = '0';
    });
});

// Form Validation
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[placeholder="Nome"]');
    const email = this.querySelector('input[placeholder="Email"]');
    const message = this.querySelector('textarea[placeholder="Mensagem"]');

    if (!name.value || !email.value || !message.value) {
        alert('Por favor, preencha todos os campos.');
    } else {
        alert('Mensagem enviada com sucesso!');
        this.reset();
    }
});

// Dark Mode Toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerText = 'Modo Escuro';
darkModeToggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Load Saved Theme from LocalStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = 'Modo Claro';
} else {
    darkModeToggle.textContent = 'Modo Escuro';
}
