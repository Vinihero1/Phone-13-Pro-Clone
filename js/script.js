const buttons = document.querySelectorAll("#image-picker li");
const image = document.querySelector("#product-image");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // 1. Resetar a classe 'selected' de todos os botões
    buttons.forEach((b) => {
      b.querySelector(".color").classList.remove("selected");
    });

    // 2. Adicionar 'selected' ao botão clicado
    const clickedBtn = e.currentTarget; // Usar currentTarget garante que pegamos o 'li'
    clickedBtn.querySelector(".color").classList.add("selected");

    // 3. Pegar o ID da cor
    const id = clickedBtn.getAttribute("id");

    // 4. Efeito de troca de imagem (Fade Out)
    image.classList.add("changing");

    // 5. Trocar o SRC após um pequeno delay para a animação
    setTimeout(() => {
      image.setAttribute("src", `img/iphone_${id}.jpg`);
      image.classList.remove("changing");
    }, 400);
  });
});
