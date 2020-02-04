<?php

ini_set('display_errors',1);

// データベース接続
$host = 'localhost';
$dbname = 'syllabus';
$dbuser = 'root';
$dbpass = 'root';

try {
$dbh = new PDO("mysql:host={$host};dbname={$dbname};charset=utf8mb4", $dbuser,$dbpass, array(PDO::ATTR_EMULATE_PREPARES => false));
} catch (PDOException $e) {
 var_dump($e->getMessage());
 exit;
}
if(isset($_POST['kyouka']) && isset($_POST['id'])){
    $kyouka = $_POST['kyouka']; //講義名を取得
    $id = $_POST['id'];//科目コードを取得
    
    $sql = "SELECT id, gakubu, kyouka, kyoushi, place, tani
    FROM info
    WHERE kyouka = :kyouka
    AND id = :id";
     $sth = ($dbh->prepare($sql));
     $sth -> bindValue(':kyouka', $kyouka, PDO::PARAM_STR);
    $sth -> bindValue(':id', $id, PDO::PARAM_STR);
    $sth -> execute();
    
   //あらかじめ配列を生成しておき、while文で回します。
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


}
elseif(isset($_POST['kyouka'])&&is_null($_POST['id'])){
    $kyouka = $_POST['kyouka']; //講義名を取得
    $sql = "SELECT id, gakubu, kyouka, kyoushi, place, tani
    FROM info
    WHERE kyouka = :kyouka";
     $sth = ($dbh->prepare($sql));
     $sth -> bindValue(':kyouka', $kyouka, PDO::PARAM_STR);
    $sth -> execute();
    
   //あらかじめ配列を生成しておき、while文で回します。
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

}else if(isset($_POST['id'])&&$_POST['kyouka']==true){ 
    $id = $_POST['id']; //科目コードを取得
    $sql = "SELECT id, gakubu, kyouka, kyoushi, place, tani
    FROM info
    WHERE id = :id";
     $sth = ($dbh->prepare($sql));
     $sth -> bindValue(':id', $id, PDO::PARAM_STR);
    $sth -> execute();
    
   //あらかじめ配列を生成しておき、while文で回します。
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
}
else{
    var_dump([]);
}