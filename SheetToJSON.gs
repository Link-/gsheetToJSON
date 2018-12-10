/**
 * Recursively transform a sheet into JSON (and handle nesting scenarios)
 */
function sheetToJSON(sheet) {
  // The first row will contain the header to be used as keys 
  var firstRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
  var firstRowValues = firstRange.getValues();
  var titleColumns = firstRowValues[0];
  // Retrieve the remaining rows as the data
  // getLastRow()-1 will prevent the retrieval of a last empty row
  var data = sheet.getRange(2, 1, sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
  
  var result = data.map(function(row) {
    // We loop over each row in order to recursively go through its
    // values and construct the nested object
    var obj = {};

    titleColumns.forEach(function(val, idx) {
      obj = constructObj(val, obj, row[idx]);
    });

    return obj;
  });
  
  function constructObj(str, parentObj, data) {
    // Base case
    if (str.split('-').length === 1) {
      parentObj[str] = data;
      return parentObj;
    }

    var curKey = str.split('-')[0];
    
    if (!parentObj[curKey]) {
      parentObj[curKey] = {};
    }
    
    parentObj[curKey] = constructObj(str.split('-').slice(1).join('-'), parentObj[curKey], data);
    return parentObj;
  }

  return result;
}
