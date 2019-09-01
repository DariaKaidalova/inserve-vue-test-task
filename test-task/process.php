<?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $text = $_POST["text"];
        $list = explode("\n", $text);
        $json = json_encode($list);
        header("Content-Type: application/json");
        echo $json;
    }
?>