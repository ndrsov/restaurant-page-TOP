export default function loadContact() {
  const content = document.getElementById('content');
  // Clear previous content
  content.innerHTML = '';

  const contactDiv = document.createElement('div');
  contactDiv.innerHTML = `<h1>Contact Us</h1>
    <p>Address: 123 Main Street, Anytown, USA</p>
    <p>Phone: (123) 456-7890</p>
    <p>Email: myrestaurant@website.com</p>
    <p>Address: 123 Food Street, Gourmet City</p>`;
  content.appendChild(contactDiv);
}
