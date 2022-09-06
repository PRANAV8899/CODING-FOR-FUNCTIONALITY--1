function calculateAge(){
    const dateOfBirth=document.getElementById("date_of_birth").value
    console.log(dateOfBirth)
    const presentDate=document.getElementById("present_date").value
    console.log(presentDate)

    //convert user input into date object
    let startDate=new Date(dateOfBirth)
    let endDate=new Date(presentDate)

    //extract the year,month and date from user date input
    let stDobYear=startDate.getFullYear()
    let stDobMonth=startDate.getMonth() + 1
    let stDobDate=startDate.getDate()

    console.log(stDobYear)
    console.log(stDobMonth)
    console.log(stDobDate)

    let givenYear=endDate.getFullYear()
    let givenMonth=endDate.getMonth() + 1
    let givenDate=endDate.getDate()

    if(stDobYear > givenYear || (stDobMonth > givenMonth && stDobYear===givenYear) ||
    (stDobDate > givenDate && stDobMonth===givenMonth && stDobYear===givenYear)){
        alert("New born")
        return;
    }
}