  var treeData =
    {
     "name": "Start",
     "children": [
      { // TOP level
       "name": "What is Data Science?",
       "comment": "Explore introductory concepts describing the opportunities & challenges of data science", 
       "children": [
		{ // 2nd level
			"name": "What is Data Science? (Coursera)", "comment": "6-hour course describing essential concepts - can audit for free", "url": "https://www.coursera.org/learn/what-is-datascience"
		},
        { // 2nd level
         "name": "Webinars",
         "children": [
          {"name": "ANIA: Data Science in Healthcare", "comment": "Describes data science & compares to other data-focused roles", "url": "https://www.ania.org/data-science-healthcare-nursing-informatics-perspective"},
          {"name": "ANIA: A Day in the Life (of a Nurse Data Scientist)", "comment": "Covers examples & daily routines of a nurse informaticist engaged in data science", "url": "https://library.ania.org/ania/sessions/959/view"},
		  {"name": "University of Minnesota", "comment": "Contains several CE webinars focused on nursing informatics & data science", "url": "https://www.nursing.umn.edu/outreach/nursing-informatics-education-and-resources"},
         ]
        },
        { // 2nd level
         "name": "Brief Reads",
         "children": [
          {"name": "Data Science for Beginners", "comment": "Posted in TowardDataScience, which contains many helpful blogs & tutorials", "url": "https://towardsdatascience.com/data-science-for-beginners-850c3376a34a"},
          {"name": "What is Data Science?", "comment": "More comprehensive overview, including history, examples, & contemporary concepts", "url": "https://www.thinkful.com/blog/what-is-data-science/"},
		  {"name": "Data Science for Healthcare", "comment": "Healthcare-focused review of the role of data science", "url": "https://www.healthcatalyst.com/data-science-healthcare-what-leaders-must-know"},
		  {"name": "Challenges & Opportunities in Nursing Data Science", "comment": "Brief definition of data science provided by Dr. Jeffery (published in CIN)", "url": "https://www.ncbi.nlm.nih.gov/pubmed/30624261"},
         ]
        }
       ]
      },
      { // TOP level
       "name": "Learn Specific Skills",
       "comment": "For acquiring specific skills like SQL queries or Python programming",
       "children": [
        { // 2nd level
         "name": "Data Collection (SQL)",
		 "comment": "Learn how to collect/retrieve data from databases",
         "children": [
          {"name": "Coursera - all SQL courses", "comment": "Multiple courses for learning SQL", "url": "https://www.coursera.org/courses?query=sql&indices%5Bprod_all_products_custom_ranking_revenuelast28d%5D%5BrefinementList%5D%5Bskills%5D%5B0%5D=Sql&indices%5Bprod_all_products_custom_ranking_revenuelast28d%5D%5Bpage%5D=1&indices%5Bprod_all_products_custom_ranking_revenuelast28d%5D%5Bconfigure%5D%5BclickAnalytics%5D=true&indices%5Bprod_all_products_custom_ranking_revenuelast28d%5D%5Bconfigure%5D%5BhitsPerPage%5D=10&configure%5BclickAnalytics%5D=true"},
          {"name": "Coursera - SQL for Data Science", "comment": "Popular SQL course. ~20 hours to complete. Can audit for free", "url": "https://www.coursera.org/learn/sql-for-data-science"},
		  {"name": "DataCamp - SQL Fundamentals", "comment": "4-course track to learn SQL. Paid subscription required.", "url": "https://www.datacamp.com/tracks/sql-fundamentals"},
		  {"name": "W3Schools", "comment": "Free, self-paced tutorials with practice examples", "url": "https://www.w3schools.com/sql/default.asp"},
		  {"name": "Software Carpentry", "comment": "Free, self-paced tutorial. Can be delivered as in-person workshop.", "url": "http://swcarpentry.github.io/sql-novice-survey/"},
         ]
        },
        { // 2nd level
         "name": "Data Analysis (Theory & Programming)",
		 "comment": "Learn how to anlyze data, develop models, make predictions, & visualize results",
         "children": [
			 { // 3rd level
				 "name": "Online - Coursera",
			  	 "comment": "An online learning environment with courses in many fields (not just data science) - can audit all courses for free", 
			  	 "children": [ 
				  {"name": "Data Science Specialization (Johns Hopkins University)", "comment": "10-course (~8 months) comprehensive curriculum (R-based)", "url": "https://www.coursera.org/specializations/jhu-data-science"},
				  {"name": "Data Science Specialization (University of Michigan)", "comment": "5-course (~5 months) introductory curriculum (Python-based)", "url": "https://www.coursera.org/specializations/data-science-python"},
				  {"name": "Popular Data Science Courses", "comment": "2018's most popular courses, according to Coursera", "url": "https://www.coursera.org/collections/popular-data-science-courses-2018"},
			  ]
		  	 },
             { // 3rd level
                 "name": "Online - Other", 
				 "comment": "Free & paid online resources", 
                 "children": [
		   		     {"name": "DataCamp", "comment": "Covers all aspects of data science. Includes individual courses & entire tracks. Paid subscription required.", "url": "https://www.datacamp.com"},
		   		  	 {"name": "DataQuest", "comment": "Can learn Python, R, SQL, & theory via interactive exercise. Paid subscription required.", "url": "https://www.dataquest.io"},
		   		  	 {"name": "Introduction to Statistical Learning (Stanford)", "comment": "Free, self-paced course covering statistical & machine learning techniques. (Uses R)", "url": "https://online.stanford.edu/courses/sohs-ystatslearning-statistical-learning-self-paced"},
					 {"name": "Metacademy", "comment": "Search for specific concepts (e.g., 'random forests') to find multiple learning activities", "url": "https://metacademy.org"},
					 {"name": "Udemy - Python for Data Science and Machine Learning Bootcamp", "comment": "Comprehensive, applied curriculum for Python & SQL. Paid subscription required.", "url": "https://www.udemy.com/python-for-data-science-and-machine-learning-bootcamp"}, 
					 {"name": "Other Options", "comment": "Blog description of popular online data science learning options", "url": "https://www.learndatasci.com/best-data-science-online-courses/"},
		             
				 ]
             },
             { // 3rd level
                 "name": "In-Person Workshops", 
				 "comment": "Immersive experiences in a physical location",
                 "children": [
					 {"name": "Hands-On Data Science Introduction (Minneapolis)", "comment": "Offered as a full-day pre-conference at the Nursing Knowledge: Big Data Science Conferece", "url": "https://www.nursing.umn.edu/centers/center-nursing-informatics/news-events/2019-nursing-knowledge-big-data-science-conference"},
                     {"name": "Data Visualization & Analytics Bootcamp (Minneapolis)", "comment": "24-week, comprehensive data science workshop (not healthcare specific)", "url": "https://bootcamp.umn.edu/data/"},
                 ]
             } 
		 ]
	    },
		{ // 2nd level
         "name": "Software",
		 "comment": "Commonly used software applications for data science",
         "children": [
          {"name": "Python Software", "comment": "Data Science application of choice for most data scientists. (Free, open-source)", "url": "https://www.python.org"},
		  {"name": "R Software", "comment": "2nd most common data science software. Used by many statisticians. (Free, open-source)", "url": "https://www.r-project.org"},
		  {"name": "Software Carpentry", "comment": "Free, self-paced tutorials for common software applications (e.g., Python, R, SQL, Git, command line)", "url": "https://software-carpentry.org"},
         ]
	    },
        { // 2nd level
         "name": "Leading & Working on Teams",
	     "comment": "Contribute to data science projects, regardless of your theoretical or programming knowledge",
         "children": [
         	{"name": "Coursera - Executive Data Science Specialization", "comment": "4-courses related to helping you effectively lead data science teams - can audit individual courses for free", "url": "https://www.coursera.org/specializations/executive-data-science"},
	  	  	{"name": "How to Structure a Data Science Team", "comment": "Considerations for models & roles of data science teams", "url": "https://www.altexsoft.com/blog/datascience/how-to-structure-data-science-team-key-models-and-roles/"},
			{"name": "Data Science for Healthcare", "comment": "Healthcare-focused review of the role of data science", "url": "https://www.healthcatalyst.com/data-science-healthcare-what-leaders-must-know"},
        ]
       },
	   { // 2nd level
		 "name": "How to Learn Data Science (YouTube)", "comment": "30-minute overview of general approach to learning data science (sponsored by DataQuest)", "url": "https://www.youtube.com/watch?v=Ura_ioOcpQI"
	   }, 
       ]
      },
      { // TOP level
          "name": "Become a Data Scientist",
          "comment": "For those wanting to pursue a full program", 
          "children": [
              { // 2nd level
                  "name": "Online",
                  "children": [
                      {"name": "Coursera (Multiple Courses & Specializations, Free or Paid)", "url": "https://www.coursera.org/courses?query=data%20science&"},
                      {"name": "Coursera (Master's Degrees, Paid)", "url": "https://www.coursera.org/courses?query=data%20science%20master%27s%20degree&"},
                      {"name": "Data Quest (Paid)", "url": "https://www.dataquest.io"},
               ]
              },
              { // 2nd level
                  "name": "In-Person",
                  "children": [
                    { // 3rd level
                        "name": "Master's Degrees", 
                        "children": [
                            {"name": "Vanderbilt University", "url": "https://www.vanderbilt.edu/datascience/"},
                            {"name": "University of Minnesota", "url": "https://datascience.umn.edu"},
                        ]
                    },
                    { // 3rd level
                        "name": "Immersion Experiences", 
                        "children": [
                            {"name": "Data Incubator", "url": "https://www.thedataincubator.com"},
                            {"name": "Insight Health Data Fellows Program", "url": "https://www.insighthealthdata.com"},
                        ]
                    }
               ]
              },
          ]
      },
	  { // TOP level
		  "name": "Other Resources", 
		  "comment": "General resources for all audiences", 
		  "children": [
	          { // 2nd level
	           "name": "Conferences",
	  		 "comment": "Many informatics-focused conferences now offer workshops to help learn data science skills",
	           "children": [
	            {"name": "Nursing Knowledge: Big Data Science", "url": "https://www.nursing.umn.edu/centers/center-nursing-informatics/news-events/2019-nursing-knowledge-big-data-science-conference"},
	            {"name": "Open Data Science", "url": "https://odsc.com/"}, 
	  		  {"name": "AMIA", "url": "https://www.amia.org "},
	  		  {"name": "MedInfo", "url": "https://imia-medinfo.org/wp/"},
	  		  {"name": "IEEE", "url": "https://www.ieee.org/conferences/index.html"},
	  		  {"name": "Local MeetUps", "url": ""}
	           ]
	          }, // 2nd level
	          {"name": "Journals", 
	  		 "comment": "Biomedical journals that publish data science articles",
	  		 "children": [
	  			{"name": "JAMIA", "url": "https://academic.oup.com/jamia"},
	  			{"name": "ACI (Applied Clinical Informatics)", "url": "https://www.thieme.com/books-main/clinical-informatics/product/4433-aci-applied-clinical-informatics"},
	  			{"name": "JBI (Journal of Biomedical Informatics)", "url": "https://www.journals.elsevier.com/journal-of-biomedical-informatics"},
	  			{"name": "CIN: Computers, Informatics, Nursing", "url": "https://journals.lww.com/cinjournal/pages/default.aspx"}
	  		]
	  		}
		  ]
	  	
	  }
     ]
    }

