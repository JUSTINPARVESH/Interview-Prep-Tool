import { Question } from './types';

export const SKILLS = [
  'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Vue', 'Angular',
  'Node.js', 'Express.js', 'Python', 'Django', 'Flask',
  'SQL', 'PostgreSQL', 'MongoDB', 'NoSQL',
  'Docker', 'Kubernetes', 'AWS', 'Azure', 'CI/CD', 'Git',
  'GraphQL', 'REST API', 'Security'
];

export const ROLES = [
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer'
];

export const ALL_FILTERS = [...ROLES, ...SKILLS];

export const QUESTIONS: Question[] = [
  // Frontend
  { 
    id: 'f1', 
    text: 'What is React?', 
    answer: 'React is a popular **JavaScript library** developed by Facebook for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components.\n\nKey features include:\n- **Component-Based Architecture**: Build encapsulated components that manage their own state.\n- **Virtual DOM**: React uses a virtual representation of the DOM to optimize rendering performance.\n- **Declarative UI**: You describe how your UI should look for different states, and React updates the DOM efficiently.\n\n**Example:**\n```jsx\nfunction Welcome() {\n  return <h1>Hello, World!</h1>;\n}\n```', 
    options: ['A JavaScript library for building user interfaces', 'A CSS framework', 'A backend programming language', 'A database management system'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  { 
    id: 'f2', 
    text: 'Explain the useState hook.', 
    answer: 'The `useState` hook is a fundamental React Hook that allows you to add **state** to functional components. Before hooks, state was only available in class components.\n\nIt returns an array with two elements:\n1. The **current state value**.\n2. A **function** that lets you update it.\n\n**Example:**\n```jsx\nimport { useState } from "react";\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>You clicked {count} times</p>\n      <button onClick={() => setCount(count + 1)}>\n        Click me\n      </button>\n    </div>\n  );\n}\n```', 
    options: ['A Hook for side effects', 'A Hook that lets you add React state to function components', 'A way to navigate between pages', 'A method to fetch data'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  { 
    id: 'f3', 
    text: 'What is the Virtual DOM?', 
    answer: 'The **Virtual DOM (VDOM)** is a programming concept where an "ideal" or "virtual" representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called **reconciliation**.\n\n**How it works:**\n1. When state changes, a new Virtual DOM tree is created.\n2. React compares (diffs) the new VDOM with the previous one.\n3. React calculates the most efficient way to update the real DOM.\n4. Only the changed parts of the real DOM are updated, which is much faster than re-rendering the entire page.', 
    options: ['A direct reference to the browser DOM', 'An in-memory representation of the real DOM', 'A CSS styling engine', 'A backend server architecture'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  { 
    id: 'f4', 
    text: 'What are the differences between functional and class components?', 
    answer: 'Functional components use Hooks for state, class components use this.state', 
    options: ['Functional components are faster', 'Class components are deprecated', 'Functional components use Hooks for state, class components use this.state', 'There is no difference'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  { 
    id: 'f5', 
    text: 'Explain the concept of lifting state up in React.', 
    answer: 'Moving shared state to the closest common ancestor', 
    options: ['Moving shared state to the closest common ancestor', 'Deleting state from a component', 'Passing state from parent to child only', 'Using Redux for everything'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  { 
    id: 'f6', 
    text: 'What is JSX?', 
    answer: 'A syntax extension for JavaScript that looks like HTML', 
    options: ['A new programming language', 'A styling library', 'A syntax extension for JavaScript that looks like HTML', 'A database query language'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  { 
    id: 'f7', 
    text: 'How does the useEffect hook work?', 
    answer: 'It lets you perform side effects in function components', 
    options: ['It updates the state immediately', 'It lets you perform side effects in function components', 'It creates a new component', 'It handles form submissions only'],
    role: 'Frontend Developer',
    skills: ['React']
  },
  { 
    id: 'f8', 
    text: 'What is Redux and when should you use it?', 
    answer: 'A state management library for complex applications', 
    options: ['A routing library', 'A state management library for complex applications', 'A testing framework', 'A way to style components'],
    role: 'Frontend Developer',
    skills: ['React', 'JavaScript']
  },
  { 
    id: 'f9', 
    text: 'Explain CSS specificity.', 
    answer: 'Rules used by browsers to determine which CSS values are applied', 
    options: ['The speed of CSS loading', 'Rules used by browsers to determine which CSS values are applied', 'The size of a CSS file', 'A way to write CSS in JS'],
    role: 'Frontend Developer',
    skills: ['CSS', 'HTML']
  },
  { 
    id: 'f10', 
    text: 'What is the difference between let, const, and var?', 
    answer: 'let and const are block-scoped, var is function-scoped', 
    options: ['let is for numbers only', 'const can be reassigned', 'let and const are block-scoped, var is function-scoped', 'There is no difference'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },
  {
    id: 'f11',
    text: 'How do you fetch data from an API in JavaScript?',
    answer: 'The most common way to fetch data in modern JavaScript is using the `fetch()` API, which returns a **Promise**. You can also use `async/await` for cleaner, more readable code.\n\n**Example:**\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch("https://api.example.com/data");\n    if (!response.ok) throw new Error("Network response was not ok");\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error("Fetch error:", error);\n  }\n}\n```',
    options: ['Using the fetch() API', 'Using only CSS', 'Through a database query', 'By importing a text file'],
    role: 'Frontend Developer',
    skills: ['JavaScript', 'REST API']
  },
  {
    id: 'f12',
    text: 'What is the difference between Promise.all and Promise.allSettled?',
    answer: 'Both are used to handle multiple promises, but they behave differently when a promise fails:\n\n- **`Promise.all`**: Rejects immediately if **any** of the input promises reject. It\'s "all or nothing".\n- **`Promise.allSettled`**: Waits for **all** promises to settle (either fulfill or reject) and returns an array of objects describing the outcome of each.\n\n**Example:**\n```javascript\nconst p1 = Promise.resolve(1);\nconst p2 = Promise.reject("error");\n\n// Promise.all rejects\nPromise.all([p1, p2]).catch(err => console.log(err)); // "error"\n\n// Promise.allSettled returns both results\nPromise.allSettled([p1, p2]).then(results => console.log(results));\n// [{status: "fulfilled", value: 1}, {status: "rejected", reason: "error"}]\n```',
    options: ['Promise.all waits for all, allSettled rejects early', 'Promise.all rejects if any fail, allSettled waits for all', 'They are identical', 'Promise.all is for frontend, allSettled is for backend'],
    role: 'Frontend Developer',
    skills: ['JavaScript']
  },

  // Backend
  { 
    id: 'b1', 
    text: 'What is Node.js?', 
    answer: 'Node.js is an open-source, cross-platform, **JavaScript runtime environment** that executes JavaScript code outside a web browser. It is built on the **Chrome V8 JavaScript engine**.\n\n**Key Characteristics:**\n- **Asynchronous and Event-Driven**: All APIs of Node.js library are asynchronous, that is, non-blocking.\n- **Single-Threaded**: Node.js uses a single-threaded model with event looping.\n- **Fast**: Built on Google Chrome\'s V8 JavaScript Engine, the library is very fast in code execution.\n\n**Example (Simple Server):**\n```javascript\nconst http = require("http");\n\nconst server = http.createServer((req, res) => {\n  res.end("Hello from Node.js!");\n});\n\nserver.listen(3000);\n```', 
    options: ['A frontend framework', 'A database', 'A JavaScript runtime built on Chrome\'s V8 engine', 'A text editor'],
    role: 'Backend Developer',
    skills: ['Node.js', 'JavaScript']
  },
  { 
    id: 'b2', 
    text: 'What is a REST API?', 
    answer: 'REST (Representational State Transfer) is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.\n\n**Key Principles:**\n- **Stateless**: The server does not store any state about the client session on the server-side.\n- **Client-Server**: The client and the server are independent of each other.\n- **Uniform Interface**: Standardized ways of interacting with the server (using HTTP methods like GET, POST, PUT, DELETE).\n\n**Example (Endpoints):**\n- `GET /users` - Fetch all users\n- `POST /users` - Create a new user\n- `GET /users/1` - Fetch user with ID 1', 
    options: ['A database query', 'An architectural style for networked applications', 'A frontend library', 'A security protocol'],
    role: 'Backend Developer',
    skills: ['REST API', 'Node.js']
  },
  { 
    id: 'b3', 
    text: 'What is database indexing?', 
    answer: 'A data structure technique to quickly locate data', 
    options: ['A way to delete data', 'A data structure technique to quickly locate data', 'A method to encrypt data', 'A way to backup data'],
    role: 'Backend Developer',
    skills: ['SQL', 'PostgreSQL', 'MongoDB']
  },
  { 
    id: 'b4', 
    text: 'Explain the difference between SQL and NoSQL databases.', 
    answer: 'The main difference lies in how they store and retrieve data:\n\n**SQL (Relational):**\n- Uses structured tables with fixed schemas.\n- Best for complex queries and transactional data (ACID compliance).\n- Examples: PostgreSQL, MySQL, SQL Server.\n\n**NoSQL (Non-relational):**\n- Uses flexible data models like documents, key-value pairs, or graphs.\n- Best for large-scale data, rapid development, and horizontal scaling.\n- Examples: MongoDB, Cassandra, Redis.\n\n**Example (SQL Table vs NoSQL Document):**\n```sql\n-- SQL\nCREATE TABLE Users (id INT, name VARCHAR(50));\n```\n```json\n// NoSQL (MongoDB)\n{ "id": 1, "name": "John Doe", "hobbies": ["coding", "reading"] }\n```', 
    options: ['SQL is faster than NoSQL', 'SQL is relational and table-based, NoSQL is non-relational', 'NoSQL is only for big data', 'SQL is only for small apps'],
    role: 'Backend Developer',
    skills: ['SQL', 'NoSQL', 'MongoDB']
  },
  { 
    id: 'b5', 
    text: 'What is middleware in Express.js?', 
    answer: 'Middleware functions are functions that have access to the **request object (req)**, the **response object (res)**, and the **next middleware function** in the application’s request-response cycle.\n\nMiddleware can:\n- Execute any code.\n- Make changes to the request and the response objects.\n- End the request-response cycle.\n- Call the next middleware in the stack.\n\n**Example:**\n```javascript\nconst logger = (req, res, next) => {\n  console.log(`${req.method} ${req.url}`);\n  next(); // Pass control to the next handler\n};\n\napp.use(logger);\n```', 
    options: ['A database driver', 'Functions that have access to req, res, and next', 'A frontend component', 'A styling tool'],
    role: 'Backend Developer',
    skills: ['Express.js', 'Node.js']
  },
  { 
    id: 'b6', 
    text: 'How do you handle authentication in a web app?', 
    answer: 'Using sessions, cookies, or tokens like JWT', 
    options: ['Using only CSS', 'Using sessions, cookies, or tokens like JWT', 'By asking the user for their password every time', 'By not using any security'],
    role: 'Backend Developer',
    skills: ['Security', 'Node.js']
  },
  { 
    id: 'b7', 
    text: 'What is JWT (JSON Web Token)?', 
    answer: 'A compact way to securely transmit information as a JSON object', 
    options: ['A database type', 'A compact way to securely transmit information as a JSON object', 'A frontend framework', 'A styling library'],
    role: 'Backend Developer',
    skills: ['Security', 'Node.js']
  },
  { 
    id: 'b8', 
    text: 'Explain the concept of microservices.', 
    answer: 'Structuring an application as a collection of small services', 
    options: ['A single large application', 'Structuring an application as a collection of small services', 'A way to write CSS', 'A database management system'],
    role: 'Backend Developer',
    skills: ['Docker', 'Kubernetes', 'Node.js']
  },
  { 
    id: 'b9', 
    text: 'What is the event loop in Node.js?', 
    answer: 'What allows Node.js to perform non-blocking I/O operations', 
    options: ['A way to repeat code', 'What allows Node.js to perform non-blocking I/O operations', 'A frontend feature', 'A database query'],
    role: 'Backend Developer',
    skills: ['Node.js', 'JavaScript']
  },
  { 
    id: 'b10', 
    text: 'How do you optimize database queries?', 
    answer: 'Using indexes, avoiding SELECT *, and query caching', 
    options: ['By writing more code', 'Using indexes, avoiding SELECT *, and query caching', 'By deleting data', 'By using a slower database'],
    role: 'Backend Developer',
    skills: ['SQL', 'PostgreSQL', 'MongoDB']
  },
  {
    id: 'b11',
    text: 'What is API Rate Limiting and why is it important?',
    answer: 'Rate limiting is a strategy for limiting network traffic. It puts a cap on how often someone can repeat an action within a certain timeframe (e.g., 100 requests per minute).\n\n**Why it\'s important:**\n- **Prevents Abuse**: Protects against DoS/DDoS attacks and brute-force attempts.\n- **Fair Usage**: Ensures one user doesn\'t hog all server resources.\n- **Cost Control**: Helps manage infrastructure costs by preventing unexpected traffic spikes.\n\n**Example (Express with express-rate-limit):**\n```javascript\nconst rateLimit = require("express-rate-limit");\n\nconst limiter = rateLimit({\n  windowMs: 15 * 60 * 1000, // 15 minutes\n  max: 100 // limit each IP to 100 requests per windowMs\n});\n\napp.use("/api/", limiter);\n```',
    options: ['A way to speed up APIs', 'A strategy for limiting network traffic to prevent abuse', 'A method to encrypt API keys', 'A frontend styling technique'],
    role: 'Backend Developer',
    skills: ['Security', 'Node.js', 'Express.js']
  },
  {
    id: 'b12',
    text: 'Explain API Versioning and common strategies.',
    answer: 'API Versioning allows you to make changes to your API without breaking existing client integrations. It\'s crucial for maintaining backward compatibility.\n\n**Common Strategies:**\n1. **URL Path**: `https://api.example.com/v1/users` (Most common)\n2. **Query Parameter**: `https://api.example.com/users?version=1`\n3. **Custom Headers**: `Accept-Version: v1`\n4. **Content Negotiation**: `Accept: application/vnd.example.v1+json`\n\n**Example (URL Path in Express):**\n```javascript\nconst v1Router = require("./routes/v1");\nconst v2Router = require("./routes/v2");\n\napp.use("/api/v1", v1Router);\napp.use("/api/v2", v2Router);\n```',
    options: ['Updating the API without changing the URL', 'A way to manage different versions of an API to ensure backward compatibility', 'A method to delete old data', 'A frontend routing feature'],
    role: 'Backend Developer',
    skills: ['REST API', 'Node.js']
  },

  // Full Stack
  { 
    id: 'fs1', 
    text: 'Explain the MERN stack.', 
    answer: 'MongoDB, Express, React, and Node.js', 
    options: ['MySQL, Express, React, and Node.js', 'MongoDB, Express, React, and Node.js', 'MongoDB, Ember, React, and Node.js', 'MongoDB, Express, Ruby, and Node.js'],
    role: 'Full Stack Developer',
    skills: ['MongoDB', 'Express.js', 'React', 'Node.js']
  },
  { 
    id: 'fs2', 
    text: 'How do the frontend and backend communicate?', 
    answer: 'Over HTTP/HTTPS using APIs', 
    options: ['Through direct database access', 'Over HTTP/HTTPS using APIs', 'Using only CSS', 'They don\'t communicate'],
    role: 'Full Stack Developer',
    skills: ['REST API', 'JavaScript']
  },
  { 
    id: 'fs3', 
    text: 'What is CORS and how do you handle it?', 
    answer: 'CORS (Cross-Origin Resource Sharing) is a security mechanism that allows or restricts resources on a web page to be requested from another domain outside the domain from which the first resource was served.\n\n**How to handle it in Express:**\nUse the `cors` middleware to allow specific origins.\n\n**Example:**\n```javascript\nconst express = require("express");\nconst cors = require("cors");\nconst app = express();\n\napp.use(cors({\n  origin: "https://your-frontend-app.com"\n}));\n```', 
    options: ['A styling library', 'A security feature that restricts cross-origin requests', 'A database type', 'A frontend framework'],
    role: 'Full Stack Developer',
    skills: ['Security', 'Node.js', 'Express.js']
  },
  { 
    id: 'fs4', 
    text: 'Explain SSR vs CSR.', 
    answer: 'SSR renders HTML on server, CSR renders in browser', 
    options: ['SSR is always better', 'CSR is always better', 'SSR renders HTML on server, CSR renders in browser', 'There is no difference'],
    role: 'Full Stack Developer',
    skills: ['React', 'Node.js']
  },
  { 
    id: 'fs5', 
    text: 'What is Docker and why is it used?', 
    answer: 'A platform for running applications in containers', 
    options: ['A text editor', 'A platform for running applications in containers', 'A database', 'A frontend framework'],
    role: 'Full Stack Developer',
    skills: ['Docker']
  },
  { 
    id: 'fs6', 
    text: 'How do you deploy a full-stack application?', 
    answer: 'Hosting frontend, backend, and database separately or together', 
    options: ['By copying files to a USB drive', 'Hosting frontend, backend, and database separately or together', 'By printing the code', 'By not deploying it'],
    role: 'Full Stack Developer',
    skills: ['Docker', 'CI/CD', 'AWS']
  },
  { 
    id: 'fs7', 
    text: 'What is GraphQL and how does it differ from REST?', 
    answer: 'A query language for APIs that allows clients to request exactly what they need', 
    options: ['A database type', 'A query language for APIs that allows clients to request exactly what they need', 'A styling library', 'A frontend framework'],
    role: 'Full Stack Developer',
    skills: ['GraphQL', 'REST API']
  },
  { 
    id: 'fs8', 
    text: 'Explain the importance of CI/CD.', 
    answer: 'Automating merging, testing, and deployment', 
    options: ['It makes code slower', 'Automating merging, testing, and deployment', 'It is only for large teams', 'It is not important'],
    role: 'Full Stack Developer',
    skills: ['CI/CD', 'Git']
  },
  { 
    id: 'fs9', 
    text: 'How do you handle state management across a large app?', 
    answer: 'Using local state, Context API, or libraries like Redux', 
    options: ['Using only global variables', 'Using local state, Context API, or libraries like Redux', 'By not using state', 'By using only CSS'],
    role: 'Full Stack Developer',
    skills: ['React', 'JavaScript']
  },
  { 
    id: 'fs10', 
    text: 'What are the security best practices for a full-stack application?', 
    answer: 'HTTPS, sanitizing input, and proper authentication', 
    options: ['Using only HTTP', 'HTTPS, sanitizing input, and proper authentication', 'Sharing passwords', 'Not using any security'],
    role: 'Full Stack Developer',
    skills: ['Security', 'Node.js']
  },
  {
    id: 'fs11',
    text: 'How do Refresh Tokens work in JWT Authentication?',
    answer: 'Refresh tokens are used to obtain new access tokens when the current access token expires, without requiring the user to log in again.\n\n**The Flow:**\n1. User logs in; server returns an **Access Token** (short-lived) and a **Refresh Token** (long-lived).\n2. Client sends Access Token in headers for API requests.\n3. Access Token expires (e.g., after 15 mins).\n4. Client sends Refresh Token to a specific `/refresh` endpoint.\n5. Server validates Refresh Token (usually against a database) and issues a new Access Token.\n\n**Security Tip:** Refresh tokens should be stored in an `HttpOnly` cookie to prevent XSS attacks.',
    options: ['They are identical to access tokens', 'Long-lived tokens used to get new short-lived access tokens', 'Tokens used for CSS styling', 'A way to encrypt passwords'],
    role: 'Full Stack Developer',
    skills: ['Security', 'Node.js', 'React']
  },
  {
    id: 'fs12',
    text: 'What are WebSockets and when should you use them?',
    answer: 'WebSockets provide a **full-duplex, persistent connection** between a client and a server. Unlike HTTP, which is request-response, WebSockets allow real-time, two-way communication.\n\n**Use Cases:**\n- Chat applications\n- Real-time notifications\n- Live sports updates / Stock tickers\n- Collaborative editing (like Google Docs)\n\n**Example (Socket.io):**\n```javascript\n// Server\nio.on("connection", (socket) => {\n  socket.emit("welcome", "Hello client!");\n  socket.on("message", (data) => {\n    io.emit("broadcast", data);\n  });\n});\n\n// Client\nconst socket = io("http://localhost:3000");\nsocket.on("welcome", (msg) => console.log(msg));\n```',
    options: ['A faster version of HTTP', 'A persistent connection for real-time, two-way communication', 'A database query language', 'A frontend layout engine'],
    role: 'Full Stack Developer',
    skills: ['Node.js', 'JavaScript']
  },
  // Python specific
  {
    id: 'p1',
    text: 'What is a decorator in Python?',
    answer: 'A **decorator** in Python is a design pattern that allows you to modify the behavior of a function or class. Decorators allow you to wrap another function in order to extend the behavior of the wrapped function, without permanently modifying it.\n\nIn Python, decorators are usually implemented as functions that take another function as an argument and return a new function.\n\n**Example:**\n```python\ndef my_decorator(func):\n    def wrapper():\n        print("Something is happening before the function is called.")\n        func()\n        print("Something is happening after the function is called.")\n    return wrapper\n\n@my_decorator\ndef say_hello():\n    print("Hello!")\n\nsay_hello()\n```',
    options: ['A way to style a UI', 'A function that takes another function and extends its behavior', 'A database type', 'A frontend framework'],
    role: 'Backend Developer',
    skills: ['Python']
  },
  {
    id: 'p3',
    text: 'How do you build a simple API with FastAPI?',
    answer: 'FastAPI is a modern, high-performance web framework for building APIs with Python 3.7+ based on standard Python type hints.\n\n**Key Features:**\n- **Fast**: Very high performance, on par with NodeJS and Go.\n- **Fast to code**: Increase speed to develop features by about 200% to 300%.\n- **Automatic Docs**: Generates interactive API documentation (Swagger UI) automatically.\n\n**Example:**\n```python\nfrom fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef read_root():\n    return {"Hello": "World"}\n\n@app.get("/items/{item_id}")\ndef read_item(item_id: int, q: str = None):\n    return {"item_id": item_id, "q": q}\n```',
    options: ['Using the FastAPI library', 'Using only standard Python lists', 'Through a frontend framework', 'By writing raw SQL'],
    role: 'Backend Developer',
    skills: ['Python', 'REST API']
  },
  {
    id: 'p2',
    text: 'Explain list comprehensions in Python.',
    answer: 'A concise way to create lists',
    options: ['A way to compress files', 'A concise way to create lists', 'A database query', 'A frontend feature'],
    role: 'Backend Developer',
    skills: ['Python']
  }
];
