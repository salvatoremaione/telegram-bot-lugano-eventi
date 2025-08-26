function formatDate(dateStr) {
  return Utilities.formatDate(new Date(dateStr), CONFIG.TIMEZONE, "dd MMM yyyy");
}
