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
                <a data-toggle="collapse" href="#footwear" aria-expanded="false" aria-controls="footwear">
                  <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z"/>
                  </svg>
                </a>
                <button type="button" class="ml-2 mb-1 close clear" data-dismiss="toast" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                
            </div>
            <div class="collapse" id="footwear">
              <p id="text" class="task-coment">`
                + textarea +
            `</p>
            </div>
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
    $('.close').click(function () { 
        $(this).parents('#quest-blok').remove();                
    }); 
}

function namess() {
    // $('.show').click(function(event) { 
    // $(this).parent().parent().find('.task-coment').slideToggle();
    // event.stopImmediatePropagation();
    $('#myCollapsible').collapse({
      toggle: false
    });
}; 