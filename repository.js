async function insert(database, table, data) {
    const inserted = await database.table(table).add(data);
    return inserted;
}

async function getAll(database, table) {
    const foundAll = database.table(table).toArray();
    return foundAll;
}

async function getOne(database, table, clause, value) {
    const found = database.table(table).where(clause).equals(value).toArray();
    return found;
}

async function update(database, table, value, data) { 
    const updated = await database.table(table).where('id').equals(value).modify(data);
    return updated;
}

async function deleteOne(database, table, value) { 
    const deleted = await database.table(table).where('id').equals(value).delete();
    return deleted;
}
