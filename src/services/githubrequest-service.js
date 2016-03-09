"use strict";

const   getCommitsService = require("../services/getcommits-service"),
        sphereProcessor = require("../data-processors/sphere-getrequest"),
        matrixProcessor = require("../data-processors/matrix-getrequest"),
        fs = require('fs'),
        config = JSON.parse(fs.readFileSync('./config.json')),
        repoArray = require(config.repoArray);

/*==============================================================================
Process-method iterates over predefined repos from datasets/repos.json
Sends getrequest to github through getCommitsService.latestCommits.
Response comes back containing info from all commits made to those repos.
Sends that commitdata to sphereProcessor and matrixProcessor to be processed
and dispatched.
==============================================================================*/
module.exports = {
    process() {
        Promise.all(repoArray.map(owner => {
        return new Promise((resolve, reject) => {
            getCommitsService.latestCommits(owner.username, owner.repos)
                .then((commitInfo) => {
                    sphereProcessor.process(commitInfo)
                        .then(() =>{
                        });
                    //matrixProcessor.process(commitInfo);
                }).then(resolve());
            });
        }));
    },
}; 