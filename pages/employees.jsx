import Layout from "../components/Layout"
import Head from "next/head"
import useSWR from 'swr'
import { useFetchUser } from "../utils/user"
import { useState, useEffect } from "react"

export default () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function getData() {
            const res = await fetch("/api/get-employees");
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
            <table>
                <thead>
                    <th>Employee ID</th>
                    <th>Employee Name</th>
                </thead>
                <tbody>
                    {data.map(d => (

                        <tr>
                            <td>{d.data.id}</td>
                            <td>{d.data.fname} {d.data.lname}</td>
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