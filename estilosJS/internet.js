document.addEventListener('DOMContentLoaded', function () {
    var internetTab = document.querySelector('.list-itens li:nth-child(1) a'); // Selecione o link da aba "INTERNET"
    var internetTable = document.getElementById('internetTable'); // Selecione a div da tabela

    internetTab.addEventListener('click', function () {
        // Alterna a visibilidade da tabela ao clicar na aba "INTERNET"
        internetTable.style.display = (internetTable.style.display === 'none' || internetTable.style.display === '') ? 'block' : 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    var ofertaRentabilidade = document.querySelectorAll('.ofertaRentabilidade');

    toggleButton.addEventListener('click', function () {
        ofertaRentabilidade.forEach(function (linha) {
            linha.classList.toggle('hidden');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Botão OF-750
    var toggleButton1 = document.getElementById('oferta1');
    var ofertaRentabilidade1 = document.querySelectorAll('.oferta1');

    toggleButton1.addEventListener('click', function () {
        ofertaRentabilidade1.forEach(function (linha) {
            linha.classList.toggle('hidden');
        });
    });

    // Botão OF-500
    var toggleButton2 = document.getElementById('oferta2');
    var ofertaRentabilidade2 = document.querySelectorAll('.oferta2');

    toggleButton2.addEventListener('click', function () {
        ofertaRentabilidade2.forEach(function (linha) {
            linha.classList.toggle('hidden');
        });
    });

    // Botão OF-350
    var toggleButton3 = document.getElementById('oferta3');
    var ofertaRentabilidade3 = document.querySelectorAll('.oferta3');

    toggleButton3.addEventListener('click', function () {
        ofertaRentabilidade3.forEach(function (linha) {
            linha.classList.toggle('hidden');
        });
    });
});


// PLANO 1 GIGA
// Função para abrir o modal ao passar o mouse e clicar na tabela
document.getElementById('plan1').addEventListener('click', function(event) {
    if (event.target.tagName.toLowerCase() !== 'th') { // Verifica se o elemento clicado não é o th
        document.getElementById('janelaModal1').style.display = 'block'; // Usando 'janelaModal1' para o modal do plano 1 GIGA
    }
});

// Função para fechar o modal ao clicar no botão de fechar dentro do modal
document.querySelector('#janelaModal1 .close').addEventListener('click', function() {
    document.getElementById('janelaModal1').style.display = 'none'; // Usando 'janelaModal1' para o modal do plano 1 GIGA
});




// PLANO 750 MEGAS
// Função para abrir o modal do plano de 750 Mega ao passar o mouse e clicar na tabela
document.getElementById('plan750Mega').addEventListener('click', function() {
    document.getElementById('janelaModal750Mega').style.display = 'block'; // Usando 'janelaModal750Mega' para o modal do plano 750 Mega
});

// Função para fechar o modal ao clicar no botão de fechar
document.getElementsByClassName('close')[1].addEventListener('click', function() {
    document.getElementById('janelaModal750Mega').style.display = 'none'; // Usando 'janelaModal750Mega' para o modal do plano 750 Mega
});


// PLANO 500 MEGAS
// Função para abrir o modal do plano de 500 Mega ao passar o mouse e clicar na tabela
document.getElementById('plan500Mega').addEventListener('click', function() {
    document.getElementById('janelaModal500Mega').style.display = 'block'; // Usando 'janelaModal500Mega' para o modal do plano 500 Mega
});

// Função para fechar o modal ao clicar no botão de fechar dentro do modal do plano de 500 Mega
document.getElementById('janelaModal500Mega').getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('janelaModal500Mega').style.display = 'none'; // Usando 'janelaModal500Mega' para o modal do plano 500 Mega
});


// PLANO 350 MEGAS
// Função para abrir o modal do plano de 350 Mega ao passar o mouse e clicar na tabela
document.getElementById('plan350Mega').addEventListener('click', function() {
    document.getElementById('janelaModal350Mega').style.display = 'block'; // Usando 'janelaModal350Mega' para o modal do plano 350 Mega
});

// Função para fechar o modal ao clicar no botão de fechar dentro do modal do plano de 350 Mega
document.getElementById('janelaModal350Mega').getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('janelaModal350Mega').style.display = 'none'; // Usando 'janelaModal350Mega' para o modal do plano 350 Mega
});


// PLANO 250 MEGAS
// Função para abrir o modal do plano de 250 Mega ao passar o mouse e clicar na tabela
document.getElementById('plan250Mega').addEventListener('click', function() {
    document.getElementById('janelaModal250Mega').style.display = 'block'; // Usando 'janelaModal250Mega' para o modal do plano 250 Mega
});

// Função para fechar o modal ao clicar no botão de fechar dentro do modal do plano de 250 Mega
document.getElementById('janelaModal250Mega').getElementsByClassName('close')[0].addEventListener('click', function() {
    document.getElementById('janelaModal250Mega').style.display = 'none'; // Usando 'janelaModal250Mega' para o modal do plano 250 Mega
});

document.addEventListener('DOMContentLoaded', function () {
    var td500Mega = document.getElementById('td500Mega');
    var janelaModal500Mega = document.getElementById('janelaModal500Mega');
    var closeModal500Mega = document.getElementById('closeModal500Mega');

    // Função para abrir o modal ao clicar no <td> "500 Mega"
    td500Mega.addEventListener('click', function () {
        janelaModal500Mega.style.display = 'block';
    });

    // Função para fechar o modal ao clicar no botão de fechar
    closeModal500Mega.addEventListener('click', function () {
        janelaModal500Mega.style.display = 'none';
    });
});









