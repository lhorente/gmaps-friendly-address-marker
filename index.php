<?php require_once('config.php') ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Google Maps</title>
	<script src="assets/js/jquery-1.11.3.min.js"></script>
	<script src="assets/js/main.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?v=3&libraries=places&key=<?php echo API_KEY ?>"></script>
	<script src="assets/js/markerwithlabel.js"></script>
	<link rel='stylesheet' href='assets/css/main.css' type='text/css' media='all' />
  </head>
  <body>
	<input type="text" id="endereco" name="endereco">
	<div id="mapa"></div>
  </body>
</html>