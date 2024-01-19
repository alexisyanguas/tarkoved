import React, { useEffect } from "react";
import Layout from "../../Components/Layouts/Layout";

const Show = ({ layoutDatas, content = "", map }) => {
    const sites = ["mapgenie", "tarkovdev"];
    const [selectedSite, setSelectedSite] = React.useState(sites[0]);
    const [link, setLink] = React.useState(map[selectedSite].link);

    const [isLoad, setIsLoad] = React.useState(true);

    const handleChangeMap = (e) => {
        setSelectedSite(e.target.value);
    };

    useEffect(() => {
        setIsLoad(true);
        setLink(map[selectedSite].link);
    }, [selectedSite]);

    return (
        <Layout
            title={layoutDatas.title}
            page={layoutDatas.page}
            user={layoutDatas.user}
            isLoad={isLoad}
        >
            <div className="absolute top-2 left-36 z-50 flex justify-center items-center">
                <button
                    onClick={handleChangeMap}
                    value={sites[0]}
                    type="button"
                    class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Map Genie
                </button>
                <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleChangeMap}
                    value={sites[1]}
                >
                    Tarkov Dev
                </button>
            </div>
            <iframe
                onLoad={() => {
                    setIsLoad(false);
                    document
                        .querySelector(".layout-header_container")
                        .classList.add("fixed");
                }}
                src={link}
                style={{ width: "100%", height: "100vh" }}
            ></iframe>
        </Layout>
    );
};

export default Show;
