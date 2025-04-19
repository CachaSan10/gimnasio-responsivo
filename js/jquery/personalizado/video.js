$(document).ready(function() {
    // ID del video de YouTube que quieres usar
    var videoId = '-uY51GY5tT8';

    var startTime = 0; // Comienza al comienzo (0 segundos)
    var endTime = 50;   // Termina en el segundo 50 (50 segundos)
    // Función para cargar la API de YouTube y el reproductor
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    window.onYouTubeIframeAPIReady = function() { // Usamos window.onYouTubeIframeAPIReady
        player = new YT.Player('video-background', {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                'playsinline': 1,
                'autoplay': 1,
                'loop': 1,
                'controls': 0,
                'showinfo': 0,
                'rel': 0,
                'modestbranding': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

        // Animación del overlay y el contenido AQUÍ, después de inicializar el reproductor
        $(".hero::before").animate({ opacity: 1 }, 1000);
        $(".hero-content").delay(500).animate({ opacity: 1, transform: 'translate(-50%, -50%)' }, 1000);
    };

    function onPlayerReady(event) {
        event.target.mute();
    }

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING) {
          // Verificar si hemos alcanzado el tiempo de finalización
          if (player.getCurrentTime() >= endTime) {
            player.seekTo(startTime); // Volver al inicio
            player.playVideo();
          }
        } else if (event.data == YT.PlayerState.ENDED) {
          player.seekTo(startTime); // Volver al inicio si el video termina completamente
          player.playVideo();
        }
      }
});