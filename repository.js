async function insert(database, table, data) {
    return await database.table(table).add(data);
}

async function getAll(database, table) {
    return await database.table(table).toArray();
}

async function getOne(database, table, clause, value) {
    return await database.table(table).where(clause).equals(value).toArray();
}

async function update(database, table, value, data) { 
    return await database.table(table).where('id').equals(value).modify(data);
}

async function deleteOne(database, table, value) { 
    return await database.table(table).where('id').equals(value).delete();
}
