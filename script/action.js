let i = 0

setInterval(function(){
    i++

    if(i >= 3){
        i = 0
    }
    $('.slide li').fadeOut()
    $('.slide li').eq(i).fadeIn()
}, 2000)


//공지사항과 갤러리
$('.title_box h2').eq(1).click(function(){
    $('.title_box h2').removeClass('on')
    $('.title_box h2').eq(1).addClass('on')

    $('.notice_box').hide();
    $('.gallery_box').show();
})
$('.title_box h2').eq(0).click(function(){
    $('.title_box h2').removeClass('on')
    $('.title_box h2').eq(0).addClass('on')

    $('.notice_box').show();
    $('.gallery_box').hide();
});



//팝업
$('.notice_box li').eq(0).click(function(){
    $('.popup').show();
})
$('.popup a').click(function(){
    $('.popup').hide();
})