# Express.JS Exercise with Node.js

In this exercise you will practice a creation of a web service that respond with the block hash.



1. Clone the repository to your local computer.
2. Open the terminal and install the packages: `npm install`.
3. Run your application `node app.js`
4. Test your Endpoints with Curl, Insomnia, or Postman


## getBlock 
GET a block by index

returns 200 and block in JSON format if successful

returns 500 and error message if not

```bash

$ curl --request GET --url http://localhost:9000/api/block/6

```

Response:
```json
{
  "hash": "e2a93b539b96468a19e7b81b8998746d479d34f7b3855886f620b84ef3b794ae",
  "height": 6,
  "body": "Test Data #6",
  "time": "1558647172"
}
```

## addBlock 
POST data for a new block

returns 200 and message in JSON format if successful

returns 500 and error message if not

```bash

$ curl --request POST \
    --url http://localhost:9000/api/block \
    --header 'content-type: application/json' \
    --data '{
        "body": "Testing block with test string data"
  }
  '

```

Response:
```json
{
  "message": "Block added!"
}
```

## getBlockchain
GET all the blocks in the chain

returns 200 and blocks in JSON format if successful

returns 500 and error message if not

```bash
curl --request GET --url http://localhost:9000/api/blockchain
```

```json
[
  {
    "hash": "66d580d4c060e433cb9f1af562e263d3e62a1fa57c85e813f4e3c2eff329449d",
    "height": 0,
    "body": "Test Data #0",
    "time": "1558647172"
  },
  {
    "hash": "b77351e6faa1890458ee457a96edbbf74d6ba17e0d81718ed446f48a50f59cd4",
    "height": 1,
    "body": "Test Data #1",
    "time": "1558647172"
  },
  {
    "hash": "7ce049c2e39e0dc6290a7041853627dac328ff1608490444bb5dd7525ab407e7",
    "height": 2,
    "body": "Test Data #2",
    "time": "1558647172"
  },
  {
    "hash": "8d1c7a715a462b7d683efc1fc511db4740b8c6b7ff52686c7aa673ff09d64d51",
    "height": 3,
    "body": "Test Data #3",
    "time": "1558647172"
  },
  {
    "hash": "149bac712f4117c8ed832d9fc670b6d8c5792a95da0371f068100d333bb4332e",
    "height": 4,
    "body": "Test Data #4",
    "time": "1558647172"
  },
  {
    "hash": "9e04d1b6ee21424d10ffbf6b7fa2107c60bc2f680629c00185b1f6487503bd25",
    "height": 5,
    "body": "Test Data #5",
    "time": "1558647172"
  },
  {
    "hash": "e2a93b539b96468a19e7b81b8998746d479d34f7b3855886f620b84ef3b794ae",
    "height": 6,
    "body": "Test Data #6",
    "time": "1558647172"
  },
  {
    "hash": "8bc962b70d9108718980f81e70aec815e8333ea1b70395829a6ea5532a5ef602",
    "height": 7,
    "body": "Test Data #7",
    "time": "1558647172"
  },
  {
    "hash": "c035f06e240f1f709826b3080a3ba4706a3a840ff28c4f62e979e4e243cca315",
    "height": 8,
    "body": "Test Data #8",
    "time": "1558647172"
  },
  {
    "hash": "f5378231eda5b3387991a41f5794ede26c1e5b8f3f3496c5c68f92b87e64808e",
    "height": 9,
    "body": "Test Data #9",
    "time": "1558647172"
  },
  {
    "hash": "e4d73ff373d4db1e16fbf2e177ac079e2e1218cf93be0d0d234214f134dccaf8",
    "height": 0,
    "body": "Testing block with test string data",
    "time": "1558647174"
  }
]
```