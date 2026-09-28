const candidates = [];

const prompt = require('prompt-sync')();

// TEST CANDIDATES
// If you want to use these candidates for testing,
// remove the // from the line "addTestCandidates();"


function addTest() {

    candidates.push({
        ID: "11",
        lastName: "test1",
        firstName: "ff",
        politicalParty: "fff",
        age: 44,
        voters: ["V001", "V002"]
    });

    candidates.push({
        ID: "22",
        lastName: "test2",
        firstName: "gg",
        politicalParty: "ggg",
        age: 33,
        voters: ["V003"]
    });

    candidates.push({
        ID: "33",
        lastName: "test3",
        firstName: "mm",
        politicalParty: "mmm",
        age: 22,
        voters: []
    });

}


// USE TEST CANDIDATES ONLY IF YOU WANT
addTest();


function showMenu() {
    console.log("--MAIN MENU--");
    console.log("1. add a candidates");
    console.log("2. add several candidates");
    console.log("3.dispaly candidates");
    console.log("4.vote for a candidates");
    console.log("5.edit candidate");
    console.log("6.delet candidate");
    console.log("7.search candidate");
    console.log("8.statistics");
    console.log("0.Exit");
}
let choice = "";

while (choice !== "0") {
    showMenu();
    choice = prompt("choose option:");
    if (choice === "1") {
        addCandidates();
    }
    else if (choice === "2") {
        addSeveralCandidates();
    }
    else if (choice === "3") {
        displayCandidates();
    }
    else if (choice === "4") {
        voteForCandidates();
    }
    else if (choice === "5") {
        editCnadidates();
    }
    else if (choice === "6") {
        deletingCandidate();
    }
    else if (choice === "7") {
        searchCandidate();
    }
    else if (choice === "8") {
        statisticsMenu();
    }
    else if (choice === "0") {
        console.log("off");
    }
    else {
        console.log("invalid.");
    }


//ADDING CANDIDATES////

function addCandidates() {

    let ID = prompt("Enter ID :");
    let lastName = prompt("Enter  lastName :");
    let firstName = prompt("Enter  firstName:");
    let politicalParty = prompt("Enter  politicaParty:");
    let age = Number(prompt("Enter age:"));

    let candidate = {
        ID: ID,
        lastName: lastName,
        firstName: firstName,
        politicalParty: politicalParty,
        age: age,
        voters: []
    };

    candidates.push(candidate);

    console.log("candidate added.");
}


function addSeveralCandidates() {

    let number = Number(prompt("How many candidates ?"));

    for (let i = 0; i < number; i++) {

        let ID = prompt("Enter your ID :");
        let lastName = prompt("Enter your lastName :");
        let firstName = prompt("Enter your firstName:");
        let politicalParty = prompt("Enter your politicaParty:");
        let age = Number(prompt("Enter your age:"));

        let candidate = {
            ID: ID,
            lastName: lastName,
            firstName: firstName,
            politicalParty: politicalParty,
            age: age,
            voters: []
        };

        candidates.push(candidate);
    }

    console.log("candidates added.");
}


///DISPLAY CANDIDATES///

function displayQuestion() {

    console.log("1.displaying candidates");
    console.log("2.sorting candidates");
    console.log("3.filter and display specific candidates");
}


function displayCandidates() {

    displayQuestion();

    let choice = prompt("choose option:");

    if (choice === "1") {

        // Display all candidates

        if (candidates.length === 0) {

            console.log("no candidates.");

        }

        else {

            for (let candidate of candidates) {

                console.log("-----------");
                console.log("ID:", candidate.ID);
                console.log("Last name:", candidate.lastName);
                console.log("First name:", candidate.firstName);
                console.log("Political party:", candidate.politicalParty);
                console.log("Age:", candidate.age);
                console.log("Number of votes:", candidate.voters.length);

            }
        }
    }

    else if (choice === "2") {

        let sortedCandidates = [...candidates];

        sortedCandidates.sort(function(a, b) {

            return b.voters.length - a.voters.length;

        });

        //CANDIDATES SORTED BY VOTES

        for (let candidate of sortedCandidates) {

            console.log("ID:", candidate.ID);
            console.log("Last name:", candidate.lastName);
            console.log("First name:", candidate.firstName);
            console.log("Political party:", candidate.politicalParty);
            console.log("Age:", candidate.age);
            console.log("Number of votes:", candidate.voters.length);
        }
    }

    else if (choice === "3") {

        let party = prompt("Enter the politicalparty:");
        let filteredCandidates = candidates.filter(function(candidate) {

            return candidate.politicalParty === party;

        });

        for (let candidate of filteredCandidates) {
            console.log("ID:", candidate.ID);
            console.log("Last name:", candidate.lastName);
            console.log("First name:", candidate.firstName);
            console.log("Political party:", candidate.politicalParty);
            console.log("Age:", candidate.age);
            console.log("Number of votes:", candidate.voters.length);
        }
    }

    else {
        console.log("invalid.");

    }
}


///VOTE////

function voteForCandidates() {

    let voterID = prompt("Enter your ID:");

    //checking if the candidate has already voted

    for (let candidate of candidates) {
        for (let voter of candidate.voters) {
            if (voter === voterID) {
                console.log("You have already voted and you are not allowed to change your vote or vote again.");
                return;
            }
        }
    }

    console.log("you are allowed to vote.");

    //Ask for the candidate

    let candidateID = prompt("enter candidate ID:");

    let found = false;

    for (let candidate of candidates) {

        if (candidate.ID === candidateID) {
          
            candidate.voters.push(voterID);
          
            console.log("vote done.");

            found = true;

            return;
        }
    }

    if (found === false) {

        console.log("candidate not found.");

    }
}


///EDIT CANDIDATES////

function editCnadidates() {

    let ID = prompt("enter candidate ID:");

    for (let candiddate of candidates) {

        if (ID === candiddate.ID) {

            console.log("Current information:");

            console.log("ID:", candiddate.ID);
            console.log("Lastname:", candiddate.lastName);
            console.log("Firstname:", candiddate.firstName);
            console.log("Politicalparty:", candiddate.politicalParty);
            console.log("Age:", candiddate.age);
            console.log("Num of votes:", candiddate.voters.length);

            //New informations////

            candiddate.lastName = prompt("enter new lastname:");
            candiddate.firstName = prompt("enter new firstname:");
            candiddate.politicalParty = prompt("enter new politicalparty:");
            candiddate.age = Number(prompt("enter new age:"));

            console.log("candidate uptated.");

            return;
        }
    }

    console.log("ID not found.");
}


///DELETING CANDIDATES////

function deletingCandidate() {

    let candidateID = prompt("entre candidate ID:");

    for (let i = 0; i < candidates.length; i++) {

        if (candidates[i].ID === candidateID) {

            candidates.splice(i, 1);
            console.log("candidate deleted.");
            return;
        }
    }

    console.log("candidate not found.");
}


///SEARCH CANDIDATE////

function searchCandidate() {

    let ID = prompt("enter candidate ID:");

    let found = false;

    for (let candidate of candidates) {

        if (candidate.ID === ID) {

            found = true;
            console.log("ID:", candidate.ID);
            console.log("Lastname:", candidate.lastName);
            console.log("Firstname:", candidate.firstName);
            console.log("Politicalparty:", candidate.politicalParty);
            console.log("Age:", candidate.age);
            console.log("Num of votes:", candidate.voters.length);

            return;
        }
    }

    if (found === false) {

        console.log("candidate not found");

    }
}


///TOTAL OF CANDIDATES////

function totalCandidates() {

    console.log("TotalCandidate:", candidates.length);

}


///TOTAL OF VOTES/////

function totalVotes() {

    let totalVotes = 0;

    for (let candidate of candidates) {

        totalVotes = totalVotes + candidate.voters.length;

    }

    console.log("total votes:", totalVotes);

}


///TOP 3 CANDIDATES////

function topThreeCandidates() {

    let sorted = [...candidates];

    sorted.sort(function(a, b) {

        return b.voters.length - a.voters.length;

    });

    for (let i = 0; i < 3 && i < sorted.length; i++) {

        console.log(
            i + 1,
            sorted[i].firstName,
            sorted[i].lastName,
            "- Votes:",
            sorted[i].voters.length
        );

    }
}


///CANDIDATES NUM PER POLITICAL PARTY/////

function candidatesPerParty() {

    let parties = {};

    for (let candidate of candidates) {
        let party = candidate.politicalParty;
        if (parties[party] === undefined) {
            parties[party] = 1;

        }

        else {

            parties[party]++;
        }
    }

    for (let party in parties) {

        console.log(party + ":", parties[party]);

    }
}


///STATISTICS MENU/////

function statisticsMenu() {

    console.log("1.Display total num of candidates.");
    console.log("2.Display total num of votes cast in the entire election.");
    console.log("3.Display top 3 candidates with the most votes.");
    console.log("4.Display candidates per political party.");

    let choice = prompt("choose option:");

    if (choice === "1") {

        totalCandidates();

    }

    else if (choice === "2") {
        totalVotes();

    }

    else if (choice === "3") {
        topThreeCandidates();

    }

    else if (choice === "4") {
        candidatesPerParty();

    }

    else {
        console.log("invalid.");

    }
}





}