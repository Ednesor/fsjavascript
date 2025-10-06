import { writeFile } from "fs/promises";
const writeFileExample = async () => {
    try {
        setTimeout(async () => {
            await writeFile(
                "log.txt",
                `[${new Date()
                    .toISOString()
                    .replace("T", " ")
                    .substring(0, 19)}] - Tarea completada\n`,
                { flag: "a", encoding: "utf-8" }
            );
        }, 5000);
        await writeFile(
            "log.txt",
            `[${new Date()
                .toISOString()
                .replace("T", " ")
                .substring(0, 19)}] - Inicio del programa\n`,
            "utf-8"
        );
        await writeFile(
            "log.txt",
            `[${new Date()
                .toISOString()
                .replace("T", " ")
                .substring(0, 19)}] - Ejecutando tarea\n`,
            { flag: "a", encoding: "utf-8" }
        );
    } catch (error) {
        console.error("Error writing file:", error);
    }
};

writeFileExample();
