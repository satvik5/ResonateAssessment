# ResonateAssessment

This repo includes my code solutions to Q1 and Q2.

## Q1 - Level 200

You can access Q1 code clicking ResonateAssessment->level200. 'level200' includes 3 files -

- script.js
- index.html
- style.css

> :warning: **Make sure that you are currently at master branch**: Unfortunately,I couldn't merge main and master due to their commit histories!

You can also access my pen at 'website' which is forked from 'website'
To generate random code of 9 digits, I just use Random function of Math library,
that generates no. from 1-999999999. From this, we had to retrieve following values -

- Store ID (Max 3 digits)
- Transaction ID (Max 5 digits)
- Date (Max 6 digits- 'ddmmyy')

Clearly, it's well over 9 digits. Therefore, I created variable, that stored all these values above.
Then, I used CryptoJs library to encrypt this variable so that cheaters can't make sense of code.

In short, 'generate' method generates random 9 digit code,creates variable that stores all relevant info
provided as parameters and encrypt this variable with secret key as our already generated 9 digit code and then return this code.
This secret variable is constructed with template strings with each info seperated by space. Below is the format of our secret variable

> "${time_at_which_code_was_generated} ${store_id} ${transaction_id}";

We store our newly created encrypt object globally so that 'decode' method has access to it while decrypting.

In 'decode' method, we recieve short code that was generated in 'generate' method. I used decrpyt method of CryptoJS library
to decode our secret value from which we can create our new object. However, we also need access to encrypted object which is
given in parameters. Since we defined our ecrypted object globally, therefore we have access to our encrypted object which will
be then passed in decrpyt method along with given parameter as it was defined as secret key in encrypted object. After decrypting
, we retrieve our secret variable. According to given format of secret variable above, we use split method of string to store
each info in seperate variable. Since, each info is seperated by a space we use split method with a space. After retrieving all
values, we convert each variable type from string to integer via 'parseInt' method. Then, we just return newly created object with
required properties.

Considering the fact that users can read/copy this code via different methods such as clicking 'inspect' via context menu,pressing F12
etc. I added extra function to track all events(click,pressing key,hovering etc). If any of the events includes pressing special combination
keys to access console, we return false to make sure that nothings happens. However, we also need to take care of context menu, therefore, on

<html> tag, I added atribute 'oncontextmenu = "return false"' to make sure that context menu never appears.
  
## Q2 - Real World Problem 
  You can access Q1 code clicking ResonateAssessment->ReactResonate. I made contacts application via react.
  To start the code, do the following steps -
  - Make sure that you are in ReactResonate folder
  - Run 'npm install' to download all dependencies in package.json as 'node modules' is included in .gitignore file which doesn't include this folder when pushing to a branch
  - Finally run 'npm run start' to start react application. A new tab should open in your default browser whose url address at your local device is https://localhost:3000
  
  #### App description
  I used "npx create-react-app ReactResonate" to start new react application with boiler plated code.
  I add two pages,two components and a scss file. My react app has 2 pages. First page, shows list of all contacts
  along with a search functionality. Each contact has "USER DETAILS" button, that takes you user portfolio which lists all info
  about that user. On user-portfolio page, there is react profile card that stores username,name and photo. Then all contact details
  are given below. There is a "Company details Page" button, when clicked shows user company details and then we can hide details by clicking
  same button with new text('Hide Company Details') rendered. Along with details, there are icons, which are clickable with differet actions.
  For eg. Clicking icon on address row leads you to google maps opening in new tab showing user's address on new map. initially, wanted to 
  integrate google maps within details component via 'react-google-maps' but failed to make it work. To go back to contacts list page, click 
  back-arrow("<-") icon on top most section.
