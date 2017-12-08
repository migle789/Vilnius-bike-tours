<?php 
$user = 'root';
$password = 'root';
$db = 'Vilniusbt';
$host = 'localhost';
$port = 3306;

$link = mysqli_init();
$success = mysqli_real_connect(
   $link, 
   $host, 
   $user, 
   $password, 
   $db,
   $port
);


if(isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['email']) && isset($_POST['comment'])){
            $name= $_POST['name'];
            $surname= $_POST['surname'];
            $email = $_POST['email'];
            $comment = $_POST['comment'];
            $irasytiSql = "INSERT INTO `vilnius`(`id`, `name`, `surname`, `email`, `comment`) VALUES ('','$name','$surname','$email','$comment')";

            $irasymoUzklausa = mysqLi_query($link, $irasytiSql);
        } else {
            echo "Neuzpildyti inputai tinkamai";
        }

?>