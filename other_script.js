'use strict';

function myScript() {
    return ('you can also import other scripts!');
}

function reverseString(str) {
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

function LoadPresidentsData(president) {
    d3.csv('https://raw.githubusercontent.com/monuchacko/data608/master/data/presidents.csv', function (data) {
        console.log(data);

        if (president == "") {
            var fdata = data
        } else {
            $.each(data, function (index, value) {
                if (value.Name.toLowerCase() == president.toLowerCase()) {
                    $('#resPresident').html('<div>Height: + ' + value.Height + '</div><div>Weight: + ' + value.Weight + '</div>');
                }
            });
        }
    })
}

$(document).ready(function () {

    $('#btnReverse').on('click', function () {
        $('#lblReverseResult').text(reverseString($('#txtReverse').val()));
    })

    $('#btnMultiples').on('click', function () {

        var html = '<table>';

        var i;
        var j;
        var mult = $('#txtMultiples').val();
        var incr = 1;

        // debugger

        for (i = 0; i < 5; i++) {
            html += '<tr>';
            for (j = 0; j < 4; j++) {
                // mult = mult * incr;
                html += '<td>' + mult * incr + '</td>';
                incr++;
            }
            html += '</tr>';

        }

        html += '<table>';
        $('#resMultiples').html(html);
    })

    $('#btnPresident').on('click', function () {
        LoadPresidentsData($('#txtPresident').val());

        // $('#resPresident').text(reverseString($('#txtReverse').val()));
    })
});