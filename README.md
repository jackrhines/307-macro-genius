# MacroGenius
[![back-end](https://github.com/jackrhines/307-macro-genius/actions/workflows/back-end.yml/badge.svg)](https://github.com/jackrhines/307-macro-genius/actions/workflows/back-end.yml)
[![front-end](https://github.com/jackrhines/307-macro-genius/actions/workflows/front-end.yml/badge.svg)](https://github.com/jackrhines/307-macro-genius/actions/workflows/front-end.yml)

Deployed website:
https://kind-stone-0b40c121e.3.azurestaticapps.net/ 

Project contribution from:
Jack, Andy, Ahren, Aryan, Nick

Style-format:
Google style: https://google.github.io/styleguide/jsguide.html

ESlint:
to run
npm run lint

Prototype:
Last updated: June 6, 2023
https://www.figma.com/file/KdLSqDbOFueUC53kD5KX1M/Jack-Rhines's-team-library?type=design&node-id=1816%3A2&t=PEB3VHlCHMhXs37d-1 

Diagrams:
Last updated: June 8, 2023
link: https://drive.google.com/file/d/1twQZuL3kpQjaPCTs0EEKBeXM8dRn9Vrb/view?usp=sharing 

Description:
MacroGenius is a web application aimed to be used for tracking daily calorie intake. 
After signing in, a user can input food that they ate to track calories!
With ability to sign up and log in, users will able to have personalized experience,
where they can come back throughout the day to log food and visualize their daily progress
towards their daily calorie goal. In addition, users will be able to use the calculate function
to calculate their average intake of calorie as well as use the search function to get approximate
calorie of any food per serving (along with grams of protein).


Code Coverage report:
Generated on June 8, 2023
-|---------|----------|---------|---------|-------------------
 | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-|---------|----------|---------|---------|-------------------
 |   98.11 |      100 |   88.88 |   98.11 |                   
  |     100 |      100 |     100 |     100 |                   
  |     100 |      100 |     100 |     100 |                   
  |   94.73 |      100 |      80 |   94.73 | 29                
  |     100 |      100 |     100 |     100 |                   
-|---------|----------|---------|---------|-------------------


Development environment set up:
On a local folder,
$> git init
$> git remote add origin https://github.com/jackrhines/307-macro-genius
$> git pull origin main

In working local folder,
$> npm install

to run backend,
$> cd ./back-end
$> node backend_with_db.js

to run frontend,
$> cd ./front-end
$> npm start





