$(function(){
    $('.eat-burger').on('click',function (event){
        var id = $(this).data('id');
        var newEatStatus = {
            eaten: true
        };

        $.ajax(`/api/burgers/${id}`,{
            type: 'PUT',
            data: newEatStatus
        }).then(
            function (){
                console.log(`changed eaten status to ${newEatStatus}`);
                location.reload();
            }
        )
    });

    $('.create-form').on('submit',function(event){
        event.preventDefault();
        var newBurger = {
            name: $('#burgName').val().trim()
        }
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            function(){
                console.log(`created new burger ${newBurger.name}`);
                location.reload();
            }
        )
    })


});