import './repository.js';

await insert(database, "users", {
    name: 'Nathan Felipe',
    email: 'nathanfguerlando@gmail.com',
    password: 'testedb',
    boInactive: 0,
    createdAt: new Date(),
    updateAt: ''
});

await getAll(database, "users");

await getOne(database, "users", "id", 1);

await update(database, "users", 1, {
    name: 'Nathan Felipe',
    email: 'nathanfguerlando@gmail.com',
    password: '123',
    updateAt: new Date()
});

await insert(database, "users", {
    name: 'Caio das Massas',
    email: 'cacaio@gmail.com',
    password: 'caiozin',
    boInactive: 0,
    createdAt: new Date(),
    updateAt: ''
});

await getOne(database, "users", "email", "cacaio@gmail.com");

await insert(database, "users", {
    name: 'Richardê',
    email: 'richardizinho@gmail.com',
    password: 'NathanIsTheBest',
    boInactive: 0,
    createdAt: new Date(),
    updateAt: ''
});

await deleteOne(database, "users", 3);

