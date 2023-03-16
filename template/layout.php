<?php

use \Nuovatech\Template\Modern\View;

?>
<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">
    <meta content="Nuovatech" name="author">
    <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
    <link href="vendor/nuovatech/modern/assets/css/core.css" rel="stylesheet" type="text/css">

    <?php
    View::css("core", true);
    View::extras("Jquery");
    View::script("core", true);
    View::global();
    ?>

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link href="https://fonts.cdnfonts.com/css/roboto" rel="stylesheet">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

    <title><?php View::title(); ?></title>

    <!-- Importação do ícone do template. -->


    <!-- Importação do css do template -->
</head>

<body class="modern-template">

    <!-- Application container -->
    <div class="modern-template-container">

        <!-- Header of application -->
        <header class="modern-template-header">

            <div class="modern-template-header-area">
                <button id="modern-template-btn-menu" title="Menu de navegação" type="button">
                    <span id="modern-template-btn-menu-icon" class="icon-menu-close"></span>
                </button>
            </div>

            <div class="modern-template-header-area"></div>

            <div class="modern-template-header-area">
                <button id="modern-template-btn-user" title="Menu de usuário" type="button">
                    <span class="icon-logout"></span>
                </button>
            </div>
        </header>

        <!-- Main of application -->
        <main class="modern-template-main">

            <!-- Contain the navigation menu -->
            <aside class="modern-template-sidebar">
                <?php View::navigation(); ?>
            </aside>

            <!-- Content of application -->
            <aside class="modern-template-content">
                <?php echo View::getBody(); ?>
            </aside>
        </main>
    </div>
    <style>
        .modern-template-main {
            height: 100vh !important;
        }
    </style>
</body>

</html>