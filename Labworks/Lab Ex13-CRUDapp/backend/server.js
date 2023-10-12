
const express= require('express')
const uuid = require('uuid')
var mysql = require('mysql')
const app = express()
var cors = require('cors')
const bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json());
const PORT=8000;



const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CRUD app',
    port: 3306 // MySQL default port is 3306
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
      console.log("Check DB connection")
      return;
    }
    console.log('Connected to MySQL database');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
  });

// Get all Notes
  app.get("/get-all-notes",(req,res)=>{
    const sql="SELECT * FROM notes"
    connection.query(sql,(error,results)=>{
        if(error){
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    })
  })

//   Add a Note
  app.post("/add-note",(req,res)=>{
    const newNote=req.body
    const sql="INSERT INTO notes VALUES (?, ?, ?,?)"
    connection.query(sql,[uuid.v4(),newNote.title,newNote.content,new Date(newNote.timestamp)],(error,results)=>{
        if(error){
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    })
  })

//   Update a Note

  app.post("/update-note/:id", (req, res) => {
    const updatedNote = req.body;
    const noteId = req.params.id;
    
    const sql = "UPDATE notes SET title = ?, content = ?, timestamp = ? WHERE id = ?";
    
    connection.query(sql, [updatedNote.title, updatedNote.content,new Date(updatedNote.timestamp) , noteId], (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    });
});

// Delete a Note
app.delete("/delete-note/:id", (req, res) => {
    const noteId = req.params.id;
    
    const sql = "DELETE FROM notes WHERE id = ?";
    
    connection.query(sql, [noteId], (error, results) => {
        if (error) {
            console.error('Error executing MySQL query:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.json(results)
    });
});




