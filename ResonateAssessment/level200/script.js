// TODO: Modify this function
document.onkeydown = function (e) {
  if (event.keyCode == 123) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
    return false;
  }
  if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
    return false;
  }
};
let encrypted;
function generateShortCode(storeId, transactionId) {
  let randomVal = Math.floor(Math.random() * 999999999) + 1;
  let today = new Date();
  const secretVal = `${today.getTime()} ${storeId} ${transactionId}`;
  encrypted = CryptoJS.AES.encrypt(secretVal, randomVal.toString()); //.toString();
  return randomVal.toString();
}

// TODO: Modify this function
function decodeShortCode(shortCode) {
  // Logic goes here
  if (!encrypted) {
    return { storeId: -1, shopDate: new Date(), transactionId: -1 };
  }
  const decrypted = CryptoJS.AES.decrypt(encrypted, shortCode).toString(
    CryptoJS.enc.Utf8
  );
  const values = decrypted.split(" ");
  const storeId = parseInt(values[1]);
  const transactionId = parseInt(values[2]);
  const shopDate = new Date(parseInt(values[0]));
  return {
    storeId, // store id goes here,
    shopDate, // the date the customer shopped,
    transactionId, // transaction id goes here
  };
}

// ------------------------------------------------------------------------------//
// --------------- Don't touch this area, all tests have to pass --------------- //
// ------------------------------------------------------------------------------//
function RunTests() {
  var storeIds = [175, 42, 0, 9];
  var transactionIds = [9675, 23, 123, 7];

  storeIds.forEach(function (storeId) {
    transactionIds.forEach(function (transactionId) {
      var shortCode = generateShortCode(storeId, transactionId);
      var decodeResult = decodeShortCode(shortCode);
      $("#test-results").append(
        "<div>" + storeId + " - " + transactionId + ": " + shortCode + "</div>"
      );
      AddTestResult("Length <= 9", shortCode.length <= 9);
      AddTestResult("Is String", typeof shortCode === "string");
      AddTestResult("Is Today", IsToday(decodeResult.shopDate));
      AddTestResult("StoreId", storeId === decodeResult.storeId);
      AddTestResult("TransId", transactionId === decodeResult.transactionId);
    });
  });
}

function IsToday(inputDate) {
  // Get today's date
  var todaysDate = new Date();
  // call setHours to take the time out of the comparison
  return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0);
}

function AddTestResult(testName, testResult) {
  var div = $("#test-results").append(
    "<div class='" +
      (testResult ? "pass" : "fail") +
      "'><span class='tname'>- " +
      testName +
      "</span><span class='tresult'>" +
      testResult +
      "</span></div>"
  );
}
