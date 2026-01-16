(function () {
  
  const navbar = document.createElement("header");
  navbar.className = "navbar";
  navbar.innerHTML = `
    <div class="nav-left">
      <a href="/">
        <img src="/res/logo-1.svg" alt="Blocksi" class="logo" />
      </a>
    </div>

    <nav class="nav-links">
      <a href="/gms"><i class="fa-solid fa-gamepad"></i> Games</a>
      <a href="/aps"><i class="fa-solid fa-layer-group"></i> Apps</a>
      <a href="/con"><i class="fa-solid fa-envelope"></i> Contact</a>
    </nav>
  `;

  document.body.prepend(navbar);

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `
    <p>Pissing Off Teachers Since 2026.</p>
  `;

  document.body.appendChild(footer);
})();
