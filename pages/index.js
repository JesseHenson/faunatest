import { useEffect, useState } from "react";
import Head from "next/head";
import TableRow from "../components/TableRow";
import { useFetchUser } from "../utils/user";
import Layout from "../components/Layout";

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("/api");
      const newData = await res.json();
      setData(newData);
    }
    getData();
  }, []);
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user} loading={loading}>
      <Head>
        <title>Darwin Replacement</title>
      </Head>
      <h1>Darwin Replacement Home Page</h1>

      {/* <a href="/api/login">Login</a>
      <a href="/api/logout">Logout</a>
      <hr />
      <div className="container-scroll">
        <div className="container">
          <h2>Customer Data</h2>
          
          <div className="table">
            <h4>name</h4>
            <h4 className="telephone">telephone</h4>
            <h4 className="credit-card">credit card</h4>
          </div>
          {data.length > 0 ? (
            data.map((d) => (
              <TableRow
                key={d.data.telephone}
                creditCard={d.data.creditCard.number}
                firstName={d.data.firstName}
                lastName={d.data.lastName}
                telephone={d.data.telephone}
              />
            ))
          ) : (
            <>
              <TableRow loading />
              <TableRow loading />
              <TableRow loading />
            </>
          )}
        </div>
      </div> */}
    </Layout>
  );
};
