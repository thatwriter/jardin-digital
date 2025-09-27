async function addLinkToNote(tp) {
    // Obtiene el objeto de la nota activa (la que se está creando).
    const activeFile = tp.file.path(true); // Uso de la API de Templater para obtener el archivo activo

    // Reemplaza "Diario/Inicio.md" con la ruta a la nota a la que quieres agregar el enlace.
    const noteToUpdate = app.vault.getAbstractFileByPath("Diario/Inicio.md");

    if (!noteToUpdate) {
        new Notice("No se encontró la nota 'Inicio'.", 4000);
        return;
    }

    // Crea el enlace en formato Markdown.
    const link = `\n- [[${tp.file.title}]]`; // tp.file.title para el nombre sin la extensión .md

    // Lee el contenido de la nota de destino.
    let content = await app.vault.read(noteToUpdate);

    // Agrega el enlace al final del contenido.
    content += link;

    // Escribe el nuevo contenido en la nota.
    await app.vault.modify(noteToUpdate, content);

    // Opcional: muestra una notificación de éxito.
    new Notice("Enlace agregado a 'Diario/Inicio'.", 4000);

    // Es mejor no devolver nada o devolver una cadena vacía para una ejecución limpia.
    return "";
}

// Exporta la función para que Templater pueda ejecutarla.
module.exports = addLinkToNote;