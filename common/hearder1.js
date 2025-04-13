// Bootstrap CSS 삽입
const bootstrapCSS = document.createElement("link");
bootstrapCSS.rel = "stylesheet";
bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css";
bootstrapCSS.integrity = "sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7";
bootstrapCSS.crossOrigin = "anonymous";
document.head.appendChild(bootstrapCSS);

// Bootstrap JS 번들 (Popper 포함) 삽입
const bootstrapScript = document.createElement("script");
bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js";
bootstrapScript.integrity = "sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq";
bootstrapScript.crossOrigin = "anonymous";
document.body.appendChild(bootstrapScript);

const headerHTML = ` 
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="../resources/logo.png" alt="Logo" height="40"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              공지사항
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">공지사항</a></li>
              <li><a class="dropdown-item" href="#">브랜드스토리</a></li>
              <li><a class="dropdown-item" href="#">정부지원정책</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">상품</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">견학/체험</a>
          </li>
					<li class="nav-item">
            <a class="nav-link" href="#">축제</a>
          </li>
					<li class="nav-item">
            <a class="nav-link" href="#">커뮤니티</a>
          </li>

        </ul>
<form class="container-fluid justify-content-start">
  <a href="loginPage.html">
    <button class="btn btn-outline-success me-2" type="button">로그인 / 회원가입</button>
  </a>
  <a href="projectPage.html">
    <button class="btn btn-outline-success me-2" type="button">+ 프로젝트</button>
  </a>
</form>
      </div>
    </div>
  </nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", headerHTML);
});
