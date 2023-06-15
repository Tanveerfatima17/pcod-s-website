<?php
$insert=false;
if(isset($_POST['name'])){
$con=mysqli_connect('localhost','root','');
if(!$con){
    echo "SOMETHING WENT WRONG! PLEASE TRY AGAIN LATER.";
}
else{
//echo "succesful";
}
$name =$_POST['name'];
$age=$_POST['age'];
$email=$_POST['email'];
$password=$_POST['password'];
$sql = "INSERT INTO `user`.`login` (`id`, `name`, `age`, `email`, `password`, `result`) VALUES (NULL, 'fatima', '20', 'thungund@gmail.com', '8765432', '');";
if($con->query($sql)==true){
//echo "Data is stored succesfully";
$insert=true;
}
$con->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="style.css" />
  <link rel="icon" href="logo.png" type="image/x-icon">
  <title>Login</title>
</head>

<body style="background-color: rgb(61, 53, 106);">
  <div style="margin-top: 20px;">
    <span id="menu" style="padding:16px;font-weight: bold;"><button id="button"><a id="a"style="color:white;text-decoration: none;"href="index.html">HOME</a></button></span>
    <span id="menu" style="padding:16px;margin:5px"><button id="button"><a id="a" style="color:white ;text-decoration: none;"href="test.html">TEST</a></button></span>
    <span id="menu" style="padding:16px;margin:5px"><button id="button"><a id="a"style="color:white;text-decoration: none;"href="blog.html">BLOGS</a></button></span>
    <span id="menu" style="padding:16px; margin:5px;"><button id="button"><a id="a"style="color:white;text-decoration: none;"href="faq.html">FAQ</a></button></span>
    <span id="menu" style="padding:16px; margin:5px;"><button id="button"><a id="a"style="color:white;text-decoration: none;"href="http://localhost:8501/#ask-eda-anything-regarding-pcod-and-pcos">ASK EDA</a></button></span>
</div>

   <h1 style="text-align: center; color:white">Signup</h1>

   <form id="register" style="background-color: rgb(113, 42, 180);"action="login.php" method="post">   
    <p class="details" style="color:white">Full name :</p>
    <input class="inp" style="width:75%;border-radius: 20px;border: rgb(74, 70, 99) solid 5px;" type="text" placeholder="full-name" id="full-name"  required><br>

    <p class="details">Age:</p>
    <input class="inp" style="width:75%;border-radius: 20px;border: rgb(74, 70, 99) solid 5px;"value="age" id="age" type="number"  min="15" max="45" placefolder="age">

    <p class="details">Email:</p>
    <input class="inp" style="width:75%;border-radius: 20px;border: rgb(74, 70, 99) solid 5px;"type="email" placeholder="email" id="email" placeholder="xyz@abc.com"  required><br>

    <p class="details">Password:</p>
    <input class="inp" style="width:75%;border-radius: 20px;border: rgb(74, 70, 99) solid 5px;"type="password" placeholder="Password" id="password" maxlength="8">

    <p class="details" >Confirm Password</p>
    <input class="inp"style="width:75%;border-radius: 20px;border: rgb(74, 70, 99) solid 5px;" type="password" id="confirm-password" name="confirm-password" placeholder="Same as password" maxlength="8"><br><br>
<button style="padding: 10px; background-color: rgb(72, 53, 126);color:white;border-radius: 15px;">SUBMIT</button>
<button style="padding: 10px; background-color: rgb(72, 53, 126);color:white;border-radius: 15px;">RESET</button>
     </form>
  
  <script src="index.js"></script>
</body>

</html>