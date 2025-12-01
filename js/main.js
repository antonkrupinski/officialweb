const pages = [
  {
    title: "Home",
    content: "<h1>Welcome!</h1><p>This is the homepage.</p>"
  },
  {
    title: "About",
    content: "<h1>About</h1><p>This is the about page.</p>"
  },
  {
    title: "Contact",
    content: "<h1>Contact</h1><p>This is the contact page.</p>"
  }
];

const tabs = document.getElementById('tabs');
const content = document.getElementById('page-content');

pages.forEach((page, idx) => {
  const button = document.createElement('button');
  button.textContent = page.title;
  button.onclick = () => {
    content.innerHTML = page.content;
    document.querySelectorAll('#tabs button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  };
  tabs.appendChild(button);

  // Show first page by default
  if(idx === 0) {
    content.innerHTML = page.content;
    button.classList.add('active');
  }
});
