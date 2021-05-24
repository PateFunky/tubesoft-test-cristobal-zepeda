const app = require('./app')
const { db } = require('./models/Record')

db.sync({force:false})
.then(()=>{
    const port = 4000;
    app.listen(port)
    console.log(`Server on port ${port}`);
})
