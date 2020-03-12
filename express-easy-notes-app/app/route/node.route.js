module.exports = (app) => {
    const notes = require('../controller/node.controller.js');

    //create a new note
    app.post('notes', notes.create);

    //retrieve all note
    app.get('notes', notes.findAll);

    //retrive a single note with noteId
    app.get('notes/:noteId', notes.findOne);

    //update a note with noteId
    app.put('/notes/:noteId', notes.update);

    //Delete a note with noteId
    app.delete('/notes/:nodeId', notes.delete);
}