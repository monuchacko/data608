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
        
        debugger

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
});