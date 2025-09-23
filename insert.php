<?php

$name=$_POST['name'];
$email=$_POST['email'];
$pw=$_POST['pw'];

$host="localhost";
$dbUsername="root";
$dbPassword="3319";
$dbname="dbms";
$conn=new mysqli($host,$dbUsername,$dbPassword,$dbname);
if(mysqli_connect_error())
{
    die('connect error('.mysqli_connect_errno().')'. mysqli_connect_error());
}
else
{
    $SELECT="SELECT email from users Where email= ? Limit 1";
    $INSERT="INSERT Into users(name,email,pw)values(?,?,?)";
    $stmt=$conn->prepare($SELECT);
    $stmt->bind_param("s",$email);
    $stmt->execute();
    $stmt->bind_result($email);
    $stmt->store_result();
    $rnum=$stmt->num_rows;
    if($rnum==0)
    {
        $stmt->close();
        $stmt=$conn->prepare($INSERT);
        $stmt->bind_param("sss",$name,$email,$pw);
        $stmt->execute();
        echo "new record inserted";
    }
    $stmt->close();
    $conn->close();
}



?>
