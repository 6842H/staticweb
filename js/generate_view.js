
function change_bgc(o) {
    console.debug('this', o);
    console.debug('$(o).css(\'background\')', $(o).css('background'));
    $('#index_view').css('background', $(o).css('background'));
}


function generate_index_view(data){
    $('#index_view').find('#blog_title').text(data.title);
    $('#index_view').find('#blog_create_time').text(data.create_time);
    $('#index_view').find('#blog_author').text(data.author);
    $('#index_view').find('#blog_watched').text(data.watched);
    $('#index_view').find('#blog_content').html(data.content);
}

function generate_visitors(items){
    var tp = $('#visitors').children(":first");
    console.debug(tp.html());
    for(var i in items){
        var item = items[i];
        var instance = (i == 0) ? tp : tp.clone();
        $(instance).show();
        $(instance).find('time').text(item.time);
        $(instance).find('span').text(item.user);
        $(instance).find('p').text(item.comment);
        $('#visitors').append(instance);
        console.debug('appended', i);
    }
}

function generate_related_article(items){
    //<li><span><strong>1</strong></span><a href="/">有一种思念，是淡淡的幸福,一个心情一行文字</a></li>
    var tp = $('#related_article').children(":first");
    console.debug(tp.html());
    for(var i in items){
        var item = items[i];
        var instance = (i == 0) ? tp : tp.clone();
        $(instance).show();
        $(instance).find('img').attr("href",item.img);
        $(instance).find('a').attr("href",item.path);
        $(instance).find('.related_article_title').text(item.title);
        $(instance).find('.related_article_watched').text(item.watched);
        $('#related_article').append(instance);
        console.debug('appended', i);
    }
}
function set_default_img(src="./images/artwork.png"){
    $('img').error(function () {$(this).attr("src", src);});
}

function reply(o) {
    $(".reply_textarea").remove();
    $(o).parent().append("11111");

}

function t_init() {
    set_default_img();
    generate_index_view({title: 'title', author: 'author', watched: 0, create_time:'2020-12-12', content: '<p> 一段一个p，一张图片一个p</p><p><img src="images/post1.jpg"></p>'});
    generate_visitors([{user:'aaa', time:'2020-12-12 12:12:12', comment:'我手机里面也有这样一个号码存在我手机里面也有这样一个号码存在我手机里面也有这样一个号码存在我手机里面也有这样一个号码存在'},{user:'bbb', time:'2020-12-12 12:12:12', comment:'我手机里面也有这样一个号码存在'},{user:'aaa', time:'2020-12-12 12:12:12', comment:'我手机里面也有这样一个号码存在'},{user:'bbb', time:'2020-12-12 12:12:12', comment:'我手机里面也有这样一个号码存在'}]);
    generate_related_article([{img: './images/artwork.png', title: 'title', path: 'path', watched: '0'}, {img: './images/artwork.png', title: 'title', path: 'path', watched: '0'}, {img: './images/artwork.png', title: 'title', path: 'path', watched: '0'}]);
    reply();
}




t_init();
