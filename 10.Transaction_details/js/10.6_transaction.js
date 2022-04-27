
(function($) {
    $.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
        sNext: '<i class="fa fa-chevron-right text-dark" style="font-size: 18px"></i>',
        sPrevious: '<i class="fa fa-chevron-left text-dark" style="font-size: 18px"></i>'
    });

    let example = $('#example').DataTable({
        "dom": '<"top">rt<"bottom"lip><"clear">',
        "ordering": false,
        "aoColumnDefs": [
            { "bSortable": false, "aTargets": [ 0, 1, 2, 3 ] },
            { "bSearchable": false, "aTargets": [ 0, 1, 2, 3 ] }
        ],
        columnDefs: [{
            orderable: false,
            className: 'select-checkbox',
            targets: 0
        }],
        select: {
            style: 'multi',
            selector: 'td:first-child'
        },
    });
    // if ($("tbody tr").hasClass("selected")){
    //     $("#authorize-accept-footer").addClass('d-none')
    // }else {
    //     console.log("hello")
    //     $("#authorize-accept-footer").removeClass('d-none')
    //
    // }
    $("#example tbody tr").on('click',function (){
        console.log("tr")
           if ($(this.tr).hasClass("selected")){
               $("#authorize-accept-footer").addClass('d-none')
           }else {
               $("#authorize-accept-footer").removeClass('d-none')
               console.log("td")
           }
    })

    example.on("click", "th.select-checkbox", function() {
        if ($("th.select-checkbox").hasClass("selected")) {
            $("#authorize-accept-footer").addClass('d-none')
            example.rows().deselect();
            $("th.select-checkbox").removeClass("selected");
        } else {
            $("#authorize-accept-footer").removeClass('d-none')
            example.rows().select();
            $("th.select-checkbox").addClass("selected");
        }
    }).on("select deselect", function() {
        ("Some selection or deselection going on")
        if (example.rows({
            selected: true
        }).count() !== example.rows().count()) {
            $("th.select-checkbox").removeClass("selected");
        } else {
            $("th.select-checkbox").addClass("selected");
        }
    });
    $(".select-checkbox::before").on('change',function (){
        console.log("checked")
    })
})(jQuery);

// **** 10.7 *****
$(document).ready(function (){
    $("#phone").on('keyup',function (){

        $("#verifyBtn").on('click',function () {
            var inputValue = $("#phone").val()

            // ** Personal Invalid Number **
            if (inputValue === '09448460541') {
                $("#phone").addClass('invalid-form')
                $("#phone").removeClass('valid-form')
                $("#merchant-dummy-invalid").addClass('d-none')
                $("#other-invalid").addClass('d-none')
                $("#block-invalid").addClass('d-none')
                $("#inactive-invalid").addClass('d-none')
                $("#unregister-invalid").addClass('d-none')

                $("#personal-invalid").removeClass('d-none')
                console.log("true")
            }
            // ** Personal Invalid Number **
            else if (inputValue === '09448460542') {
                $("#phone").addClass('invalid-form')
                $("#phone").removeClass('valid-form')
                $("#personal-invalid").addClass('d-none')
                $("#other-invalid").addClass('d-none')
                $("#block-invalid").addClass('d-none')
                $("#inactive-invalid").addClass('d-none')
                $("#unregister-invalid").addClass('d-none')

                $("#merchant-dummy-invalid").removeClass('d-none')
            }
            // *** Block Number ***
            else if (inputValue === '09448460543') {
                $("#phone").addClass('invalid-form')
                $("#phone").removeClass('valid-form')
                $("#personal-invalid").addClass('d-none')
                $("#other-invalid").addClass('d-none')
                $("#merchant-dummy-invalid").addClass('d-none')
                $("#inactive-invalid").addClass('d-none')
                $("#unregister-invalid").addClass('d-none')


                $("#block-invalid").removeClass('d-none')
            }
            // *** Inactive Number ***
            else if (inputValue === '09448460544') {
                $("#phone").addClass('invalid-form')
                $("#phone").removeClass('valid-form')
                $("#personal-invalid").addClass('d-none')
                $("#other-invalid").addClass('d-none')
                $("#merchant-dummy-invalid").addClass('d-none')
                $("#block-invalid").addClass('d-none')
                $("#unregister-invalid").addClass('d-none')

                $("#inactive-invalid").removeClass('d-none')
            }
            // *** Unregister Number ***
            else if (inputValue.length === 11 && !inputValue === '09448460545') {
                $("#phone").addClass('invalid-form')
                $("#personal-invalid").addClass('d-none')
                $("#other-invalid").addClass('d-none')
                $("#merchant-dummy-invalid").addClass('d-none')
                $("#block-invalid").addClass('d-none')
                $("#inactive-invalid").addClass('d-none')

                $("#unregister-invalid").removeClass('d-none')
            }
            // *** Valid Number ***
            else if (inputValue === '09448460545') {
                $("#phone").addClass('valid-form')
                $("#phone").removeClass('invalid-form')
                $("#personal-invalid").addClass('d-none')
                $("#other-invalid").addClass('d-none')
                $("#merchant-dummy-invalid").addClass('d-none')
                $("#block-invalid").addClass('d-none')
                $("#inactive-invalid").addClass('d-none')
                $("#unregister-invalid").addClass('d-none')
                $("#verifyBtn-box").addClass('d-none')
                $("#patternBtn-box").removeClass('d-none')
                $(".pswrd-box").removeClass('d-none')
            }else {
                $("#phone").addClass('invalid-form')
                $("#personal-invalid").addClass('d-none')
                $("#other-invalid").addClass('d-none')
                $("#merchant-dummy-invalid").addClass('d-none')
                $("#block-invalid").addClass('d-none')
                $("#inactive-invalid").addClass('d-none')

                $("#unregister-invalid").removeClass('d-none')
            }
            // *** Other Invalid ***
            if (inputValue.length < 11 || inputValue.length >11){
                $("#phone").addClass('invalid-form')
                $("#phone").removeClass('valid-form')
                $("#personal-invalid").addClass('d-none')
                $("#merchant-dummy-invalid").addClass('d-none')
                $("#block-invalid").addClass('d-none')
                $("#inactive-invalid").addClass('d-none')
                $("#unregister-invalid").addClass('d-none')


                $("#other-invalid").removeClass('d-none')
            }
            $(".precare-text").addClass('d-none')
            $(".verify-btn").removeClass('d-none')
        })

    })
    $("#loginBtn").on('click',function (){
        let validPswrd = $("#exampleInputPassword1").val()
        if (validPswrd === '123456'){
            console.log("true")
            $("#exampleInputPassword1").addClass('valid-form')
            $("#exampleInputPassword1").removeClass('invalid-form')
            $(".incorrect-text").addClass('d-none')
        }else {
            $("#exampleInputPassword1").addClass('invalid-form')
            $("#exampleInputPassword1").removeClass('valid-form')
            $(".incorrect-text").removeClass('d-none')
        }
    })
    $("#patternBtn").on('click',function (){
        $("#loginBtn").addClass('d-none')
        $(".pswrd-box").addClass('d-none')
        $("#patternBtn-box").addClass('d-none')

        $("#swtichToPswrdBox").removeClass('d-none')
        $(".patternLockBox").removeClass('d-none')
    })
    $("#swtichToPswrdBtn").on('click',function (){
        $("#swtichToPswrdBox").addClass('d-none')
        $(".patternLockBox").addClass('d-none')

        $(".pswrd-box").removeClass('d-none')
        $("#patternBtn-box").removeClass('d-none')
        $("#loginBtn").removeClass('d-none')
    })
})
$("#exampleInputPassword1").on('keyup',function (){
    $("#loginBtn-box").removeClass('d-none')
})

