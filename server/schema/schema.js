
//moongose models
const Project = require("../models/Project");
const Client = require("../models/Client");

const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

// client type

const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});


// project type

const ProjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      description: { type: GraphQLString },
      status: { type: GraphQLString },
      //adding relation ships
      client  : {
        type: ClientType,
        resolve(parent, args) {
          return clients.findById(parent.clientId);
        }
      }
    }),
  });


const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {

     //get all
     projects:{
        type: new GraphQLList(ProjectType),
        resolve(parent, args){
         return Project.find()
            
        }

  },

  //get one
project: {
  type: ProjectType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Project.findById(args.id);
  },
},

    //get all
      clients:{
            type: new GraphQLList(ClientType),
            resolve(parent, args){
                return Client.find();
            }

      },

      //get one
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Client.findById(args.id);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
