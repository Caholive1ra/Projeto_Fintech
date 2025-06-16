document.addEventListener('DOMContentLoaded', function() {
    const missionButton = document.getElementById('mission-button');
    
    // Adiciona verificação se o botão existe
    if (missionButton) {
        missionButton.addEventListener('click', function() {
            this.textContent = 'Missão Concluída!';
            this.style.backgroundColor = '#8F8F8F';
            this.disabled = true;
            alert('Parabéns por concluir a missão!');
        });
    }
});