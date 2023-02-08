<?php

namespace Nuovatech\Template\Modern\Model;

use \Nuovatech\Neon\Util\Model;

/**
 * Class used to manager the Menu Widget
 */
class Menu extends Model
{
    /**
     * @var int
     * Key to identify menu
     */
    public $idMenu;

    /**
     * @var int
     * Foreing Key to identify submenu
     */
    public $idMenuParent;

    /**
     * @var string
     * Icon used to option
     */
    public $icon;

    /**
     * @var string
     * Label used to describe the menu in view
     */
    public $label;

    /**
     * @var int
     * The order by exibition the menu option
     */
    public $order;

    /**
     * @var int
     * Amoung of submenus useds
     */
    public $qtdSubMenu = 0;

    /**
     * @var string
     * Title used to show in tooltip
     */
    public $title;

    /**
     * @var string
     * Url the anchor element
     */
    public $url;
}
