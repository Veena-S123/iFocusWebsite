 const icons = document.querySelectorAll('.center-icon');
        
        icons[0].classList.add('blinking'); // Make the first icon blink
        
        let currentIndex = 0;
        
        icons.forEach((icon, index) => {
            icon.addEventListener('mouseenter', () => {
                icons[currentIndex].classList.remove('blinking');
                currentIndex = index;
                icon.classList.add('blinking');
            });
        });
    
        setInterval(() => {
            icons[currentIndex].classList.remove('blinking'); // Stop the current icon from blinking
            currentIndex = (currentIndex + 1) % icons.length;
            icons[currentIndex].classList.add('blinking'); // Make the next icon blink
        }, 1500); // Faster blink