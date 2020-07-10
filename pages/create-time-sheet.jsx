import Layout from "../components/Layout";
import withAuth from "../components/with-auth";
import { useState, useEffect } from "react";
import { useFetchUser } from "../utils/user";

export const CreateTimeSheet = () => {
    const [data, setData] = useState([]);
    const [timeSheet, setTimesheet] = useState([])
    useEffect(() => {
        async function getData() {
            const res = await fetch("/api/get-employees");
            const newData = await res.json();
            setData(newData);
        }
        getData();
    }, []);
    // set timesheet with useeffect so that we can get access to data state
    //
    useEffect(() => {
        data.map(d => (
            {
                id: d.data._id,
                name: d.data.fname + " " + d.data.lname,
                paycodes: []
            }
        ))
    })


    return (
        <Layout user={user} loading={loading}>
            <h1>Create a Timesheet</h1>
            < form >
                {console.log(output)}
                {data.map((d, dataindex) => (
                    <div key={d.data._id}>
                        <input value={`${d.data.fname} ${d.data.lname}`} />
                        <input type="number" placeholder="hours" />
                        <input type="text" placeholder="paycode" />
                        <button onClick={(e) => newRowHandler(e, data, d.data._id)}>Add row</button>
                    </div>
                )
                )
                }
            </form >

        </Layout >
    )
}

export default withAuth(CreateTimeSheet)