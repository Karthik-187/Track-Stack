const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 5000;
const DB_PATH = path.join(__dirname, 'db.json');

const server = http.createServer(async (req, res) => {
  // Allow both local development and production URLs
  const allowedOrigins = ['http://localhost:5173', 'https://track-stack.vercel.app'];
  const origin = req.headers.origin;
  
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Parse URL and method
  const { method, url } = req;

  try {
    // Handle /users endpoint
    if (url === '/users') {
      if (method === 'GET') {
        // Read users from db.json
        const data = await fs.promises.readFile(DB_PATH, 'utf8');
        const db = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(db.users || []));
      } else if (method === 'POST') {
        // Parse request body
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', async () => {
          try {
            const newUser = JSON.parse(body);
            
            // Read existing data
            const data = await fs.promises.readFile(DB_PATH, 'utf8');
            let db = {};
            
            try {
              db = JSON.parse(data);
            } catch (e) {
              // If file exists but isn't valid JSON, initialize with empty object
              db = {};
            }
            
            db.users = db.users || [];
            
            // Check for existing user
            if (db.users.some(user => user.username === newUser.username)) {
              res.writeHead(400, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Username already exists' }));
              return;
            }
            
            // Add new user
            db.users.push(newUser);
            
            // Write back to db.json
            await fs.promises.writeFile(DB_PATH, JSON.stringify(db, null, 2));
            
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User registered successfully' }));
          } catch (error) {
            console.error('Error processing request:', error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal server error' }));
          }
        });
      } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method not allowed' }));
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }));
    }
  } catch (error) {
    console.error('Server error:', error);
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
