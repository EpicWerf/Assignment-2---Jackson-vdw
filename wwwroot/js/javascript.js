function calculateGrade() {
    //first collect all variables from the input boxes on the html form
    var iAssignmentsGrade = document.getElementById("assignments").value;
    var iGroupProjectsGrade = document.getElementById("group_projects").value;
    var iQuizzesGrade = document.getElementById("quizzes").value;
    var iExamsGrade = document.getElementById("exams").value;
    var iIntexGrade = document.getElementById("intex").value;

    //set up some blank variables to be used later on
    var iFinalGrade = 0;
    var sOutput = '';

    //calculate the final grade based on grade weights and what the user inputted
    iFinalGrade = ((iAssignmentsGrade * .5) + (iGroupProjectsGrade * .1) + (iQuizzesGrade * .1) + (iExamsGrade * .2) + (iIntexGrade * .1));

    //create an output variable
    sOutput = ('Based on the grades that you inputted, you will end up with a ' + iFinalGrade + ' in the class');

    //write to html
    document.getElementById('grade_output').innerHTML = sOutput;
}