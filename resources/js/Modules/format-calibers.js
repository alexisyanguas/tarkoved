

export const caliberArrayWithSplit = () => {
    const ammoTypes = Object.values(caliberMap).sort();

    let gaugeIndex = ammoTypes.findIndex(
        (ammoType) => ammoType.name === "12 Gauge"
    );
    let gaugeShot = {
        ...ammoTypes[gaugeIndex],
        name: `${ammoTypes[gaugeIndex].name} Shot`,
    };
    let slugShot = {
        ...ammoTypes[gaugeIndex],
        name: `${ammoTypes[gaugeIndex].name} Slug`,
    };

    ammoTypes.splice(gaugeIndex, 1, gaugeShot, slugShot);

    gaugeIndex = ammoTypes.findIndex(
        (ammoType) => ammoType.name === "20 Gauge"
    );
    gaugeShot = {
        ...ammoTypes[gaugeIndex],
        name: `${ammoTypes[gaugeIndex].name} Shot`,
    };
    slugShot = {
        ...ammoTypes[gaugeIndex],
        name: `${ammoTypes[gaugeIndex].name} Slug`,
    };

    ammoTypes.splice(gaugeIndex, 1, gaugeShot, slugShot);
    return ammoTypes;
};

export const formatCaliber = (caliber, type) => {
    let formattedCaliber =
        caliberMap[caliber] || caliber.replace("Caliber", "");

    if (formattedCaliber === "12 Gauge" || formattedCaliber === "20 Gauge") {
        if (type) formattedCaliber += type === "bullet" ? " Slug" : " Shot";
    }

    return formattedCaliber;
};
