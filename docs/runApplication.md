# ___Application Start-Up Instructions___

This project was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## ___How to run the application in development___
To run this application run the following commands in Command Line / Powershell.
1. git clone https://github.com/patrickSlaine/portfolio.git
2. git checkout <branch_name>
3. npm install
4. npm start

## ___How to push code to Production___
Follow the below steps when carry-out work on a Work Items.

1. Once you have selected a Work-Item, create a branch from the **development** branch with the naming convention,"itemNumber_description". For instance, "39_Updated_Readme".
2. Conduct development on the work-item on the specified branch and commit your changes.
3. Once Development is complete, create a PR Request into **development** branch and merge your changes.
4. Once again, create a PR Request from **development** into **main** and merge. Once merged, the GitHub Action specified in ".github\workflows\azure-static-web-apps-agreeable-stone-0e1abe903.yml" will be activated and your code changes will be pushed to **Azure Static Web Hosting**.
5. Once the GitHub Action is complete, your code changes can be found [here](https://www.patrickslaine.co.uk).

## Learn More from React App Documentation

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

