import React, { useState } from "react";
import Layout from "../../Components/Layouts/Layout";
import { SVG } from "../../Components/Ammos/Svg";
import { caliberArrayWithSplit } from "../../Modules/format-calibers";

export default function Index({ layoutDatas, ammos }) {
    const [caliberArray, setCaliberArray] = useState(ammos);
    const caliberMap = caliberArrayWithSplit();
    console.log(caliberMap);

    const skipTypes = [
        "Caliber30x29",
        "Caliber127x108",
        "Caliber26x75",
        "Caliber40mmRU",
    ];

    return (
        <Layout
            title={layoutDatas.title}
            page={layoutDatas.page}
            user={layoutDatas.user}
        >
            <div className="ammo-parent_container">
                <div className="ammo-container">
                    <div className="ammo-filter_container">
                        {Object.keys(caliberArray).map((caliberGroup, key) => {
                            if (skipTypes.includes(caliberGroup)) return;
                            return (
                                <button
                                    className="ammo-basic-button_bullet"
                                    key={key}
                                >
                                    <p>
                                        <SVG>
                                            {
                                                caliberMap[caliberGroup]
                                                    ?.component
                                            }
                                        </SVG>
                                    </p>
                                    <p>{caliberMap[caliberGroup]?.name}</p>
                                </button>
                            );
                        })}
                    </div>
                    <div className="ammo-list_header">
                        <div className="ammo-list_header_searchBar">
                            <div classNam="ammo-list_header_searchBar_wrapp">
                                
                            </div>
                        </div>
                    </div>
                    <div className="ammo-list_table">
                        <div className="ammo-list_table_row">
                            <div className="ammo-list_table_row-data">
                                <div className="ammo-list_table_row-main_data">
                                    <div className="ammo-list_table_row-main_data-icon">
                                        <img src="/img/traders/54cb50c76803fa8b248b4571.jpg" />
                                        <p>M61</p>
                                    </div>
                                    <div className="ammo-list_table_row-main_data-info">
                                        <span className="ammo-list_table_row-main_data-info_name">
                                            M61
                                        </span>
                                        <div className="ammo-list_table_row-main_data-info_penetration">
                                            <p className="ammo-list_table_row-main_data-info_penetration_class ammo-list_table_row-main_data-info_penetration_class_best">
                                                6
                                            </p>
                                            <p className="ammo-list_table_row-main_data-info_penetration_class ammo-list_table_row-main_data-info_penetration_class_best">
                                                6
                                            </p>
                                            <p className="ammo-list_table_row-main_data-info_penetration_class ammo-list_table_row-main_data-info_penetration_class_best">
                                                6
                                            </p>
                                            <p className="ammo-list_table_row-main_data-info_penetration_class ammo-list_table_row-main_data-info_penetration_class_good">
                                                5
                                            </p>
                                            <p className="ammo-list_table_row-main_data-info_penetration_class ammo-list_table_row-main_data-info_penetration_class_average">
                                                4
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ammo-list_table_row-damage">
                                    78
                                </div>
                                <div className="ammo-list_table_row-penetration">
                                    2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
