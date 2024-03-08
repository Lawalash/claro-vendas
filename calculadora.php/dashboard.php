<?php
// Iniciando a sessão no início do arquivo
session_start();
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sistema de Login</title>
    <!-- Adicionando Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        /* Estilos personalizados */
        img[src*="https://www.000webhost.com/static/default.000webhost.com/images/powered-by-000webhost.png"] {
            display: none;
        }
        .navbar-brand {
            font-size: 1.5rem;
        }
        .btn-sair {
            font-size: 1.2rem;
        }
        .table th, .table td {
            vertical-align: middle;
        }
        .table th {
            width: 10%;
            text-align: center;
        }
        .table td {
            width: 30%;
            text-align: center;
        }
        #h3 {
            margin-bottom: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="https://clarovendas.000webhostapp.com/home.html">CLARO RESULTADO</a>
            <?php
                if(empty($_SESSION["nome"])){
                    header("Location: index.php");
                    exit();
                }
                include('lawalash.php');
                echo "Olá, " . $_SESSION["nome"];
                echo "<a href='logout.php' class='btn btn-danger btn-sair'>Sair</a>";
            ?>
        </div>
    </nav>

    <!-- Abas -->
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
                                // Exibir informações do operador
                                echo "<tr><th>Login</th><td>289853</td></tr>";
                                echo "<tr><th>Nome</th><td>Ricardo Alexandre Brasil Junior</td></tr>";
                                echo "<tr><th>Valor Vendido</th><td>R$ 2.772,54</td></tr>";
                                echo "<tr><th>Meta de Vendas</th><td>R$ 3.500,00</td></tr>";
                                echo "<tr><th>% Atingimento</th><td>75,3%</td></tr>";
                                echo "<tr><th>Chamadas</th><td>1790</td></tr>";
                                echo "<tr><th>Vendas Instaladas</th><td>35</td></tr>";
                                echo "<tr><th>% Meta Conversão</th><td>3,00%</td></tr>";
                                echo "<tr><th>% Conversão</th><td>1,96%</td></tr>";
                                echo "<tr><th>Dias Válidos</th><td>25</td></tr>";
                                echo "<tr><th>Ausências</th><td>0</td></tr>";
                                echo "<tr><th>% Presenteísmo</th><td>100%</td></tr>";
                                echo "<tr><th>% Atingimento Final</th><td>100%</td></tr>";
                                echo "<tr><th>% Atingimento x Peso</th><td>39,55%</td></tr>";
                                echo "<tr><th>Faixa</th><td>G4</td></tr>";
                                echo "<tr><th>Valor Final</th><td>R$ 27,11</td></tr>";
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
