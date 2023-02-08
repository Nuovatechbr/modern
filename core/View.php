<?php

namespace Nuovatech\Template\Modern;

use \Nuovatech\Neon\Http\Exception as HttpException;
use \Nuovatech\Neon\View as NeonView;

/**
 * Manager the view interface of Neon Viewer Template
 */
abstract class View extends NeonView
{
    /**
     * Load javascript module the application
     * @param string $path Path or URL the javascrip file.
     * @param string $type extenssion of the file.
     */
    public static function module(string $path, string $type = "js")
    {
        $path = $_SERVER['REQUEST_SCHEME'] . "://" .  $_SERVER['SERVER_NAME'] .  $_SERVER["REQUEST_URI"] . "public/assets/script/$path.$type";
        print_r("<script src='$path' type='module'></script> \r");
    }

    public static function navigation()
    {
        return Navigation::render();
    }

    /**
     * Método responsável por realizar a renderização da (view) no template.
     * @param string $path caminho do arquivo
     * @param string $extension formato do arquivo (html, php)
     * @param array $vars variáveis com parâdocumentations
     */
    public static function template(string $path = "", array $vars = [], string $extension = "php")
    {

        // Load the layout
        $layout = __DIR__ . "/../template/layout.php";

        // Check file existence        
        if (!file_exists($layout)) {
            HttpException::response(404, "Layout not found!");
        }

        // Load the content of view
        $view = "public/pages/$path.$extension";

        // Check page existence
        if (!file_exists($view)) {
            HttpException::response(404, "Page not found!");
        }

        if (!empty($vars)) {
            self::setGlobal($vars);
        }

        // Define controller vars to view
        parent::setGlobal($vars);
        unset($vars);

        // Load the content body
        $body = file_get_contents($view);

        ob_start();
        eval("?>" . $body  . "<?php");
        $body  = ob_get_clean();
        parent::setBody($body);
        require $layout;
    }
}
