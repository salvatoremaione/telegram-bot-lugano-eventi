function fetchAndStoreEvents() {
  const response = UrlFetchApp.fetch(`${CONFIG.BASE_URL}/events`);
  const events = JSON.parse(response.getContentText());
  // Store in cache or script properties
  PropertiesService.getScriptProperties().setProperty('EVENTS', JSON.stringify(events));
  return events;
}

function getEvents() {
  const stored = PropertiesService.getScriptProperties().getProperty('EVENTS');
  return stored ? JSON.parse(stored) : [];
}
