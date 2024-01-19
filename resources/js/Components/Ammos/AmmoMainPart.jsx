const AmmoPenetration = ({ value, bgClass, index }) => {
    return (
        <p
            className={`ammo-list_table_row-main_data-info_penetration_class bg_${bgClass}`}
        >
            {value}
        </p>
    );
};

const getClassOnDependAmorDamageAndArmorClass = (penetration, armorClass) => {
    let value = (penetration * 100) / armorClass;
    switch (true) {
        case value >= 100:
            return {
                bgClass: "best",
                value: 6,
            };
        case value >= 86:
            return {
                bgClass: "good",
                value: 5,
            };
        case value >= 80:
            return {
                bgClass: "average",
                value: 4,
            };
        case value >= 71:
            return {
                bgClass: "belowaverage",
                value: 3,
            };
        case value >= 64:
            return {
                bgClass: "bad",
                value: 2,
            };
        case value >= 56:
            return {
                bgClass: "verybad",
                value: 1,
            };
        default:
            return {
                bgClass: "none",
                value: 0,
            };
    }
};

const armorClasses = [
    { id: 1, name: "Class 1", value: 10 },
    { id: 2, name: "Class 2", value: 20 },
    { id: 3, name: "Class 3", value: 30 },
    { id: 4, name: "Class 4", value: 40 },
    { id: 5, name: "Class 5", value: 50 },
    { id: 6, name: "Class 6", value: 60 },
];

const AmmoMainPart = ({ ammo }) => {
    return (
        <div className="ammo-list_table_row-main_data">
            <div className="ammo-list_table_row-main_data-icon">
                <img
                    src={ammo?.item.image512pxLink ?? ""}
                    alt={ammo?.item.shortName}
                />
                <p>{ammo?.item?.shortName}</p>
            </div>
            <div className="ammo-list_table_row-main_data-info">
                <span className="ammo-list_table_row-main_data-info_name">
                    {ammo?.item?.shortName}
                </span>
                <div className="ammo-list_table_row-main_data-info_penetration">
                    {armorClasses.map((armorClass, index) => {
                        const penetration =
                            getClassOnDependAmorDamageAndArmorClass(
                                ammo?.penetrationPower,
                                armorClass.value,
                                ammo
                            );

                        return (
                            <AmmoPenetration
                                key={`penetration-${index}`}
                                bgClass={penetration?.bgClass}
                                value={penetration?.value}
                                index={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AmmoMainPart;
