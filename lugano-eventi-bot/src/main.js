function doPost(e) {
  try {
    const update = JSON.parse(e.postData.contents);
    handleUpdate(update); // in handlers.js
    return ContentService.createTextOutput('OK');
  } catch (error) {
    Logger.log(error);
    return ContentService.createTextOutput('Error').setMimeType(ContentService.MimeType.TEXT);
  }
}

// Optional: manual trigger for data refresh
function updateEventData() {
  fetchAndStoreEvents(); // in api.js
}
