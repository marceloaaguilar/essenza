// navbar.js
class CustomNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
      <style>
        .navbar-nav .nav-link {
          font-size: 0.9rem;
        }

        @media (min-width: 992px) {
          .navbar-brand img {
            height: 3.5rem;
          }
          .navbar-nav .nav-link {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }
        }
      </style>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top py-2">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src="images/logo.png" alt="Logo Instituto Essenza Rafinnato" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-lg-center flex-wrap" id="navbarNav">
            <ul class="navbar-nav text-center text-lg-start">
              <li class="nav-item"><a class="nav-link py-1 px-2" href="/#">Início</a></li>
              <li class="nav-item"><a class="nav-link py-1 px-2" href="/#sobre">Sobre</a></li>
              <li class="nav-item"><a class="nav-link py-1 px-2" href="/#formacao">Formação de Líderes</a></li>
              <li class="nav-item"><a class="nav-link py-1 px-2" href="/#produtos">Produtos</a></li>
              <li class="nav-item"><a class="nav-link py-1 px-2" href="telemedicinaSocial.html">Telemedicina Social</a></li>
              <li class="nav-item"><a class="nav-link py-1 px-2" href="cuidadoSaudeMental.html">Cuidado Saúde Mental</a></li>
              <li class="nav-item"><a class="nav-link py-1 px-2" href="/#youtube">Youtube</a></li>
              <li class="nav-item"><a class="nav-link py-1 px-2" href="/#contato">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
