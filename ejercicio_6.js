import { mkdirSync } from "fs";
import { writeFile, appendFile,readFile } from "fs/promises";

const createDirectory = (path) => {
    try {
        mkdirSync(path);
        console.log("Directorio creado exitosamente");
    } catch (error) {
        if (error.code === "EEXIST") {
            console.log("El directorio ya existe");
        } else {
            console.error("Error:", error.message);
        }
    }
};
const createLogFile = async () => {
    const fecha = new Date().toISOString().replace("T", " ").substring(0, 19);
    try {
        await writeFile(
            "./logs/app.log",
            `[${fecha}] - Ejecucion exitosa\n`,
            "utf-8"
        );
    } catch (error) {
        console.error("Error:", error.message);
    }
};

const rellenarArchivo = async (iterator) => {
    try {
        const promesas = [];
        
        for (let i = 0; i < iterator; i++) {
            const promesa = new Promise((resolve) => {
                setTimeout(async () => {
                    try {
                        const fecha = new Date()
                            .toISOString()
                            .replace("T", " ")
                            .substring(0, 19);
                        await appendFile(
                            "logs/app.log",
                            `[${fecha}] - Ejecucion exitosa ${i + 1}\n`,
                            "utf-8"
                        );
                        resolve();
                    } catch (error) {
                        console.error("Error en iteración:", error.message);
                        resolve(); 
                    }
                }, 1000 * (i + 1)); 
            });
            promesas.push(promesa);
        }
        
        await Promise.all(promesas);
        console.log("Archivo rellenado completamente");
        
    } catch (error) {
        console.error("Error:", error.message);
    }
};

const mostrarUltimasLineas = async (numLineas) => {
    try {
        const data = await readFile("logs/app.log", "utf-8");
        const lineas = data.trim().split("\n");
        const ultimasLineas = lineas.slice(-numLineas);
        console.log(ultimasLineas.join("\n"));
    } catch (error) {
        console.error("Error:", error.message);
    }
}

async function main() {
    createDirectory("logs");
    // await createLogFile();
    // await rellenarArchivo(50);
    await mostrarUltimasLineas(5);
}

main();
