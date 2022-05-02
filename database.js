import Dexie from "dexie";

const database = new Dexie("database");

database.version(1).stores({
    users: "++id, name, email, password, boInactive, createdAt, updatedAt",
})

await database.open();

