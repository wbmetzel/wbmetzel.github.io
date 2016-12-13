<!-- Not how I would ever do this, just being fast for now... -->
	<?php
	
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
