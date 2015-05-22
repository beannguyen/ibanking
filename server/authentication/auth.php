<?php

/**
*  Create by BeanNguyen
*/
require('../libraries/connects.class.php');
$data = file_get_contents("php://input");
$objData = json_decode($data);
$db = new Connect();
$db = $db->dbObj();

if ($objData->action === 'login') {
	login($objData);
}

function login($objData)
{
	global $db;

	$sql = "SELECT * FROM users WHERE name = '". $objData->username ."' AND password = '". md5($objData->password) ."'";
	$query = $db->query($sql);
	var_dump($db->fetch($query));
}