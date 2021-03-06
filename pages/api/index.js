import faunadb from "faunadb";
import auth0 from "../../utils/auth0";

// your secret hash
const secret = "fnADvdhmCFACDBjfW0jtlK6NXgHaFlGC8m7RF771";
// const secret = process.env.FAUNADB_SECRET_KEY
console.log(secret);
const q = faunadb.query;
const client = new faunadb.Client({ secret });

export default async function (req, res) {
  try {
    const tokenCache = await auth0.tokenCache(req, res);
    const { accessToken } = await tokenCache.getAccessToken();
    const dbs = await client.query(
      q.Map(
        // iterate each item in result
        q.Paginate(
          // make paginatable
          q.Match(
            // query index
            q.Index("all_customers") // specify source
          )
        ),
        (ref) => q.Get(ref) // lookup each result by its reference
      )
    );
    // ok
    res.status(200).json(dbs.data);
  } catch (e) {
    // something went wrong
    console.log(e.message);
    res.status(500).json({ error: e.message });
  }
}
