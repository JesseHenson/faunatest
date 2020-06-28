const faunadb = require('faunadb')

// your secret hash
const secret = 'fnADvdhmCFACDBjfW0jtlK6NXgHaFlGC8m7RF771'
console.log(secret)
const q = faunadb.query
const client = new faunadb.Client({ secret })

module.exports = async (req, res) => {
    try {
        const dbs = await client.query(
            q.Map(
                // iterate each item in result
                q.Paginate(
                    // make paginatable
                    q.Match(
                        // query index
                        q.Index('all_customers') // specify source
                    )
                ),
                ref => q.Get(ref) // lookup each result by its reference
            )
        )
        // ok
        console.log(dbs)
        res.status(200).json(dbs.data)
    } catch (e) {
        // something went wrong
        console.log(e.message)
        res.status(500).json({ error: e.message })
    }
}