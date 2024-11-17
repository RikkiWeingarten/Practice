const knex = require("knex");
require("dotenv").config();

const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env;
const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    password: PGPASSWORD,
    database: PGDATABASE,
    ssl: { rejectUnauthorized: false },
  },
});

async function getVersion() {
  const result = await db.raw("select * from products where id = ? and name = ?",[3, 'Product 300']);
  console.log(result.rows);
}

// getVersion();
// db("products")
// .select('*')
// .where({id:2})
// .then(data => {
//     console.log(data);
// })

async function getQuery(){
    const rows = await db("products").select('*').where({id:2});
    console.log(rows);
}

// db('products')
//     .insert([{name:'Product XYZ', price:1234, description: 'XYZ is the best'},
//         {name:'Product XZZ', price:1234, description: 'XZZ is the best'}]
//         ,["id","name"])
//     .then(data => {
//         console.log(data);
//     })

// db('products')
// .update({name: 'Product ABC'}, ["id", "name"])
// .where({id: 7})
// .then(data => {
//     console.log(data);
// });

// db('products')
// .where({id: 3})
// .del()
// .returning('id')
// .then(data => {
//     console.log(data);
// }
// )

const test =  async() => {
    const trx = await db.transaction();
    try {
        const [prod] = await db("products").insert({name: 'F16', price: 1234456},['id'])
        .transacting(trx);
        console.log('product:',prod);

        await db('products').update({description: 'fantastic aircraft'}).where({id:prod.id})
        .transacting(trx);

        await trx.commit()
    } catch(error) {
        console.log();
        await trx.rollback();
    }
}

test()