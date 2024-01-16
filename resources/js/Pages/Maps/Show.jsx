import React from "react";
import Layout from "../../Components/Layouts/Layout";

const Show = ({ layoutDatas, link }) => {
    return (
        <Layout title={layoutDatas.title} page={layoutDatas.page}>
            <iframe
                src={link}
                style={{ width: "100%", height: "calc(100vh - 40px)" }}
            ></iframe>
        </Layout>
    );
};

export default Show;
