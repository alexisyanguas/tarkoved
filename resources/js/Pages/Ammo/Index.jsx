import React, { useState } from "react";
import Layout from "../../Components/Layouts/Layout";
import { SVG } from "../../Components/Ammos/Svg";
import AmmoHeader from "../../Components/Ammos/AmmoHeader";
import AmmoItem from "../../Components/Ammos/AmmoItem";
import { caliberArrayWithSplit } from "../../Modules/format-calibers";

export default function Index({ layoutDatas, ammos }) {
    const calibers = caliberArrayWithSplit();
    const [caliberSelected, setCaliberSelected] = useState(null);

    return (
        <Layout
            title={layoutDatas.title}
            page={layoutDatas.page}
            user={layoutDatas.user}
        >
            <div className="ammo-parent_container">
                <div className="ammo-container">
                    <div className="ammo-filter_container">
                        {calibers.map((caliber, index) => {
                            return (
                                <button
                                    key={`caliber-${index}`}
                                    onClick={() => {
                                        setCaliberSelected(
                                            caliber.name ?? null
                                        );
                                    }}
                                    className={`ammo-basic-button_bullet ${
                                        caliberSelected === caliber.name &&
                                        "active"
                                    }`}
                                >
                                    <p>
                                        <SVG>{caliber?.component}</SVG>
                                    </p>
                                    <p>{caliber?.name}</p>
                                </button>
                            );
                        })}
                    </div>
                    <div className="ammo-list">
                        <AmmoHeader />
                        <div className="ammo-list_table">
                            {Object.entries(ammos).map((ammo, index) => {
                                return (
                                    <div key={`caliber_group-${index}`}>
                                        {ammo[1].map((ammo) => {
                                            return (
                                                <AmmoItem
                                                    ammo={ammo}
                                                    index={`caliber_group-${index}`}
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
