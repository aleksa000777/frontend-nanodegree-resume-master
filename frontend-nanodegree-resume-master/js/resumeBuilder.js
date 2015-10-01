/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Aleksandra Matiyev");
//var awesomeThoughts = "I am Sasha and i am AWESOME!"
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//console.log(funThoughts);
//$("#main").append(funThoughts);
//var name = "Aleksandra Matiyev";
//var role = "Web Developer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

//$("#header").prepend(formattedName);
//$("#header").append(formattedRole);
$("#mapDiv").append(googleMap);
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';
var bio = {
	"name" : "Aleksandra Matiyev",
	"role" : "Web Developer",
	"welcomeMessage" : 'A dream becomes a goal when action is taken toward its achievement', 
	"image" : "images/aleksa.jpg",
	"contacts" : [{
		"mobile" : "917-724-7948",
		"skype" : "aleksa000777", 
		"location" : "New York",
		"email" : "aleksamatiyev@gmail.com",
		"github" : "aleksa000777"
	}],	
	"skills" : ["CSS","Angular","Rubi", "javascript" , "HTML", ""]
};


var work = {
    "jobs": [
    {
    	"employer": "The Dosing System",
    	"title": "manager",
    	"location": 'Moscow',
    	"dates": "2008-2009",
    	"description": "make documents, call custumers, office assistant"
    },
    {
    	"employer": "MSOU",
    	"title": "secretary",
    	"location": 'Moscow',
    	"dates": "2009-2012",
    	"description": "work with students and teachers, timetable, scholarship"
    }]
};

var projects = {
	"project": [
		{
			"title": "big apple",
			"dates": "2014-2015",
			"description": "make a big apple",
			"images": ["images/apple.jpg"]
		},
		{
			"title": "nice dog",
			"dates": "2005",
			"description": "love dogs",
			"images": ["images/dog.jpg"]
		}
	]
};
var education = {
	"schools": [
		{
			"name": "412",
			"location": 'Moscow',
			"degree": "higth school",
			"majors": "mathematic",
			"dates": "1996 - 2007",
			"url": "http://www.google.com"
		},
		{
			"name": "MSOU",
			"location": 'Moscow',
			"degree": "bachalor",
			"majors": "mathematic, system programmer",
			"dates": "2007-2012",
			"url": "http://www.mail.ru"
		}
			  ],
	
	"onlineCourses": [
			{
				"title": "javascript basic",
				"school": "Codecademy",
				"dates": 2014,
				"url": "http://www.codecademy.com"
			},
			{
				"title": "front-end development",
				"school": "Codeschool",
				"dates": "2014-2015",
				"url": "http://www.codeschool.com"
			}
	]

};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage, formattedMessage);
	$("#header").append(HTMLskillsStart);
    


	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		var formattedGithub =  HTMLgithub.replace("%data%",bio.contacts[contact].github);
		//$("#topContacts").append(formattedMobile,formattedEmail,formattedGithub,formattedTwitter,formattedLocation);
		$("#topContacts").append(formattedMobile,formattedEmail, formattedGithub);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype,formattedGithub);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}


$("#education").append(HTMLonlineClasses);
          for (var course in education.onlineCourses) {
			 
			  $("#education").append(HTMLschoolStart);
                  var formattedonlineTitle =HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
                  var formattedonlineSchool =HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
                  var formattedonlineDate =
                  HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
                  var formattedURL =HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
                 $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool,formattedonlineDate,formattedURL);
                }
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
		

		
	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);



$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);

});
