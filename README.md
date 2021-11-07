# README

# Why

Having so many loyalty apps to keep track of can be a pain. With Loyal Burger all of your favorite restaurants loyalty points live in one place

# Technology used:

React single page application, Ruby on Rails back end, and PostgresQL database.

# Customer type user experience 

Customers can easily find and use their loyalty points by accessing the card in their wallet. A user can cash in points for rewards or earn points with purchases . 

# Business type user experience 

Business users can customize how thier loyalty card will look to customers. They can scan QR codes to cash rewards or add points to a user. A business can also track how many users are using thier card and see data on average points per card. 

# Get started 
https://loyalburger.herokuapp.com/
1. Register for a new account
2. Choose Buinsess or Customer account type

For Customer type
1. See search page to find and add loyalty cards
2. Shop at your favorite fictional restaurant 
3. Click card in wallet to access QR code to earn points or cash rewards

For Business type
1. Add restaurant information
2. Add pictures and descriptions on settings page
3. Add Rewards for your customers to cash in
4. Serve your fictional customers and scan or enter code to award points or cash reward

# Mockups and DB design 

https://www.figma.com/file/mw3ucCEqpIaGZA5wfqYQll/Loyalty-Burger?node-id=172%3A536

https://lucid.app/lucidchart/77a9018c-fe19-415f-a0b1-5f014ba0bf7f/edit?viewport_loc=46%2C33%2C1720%2C822%2C0_0&invitationId=inv_fc252c9f-a285-44c6-ba0e-f892db8c228a

# Clone

TLDR: need to clone with a unique project name and rename database

1. git clone git@github.com:AMMSKI/starter-react-rails.git <new_project_name>
2. cd <new_project_name>
3. bundle
4. rename database to something unique may use new_project_name in `database.yml`
   - search for `starter-spring-21` and replace `<new_project_name>`
5. rails db:create db:migrate db:seed
6. cd client
7. yarn

## to test

1. rails s -p 3001
2. cd client && yarn start

## HANDLE GITHUB need new repo

two ways do this

1. remove remote to github add new one (easiest, preferred)

   - `git remote rm origin`
   - create a new github repo
   - `git remote add origin sshlinktorepo`

2. remove git repo entirely and recreate a new a repo

- `rm -rf .git`
- `git init`
- `git add .`
- `git commit -m 'init'`
- `git remote add origin sshlink`

# DONE

// get skills.. Better in this case if it is skills users doesn't have, but that is not a req of hmt

// add to db... Grade Create

// update UI (REACT)
