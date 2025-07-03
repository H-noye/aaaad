$(function () {

    const tl = gsap.timeline();

    tl
        .from({}, {})
        .from('.intro span', { width: 0, duration: 2 })
        .to('.intro span', { rotate: 90 })
        .to('.intro span', { opacity: 0 })
        .to('.intro em', { opacity: 1, left: 0, width: '100vw' }, '<')
        .to('.intro em', { left: 0, width: '100vw' })
        .from('.intro h2', { y: 100, opacity: 0 })
        .from('.intro strong', { y: 100, opacity: 0 })
        .from('.intro p', { y: 100, opacity: 0 })
        .to('.intro .line', { opacity: 1 })


    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05', 'training', 'profile'],
        fixedElements: '#header, #footer',

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
            } else {
                $('#footer .to_top').addClass('on');
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
});