import React, { useEffect } from "react";
import Layout from "../../Components/Layouts/Layout";

const Show = ({ layoutDatas, content = "", link }) => {
    return (
        <Layout
            title={layoutDatas.title}
            page={layoutDatas.page}
            user={layoutDatas.user}
        >
            <iframe
                onLoad={() => {
                    document
                        .querySelector(".layout-header_container")
                        .classList.add("fixed");
                }}
                src={link}
                style={{ width: "100%", height: "100vh" }}
            ></iframe>
            {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
        </Layout>
    );
};

export default Show;
