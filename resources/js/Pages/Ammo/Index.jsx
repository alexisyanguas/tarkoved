import React, { useState } from "react";
import Layout from "../../Components/Layouts/Layout";
import { SVG } from "../../Components/Ammos/Svg";
import { caliberArrayWithSplit } from "../../Modules/format-calibers";
import {
    Caliber9x18PM,
    Caliber762x25TT,
    Caliber9x19PARA,
    Caliber9x21,
    Caliber1143x23ACP,
    Caliber9x33R,
    Caliber57x28,
    Caliber46x30,
    Caliber545x39,
    Caliber556x45NATO,
    Caliber762x35,
    Caliber762x39,
    Caliber366TKM,
    Caliber9x39,
    Caliber68x51,
    Caliber762x51,
    Caliber762x54R,
    Caliber127x55,
    Caliber86x70,
    Caliber12g,
    Caliber20g,
    Caliber23x75,
    Caliber40x46,
} from "../../Components/Ammos/Paths";

export default function Index({ layoutDatas, ammos }) {
    const [caliberArray, setCaliberArray] = useState(ammos);

    const caliberMap = caliberArrayWithSplit();

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
                    <div className="ammo-list_container"></div>
                </div>
            </div>
        </Layout>
    );
}
