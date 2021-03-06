const fs = require('fs');
const path = require('path');
const {
    merge
} = require('lodash');
const {
    gql
} = require('apollo-server-express');


const Query = gql `
    type Query {
        status: String
    }
`;

const Mutation = gql `
    type Mutation {
    _empty: String
    }
`;

let resolvers = {
    Query: {
        status: () => 'ok!'
    }
};


const typeDefs = [Query, Mutation];

// Read the current directory and load types and resolvers automatically
fs.readdirSync(__dirname)
    .filter(dir => (dir.indexOf('.') < 0))
    .forEach((dir) => {
        const tmp = require(path.join(__dirname, dir));
        resolvers = merge(resolvers, tmp.resolvers);
        typeDefs.push(tmp.types);
    });

module.exports = {
    typeDefs,
    resolvers
};