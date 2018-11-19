# tax-fix-exercise

# Application:
### How to run the application?
  - Clone this repository.
  - Make sure Docker is running and then execute `docker-compose up`

### Folder Structure
```bash
├── api
│   └── exchange.js
├── common
│   └── response.js
│   └── validate.js
│   └── utils.js
├── config
│   └── index.js
├── db
│   └── mongoBaseDao.js
├── lambda
│   └── index.js
├── test
│   └── index.js
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
├── README.md
└── server.js
```

### API's
- ***POST /api/exchange/rates*** to to get the exchange rates with the request,
    ```
    {
	    "from": "thb",
	    "to": "usd",
	    "amount": 200000
	}
    ```
    **Response**
    ```
    	{
		    "status": true,
		    "data": {
		        "xr": 6069.8141
		    }
		}
    ```