import mongoose from 'mongoose'

export default mongoose.model('Company',{
    name: String,
    owner: String,
    dateCreated: String,
    administratorId: Array
})