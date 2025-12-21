<%*
    // --- CONFIGURACIÓN ---
    const folderPath = "Recursos/Imagenes";
    const filePrefix = "I";
    
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
    let titleInput = await tp.system.prompt("Ingresa el título para la foto:");
    let contextInput = await tp.system.prompt("Ingresa el contexto de la foto:");
    let linkInput = await tp.system.prompt("Ingresa el vínculo a la foto:");
    let fileInput = await tp.system.prompt("Ingresa el nombre del archivo:");
    -%>---
title: <% titleInput %>
---
fecha de captura: <% tp.date.now("YYYY-MM-DD") %>

contexto: <% contextInput %>

nombre del archivo: <% fileInput %>

![img](<% linkInput %>)