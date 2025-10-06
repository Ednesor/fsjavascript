import { rename } from "fs";
import { readFile, writeFile, unlink } from "fs/promises";

//? Ejercicio 2
const writeAndReadExample = async (nombre, edad, carrera) => {
    try {
        await writeFile(
            "datos.txt",
            `Nombre: ${nombre}\nEdad: ${edad}\nCarrera: ${carrera}\n`,
            "utf-8"
        );
        const data = await readFile("datos.txt", "utf-8");
        console.log(data);
        await writeFile(
            "datos.txt",
            `Fecha de modificación: [${new Date()
                .toISOString()
                .replace("T", " ")
                .substring(0, 19)}]\n`,
            { flag: "a", encoding: "utf-8" }
        )
            .then(() => {
                rename("datos.txt", "informacion.txt", (err) => {
                    if (err) throw err;
                    console.log("File renamed to informacion.txt");
                });
            })
            .then(() => {
                setTimeout(async () => {
                    await unlink("informacion.txt");
                    console.log("Archivo informacion.txt eliminado");
                }, 10000);
            });
    } catch (error) {
        console.error("Error writing file:", error);
    }
};

writeAndReadExample("Juan Perez", 30, "Ingeniería");
