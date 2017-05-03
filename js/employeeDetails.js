$(document).on('pagecreate', '#employeeDetails', function (event, data) {
    "use strict";
    var id = event.target.title;
    window.console.log(id);
//        $.ajax({
//            url: "data/json.js",
//            dataType: "json",
//            success: function (response) {
//                $('#autocomplete-input').html('');
//				$.each(response, function () {
//                    $.each(this, function (key, value) {
//                        if (forSearch.test(value.name)) {
//                            listItems += '<li><a href="#employeeDetails" title=' + value.employeeId + '><img src=' + value.imagePath + '>' + value.name + '<p>' + value.title + '</p>' + '</a></li>';
//                            $("#autocomplete-input").html(listItems);
//                        }
//                        $('#autocomplete-input').listview('refresh');
//                        $('#autocomplete-input').trigger('updatelayout');
//                    });
//                });
//			}
//		});
});