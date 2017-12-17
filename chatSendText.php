<?php
    $username = $_POST['username'] ;
    $txt = $_POST['txt'];

    file_put_contents("chat.txt", $username.":".$txt."\r\n", FILE_APPEND);