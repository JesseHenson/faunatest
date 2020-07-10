import Layout from "../components/Layout"
import Head from "next/head"
import useSWR from 'swr'
import { useFetchUser } from "../utils/user"
import { useState, useEffect } from "react"
import withAuth from "../components/with-auth"

export const ClientsPage = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await fetch("/api/get-clients");
            const newData = await res.json();
            setData(newData);
        }
        getData();
    }, []);
    const { user, loading } = useFetchUser()

    return (
        <Layout user={user} loading={loading}>
            <Head>
                <title>Employee List</title>
            </Head>
            <a href="/new-employee">Add Employee</a>
            <table>
                <thead>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                </thead>
                {console.log(data)}
                <tbody>
                    {data.map(d => (

                        <tr>
                            <td>{d.data.id}</td>
                            <td>{d.data.name}</td>
                        </tr>
                    )
                    )}
                    <tr>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </Layout>
    )
}

export default withAuth(ClientsPage)