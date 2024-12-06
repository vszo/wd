<?php
$data = file_get_contents("php://input");
$js = json_decode($data, true);
$jbxx = "文章ID：".$js["guid"]."\n举报类型：".$js["reportReason"]."\n举报内容：".$js["reportReasonInfo"]."\n举报人UA：".$js["userId"]."\n\n";

$handle = fopen("jb.txt","a+");
$str = fwrite($handle,$jbxx);
fclose($handle);
echo $str;
?>