$(document).ready(function(){
    todotext()    
});
 function todotext(){
    $('#button-news').click(function () { 
        var textboss = $("input").val();
        var textarea = $("textarea").val();
        if (!textboss) {
            alert('Веди задание!')
            return false
        }
        else if (!textarea) {
            alert('Веди описание!')
            return false
        }
        var newqes = `
        <div id="quest-blok" class="quest-text">
        <div class="task-show" id="task-show">
            <div class="task" id="task">
                <p>`
                    + textboss +
                `</p>
                <img id="img" class="clear" src="img/clear-button.png" alt="">
                <img src="img/arow.png" alt="" class="show">
            </div>
            <p id="text" class="task-coment">`
                + textarea +
            `</p>
            </div>
        </div>`
        $('.qest-nawe').append(newqes);
        $('.none').remove();
        $("input").val('');
        $("textarea").val('');
        deletetask();
        namess();
});
}
function deletetask() {
    $('.clear').click(function () { 
        $(this).parents('#quest-blok').remove();                
    });
    
}
function namess() {
    $('.show').click(function(event) { 
    $(this).parent().parent().find('.task-coment').slideToggle();
    event.stopImmediatePropagation();
});

}  