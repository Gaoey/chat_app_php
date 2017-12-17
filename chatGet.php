<?php
    $filename = "chat.txt";
    $content = file_get_contents($filename);
    $line = explode("\r\n", $content);
    $data = array();

    for($i = 0; $i < count($line)-1 ; $i++){
        $eachLine = explode(":", $line[$i]);
        $arr = array();
        array_push($arr, $eachLine[0], $eachLine[1]);
        array_push($data, $arr);
    }

    $json = json_encode($data);
    echo $json;
