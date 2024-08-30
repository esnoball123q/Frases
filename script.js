document.addEventListener("DOMContentLoaded", () => {
    const notesContainer = document.querySelector('.notes-container');

    const sampleNotes = [
        'El cambio más pequeño en tu día a día puede provocar una gran transformación en tu vida.',
        'Lo que das, regresa a ti multiplicado.',
        'Los sueños no se cumplen, se trabajan.',
        'El éxito no es el destino, sino el proceso de seguir adelante a pesar de las caídas.',
        'No necesitas tener todo resuelto para dar el primer paso.',
        'El fracaso no es lo contrario al éxito, es parte de él.',
        'La vida es demasiado corta para no vivirla haciendo lo que amas.',
        'Rodéate de personas que sumen, no que resten.',
        'A veces, lo que más te asusta es lo que más necesitas hacer.',
        'El propósito de la vida es encontrar el propósito de tu vida.',
    ];

    sampleNotes.forEach(text => {
        const note = document.createElement('div');
        note.classList.add('note');

        const noteContent = document.createElement('div');
        noteContent.classList.add('note-content');
        noteContent.textContent = text;

        note.appendChild(noteContent);
        notesContainer.appendChild(note);

        note.addEventListener('click', () => {
            const expandedNote = document.querySelector('.note.expanded');

            if (expandedNote && expandedNote !== note) {
                expandedNote.classList.remove('expanded');
            }

            note.classList.toggle('expanded');

            if (note.classList.contains('expanded')) {
                notesContainer.classList.add('container-blur');
            } else {
                notesContainer.classList.remove('container-blur');
            }
        });
    });
});
