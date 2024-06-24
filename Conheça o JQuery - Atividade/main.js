$(document).ready(function() {
    $('#form-tarefas').submit(function(e) {
        e.preventDefault();
        
        const tarefa = $('#lista-input').val();
        const novaTarefa = $('<li></li>').text(tarefa);
        
        $('#lista-tarefas').append(novaTarefa);
        $('#lista-input').val('');
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('feito');
    });
});
