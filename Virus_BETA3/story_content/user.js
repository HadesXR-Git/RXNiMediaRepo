function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5a5y95XvXY2":
        Script1();
        break;
      case "5h6tsTu9bP3":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgm');
audio.pause();
audio.currentTime = 0;
}

function Script2()
{
  var audio = document.getElementById('bgm');
audio.src="bgm_re4loop_long.mp3";
audio.load();
audio.play();
audio.volume=0.1;

}

