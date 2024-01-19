import AmmoMainPart from "./AmmoMainPart";

export const AmmoInfoItem = ({ className, text }) => {
    return (
        <div className={`ammo-list_table_row-item ${className}`}>{text}</div>
    );
};

const AmmoItem = ({ ammo, index }) => {
    const getRecoilClass = ({ float }) => {
        switch (true) {
            case float < 0:
                return "best";
            case float * 100 <= 25:
                return "average";
            case float * 100 <= 50:
                return "belowaverage";
            case float * 100 <= 100:
                return "bad";
            case float * 100 > 100:
                return "none";
            default:
                return "";
        }
    };

    const getAccuracyClass = ({ float }) => {
        switch (true) {
            case float < 0:
                return "none";
            case float * 100 <= 100:
                return "good";
            case float * 100 > 100:
                return "best";
            default:
                return "";
        }
    };

    return (
        <div
            className="ammo-list_table_row"
            key={`${index}-ammo-${ammo.item.id}`}
        >
            <div className="ammo-list_table_row-data">
                <AmmoMainPart ammo={ammo} />
                <div className="ammo-list_table_row-other_data">
                    <AmmoInfoItem className="damage" text={ammo?.damage} />
                    <AmmoInfoItem
                        className="penetration"
                        text={ammo?.penetrationPower}
                    />
                    <AmmoInfoItem
                        className="frag"
                        text={
                            (ammo?.fragmentationChance * 100).toFixed(0) + "%"
                        }
                    />

                    <AmmoInfoItem
                        className={`recoil ${getRecoilClass({
                            float: ammo?.recoilModifier,
                        })}`}
                        text={
                            ammo?.recoilModifier
                                ? Math.round(ammo?.recoilModifier * 100)
                                : ""
                        }
                    />
                    <AmmoInfoItem
                        className={`accuracy ${getAccuracyClass({
                            float: ammo?.accuracyModifier,
                        })}`}
                        text={
                            ammo?.accuracyModifier
                                ? `${Math.round(
                                      ammo?.accuracyModifier * 100
                                  )} %`
                                : ""
                        }
                    />

                    <AmmoInfoItem
                        className={`speed`}
                        text={`${ammo?.initialSpeed} m/s`}
                    />
                </div>
            </div>
        </div>
    );
};

export default AmmoItem;
