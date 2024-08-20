import { app } from './app'
import mongoose from 'mongoose';


mongoose.set("strictQuery", false);
mongoose.connect(`mongodb+srv://ectorcunha:ectorcunha@fullstack.zkdai.mongodb.net/?retryWrites=true&w=majority&appName=FullStack`)
.then(() => {
  console.log('MongoDB Conectado')
  app.listen(5000);
}).catch(()=>{
  console.log('Erro ao conectar ao MongoDB fake')
})