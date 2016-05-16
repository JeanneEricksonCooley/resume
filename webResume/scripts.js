// create skills sections that fade in when button is clicked

// create event listener for buttons
// fade in div with skills on click



document.getElementById("proficientBtn").addEventListener("click", function(){
    console.log("proficient");
    var showSkills = document.getElementById("proficientSkills");
    if (showSkills.style.display != 'block') {
    	showSkills.style.display = 'block'; 
	} else {
		showSkills.style.display = 'none';
	}
});

document.getElementById("experiencedBtn").addEventListener("click", function(){
    console.log("experienced");
    var showSkills = document.getElementById("experiencedSkills");
    if (showSkills.style.display != 'block') {
    	showSkills.style.display = 'block'; 
	} else {
		showSkills.style.display = 'none';
	}
});

document.getElementById("learningBtn").addEventListener("click", function(){
    console.log("learning");
    var showSkills = document.getElementById("learningSkills");
    if (showSkills.style.display != 'block') {
    	showSkills.style.display = 'block'; 
	} else {
		showSkills.style.display = 'none';
	}
});

