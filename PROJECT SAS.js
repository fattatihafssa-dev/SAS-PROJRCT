//first candidates 

const candidates = [{
cin: "AB123456",
lastName: "Boushaba",
firstName: "Soufiane",
politicalParty: "Independent",
age: 40,
voters: []
}];

//add several candidates

//METHODE 1 with a loop 

let candidates = [];

function addSeveralCandidates() {

    let number = Number(prompt("How many candidates?"));

    for (let i = 0; i < number; i++) {

        let cin = prompt("Enter CIN:");
        let lastName = prompt("Enter last name:");
        let firstName = prompt("Enter first name:");
        let politicalParty = prompt("Enter political party:");
        let age = Number(prompt("Enter age:"));

        let candidate = {
            cin: cin,
            lastName: lastName,
            firstName: firstName,
            politicalParty: politicalParty,
            age: age,
            voters: []
        };

        candidates.push(candidate);
    }
}
     


//MRTHODE2///WITHOUT A LOOP 

let candidates = [ 

function addCandidate() {

    let cin = prompt("Enter CIN:");
    let lastName = prompt("Enter last name:");
    let firstName = prompt("Enter first name:");
    let politicalParty = prompt("Enter political party:");
    let age = Number(prompt("Enter age:"));

    let candidate = {
        cin: cin,
        lastName: lastName,
        firstName: firstName,
        politicalParty: politicalParty,
        age: age,
        voters: []
    };

    candidates.push(candidate);
}

addCandidate();

console.log(candidates);

//DISPLAYING CANDIDATES and sorting //////
let candidates = [
  
  
  }

function displayCandidates() {

   
    let choice = prompt("Choose an option:");

    
    if (choice === "1") {

        console.log("===== ALL CANDIDATES =====");

        for (let candidate of candidates) {

            console.log("-------------------------");
            console.log("ID:", candidate.cin);
            console.log("Last name:", candidate.lastName);
            console.log("First name:", candidate.firstName);
            console.log("Political party:", candidate.politicalParty);
            console.log("Age:", candidate.age);
            console.log("Number of votes:", candidate.voters.length);
        }
    }
    else if (choice === "2") {

        console.log("===== CANDIDATES SORTED BY VOTES =====");

        let sortedCandidates = [...candidates];

        sortedCandidates.sort(function (a, b) {
            return b.voters.length - a.voters.length;
        });

        for (let candidate of sortedCandidates) {

            console.log("-------------------------");
            console.log("ID:", candidate.cin);
            console.log("Last name:", candidate.lastName);
            console.log("First name:", candidate.firstName);
            console.log("Political party:", candidate.politicalParty);
            console.log("Age:", candidate.age);
            console.log("Number of votes:", candidate.voters.length);
        }
    }

    else if (choice === "3") {

        let party = prompt("Enter the political party:");

        let filteredCandidates = candidates.filter(function (candidate) {
            return candidate.politicalParty === party;
        });

        console.log("===== CANDIDATES FROM " + party + " =====");

        for (let candidate of filteredCandidates) {

            console.log("-------------------------");
            console.log("ID:", candidate.cin);
            console.log("Last name:", candidate.lastName);
            console.log("First name:", candidate.firstName);
            console.log("Political party:", candidate.politicalParty);
            console.log("Age:", candidate.age);
            console.log("Number of votes:", candidate.voters.length);
        }
    }

    else {
        console.log("Invalid choice.");
    }
}

displayCandidates();
 
    




















