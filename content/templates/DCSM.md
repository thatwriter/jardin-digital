<%*
    // --- CONFIGURACIÓN ---
    const folderPath = "Zettelkasten/Físico";
    const filePrefix = "A";
    const indexFile = "Zettelkasten/Indice-zettelkasten.md";
    
    // --- GENERAR NÚMERO Y RENOMBRAR ---
    let files = app.vault.getFiles();
    let latestNoteNumber = 0;
    
    let latestNote = files
        .filter(file => file.path.startsWith(folderPath) && file.basename.startsWith(filePrefix))
        .sort((a, b) => {
            let numA = parseInt(a.basename.replace(filePrefix, ""));
            let numB = parseInt(b.basename.replace(filePrefix, ""));
            return numB - numA;
        })[0];
    
    if (latestNote) {
        latestNoteNumber = parseInt(latestNote.basename.replace(filePrefix, ""));
    }
    
    let newNoteNumber = latestNoteNumber + 1;
    let newTitle = `${filePrefix}${newNoteNumber}`;
    
    // Renombra la nota actual
    await tp.file.rename(newTitle);
    
    // --- OBTENER TÍTULO DEL USUARIO ---
    let titleInput = await tp.system.prompt("Ingresa el título para la nota:");
    
    // --- AGREGAR ENLACE AL ÍNDICE ---
    try {
        const noteToUpdate = app.vault.getAbstractFileByPath(indexFile);
        
        if (!noteToUpdate) {
            new Notice(`No se encontró el índice: ${indexFile}`, 4000);
        } else {
            // Crear el enlace con formato [[archivo|título visible]]
            const link = `\n- [[${newTitle}#${titleInput}]]`;
            
            // Leer y modificar el contenido del índice
            let content = await app.vault.read(noteToUpdate);
            content += link;
            await app.vault.modify(noteToUpdate, content);
            
            new Notice(`Enlace agregado a ${indexFile}`, 2000);
        }
    } catch (error) {
        new Notice(`Error al agregar enlace: ${error}`, 5000);
        console.error(error);
    }
    -%>