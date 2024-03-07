<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Login</title>
    <!-- Adicionando Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        /* Estilo adicional personalizado */
        .navbar-brand {
            font-size: 1.5rem; /* Tamanho da fonte aumentado */
        }

        .btn-sair {
            font-size: 1.2rem; /* Tamanho do botão aumentado */
        }

        /* Ajustes para a tabela */
        .table th, .table td {
            vertical-align: middle;
        }

        .table th {
            width: 10%; /* Largura das células de cabeçalho */
            text-align: center; /* Centralizar texto */
        }

        .table td {
            width: 30%; /* Largura das células de dados */
            text-align: center;
        }
        #h3{
            margin-bottom: 20px;
            text-align: center;
            
        }
    </style>
</head>
<body>
    <!-- Navbar no topo da página -->
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="../claro-ativo/home.html">CLARO RESULTADO</a>
            <?php
                // Verificar se o usuário está logado
                session_start();
                if(empty($_SESSION["nome"])){
                    // Redirecionar para a página de login se o usuário não estiver logado
                    header("Location: index.php");
                    exit(); // Encerrar o script para evitar que o restante do código seja executado
                }

                // Incluir o arquivo de configuração do banco de dados
                include('sislogin.php');

                // Exibir mensagem de boas-vindas e botão de sair
                echo "Olá, " . $_SESSION["nome"];
                echo "<a href='logout.php' class='btn btn-danger btn-sair'>Sair</a>";
            ?>
        </div>
    </nav>

    <!-- Abas de Resultado e Faça sua métrica -->
    <ul class="nav nav-tabs mt-4">
        <li class="nav-item">
            <a class="nav-link active" id="resultado-tab" data-toggle="tab" href="#resultado" role="tab" aria-controls="resultado" aria-selected="true">Resultado</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" id="metrica-tab" data-toggle="tab" href="#metrica" role="tab" aria-controls="metrica" aria-selected="false">Faça sua métrica</a>
        </li>
    </ul>

    <!-- Conteúdo das abas -->
    <div class="tab-content mt-4">
        <!-- Conteúdo da aba Resultado -->
        <div class="tab-pane fade show active" id="resultado" role="tabpanel" aria-labelledby="resultado-tab">
            <div class="container mt-4">
                <h3 id="h3">DETALHES DO OPERADOR</h3>
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead class="thead-dark">
                            <?php
                                // Recuperar dados do banco de dados
                                $query = "SELECT * FROM operadores";
                                $result = $conn->query($query);

                                // Exibir os dados em uma tabela
                                if ($result && $result->num_rows > 0) {
                                    while ($row = $result->fetch_assoc()) {
                                        echo "<tr>";
                                        echo "<th>Login</th>";
                                        echo "<td>" . $row["loguin"] . "</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>Nome</th>";
                                        echo "<td>" . $row["nome"] . "</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>Valor Vendido</th>";
                                        echo "<td>R$ " . number_format($row["valor_vendido"], 2, ',', '.') . "</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>Meta de Vendas</th>";
                                        echo "<td>R$ " . number_format($row["meta_de_vendas"], 2, ',', '.') . "</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>% Atingimento</th>";
                                        echo "<td>" . $row["percentual_atingimento"] . "%</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>Chamadas</th>";
                                        echo "<td>" . $row["chamadas"] . "</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>Vendas Instaladas</th>";
                                        echo "<td>" . $row["vendas_instaladas"] . "</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>% Meta Conversão</th>";
                                        echo "<td>" . $row["percentual_meta_conversao"] . "%</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>% Conversão</th>";
                                        echo "<td>" . $row["percentual_conversao"] . "%</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>Dias Válidos</th>";
                                        echo "<td>" . $row["dias_validos"] . "</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>Ausências</th>";
                                        echo "<td>" . $row["ausencias"] . "</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>% Presenteísmo</th>";
                                        echo "<td>" . $row["percentual_presenteismo"] . "%</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>% Atingimento Final</th>";
                                        echo "<td>" . $row["percentual_atingimento_final"] . "%</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>% Atingimento x Peso</th>";
                                        echo "<td>" . $row["percentual_atingimento_peso"] . "%</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>Faixa</th>";
                                        echo "<td>" . $row["faixa"] . "</td>";
                                        echo "</tr>";
                                        echo "<tr>";
                                        echo "<th>Valor Final</th>";
                                        echo "<td>R$ " . number_format($row["valor_final"], 2, ',', '.') . "</td>";
                                        echo "</tr>";
                                    }
                                } else {
                                    // Caso não haja resultados ou ocorra um erro
                                    echo "<tr><td colspan='2'>Nenhum resultado encontrado</td></tr>";
                                    if(isset($conn) && $conn->error) {
                                        echo "<tr><td colspan='2'>Erro: " . $conn->error . "</td></tr>";
                                    }
                                }
                            ?>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

        <!-- Conteúdo da aba Faça sua métrica -->
        <div class="tab-pane fade" id="metrica" role="tabpanel" aria-labelledby="metrica-tab">
            <!-- Conteúdo da aba "Faça sua métrica" -->
        </div>
    </div>

    <!-- Adicionando Bootstrap JS e dependências -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
