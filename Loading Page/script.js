document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const content = document.getElementById('content');

        loader.classList.add('hidden');
        content.classList.remove('hidden'); 
        content.style.display = 'block'; 
    }, 3000); 
});
