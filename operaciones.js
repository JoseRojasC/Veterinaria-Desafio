import { readFile, writeFile } from "fs/promises";

const registrar = async (nombre, edad, animal, color, enfermedad) => {
    try {
        // Leer el archivo JSON
        const citas = JSON.parse(await readFile("citas.json", "utf-8"));
        
        // Crear la nueva cita
        const nuevaCita = { nombre, edad, animal, color, enfermedad };

        // Agregar la nueva cita al arreglo
        citas.push(nuevaCita);

        // Guardar el arreglo actualizado en el archivo
        await writeFile("citas.json", JSON.stringify(citas, null, 2));

        console.log("Cita registrada con éxito.");
    } catch (error) {
        console.error("Error registrando la cita:", error);
    }
};

const leer = async () => {
    try {
        // Leer el archivo JSON
        const citas = JSON.parse(await readFile("citas.json", "utf-8"));

        // Mostrar las citas
        console.log("Citas registradas:", citas);
    } catch (error) {
        console.error("Error leyendo las citas:", error);
    }
};


export { registrar, leer };
