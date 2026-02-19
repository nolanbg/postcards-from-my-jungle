const animals = [
            { image: 'Images/species1.png', sound: 'Sounds/species1sound.wav', name: 'Zephyrath', language: 'Krzzzt-whummm-krrr' },
            { image: 'Images/species2.png', sound: 'Sounds/species2sound.wav', name: 'Lumivore', language: 'Chirp-thmmm-ssshh' },
            { image: 'Images/species3.png', sound: 'Sounds/species3sound.wav', name: 'Verdalis', language: 'Groaaak-bubble-zing' },
            { image: 'Images/species4.png', sound: 'Sounds/species4sound.wav', name: 'Whisperling', language: 'Whooosh-trill-trill' },
            // Add more animals here (up to 50)
        ];

        let currentIndex = 0;

        function updateDisplay() {
            const animal = animals[currentIndex];
            document.getElementById('animalImage').src = animal.image;
            document.getElementById('animalSound').src = animal.sound;
            document.getElementById('animalName').textContent = animal.name;
            document.getElementById('animalLanguage').textContent = animal.language;
            document.getElementById('currentIndex').textContent = currentIndex + 1;
            updateDots();
        }

        function updateDots() {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function initializeDots() {
            const dotsContainer = document.getElementById('dots');
            animals.forEach((_, index) => {
                const dot = document.createElement('div');
                dot.className = 'dot';
                if (index === 0) dot.classList.add('active');
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateDisplay();
                });
                dotsContainer.appendChild(dot);
            });
        }

        document.getElementById('prevBtn').addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + animals.length) % animals.length;
            updateDisplay();
        });

        document.getElementById('nextBtn').addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % animals.length;
            updateDisplay();
        });

        document.getElementById('totalCount').textContent = animals.length;
        initializeDots();
        updateDisplay();

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') document.getElementById('prevBtn').click();
            if (e.key === 'ArrowRight') document.getElementById('nextBtn').click();
        });