document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggleMode');

    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        // Atualiza o texto do botão
        if (document.body.classList.contains('dark-mode')) {
            toggle.textContent = "Modo Claro";
        } else {
            toggle.textContent = "Modo Escuro";
        }
    });

    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');

    function moveImage(image) {
        setInterval(() => {
            const maxX = window.innerWidth - image.width;
            const maxY = window.innerHeight - image.height;

            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;

            image.style.position = 'absolute';
            image.style.left = `${newX}px`;
            image.style.top = `${newY}px`;
        }, 5000);
    }

    moveImage(image1);
    moveImage(image2);
});
