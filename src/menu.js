export default function loadMenu() {
  const content = document.getElementById('content');
  // Clear previous content
  content.innerHTML = '';

  const menuDiv = document.createElement('div');
  menuDiv.innerHTML = `
        <h1>Menu</h1>
        <p>Menu</p>
        <ul>
      <li>Pizza - $12</li>
      <li>Burger - $10</li>
      <li>Pasta - $15</li>
      <li>Tacos - $8</li>
    </ul>
        <img src="https://via.placeholder.com/400x300" alt="Menu Image">
      `;
  content.appendChild(menuDiv);
}