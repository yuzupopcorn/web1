$(function () {
    $("#reg-btn").click(function () {
        var getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);

        if ($("#userid").val() == $("#passwd").val()) {
            alert("아이디와 비밀번호는 동일할 수 없습니다.");
            $("#userid").focus();
            $("#userid").val("");
            $("#passwd").val("");
            return false;
        }

        if ($("#passwd").val() == '') {
            alert("비밀번호를 입력해 주세요.");
            $("#passwd").focus();
            $("#passwd").val("");
            return false;
        }

        if ($("#passwd").val().length < 5) {
            alert("비밀번호는 5자리 이상입니다.");
            $("#passwd").focus();
            $("#passwd").val("");
            return false;
        }

        if ($("#passwd").val() != ($("#passwdChk").val())) {
            alert("비밀번호가 일치하지 않습니다.");
            $("#passwd").focus();
            $("#passwd").val("");
            return false;
        }

        if ($("#username").val() == '') {
            alert("이름을 입력해 주세요.");
            $("#username").focus();
            $("#username").val("");
            return false;
        }

    });

    $(".chk-btn").click(function () {
        if ($("#userid").val() == '') {
            alert("아이디를 입력해 주세요.");
            $("#userid").focus();
            $("#userid").val("");
            return false;
        }

        if ($("#userid").val().length < 5) {
            alert("아이디는 5자리 이상입니다.");
            $("#userid").focus();
            $("#userid").val("");
            return false;
        } else {
            var str = $("#userid").val();
            $(".idChk").html(str + "(은)는 사용할 수 있는 아이디입니다.");
        }

    })
});
