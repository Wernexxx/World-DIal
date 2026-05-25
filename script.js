document.addEventListener('DOMContentLoaded', function() {
    
    const cards = document.querySelectorAll('.card');
    const cardsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => cardsObserver.observe(card));

    const aboutSection = document.getElementById('about');
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15 });

    if (aboutSection) aboutObserver.observe(aboutSection);

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const closeBtn = document.querySelector('.close-modal');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            modalImg.src = this.getAttribute('data-img');
            modalTitle.textContent = this.getAttribute('data-title');
            modal.style.display = 'flex';
        });
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.getElementById('quickOrderForm').reset();
        document.getElementById('quickResponseMessage').textContent = '';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
            document.getElementById('quickOrderForm').reset();
            document.getElementById('quickResponseMessage').textContent = '';
        }
    });

    const reviewItems = document.querySelectorAll('.review-item');
    reviewItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('expanded');
        });
    });

    const learnMoreBtn = document.querySelector('.btn-more');
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', function() {
            document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const feedbackForm = document.getElementById('feedbackForm');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const msgBlock = document.getElementById('responseMessage');

            if (!name || !email || !message) {
                msgBlock.style.color = 'red';
                msgBlock.textContent = 'Пожалуйста, заполните все обязательные поля.';
                return;
            }

            msgBlock.style.color = '#d4af37';
            msgBlock.textContent = `Спасибо, ${name}! Ваша заявка успешно отправлена.`;
            feedbackForm.reset();
        });
    }

    const quickOrderForm = document.getElementById('quickOrderForm');
    if (quickOrderForm) {
        quickOrderForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('quickName').value.trim();
            const phone = document.getElementById('quickPhone').value.trim();
            const quickMsg = document.getElementById('quickResponseMessage');

            if (!name || !phone) {
                quickMsg.style.color = 'red';
                quickMsg.textContent = 'Заполните поля.';
                return;
            }

            quickMsg.style.color = '#d4af37';
            quickMsg.textContent = `Заказ оформлен! Менеджер свяжется с вами, ${name}.`;
            quickOrderForm.reset();
        });
    }

    const magicBtn = document.getElementById('magicBtn');
    if (magicBtn) {
        magicBtn.addEventListener('click', () => {
            magicBtn.textContent = 'Спасибо!';
            magicBtn.style.backgroundColor = '#d4af37';
            magicBtn.style.color = '#000';
        });
    }
});