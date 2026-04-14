const fs = require("fs");
const path = require("path");

const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];

const roots = [
    {
        base: path.join(process.cwd(), "public", "gallery"),
        mode: "gallery",
    },
    {
        base: path.join(process.cwd(), "public", "products"),
        mode: "products",
    },
];

function getImageKey(filename) {
    return filename.replace(/\.[^/.]+$/, "");
}

function toTitleCaseFromKey(key) {
    return key
        .replace(/[-_]+/g, " ")
        .split(" ")
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

function syncFolder(basePath, mode) {
    if (!fs.existsSync(basePath)) {
        console.log(`Skipping missing folder: ${basePath}`);
        return;
    }

    const folders = fs.readdirSync(basePath);

    folders.forEach((folder) => {
        const folderPath = path.join(basePath, folder);

        if (!fs.statSync(folderPath).isDirectory()) {
            return;
        }

        const descriptionFile = path.join(folderPath, "descriptions.json");

        let descriptions = {};
        if (fs.existsSync(descriptionFile)) {
            try {
                descriptions = JSON.parse(fs.readFileSync(descriptionFile, "utf8"));
            } catch (error) {
                console.error(`Could not parse ${descriptionFile}`);
                throw error;
            }
        }

        const imageFiles = fs
            .readdirSync(folderPath)
            .filter((file) =>
                validExtensions.includes(path.extname(file).toLowerCase())
            );

        const imageKeys = imageFiles.map(getImageKey);

        if (mode === "gallery") {
            imageKeys.forEach((key) => {
                if (!(key in descriptions)) {
                    descriptions[key] = "";
                }
            });

            Object.keys(descriptions).forEach((key) => {
                if (key === "_coverImage") {
                    return;
                }

                if (!imageKeys.includes(key)) {
                    delete descriptions[key];
                }
            });

            const sortedDescriptions = {};

            if (typeof descriptions._coverImage === "string") {
                sortedDescriptions._coverImage = descriptions._coverImage;
            }

            Object.keys(descriptions)
                .filter((key) => key !== "_coverImage")
                .sort()
                .forEach((key) => {
                    sortedDescriptions[key] = descriptions[key];
                });

            fs.writeFileSync(
                descriptionFile,
                JSON.stringify(sortedDescriptions, null, 2) + "\n",
                "utf8"
            );
        }

        if (mode === "products") {
            imageKeys.forEach((key) => {
                if (!(key in descriptions)) {
                    descriptions[key] = {
                        title: toTitleCaseFromKey(key),
                        description: "",
                        price: "",
                    };
                } else if (
                    typeof descriptions[key] !== "object" ||
                    descriptions[key] === null ||
                    Array.isArray(descriptions[key])
                ) {
                    descriptions[key] = {
                        title: toTitleCaseFromKey(key),
                        description: "",
                        price: "",
                    };
                } else {
                    descriptions[key] = {
                        title:
                            typeof descriptions[key].title === "string"
                                ? descriptions[key].title
                                : toTitleCaseFromKey(key),
                        description:
                            typeof descriptions[key].description === "string"
                                ? descriptions[key].description
                                : "",
                        price:
                            typeof descriptions[key].price === "string"
                                ? descriptions[key].price
                                : "",
                    };
                }
            });

            Object.keys(descriptions).forEach((key) => {
                if (!imageKeys.includes(key)) {
                    delete descriptions[key];
                }
            });

            const sortedDescriptions = Object.keys(descriptions)
                .sort()
                .reduce((acc, key) => {
                    acc[key] = descriptions[key];
                    return acc;
                }, {});

            fs.writeFileSync(
                descriptionFile,
                JSON.stringify(sortedDescriptions, null, 2) + "\n",
                "utf8"
            );
        }

        console.log(`Synced: ${path.relative(process.cwd(), descriptionFile)}`);
    });
}

function run() {
    roots.forEach(({ base, mode }) => syncFolder(base, mode));
    console.log("Gallery + products sync complete.");
}

run();