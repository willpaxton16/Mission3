
$("#buttoncalc").click(function () {
    /*Calculate Number Grade*/
    var a = $("#atxt").val();
    var g = $("#gptxt").val();
    var q = $("#qtxt").val();
    var e = $("#etxt").val();
    var i = $("#itxt").val();
    var grade = (a * .55) + (g * .05) + (q * .1) + (e * .2) + (i * .1);

    /*Calculate Letter Grade*/
    if (grade >= 94)
        var letGrade = "A"
    else if (grade >= 90)
        var letGrade = "A-"
    else if (grade >= 87)
        var letGrade = "B+"
    else if (grade >= 84)
        var letGrade = "B"
    else if (grade >= 80)
        var letGrade = "B-"
    else if (grade >= 77)
        var letGrade = "C+"
    else if (grade >= 74)
        var letGrade = "C"
    else if (grade >= 70)
        var letGrade = "C-"
    else if (grade >= 67)
        var letGrade = "D+"
    else if (grade >= 64)
        var letGrade = "D"
    else if (grade >= 60)
        var letGrade = "D-"
    else
        var letGrade = "E"

    /*Display both Number and Letter Grade*/
    if (a > 0 & a <= 100 & g > 0 & g <= 100 & q > 0 & q <= 100 & e > 0 & q <= 100 & i > 0 & i <= 100)
        alert("Grade: " + grade + "%\nLetter Grade: " + letGrade);
});


