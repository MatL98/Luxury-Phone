$(document).ready(function () {
    

    
    const mail = $("input#mail");
    const nombre = $("input#name");
    const user = $("input#user");
    const pass = $("input#pass");
    const btnSendInfo = $("#btn-form");
    const APIurl = 'https://jsonplaceholder.typicode.com/posts';

    btnSendInfo.on("click" , function(e){
        e.preventDefault();
        

        if ((mail.val() === "")) {
            $("#alert-mail").fadeIn("slow").fadeOut("slow");
        } if (nombre.val() === ""){
            $("#alert-name").fadeIn("slow").fadeOut("slow");
        } if (user.val() === ""){
            $("#alert-user").fadeIn("slow").fadeOut("slow");
        } if (pass.val() === ""){
            $("#alert-pass").fadeIn("slow").fadeOut("slow");
        } 


        if((mail.val() !== "") && (nombre.val() !== "") && (user.val() !== "" ) && (pass.val() !== "")){
            const infoForm = JSON.stringify({mail: mail.val(), nombre: nombre.val(), user: user.val(), pass: pass.val()})
            $.ajax({
            method: "post",
            url: APIurl,
            data: infoForm,
            success: function (res) {
                $(".modal-overlay").css("opacity" , "1")
                $(".modal").css("display", "block");
                const modalForm = $("#modal-body")
                modalForm.append(`<p>${nombre.val()} te registraste con exito en LuxuryPhone con los siguientes datos: <br>
                mail: ${mail.val()} y tu usuario es: ${user.val()} <br> Ahora podes disfrutar de tus compras!! </p>`);
            },
        });
        $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            $(".modal").hide();
        }
        });
        $("#btn-modal").click(function(){
        $(".modal").hide();
        });
    }
    })
        



});
