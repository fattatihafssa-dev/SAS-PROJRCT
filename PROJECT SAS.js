// Online JavaScript compiler (editor)
// Write and run JavaScript online using this JS editor.

const candidates = [];

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
 
 prompt("choose an option:")

function addCandidates() {
        //let ID = prompt("Enter  ID :");
      
        let lastName = prompt("Enter  lastName :");
        let firstName = prompt("Enter  firstName:");
        let politicalParty = prompt("Enter  politicaParty:");
        let age = Number(prompt("Enter age:"));
                };

  
    function addSeveralCandidates() { 

      let number = Number(prompt("How many candidates ?"));
       for( let i = 0 ; i <number ; i ++) { 

          
     let ID = prompt("Enter your ID :");
     let lastName = prompt("Enter your lastName :");
     let firstName = prompt("Enter your firstName:");
     let politicalParty = prompt("Enter your politicaParty:");
     let age = Number(prompt("Enter your age:"));
   // console.log(number);

       let candidate = {
            ID : ID ,
            lastName : lastName ,
            firstName: firstName,
            politicalParty: politicalParty,
            age: age,
            voters: []
       };

        candidates.push(candidate);
       }
      console.log("Candidates added successfully.")
    }


     

//DISPLAY CANDIDATES///
      function chooseQuestion() {
        
        console.log( "1.displaying candidates");
        console.log("2.sorting candidates");
        console.log("3.filter and display specific candidates");
      }

      function displayCandidates() {
        
              chooseQuestion();
             
                let choice = prompt("choose an option:");
        
                  if(choice==="1") { 

                   let ID = prompt("Enter candidate ID:");

                   let found = false ;
                    
                    for(let candidate of candidates) { 

                        if ( ID ===candidate.ID) { 
                          
                           found = true ;
                          
    console.log("ID:",candidate.ID);
     console.log("Last name:", candidate.lastName);
    console.log("First name:", candidate.firstName);
    console.log("Political party:", candidate.politicalParty);
    console.log("Age:", candidate.age);
    console.log("Number of votes:", candidate.voters.length); 

       }
    }
       if ( found === false) {
        console.log("ID not found.");
         }
        }

      else if(choice==="2") { 

       let sortedCandidates = [...candidates];

           sortedCandidates.sort(function(a,b) { 
             
             return b.voters.length - a.voters.length;

          });
                //CANDIDATES SORTED BY VOTES

        for (let candidate of candidates) {
    console.log("ID:",candidate.ID);
    console.log("Last name:", candidate.lastName);
    console.log("First name:", candidate.firstName);
    console.log("Political party:", candidate.politicalParty);
    console.log("Age:", candidate.age);
    console.log("Number of votes:", candidate.voters.length);
        }
      
       else if ( choice==="3") {
                   
         let party = prompt("Enter the politicalparty:"); 
         let filteredCandidates =candidates.filter(function (candidate) {
          return candidate.politicalParty === party;
        });
         for (let candidate of filteredCandidates) {
           
            console.log("ID:", candidate.cin);
            console.log("Last name:", candidate.lastName);
            console.log("First name:", candidate.firstName);
            console.log("Political party:", candidate.politicalParty);
            console.log("Age:", candidate.age);
            console.log("Number of votes:", candidate.voters.length);
        }
       }
      else {
         console.log("Invalid option.")
        }
      }

     function voteForCandidates() {

             let voterID = prompt("Enter your ID:");
              
              
                //checking if the candidate gas already voted  

                for ( let candidate of candidates ) { 
                  
                   for(let voter of candidates.voters) {
                     
                     if(voter === voterID) {
                        console.log("You have already voted.");
                        return ;
                  }
                 
               }
            }
       
              console.log("You are allowed to vote.");
        }

       //Ask for the candidate

       let candidateID = prompt("Enter candidate ID:");
        for (let candidate of candidates) { 
             if (candidate.ID === candidateID) { 
                 candidate.voters.push(voterID);
                 console.log("Vote successfully recorded.");
                  return; console.log("Candidate not found."); 
                
                }
            }
        
      
        function editCnadidates() {
          
               let ID = prompt("Enter candidate ID:");
          
                for ( let candiddate of candidates);
          
                 if (ID === candidate.ID ) { 

                    console.log("Current information:,")
                 }
                }

                    
    console.log("ID:", candidate.ID);
    console.log("Last name:", candidate.lastName);
    console.log("First name:", candidate.firstName);
    console.log("Political party:", candidate.politicalParty);
    console.log("Age:", candidate.age);
    console.log("Number of votes:", candidate.voters.length);

    //New information////
     
     candidate.lastName = prompt("Enter new last name:");
     candidate.firstName = prompt("Enter new first name:");
     candidate.politicalParty = prompt("Enter new political party:");
     candidate.age = Number(prompt("Enter new age":));

        console.log("Candidate information uptated.");
        return ;
            
            
                 console.log("ID not found .");
            
            //deleting candidates////
          
          

          function deletCandidates() { 

           let  candidateID = prompt("Entre candidate ID:");

            for ( let i = 0 ; i <candidates.length ;i++);{
              if ( candidates[i].ID ===ID) {
                candidates.splice(i,1);
                console.log("Candidate deleted.");
                return;
              }
          }
                    console.log("Candidate not found.");

                  }
      
        function searchcandidate() {
          let ID = ("Enter candidate ID:");

           let found = false ;

          for (let candidate of candidates) {
            if ( candidate.ID === ID){

              found = true ;

               console.log("ID:", candidate.ID);
               console.log("Last name:", candidate.lastName);
               console.log("First name:", candidate.firstName);
               console.log("Political party:", candidate.politicalParty);
               console.log("Age:", candidate.age);
               console.log("Number of votes:", candidate.voters.length);
              
            return ;
          }
        }
     if ( found===false)
       console.log("Candidate not found");
        }
    }

    //total of candidates////

      function chooseQuestion() {
        console.log("Display the total number of candidates.");
        console.log("Display the total number of votes cast in the entire election.");
        console.log("Display the Top 3 candidates with the most votes.");
        console.log("Display the number of candidates per political party.");

        prompt("Choose an option.");
      }
        function totalCandidates() {

           console.log("totalCandidate:" = candidates.length);
  
        let totalVotes = 0 ;
          for ( let candidate of candidates){
         totalVotes = totalVotes + candidate.voters.length ;

     }
    }
    chooseQuestion()

//TOTAL OF VOTES////

     function totalVotes() { 

    

   console.log("Total votes:",totalVotes);

 candidates.sort((a, b) => b.voters.length - a.voters.length);

      for ( i = 0 ; i < 3 && i < candidate.length ; i ++ ){
         
        
      }
    }

        