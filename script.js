const darkLayer = document.getElementById('darkLayer');
const hiddenButton = document.getElementById('hiddenButton');

document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;

    const mouseX = (clientX / window.innerWidth) * 100;
    const mouseY = (clientY / window.innerHeight) * 100;

    darkLayer.style.background = `radial-gradient(circle at ${mouseX}% ${mouseY}%, transparent 3%, #000 7%)`;

    if (mouseX > 28 && mouseX < 32 && mouseY > 67 && mouseY < 72) {
        hiddenButton.style.opacity = 1;
    } else {
        hiddenButton.style.opacity = 0;
    }
});

function openModal() {
    document.getElementById("modalContainer").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modalContainer").classList.add("hidden");
}

function checkAnswer() {
    var answer = document.getElementById("answer").value.toLowerCase();

    // Adicione a lógica de verificação aqui. Por exemplo:
    if (answer === "mal feito feito") {
        alert("Fechando mapa do maroto... Vá buscar teu presente com teu amado");
        closeModal();
        // Adicione aqui qualquer ação adicional após uma resposta correta.
    } else {
        alert("Resposta incorreta. Tente novamente.");
    }
}

