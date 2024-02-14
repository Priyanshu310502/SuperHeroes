import mongoose from 'mongoose';
const connectdb = async (DATABASE_URL)=>{
try {
    const db_options={
        dbName: 'card_project'
    }
    await mongoose.connect(DATABASE_URL,db_options).then(() => {
       console.log("Database connected successfully"); 
      })
      .catch(err => {
       console.log(err)
      });
} catch (error) {
    console.log(error)
}
}
export default connectdb;