<?php

namespace Nuovatech\Template\Modern\Widget;

/**
 * Pagination management
 * @author  Eduardo Marinho
 * @since   03/02/2023
 */
abstract class Pagination
{
    /**
     * @var int
     */
    public static $overall = 0;

    /**
     * @var string
     * URL to loaded in page link.
     */
    public static $url;

    /**
     * @var string
     * Label da paginação
     */
    public static $paginationLabel  = "?pag=";

    public static function enumerate($index, $pag = 1, $lim = 20)
    {
        print_r(($lim * $pag) - ($lim - ($index + 1)));
    }

    /**
     * Render the pagination elements in the view
     * @param   int $overall pages.
     * @param   int $page current page index.
     * @param   int $lim current page index.
     */
    public static function render(int $page = 1, int $lim = 0)
    {
        // Links to nav
        $links = '';

        if ($lim > 0) {
            $links .= "<a class='modern-pagination-link modern-pagination-prev' href='" . self::getUrl(1) . "' onclick='Loader.show();' title='Go to first page'>Primeira</a>";
        } else {
            $links .= "<a class='modern-pagination-link modern-pagination-prev' href='" . self::prev(self::$overall, $page) . "' onclick='Loader.show();'>&laquo;</a>";
        }

        if ($lim > 0) {

            // Previous links
            for (($pagPrev = $page - $lim); $pagPrev <= $page - 1; $pagPrev++) {
                if ($pagPrev >= 1) {
                    $links .= "<a class='modern-pagination-link' href='" . self::getUrl($pagPrev) . "' onclick='Loader.show();' title='Go to page $pagPrev'>$pagPrev</a>";
                }
            }

            // Current link
            $links .= "<a class='modern-pagination-link active' href='#' title='Go to page $page'>$page</a>";

            // Next links
            for (($pagNext = $page + 1); $pagNext <= $page + $lim; $pagNext++) {
                if ($pagNext <= self::$overall) {
                    $links .= "<a class='modern-pagination-link' href='" . self::getUrl($pagNext) . "' onclick='Loader.show();' title='Go to page $pagNext'>$pagNext</a>";
                }
            }
        } else {
            for ($i = 1; $i <= self::$overall; $i++) {

                if ($page == $i) {
                    $links .= "<a class='modern-pagination-link active' href='#' title='Go to page $i'>$i</a>";
                } else {
                    $links .= "<a class='modern-pagination-link' onclick='Loader.show();' href='" . self::getUrl($i) . "' title='Go to page $i'>$i</a>";
                }
            }
        }

        if ($lim > 0) {
            $links .= "<a class='modern-pagination-link modern-pagination-next' href='" . self::getUrl(self::$overall) . "' onclick='Loader.show();' title='Go to last page'>Última</a>";
        } else {
            $links .= "<a class='modern-pagination-link modern-pagination-next' href='" . self::next(self::$overall, $page) . "' onclick='Loader.show();'>&raquo;</a>";
        }

        $nav = "<nav class='modern-pagination'>$links</na>";
        print_r($nav);
    }

    /**
     * Check the value of self::$url
     * @return string
     */
    private static function checkURL()
    {
        if (empty(self::$url)) {
            return '#';
        }
    }

    /**
     */
    private static function getUrl(int $index)
    {
        self::checkURL();
        return self::$url . "pag/" . $index;
    }

    /**
     * Load next page
     * @param   int $overall overall amount of registers.
     * @param   int $page current page index.
     */
    private static function next(int $overall, int $page)
    {
        self::checkURL();

        if ($page <= $overall) {
            $current = $page + 1;
            $current = ($current > $overall) ? $overall : $current;
            return self::$url . "pag/" . $current;
        }
    }

    /**
     * Load previous page
     * @param   int $overall overall amount of registers.
     * @param   int $page current page index.
     */
    private static function prev(int $overall, int $page)
    {
        self::checkURL();

        if ($page <= $overall) {
            $current = $page - 1;
            $current = ($current <= 0) ? 1 : $current;
            return self::$url . "pag/" . $current;
        }
    }

    /**
     * Calcule the medium of value
     * @param   int $overall overall amount of registers.
     * @param   int $limite  the limite of elements by page.
     */
    public static function overall(int $registers = 0, $limite = 0)
    {
        self::$overall = ceil($registers / $limite);
    }
}
