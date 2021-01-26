$("#submitButton").click( function () {
    //first collect all variables from the input boxes on the html form
    var iAssignmentsGrade = $("#assignments").val();
    var iGroupProjectsGrade = $("#group_projects").val();
    var iQuizzesGrade = $("#quizzes").val();
    var iExamsGrade = $("#exams").val();
    var iIntexGrade = $("#intex").val();

    //set up some blank variables to be used later on
    var iFinalGrade = 0;
    var sFinalLetter = '';
    var sOutput = '';

    //calculate the final grade based on grade weights and what the user inputted
    iFinalGrade = ((iAssignmentsGrade * .5) + (iGroupProjectsGrade * .1) + (iQuizzesGrade * .1) + (iExamsGrade * .2) + (iIntexGrade * .1));

    //convert the final grade into a letter
    if (iFinalGrade >= 94) {
        sFinalLetter = 'A'
    }
    else if (iFinalGrade >= 94) {
        sFinalLetter = 'A-'
    }
    else if (iFinalGrade >= 94) {
        sFinalLetter = 'B+'
    }
    else if (iFinalGrade >= 94) {
        sFinalLetter = 'B'
    }
    else if (iFinalGrade >= 94) {
        sFinalLetter = 'B-'
    }
    else if (iFinalGrade >= 94) {
        sFinalLetter = 'C+'
    }
    else if (iFinalGrade >= 94) {
        sFinalLetter = 'C'
    }
    else if (iFinalGrade >= 94) {
        sFinalLetter = 'C-'
    }
    else if (iFinalGrade >= 94) {
        sFinalLetter = 'D+'
    }
    else if (iFinalGrade >= 94) {
        sFinalLetter = 'D'
    }
    else if (iFinalGrade >= 94) {
        sFinalLetter = 'D-'
    }
    else {
        sFinalLetter = 'E'
    }

    //create an output variable
    sOutput = ('Based on the grades that you inputted, you will end up with a ' + iFinalGrade + ' which is a(n) ' + sFinalLetter + ' in the class');

    //alert with final grade
    alert(sOutput)
});