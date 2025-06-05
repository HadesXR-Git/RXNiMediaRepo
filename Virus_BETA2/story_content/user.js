function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ecn8eX20iw":
        Script1();
        break;
      case "6Wuj7zQh0H1":
        Script2();
        break;
  }
}

function Script1()
{
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

