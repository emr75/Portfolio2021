<?php
//File created by Wafa, Amanda, Elle, Barbara 03/2021
namespace Codesses\php\Models
{

use PDOException;

    class DatabaseTwo {

        // These variables must be set to the specific database connection information.
        private static $dbName = "#########";
        private static $host = "#########";
        private static $userName = "#########";
        private static $password = "#########";

        // Private variables to interact with the database.
        private static $dataSourceName;
        private static $dbconnection;
    
        // Static class.
        private function __construct()
        {        
        }
        
        // Construct the PDO if required, then return PDO.
        public static function getDb()
        {
            if( self::$dbconnection == null ) {
                self::$dataSourceName  = "mysql:host=" .self::$host . ";dbname=" . self::$dbName;
    
                try {
                // Establish the connection.
                self::$dbconnection = new \PDO( self::$dataSourceName, self::$userName, self::$password );

                // Set some connection attributes.
                self::$dbconnection->setAttribute( \PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION );

                } catch( PDOException $e ) {
                    echo $e->getMessage()();
                    exit();
                }

            }
            return self::$dbconnection;
        }
    }

}
