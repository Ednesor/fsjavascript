import { readFile, writeFile } from "fs/promises";
const copyFile = async () => {
    try {
        const archivoOrigen = process.argv.slice(2);
        const data = await readFile(archivoOrigen[0], "utf-8");
        return data;
    } catch (error) {
        console.error("Error: No se pudo leer el archivo");
    }
};

const pegarEnNuevoArchivo = async (data) => {
    try {
        const archivoDestino = process.argv.slice(3);
        if (archivoDestino.length === 0) {
            throw new Error(
                "Por favor, proporciona el nombre de un archivo destino."
            );
        }
        await writeFile(archivoDestino[0], data);
    } catch (error) {
        console.error("Error: ", error.message);
    }
};

async function main() {
    const data = await copyFile();
    pegarEnNuevoArchivo(data);
}

main();
