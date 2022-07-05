var express = require('express');
var router = express.Router();
const app = express();

const pool = require('./db');

app.use(express.json());
app.post('/saveNewUser',async (req,res) => {
  try{
    const {description} = req.body;
    const newUser = await pool.query("INSERT INTO customerinformation (description) value ($1)returning",[description]);
    console.log(res.json(newUser));
  }catch(err){
    console.log(err);
  }
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

app.listen(9000, ()=>{console.log('server is istening on port 9000');})
module.exports = router;
