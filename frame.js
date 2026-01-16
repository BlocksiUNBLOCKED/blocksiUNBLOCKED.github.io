(function() {
  const navbar = document.createElement("header");
  navbar.className = "navbar";
  navbar.innerHTML = `
    <div class="nav-left">
      <img src="/res/logo-1.svg" alt="Blocksi" class="logo" />
    </div>
    <nav class="nav-links">
      <a href="/gms"><i class="fa-solid fa-gamepad"></i> Games</a>
      <a href="/aps"><i class="fa-solid fa-layer-group"></i> Apps</a>
      <a href="#" id="proxy-link"><i class="fa-solid fa-globe"></i> Proxy</a>
      <a href="/con"><i class="fa-solid fa-envelope"></i> Contact</a>
    </nav>
  `;
  document.body.prepend(navbar);

  const footer = document.createElement("footer");
  footer.className = "site-footer";
  footer.innerHTML = `<p>© ${new Date().getFullYear()} Blocksi. All rights reserved.</p>`;
  document.body.appendChild(footer);

  const overlay = document.createElement("div");
  overlay.id = "proxy-popup";
  overlay.innerHTML = `
    <div class="proxy-container">
      <button class="proxy-close"><i class="fa-solid fa-xmark"></i></button>
      <iframe src="/prx.html" frameborder="0"></iframe>
    </div>
  `;
  document.body.appendChild(overlay);

  const proxyLink = document.getElementById("proxy-link");
  const closeBtn = overlay.querySelector(".proxy-close");

  proxyLink.onclick = function(e) {
    e.preventDefault();
    overlay.style.display = "flex";
  };

  closeBtn.onclick = function() {
    overlay.style.display = "none";
  };
})();
