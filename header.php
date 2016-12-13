<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<link href="https://fonts.googleapis.com/css?family=Indie+Flower|Titillium+Web" rel="stylesheet"> 

<!-- Not how I would ever do this, just being fast for now... -->
	<?php
	
	$inc_path = "Includes/css/";
	
	$css_files = array("jquery-ui.min.css",
					   "bootstrap.min.css",
					   "main.css",
					   "lvdt.css");
	
	$css_inc = "";
	
	foreach($css_files as $val) {
		$css_inc .= '<link rel="stylesheet" type="text/css" href="'.$inc_path.$val.'">';
	}
	
	print($css_inc);
	
	// // // // //
	
	$inc_path = "Includes/js/";
	
	$js_files = array("jquery.js",
		              "jquery-ui.min.js",
					  "bootstrap.min.js",
					  "angular.min.js");
	
	$js_inc = "";
	
	foreach($js_files as $val) {
		$js_inc .= '<script src="'.$inc_path.$val.'"></script>';
	}
	
	print($js_inc);
	?>


	
<title>Home</title>
</head>

<body>
	
<!-- // ==============================
     // Menu
     // ============================== -->
     
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="index.php">W. B. Metzel</a>
      </div>
      <ul class="nav navbar-nav">
        <li class="active"><a href="jam_theory.php">Music</a></li>
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">Tools
          <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <!--<li><a href="aspect_ratio.php">Aspect Ratio</a></li>-->
            <li><a href="axis_ranges.php">Axis Ranges</a></li>
            <li><a href="lvdt_scaling.php">LVDT Scaling</a></li>
          </ul>
        </li>
        <!-- <li><a href="Includes/demo/demo.php">Demo</a></li> -->
      </ul>
    </div>
  </nav>