const switchThemeBtn = document.querySelector('.changeTheme')
            let toggleTheme = 0;
             switchThemeBtn.addEventListener('click', () => {
            if(toggleTheme === 0) {
                document.documentElement.style.setProperty('--ecriture', '#262626');
                document.documentElement.style.setProperty('--background', '#F5F5DC');
                toggleTheme++;
            } else {
                document.documentElement.style.setProperty('--ecriture', '#f1f1f1');
                document.documentElement.style.setProperty('--background', '#141414');
                toggleTheme--;
            }
            })