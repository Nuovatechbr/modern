<?php

use \Nuovatech\Template\Modern\View;

?>
<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">
    <meta content="Nuovatech" name="author">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <link href="vendor/nuovatech/modern/assets/css/core.css" rel="stylesheet" type="text/css">
    <title><?php echo "teste"; ?></title>

    <!-- Importação do ícone do template. -->


    <!-- Importação do css do template -->
</head>

<body class="modern-template">

    <!-- Application container -->
    <div class="modern-template-container">

        <!-- Header of application -->
        <header class="modern-template-header">

            <div class="modern-template-header-area">
                <button id="modern-template-btn-menu" title="Menu de navegação" type="button"></button>
            </div>

            <div class="modern-template-header-area"></div>

            <div class="modern-template-header-area">
                <button id="modern-template-btn-user" title="Menu de usuário" type="button"></button>
            </div>
        </header>

        <!-- Main of application -->
        <main class="modern-template-main">

            <!-- Contain the navigation menu -->
            <aside class="modern-template-sidebar"></aside>

            <!-- Content of application -->
            <aside class="modern-template-content">
                <?php echo View::getBody(); ?>
            </aside>
        </main>
    </div>
</body>

</html>