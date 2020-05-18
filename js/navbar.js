var nav ='<nav class="navbar navbar-expand-md sticky-top navbar-dark">\
<!--logo-->\
<a class="navbar-brand " href="#">\
    <img src="images/logo直向.png" style="width:80px;">\
</a>\
<!--漢堡選單-->\
<button class="navbar-toggler" type="button" data-toggle="collapse"\
        data-target="#collapsibleNavbar">\
    <span class="navbar-toggler-icon"></span>\
</button>\
<div class="collapse navbar-collapse" id="collapsibleNavbar">\
    <ul class="navbar-nav mr-auto mt-lg-0">\
        <li class="nav-item">\
            <a class="nav-link text-white" href="divinity.html">首 頁</a>\
        </li>\
        <li class="nav-item">\
            <a class="nav-link text-white" href="tab.html">角色介紹</a>\
        </li>\
        <li class="nav-item">\
            <a class="nav-link text-white" href="settings.html">遊戲設定</a>\
        </li>\
        <li class="nav-item">\
            <a class="nav-link text-white" href="game.html">進入遊戲</a>\
        </li>\
    </ul>\
    <!--登入系統-->\
    <ul class="nav navbar-nav navbar-right">\
        <li class="nav-item">\
            <a class="nav-link text-light"data-toggle="modal" data-target="#Moda1">登入</a>\
        </li>\
        <li class="nav-item">\
            <a class="nav-link text-light"data-toggle="modal" data-target="#Moda2">註冊</a>\
        </li>\
    </ul>\
</div>\
</nav>'
;
$('body').append(nav);