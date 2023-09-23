function grades (marks){
    const mark = marks;
    //Checks if mark is a number between 0 and 100
    if (!isNaN(mark) && mark >= 0 && mark <= 100){

        if (mark > 79){
            return 'A';
        }else if (mark >= 60 && mark <= 79) {
            return 'B';
        }else if (mark >= 59 && mark <= 49) {
            return 'C';
        }else if (mark >= 40 && mark <= 49) {
            return 'D';
        }else if (mark >= 0 && mark <= 39) {
            return 'E';
        }
    }
    //Checks if number is below 0 and above 100
    else {
        return "Invalid. Please input value between 0 and 100";
    }
}

//exports function grades
module.exports = grades;