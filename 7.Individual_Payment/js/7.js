$("#phone").on('keyup',function (){
    console.log('hello')
    var inputValue = $("#phone").val()

    // ** Valid Number **
    if (inputValue === '09448460545'){
        $("#block-msg").addClass('d-none')
        $("#invalid-msg").addClass('d-none')
        $("#unregister-msg").addClass('d-none')

        $("#valid-msg").removeClass('d-none')
        $("#add_individual_table").removeClass('d-none')
        $("#pay-amount").removeClass('d-none')
        console.log("true")
    }else {
        $("#add_individual_table").addClass('d-none')
        $("#pay-amount").addClass('d-none')
        $("#block-msg").addClass('d-none')
        $("#invalid-msg").addClass('d-none')
        $("#valid-msg").addClass('d-none')

        $("#unregister-msg").removeClass('d-none')
    }

    // ** Block Number **
    if (inputValue === '09448460541'){
        $("#add_individual_table").addClass('d-none')
        $("#pay-amount").addClass('d-none')
        $("#valid-msg").addClass('d-none')
        $("#unregister-msg").addClass('d-none')
        $("#invalid-msg").addClass('d-none')

        $("#block-msg").removeClass('d-none')
    }

    // ** Invalid Number **
    if (inputValue.length < 11 || inputValue.length >11){
        $("#add_individual_table").addClass('d-none')
        $("#pay-amount").addClass('d-none')
        $("#valid-msg").addClass('d-none')
        $("#unregister-msg").addClass('d-none')
        $("#block-msg").addClass('d-none')

        $("#invalid-msg").removeClass('d-none')
    }

    if (inputValue.length === 0){
        console.log('empty')
    }
})



$("#amount").on('keyup',function (){
    var payAmount = $("#amount").val()
    if (payAmount.length >= 2){
        console.log("hello")
        $("#remark").removeClass('d-none')
        $(".input-radio").removeClass('d-none')
    }
})

// remark area text count
const messageArea1 = document.getElementById('remarkArea');
const textCount1 = document.getElementById('textCount');

var remarkLength = messageArea1.value.length;
textCount1.innerHTML = `${remarkLength}/200`;

messageArea1.addEventListener('input', function (e) {
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLength = target.getAttribute('maxlength');

    // Count the current number of characters
    const currentLength = target.value.length;

    textCount1.innerHTML = `${currentLength}/${maxLength}`;
});

$('input:radio[name="radio-button"]').change(
    function(){
        if ($("#payNowRadio").is(':checked') ) {
            $(".date_time").addClass('d-none')
            $("#schedule-initiate").addClass('d-none')

            $("#pay-now-initiate").removeClass('d-none');
            $("html, body").animate({
                scrollTop: $(document).height()
            }, 1000);
            console.log("checked")
        }

        if ($("#scheduleRadio").is(':checked') ) {

            $("#pay-now-initiate").addClass('d-none')

            $(".date_time").removeClass('d-none')
            $("#schedule-initiate").removeClass('d-none');

            $("html, body").animate({
                scrollTop: $(document).height()
            }, 1000);
            console.log("checked")
        }
    });
