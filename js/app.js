document.addEventListener("DOMContentLoaded", (function() {
    const e = document.querySelector(".lazyHTML");
    e && (e.innerHTML = `
        <div class="teacher-card">
            <h3 class="teacher-card__title">Ustozingiz kim?</h3>

            <h4 class="teacher-card__name">Dilshoda Kurbonova</h4>
            <ul class="features-list">
                <li class="features-list__item">
                    <div class="feature">
                        <span class="feature__icon">
                            <img src="./images/icon1.svg" alt="" loading="lazy" decoding="async" width="39" height="39">
                        </span>
                        <p class="feature__text">
                            <span class="feature__accent">5 yillik tajribaga</span> ega oliy ma’lumotli rus tili
                            o’qituvchisi
                        </p>
                    </div>
                </li>

                <li class="features-list__item">
                    <div class="feature">
                        <span class="feature__icon">
                            <img src="./images/icon2.svg" alt="" loading="lazy" decoding="async" width="39" height="39">
                        </span>
                        <p class="feature__text">
                            4500+ o'quvchilar <span class="feature__accent">40 kunda rus tilida erkin gapirolish
                                darajasiga</span> olib chiqqan
                        </p>
                    </div>
                </li>

                <li class="features-list__item">
                    <div class="feature">
                        <span class="feature__icon">
                            <img src="./images/icon3.svg" alt="" loading="lazy" decoding="async" width="39" height="39">
                        </span>
                        <p class="feature__text">
                            Учебник по русскому языку», Разговорник, Говори без акцента,
                            Этикет общения, Тесты, Разговорная практика, Рабочая тетрадь, Киноперевод, “Падежи и глаголы
                            в таблицах” kitoblar muallifi
                        </p>
                    </div>
                </li>
            </ul>
        </div>

        <div style="padding: 0 10px;">

            <button class="custom__btn registerBtn teacher-card__btn">
                <img src="./images/click.svg" alt="click" loading="lazy" decoding="async" width="19" height="26">
                Ro’yxatdan o’tish
            </button>

            <div class="compare">
                <h2 class="compare__title">
                    Kursda nimalarni <br> o’rganasiz?
                </h2>

                <div class="compare__content">
                    <div class="compare-card">
                        <img class="compare-card__image" src="./images/before.avif" alt="oldingi holatingiz"
                            loading="lazy" decoding="async" width="322" height="192">

                        <h3 class="compare-card__heading">oldingi siz:</h3>

                        <ul class="problem-list">
                            <li class="problem-list__item">
                                <span class="problem-list__number">1.</span>
                                YouTubeda darslar ko'rib, <br> rus tilini
                                <span class="problem-list__highlight">o'rgana olmagansiz</span>
                            </li>
                            <li class="problem-list__item">
                                <span class="problem-list__number">2.</span>
                                Rus tilida gapirish boshlasangiz, <br>
                                <span class="problem-list__highlight">duduqlanib, tutilib</span> qolasiz
                            </li>
                            <li class="problem-list__item">
                                <span class="problem-list__number">3.</span>
                                Erkin rus tilida gapira olmaganingiz uchun o'zingizni
                                <span class="problem-list__highlight">kamsitilgandek his qilasiz</span>
                            </li>
                            <li class="problem-list__item">
                                <span class="problem-list__number">4.</span>
                                So'z <span class="problem-list__highlight">yodlaysiz ammo</span>
                                razgovorda <br> ularni to'g'ri ishlatolmaysiz
                            </li>
                            <li class="problem-list__item">
                                <span class="problem-list__number">5.</span>
                                Bepul darslarda qatnashib, <br>
                                <span class="problem-list__highlight">sezilarli natija</span> ko'rgamansiz
                            </li>
                        </ul>
                    </div>

                    <div class="compare-card">
                        <img class="compare-card__image" src="./images/after.avif" alt="oldingi holatingiz"
                            loading="lazy" decoding="async" width="322" height="192">

                        <h3 class="compare-card__heading">kursimdan keyingi siz:</h3>

                        <ul class="problem-list">
                            <li class="problem-list__item">
                                <span class="problem-list__number">1.</span> Ko'chada, <span
                                    class="problem-list__highlight">ishda, o'qishda har qanday <br> joyda</span> bemalol
                                rus tilida suhbatlasha olasiz <br>
                            </li>
                            <li class="problem-list__item">
                                <span class="problem-list__number">2.</span> <span
                                    class="problem-list__highlight">Duduqlanish, to'xtatishlarsiz</span> razgovor <br>
                                qila olasiz
                            </li>
                            <li class="problem-list__item">
                                <span class="problem-list__number">3.</span> O'zingiz xohlagan joyga <span
                                    class="problem-list__highlight">ishga kirasiz,</span> <br> daromadingiz oshadi
                            </li>
                            <li class="problem-list__item">
                                <span class="problem-list__number">4.</span> Boshqa YouTubeda darslar qidirib <br>
                                o'tirmaysiz, chunki endi <span class="problem-list__highlight">rus tilida bemalol <br>
                                    razgovor</span> qilasiz ☺️⚡
                            </li>
                        </ul>
                    </div>
                </div>
                <button class="custom__btn registerBtn compare__btn">
                    <img src="./images/click.svg" alt="click" loading="lazy" decoding="async" width="19" height="26">
                    Ro’yxatdan o’tish
                </button>
            </div>

            <div class="student">
                <h2 class="student__title">o’quvchilarim natijalari</h2>

                <div class="student__items">
                    <div class="testimonial">
                        <div class="video-player" data-video-player>
                            <button class="video-player__play-overlay" type="button" aria-label="Videoni boshlash">
                                <wistia-player media-id="d9d4d85ccn" aspect="1.0"></wistia-player>
                            </button>
                        </div>

                        <div class="testimonial__caption">
                            <p class="testimonial__text">
                                Rus tilini bilish darajam kundan-kunga oshmoqda
                            </p>
                        </div>
                    </div>

                    <div class="testimonial">
                        <div class="video-player" data-video-player>
                            <button class="video-player__play-overlay" type="button" aria-label="Videoni boshlash">
                                <wistia-player media-id="xencoja7yr" aspect="1.0"></wistia-player>
                            </button>
                        </div>

                        <div class="testimonial__caption">
                            <p class="testimonial__text">
                                Rus tilini bilish darajam kundan-kunga oshmoqda
                            </p>
                        </div>
                    </div>

                    <div class="testimonial">
                        <div class="video-player" data-video-player>
                            <button class="video-player__play-overlay" type="button" aria-label="Videoni boshlash">
                                <img src="./images/video/play-black.svg" alt="" loading="lazy" decoding="async"
                                    width="42" height="42">
                            </button>
                        </div>

                        <div class="testimonial__caption">
                            <p class="testimonial__text">
                                Rus tilini bilish darajam kundan-kunga oshmoqda
                            </p>
                        </div>
                    </div>
                </div>
                <button class="custom__btn teacher-card__btn registerBtn">
                    <img src="./images/click.svg" alt="click" loading="lazy" decoding="async" width="19" height="26">
                    Ro’yxatdan o’tish
                </button>
            </div>


            <div class=""
                style="margin: 0 auto; display: flex; padding-bottom: 25px; flex-direction: column; align-items: center; justify-content: center; gap: 40px;">
                <wistia-player style="max-width: 308px; width: 100%; height: 462px; border-radius: 30px;"
                    media-id="4ru41u7trz" aspect="1.7777777777777777"></wistia-player>
                <wistia-player style="max-width: 308px; width: 100%; height: 462px; border-radius: 30px;"
                    media-id="p9fyedn03j" aspect="1.7777777777777777"></wistia-player>
                <wistia-player style="max-width: 308px; width: 100%; height: 462px; border-radius: 30px;"
                    media-id="nbx5uegppu" aspect="0.5333333333333333"></wistia-player>
            </div>

            <button class="custom__btn teacher-card__btn registerBtn" style="margin-bottom: 38px;">
                <img src="./images/click.svg" alt="click" loading="lazy" decoding="async" width="19" height="26">
                Ro’yxatdan o’tish
            </button>
        </div>`)
}
))