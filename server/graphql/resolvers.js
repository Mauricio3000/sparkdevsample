import Cat from '../mongoose/Administrator'
//import Author from '../mongoose/Author'

// Provide resolver functions for your schema fields
export default {
    Query: {
      getCompanyInfo:(parent,args,{Company})=>{
        return Company.findById(args.id)
      },
      getAdministrator: async (parent,args,{Administrator})=>{
        return await Administrator.findById({id: args.id})
      }
  },// end of Query
  Mutation:{
    addCompany:(parent,args,{Company})=>{
      return new Company(args).save()
    },
    addAdministrator:(parent,args, {Administrator,Company})=>{
      return new Administrator(args).save()
    },
    addAdminToCompany: (parent,args,{Company})=>{
      return Company.findById(args.companyId,(err,doc)=>{
        if(err){
          console.log(err)
        }
        else{
          if(doc.administratorId){
            doc.administratorId = doc.administratorId.concat(args.adminId)
          }
          else{
            doc.administratorId = [args.adminId]
          }
          doc.save()
        }
      })
    }
  },
  Administrator:{
    companyInfo:(parent,args,{Company})=>{
      return Company.findById(parent.companyId)
    }
  }
}

