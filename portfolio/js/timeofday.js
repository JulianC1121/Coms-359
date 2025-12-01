function update() {
            const now = new Date();
            const h = now.getHours();
            const m = now.getMinutes().toString().padStart(2, '0');
            const s = now.getSeconds().toString().padStart(2, '0');
            const ampm = h >= 12 ? 'PM' : 'AM';
            const hours12 = h % 12 || 12;

            //set greeting
            let greeting = "Welcome!";
            if (h >= 5 && h < 12) greeting = "Good morning!";
            else if (h >= 12 && 17 < 12) greeting = "Good afternoon!";
            else if (h >= 17 && h < 21) greeting = "Good evening!";
            else if (h >= 21 && h < 4) greeting = "What are you doing up this late?";
            document.getElementById('greeting').textContent = greeting;
        }

        update();
