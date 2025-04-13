const headerHTML = ` 
  <style>
    .main-header {
      display: flex;
      flex-direction: column;
      padding: 10px 20px;
      border-bottom: 1px solid #ccc;
      background-color: white;
    }

    .logo {
      height: 40px;
    }

    .main-nav {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      margin-top: 10px;
    }

    .main-nav > ul {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }

    .main-nav li {
      position: relative;
    }

    .main-nav a {
      text-decoration: none;
      color: black;
      cursor: pointer;
    }

    .dropdown-content {
      display: none;
      flex-direction: column;
      background-color: white;
      border: 1px solid #ccc;
      padding: 5px 0;
      width: max-content;
    }

    .dropdown-content li {
      list-style: none;
      padding: 8px 12px;
      white-space: nowrap;
    }

    .dropdown-content li a:hover {
      color: #0A8B11;
    }

    .dropdown.active .dropdown-content {
      display: flex;
    }

    .auth-buttons {
      display: flex;
      gap: 10px;
    }

    .auth-buttons button {
      padding: 6px 12px;
      background-color: #0A8B11;
      color:white;
      border:none;
    }

    /* 태블릿 이상에서 hover를 비활성화하고 클릭으로만 적용 */
    @media (min-width: 768px) {
      .main-nav .dropdown:hover .dropdown-content {
        display: none; /* hover 시 dropdown-content가 보이지 않게 */
      }

      .main-nav .dropdown.active .dropdown-content {
        display: flex; /* 클릭 시 dropdown-content가 보이게 */
      }
    }

    /* PC에서 hover만 작동하도록 설정 */
    @media (min-width: 1025px) {
      .main-nav .dropdown:hover .dropdown-content {
        display: flex; /* hover 시 dropdown-content가 보이게 */
      }
    }
  </style>
  
  <header class="main-header">
    <div class="logo-container">
      <img src="../resources/logo.png" alt="SIDEMENU 로고" class="logo" />
    </div>
    <nav class="main-nav">
      <ul>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle">공지사항 ▾</a>
          <ul class="dropdown-content">
            <li><a href="#">공지사항</a></li>
            <li><a href="#">브랜드스토리</a></li>
            <li><a href="#">정부지원정책</a></li>
          </ul>
        </li>
        <li><a href="#">상품</a></li>
        <li><a href="#">견학/체험</a></li>
        <li><a href="#">축제</a></li>
        <li><a href="#">커뮤니티</a></li>
      </ul>
      <div class="auth-buttons">
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </nav>
  </header>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("afterbegin", headerHTML);

  const toggle = document.querySelector(".dropdown-toggle");
  const dropdown = document.querySelector(".dropdown");

  // 모바일과 태블릿 구분 함수
  const isMobileOrTablet = () => {
    return window.matchMedia("(max-width: 1024px)").matches; // 1024px 이하
  };

  // 클릭 이벤트 처리
  toggle.addEventListener("click", (e) => {
    console.log("클릭 이벤트 발생", isMobileOrTablet());
    if (isMobileOrTablet()) {
      e.preventDefault();
      dropdown.classList.toggle("active");
    }
  });

  window.addEventListener("resize", () => {
    if (!isMobileOrTablet()) {
      dropdown.classList.remove("active");
    }
  });
});
