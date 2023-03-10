# react-vite-starter

Quickly start React projects with Vite by using this template repository. ESLint has been
configured with some of my preferred rules and the project file structure has been set up according
to my preference. Intended to be used with the VSCode extensions `ESLint`,
`Prettier - Code formatter`, and `vscode-styled-components`.

## Set up instructions

1. Click the `Use this template` button on the GitHub repository page.
2. Create a new repository after setting up the details.
3. Run `git clone <REPOSITORY_URL>` on your machine.
4. Change your current directory to the cloned repository directory.
5. Run `npm i` to install all packages. A package-lock.json file will be created that contains the
   name of your cloned repository.
6. Run `npm run dev` to start the development server. You should see "Hello World" after opening
   the local website.

## Commands that were used to set up the repo

`npm create vite@latest . -- --template react`  
`npm i prop-types styled-components`  
`npm i -D eslint eslint-config-prettier`  
`npm init @eslint/config`

## Optional commands

`npm i react-router-dom`  
`npm i -D vitest @testing-library/react @testing-library/user-event`
