$(function () {
    "use strict";
    $("#autocomplete-input").on("click", function (event) {
        var id = event.target.title,
            $nameTitle = $("#nameTitle"),
            nameTitleInput = '';
        $.ajax({
            url: "data/json.js",
            dataType: "json",
            success: function (response) {
                $nameTitle.html('');
				$.each(response, function () {
                    $.each(this, function (key, value) {
                        if (value.employeeId === id) {
                            nameTitleInput += '<img src=' + value.imagePath + '><h3>' + value.name + '</h3><p>' + value.title + '</p>';
                            $nameTitle.html(nameTitleInput);
                            $("#manager p").text(value.ReportsTo);
                            $("#directReports p").text("toDo");
                            $("#officePhone p").text(value.officeNumber);
                            $("#officePhone a").attr("href", "tel:" + value.officeNumber);
                            $("#cellPhone p").text(value.cellNumber);
                            $("#cellPhone a").attr("href", "tel:" + value.cellNumber);
                        }
                    });
                });
			}
		});
    });
});