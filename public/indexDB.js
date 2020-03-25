let indexDB;
// create a new db request for a "notes" database.
const request = indexedDB.open("notes", 1);

request.onupgradeneeded = function(event) {
  // create object store called "pending" and set autoIncrement to true
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true, keyPath: 'date' });
};

request.onsuccess = function(event) {
  indexDB = event.target.result;
  console.log("indexDB connected successfully!");
  // check if app is online before reading from db
  if (navigator.onLine) {
    checkDatabase();
  }
};

request.onerror = function(event) {
  console.log("Woops! " + event.target.errorCode);
};

function saveRecord(record) {
  // create a note on the pending db with readwrite access
  const note = indexDB.transaction(["pending"], "readwrite");

  // access your pending object store
  const store = note.objectStore("pending");

  // add record to your store with add method.
  store.add(record);
}

async function getOne(dateString) {
  return new Promise(
    (resolve, reject) => {
      // open a note on your pending db
      const note = indexDB.transaction(["pending"], "readwrite");
      // access your pending object store
      const store = note.objectStore("pending");
      // Get current note
      const request = store.get(dateString);

      request.onerror = function(error) {
        reject(error);
      };

      request.onsuccess = function(result) {
        resolve(result.target.result)
      }
    });
}

function checkDatabase() {
  // open a note on your pending db
  const note = indexDB.transaction(["pending"], "readwrite");
  // access your pending object store
  const store = note.objectStore("pending");
  // get all records from store and set to a variable
  const getAll = store.getAll();

  getAll.onsuccess = function() {
    if (getAll.result.length > 0) {
      fetch("/api/note/bulk", {
        method: "POST",
        body: JSON.stringify(getAll.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(() => {
          // if successful, open a note on your pending db
          const note = indexDB.transaction(["pending"], "readwrite");

          // access your pending object store
          const store = note.objectStore("pending");

          // clear all items in your store
          store.clear();
        })
        .catch(error => {
          console.error("Not connected to MongoDB (This is an Expected Error. It is not implemented yet)")
        });
    }
  };
}

// listen for app coming back online
window.addEventListener("online", checkDatabase);
