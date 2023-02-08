<?php

use Nuovatech\Neon\Http\Session;
use Nuovatech\Neon\Neon;
use Nuovatech\Neon\Tools;
use \Nuovatech\Template\Modern\View;

?>
<!DOCTYPE html>

<html lang="pt-br">

<head>

    <meta charset="UTF-8">
    <meta content="Nuovatech" name="author">
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <link href="vendor/nuovatech/modern/assets/css/core.css" rel="stylesheet" type="text/css">
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

                <?php /* Tools::dump(Session::getBody(Neon::$app->sessionKey));*/ ?>
            </aside>
        </main>
    </div>
    <script src="vendor/nuovatech/modern/assets/script/core.js" type="module"></script>
</body>

</html>