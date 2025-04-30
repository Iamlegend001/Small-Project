class Contact {
  constructor(name, number, profilePic, address) {
    this.name = name;
    this.number = number;
    this.profilePic = profilePic;
    this.address = address;
  }
}

class PhoneBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  getAllContacts() {
    return this.contacts;
  }

  deleteContact(number) {
    this.contacts = this.contacts.filter((c) => c.number !== number);
  }
}

const phoneBook = new PhoneBook();

function getInitials(name) {
  return name
    .split(" ")
    .map((word) => word[0]?.toUpperCase() || "")
    .join("")
    .slice(0, 2);
}

function renderContacts() {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";
  phoneBook.getAllContacts().forEach((contact) => {
    const card = document.createElement("div");
    card.className = "contact-card";

    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = getInitials(contact.name);

    const info = document.createElement("div");
    info.className = "contact-info";
    info.innerHTML = `
      <div class="contact-name">${contact.name}</div>
      <div class="contact-phone">📱 ${contact.number}</div>
      <div class="contact-address">🏠 ${contact.address || ""}</div>
    `;

    const delBtn = document.createElement("button");
    delBtn.className = "delete-btn";
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      phoneBook.deleteContact(contact.number);
      renderContacts();
    };

    card.appendChild(avatar);
    card.appendChild(info);
    card.appendChild(delBtn);

    contactList.appendChild(card);
  });
}

function addContactUI() {
  const name = document.getElementById("name").value.trim();
  const number = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !number) {
    alert("Name and phone are required!");
    return;
  }

  const contact = new Contact(name, number, null, address);
  phoneBook.addContact(contact);

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";

  renderContacts();
}

// Initial render
renderContacts();
