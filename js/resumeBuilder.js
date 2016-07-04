/* Comments included to help myself read the code easier and to remind myself what is necessary for project submission.
*/

/*
Build four javaScript objects, each one representing a different resume section. The objects that you create (including property names and the data types of their values) need to follow the schema below exactly. All properties should be included and contain a value of the type specified unless the property is marked 'optional'. Property values may contain real or fake data. Property names are case-sensitive. Make sure your javaScript objects are formatted correctly using jshint.com.
*/
var data = "%data%";
var url = "%url%";

// Bio JavaScript object
var bio = {
  "name" : "Jaemz Graciano",
  "role" : "Front-End Padawan",
  "contacts" : [{
       "mobile" : "(+62) 812-1234-5678",
       "email" : "jaemz.graciano@gmail.com",
       "github" : "naga05",
       "twitter" : "@JaemzGraciano",
       "location" : "Jakarta, Indonesia"
   }],
   "welcomeMessage" : "\"We are all in the gutter, but some of us are looking at the stars\"" + " – Oscar Wilde",
   "skills" : ["video production", "video editing", "video transcription", "HTML", "CSS", "jQuery"],
   "bioPic" : "images/jaemz.jpg",

  display: function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedbioPic = HTMLbioPic.replace(data, bio.bioPic);
    var formattedwelcomeMessage = HTMLwelcomeMessage.replace(data, bio.welcomeMessage);
      $('#header').prepend(formattedRole).prepend(formattedName).append(formattedbioPic, formattedwelcomeMessage);

      if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
          bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace(data, skill);
              $("#skills").append(formattedSkill);
  });

  bio.contacts.forEach(function(contact) {
    var formattedMobile = HTMLmobile.replace(data, contact.mobile);
    var formattedEmail = HTMLemail.replace(data, contact.email);
    var formattedGithub = HTMLgithub.replace(data, contact.github);
    var formattedLocation = HTMLlocation.replace(data, contact.location);
    var formattedTwitter = HTMLtwitter.replace(data, contact.twitter);
      $('#footerContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
      $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
    });
  }
}
};
bio.display();

// Work JavaScript object
var work = {
    "jobs" : [
      {
        "employer" : "Amara",
        "title" : "video transcriptionist",
        "location" : "online",
        "dates" : "May 20XX",
        "description" : "Bacon ipsum dolor amet strip steak spare ribs tempor cupidatat kevin biltong andouille pork."
      },
      {
        "employer" : "HappyFriends Production",
        "title" : "video editor & location manager",
        "location" : "Jakarta, Indonesia",
        "dates" : "September 20XX",
        "description" : "Turducken meatloaf nulla, tempor consequat sirloin id spare ribs swine labore adipisicing commodo sint."
      },
      {
        "employer" : "Filmquip Media",
        "title" : "camera & VT trainee",
        "location" : "Dubai, UAE",
        "dates" : "May 20XX",
        "description" : "Cow in t-bone leberkas, anim turkey boudin ad elit. Tempor biltong mollit, sed pork tenderloin pork chop shank."
      },
      {
        "employer" : "houseofwaves Productions",
        "title" : "video editor",
        "location" : "Jakarta, Indonesia",
        "dates" : "April 20XX",
        "description" : "Cow kielbasa ribeye commodo non est sirloin. Cow lorem culpa beef, leberkas turducken tri-tip ham pastrami quis flank sirloin."
      }],
  display: function() {
    work.jobs.forEach(function(job) {
      $('#workExperience').append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
    var formattedTitle = HTMLworkTitle.replace(data, job.title);
    var formattedLocation = HTMLworkLocation.replace(data, job.location);
    var formattedDates = HTMLworkDates.replace(data, job.dates);
    var formattedDescription = HTMLworkDescription.replace(data, job.description);

      $('.work-entry:last').append(formattedEmployer + formattedTitle, formattedLocation, formattedDates,formattedDescription);
    });
  }
};
work.display();

// Projects JavaScript object
var projects = {
    "projects" : [{
        "title" : "Online R&eacute;sum&eacute;",
        "dates" : "Present",
        "description" : "R&eacute;sum&eacute; project for Udacity" +
        " FEND Nanodegree",
// Placeholder images from loremflickr.com
        "images" : [
                      "http://loremflickr.com/320/240/cats",
                      "http://loremflickr.com/320/240/dogs",
                      "http://loremflickr.com/320/240/rabbits"
                    ]
                },
                {
        "title" : "Portfolio page",
        "dates" : "May 2016",
        "description" : "Portfolio page for Udacity FEND Nanodegree",
        "images" : [
                      "http://loremflickr.com/320/240/kittens",
                      "http://loremflickr.com/320/240/puppies",
                      "http://loremflickr.com/320/240/cubs"
                    ]
                }],
    display: function() {
      projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace(data, project.title);
      var formattedDates = HTMLprojectDates.replace(data, project.dates);
      var formattedDescription = HTMLprojectDescription.replace(data, project.description);
        $('.project-entry:last').append(formattedTitle, formattedDates, formattedDescription);

    if (project.images.length > 0) {
        project.images.forEach(function(image) {
      var formattedImage = HTMLprojectImage.replace(data, image);
        $('.project-entry:last').append(formattedImage);
        });
      }
    });
  }
};
projects.display();

// Education JavaScript object
var education = {
    "schools" : [
      {
        "name" : "New York Film Academy (NYFA)",
        "location" : "Abu Dhabi, UAE",
        "degree" : "General Filmmaking Diploma",
        "major" : "Film",
        "dates" : "20XX",
        "url" : "https://www.facebook.com/ADNYFA/"
      },
      {
        "name" : "Chapman University",
        "location" : "Orange County, California",
        "degree" : "Bachelor\'s Degree",
        "major" : "Film",
        "dates" : "20XX",
        "url" : "https://www.chapman.edu/"
      }],
    "onlineCourses" : [
      {
        "title" : 'Front-End Web Developer Nanodegree',
        "school" : 'Udacity',
        "dates" : "2016",
        "url" : "https://www.udacity.com/course/nd001"
      },
      {
        "title" : "Apple Certified Pro – FCP 7 (replaced with FCP X)",
        "school" : "Apple",
        "dates" : "20XX",
        "url" : "http://training.apple.com/certification/proapps"
      }],

display: function() {
		  $('#education').append(HTMLschoolStart);

  education.schools.forEach(function(school) {
		var formattedName = HTMLschoolName.replace(data, school.name);
		var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
		var formattedDates = HTMLschoolDates.replace(data, school.dates);
		var formattedLocation = HTMLschoolLocation.replace(data, school.location);
		var formattedMajor = HTMLschoolMajor.replace(data, school.major);
		  $('.education-entry:last').append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	});

      $('#education').append(HTMLonlineCourses);

  education.onlineCourses.forEach(function(course) {
		  $('#education').append(HTMLonlineStart);
//    var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[course].url);
    var formattedonlineTitle = HTMLonlineTitle.replace(data, course.title).replace(url, course.url);
    var formattedonlineSchool = HTMLonlineSchool.replace(data, course.school);
    var formattedonlineDates = HTMLonlineDates.replace(data, course.dates);
      $('.online-entry:last').append(formattedonlineTitle + formattedonlineSchool, formattedonlineDates);
    });
  }
};
education.display();

// Internationalize the name

function inName(name){
	  console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
}

$('#header').append(internationalizeButton);
$('#mapDiv').append(googleMap);
