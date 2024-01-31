require('dotenv').config({ path: '../.env' });
const { USER, PASSWORD } = process.env;
const mongoose = require('mongoose');

mongoose.set('strictQuery', true); // Address deprecation warning

async function main() {
    try {
        const uri = `mongodb+srv://${USER}:${PASSWORD}@ecomarket.loe0sev.mongodb.net/?retryWrites=true&w=majority`;
        const con = await mongoose.connect(uri);

        console.log(`mongodb connected: ${con.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

main().catch(console.error);

module.exports = mongoose;