import { app } from './app'
import mongoose from 'mongoose';


const secret = process.env.SECRET_DB

mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://ectorcunha:${secret}@fullstack.zkdai.mongodb.net/?retryWrites=true&w=majority&appName=FullStack`)
.then(() => {
  console.log('MongoDB Conectado')
  app.listen(5000);
}).catch(()=>{
  console.log('Erro ao conectar ao MongoDB fake')
})