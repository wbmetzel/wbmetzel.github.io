<?php

/****************
* Important!! Don't do this, this is only for temporary demo purposes with a basic user
****************/
define("DB_HOST","localhost");
define("DB_NAME","crm");
define("DB_USER","demo_user");
define("DB_PASS","demo");
/* ********* END BAD PRACTICE *********** */

class Database {
  private $username = DB_USER;
  private $password = DB_PASS;
  private $hostname = DB_HOST;
  private $dbname   = DB_NAME;
  
  private $db;
  private $err;
  private $statement;
  
  
  /*
  * Constructor
  */
  public function __construct() {
    $source = "mysql:host=" .$this->hostname. ";dbname=" .$this->dbname;
    $options = array(
                      PDO::ATTR_PERSISTENT    => true,
                      PDO::ATTR_ERRMODE       => PDO::ERRMODE_EXCEPTION
                    );
    
      // Create class instance
    try {
      $this->db = new PDO($source, $this->username, $this->password, $options);
    }
    catch(PDOException $e) {
      $this->err = $e->getMessage();
    }
  }
  
  
  /*
  * Prepare statement
  */
  public function query($query) {
    $this->statement = ($this->db)->prepare($query);
  }
  
  
  /*
  * Bind Values
  */
  public function bind($param, $value, $type=null) {
    if(is_null($type)) {
      switch (true) {
        case is_int($value):
          $type = PDO::PARAM_INT;
          break;
        case is_bool($value):
          $type = PDO::PARAM_BOOL;
          break;
        case is_null($value):
          $type = PDO::PARAM_NULL;
          break;
        default:
          $type = PDO::PARAM_STR;
      }
    }
    ($this->statement)->bindValue($param, $value, $type);
  }

  
  /*
  * Execute query
  */
  public function execute() {
    return ($this->statement)->execute();
  }
  
  
  /*
  * Return results as associative array
  */
  public function resultSet() {
    $this->execute();
    return ($this->statement)->fetchAll(PDO::FETCH_ASSOC);
  }
  
  
  /*
  * Return single result
  */
  public function resultSingle() {
    $this->execute();
    return ($this->statement)->fetch(PDO::FETCH_ASSOC);
  }
  
  
  /*
  * Return count of rows
  */
  public function numRows() {
    $this->execute();
    return ($this->statement)->rowCount();
  }
  
  
  /*
  * Return id of last insert
  */
  public function lastInsertId() {
    return ($this->db)->lastInsertId();
  }
  
  /*
  * Debug Params dump
  */
  public function dumpParams() {
    return ($this->statement)->debugDumpParams();
  }
  
  
  /*
  * Begin Transaction
  */
  public function beginTrans() {
    return ($this->db)->beginTransaction();
  }
  
  
  /*
  * End Transaction
  */
  public function endTrans() {
    return ($this->db)->commit();
  }
  
  
  /*
  * Cancel Transaction
  */
  public function cancelTrans() {
    return ($this->db)->rollBack();
  }
  
}

?>