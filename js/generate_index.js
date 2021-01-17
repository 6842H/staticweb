
function generate_mp(data){
    $('#mp_name').text(data.name);
    $('#mp_holic').text(data.holic);
    $('#mp_phone').text(data.phone);
    $('#mp_email').text(data.email);
}

function generate_viny(data){
    $('.viny').find('#song_img').attr("src",data.img);
    $('.viny').find('#song_url').attr("src",data.path);
    $('.viny').find('#song_name').text(data.name);
    $('.viny').find('#song_album').text(data.album);
    $('.viny').find('#song_singer').text(data.singer);
    $('.viny').find('#song_agree').text(data.agree);

}

function generate_arrow_boxs(items){
    var first_arrow_box = $('.bloglist').children(":first");
    console.debug(first_arrow_box.html());
    for(var i in items){
        var item = items[i];
        var arrow_box=first_arrow_box.clone();
        $(arrow_box).show();
        //console.debug(arrow_box.html());
        $(arrow_box).find('h2.title').text(i+item.title);
        $(arrow_box).find('a.arrow_box_url').attr("href",item.path);
        $(arrow_box).find('img.arrow_box_img').attr("src",item.img);
        $(arrow_box).find('p.content').attr("src",item.content);
        $(arrow_box).find('li.likes').text(item.agree);
        $(arrow_box).find('li.comments').text(item.comments);
        $(arrow_box).find('li.icon-time').text(item.create_time);
        //$('.bloglist').append(arrow_box);
        $('.load_more').before(arrow_box);
        console.debug('appended', i);
    }
}


function generate_hot_click(items){
    //<li><span><strong>1</strong></span><a href="/">有一种思念，是淡淡的幸福,一个心情一行文字</a></li>
    var tp = $('#hot_click').children(":first");
    console.debug(tp.html());
    for(var i in items){
        var item = items[i];
        var instance = (i == 0) ? tp : tp.clone();
        $(instance).show();
        $(instance).find('strong').text(item.index);
        $(instance).find('a').attr("href",item.path);
        $(instance).find('a').text(item.title);
        $('#hot_click').append(instance);
        console.debug('appended', i);
    }
}
function generate_last_pub(items){
    // <li><span>2020-12-12</span><a href="/">有一种思念，是淡淡的幸福,一个心情一行文字</a></li>
    var tp = $('#last_pub').children(":first");
    console.debug(tp.html());
    for(var i in items){
        var item = items[i];
        var instance = (i == 0) ? tp : tp.clone();
        $(instance).show();
        $(instance).find('span').text(item.create_time);
        $(instance).find('a').attr("href",item.path);
        $(instance).find('a').text(item.title);
        $('#last_pub').append(instance);
        console.debug('appended', i);
    }
}

function set_default_img(src="./images/artwork.png"){
    $('img').error(function () {$(this).attr("src", src);});
}

function scroll_handler(){
    $('.bloglist').bind("scroll", function () {
        var region_top_to_top =0;
        var region_top_to_top =0;
        var a = $('.bloglist').scrollTop();
        var b = $('.bloglist').height();
        console.debug('innerHeight', $('.bloglist').innerHeight());
        console.debug('outerHeight', $('.bloglist').outerHeight());
        console.debug('scrollTop', $('.bloglist').scrollTop());
        console.debug('offset', $('.bloglist').offset());

    });
}


function t_init() {
    set_default_img();
    generate_mp({name: 'gyn', holic: '爬山', phone: '123456', email: 'guoyn0@qq.com'});
    generate_arrow_boxs([
        {title: 'title', path: './path', img: './images/s2.jpg', content: 'content', agree:12, comments: 12, create_time: '2020-12-12'},
        {title: 'title', path: './path', img: './images/s2.jpg', content: 'content', agree:12, comments: 12, create_time: '2020-12-12'},
        {title: 'title', path: './path', img: './images/s2.jpg', content: 'content', agree:12, comments: 12, create_time: '2020-12-12'},
        {title: 'title', path: './path', img: './images/s2.jpg', content: 'content', agree:12, comments: 12, create_time: '2020-12-12'},
       ]);
    //scroll_handler();
    generate_viny({img:'./images/artwork.png', name:'name', album:'album', singer: 'singer', path: '/', agree: '0'});
    generate_hot_click([{index:1, path:'/', title:'title'},{index:2, path:'/', title:'title'},{index:3, path:'/', title:'title'},{index:4, path:'/', title:'title'}]);
    generate_last_pub([{create_time:'2020-12-12', path:'/', title:'title'},{create_time:'2020-12-12', path:'/', title:'title'},{create_time:'2020-12-12', path:'/', title:'title'},{create_time:'2020-12-12', path:'/', title:'title'}]);
}



t_init();
