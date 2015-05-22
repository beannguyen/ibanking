<?php
require_once( 'database.class.php' );
require_once('../config.php');

class Connect {

    private $error;
    private $db;

    /**
     * Get database object
     */
    public function dbObj()
    {
        $this->db = new Database(DB_HOST, DB_NAME, DB_USER, DB_PASS);
        return $this->db;
    }
}