<!DOCTYPE html>
<html>
    <head>
        <title>Demos</title>
        <header>
            <h1>
                Demos here:
            </h1>
        </header>
        <body class="epic">
            <input class="cool" type="button" value="Login demo" onclick="transferTo('demos/login/login.php');"/>
            <input class="cool" type="button" value="Readfile demo" onclick="transferTo('demos/file_read/readfile.php');"/>
        </body>
    </head>
</html>

<script type="text/javascript" src="cool.js"></script>
<link rel = "stylesheet"type = "text/css" href = "styles/epic.css"/>


<!--fonty-->
<link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@700&display=swap" rel="stylesheet">
<?php
$pog = $_GET['pog'];
print $pog;
?>

