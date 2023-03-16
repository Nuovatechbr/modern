<?php

namespace Nuovatech\Template\Modern;

use \Nuovatech\Neon\Http\Exception as HttpException;
use Nuovatech\Neon\Neon;
use Nuovatech\Neon\Tools;
use \Nuovatech\Neon\View as NeonView;

/**
 * Manager the view interface of Neon Viewer Template
 */
abstract class View extends NeonView
{

    /**
     * Método de inclusão da TAG LINK em VIEWS.
     * @param   string    $path Caminho do arquivo css
     * @author  Eduardo Marinho
     * @version 0.0.20210609
     */
    public static function css(string $path, $template = false)
    {
        $path = ($template == true) ? Neon::directory() . "/vendor/nuovatech/modern/assets/css/$path.css" : Neon::directory() . "public/assets/css/$path.css";
        print_r("<link href='$path' rel='stylesheet' type='text/css'> \r");
    }

    /**
     * Get global resources in application
     */
    public static function global()
    {
        $globalScripts = Neon::$app->scripts;
        foreach ($globalScripts as $path) {
            $path = Neon::directory() . "public/assets/script/$path.js";
            print_r("<script src='$path' type='text/javascript'></script> \r");
        }
        $globalStyles = Neon::$app->styles;
        foreach ($globalStyles as $path) {
            $path = Neon::directory() . "public/assets/css/$path.css";
            print_r("<link href='$path' rel='stylesheet' type='text/css'> \r");
        }
    }

    /**
     * Load the module js in local application
     * @param string    $place Path or URL the module script file.
     * @param bool      $web   Define the load is local or link.
     * @see Load .js files
     */
    public static function module(string $place, bool $web = false)
    {
        if ($web == true) {
        } else {
            $path =  Neon::directory() . "public/assets/script/$place.js";
        }
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

        try {
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
        } catch (\Throwable $th) {
            throw $th;
        }
    }

    /**
     * Load javascript module the application
     * @param string $path Path or URL the javascrip file.
     */
    public static function script(string $path, $template = false)
    {
        $path = ($template == true) ? Neon::directory() . "/vendor/nuovatech/modern/assets/script/$path.js?v=" . rand(1, 100) : Neon::directory() . "public/assets/script/$path.js?v=" . rand(1, 100);
        print_r("<script src='$path' type='text/javascript'></script> \r");
    }

    public static function extras(string $component)
    {
        $directory = Neon::directory() . "vendor/nuovatech/modern/assets/extras/$component";

        $js = ("<script src='directory.js' type='text/javascript'></script> \r");
        $css = ("<link rel='stylesheet' href='directory.css' type='text/css'> \r");

        switch ($component) {
            case "Fontawesome": {
                    print_r(str_replace("directory", "$directory/fontawesome", $css));
                    break;
                }
            case "Jquery": {
                    print_r(str_replace("directory", "$directory/Jquery", $js));
                    break;
                }
            case "Select2": {
                    print_r(str_replace("directory", "$directory/select2.min", $css));
                    print_r(str_replace("directory", "$directory/select2.min", $js));
                    break;
                }
        }
    }

    public static function erro()
    {
        try {
        } catch (\Throwable $th) {
            throw $th;
        }
    }
}
