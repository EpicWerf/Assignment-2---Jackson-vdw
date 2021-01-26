$("#submitButton").click( function () {
    //first collect all variables from the input boxes on the html form
    var iAssignmentsGrade = $("#assignments").val();
    var iGroupProjectsGrade = $("#group_projects").val();
    var iQuizzesGrade = $("#quizzes").val();
    var iExamsGrade = $("#exams").val();
    var iIntexGrade = $("#intex").val();

    //set up some blank variables to be used later on
    var iFinalGrade = 0;
    var sOutput = '';

    //calculate the final grade based on grade weights and what the user inputted
    iFinalGrade = ((iAssignmentsGrade * .5) + (iGroupProjectsGrade * .1) + (iQuizzesGrade * .1) + (iExamsGrade * .2) + (iIntexGrade * .1));

    //create an output variable
    sOutput = ('Based on the grades that you inputted, you will end up with a ' + iFinalGrade + ' in the class');

    //alert with final grade
    alert(sOutput);
});