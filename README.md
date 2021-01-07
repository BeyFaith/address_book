# address_book

## Heroku backend endpoint:`https://address-book-api-1.herokuapp.com/`
## Local endpoint:`http://localhost:5000/`

### 1 Clone this repository using:

`git clone https://github.com/BeyFaith/address_book.git`

### 2 Cd into this repo

`cd address_book`

### 3 Install all dependencies

`npm install`

### 4 Setup Dotenv

- Create .env file in project root directory
- Copy keys in .env-example file, which is in the project root directory and assign values to those keys.



### 5 Running Migrations

`sequelize db:migrate`

### 6 Start the server by running
`npm run start` or `npm run dev`

### Contact model

```json
{
  "name": "name",
  "number": "12345678",

}
```


### Endpoints
- Creating a contact: `api/create`
- Getting all contacts: `api/contacts`
- Getting one contact:`api/contacts/:id`
- Updating a contact:`api/contacts/:id`
- Deleting a contact: `api/contacts/:id`
