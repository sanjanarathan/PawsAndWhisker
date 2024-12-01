User
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paws and Whiskers</title>
  
    <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">
</head>
<style>
        body {
            font-family: Arial, sans-serif;
            background-image: url('./assets/images/s17.jpg'); /* Path to your background image */
            background-size: cover;
            background-position: center;
            margin: 0;
            padding: 0;
        }

        .login-page {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .form-box {
            width: 300px;
            background-color: rgba(255, 255, 255, 0.9); /* Transparent white background */
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            text-align: center;
        }

        .input-field {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }

        .submit-btn {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
        }

        .submit-btn:hover {
            background-color: #0056b3;
        }
    </style>
    <body>
<?php
// Database connection parameters
$servername = "localhost"; // Change this to your database server
$username = "root"; // Change this to your database username
$password = ""; // Change this to your database password
$database = "petshop"; // Change this to your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if username and password were submitted
if (isset($_POST['username']) && isset($_POST['password'])) {
    // Retrieve username and password from the form data
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Sanitize user input to prevent SQL injection
    $username = $conn->real_escape_string($username);
    $password = $conn->real_escape_string($password);

    // Query to check if username and password match
    $sql = "SELECT * FROM logincred WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Login successful
        header("Location: shop.html");
    exit; // Ensure that no furt
    } else {
        // Login failed
        echo "failure";
    }
} else {
    // Username or password not provided
    echo "error";
}

// Close database connection
$conn->close();
?>

<div id='login-form' class='login-page'>
  <div class="form-box">
    <div class='button-box'>
      <div id='btn'></div>
      <h1>LOGIN</h1>

    
    <form  id='login' action='login.php' method='post' class='input-group-login'>
      <input type='text' class='input-field'  placeholder='Username' name='username' required>
      <input type='password' class='input-field' placeholder='Password'name='password'  required>
      <input type='checkbox' class='checkbox' ><span>Remember Password</span>
      <button type = 'submit'  class='submit-btn'>Log-in</button>
     <!---<a href="http://localhost/kitter-master/kitter-master/login.php" class="submit-btn">Login</a>-->
       </form>
       
      <!--- <div>
        <div><p>Already Registered <a href="login.php">Login Here</a></p></div>
      </div>-->
      
  </div>
</div>
</div>
<script>
    var x = document.getElementById('login');
    var y = document.getElementById('register');
    var z = document.getElementById('btn');
    
  
  function register() { // Change function name to register instead of registerForm
    
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
  }
  function login(){
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
  }
  </script>
  <script>
    var modal=document.getElementById('login-form');
window.onclick=function(event){
  if(event.target==modal)
  {
    modal.style.display="none";
  }
}
</script>
</body>
</html>