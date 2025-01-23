export default function loadHome() {
  const content = document.getElementById('content');
  // Clear previous content
  content.innerHTML = '';

  const homeDiv = document.createElement('div');
  homeDiv.innerHTML = `
      <h1>Welcome to My TOP Restaurant!</h1>
      <p>We serve the best Mexican-Asian mix food in town. Visit us to enjoy our delicious menu.</p>
      <img src="https://placehold.co/400x300" alt="Restaurant Image">
    `;
  content.appendChild(homeDiv);
}
