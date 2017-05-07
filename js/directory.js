$(function () {
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
                            listItems += '<li><a href="#employeeDetails" title=' + value.employeeId + '><img src=' + value.imagePath + '>' + value.name + '<p>' + value.title + '</p><span id=' + value.employeeId + ' class="ui-li-count"></span></a></li>';
                            $("#autocomplete-input").html(listItems);
                        }
                    });
                    $("#autocomplete-input li a").each(function () {
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
                                    $('#' + idTag).text(count);
                                    $('#autocomplete-input').listview('refresh');
                                    $('#autocomplete-input').trigger('updatelayout');
                                });
                            }
                        });

                    });
                });    
            }
        });
    });  
}); // end document ready


//***** WORKING CODE WITHOUT COUNT BUBBLES  *****//

//$(function () {
//    "use strict";
//    $('#autocomplete').on('keyup', function () {
//        var userInput = $('#autocomplete').val(),
//            forSearch = new RegExp(userInput, "ig"),
//            listItems = '',
//            count = 0,
//            directReports;
//        $("#welcome").hide();
//        $.ajax({
//            url: "data/json.js",
//            dataType: "json",
//            success: function (response) {
//                $('#autocomplete-input').html('');
//				$.each(response, function () {
//                    $.each(this, function (key, value) {
//                        if (forSearch.test(value.name)) {
//                            listItems += '<li><a href="#employeeDetails" title=' + value.employeeId + '><img src=' + value.imagePath + '>' + value.name + '<p>' + value.title + '</p></a></li>';
//                            $("#autocomplete-input").html(listItems);
//                        }
//                        $('#autocomplete-input').listview('refresh');
//                        $('#autocomplete-input').trigger('updatelayout');
//                    });
//                });
//			}
//		});
//    });
//});
