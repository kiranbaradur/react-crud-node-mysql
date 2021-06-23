
# React Node MySQL Fullstack CRUD App

## Clone project
```
git clone https://github.com/kiranbaradur/react-crud-node-mysql.git
```
## Setup for client

```bash
cd client
npm i
npm start
```

## Setup for server
Create database called **test** and run below SQL query
```sql
CREATE TABLE `employees` (
  `id` int(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `salary` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
```

```
cd server
npm i
npm start
```

Note: Update config/db.config.js file as per your database credentials
