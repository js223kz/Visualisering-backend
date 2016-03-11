"use strict";
const _ = require("lodash");

module.exports = (currentState, action) => {
  switch (action.type) {
    case "ADD_POSITIONS":
    let positionsToSendToReducer = _.orderBy(currentState.positions.concat(action.positions), ['time'], ['desc']).splice(-100);
        return Object.assign(
            {},
            currentState,
            {
                positions:positionsToSendToReducer
        });
        
        case "ADD_COMMITS":
        let commitsToSendToReducer = _.orderBy(currentState.commits.concat(action.commits), ['timestamp'], ['desc']).splice(-100);
        return Object.assign(
            {},
            currentState,
            {
                commits:commitsToSendToReducer
        });
        
        case "ADD_WH_POSITIONS":
            let wh_positionsToSendToReducer = _.orderBy(currentState.positions.concat(action.wh_positions), ['time'], ['desc']).splice(-100);

            return Object.assign(
                 {},
                 currentState,
                 {
                     wh_positions:action.wh_positionsToSendToReducer
             });
             case "ADD_WH_COMMITS":
                let wh_commitsToSendToReducer = _.orderBy(currentState.wh_commits.concat(action.wh_commits), ['timestamp'], ['desc']).splice(-100);
                return Object.assign(
                 {},
                 currentState,
                 {
                     wh_commits:action.wh_commitsToSendToReducer
             }); 
    default: return currentState;
    }
};
