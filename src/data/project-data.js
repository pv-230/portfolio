const projects = [
  {
    name: "Where's Waldo?",
    summary: 'How fast can you find Waldo and the others?',
    details: [
      'The main focus of this project was to practice using the Firestore database for storing player scores and scene data. I also decided to learn how to use styled-components for all my CSS styles. Most of my effort went into coding the logic for interacting with a scene. This includes panning, zooming, and selecting characters for both desktop and mobile devices.',
      'Clicking on a scene and selecting a character will initiate a comparison between the clicked position and a coordinate pair stored in the database. The coordinates of a clicked position have to be converted based on how the image is scaled. Due to the large resolutions of the scene images, I implemented some logic to scale the image down automatically based on viewport height. I also experimented with using promises to add an app loading status indicator for when the app first loads all the images.',
    ],
    tech: ['React', 'React Router', 'Firebase', 'Styled Components', 'Create React App'],
    liveLink: 'https://pv-230.github.io/odin-wheres-waldo/',
    githubLink: 'https://github.com/pv-230/odin-wheres-waldo',
  },
  {
    name: 'Battleship',
    summary: "A recreation of Milton Bradley's classic board game.",
    details: [
      'This project was primarily an exercise in using Jest for unit testing. I created three data models for representing ships, game boards, and players. The functions from these models were the targets of the unit tests. I took an extra step towards writing the logic for a computer opponent to play against. My focus was on trying to get the computer opponent to make similar decisions to a human player. The computer opponent ended up being fairly capable, which resulted in a balanced experience.',
    ],
    tech: ['Jest', 'Webpack'],
    liveLink: 'https://pv-230.github.io/odin-battleship/',
    githubLink: 'https://github.com/pv-230/odin-battleship',
  },
  {
    name: 'Memory Card Game',
    summary: 'Memorize which cards have been clicked on after each shuffle.',
    details: [
      'This project is about a simple card game where the goal is to click on each card once. After each card is clicked, the deck is shuffled using the Fisher-Yates shuffle. The purpose of the project was to get more practice using React features such as hooks.',
    ],
    tech: ['React', 'Webpack'],
    liveLink: 'https://pv-230.github.io/odin-memory-card/',
    githubLink: 'https://github.com/pv-230/odin-memory-card',
  },
  {
    name: 'Shopping Website',
    summary: 'Shop for fruits and manage your cart.',
    details: [
      'The goal for this project was to practice using React Router along with Jest and the Testing Library. This is where I learned how to use the Testing Library to test the UI according to how the user would interact with it. I also learned how to mock React child components for testing, which became necessary for some of the more complicated components.',
    ],
    tech: ['React', 'Jest', 'Testing Library', 'React Router'],
    liveLink: 'https://pv-230.github.io/odin-shopping-cart/',
    githubLink: 'https://github.com/pv-230/odin-shopping-cart',
  },
  {
    name: 'Canvas 2',
    summary: 'A learning management platform for students and teachers.',
    details: [
      'Canvas 2 is a full stack web application that was submitted for a group term project. It is based on the Canvas learning management software frequently used in various schools. The main features include user accounts (student, teacher, teaching assistant, admin), course management, assignment management, plagarism detection, an admin panel, and more. Students are able to submit assignments that get checked for plagiarism. TAs and teachers are able to grade those assignments and provide feedback. Admins can manage all users and modify courses/assignments, as well as approve new teacher accounts that have been registered. The frontend was built with templated HTML, plain CSS, and plain JS. The backend was built with Flask and MongoDB and tested with Pytest.',
    ],
    tech: ['Flask', 'MongoDB', 'Docker', 'Pytest', 'Jinja'],
    liveLink: null,
    githubLink: 'https://github.com/pv-230/canvas2-web-app',
  },
  {
    name: 'Semester Planner',
    summary: 'Generate class schedules based on degree requirements.',
    details: [
      "This is a group project submission for a software engineering course. The project is a web app that offers an improved schedule planning experience for FSU Computer Science students. The students register and log into their accounts where they can select which courses they have taken already. The app will then offer suggestions for which courses to take for the remaining semesters so that graduatation requirements are met. Information about each course is provided to help student's learn more about a particular course.",
    ],
    tech: ['React', 'Jest', 'Testing Library', 'React Router', 'Firebase', 'Create React App'],
    liveLink: null,
    githubLink: 'https://github.com/pv-230/se-capstone-web-app',
  },
];

export default projects;
