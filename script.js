const secretPassword = "piprocks123"; // Change this to whatever you want

// Fake stored data (this is where you'll paste real captured data)
const storedData = [
  { username: "test_user1", password: "1234" },
  { username: "test_user2", password: "abcd" },
  { username: "pip_master", password: "letmein" }
];

function unlockVault() {
  const input = document.getElementById("vault-password").value;

  if (input === secretPassword) {
    document.getElementById("data-section").style.display = "block";

    const pre = document.getElementById("stored-data");
    pre.textContent = JSON.stringify(storedData, null, 2);
  } else {
    alert("Wrong password! Try again.");
  }
}
