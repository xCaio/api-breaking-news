const mongoose = require('mongoose')

const connectDataBase = async() => {
    console.log("Wait connecting to the database")

    await mongoose
        .connect(
            "mongodb+srv://root:root@cluster0.gzsstj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        )
        .then(() => console.log("MongoDB Atlas Connected"))
        .catch((error) => console.log(error))
}

module.exports = connectDataBase