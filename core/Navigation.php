<?php

namespace Nuovatech\Template\Modern;

use \Nuovatech\Neon\Neon;

abstract class Navigation
{

    /**
     * Store the menu object
     * @var array
     */
    private static $nav = [];

    public static function render()
    {
        $list = '';
        $url = Neon::directory();
        foreach (self::$nav as $option) {

            if (empty($option->idMenuParent)) {
                // Cria o link para adicionar no objeto de lista
                if ($option->qtdSubMenu > 0) {
                    $link   = "<a class='modern-navigation-parent' title='$option->title'>$option->label<i class='modern-navigation-parent-arrow icon-arrow-down'></i></a>";
                    foreach (self::$nav as $sub) {

                        if ($sub->idMenuParent == $option->idMenu) {
                            $link .= "<a class='modern-navigation-child' href='$url$sub->url' title='$sub->title'>$sub->label</a>";
                        }
                    }
                    $li     = "<li class='modern-navigation-li-parent'>$link</li>";
                } else {
                    $link   = "<a class='modern-navigation-child' href='$url$option->url' title='$option->title'>$option->label</a>";
                    $li     = "<li class='modern-navigation-li'>$link</li>";
                }
                $list   .= $li;
            }
        }

        $ul     =   "<ul class='modern-navigation-ul'>$list</ul>";
        $nav    =   "<nav class='modern-navigation'>$ul</nav>";
        print_r($nav);
    }

    /**
     * Método responsável por definir as opções da navegação
     * @param   array $navigation array contendo informações da navegação.
     */
    public static function setNavigation(array $nav = [])
    {
        self::$nav = $nav;
    }
}
