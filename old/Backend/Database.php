<?php

class Database extends PDO {
  
  private $username;
  private $password;
  private $schema;
  private $port;
  private $driver;
  private $hostname;
  
  
  
  public function __construct($file = 'config.ini') {
    if(!$config = parse_ini_file($file,TRUE)) throw new exception('Cannot access configuration file.');
    
    $this->username = $config['database']['username'];
    $this->password = $config['database']['password'];
    $this->hostname = $config['database']['hostname'];
    $this->driver = $config['database']['driver'];
    $this->port = !empty($config['database']['port']) ? $config['database']['port'] : "";
    $this->schema = $config['database']['schema'];
    
    $dns = $this->driver. ":host=" .$this->hostname;
    $dns .= ( !empty($this->port) ?  ";port=" .$this->port : "");
    $dns .= ";dbname=" .$this->schema;
    
    $opt = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ];
    
    parent::__construct($dns,$this->username,$this->password, $opt);
  }
    
  public function print() {
    var_dump($this);
  }
  
}
