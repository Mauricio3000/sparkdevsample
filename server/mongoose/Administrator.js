import mongoose from 'mongoose'

export default mongoose.model('Administrator',{
    name: String,
    type: String,
    username: String,
    password: String,
    companyId: String
})