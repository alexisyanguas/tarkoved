import Layout from "../../Components/Layouts/Layout";
import { SVG } from "../../Components/Ammos/Svg";

import { _45_ACP, _9x19 } from "../../Components/Ammos/Paths";

export default function Index({ layoutDatas }) {
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
