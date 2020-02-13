<?php

ini_set('display_errors',1);

// データベース接続
$host = 'localhost';
$dbname = 'syllabus';
$dbuser = 'root';
$dbpass = 'wapli';

try {
$dbh = new PDO("mysql:host={$host};dbname={$dbname};charset=utf8mb4", $dbuser,$dbpass, array(PDO::ATTR_EMULATE_PREPARES => false));
} catch (PDOException $e) {
 var_dump($e->getMessage());
 exit;
}
$where = [];
if (isset($_POST['kyouka']) && $_POST['kyouka'] != "") {
    $where[] = " ( kyouka = '".$_POST['kyouka']."' ) ";
}
if (isset($_POST['id']) && $_POST['id'] != "") {
    $where[] = " ( id ='".$_POST['id']."' ) ";
}
if (isset($_POST['kyoushi']) && $_POST['kyoushi'] != "") {
    $where[] = " ( kyoushi = '".$_POST['kyoushi']."' ) ";
}

$sql = 'SELECT * FROM app';

if(count($where) > 0){
  $sql .= " where ".implode(" and ",$where);
}
$sth = ($dbh->prepare($sql));
    $sth -> execute();
$syllabus = array();
while($row = $sth->fetch(PDO::FETCH_ASSOC)){
 $syllabus[]=array(
  'id' =>$row['id'],
  'gakubu'=>$row['gakubu'],
  'kyouka'=>$row['kyouka'],
  'kyoushi'=>$row['kyoushi'],
  'place'=>$row['place'],
  'tani'=>$row['tani']


 );
}

//jsonとして出力
header('Content-type: application/json');
echo json_encode($syllabus,JSON_UNESCAPED_UNICODE);


