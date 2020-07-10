import Layout from "../components/Layout"
import { useFetchUser } from "../utils/user"

export default () => {
    const { user, loading } = useFetchUser()
    return (
        <Layout user={user} loading={loading}>

            <form>
                <input type="text" placeholder="fname" />
                <input type="text" placeholder="lname" />
                <input type="text" placeholder="id" />
                <input type="text" placeholder="client" />
            </form>
        </Layout>
    )
}