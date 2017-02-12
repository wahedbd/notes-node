                console.log('Starting note.js');

                const fs = require('fs');

                var fetchNotes = () => {
                  try {
                    var notesString = fs.readFileSync('notes-data.json');
                    return JSON.parse(notesString);
                  } catch (e) {
                    return [];
                  }
                };

                var saveNotes = (notes) => {
                  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
                };

                var addNote = (title, body) => {
                  var notes = fetchNotes();
                  var note = {
                    title,
                    body
                  };
                  var duplicateNote = notes.filter((note) => note.title === title);

                  if (duplicateNote.length === 0) {
                    notes.push(note);
                    saveNotes(notes);
                    return note;
                  }
                };

                var getAll = () => {
                    console.log('Get all notes');
                };

                var getNote = (title) => {
                  console.log('Reading Note', title);
                }

                var removeNote = (title) => {
                  console.log('Deleting note', title);
                }
                module.exports = {
                  addNote,
                  getAll,
                  getNote,
                  removeNote
                };
