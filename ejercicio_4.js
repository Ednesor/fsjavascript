import { readFile } from "fs/promises";

const contadorDePalabras = async () => {
    try {
        const arg = process.argv.slice(2);
        if (arg.length === 0) {
            throw new Error("Por favor, proporciona el nombre de un archivo.");
        }
        const wordSearch = process.argv.slice(3);
        if (wordSearch.length === 0) {
            throw new Error(
                "Por favor, proporciona al menos una palabra a buscar."
            );
        }
        const data = await readFile(arg[0], "utf-8");

        const wordCount = data
            .replace(/[.,!?;()"'-]/g, "")
            .split(" ")
            .reduce((count, word) => {
                if (word.toLowerCase() === wordSearch[0].toLowerCase()) {
                    return count + 1;
                }
                return count;
            }, 0);

        console.log(
            `La palabra "${wordSearch[0]}" aparece ${wordCount} veces en el archivo "${arg[0]}".`
        );
    } catch (error) {
        console.error("Error:", error.message);
    }
};

contadorDePalabras();
