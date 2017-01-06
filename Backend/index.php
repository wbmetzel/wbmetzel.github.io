<?php
  require_once("database.class.php");
  require_once("global_functions.php");
  
    // Create Instance
  $db = new Database();
  
    // Prepare Statement using placeholders
  //$db->query("INSERT INTO Employees(fname,lname,job) VALUES(:fname,:lname,:job)");
  
    // Bind values to be inserted to placeholders
  //$db->bind(":fname", "");
  //$db->bind(":lname", "");
  //$db->bind(":job", "");
  
  //$db->execute();
  //echo $db->lastInsertId();
  // =========================
  
  $db->query("SELECT * FROM Employees");
  $data = $db->resultSet();
  $numRecords = $db->numRows();

  //arr_dump($data);

?>

<html lang="en-US">

<head>
  <title>Demo</title>
</head>

<body ng-app="app">

  <div>
    <table>
      <tr>
        <th>Employee ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Job</th>
      </tr>
      
<?php
  $employee = "";

  foreach($data as $record) {
    $employee = "<tr>";
    foreach($record as $key=>$val) {
      $employee .= "<td>$val</td>";
    }
    $employee .= "</tr>";
    print($employee);
  }
?>

    </table>
    <p>
    Number of records: <?=$numRecords?>
    </p>
  </div>

</body>
</html> 