<?php require_once("header.php"); ?>
  
  <br><br>
  
  <div class="main-wrapper">
    <div class="container axes-container" ng-app="app">
    
      <div class="row text-center">
        <!-- Header -->
        <div class="col-xs-3">
          <span><b>&nbsp;</b></span>
        </div>
        <div class="col-xs-2">
          <span><b>Minimum</b></span>
        </div>
        <div class="col-xs-2">
          <span><b>Maximum</b></span>
        </div>
        <div class="col-xs-2">
          <span><b>Distance</b></span>
        </div>
        <div class="col-xs-2">
          <span><b>Midpoint</b></span>
        </div>
      </div>
        
        <!-- X Axis -->
      <div class="row form-group text-center" ng-controller="AxisController as vm">
        <div class="col-xs-3">
          <span><b>X Axis</b></span>
        </div>
        <div class="col-xs-2">
          <span><input class="form-control" type="number" value="0" id="x-min" ng-model="vm.min"></span>
        </div>
        <div class="col-xs-2">
          <span><input class="form-control" type="number" value="0" id="x-max" ng-model="vm.max"></span>
        </div>
        <div class="col-xs-2">
          <span>{{ vm.distance() }}</span>
        </div>
        <div class="col-xs-2">
          <span>{{ vm.mid() }}</span>
        </div>
      </div>
           
        <!-- Y Axis -->
      <div class="row form-group text-center" ng-controller="AxisController as vm">
        <div class="col-xs-3 text-center">
          <span><b>Y Axis</b></span>
        </div>
        <div class="col-xs-2">
          <span><input class="form-control" type="number" value="0" id="y-min" ng-model="vm.min"></span>
        </div>
        <div class="col-xs-2">
          <span><input class="form-control" type="number" value="0" id="y-max" ng-model="vm.max"></span>
        </div>
        <div class="col-xs-2">
          <span>{{ vm.distance() }}</span>
        </div>
        <div class="col-xs-2">
          <span>{{ vm.mid() }}</span>
        </div>
      </div>
        
        <!-- Z Axis -->
      <div class="row form-group text-center" ng-controller="AxisController as vm">
        <div class="col-xs-3 text-center">
          <span><b>Z Axis</b></span>
        </div>
        <div class="col-xs-2">
          <span><input class="form-control" type="number" value="0" id="z-min" ng-model="vm.min"></span>
        </div>
        <div class="col-xs-2">
          <span><input class="form-control" type="number" value="0" id="z-max" ng-model="vm.max"></span>
        </div>
        <div class="col-xs-2">
          <span>{{ vm.distance() }}</span>
        </div>
        <div class="col-xs-2">
          <span>{{ vm.mid() }}</span>
        </div>
      </div>
        
      <br>
      
    </div>
  </div>
  
<?php require_once("footer.php"); ?>

<script src="Includes/js/main.js"></script>
</body>
</html>