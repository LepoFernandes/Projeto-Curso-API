
    
const dbUser = process.env.DB_USER 
const  dbPassword = process.env.DB_PASSWORD 


export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.kbb9ety.mongodb.net/?appName=Cluster0`,
    env: "development"
}