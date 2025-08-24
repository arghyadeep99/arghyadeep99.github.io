import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation


// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const illustration = {
  animated: false // set to false to use static SVG
};

const prof_illustration = {
  animated: true // set to false to use static SVG
}

const greeting = {
  username: "Arghyadeep Das",
  title: "Hi, আমি Arghyadeep Das",
  subTitle: emoji(
    "ML Intern @ PayPal | MSCS @ UMass Amherst | Ex-SWE-2 @ Barclays | Aspiring ML/DL Cognoscente"
  ),
  resumeLink:
    "https://drive.google.com/file/d/13Zb83UO3xcAe5PFIajX7N5EnBPYhVt2h/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arghyadeep99",
  linkedin: "https://www.linkedin.com/in/arghyadeep-das/",
  instagram: "https://www.instagram.com/shots_and_shayaris",
  twitter: "https://www.twitter.com/@arghyadeepdas99",
  medium: "https://arghyadeep-das.medium.com/",
  gmail: "arghyadeep1899@gmail.com",
  orcid: "https://orcid.org/0000-0001-7323-3516",
  facebook: "https://www.facebook.com/arghyadeep.d",
  spotify: "https://open.spotify.com/user/31jjxj4nl3whrmo634uns76bqjhi",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Quirky Bits...",
  subTitle: emoji(
    ""
  ),
  skills: [
    emoji("⚡ Astrophile 💫 | Melophile ♫ | Nemophilist 🌳 | Logophile 📖"),
    emoji("⚡ Amateur Pixel photographer! 📸"),
    emoji("⚡ Guilty Pleasure: ERB Videos and Dark Memes 🌚"),
    emoji("⚡ Connoisseur of Pokémon, The Big Bang Theory and The Office! 🏢"),
    emoji("⚡ Love to explore about science, maths, music and nature!"), 
    emoji("⚡ Both you & me were declared 2006 TIMES Person of the Year! ✨")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python3",
      src: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
    },
    {
      skillName: "PyTorch",
      src: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"
    },
    {
      skillName: "Tensorflow",
      src: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
    },
    {
      skillName: "FastAPI",
      src: "https://user-images.githubusercontent.com/33197180/131907258-3844c124-b494-48f8-b834-59295c165ced.png"
    },
    {
      skillName: "Django",
      src: "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"
    },
    {
      skillName: "Flask",
      src: "https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon~v2.svg"
    },
    {
      skillName: "Azure",
      src: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
    },
    {
      skillName: "Docker",
      src: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
    },
    {
      skillName: "Kubernetes",
      src: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
    },
    {
      skillName: "Golang",
      src: "https://www.vectorlogo.zone/logos/golang/golang-official.svg"
    },
    {
      skillName: "Jenkins",
      src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg"
    },
    {
      skillName: "Ansible",
      src: "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg"
    },
    {
      skillName: "Kafka",
      src: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg"
    },
    {
      skillName: "ELK Stack",
      src: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg"
    },
    {
      skillName: "Splunk",
      src: "https://www.vectorlogo.zone/logos/splunk/splunk-icon.svg"
    },
    {
      skillName: "Grafana",
      src: "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg"
    },
    {
      skillName: "OTel",
      src: "https://raw.githubusercontent.com/cncf/artwork/74fb7071ca390c58bd59648bc073bdc2b3752c6a/projects/opentelemetry/icon/color/opentelemetry-icon-color.svg"
    },
    {
      skillName: "Java",
      src: "https://www.vectorlogo.zone/logos/java/java-icon.svg"
    },
    {
      skillName: "Spring Boot",
      src: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
    },
    {
      skillName: "Redis",
      src: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg"
    },
    {
      skillName: "MongoDB",
      src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
    },
    {
      skillName: "Postgres",
      src: "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
    },
    {
      skillName: "React",
      src: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
    },
    {
      skillName: "Git",
      src: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
    },
    {
      skillName: "Linux",
      src: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg"
    },
    /*
    {
      skillName: "NodeJS",
      src: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
    },
    {
      skillName: "C",
      src: "https://camo.githubusercontent.com/d3906162b383f428da6952e9da7cf1467cd4ffda1d90283c83b559272ec977dc/68747470733a2f2f63646e2e69636f6e73636f75742e636f6d2f69636f6e2f667265652f706e672d3531322f632d70726f6772616d6d696e672d3536393536342e706e67"
    },
    {
      skillName: "MS Teams",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Microsoft_Office_Teams_%282018%E2%80%93present%29.svg"
    },
    {
      skillName: "GCloud",
      src: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
    },
    {
      skillName: "AWS",
      src: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
    },
    {
      skillName: "OpenShift",
      src: "https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg"
    },
    {
      skillName: "MATLAB",
      src: "https://camo.githubusercontent.com/a240bd1934154469afd73f16cdd1def3c652f4c029758d1d20ea40823371e874/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f322f32312f4d61746c61625f4c6f676f2e706e672f36363770782d4d61746c61625f4c6f676f2e706e67"
    },
    {
      skillName: "Neo4j",
      src: "https://www.vectorlogo.zone/logos/neo4j/neo4j-icon.svg"
    },
    {
      skillName: "Heroku",
      src: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
    },
    {
      skillName: "W&B",
      src: "https://user-images.githubusercontent.com/33197180/131908148-17df8931-32ab-45fe-ba10-e665d271127e.png"
    },
    */
  ], 
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Massachusetts, Amherst",
      logo: require("./assets/images/umassLogo.png"),
      subHeader: "Masters of Science in Computer Science (MSCS)",
      duration: "August 2024 - Present",
      desc: "CGPA: 4.0/4.0",
      descBullets: [
        "Current Courses: ",
        "Reinforcement Learning (COMPSCI687)",
        "Trustworthy and Responsible AI (COMPSCI690F)",
        "Statistics (STATS501)",
        "Courses Taken:",
        "Advanced Natural Language Processing (COMPSCI685)",
        "Optimization in Computer Science (COMPSCI651)",
        "Applied Information Retrieval (COMPSCI546)",
        "Advanced Machine Learning (COMPSCI689)",
        "Empirical Research Methods in CS (COMPSCI602)",
        "Systems for Data Science (COMPSCI532)"
      ]
    },
    {
      schoolName: "K. J. Somaiya College of Engineering (KJSCE)",
      logo: require("./assets/images/kjsceLogo.png"),
      subHeader: "Bachelor of Technology in Computer Engineering",
      duration: "August 2017 - July 2021",
      desc: "CGPA: 9.48/10 | Highest GPA: 10/10",
      descBullets: [
        "Worked on my research-based Final Year Project on Transfer Learning to speed-up Reinforcement Learning Training of Atari Games. Research paper presented in an IEEE conference and published in IEEE Explore.",
        "Consistently in top 5% of Computer Department's academic ranklist since First Year",
        "Department Topper in Final Year",
        "Former Lead Mentor and Community Mentor at Somaiya Machine Learning Research Association (SMLRA)",
        "Participated in numerous hackathons and won in some of them",
        "Delivered Placement Pep-Talk for juniors on invitation from college's Placement Cell",
        "Mentored many junior students beginning their journey in Computer Science",
        "College-level Topper Award for highest score in Applied Physics-II and Communication Skills in First Year",
        "First Runner-Up (Computer Department) in inter-department Shield Table Tennis in First Year",
        "Documentation Team Member at KJSCE Outreach Center for Cybersecurity"
      ]
    },
    {
      schoolName: "PACE Junior Science College",
      logo: require("./assets/images/pace.jpg"),
      subHeader: "Higher Secondary Degree (Science)",
      duration: "June 2015 - June 2017",
      desc: "Percentage: 91.69%",
      descBullets: []
    },
    {
      schoolName: "Ryan International School",
      logo: require("./assets/images/ryanLogo.jpeg"),
      subHeader: "Matriculate Degree",
      duration: "April 2007 - May 2015",
      desc: "Percentage: 96.5%",
      descBullets: [
        "Participated and won in multiple school-level competitions",
        "Represented my school in the national-level RBI Quiz",
        "Consistently ranked in top 5 of the school from admission to passing out",
        "Won all-India Kaspersky Essay Writing Competition",
        "Won medals in multiple olympiads like NSO, NCO, IEO, IFO, ICE, etc."
      ]
    }
  ]
};

// Your top proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python3", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning/Deep Learning",
      progressPercentage: "75%"
    },
    {
      Stack: "PyTorch",
      progressPercentage: "85%"
    },
    {
      Stack: "Java",
      progressPercentage: "70%"
    },
    {
      Stack: "Golang",
      progressPercentage: "60%"
    },
    {
      Stack: "MongoDB",
      progressPercentage: "70%"
    },
    {
      Stack: "FastAPI",
      progressPercentage: "50%"
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Intern",
      company: "PayPal",
      companylogo: require("./assets/images/paypal.png"),
      date: "May 2025 - August 2025",
      desc: "",
      descBullets: [
        "Increased merchants' win rates against fraud cases by implementing AI-generated summarization of key evidence in long contestation documents, which sped up fraud analysts' review process.",
        "Improved factual grounding and reduced hallucinations to almost 0% in LLM-generated summaries using LightRAG.",
        "Reduced latency for AI Summary Generation by 10 times to approximately 15 seconds/summary.",
      ]
    },
    {
      role: "Software Development Engineer-2 (BA4)",
      company: "Barclays PLC",
      companylogo: require("./assets/images/barclays.png"),
      date: "December 2022 - August 2024",
      desc: "",
      descBullets: [
        "Worked on the org-wide Observability efforts by leveraging Kafka, NLP, and Elastic stack for application downtime predictions, improving overall system reliability by 30%, and reducing troubleshooting time by 80%.",
        "Designed and implemented the E2E architecture for Kafka Self-Service with Spring Boot and Python, transforming manual Kafka admin operations into automated customer self-service and reducing onboarding time by 90%.",
        "Led the design and development of a plug-and-play automation workflow controller using Python, Kafka, and Redis, reducing costs by 80% by eliminating proprietary licensed platforms, standardized for all new automation development.",
        "Built a Python-based secrets rotation solution on OpenShift, mitigating financial risk and preventing 150k+ incidents annually.",
      ]
    },
    {
      role: "Software Development Engineer-1 (BA3)",
      company: "Barclays PLC",
      companylogo: require("./assets/images/barclays.png"),
      date: "August 2021 - November 2022",
      desc: "",
      descBullets: [
        "Developed an Azure solution in Python for the Legal & eDiscovery team, automating terabytes of data transfer to secure storage, saving USD 1.18 million annually.",
        "Streamlined the case creation workflow backend for eDiscovery and Legal team in Microsoft Purview via Azure Functions-based Python automation using Graph APIs, reducing manual workload by 95%.",
        "Orchestrated the successful deployment of Microsoft Teams across Barclays, overseeing one of the most ambitious bank-wide rollouts and the largest deployment in the fintech sector.",
        "Led the strategic bank-wide rollout of Whiteboard, Planner, Workflows, Viva Insights, HR Bot, and Bitbucket in Microsoft Teams, meeting regulatory compliance.",
        "Facilitated the seamless transition of over 20k teams from bot owners to human owners, boosting org-wide productivity and decentralizing ownership management.",
      ]
    },
    /*
    {
      role: "NLP Intern",
      company: "UnFound.ai",
      companylogo: require("./assets/images/unfoundLogo.webp"),
      date: "August 2020",
      desc: "",
      descBullets: [
        "Implemented and inspected different models like Logistic Regression, SVMs, Naive Bayes and NB-SVM for Online Hate Speech Classification.",
        "The NB-SVM model achieved a column-wise mean AUC-ROC score of 0.977.",
      ]
    },
    */
    {
      role: "Research Intern",
      company: "NITI Aayog, Govt. of India",
      companylogo: require("./assets/images/nitiLogo.jpg"),
      date: "December 2019 – January 2020",
      desc: "",
      descBullets: [
      "Researched economic disparities and GDP contribution patterns in India using CNNs on night skylight data and random forests, and reduced RMSE by around 30%.",
      "Prepared a report for formulating the ethics and regulations of AI for national adoption by the Government of India and explored use-cases on a national scale, and sent to the Ministry of IT (MeitY), BIS & ISO/IEC.",
      "The report was utilized in framing NITI Aayog\'s flagship “Responsible #AIForAll” Draft for National Policy on AI Ethics with over 1 crore views.",
      "Worked on a report focused on the Possible Impact of AI on Climate Change in India & reviewed multiple technology policies of national scale.",  
      ]
    },
    {
      role: "Ex-Lead Mentor | Ex-Community Mentor",
      company: "SMLRA-KJSCE",
      companylogo: require("./assets/images/smlraLogo.jpeg"),
      date: "July 2019 – July 2021",
      descBullets: [
        "Conducted research paper-reading group sessions on ResNet, Meme Generation using Dank Learning, and ULMFiT.",
        "Delivered speaker sessions in ML-101, ML-DL-101, GANs and VAEs, DL in NLP-101 symposiums, covering maths and concepts of ML, DL, GANs, Computer Vision and NLP.",
        "Effectively organized and managed the administrative and logistic work required for conducting events.",
        "Contributed in developing the council’s website."
      ]
    },
    {
      role: "Deep Learning Intern",
      company: "IIT Bombay + KJSCE",
      companylogo: require("./assets/images/iitbLogo.jpg"),
      date: "June 2019 – September 2019",
      descBullets: [
        "Spearheaded a team of four members to develop an offline Android app called KhetiBaadi using ResNet50 to help farmers detect crop diseases, under E-Yantra, IIT Bombay.",
        "The model achieved 97.57% accuracy by fine-tuning the batch-norm layers."
      ]
    },
    /*
    {
      role: "Deep Learning Intern",
      company: "KJSCE",
      companylogo: require("./assets/images/kjsceLogo.png"),
      date: "December 2018 – January 2019",
      descBullets: [
        "Led a team of 3 members to create a Deep Learning model for Diabetic Retinopathy in medical scans of iris using Convolutional Neural Networks (CNNs).",
        "Working on model interpretability using GradCAM and deploying using FastAPI."
      ]
    },
    */
    {
      role: "Android App Development Intern",
      company: "KJSCE",
      companylogo: require("./assets/images/kjsceLogo.png"),
      date: "June 2018 - July 2018",
      descBullets: [
        "Built an Android app called Somaiya Classroom that connects students and faculties of our college with access to past year papers, reminders for vivas, quizzes, tutorials, exam time tables and doubt discussions.",
        "Incorporated Firebase, managed the backend, revamped the UI and integrated the backend and frontend."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubUserName: "arghyadeep99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some Voluntary work you have done

const voluntaryWork = {
  title: "Voluntary Work",
  subtitle: "Some voluntary work that I have done on the sidelines...",
  projects: [
    {
      image: require("./assets/images/barclays.png"),
      projectName: "Project Lead for SYUK Website",
      projectDesc:
        "Working as a Project Lead on delivering the StartYoung UK website as part of the commitment to being the winning solution in CodeFest 2022. I am leading a team of 4 developers in this voluntary role.",
      footerLink: [
        {
          name: "SYUK Website",
          url: "https://startyounguk.com/"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/dlLogo.png"),
      projectName: "Beta Tester & Mentor @ deeplearning.ai",
      projectDesc:
        'Responsible for beta-testing courses by deeplearning.ai, debugging programming assignments, solving course-related doubts and mentoring the enrolled students via Discourse.',
      footerLink: [
        {
          name: "Join our Discourse",
          url: "https://community.deeplearning.ai/"
        },
        //  you can add extra buttons here.
      ]
    },
    /*
    {
      image: require("./assets/images/uandi.png"),
      projectName: "U&I Covid-19 Resources Collector",
      projectDesc:
        "I helped fetch and verify Covid-19 related resources to maintain a database of actively verified resources during the peak of second wave so that people can search for oxygen cylinders, beds, medicines, etc. instantly from our website as part of U&I's initiative of 'Breathe India'.",
      footerLink: [
        {
          name: "View LoA", 
          url: "https://drive.google.com/file/d/1E-DODXCsQtKMvUBCt650NWE1dJEkelrv/view?usp=sharing"
        },
        {
          name: "Website", 
          url: "https://covidwin.in"
        }
      ]
    },
    */
    {
      image: require("./assets/images/mlsabetaLogo.png"),
      projectName: "Microsoft Learn Student Ambassador",
      projectDesc:
        "My role was to create awareness about Microsoft technologies like Azure, Office 365, etc. in communities and build a community of students on-campus and online. I am also responsible for organizing events and workshops on Microsoft technologies.",
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://drive.google.com/file/d/1EiEDghayzNs1qUsDKeGpVfU1zBJe0FBD/view?usp=sharing"
        }
      ]
    },
    // {
    //   image: require("./assets/images/dlLogo.png"),
    //   projectName: "deeplearning.ai Ambassador",
    //   projectDesc:
    //     'Responsible for conducting workshops, seminars, and talks related to the field of Artificial Intelligence in Pie & AI Sessions. Conducted an online session on "The Past & Future of AI" in June 2020.',
    //   footerLink: [
    //     {
    //       name: "Certificate",
    //       url: "https://drive.google.com/file/d/1wuDhyNAMb7DBoJME4BN9KMHvq0mevFoo/view?usp=sharing"
    //     },
    //     {
    //       name: "YouTube Link",
    //       url: "https://www.youtube.com/watch?v=QPPc8V-Zg4w"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    /*
    {
      image: require("./assets/images/linkedinLogo.png"),
      projectName: "LinkedIn Campus Editor",
      projectDesc:
        "As a Campus Editor at LinkedIn, I voiced my thoughts on LinkedIn about the things that matter to me in the professional world, follow up on relevant to professional career development and encourage others to use LinkedIn effectively."
    },
    {
      image: require("./assets/images/techfestLogo.png"),
      projectName: "TechFest Campus Ambassador",
      projectDesc:
        "Managed promotional tasks for TechFest, IIT Bombay, Asia's largest student-led science and technology festival.",
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://drive.google.com/file/d/132vI9Thnppdbz1hnnzjWOHXAKmA329FA/view?usp=sharing/"
        }
      ]
    },
    */
    {
      image: require("./assets/images/outreachLogo.jpeg"),
      projectName: "KJSCE Outreach for Cybersecurity",
      projectDesc:
        "Responsible for documentation, presentations, reports of events, seminars,workshops, etc. and other official handling at KJSCE Outreach Center for Cyber Security.",
      footerLink: [
        {
          name: "View Certificate",
          url:
            "https://drive.google.com/file/d/1FQ5RTuf6HWGzSciFMc3xGy4Ez8T34aIP/view?usp=sharing"
        },
        {
          name: "View LoA",
          url:
            "https://drive.google.com/file/d/1FMEHse21XeJsZk_SVCJoebE8AFHa-l-L/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/packtLogo.png"),
      projectName: "Packt Beta Course Tester",
      projectDesc:
        'Reviewed the course "Deep Learning Projects with JavaScript" and "Hands-on Natural Language Processing with PyTorch" on Packt before they were made public.'
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section

const achievementSection = {
  title: emoji("Honor and Recognitions 🏆"),
  //subtitle:
  //"Achievements for some cool things I have done!",

  achievementsCards: [
    {
      title: "Invited as SIH 2023 Internal Hackathon Judge",
      subtitle:
        "I had the privilege of being invited as a judge for the Smart India Hackathon (SIH) 2023 by Government of India to K.J. Somaiya College of Engineering.",
      image: require("./assets/images/kjsceLogo.png"),
      footerLink: [
      ]
    },
    {
      title: "Invited as Judge + Mentor for Hackerstellar 2023 Hackathon by CSI-KJSCE",
      subtitle:
        "I had the great honor of being invited as a judge and mentor at Hackerstellar 2023 organized by CSI-KJSCE.",
      image: require("./assets/images/hackerstellar.jpeg"),
      footerLink: [
      ]
    },
    {
      title: "CodeFest 2023 Hackathon - India Champions",
      subtitle:
        "Our team Whizbang won Codefest 2023 Hackathon organized by Barclays in association with Microsoft to help Listening Ears with their problem statements. Won Amazon Alexa, boAt TWS and more.",
      image: require("./assets/images/Codefest-2023.jpg"),
      footerLink: [
      ]
    },
    {
      title: "Code-a-thon - 1st Runners-up",
      subtitle:
        "We secured second rank in the BX India Code-a-thon organized by Barclays. We worked on the problem of manual patching of images by automating the estate-wide container image patching on the BCP platform for 80k+ images.",
      image: require("./assets/images/code-a-thon.jpeg"),
      footerLink: [
      ]
    },
    {
      title: "Global Technology Awards 2022 - Best Team Runners-Up",
      subtitle:
        "Our team orchestrated the successful deployment of Microsoft Teams across Barclays, overseeing one of the most ambitious bank-wide rollouts and the largest deployment in the fintech sector, while complying with financial regulatory requirements.",
      image: require("./assets/images/gta-2022.jpeg"),
      footerLink: [
      ]
    },
    {
      title: "CodeFest 2022 Hackathon - Global Champions",
      subtitle:
        "Our team YoungCoders won the company-wide (UK, USA, India) hackathon organized by Barclays in association with Microsoft to help a new budding NGO named Start Young UK with overhauling their website with advanced capabilities to strengthen their three pillars: Growth, Sponsorship and Engagement. Won Microsoft goodies and Surface Headphones.",
      image: require("./assets/images/Codefest-2022.jpeg"),
      footerLink: [
      ]
    },
    {
      title: "Barclays Unsung Hero Award",
      subtitle:
        "Awarded the Unsung Hero Award by Barclays UK for delivering an upgrade on existing Secure Blobs Transfer solution to handle huge bursts of file copy requests and huge file sizes by implementing Durable Functions-based solution.",
      image: require("./assets/images/barclays.png"),
      footerLink: [
      ]
    },
    {
      title: "Barclays Star of the Month India Award",
      subtitle:
        "Awarded for delivering an Azure solution for the Secure Blobs Transfer Solution for eDiscovery team to automate the movement terabytes of compliance data. This made Barclays the first global organization to use Compliance Center in a regulated environment, saving around US$1.18 million annually and closing a major cyber risk.",
      image: require("./assets/images/barclays.png"),
      footerLink: [
      ]
    },
    {
      title: "CVIT Summer School of AI 2021 Fellow",
      subtitle:
        "Got selected in the cohort of 300+ students from across the globe for IIIT Hyderabad's CVIT lab's Summer School of AI with focus on Computer Vision and Machine Learning, conducted from 2nd-31st August, 2021.",
      image: require("./assets/images/CVIT Certificate.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1DITPH_GbZj6tzOWT3FZCDWVyYnKuaKV6/view?usp=sharing"
        },
        {
          name: "Summer School Website",
          url: "http://cvit.iiit.ac.in/summerschool2021/"
        },
      ]
    },
    {
      title: "Research Paper presented & published in IEEE Xplore",
      subtitle:
        "Presented my final year thesis on 'Knowledge Transfer between Similar Atari Games Using Deep Q-Networks to Improve Performance' in the 12th ICCCNT 2021 Conference organized by IEEE section of IIT Kharagpur held from 6th-8th July, 2021. Paper published on IEEE Xplore.",
      image: require("./assets/images/ICCCNT Certificate.jpeg"),
      footerLink: [
        {
          name: "View Paper",
          url:
            "https://doi.org/10.1109/ICCCNT51525.2021.9580091"
        },
        {
          name: "View Certificate",
          url:
            "https://drive.google.com/file/d/1NrR_mthXsziw1BNogoxUyvw89AK6Yxzv/view?usp=sharing"
        },
      ]
    },
    {
      title: "All India First Prize in #CampusVoice Initiative by ThePrint",
      subtitle:
        "Secured All India first rank in the #CampusVoice initiative by ThePrint. I wrote an opinion piece on the evolution of slogans in India - from 'Jai Hind' to 'Khela Hobe' and underlined the significance of slogans in Indian politics from pre-independence era to today.",
      image: require("./assets/images/hof-first-prize-theprint.jpeg"),
      footerLink: [
        {
          name: "Read Article",
          url:
            "https://theprint.in/campus-voice/jai-hind-garibi-hatao-to-khela-hobe-slogans-show-how-indian-politics-has-evolved/695294/"
        }, 
        {
          name: "Certificate",
          url:
            "https://drive.google.com/file/d/14HhSyg3yFuBkqdg8uUV-Tk9vdGAtlX-0/view?usp=sharing"
        },
      ]
    },
    {
      title: "All India Third Prize in #CampusVoice Initiative by ThePrint",
      subtitle:
        "Secured All India third rank in the #CampusVoice initiative by ThePrint. I expressed my opinion on the current political situation of India and what we as citizens should do to ensure a healthy atmosphere for democractic values to continue flowing.",
      image: require("./assets/images/hof-theprint.jpeg"),
      footerLink: [
        {
          name: "Read Article",
          url:
            "https://theprint.in/campus-voice/india-is-both-right-and-wrong-together-needs-more-centrists-to-tackle-left-right-binary/635810/"
        }, 
        {
          name: "Certificate",
          url:
            "https://drive.google.com/file/d/1AyCzDilfXredx8RFYobsCq4qDnCMr3Wz/view?usp=sharing"
        },
      ]
    },
    {
      title: "HackOff-3.0 Siemens Healthineers Track Winner",
      subtitle:
        "Our team, Team Stochastic won the first prize for Siemens Healthineers Chatbot Problem Statement in HackOff 2020 from a pool of over 200+ teams. A cash prize of ₹10000 was awarded for the same.",
      image: require("./assets/images/hackoff.png"),
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://drive.google.com/file/d/19K4ANDb9m3DaGuuu7k4zy2WMB55KhEWC/view?usp=sharing"
        }
      ]
    },
    {
      title: "Best ElasticSearch-based Project Winner in HackJaipur 2020",
      subtitle:
        'Our team, Team Stochastic won the "Best ElasticSearch-based Project" award in HackJaipur 2020 from a pool of over 350+ teams. A cash prize of ₹5000 was awarded for the same.',
      image: require("./assets/images/hackjaipur.png"),
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://drive.google.com/file/d/1ZRd29EGRo0EEPHpGj1iV1cPvA3O38M_w/view?usp=sharing"
        }
      ]
    },
    {
      title: "Top 4 in DJ-ACM LoC Hackathon 2020",
      subtitle:
        "We finished in the top 4 in this hackathon by building a project called Exsports Analytics, which helps provide insights into various teams and uses K-means algorithm to predict the best playing XI combination.",
      image: require("./assets/images/loc.png"),
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://drive.google.com/file/d/1Jx1C9-eOaRh37V6z_52CzirqWlvJ5Gi8/view?usp=sharing"
        }
      ]
    },
    /*
    {
      title: "Subject Topper",
      subtitle:
        "I was the subject topper in Applied Physics-II and Communication Skills in my college. Got a cash prize of ₹1000 for the same.",
      image: require("./assets/images/Physics Award.jpeg"),
      footerLink: [
        {
          name: "Applied Physics-II",
          url:
            "https://drive.google.com/file/d/1f71_ab8SzNzpPbaLHWBfM738TBtMf-Uh/view?usp=sharing"
        },
        {
          name: "Communication Skills",
          url:
            "https://drive.google.com/file/d/1i4u2AK3vYS7G9VsgpOCn1VW8fBI1_KKt/view?usp=sharing"
        }
      ]
    },
    */ 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Certificates Section

const certificateSection = {
  title: emoji("Certifications"),
  //subtitle:
  //"Certifications completed",

  achievementsCards: [
    {
      title: "Google Cloud Essentials and ML",
      subtitle:
        "Completed the Google Cloud Essentials and Baseline: Data, ML, AI training on Qwiklabs.",
      image: require("./assets/images/qwiklabs.png"),
      footerLink: [
        {
          name: "Badge",
          url:
            "https://www.qwiklabs.com/public_profiles/cc52cc1e-1547-48d9-a8b0-a23f00f22b7c"
        }
      ]
    },
    {
      title: "AI for Medicine Specialization",
      subtitle:
        "Completed the three-part specialization on AI for Medicine with 100% distinction by deeplearning.ai.",
      image: require("./assets/images/dlLogo.png"),
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://www.coursera.org/account/accomplishments/specialization/certificate/FLA5SMLWDSH9"
        }
      ]
    },
    {
      title: "Deep Learning Specialization",
      subtitle:
        "Completed the five-part specialization on Deep Learning with 100% distinction by deeplearning.ai",
      image: require("./assets/images/dlLogo.png"),
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://www.coursera.org/account/accomplishments/specialization/certificate/9KEPX7ANQUGE"
        }
      ]
    },
    {
      title: "Machine Learning by Stanford University",
      subtitle:
        "Completed the machine learning specialization by Stanford University with 99% distinction.",
      image: require("./assets/images/dlLogo.png"),
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://www.coursera.org/account/accomplishments/certificate/HKFPLM4SAT6G"
        }
      ]
    },
    {
      title: "Full Length AI Program",
      subtitle:
        "Completed a Full Length Artificial Intelligence Program by Surge Labs and Riidl Somaiya.",
      image: require("./assets/images/surge.png"),
      footerLink: [
        {
          name: "Certificate",
          url:
            "https://drive.google.com/file/d/0Byltq4ahphOib3FYS1lRYVJvUHZMSF9SamdDdDJ3cTJfSzVj/view"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I have a knack for writing, on whichever topic storms my mind, compelling me to pick up my virtual pen!",

  blogs: [
    {
      url:
        "https://arghyadeep-d.medium.com/my-two-cents-on-two-years-of-working-in-fintech-3cf9555096ce",
      title:
        "My two cents on two years of working in Fintech",
      description:
        "In this article, I express my views as a software developer working in the fintech industry for the past 2 years, to hopefully guide new joiners as they enter this realm!"
    },
    {
      url:
        "https://arghyadeep-d.medium.com/lost-in-the-meteora-archives-ai-and-web3-help-recreate-the-nostalgia-of-2000s-linkin-park-67dfea8534dc",
      title:
        "“Lost” in the Meteora Archives — AI and Web3 help recreate the nostalgia of 2000's Linkin Park",
      description:
        "I express my views on the latest unarchived song from Linkin Park - Lost. I dive deep into how AI and NFT are a big theme in this song and what this song means to me!"
    },
    {
      url:
        "https://arghyadeep-d.medium.com/the-collatz-conjecture-beauty-or-conundrum-of-mathematics-6589e45babf7",
      title:
        "Multi-label Emotion Classification with PyTorch + HuggingFace’s Transformers and W&B for Tracking",
      description:
        "In this article published in Towards Data Science, I work on the problem of multi-label emotion classification using SqueezeBERT model and track my training using W&B!"
    },
    {
      url:
        "https://www.cantorsparadise.com/the-collatz-conjecture-beauty-or-conundrum-of-mathematics-6589e45babf7",
      title:
        "The Collatz Conjecture: Beauty or Conundrum of Mathematics?",
      description:
        "In this article published in Cantor's Paradise on Medium, I talk about the Collatz Conjecture, whose quest for proof has puzzled mathematicians for decades!"
    },
    {
      url:
        "https://arghyadeep-d.medium.com/the-battle-for-audio-space-supremacy-clubhouse-spaces-greenroom-whos-next-981b47f5cde3",
      title:
        "The Battle for Audio Space Supremacy: Clubhouse, Spaces, Greenroom… who’s next?",
      description:
        "How every social media giant is challenging each other in this new battlefield, giving them a run for their money!"
    },
    {
      url:
        "https://theprint.in/campus-voice/jai-hind-garibi-hatao-to-khela-hobe-slogans-show-how-indian-politics-has-evolved/695294/",
      title:
        "‘Jai Hind’, ‘Garibi Hatao’ to ‘Khela Hobe’ — slogans show how Indian politics has evolved",
      description:
        "In this opinion piece with ThePrint, I discuss the role of slogans in Indian politics from pre-independence era to today and its evolution from 'Jai Hind' to 'Khela Hobe'."
    },
    {
      url:
        "https://theprint.in/campus-voice/india-is-both-right-and-wrong-together-needs-more-centrists-to-tackle-left-right-binary/635810/",
      title:
        "India is both right and wrong together, needs more Centrists to tackle Left-Right binary",
      description:
        "In this opinion piece with ThePrint, I express my views on the current political scenario of India and what the situation demands out of us citizens."
    },
    {
      url:
        "https://towardsdatascience.com/aarogya-bot-the-ai-driven-chatbot-to-answer-your-medical-queries-4a76daf80fc4",
      title:
        "Aarogya-Bot: The AI-driven chatbot to answer your medical queries",
      description:
        "Aarogya-Bot is a chatbot that we built in HackOff-3.0 and won the first rank in the “Siemens Healthineers Challenge” track in December 2020!"
    },
    {
      url: "https://towardsdatascience.com/coronaxiv-b2b36d725e2e",
      title:
        "CoronaXiv: The AI-powered ElasticSearch-based Search Engine for Covid-19 Research Papers",
      description:
        "Utilize the power of NLP and ElasticSearch to contribute in the fight against the Covid-19 pandemic the AI way! Read how we won the best ElasticSearch-product prize in HackJaipur 2020!"
    },
    {
      url:
        "https://arghyadeep-d.medium.com/another-perspective-of-the-schr%C3%B6dingers-cat-experiment-a386b517c97b",
      title: "Another perspective of the Schrödinger’s Cat Experiment",
      description:
        "Why do we attach the quantum event probability to a macroscopic object like a cat?"
    },
    {
      url:
        "https://smlra-kjsce.medium.com/whats-the-res-in-resnet-part-ii-96612490cb8e",
      title: "What’s the “Res” in “ResNet”? [Part II]",
      description:
      "This second part continues the intuitive explanation of the ResNet paper in detail."
    },
    {
      url:
        "https://smlra-kjsce.medium.com/whats-the-res-in-resnet-part-i-389116531796",
      title: "What’s the “Res” in “ResNet”? [Part I]",
      description:
        "This blog provides an intuitive and easy-to-understand explanation of the Residual Networks, famously called ResNet paper in detail."
    },
    {
      url:
        "https://medium.com/hackernoon/coding-the-word-that-is-being-thrown-around-by-almost-every-tech-geek-from-student-to-developer-e91f512831a4",
      title: "Why coding is a difficulty for many…",
      description:
        "This blog concentrates on my journey till my First Year of Computer Engineering in the field of Computer Science!"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("Yet to give"),

  talks: [
    {
      title: "Yet to give a talk",
      subtitle: "",
      //slides_url: "Yet to give a talk",
      event_url: "Yet to give a talk"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "Hit me up on email rather ;)",
  email_address: "arghyadeep1899@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "arghyadeepdas99", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false;

export {
  splashScreen,
  illustration,
  prof_illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  voluntaryWork,
  achievementSection,
  certificateSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
