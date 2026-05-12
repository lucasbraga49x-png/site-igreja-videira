async function ExibirCardsArmazenados() {
    try {
        const response = await fetch('./JSON/pastores.json');

        if (!response.ok) {
            throw new Error("Não é possível carregar o arquivo json");
        }
        
        const pastoresLista = await response.json();
        
       
        const track = document.querySelector(".carousel-track");
        track.innerHTML = ""; 

        pastoresLista.pastores.forEach(pastor => {
            track.innerHTML += `
                <div class="card">
                    <div class="avatar">
                        <img src="${pastor.avatar}" alt="${pastor.nome}">
                    </div>
                    <p>${pastor.nome}</p>
                </div>
            `;
        });


    } catch (error) {
        console.error("Erro ao carregar os pastores:", error);
    }
}

ExibirCardsArmazenados();

function iniciarCarrossel() {
    const track = document.querySelector(".carousel-track");
    const cards = document.querySelectorAll(".card");
    const step = 255; 
    let position = 0;
    
    const totalCards = cards.length;
    const cardsVisiveis = 3; 

    if (totalCards <= cardsVisiveis) return;

    const maxPosition = -((totalCards - cardsVisiveis) * step);

    document.querySelector(".right").onclick = () => {
        if (position > maxPosition) {
            position -= step;
            track.style.transform = `translateX(${position}px)`;
        }
    };

    document.querySelector(".left").onclick = () => {
        if (position < 0) {
            position += step;
            track.style.transform = `translateX(${position}px)`;
        }
    };
}
iniciarCarrossel();