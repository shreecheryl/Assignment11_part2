$(function () {
    "use strict";
    $("#directReportsItem").on("click", function (event) {
        var managerId = event.target.title,
            drListItems = '';
        $.ajax({
            url: "data/json.js",
            dataType: "json",
            success: function (response) {
                $('#directReports-input').html('');
				$.each(response, function () {
                    $.each(this, function (key, value) {
                        if (value.ReportsTo === managerId) {
                            drListItems += '<li><a href="#employeeDetails" title=' + value.employeeId + '><img src=' + value.imagePath + '>' + value.name + '<p>' + value.title + '</p><span id="forDirectReports' + value.employeeId + '" class="ui-li-count"></span></a></li>';
                            $("#directReports-input").html(drListItems);
                        }
                        $("#directReports-input").listview("refresh");
                    });
                    $("#directReports-input li a").each(function () {
                        var idTag = $(this).attr("title"),
                            count = 0;
                        $.ajax({
                            url: "data/json.js",
                            dataType: "json",
                            success: function (data) {
                                $.each(data, function () {
                                    $.each(this, function (i, val) {
                                        if (val.ReportsTo === idTag) {
                                            count += 1;
                                        }
                                    });
                                    $("#forDirectReports" + idTag).text(count);
                                    $("#directReports-input").listview("refresh");
                                });
                            }
                        });
                    });
                });    
            }
        }); 
    }); // end of click funtion    
}); // end of document ready