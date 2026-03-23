import { createServer, IncomingMessage , ServerResponse} from "node:http";
import { readFile } from "fs/promises";
import  serveStatic from "serve.static"; 


const PORT = Number(process.env.PORT || 3000);

const notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: "2024-06-10T17:30:31.098Z",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        date: "2024-06-10T18:39:34.091Z",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        date: "2024-06-10T19:20:14.298Z",
        important: true
    }
];

const app = (request: IncomingMessage, response: ServerResponse) => {
try {
    console.log(request.url, request.method);
    console.log(request.headers);






    if (request.method==="PUT") {
        response.statusCode = 405;
        response.end();
    return
}

if (request.method==="POST") {
    response.statusCode = 201;
}

switch (request.url) {
    case "/api":
        const html = await readFile("./src/index.html", {encoding: "utf-8"})
        response.setHeader("Content-Type", "text/html; charset=utf-8");
        response.end(html);
        break;

    case "/notes":
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify(notes));
       // response.write(notes);
        response.end();
        break;

        default:
        response.statusCode = 404;
        response.end();
        break;

    }

    return  
}catch (error) {
    console.error((error as Error).message);
}
}
const server = createServer(app);


server.listen(PORT, () => {
    console.log(`Server demo listening on port ${PORT}`)
});
