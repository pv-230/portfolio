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
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Amet nulla facilisi morbi tempus iaculis urna id. Sit amet est placerat in.',
    ],
    tech: ['Jest', 'Webpack'],
    liveLink: 'https://pv-230.github.io/odin-battleship/',
    githubLink: 'https://github.com/pv-230/odin-battleship',
  },
  {
    name: 'Memory Card Game',
    summary: 'Memorize which cards have been clicked on after each shuffle.',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Amet nulla facilisi morbi tempus iaculis urna id. Sit amet est placerat in.',
    ],
    tech: ['React', 'Webpack'],
    liveLink: 'https://pv-230.github.io/odin-memory-card/',
    githubLink: 'https://github.com/pv-230/odin-memory-card',
  },
  {
    name: 'Shopping Website',
    summary: 'Shop for fruits and manage your cart.',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Amet nulla facilisi morbi tempus iaculis urna id. Sit amet est placerat in.',
    ],
    tech: ['React', 'Jest', 'Testing Library', 'React Router'],
    liveLink: 'https://pv-230.github.io/odin-shopping-cart/',
    githubLink: 'https://github.com/pv-230/odin-shopping-cart',
  },
  {
    name: 'Canvas 2',
    summary: 'A learning management platform for students and teachers.',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Amet nulla facilisi morbi tempus iaculis urna id. Sit amet est placerat in.',
    ],
    tech: ['Flask', 'MongoDB', 'Docker', 'Pytest', 'Jinja'],
    liveLink: null,
    githubLink: 'https://github.com/pv-230/canvas2-web-app',
  },
  {
    name: 'Semester Planner',
    summary: 'Generate class schedules based on degree requirements.',
    details: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed. Eros in cursus turpis massa tincidunt dui ut ornare lectus. Amet nulla facilisi morbi tempus iaculis urna id. Sit amet est placerat in.',
    ],
    tech: ['React', 'Jest', 'Testing Library', 'React Router', 'Firebase', 'Create React App'],
    liveLink: null,
    githubLink: 'https://github.com/pv-230/se-capstone-web-app',
  },
];

export default projects;
