function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6PxmIMuu2i1":
        Script1();
        break;
      case "5bm2thFsYqx":
        Script2();
        break;
      case "5rKne0sDCHj":
        Script3();
        break;
      case "64sAvR6ZI73":
        Script4();
        break;
      case "5lop280p4sJ":
        Script5();
        break;
      case "6NZeJtQAFRL":
        Script6();
        break;
      case "5yflPSnQmax":
        Script7();
        break;
      case "5ZVZc9thPSv":
        Script8();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgm');
audio.src="bgm_re4loop_long.mp3";
audio.load();
audio.play();
audio.volume=0.1;

}

function Script2()
{
  var audio = document.getElementById('bgm');
audio.play();
}

function Script3()
{
  var audio = document.getElementById('bgm');
audio.pause();
}

function Script4()
{
  var audio = document.getElementById('bgm');
audio.volume=0.1;
}

function Script5()
{
  var audio = document.getElementById('bgm');
audio.volume=1;
}

function Script6()
{
  var audio = document.getElementById('bgm');
audio.volume=0;
}

function Script7()
{
  var audio = document.getElementById('bgm');
audio.src="bgm_re4loop_long.mp3";
audio.load();
audio.play();
audio.volume=0.1;
}

function Script8()
{
  var audio = document.getElementById('bgm');
audio.currentTime=122;
audio.volume=1;
audio.play;
}

