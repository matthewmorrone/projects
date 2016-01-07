<?

if ($_POST)
{
	extract($_POST);

	switch($mode)
	{
		case "agent":
		?>
			<style>
			pre
			{
				font-family: "Times New Roman";
			}
			</style>
			<pre>
			<?
			$server = $_SERVER;
			ksort($server);
			foreach($server as $key=>$value)
			{
				$server[$key] = trim(strip_tags($value));
			}
			print_r($server);
			?>
			</pre>
		<?
		break;

		case "proxy":
			echo file_get_contents($url);
		break;
	}




}
