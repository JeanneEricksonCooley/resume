// create skills sections that fade in when button is clicked

// create event listener for buttons
// fade in div with skills on click
var showProfSkills = document.getElementById("proficientSkills");
var showExpSkills = document.getElementById("experiencedSkills");
var showLearnSkills = document.getElementById("learningSkills");


// handle P
// check for E and L
document.getElementById("proficientBtn").addEventListener("click", function(){
console.log("proficient");
    
    if (showProfSkills.style.display != 'block') {
        showProfSkills.style.display = 'block';

        // check for E
        // no E
        if (showExpSkills.style.display != 'block') {
            // check for L
            // no L
            if (showLearnSkills.style.display != 'block') {
                document.getElementById("proficientSkills").className = "col-md-offset-3 col-md-2 text-center";
                console.log('P');
          
            // yes L
           } else {
                document.getElementById("proficientSkills").className = "col-md-offset-3 col-md-2 text-center";
                document.getElementById("learningSkills").className = "col-md-offset-2 col-md-2 text-center";
                console.log('LP');
           }
         
         // yes E   
        } else {
            document.getElementById("proficientSkills").className = "col-md-offset-3 col-md-2 text-center";
            document.getElementById("experiencedSkills").className = "col-md-2 text-center";
            document.getElementById("learningSkills").className = "col-md-2 text-center";
            console.log('EP & LEP & ELP');
        }
        

	} else {
		showProfSkills.style.display = 'none';
        console.log('no P');

       
    //     if (showExpSkills.style.display != 'block') {

    //         if (showLearnSkills.style.display != 'block') {
    //             console.log('hi');

    //         } else {
    //             document.getElementById("learningSkills").className = "col-md-offset-7 text-center";
    //         }
    //     } else {
    //         document.getElementById("experiencedSkills").className = "col-md-offset-5 text-center";
    //         document.getElementById("learningSkills").className = "col-md-2 text-center";
    //     }
    }        
            
              
       
	
});


// handle E
// check for P and L
document.getElementById("experiencedBtn").addEventListener("click", function(){
console.log("experienced");

    if (showExpSkills.style.display != 'block') {
            showExpSkills.style.display = 'block';

            // check for P
            // no P
            if (showProfSkills.style.display != 'block') {
                // check for L
                // no L
                if (showLearnSkills.style.display != 'block') {
                    document.getElementById("experiencedSkills").className = "col-md-offset-5 col-md-2 text-center";
                    console.log('E')
              
                // yes L
               } else {
                    document.getElementById("learningSkills").className = "col-md-2 text-center";
                    document.getElementById("experiencedSkills").className = "col-md-offset-5 col-md-2 text-center";
                    console.log('LE')
               }
             
             // yes P  
            } else {
                document.getElementById("proficientSkills").className = "col-md-offset-3 col-md-2 text-center";
                document.getElementById("experiencedSkills").className = "col-md-2 text-center";
                document.getElementById("learningSkills").className = "col-md-2 text-center";
                console.log('PLE & LPE')
            }

    // no E    
	} else {
		showExpSkills.style.display = 'none';
        console.log('no E');

        // check if P
        // check if L
        // *** onliy need to check for L. P styling will not change on E unclick
	}
});


// handle L
document.getElementById("learningBtn").addEventListener("click", function(){
console.log("learning");

    // check if L
    if (showLearnSkills.style.display != 'block') {
        // L
        showLearnSkills.style.display = 'block'; 
    
        // check if E
        if (showExpSkills.style.display != 'block') {
            console.log('nope, E is not here');
            // no E
            // check if P
            if (showProfSkills.style.display != 'block') {
                console.log('nope, P is not here');
            // no P
                document.getElementById("learningSkills").className = "col-md-offset-7 text-center";
                console.log('L');
            
            // P
            } else {
                
            document.getElementById("proficientSkills").className = "col-md-offset-3 col-md-2 text-center";
            document.getElementById("learningSkills").className = "col-md-offset-2 col-md-2 text-center";
            console.log('PL');
            } 

        // E
        } else {

            // check if P
            if (showProfSkills.style.display != 'block') {

            // no P
            document.getElementById("experiencedSkills").className = "col-md-offset-5 col-md-2 text-center";
            document.getElementById("learningSkills").className = "col-md-2 text-center";
            console.log('EL');
            // if proficient is unclicked, this still showing   
    

            } else {
                document.getElementById("proficientSkills").className = "col-md-offset-3 col-md-2 text-center";
                document.getElementById("experiencedSkills").className = "col-md-2 text-center";
                document.getElementById("learningSkills").className = "col-md-2 text-center";
                console.log('PEL & EPL');
            }   
        }
    

    } else {
        showLearnSkills.style.display = 'none';
        console.log('no L');

        // check if P
        // check if E
        // *** don't need to do either, styling doesn't change for either when L is unclicked
    }

});



