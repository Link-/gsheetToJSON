/**
 * This is the code for a Google Web App that will transform a sheet into nested JSON Object
 * which will be used to populate a front-end React application.
 * 
 * Instructions:
 * 1. Do not run this code directly.
 * 2. This project needs to Published as a Web App
 * 3. This project runs by calling the URL provided by completing step #2
 * 4. If you need to test the output, set DEBUG_MODE to true and run 'main.gs' then see the output in "View > Logs"
 */
function doGet(e) {
  var DEBUG_MODE = false;
  var SHEET_NAME = "";
  var SHEET_ID   = "";

  var book = SpreadsheetApp.openById(SHEET_ID);
  var sheet = book.getSheetByName(SHEET_NAME);

  var json = sheetToJSON(sheet);

  if (DEBUG_MODE)
    Logger.log(JSON.stringify(json));

  return ContentService
          .createTextOutput(JSON.stringify(json))
          .setMimeType(ContentService.MimeType.JSON);
}