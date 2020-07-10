import faunadb from "faunadb";
import auth0 from "../../utils/auth0";

// your secret hash
const secret = "fnADviZuanACCLa2ZelLzoN8jyIQm6NxH-tquSrk";
// const secret = process.env.FAUNADB_SECRET_KEY
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
                        q.Index("allClients") // specify source
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
