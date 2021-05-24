const app = require('./app')
const { db } = require('./models/Record')


db.sync({force:true})
.then(()=>{
    const port = 3001;
    app.listen(port)
    console.log(`Server on port ${port}`);
})
