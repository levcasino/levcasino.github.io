document.addEventListener('DOMContentLoaded', () => {
    // --- ДАННЫЕ ---
    const banners = [
        { id: 1, image: "image/1775227610378_GRAND%20EASTER%20HEIST%20Tournament%20%281%29.png", title: "500 000 €", subtitle: "Пасхальный турнир!" },
        { id: 2, image: "image/1763640463036_Fortune_Bags_Site_Promo_%28Banda%29.png", title: "Испытай Удачу", subtitle: "вместе с Fortune Bags!" },
        { id: 3, image: "image/1758107613594_New_games.png", title: "Свежак на районе!", subtitle: "Новые игры уже здесь!" },
        { id: 4, image: "image/1728721451245_Welcome.png", title: "750 ФС", subtitle: "Приветственный БОНУС!" },
        { id: 5, image: "https://banda-prod-backend-client-bucket.s3.eu-central-1.amazonaws.com/banners/1728731135783_Wheel.png", title: "Колесо Фортуны", subtitle: "Крути каждый день!" }
    ];

    const games = [
        { id: 1, name: "Gates of Olympus", provider: "Pragmatic", image: "image/1752687405755_320Volcanoes3.webp" },
        { id: 2, name: "Sweet Bonanza", provider: "Pragmatic", image: "image/Piggy.webp" },
        { id: 3, name: "Book of Dead", provider: "Play'n GO", image: "image/1769715461541_Pray20Six.webp" },
        { id: 4, name: "Razor Shark", provider: "Push Gaming", image: "image/Mummy.webp" },
        { id: 5, name: "Money Train 4", provider: "Relax", image: "image/Raceday.webp" },
        { id: 6, name: "Roulette Live", provider: "Evolution", image: "image/Eternal.webp" },
        { id: 7, name: "Blackjack VIP", provider: "Evolution", image: "image/Floating+Dragon+Megaways.webp" },
        { id: 8, name: "Mega Wheel", provider: "Pragmatic", image: "image/Princess+Suki.webp" },
        { id: 9, name: "Fruit Party", provider: "Pragmatic", image: "image/Santa+Mummy.webp" },
        { id: 10, name: "The Dog House", provider: "Pragmatic", image: "image/Treasures+of+Aztec.webp" },
        { id: 11, name: "Starburst", provider: "NetEnt", image: "image/Yakuza+Honor.webp" },
        { id: 12, name: "Gonzo's Quest", provider: "NetEnt", image: "image/1752687405755_320Volcanoes3.webp" }
    ];

    // --- ФУНКЦИЯ БЕЗОПАСНЫХ ИКОНОК ---
    function safeLucide() {
        try {
            if (window.lucide) {
                window.lucide.createIcons();
            }
        } catch (e) {
            console.warn("Lucide skip: какая-то иконка не найдена, но это не страшно.");
        }
    }

    // --- СЛАЙДЕР ---
    let currentSlide = 0;
    const slider = document.getElementById('hero-slider');
    const dotsContainer = document.getElementById('slider-indicators');

    function initSlider() {
        if (!slider || !dotsContainer) return;
        slider.innerHTML = '';
        dotsContainer.innerHTML = '';

        banners.forEach((b, i) => {
            const s = document.createElement('div');
            s.className = 'min-w-full h-full relative';
            s.innerHTML = `
                <img src="${b.image}" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-gradient-to-t from-banda-dark to-transparent opacity-80"></div>
                <div class="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                    <h2 class="text-3xl md:text-5xl font-bold text-white mb-2">${b.title}</h2>
                    <p class="text-gray-200">${b.subtitle}</p>
                </div>`;
            slider.appendChild(s);

            const dot = document.createElement('button');
            dot.className = `w-2 h-2 rounded-full transition-all ${i === 0 ? 'bg-banda-primary w-6' : 'bg-white/50'}`;
            dotsContainer.appendChild(dot);
        });
    }

    function updateSlider() {
        if (!slider || !dotsContainer) return;
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        Array.from(dotsContainer.children).forEach((d, i) => {
            d.className = i === currentSlide ? 'w-6 h-2 rounded-full bg-banda-primary transition-all' : 'w-2 h-2 rounded-full bg-white/50 transition-all';
        });
    }

    // --- ОТРИСОВКА ИГР ---
    function renderGames() {
        const grid = document.getElementById('games-grid');
        if (!grid) return;
        grid.innerHTML = '';

        games.forEach(game => {
            const card = document.createElement('div');
            card.className = 'game-card group bg-banda-card rounded-xl overflow-hidden border border-white/5 transition-all hover:border-banda-primary/50';
            card.innerHTML = `
                <div class="aspect-[4/3] relative overflow-hidden">
                    <img src="${game.image}" class="w-full h-full object-cover" onerror="this.src='https://placehold.co/400x300/232732/FFB800?text=${game.name}'">
                    <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 backdrop-blur-sm">
                        <div class="w-12 h-12 rounded-full bg-banda-primary text-black flex items-center justify-center mb-2">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="m7 3 14 9-14 9z"/></svg>
                        </div>
                        <span class="text-xs font-bold text-white uppercase">Играть</span>
                    </div>
                </div>
                <div class="p-3"><h3 class="text-sm truncate font-medium text-gray-200">${game.name}</h3></div>`;
            grid.appendChild(card);
        });
        safeLucide();
    }

    // --- ЗАПУСК ---
    initSlider();
    renderGames();

    // Авто-слайдер
    setInterval(() => {
        currentSlide = (currentSlide + 1) % banners.length;
        updateSlider();
    }, 5000);

    // Мобильное меню
    const menuBtn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('close-mobile-menu');

    [menuBtn, closeBtn].forEach(b => {
        b?.addEventListener('click', () => {
            menu?.classList.toggle('translate-x-full');
            menu?.classList.toggle('translate-x-0');
        });
    });
});
