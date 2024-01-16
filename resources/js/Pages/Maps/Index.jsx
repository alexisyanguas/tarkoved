import React from "react";
import Layout from "../../Components/Layouts/Layout";

const Index = ({ layoutDatas, link }) => {
    return (
        <Layout title={layoutDatas.title} page={layoutDatas.page}>
            <a href="/test/maps/customs">Customs</a>
            <a href="/test/maps/interchange">Interchange</a>
        </Layout>
    );
};

export default Index;
