import {connect, connection} from 'mongoose';

export async function dbConnect () {
    await connect(process.env.db);
    console.log(db.connections[0].readyState);
}

connection.on("connected", () => {
    console.log("mongoDB está conectado");
});

connection.on("error", (err) => {
    console.log("err");
})