// Função para verificar se há contador de visitas armazenado localmente
function checkVisitCount() {
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        localStorage.setItem('visitCount', 1);
        return 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
        localStorage.setItem('visitCount', visitCount);
        return visitCount;
    }
}

// Função para atualizar o contador de visitas na página
function updateVisitCounter() {
    const visitCounter = document.getElementById('visit-counter');
    if (visitCounter) {
        visitCounter.textContent = checkVisitCount();
    }
}

// Chamada da função para atualizar o contador ao carregar a página
document.addEventListener('DOMContentLoaded', updateVisitCounter);
