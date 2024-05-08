document.addEventListener('DOMContentLoaded', function () {
    // Selecionando o link "MÓVEL"
    var movelLink = document.querySelector('a[href="tabelamovel.html"]');

    // Selecionando o main pelo id
    var tabelaMovel = document.getElementById('tabelaMovel');

    // Adicionando um evento de clique ao link "MÓVEL"
    movelLink.addEventListener('click', function () {
        // Verificando se o main está oculto
        if (tabelaMovel.style.display === 'none') {
            // Mostrando o main
            tabelaMovel.style.display = 'block';
        } else {
            // Ocultando o main
            tabelaMovel.style.display = 'none';
        }
    });


// ===============================================================

            // Script para mostrar/ocultar janela modal ao clicar no botão "Exibir Lista de Cidades"
            var exibirListaButton = document.getElementById('exibirListaButton');
            var janelaModal = document.getElementById('janelaModal');

            exibirListaButton.addEventListener('click', function () {
                janelaModal.style.display = 'block';
            });

            // Fechar a janela modal ao clicar no botão de fechar (X)
            document.querySelector('.close2').addEventListener('click', function () {
                janelaModal.style.display = 'none';
            });

            // Selecionando a lista de cidades e o campo de pesquisa
            var listaCidades = document.querySelectorAll('.list-cidades li');
            var pesquisarCidadeInput = document.getElementById('pesquisarCidade');

            // Adicionando evento de clique para cada cidade na lista
            listaCidades.forEach(cidade => {
                cidade.addEventListener('click', function () {
                    // Obtendo o texto da cidade clicada
                    var cidadeSelecionada = this.textContent.trim();
                    
                    // Preenchendo o campo de pesquisa com a cidade selecionada
                    pesquisarCidadeInput.value = cidadeSelecionada;

                    // Não fechando a janela modal ao selecionar uma cidade
                });
            });

            // Evento de clique no botão "Confirmar" dentro do modal
            var confirmarCidadeButton = document.getElementById('confirmarCidade');
            confirmarCidadeButton.addEventListener('click', function () {
                // Fechando a janela modal ao confirmar a cidade
                janelaModal.style.display = 'none';

                // Função para mostrar a tabela do grupo correspondente à cidade selecionada
                mostrarTabelaDoGrupo(pesquisarCidadeInput.value.trim());
            });

            // Evento de input para o campo de pesquisa de cidade
            pesquisarCidadeInput.addEventListener('input', function () {
                var termoPesquisa = this.value.trim().toLowerCase(); // Obtendo o termo de pesquisa em letras minúsculas

                // Iterando sobre cada cidade na lista para verificar o termo de pesquisa
                listaCidades.forEach(cidade => {
                    var nomeCidade = cidade.textContent.trim().toLowerCase(); // Obtendo o nome da cidade em letras minúsculas

                    // Verificando se o termo de pesquisa está contido no nome da cidade
                    if (nomeCidade.includes(termoPesquisa)) {
                        cidade.style.display = 'block'; // Exibindo a cidade se o termo de pesquisa for encontrado
                    } else {
                        cidade.style.display = 'none'; // Ocultando a cidade se o termo de pesquisa não for encontrado
                    }
                });
            });

            // Novo código para lidar com o segundo botão
            var exibirListaButtonPosPago = document.getElementById('exibirListaButtonPosPago');
            var exibirListaButtonControle = document.getElementById('exibirListaButtonControle');
            var janelaModal = document.getElementById('janelaModal');

            // Adicionando evento de clique para abrir o modal (Pós Pago)
            exibirListaButtonPosPago.addEventListener('click', function () {
                janelaModal.style.display = 'block';
            });

            // Adicionando evento de clique para abrir o modal (Controle)
            exibirListaButtonControle.addEventListener('click', function () {
                janelaModal.style.display = 'block';
            });

            // Adicionando evento de clique para fechar o modal
            document.querySelector('.close2').addEventListener('click', function () {
                janelaModal.style.display = 'none';
            });

        // Função para mostrar a tabela do grupo correspondente à cidade selecionada
        function mostrarTabelaDoGrupo(cidadeDigitada) {
            // Mapeamento das cidades para grupos
            const cidadeGrupoMap = {
                'Aracruz-ES': 'AQUISIÇÃO CONTROLE',
                'Cariacica-ES': 'AQUISIÇÃO CONTROLE',
                'Colatina-ES': 'AQUISIÇÃO CONTROLE',
                'Serra-ES': 'AQUISIÇÃO CONTROLE',
                'Belo Horizonte-MG': 'AQUISIÇÃO CONTROLE',
                'Betim-MG': 'AQUISIÇÃO CONTROLE',
                'Conselheiro Lafaiete-MG': 'AQUISIÇÃO CONTROLE',
                'Contagem-MG': 'AQUISIÇÃO CONTROLE',
                'Coronel Fabriciano-MG': 'AQUISIÇÃO CONTROLE',
                'Ipatinga-MG': 'AQUISIÇÃO CONTROLE',
                'Itabira-MG': 'AQUISIÇÃO CONTROLE',
                'Joao Monlevade-MG': 'AQUISIÇÃO CONTROLE',
                'Lagoa Santa-MG': 'AQUISIÇÃO CONTROLE',
                'Matozinhos-MG': 'AQUISIÇÃO CONTROLE',
                'Nova Lima-MG': 'AQUISIÇÃO CONTROLE',
                'Pedro Leopoldo-MG': 'AQUISIÇÃO CONTROLE',
                'Sabara-MG': 'AQUISIÇÃO CONTROLE',
                'Santa Cruz de Minas-MG': 'AQUISIÇÃO CONTROLE',
                'Santa Luzia-MG': 'AQUISIÇÃO CONTROLE',
                'Sete Lagoas-MG': 'AQUISIÇÃO CONTROLE',
                'Timoteo-MG': 'AQUISIÇÃO CONTROLE',
                'Vespasiano-MG': 'AQUISIÇÃO CONTROLE',
                'Vicosa-MG': 'AQUISIÇÃO CONTROLE',
                'Almirante Tamandare-PR': 'AQUISIÇÃO CONTROLE',
                'Araucaria-PR': 'AQUISIÇÃO CONTROLE',
                'Campo Largo-PR': 'AQUISIÇÃO CONTROLE',
                'Colombo-PR': 'AQUISIÇÃO CONTROLE',
                'Curitiba-PR': 'AQUISIÇÃO CONTROLE',
                'Fazenda Rio Grande-PR': 'AQUISIÇÃO CONTROLE',
                'Guaratuba-PR': 'AQUISIÇÃO CONTROLE',
                'Paranagua-PR': 'AQUISIÇÃO CONTROLE',
                'Pinhais-PR': 'AQUISIÇÃO CONTROLE',
                'Piraquara-PR': 'AQUISIÇÃO CONTROLE',
                'Quatro Barras-PR': 'AQUISIÇÃO CONTROLE',
                'Sao Jose Dos Pinhais-PR': 'AQUISIÇÃO CONTROLE',
                'Ararangua-SC': 'AQUISIÇÃO CONTROLE',
                'Biguacu-SC': 'AQUISIÇÃO CONTROLE',
                'Criciuma-SC': 'AQUISIÇÃO CONTROLE',
                'Florianopolis-SC': 'AQUISIÇÃO CONTROLE',
                'Palhoca-SC': 'AQUISIÇÃO CONTROLE',
                'Tubarao-SC': 'AQUISIÇÃO CONTROLE',
                'Camacari-BA': 'AQUISIÇÃO CONTROLE',
                'Lauro De Freitas-BA': 'AQUISIÇÃO CONTROLE',
                'Mata De Sao Joao-BA': 'AQUISIÇÃO CONTROLE',
                'Salvador-BA': 'AQUISIÇÃO CONTROLE',
                'Vila Velha-ES': 'AQUISIÇÃO CONTROLE',
                'Vitoria-ES': 'AQUISIÇÃO CONTROLE',
                'Belo Horizonte-MG': 'AQUISIÇÃO CONTROLE',
                'Juiz De Fora-MG': 'AQUISIÇÃO CONTROLE',
                'Muriae-MG': 'AQUISIÇÃO CONTROLE',
                'Manhuacu-MG': 'AQUISIÇÃO CONTROLE',
                'Uberaba-MG': 'AQUISIÇÃO CONTROLE',
                'Uberlandia-MG': 'AQUISIÇÃO CONTROLE',
                'Lavras-MG': 'AQUISIÇÃO CONTROLE',
                'Pouso Alegre-MG': 'AQUISIÇÃO CONTROLE',
                'Varginha-MG': 'AQUISIÇÃO CONTROLE',
                'Divinopolis-MG': 'AQUISIÇÃO CONTROLE',
                'Formiga-MG': 'AQUISIÇÃO CONTROLE',
                'Itauna-MG': 'AQUISIÇÃO CONTROLE',
                'Montes Claros-MG': 'AQUISIÇÃO CONTROLE',
                'Sao Jose-SC': 'AQUISIÇÃO CONTROLE',
                'Camacari-BA': 'AQUISIÇÃO CONTROLE',
                'Manaus-AM': 'AQUISIÇÃO CONTROLE',
                'Aracruz-ES (2)':'AQUISIÇÃO PÓS',
                'Aracruz-ES (2)': 'AQUISIÇÃO PÓS',
                'Cariacica-ES (2)': 'AQUISIÇÃO PÓS',
                'Colatina-ES (2)': 'AQUISIÇÃO PÓS',
                'Serra-ES (2)': 'AQUISIÇÃO PÓS',
                'Belo Horizonte-MG (2)': 'AQUISIÇÃO PÓS',
                'Betim-MG (2)': 'AQUISIÇÃO PÓS',
                'Conselheiro Lafaiete-MG (2)': 'AQUISIÇÃO PÓS',
                'Contagem-MG (2)': 'AQUISIÇÃO PÓS',
                'Coronel Fabriciano-MG (2)': 'AQUISIÇÃO PÓS',
                'Ipatinga-MG (2)': 'AQUISIÇÃO PÓS',
                'Itabira-MG (2)': 'AQUISIÇÃO PÓS',
                'Joao Monlevade-MG (2)': 'AQUISIÇÃO PÓS',
                'Lagoa Santa-MG (2)': 'AQUISIÇÃO PÓS',
                'Matozinhos-MG (2)': 'AQUISIÇÃO PÓS',
                'Nova Lima-MG (2)': 'AQUISIÇÃO PÓS',
                'Pedro Leopoldo-MG (2)': 'AQUISIÇÃO PÓS',
                'Sabara-MG (2)': 'AQUISIÇÃO PÓS',
                'Santa Cruz de Minas-MG (2)': 'AQUISIÇÃO PÓS',
                'Santa Luzia-MG (2)': 'AQUISIÇÃO PÓS',
                'Sete Lagoas-MG (2)': 'AQUISIÇÃO PÓS',
                'Timoteo-MG (2)': 'AQUISIÇÃO PÓS',
                'Vespasiano-MG (2)': 'AQUISIÇÃO PÓS',
                'Almirante Tamandare-PR (2)': 'AQUISIÇÃO PÓS',
                'Araucaria-PR (2)': 'AQUISIÇÃO PÓS',
                'Campo Largo-PR (2)': 'AQUISIÇÃO PÓS',
                'Colombo-PR (2)': 'AQUISIÇÃO PÓS',
                'Curitiba-PR (2)': 'AQUISIÇÃO PÓS',
                'Fazenda Rio Grande-PR (2)': 'AQUISIÇÃO PÓS',
                'Guaratuba-PR (2)': 'AQUISIÇÃO PÓS',
                'Paranagua-PR (2)': 'AQUISIÇÃO PÓS',
                'Pinhais-PR (2)': 'AQUISIÇÃO PÓS',
                'Piraquara-PR (2)': 'AQUISIÇÃO PÓS',
                'Quatro Barras-PR (2)': 'AQUISIÇÃO PÓS',
                'Sao Jose Dos Pinhais-PR (2)': 'AQUISIÇÃO PÓS',
                'Ararangua-SC (2)': 'AQUISIÇÃO PÓS',
                'Biguacu-SC (2)': 'AQUISIÇÃO PÓS',
                'Criciuma-SC (2)': 'AQUISIÇÃO PÓS',
                'Florianopolis-SC (2)': 'AQUISIÇÃO PÓS',
                'Palhoca-SC (2)': 'AQUISIÇÃO PÓS',
                'Tubarao-SC (2)': 'AQUISIÇÃO PÓS',
                'Camacari-BA (2)': 'AQUISIÇÃO PÓS',
                'Lauro De Freitas-BA (2)': 'AQUISIÇÃO PÓS',
                'Mata De Sao Joao-BA (2)': 'AQUISIÇÃO PÓS',
                'Salvador-BA (2)': 'AQUISIÇÃO PÓS',
                'Viçosa-MG': 'AQUISIÇÃO PÓS',
                'São José dos Pinhais-PR': 'AQUISIÇÃO PÓS',
                'Araranguá-SC': 'AQUISIÇÃO PÓS',
                'Biguaçu-SC': 'AQUISIÇÃO PÓS',
                'Criciúma-SC': 'AQUISIÇÃO PÓS',
                'Florianópolis-SC': 'AQUISIÇÃO PÓS',
                'Palhoça-SC': 'AQUISIÇÃO PÓS',
                'Tubarão-SC': 'AQUISIÇÃO PÓS',
                'Camaçari-BA': 'AQUISIÇÃO PÓS',
                'Lauro de Freitas-BA': 'AQUISIÇÃO PÓS',
                'Mata de São João-BA': 'AQUISIÇÃO PÓS',
                'Manaus-AM(2)': 'AQUISIÇÃO PÓS',



            
        };
            // Verifica se a cidade está no mapeamento
            if (cidadeGrupoMap.hasOwnProperty(cidadeDigitada)) {
                const grupoCidade = cidadeGrupoMap[cidadeDigitada];
                mostrarTabela(grupoCidade);
            } else {
                respostaOferta.innerHTML = '<span style="color: red; font-weight: bold;">Cidade não encontrada ou não possui oferta.</span>';
                respostaOferta.style.display = 'block';
            }
            }



            // Função para mostrar a tabela do grupo selecionado
            function mostrarTabela(grupo) {
            // Oculta todas as tabelas
            document.querySelectorAll('.tabela-grupo').forEach(tabela => {
                tabela.style.display = 'none';
            });

            // Mostra a tabela do grupo selecionado
            const tabelaDoGrupo = document.getElementById(grupo);
            if (tabelaDoGrupo) {
                // Adiciona a classe "tabela-escondida" para ocultar a tabela inicialmente
                tabelaDoGrupo.classList.add('tabela-escondida');
                tabelaDoGrupo.style.display = 'block';
            } else {
                respostaOferta.innerHTML = '<span style="color: red; font-weight: bold;">Grupo sem tabela correspondente.</span>';
                respostaOferta.style.display = 'block';
            }
            }

        // Convertendo o nome da cidade digitada para minúsculas
            cidadeDigitada = cidadeDigitada.toLowerCase();

            if (cidadesDisponiveis.includes(cidadeDigitada)) {
            respostaOferta.innerHTML = '<span style="color: green; font-weight: bold;">A cidade ' + cidadeDigitada + ' possui uma oferta disponível.</span>';
            respostaOferta.style.display = 'block'; // Mostra o elemento respostaOferta
            setTimeout(function () {
                respostaOferta.style.display = 'none'; // Esconde o elemento após 6 segundos
            }, 6000); // 6 segundos em milissegundos
            } else {
            respostaOferta.innerHTML = '<span style="color: red; font-weight: bold;">Não há oferta disponível para a cidade ' + cidadeDigitada + '.</span>';
            respostaOferta.style.display = 'block'; // Mostra o elemento respostaOferta
            setTimeout(function () {
                respostaOferta.style.display = 'none'; // Esconde o elemento após 6 segundos
            }, 6000); // 6 segundos em milissegundos
            }







});
