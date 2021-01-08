$(() => {
    $('.change-devoured').on('click', function(e) {
        const id = $(this).data('id');
        const newDevoured = $(this).data('newdevoured');

        const nowEaten = {
            devoured: newDevoured
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: nowEaten
        })
        .then(() => {
            console.log('This burger has been', nowEaten)

            location.reload();
        });
    });

    $('.create-form').on('submit', function(e) {
        e.preventDefault();

        const newBurger = {
            name: $('#burger-name').val().trim()
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        })
        .then(() => {
            console.log('Burger added.')
            location.reload();
        })
    })
});

