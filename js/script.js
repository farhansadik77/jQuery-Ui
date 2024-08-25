/* ========== JQ ========== */
$(document).ready(function(){
    // draggable
    $('#draggable').draggable()
    // accordion
    $('#accordion').accordion({
        collapsible: "true",
        heightStyle: "content"
    });
    // sortable
    $('#sortable').sortable();
    $('#sortable').disableSelection();
    // autocomplete
    var data = [
        "Android",
        "iOS",
        "Windows",
        "MacOS",
        "Linux"
    ];
    $('#subject').autocomplete({
        source: data
    });
    // datepicker
    $('#datepicker').datepicker({
        showButtonPanel: "true",
        changeMonth: "true",
        changeYear: "true"
    });
    // menu
    $('#menu').menu();
    // tabs
    $('#tabs').tabs({
        collapsible: "true"
    });
    // resizable
    $('#resizable').resizable({
        animate: "true"
    });
    // selectable
    $('#selectable').selectable();
});
