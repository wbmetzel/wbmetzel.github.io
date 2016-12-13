<?php require_once("header.php"); ?>
 
  <br><br>
  
  <div class="main-wrapper" ng-app="app" >
    <div class="container axes-container" ng-controller="MajorScaleController as vm">
    
      <div class="row text-center">
        <!-- Header -->
        <div class="col-xs-11 h4">
          <span><b>Jam Theory</b></span>
        </div>
      </div>
      
      <div class="center col-xs-8 row">
        <div class="panel panel-default">
          <div class="panel-heading">
            <span class="glyphicon glyphicon-minus">&nbsp;</span>
            <span class="h5"><b>Major Scale</b></span>
          </div>
          <div class="panel-body text-center">
                <fieldset class="col-xs-1">
                  <legend>I</legend>
                  <span class="text-center">{{ vm.scale['tonic']}}</span>
                </fieldset>
                
                <fieldset class="col-xs-1">
                  <legend>ii</legend>
                  <span class="text-center">{{ vm.scale['second'] }}</span>
                </fieldset>
                
                <fieldset class="col-xs-1">
                  <legend>iii</legend>
                  <span class="text-center">{{ vm.scale['third'] }}</span>
                </fieldset>
                
                <fieldset class="col-xs-1">
                  <legend>IV</legend>
                  <span class="text-center">{{ vm.scale['fourth'] }}</span>
                </fieldset>
                
                <fieldset class="col-xs-1">
                  <legend>V</legend>
                  <span class="text-center">{{ vm.scale['fifth'] }}</span>
                </fieldset>
                
                <fieldset class="col-xs-1">
                  <legend>vi</legend>
                  <span class="text-center">{{ vm.scale['sixth'] }}</span>
                </fieldset>
                
                <fieldset class="col-xs-1">
                  <legend>vii</legend>
                  <span class="text-center">{{ vm.scale['seventh'] }}</span>
                </fieldset>

             <!--
            <div class="col-xs-5 sf-div">
              <div class="row form-group text-center">
                <fieldset>
                  <legend>Scaling Factor</legend>
                  <span class="text-center"><b>{{ vm.scalingFactor() }}</b></span>
                </fieldset>
              </div>
            </div> -->
            
          </div>
        </div>
      </div>
      
      

      <div class="row">
      
        <div class="col-xs-3 panel-group">
        
                        
            <div>
              <select ng-model="vm.key" ng-change="vm.generateScale(this.vm.key)">
                <option ng-repeat="note in vm.semitones">{{ note }}</option>
              </select>
            </div>
        
        <!--
          <div class="panel panel-default">
            <div class="panel-heading">
              <span class="glyphicon glyphicon-minus">&nbsp;</span>
              <span class="h5"><b>Display without Sensitivity</b></span>
            </div>
            <div class="panel-body">
              <div class="row form-group text-center">
                <fieldset>
                  <legend>mm</legend>
                  <span class="text-center">{{ vm.dispWOsens_mm() }}</span>
                </fieldset>

                <fieldset>
                  <legend>inches</legend>
                  <span class="text-center">{{ vm.dispWOsens_in() }}</span>
                </fieldset>
              </div>
            </div>
          </div> -->
        </div>
        
      </div>
        
      <br>
    </div>
  </div>
  
<?php require_once("footer.php"); ?>
<script src="Includes/js/JamTheoryController.js"></script>
</body>
</html>