<?php
$postdata = array(
'var1' => 'value1',
'var2' => 'value2',
);

$opts = array('http' =>
  array(
    'method' => 'GET',
  )
);

$context = stream_context_create($opts);

echo file_get_contents("https://sages.org", 0, $context);
