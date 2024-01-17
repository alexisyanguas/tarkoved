import Layout from "../../Components/Layouts/Layout";
import { SVG } from "../../Components/Ammos/Svg";

import { _45_ACP, _9x19 } from "../../Components/Ammos/Paths";

export default function Index({ layoutDatas }) {
    const caliberMap = {
        Caliber366TKM: ".366",
        Caliber556x45NATO: "5.56x45 mm",
        Caliber1143x23ACP: ".45 ACP",
        Caliber127x55: "12.7x55 mm",
        Caliber23x75: "23x75 mm",
        Caliber46x30: "4.6x30 mm",
        Caliber545x39: "5.45x39 mm",
        Caliber57x28: "5.7x28 mm",
        Caliber762x25TT: "7.62x25 mm TT",
        Caliber762x35: ".300 Blackout",
        Caliber762x39: "7.62x39 mm",
        Caliber762x51: "7.62x51 mm",
        Caliber762x54R: "7.62x54R",
        Caliber86x70: ".338 Lapua Magnum",
        Caliber9x18PM: "9x18 mm",
        Caliber9x19PARA: "9x19 mm",
        Caliber9x21: "9x21 mm",
        Caliber9x39: "9x39 mm",
        Caliber20g: "20 Gauge",
        Caliber12g: "12 Gauge",
        Caliber9x33R: ".357 Magnum",
    };

    return (
        <Layout page={layoutDatas.page} title={layoutDatas.title}>
            <div className="ammo-parent_container">
                <div className="ammo-container">
                    <div className="ammo-filter_container">
                        <button class="ammo-basic-button_bullet">
                            <SVG>
                                <_45_ACP />
                            </SVG>

                            <p class="ammo-left-icon">.45 ACP</p>
                        </button>
                        <button class="ammo-basic-button_bullet">
                            <p>
                                <SVG>
                                    <_9x19 />
                                </SVG>
                            </p>
                            <p class="ammo-left-icon">.9x19</p>
                        </button>
                    </div>
                    <div className="ammo-list_container"></div>
                </div>
            </div>
        </Layout>
    );
}
