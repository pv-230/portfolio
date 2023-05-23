# Web Development Portfolio

This is my web development portfolio that I initially created as the last front end project for [The Odin Project](https://www.theodinproject.com/lessons/node-path-advanced-html-and-css-personal-portfolio). I plan to make updates to the portfolio over time as I learn new skills and create new projects.

## Development Notes

- The fancy circle border animation on the hero page was created with a technique that animates a change in the spacing between the dashes in the circle's border. The css for that can be found in the [hero component](https://github.com/pv-230/portfolio/blob/main/src/components/hero.jsx#L101).
- The hero page circle and inner text is responsive to device dimensions. The web page is designed to support device widths as low as 320px.
- Scrolling through the page will automatically update the currently selected section in the nav bar by using the IntersectionObserverAPI. The code for that can be found in the [app component](https://github.com/pv-230/portfolio/blob/main/src/components/app.jsx#L37).
- Parts of the page become visible as you scroll through with the help of the IntersectionObserverAPI again. The code for that can be found in the [fade-wrapper component](https://github.com/pv-230/portfolio/blob/main/src/components/fade-wrapper.jsx#L21).
- Icons found in the assets folder are provided dynamically as a value for the src attribute by using URL objects. This makes it convenient to add new icons in the future as long as data/tech-data.js is also updated. An example of usage can be found in the [tech component](https://github.com/pv-230/portfolio/blob/main/src/components/tech.jsx#L73).
- Projects can be added or edited without touching any other file other than data/project-data.js which allows for a convenient way to make updates.

## Packages Used

- React
- Styled Components
- Prop Types
- normalize.css

### Dev Dependencies

- ESLint
- Vite
- gh-pages

## Screenshots

![Screenshot 1](/screenshots/screenshot1.webp)
  
![Screenshot 2](/screenshots/screenshot2.webp)
  
![Screenshot 3](/screenshots/screenshot3.webp)
