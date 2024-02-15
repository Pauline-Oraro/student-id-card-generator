function generateCard(){
    //declaring and assigning variables to the value of the input fields
    const name = document.getElementById("name").value;
    const schoolName = document.getElementById("school").value;
    const courseName = document.getElementById("course").value;
    const hostelName = document.getElementById("hostel").value;

    //assigning the value of the input fields to the card
    const cardNameElement = document.getElementById("cardName");
    cardNameElement.innerHTML = name;

    const schoolNameElement = document.getElementById("cardSchoolName");
    schoolNameElement.innerHTML = schoolName;

    const courseNameElement = document.getElementById("cardCourseName");
    courseNameElement.innerHTML = courseName;

    const hostelNameElement = document.getElementById("cardHostelName");
    hostelNameElement.innerHTML = hostelName;

    //display the card once the button is clicked
    document.getElementsByClassName("cardGenerator").style.display = "block";
}