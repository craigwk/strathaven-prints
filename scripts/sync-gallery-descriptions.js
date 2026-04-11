const fs = require("fs");
const path = require("path");

const galleryBase = path.join(process.cwd(), "public", "gallery");
const validExtensions = [".jpg", ".jpeg", ".png", ".webp"];

function getImageKey(filename) {
    return filename.replace(/\.[^/.]+$/, "");
}

function syncDescriptions() {
    if (!fs.existsSync(galleryBase)) {
        console.error(`Gallery folder not found: ${galleryBase}`);
        process.exit(1);
    }

    const folders = fs.readdirSync(galleryBase);

    folders.forEach((folder) => {
        const folderPath = path.join(galleryBase, folder);

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
            .filter((file) => validExtensions.includes(path.extname(file).toLowerCase()));

        const imageKeys = imageFiles.map(getImageKey);

        // Add missing keys
        imageKeys.forEach((key) => {
            if (!(key in descriptions)) {
                descriptions[key] = "";
            }
        });

        // Remove keys for images that no longer exist
        Object.keys(descriptions).forEach((key) => {
            if (!imageKeys.includes(key)) {
                delete descriptions[key];
            }
        });

        // Sort keys alphabetically
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

        console.log(`Synced: ${path.relative(process.cwd(), descriptionFile)}`);
    });

    console.log("Gallery descriptions sync complete.");
}

syncDescriptions();