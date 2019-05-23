const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./Block.js');
const utils = require('./utils.js');

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} app 
     */
    constructor(app) {
        this.app = app;
        this.blocks = [];
        this.initializeMockData();
        this.getBlockByIndex();
        this.getBlockchain();
        this.postNewBlock();
    }

    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        this.app.get("/api/block/:index", (req, res) => {
            // Add your code here
            //sends a JSON response. This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using JSON.stringify().
            //
            // The parameter can be any JSON type, including object, array, string, Boolean, number, or null, and you can also use it to convert other values to JSON.
            try {
                let block = this.blocks[req.params.index];
                if (block === undefined) {
                   throw new Error('block not found!')
                }
                res.status(200).json(block);
            } catch (e) {
                console.log(e);
                res.status(500).json( { error: 'Unable to retrieve block by index' } );
            }

        });
    }

    getBlockchain() {
        this.app.get("/api/blockchain", (req, res) => {
            // Add your code here
            try {
                console.log('blocks length ', this.blocks.length);
                res.status(200).json(this.blocks);
            } catch (e) {
                res.status(500).json( { error: 'Unable to retrieve blockchain'} );
            }

        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/api/block", (req, res) => {
            // Add your code here
            try {
                let data = req.body.body;
                if (data === undefined || data.length === 0) {
                    res.status(500).json( { error: 'Unable to add new block; body is empty'} );
                }
                console.log('adding new block');
                let newBlock = new BlockClass.Block(data);
                newBlock.hash = utils.generateHashFor(newBlock);
                this.blocks.push(newBlock);
                res.status(200).json({ message: 'Block added!'});
                console.log(this.blocks);
            } catch (e) {
                res.status(500).json( { error: 'Unable to add new block'} );
            }
        });
    }

    /**
     * Help method to initialize Mock dataset, adds 10 test blocks to the blocks array
     */
    initializeMockData() {
        if(this.blocks.length === 0){
            for (let index = 0; index < 10; index++) {
                let blockAux = new BlockClass.Block(`Test Data #${index}`);
                blockAux.height = index;
                blockAux.hash = SHA256(JSON.stringify(blockAux)).toString();
                this.blocks.push(blockAux);
            }
        }
        console.log('blocks: ', JSON.stringify(this.blocks).toString());
    }
}

/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => {
    return new BlockController(app);
};