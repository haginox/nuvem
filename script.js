function criarLetra() {
    const cena = document.querySelector('.cena');
    const letra = document.createElement('div');
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    
    letra.classList.add('letra');
    letra.innerText = caracteres.charAt(Math.floor(Math.random() * caracteres.length));

    // Define a posição horizontal baseada no centro da tela (onde está a nuvem)
    const centroX = window.innerWidth / 2;
    const x = (centroX - 100) + Math.random() * 200;
    
    letra.style.left = x + 'px';
    letra.style.fontSize = (Math.random() * 1.2 + 0.8) + 'em';
    
    let posVertical = 80; // Começa na altura da nuvem
    const velocidade = Math.random() * 4 + 4;
    const pontoDeImpacto = window.innerHeight * 0.8; // Onde o chão começa

    cena.appendChild(letra);

    function animarQueda() {
        posVertical += velocidade;
        letra.style.top = posVertical + 'px';

        if (posVertical >= pontoDeImpacto) {
            criarEfeitoSplash(x, pontoDeImpacto);
            letra.remove();
        } else {
            requestAnimationFrame(animarQueda);
        }
    }

    requestAnimationFrame(animarQueda);
}

function criarEfeitoSplash(x, y) {
    const cena = document.querySelector('.cena');
    const pingo = document.createElement('div');
    pingo.classList.add('pingo');
    pingo.style.left = x + 'px';
    pingo.style.top = y + 'px';
    
    cena.appendChild(pingo);

    setTimeout(() => {
        pingo.remove();
    }, 400);
}

// Gera letras a cada 100ms
setInterval(criarLetra, 100);