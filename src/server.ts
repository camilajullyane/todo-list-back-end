import Fastify from "fastify";

const app = Fastify();

app.get("/hello", () => {
    return "hello world"
})


app.listen({
    port: 3333,

}).then(() => {
    console.log('RODOU')
})