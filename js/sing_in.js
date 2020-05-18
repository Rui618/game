var sing_in ='<div class="modal fade" id="Moda1">\
<div class="modal-dialog">\
    <div class="modal-content">\
        <div class="modal-header">\
            <h4 class="modal-title">登入</h4>\
            <button type="button" class="close" data-dismiss="modal"></button>\
        </div>\
        <div class="modal-body">\
            <div class="card border-0">\
                <div style="margin:10px">\
                    <form>\
                        <div class="form-group">\
                            <label for="email">帳號:</label>\
                            <input type="email" class="form-control" name="email" id="email">\
                        </div>\
                        <div class="form-group">\
                            <label for="pwd">密碼:</label>\
                            <input type="password" class="form-control" name="pwd" id="pwd">\
                        </div>\
                    </form>\
                </div>\
            </div>\
        </div>\
        <div class="modal-footer">\
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">\
                登入</button>\
        </div>\
    </div>\
</div>\
</div>\
<!--註冊-->\
<div class="modal fade" id="Moda2">\
<div class="modal-dialog">\
    <div class="modal-content">\
        <div class="modal-header">\
            <h4 class="modal-title">遊戲註冊</h4>\
            <button type="button" class="close" data-dismiss="modal"></button>\
        </div>\
        <div class="modal-body">\
            <div class="card border-0">\
                <div style="margin:10px">\
                    <form>\
                        <div class="form-group">\
                            <label for="email">設定帳號:</label>\
                            <input type="email" name="email" id="email">\
                        </div>\
                        <div class="form-group">\
                            <label for="pwd">設定密碼:</label>\
                            <input type="password" name="pwd" id="pwd">\
                        </div>\
                        <div class="form-group">\
                            <label for="name">玩家名稱:</label>\
                            <input type="text" name="name" id="name">\
                        </div>\
                    </form>\
                </div>\
            </div>\
        </div>\
        <div class="modal-footer">\
            <button type="button" class="btn btn-outline-light text-dark border-dark" data-dismiss="modal">\
                註冊</button>\
        </div>\
    </div>\
</div>\
</div>'
;
$('body').append(sing_in);