const formulario = document.getElementById('formulario');
const nome = document.getElementById('nome');
const mensagem = document.getElementById('mensagem');
const telefone = '5586998079212';

formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nomeValor = nome.value.trim();
    const mensagemValor = mensagem.value.trim();

    if (nomeValor === '' || mensagemValor === '') {
        alert('Por favor, preencha seu nome e sua mensagem.');
        return;
    }

    const texto = `Olá! Me chamo ${nomeValor}. Vim pelo seu portfólio e gostaria de falar sobre um projeto.\n\nMensagem: ${mensagemValor}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

    window.open(url, '_blank');
});

const botaoMenu = document.getElementById('botaoMenu');
const menu = document.getElementById('menu');

botaoMenu.addEventListener('click', function () {
    menu.classList.toggle('ativo');
});

document.querySelectorAll('.menu-link').forEach(function(link) {
    link.addEventListener('click', function() {
        menu.classList.remove('ativo');
    });
});