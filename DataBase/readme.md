# MongoDB

## Getting Started
* When install, modify the folder of installation in the 'custom' option.
```
C:\Program Files (x86)\MongoDB\server\3.6
```
* Create the folder
```
C:\data\db
```
```
C:\data\log\mongo.log
```
* Using two CMD prompt command on Windows.
```
CDM1 >> cd "Program files (x86)\MongoDB\server\3.6\bin"
```
```
CMD1 >> mongod
```
```
CMD2 >> mongo
```

## Built With

* [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) - Document database with the scalability and flexibility that you want with the querying and indexing that you need.

## MongoDB

Database to use in the login of the application.

1. Create Database:
´´´
use WebRadio
´´´

2. Insert a collection 'People':
´´´
db.createCollection("People")
´´´

3. Insert a document:
The document have just the function of determinate what is the type of user.

´´´
db.People.insert({
  name: 'Jessica',
  Type: 'admin',
  Login: 'jessica',
  Password: '123',
});
´´´
