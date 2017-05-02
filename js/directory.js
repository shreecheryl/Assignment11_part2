$(document).on('pagecreate', '#directory', function () {
    "use strict";
    $('#autocomplete').on('keyup', function () {
        var userInput = $('#autocomplete').val(),
            forSearch = new RegExp(userInput, "ig"),
            listItems = '';
        $("#welcome").hide();
        $.ajax({
            url: "data/json.js",
            dataType: "json",
            success: function (response) {
                $('#autocomplete-input').html('');
				$.each(response, function () {
                    $.each(this, function (key, value) {
                        if (forSearch.test(value.name)) {
                            listItems += '<li><a href="#">' + value.name + '<p>' + value.title + '</p>' + '</a></li>';
                            $("#autocomplete-input").html(listItems);
                        }
                        $('#autocomplete-input').listview('refresh');
                        $('#autocomplete-input').trigger('updatelayout');
                    });
                });
			}
		});
    });
});