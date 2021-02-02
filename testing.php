<?php

if (isset($_GET["val"])) {
    echo '<h1>' . $_GET["val"] .'</h1>';
} else {
    ?>

<h1>No se pasaron parametros</h1>
    <?php
}