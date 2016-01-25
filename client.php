$postdata = array(
‘var1’ => ‘value1’,
‘var2’ => ‘value2’,
);

$opts = array(‘http’ =>
array(
‘method’ => ‘POST’,
‘header’ => ‘Content-type: application/json’,
‘content’ => http_build_query($postdata, ”, ‘&’),
‘timeout’ => 5,
)
);

$context = stream_context_create($opts);

echo file_get_contents(“http://example.com”, 0, $context);
