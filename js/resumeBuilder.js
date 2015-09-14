/* Define all biography information */
var bio = {
    'name': 'Beth Pearson',
    'role': 'Front End Developer',
    'contacts': {
        'mobile': '847-555-1234',
        'email': 'bethpearson@comcast.net',
        'github': 'bapearson',
        'twitter': 'none',
        'linkedin': 'https://www.linkedin.com/in/bethpearson',
        'location': 'Chicago, IL'
    },
    'welcomeMessage': 'I am a career software developer with '
        + 'full life-cycle experience and a desire to '
        + 'create intuitive user interfaces.',
    'skills': [
        'C#', '.NET', 'WPF', 'HTML', 'JavaScript',
        'Agile', 'Scrum',
        'desktop applications', 'web applications'
    ],
    'tools': [
        'MS Visual Studio', 'VSS', 'ClearCase',
        'Perforce', 'GitHub'
    ],
    'industries': [
        'Medical', 'Manufacturing','Consulting'
    ],
    'biopic': 'images/me.jpg',

    // declare function to display bio information
    'display': function() {
        // Display name and role at top
        var formattedName = HTMLheaderName.replace(
            '%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace(
            '%data%', bio.role);
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);

        // Format contact info
        var formattedMobile = HTMLmobile.replace(
            '%data%', bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(
            '%data%', bio.contacts.email);
        var formattedGitHub = HTMLgithub.replace(
            '%data%', bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace(
            '%data%', bio.contacts.twitter);
        var formattedLinkedIn = HTMLcontactGeneric.replace(
            '%data%', bio.contacts.linkedin);
        formattedLinkedIn = formattedLinkedIn.replace(
            '%contact%', 'LinkedIn');
        var formattedLocation = HTMLlocation.replace(
            '%data%', bio.contacts.location);

        // Change label text from orange to reddish
        formattedMobile = formattedMobile.replace(
            'orange-text', 'reddish-text');
        formattedEmail = formattedEmail.replace(
            'orange-text', 'reddish-text');
        formattedGitHub = formattedGitHub.replace(
            'orange-text', 'reddish-text');
        formattedTwitter = formattedTwitter.replace(
            'orange-text', 'reddish-text');
        formattedLinkedIn = formattedLinkedIn.replace(
            'orange-text', 'reddish-text');
        formattedLocation = formattedLocation.replace(
            'orange-text', 'reddish-text');

        // Add contact info at top of page
        $('#topContacts').append(formattedMobile);
        $('#topContacts').append(formattedEmail);
        $('#topContacts').append(formattedGitHub);
        $('#topContacts').append(formattedTwitter);
        $('#topContacts').append(formattedLinkedIn);
        $('#topContacts').append(formattedLocation);

        // Also add contact info to bottom of page
        $('#footerContacts').append(formattedMobile);
        $('#footerContacts').append(formattedEmail);
        $('#footerContacts').append(formattedGitHub);
        $('#footerContacts').append(formattedTwitter);
        $('#footerContacts').append(formattedLinkedIn);
        $('#footerContacts').append(formattedLocation);

        // Add profile photo
        var formattedBioPic = HTMLbioPic.replace(
            '%data%', bio.biopic);
        formattedBioPic = formattedBioPic.replace(
            'biopic', 'bio-pic');
        formattedBioPic = formattedBioPic.replace(
            '>', ' alt="Profile photo">');
        $('#header').append(formattedBioPic);

        // Add welcome message
        var formattedWelcome = HTMLwelcomeMsg.replace(
            '%data%', bio.welcomeMessage);
        $('#header').append(formattedWelcome);

        if (bio.skills.length > 0) {
            // Add 'skills-h3' class before adding HTMLskillsStart
            var newHTMLskillsStart = HTMLskillsStart.replace(
                '>Skills', ' class="skills-h3">Skills');

            // Add Skills section
            $('#header').append(newHTMLskillsStart);

            // Add each skill
            for (var i = 0; i < bio.skills.length; i++) {
                $('#skills').append(HTMLskills.replace(
                    '%data%', bio.skills[i]));
            }
        }

        if (bio.tools.length > 0) {
            // Add developer tools section
            var HTMLtoolsStart = '<h3 class="skills-h3">Developer Tools:</h3><ul id="tools" class="flex-box"></ul>';
            $('#header').append(HTMLtoolsStart);

            // Add each developer tool
            for (var i = 0; i < bio.tools.length; i++) {
                $('#tools').append(HTMLskills.replace(
                    '%data%', bio.tools[i]));
            }
        }

        if (bio.industries.length > 0) {
            // Add industries section
            var HTMLindustriesStart = '<h3 class="skills-h3">Industries:</h3><ul id="industries" class="flex-box"></ul>';
            $('#header').append(HTMLindustriesStart);

            // Add each industry
            for (var i = 0; i < bio.industries.length; i++) {
                $('#industries').append(HTMLskills.replace(
                    '%data%', bio.industries[i]));
            }
        }
    }
};

// Define all work (job) information
var work = {
    'jobs': [
        {
            'employer': 'Otometrics',
            'title': 'Software Engineer',
            'location': 'Schaumburg, IL',
            'dates': '2007 - 2014',
            'description': 'Worked on software to collect and display results '
                + 'from testing patients for hearing and balance disorders.'
        },
        {
            'employer': 'Agiletek',
            'title': 'Sr. Software Developer',
            'location': 'Des Plaines, IL',
            'dates': '2004 - 2007',
            'description': 'Created web applications using C# and ASP.NET for '
                + 'a variety of clients.'
        },
        {
            'employer': 'Weber Packaging Solutions',
            'title': 'Sr. Software Engineer',
            'location': 'Arlington Heights, IL',
            'dates': '2002 - 2004',
            'description': 'Worked on software with WYSIWYG interface for '
                + 'designing and printing custom labels.'
        },
        {
            'employer': 'Geneer (formerly RDI Software)',
            'title': 'Senior Software Developer',
            'location': 'Des Plaines, IL',
            'dates': '1996 - 2001',
            'description': 'Worked as a software consultant on a variety of software'
                + ' applications for industries such as medical and manufacturing.'
        }
    ],

    // declare function to display work (jobs) information
    'display': function () {
        for (var job = 0; job < work.jobs.length; job++) {
            // Add next employer section
            $('#workExperience').append(HTMLworkStart);

            // Add employer name and the job title
            var employer = HTMLworkEmployer.replace(
                '%data%', work.jobs[job].employer);
            var title = HTMLworkTitle.replace(
                '%data%', work.jobs[job].title);
            $('.work-entry:last').append(employer + title);

            // Add employer location
            var jobLocation = HTMLworkLocation.replace(
                '%data%', work.jobs[job].location);
            $('.work-entry:last').append(jobLocation);

            // Add dates worked at this job
            var dates = HTMLworkDates.replace(
                '%data%', work.jobs[job].dates);
            $('.work-entry:last').append(dates);

            // Add brief description of job
            var description = HTMLworkDescription.replace(
                '%data%', work.jobs[job].description);
            $('.work-entry:last').append(description);
        }
    }
};

// Define all project information
var projects = {
    'projects': [
        {
            'title': 'Project 2',
            'dates': '2015',
            'description': 'Another project',
            'images': [
                'images/fry.jpg',
                'images/fry.jpg'
            ]
        },
        {
            'title': 'Project 1',
            'dates': '2014',
            'description': 'Some project',
            'images': [
                'images/fry.jpg',
                'images/fry.jpg'
            ]
        }
    ],

    // declare function to display projects information
    'display': function() {
        for (var i = 0; i < projects.projects.length; i++) {
            // Add next Projects section
            $('#projects').append(HTMLprojectStart);

            // Add project title
            var title = HTMLprojectTitle.replace(
                '%data%', projects.projects[i].title);
            $('.project-entry:last').append(title);

            // Add dates of project
            var dates = HTMLprojectDates.replace(
                '%data%', projects.projects[i].dates);
            $('.project-entry:last').append(dates);

            // Add brief description of project
            var description = HTMLprojectDescription.replace(
                '%data%', projects.projects[i].description);
            $('.project-entry:last').append(description);

            // Since images is an array, loop through
            var images = projects.projects[i].images;
            for (imageUrl in images) {
                // Add each project image
                var image = HTMLprojectImage.replace(
                    '%data%', images[imageUrl]);
                image = image.replace(
                    '>', ' alt="Project photo">');
                $('.project-entry:last').append(image);
            }
        }
    }
};

// Define all education information
var education = {
    'schools': [
        {
            'name': 'Bradley University',
            'location': 'Peoria, IL',
            'degree': 'Bachelor of Science',
            'majors': [
                'Electrical Engineering'
            ],
            'dates': '1990',
            'url': 'http://www.bradley.edu'
        }
    ],
    'onlineCourses': [
        {
            'title': 'Front End Web Developer Nanodegree',
            'school': 'Udacity',
            'date': '2016',
            'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        },
        {
            'title': 'JavaScript Language',
            'school': 'Code School',
            'date': '2015',
            'url': 'https://www.codeschool.com/paths/javascript'
        }
    ],

    // declare function to display education information
    'display': function() {
        for (var i = 0; i < education.schools.length; i++) {
            // Add next School section
            $('#education').append(HTMLschoolStart);

            // Add name of school and degree
            var schoolName = HTMLschoolName.replace(
                '%data%', education.schools[i].name);
            schoolName = schoolName.replace(
                '#', education.schools[i].url);
            var schoolDegree = HTMLschoolDegree.replace(
                '%data%', education.schools[i].degree);
            $('.education-entry:last').append(
                schoolName + schoolDegree);

            // Add location of school
            var schoolLocation = HTMLschoolLocation.replace(
                '%data%', education.schools[i].location);
            $('.education-entry:last').append(schoolLocation);

            // Add dates attended
            var schoolDates = HTMLschoolDates.replace(
                '%data%', education.schools[i].dates);
            $('.education-entry:last').append(schoolDates);

            // Add school major
            var schoolMajor = HTMLschoolMajor.replace(
                '%data%', education.schools[i].majors[0]);
            $('.education-entry:last').append(schoolMajor);
        }

        // Add all online courses
        $('#education').append('<br>'); // some white space
        $('#education').append(HTMLonlineClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
            // Add next Online Course section
            $('#education').append(HTMLschoolStart);

            // Add online course title and school name
            var onlineTitle = HTMLonlineTitle.replace(
                '%data%', education.onlineCourses[i].title);
            onlineTitle = onlineTitle.replace(
                '#', education.onlineCourses[i].url);
            var onlineSchool = HTMLonlineSchool.replace(
                '%data%', education.onlineCourses[i].school);
            $('.education-entry:last').append(onlineTitle + onlineSchool);

            // Add dates of taking the course
            var onlineDates = HTMLonlineDates.replace(
                '%data%', education.onlineCourses[i].date);
            $('.education-entry:last').append(onlineDates);

            // Add URL of school or course info
            var onlineUrl = HTMLonlineURL.replace(
                '%data%', education.onlineCourses[i].url);
            onlineUrl = onlineUrl.replace(
                '#', education.onlineCourses[i].url);
            $('.education-entry:last').append(onlineUrl);

            $('#education').append('<br>'); // some white space
        }
    }
};

// Now display biography, skills, work history, projects and education
bio.display();
work.display();
projects.display();
education.display();

// Add an internationalize button
function inName() {
    var oldName = $('#name').html();
    var names = oldName.trim().split(' ');
    names[0] = names[0].slice(0,1).toUpperCase() +
        names[0].slice(1).toLowerCase();
    names[1] = names[1].toUpperCase();
    return names[0] + ' ' + names[1];
}

$('.main').append(internationalizeButton);

// Add a map of all listed locations
googleMap = googleMap.replace('>', ' class="map">');
$('.mapDiv').append(googleMap);