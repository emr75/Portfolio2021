<?php

// File created by Barbara Cam 2021/04.

?>
<!DOCTYPE html>
<html>
  <head>
    <!--global head.php-->
    <?php include "php/head.php" ?>
    <title>Pass**** Manager Home</title>
    <link rel="stylesheet" href="./css/twoStepQuestion.css">
    <script src="./js/script.js" async defer></script>
  </head>
  <body>
    <!--main nav-->
    <?php include 'php/header.php' ?>
    <main>
      <div class="mainDiv">       
        <!-- YOUR STUFF GOES HERE-->
        <div class="content">
          <div>
            <div class="status">
              <span>Your Security Answer Failed!</span>
            </div>
            <div class="status">
                <h3>Please Try Again!</h3>
            </div>
          </div> 
        </div>          
      </div>       
    </main>
    <!--global footer-->
    <?php include "php/footer.php"?>
  </body>
</html>
