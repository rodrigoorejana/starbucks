// Function to create nav link
export function createNavLink(text, href) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = text;
    a.href = href;
    a.classList.add("nav-link"); // Adding class for styling
    li.appendChild(a);
    return li;
  }