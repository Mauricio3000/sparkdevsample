import {gql} from 'apollo-server-express'

// Provide resolver functions for your schema fields

export default gql`

type Company{
  id: ID
  name: String
  owner: String
  dateCreated: String
  administratorId: [ID]
}
type AccountCreationToken{
  tokenId: String
  expiration: String
  used: Boolean
}
type Administrator{
  id: ID
  name: String
  type: String
  username: String
  password: String
  companyId: ID
  companyInfo: Company
}
type Employee{
  id: ID
  name: String
  type: String
  username: String
  password: String
  scheduleId: ID
}
type Query {
  getCompanyInfo(id: ID): Company
  getAdministrator(id: ID ): Administrator
}
type Mutation{
  addCompany(
    name: String,
    owner: String,
    dateCreated: String
    ):Company

  addAdministrator(
    name: String,
    type: String,
    username:String,
    password: String,
    companyId: ID
    ): Administrator

  addAdminToCompany(
    companyId: ID
    adminId: ID
  ): Company
}
`;
