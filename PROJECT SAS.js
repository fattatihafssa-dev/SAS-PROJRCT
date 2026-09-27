//first candidates 

function showMenu() {  
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
  showMenu();
prompt("choose an option:")


//METHODE 1 with a loop 

function showMenu() {  
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
 showMenu();

 prompt("choose an option:")
   //if ( prompt(1)===console.log(addSeveralCandidates()));

  const candidates = [];

    function addSeveralCandidates() { 

      let number = Number(prompt("How many candidates ?"));
       for( let i = 0 ; i <number ; i ++) { 

          
     let ID = prompt("Enter your ID :");
     let lastName = prompt("Enter your lastName :");
     let firstName = prompt("Enter your firstName:");
     let politicalParty = prompt("Enter your politicaParty:");
     let age = Number(prompt("Enter your age:"));
   console.log(number);

       let candidate = {
            ID : ID ,
            lastName : lastName ,
            firstName: firstName,
            politicalParty: politicalParty,
            age: age,
            voters: []
                };

        candidates.push(candidate);
      console.log(candidate)
    }
}
addSeveralCandidates();
     
     

//DISPLAY CANDIDATES///
      function chooseQuestion() {
        
        
        console.log( "1.displaying candidates")
        console.log("2.sorting candidates")
        console.log("3.filter and display specific candidates")
      };
           function displayCandidates() {
             
              let choice = prompt("choose an option:")
           
              if(choice==="1");

            console.log("ID:", candidate.cin);
            console.log("Last name:", candidate.lastName);
            console.log("First name:", candidate.firstName);
            console.log("Political party:", candidate.politicalParty);
            console.log("Age:", candidate.age);
            console.log("Number of votes:", candidate.voters.length);
               

              let existedCandidates = valid ;
              if ( ID == candidates) { 
                console.log(valid);
              }

       
              
              


              
            
             

                 
     
       





//MRTHODE2///With loop  
///////////////////////////////////////////////////////////////////////////////////////
 