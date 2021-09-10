function myFunction()
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", "https://pastebin.com/api/api_post.php", true );
    xmlHttp.send("api_dev_key=q7ugdk2k4bVSovGq3l2_dOhXgNkN3HgU&api_paste_code=hello12345&api_option=paste");
    return xmlHttp.responseText;
}
