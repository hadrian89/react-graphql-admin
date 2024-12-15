const path = require("path");

const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"))
const middlewares = jsonServer.defaults();
// const productData = required('./product');


server.use(middlewares);
server.use(jsonServer.bodyParser);

const generateJwtToken = () => {
    return {
        jwtToken: "bearer khkj"
    }
}

const sendResponse = (res, data, code = 200) => {
    setTimeout(() => {
        const MOCK_CONFIG = generateJwtToken();
        res.header('Access-Control-Expose-Headers', 'Authorization')
        res.header('Authorization', MOCK_CONFIG.jwtToken)
        res.status(code).jsonp(data)
    }, 900)
}

server.get('/test', (req, res) => {
    sendResponse(res, { test: "test" }, 200)
})

server.use(router);

server.render = (req, res) => {
    res.jsonp(res.locals.data);
}

const PORT = 3001;
server.listen(PORT, () => {
    console.log("mock server running at port" + PORT)
})