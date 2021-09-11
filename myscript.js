function play_se()
{
    var warning = new Audio('warning.mp3');
    var voice = new Audio('voice.mp3');
    warning.play();
    voice.play();
    navigator.vibrate([200,100,200,100,200,100,200]);
}

$(function(){
    // ブラウザバック禁止
    history.pushState(null, null, null);
    $(window).on("popstate", function(e){
      if (!e.originalEvent.state){
        play_se();
        history.pushState(null, null, null);
        return;
      }
    });

    // モーダル初期化
    $('.modal').modal({dismissible: false});
    $('#alert').modal('open');
    $('#close').click(function(){
      $('#alert').modal('close');
      play_se();
    });

    var device = navigator.userAgent.match(/Android|iPhone|iPad/);
    if (device == null){
      device = 'device';
    }
    $('#device').text(device);

    var time = 300;
    setInterval(function(){
      time--;
      $('#timer').text(time);
    }, 1000);
  });