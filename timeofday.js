function update() {
            const now = new Date();
            const h = now.getHours();
            const m = now.getMinutes().toString().padStart(2, '0');
            const s = now.getSeconds().toString().padStart(2, '0');
            const ampm = h >= 12 ? 'PM' : 'AM';
            const hours12 = h % 12 || 12;

            //set greeting
            let greeting = "Hello!";
            if (h >= 5 && h < 12) greeting = "Good morning!";
            else if (h >= 17 && h < 21) greeting = "Good evening!";
            else if (h >= 21 && h <= 23) greeting = "Getting late, huh?";
            else if (h <= 4) greeting = "Hello! What are you doing up this late?";
            document.getElementById('greeting').textContent = greeting;
        }

        update();
