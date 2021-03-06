$(function () {
    "use strict";
    $("#directReports-input").on("click", "a", function (event) {
        var id,
            $nameTitle = $("#nameTitle"),
            nameTitleInput = '',
            count = 0;
        if (event.target.nodeName === "A") {
            id = event.target.title;
        } else {
            id = event.target.parentNode.title;
        }
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
                            $("#directReportsItem a").attr("title", value.employeeId);
                            $.ajax({
                                url: "data/json.js",
                                dataType: "json",
                                success: function (data) {
                                    $.each(data, function () {
                                        $.each(this, function (i, val) {
                                            if (value.ReportsTo === "") {
                                                $("#manager p").text("");
                                                $("#manager").hide();
                                            } else if (value.ReportsTo === val.employeeId) {
                                                $("#manager p").text(val.name);
                                                $("#manager").show();
                                                $("#manager a").attr("title", val.employeeId);
                                            }
                                            if (value.employeeId === val.ReportsTo) {
                                                count += 1;
                                            }
                                        });
                                        $("#directReportsItem p").text(count);
                                    });
                                }
                            });
                            $("#officePhone p").text(value.officeNumber);
                            $("#officePhone a").attr("href", "tel:" + value.officeNumber);
                            $("#cellPhone p").text(value.cellNumber);
                            $("#cellPhone a").attr("href", "tel:" + value.cellNumber);
                            $("#email p").text(value.email);
                            $("#email a").attr("href", "mailto:" + value.email);
                            $("#employeeInfo-input").listview("refresh");
                        }
                    });
                });
			}
		});
    }); // end of click event  
}); // end document ready