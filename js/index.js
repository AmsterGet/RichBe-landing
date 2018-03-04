// var phone_format;
// var sss;
// var eyescript;

function popup(id, form, h1, h2, btn) {
    $('.popup_overlay').show();
    $('#'+id).addClass('activePopup');
    if(id == 'request') {
        var def_h1 = 'Оставить заявку';
        var def_h2 = 'Заполните форму,<br>и&nbsp;мы&nbsp;обязательно свяжемся с&nbsp;вами!';
        var def_btn = 'Оставить заявку';
    }
    if(h1 != '') {$('#'+id).find('.popup_h1').html(h1);} else {$('#'+id).find('.modal_title').html(def_h1);}
    if(h2 != '') {$('#'+id).find('.popup_h2').html(h2);} else {$('#'+id).find('.modal_text').html(def_h2);}
    if(btn != '') {$('#'+id).find('.button').html(btn);} else {$('#'+id).find('.button').html(def_btn);}
    $('.activePopup').show();
    var m_top = -$('.activePopup').outerHeight() / 2 + 'px';
    var m_left = -$('.activePopup').outerWidth() / 2 + 'px';
    $('.activePopup').css({
        'margin-top': m_top,
        'margin-left': m_left
    })
    $('.formname').attr("value", form);
}

function popup_out() {
    $('.popup_overlay').hide();
    $('.popup').hide();
    $('.popup').removeClass('activePopup');
    $('body').find('label').removeClass('red');
    $('.video_inner').html('');
}