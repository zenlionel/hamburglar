// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newBurger = $(this).data("newDevoured");

        var newDevouredState = {
            devoured: newBurger
        };

        // Send the PUT request.
        $.ajax("/burger/update/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed devoured to", newBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-update-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            name: $("#ca").val().trim(),
            devoured: $("input[name=Devoured]:checked").val() === 'true'
        };
console.log(newBurger);
        // Send the POST request.
        $.ajax("/burger/create", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new Burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});