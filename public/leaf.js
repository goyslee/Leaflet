$(".from-control").after("*");
$('input.cb').on('change', function() {
    $('input.cb').not(this).prop('checked', false);  
});

$("form").submit(function () {

    var this_master = $(this);

    this_master.find('input[type="checkbox"]').each( function () {
        var checkbox_this = $(this);


        if( checkbox_this.is(":checked") == true ) {
            checkbox_this.attr('value','YES');
        } else {
            checkbox_this.prop('checked',true);
            //DONT' ITS JUST CHECK THE CHECKBOX TO SUBMIT FORM DATA    
            checkbox_this.attr('value','NO');
        }
    })
})

$(document).on("keydown", ".form-control.requireda", function(){
    $(this).removeClass("requireda");
    $("div.requireda").removeClass("requireda");
});
$(document).on("keydown", ".form-control.requiredb", function(){
    $(this).removeClass("requiredb");
    $("div.requiredb").removeClass("requiredb");
});
$(document).on("keydown", ".form-control.requiredc", function(){
    $(this).removeClass("requiredc");
    $("div.requiredc").removeClass("requiredc");
});
$(document).on("keydown", ".form-control.requiredd", function(){
    $(this).removeClass("requiredd");
    $("div.requiredd").removeClass("requiredd");
});
$(document).on("keydown", ".form-control.requirede", function(){
    $(this).removeClass("requirede");
    $("div.requirede").removeClass("requirede");
});
$(document).on("keydown", ".form-control.requiredf", function(){
    $(this).removeClass("requiredf");
    $("div.requiredf").removeClass("requiredf");
});