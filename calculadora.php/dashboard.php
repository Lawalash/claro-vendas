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
    </style>
</head>
<body>
    <!-- Navbar no topo da página -->
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand"> Sistema X </a>
            <?php
                // Verificar se o usuário está logado
                session_start();
                if(empty($_SESSION["nome"])){
                    // Redirecionar para a página de login se o usuário não estiver logado
                    header("Location: index.php");
                    exit(); // Encerrar o script para evitar que o restante do código seja executado
                }

                // Incluir o arquivo de configuração do banco de dados
                include('config.php');

                // Exibir mensagem de boas-vindas e botão de sair
                echo "Olá, " . $_SESSION["nome"];
                echo "<a href='logout.php' class='btn btn-danger btn-sair'>Sair</a>";
            ?>
        </div>
    </nav>

    <!-- Tabela de Faturamento Bruto -->
    <div class="container mt-4">
        <h3>Faturamento Bruto por Usuário</h3>
        <table class="table table-bordered table-striped">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Usuário</th>
                    <th scope="col">Faturamento Bruto</th>
                </tr>
            </thead>
            <tbody>
                <?php
                // Recuperar dados do banco de dados
                $query = "SELECT nome, faturamento_bruto FROM usuarios";
                $result = $conn->query($query);

                // Exibir os dados em uma tabela
                if ($result && $result->num_rows > 0) {
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $row["nome"] . "</td>";
                        echo "<td>" . $row["faturamento_bruto"] . "</td>";
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
            </tbody>
        </table>
    </div>

    <!-- Adicionando Bootstrap JS e dependências -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
