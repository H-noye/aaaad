$(function () {

    let tl;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
        tl = gsap.timeline();

        tl
            // .from('.intro .open_line', { width: 0, duration: 1.5 })
            // .to('.intro .open_line', { rotate: 90 })
            // .to('.intro .open_line', { opacity: 0 })
            // .to('.intro .open_cover', { opacity: 1, left: 0, width: '100%', background: '#000', duration: 1 }, '<')
            .to('.intro h2', { opacity: 1 })
            .from('.intro h2 em', { y: 32 }, '-=.2')
            .to('.intro .simple em', { y: 0 })
            .to('.intro .sharp em', { y: 0 }, '-=.2')
            .to('.intro .solid em', { y: 0 }, '-=.2')
            .from('.intro strong', { scale: 8, ease: "power3.out", duration: 1 })
            .to('.intro p', { opacity: 1 })
            .to('.intro p em', { y: 0, scale: 1, opacity: 1 }, '<')
            .to('.intro h3', { opacity: 1 }, '-=.2')
            .from('.intro h3 em', { y: 32 }, '-=.2')
            .to('.intro .txt', { rotate: -55, ease: "power3.inOut", duration: 1.5 }, '<')
            .to('.intro .next em', { x: '100%', repeat: -1, duration: 10, yoyo: 'true', ease: "none" }, '-=.1')
            .to('.intro .prev em', { x: '-100%', repeat: -1, duration: 10, yoyo: 'true', ease: "none" }, '<')
            .to('.intro .line', { opacity: 1 }, '<')
    });

    mm.add("(max-width: 768px)", () => {
        tl = gsap.timeline();

        tl
            .from({}, {})
            // .from('.intro .open_line', { width: 0, duration: 1.5 })
            // .to('.intro .open_line', { opacity: 0 })
            // .to('.intro .open_cover', { opacity: 1, top: 0, height: '100%', background: '#000', duration: 1 }, '<')
            .to('.intro h2', { opacity: 1 })
            // .from('.intro h2 em', { y: 32 })
            .to('.intro .simple em', { y: 0 })
            .to('.intro .sharp em', { y: 0 }, '-=.2')
            .to('.intro .solid em', { y: 0 }, '-=.2')
            // .from('.intro strong', { scale: 8, ease: "power3.out", duration: 1 })
            .to('.intro p', { opacity: 1 })
            .to('.intro p em', { y: 0, scale: 1, opacity: 1 }, '<')
            // .from('.intro h3 em', { y: 56 }, '-=.2')
            .to('.intro h3', { opacity: 1 }, '-=.2')
            .to('.intro .txt', { rotate: -55, ease: "power3.inOut", duration: 1.5 }, '<')
            .to('.intro .next em', { x: '100%', repeat: -1, duration: 10, yoyo: 'true', ease: "none" }, '-=.1')
            .to('.intro .prev em', { x: '-100%', repeat: -1, duration: 10, yoyo: 'true', ease: "none" }, '<')
            .to('.intro .line', { opacity: 1 }, '<')
    });



    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05', 'training', 'profile'],
        fixedElements: '#header, #footer, #cursor',
        scrollingSpeed: 800,

        onLeave: function (_, idx, d) {
            $('#header .gnb>ul>li').removeClass('on');
            $('#header .gnb>ul>li').eq(idx - 1).addClass('on')

            //첫화면에 왔을 때 애니메이션 다시 재생하기

            if (idx == 1) {
                tl.restart();
            }
        },

        afterLoad: function (_, idx) {
            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');

            if (idx == 1) {
                $('#footer .to_top').removeClass('on');
                $('#header .cover_btn').addClass('off');
            } else {
                $('#footer .to_top').addClass('on');
                $('#header .cover_btn').removeClass('off');
            }
        },

    });

    $('#header .cover_btn').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');
    })

    $('#header .cover ul>li>a').on('click', function () {
        $('#header .cover_btn').removeClass('on');
        $('#header .cover').removeClass('on');
    })

    $('#header .cover').on('wheel', function (e) {
        e.stopPropagation();
    })

    const training_slide = new Swiper('.training_slide', {
        slidesPerView: 1,
        spaceBetween: 16,
        navigation: {
            nextEl: '.training .arrows .next',
            prevEl: '.training .arrows .prev',
        },
        breakpoints: {
            1200: {
                slidesPerView: 6,
            },
        },
    });

    const $cursor = $("#cursor");
    let mouse = { x: -100, y: -100 }, pos = { x: 0, y: 0 }, speed = 0.1;

    $(window).on("mousemove", e => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    (function loop() {
        pos.x += (mouse.x - pos.x) * speed;
        pos.y += (mouse.y - pos.y) * speed;
        $cursor.css("transform", `translate3d(${pos.x}px, ${pos.y}px, 0)`);
        requestAnimationFrame(loop);
    })();

    $(".section img").hover(function () {
        $("#cursor .cursor__inner").addClass('on');
    }, function () {
        $("#cursor .cursor__inner").removeClass('on');
    });
});