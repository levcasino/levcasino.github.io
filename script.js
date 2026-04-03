document.addEventListener('DOMContentLoaded', () => {
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
        { id: 12, name: "Gonzo's Quest", provider: "NetEnt", image: "image/1752687405755_320Volcanoes3.webp" },
        { id: 13, name: "Wolf Gold", provider: "Pragmatic", image: "image/1752687405755_320Volcanoes3.webp" },
        { id: 14, name: "Fire Joker", provider: "Play'n GO", image: "image/1752687405755_320Volcanoes3.webp" },
        { id: 15, name: "Bonanza", provider: "BTG", image: "image/1752687405755_320Volcanoes3.webp" },
        { id: 16, name: "Legacy of Dead", provider: "Play'n GO", image: "image/1752687405755_320Volcanoes3.webp" }
    ];

    let currentGameLimit = 6;

    function renderGames(limit) {
        const grid = document.getElementById('games-grid');
        if (!grid) {
            console.error("ОШИБКА: Блок 'games-grid' не найден в HTML!");
            return;
        }
        
        grid.innerHTML = '';
        const toShow = games.slice(0, limit);

        toShow.forEach((game, index) => {
            const card = document.createElement('div');
            card.className = 'game-card group relative rounded-xl overflow-hidden bg-banda-card border border-white/5 cursor-pointer transition-all hover:border-banda-primary/50';


            card.innerHTML = `
                <div class="aspect-[4/3] overflow-hidden relative bg-banda-darker">
                    <img src="${game.image}" 
                         alt="${game.name}" 
                         class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                         onerror="this.src='https://placehold.co/400x300/171a24/ffb800?text=BANDA+SLOT'">
                    
                    <div class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                        <div class="w-12 h-12 rounded-full bg-banda-primary text-banda-darker flex items-center justify-center mb-2 hover:scale-110 transition-transform">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="m7 3 14 9-14 9z"/></svg>
                        </div>
                        <span class="text-xs font-bold text-white uppercase tracking-wider">Играть</span>
                    </div>
                    
                    <div class="absolute top-2 right-2">
                        <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-black/70 text-white uppercase">${game.provider}</span>
                    </div>
                </div>
                <div class="p-3">
                    <h3 class="font-medium text-sm truncate text-gray-200 group-hover:text-banda-primary transition-colors">${game.name}</h3>
                </div>
            `;
            grid.appendChild(card);
        });
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
    renderGames(currentGameLimit);
    const loadMoreBtn = document.getElementById('load-more-games');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            currentGameLimit = games.length; // Показываем все
            renderGames(currentGameLimit);
            this.style.display = 'none'; // Скрываем кнопку
        });
    }

    const menuBtn = document.getElementById('mobile-menu-btn');
    const menuClose = document.getElementById('close-mobile-menu');
    const menu = document.getElementById('mobile-menu');

    function toggleMenu() {
        if (menu) {
            menu.classList.toggle('translate-x-full');
            menu.classList.toggle('translate-x-0');
            document.body.classList.toggle('overflow-hidden');
        }
    }

    menuBtn?.addEventListener('click', toggleMenu);
    menuClose?.addEventListener('click', toggleMenu);
});
