import { readFile, writeFile } from "fs/promises";

//? Ejercicio 3
const addNewContact = async (nombre, telefono, email) => {
    try {
        const data = JSON.parse(await readFile("contactos.json", "utf-8"));
        data.push({ nombre, telefono, email });
        await writeFile(
            "contactos.json",
            JSON.stringify(data, null, 2),
            "utf-8"
        );
    } catch (error) {
        console.error("Error writing file:", error);
    }
};

const readContacts = async () => {
    try {
        const data = JSON.parse(await readFile("contactos.json", "utf-8"));
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", error);
    }
};

const deleteByName = async (name) => {
    try {
        const data = JSON.parse(await readFile("contactos.json", "utf-8"));
        const filteredData = data.filter(
            (contact) => contact.nombre.toLowerCase() !== name.toLowerCase()
        );
        await writeFile(
            "contactos.json",
            JSON.stringify(filteredData, null, 2),
            "utf-8"
        );
    } catch (error) {
        console.error("Error writing file:", error);
    }
};

const jsonWriteReadExample = async () => {
    const initialContent = [
        {
            nombre: "Juan Pérez",
            telefono: "123-456-7890",
            email: "juan@example.com",
        },
    ];

    try {
        await writeFile(
            "contactos.json",
            JSON.stringify(initialContent, null, 2),
            "utf-8"
        );
        readContacts();
        await addNewContact("Edgardo Funes", 2615412365, "edgar@gmail.com");
        await readContacts();
        await deleteByName("Juan Pérez");
        await readContacts();
    } catch (error) {
        console.error("Error writing file:", error);
    }
};

jsonWriteReadExample();
