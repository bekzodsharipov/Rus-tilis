document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.webinar__video-wrapper');
    const video = document.querySelector('.webinar__video');
    const playBtn = document.querySelector('.webinar__play-btn');

    if (!video || !playBtn || !wrapper) return;

    playBtn.addEventListener('click', () => {
        video.play()
            .then(() => {
                wrapper.classList.add('playing');
            })
            .catch(err => {
                console.log("Play error:", err);
            });
    });

    video.addEventListener('pause', () => {
        wrapper.classList.remove('playing');
    });

    video.addEventListener('ended', () => {
        wrapper.classList.remove('playing');
    });

    wrapper.addEventListener('click', (e) => {
        if (e.target.closest('.webinar__play-btn')) return;

        if (video.paused || video.ended) {
            video.play()
                .then(() => {
                    wrapper.classList.add('playing');
                })
                .catch(err => console.log(err));
        } else {
            video.pause();
        }
    });
});


let activeVideo = null;

document.querySelectorAll('[data-video-player]').forEach((player) => {
    const video = player.querySelector('.video-player__video');
    const overlay = player.querySelector('.video-player__play-overlay');

    const setPlayingUI = () => {
        player.classList.toggle('playing', !video.paused && !video.ended);
    };

    const pauseThis = () => {
        video.pause();
        setPlayingUI();
    };

    const playThis = async () => {
        if (activeVideo && activeVideo !== video) {
            activeVideo.pause();
            activeVideo.closest('[data-video-player]')?.classList.remove('playing');
        }

        try {
            await video.play();
            activeVideo = video;
        } catch (e) {
            console.log('Play blocked:', e);
        }
        setPlayingUI();
    };

    const togglePlay = async () => {
        if (video.paused) await playThis();
        else {
            pauseThis();
            if (activeVideo === video) activeVideo = null;
        }
    };

    overlay.addEventListener('click', (e) => {
        e.preventDefault();
        togglePlay();
    });

    video.addEventListener('click', (e) => {
        e.preventDefault();
        togglePlay();
    });

    video.addEventListener('play', () => {
        if (activeVideo && activeVideo !== video) {
            activeVideo.pause();
            activeVideo.closest('[data-video-player]')?.classList.remove('playing');
        }
        activeVideo = video;
        setPlayingUI();
    });

    video.addEventListener('pause', () => {
        if (activeVideo === video) activeVideo = null;
        setPlayingUI();
    });

    video.addEventListener('ended', () => {
        if (activeVideo === video) activeVideo = null;
        setPlayingUI();
    });

    setPlayingUI();
});