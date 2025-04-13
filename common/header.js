// header.js

const headerHTML = `
  <style>
  *{
  margin:0;
  padding:0;
  }

  .logo {
      height: 50px;
      margin-left:20px;
      margin-right:50px;
  }

  .navbar_main {
    background-color:#e7f5e1;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    color: #000;
    z-index: 999;
    animation: navbarBottom 1s forwards;
    background-color:#e7f5e1;
  }
  
  .auth_buttons {
    margin-right:20px;
  }

  .submenu a {
    display: flex;
    flex-direction: column; /* 항목들이 세로로로 배치되도록 설정 */
  }

  
  /* PC (1024px 이상) */
  @media (min-width: 1024px) 
  {

    #mobile {
    display:none;
    }

    .navbar_links {
      margin-right: 10%;
      position: relative;
    }

    .navbar_links a {
      text-decoration: none;
      color: #000;
      margin-right: 4rem;
      font-size: 1.3rem;
      font-weight: 600;
      position: relative;
      padding: 0.5rem 0;
    }

    .navbar_links a:last-child {
      margin-right: 0;
    }

    .navbar_links a::before {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 50%;
      width: 0;
      height: 3px;
      background-color: #0A8B11;
      transition: width 0.2s ease-in-out, left 0.2s ease-in-out;
    }

    .navbar_links a:hover::before {
      width: 100%;
      left: 0;
    }
    
     /* 세부 메뉴 링크 스타일 */
    .submenu {
      display: none;
      position: absolute;
      top: 130%;
      left: 0;
      background-color: #f4f4f4;
      width: 100px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      padding: 10px;
    }
    
    .submenu a {
    font-size:17px;
    margin:0;
    
    }

    .submenu.active {
    display: block;
    }
    
    /* 공지사항에 호버 시 세부 메뉴 보이기 */
    #pc-notice:hover + .submenu,
    #pc-notice:hover .submenu {
    display: block;
    }
  

    @keyframes navbarBottom {
      0% {
        transform: translateY(-70%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }

  /* 태블릿 (768px ~ 1023px) 미만*/
  @media (max-width: 1023px) 
  {

    #pc {
    display:none;
  }

    .navbar_overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 998;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.1s ease;
    }

    .navbar_burger {
      position: fixed;
      top: 1rem;
      right: 1rem;
      cursor: pointer;
      color: #000;
    }

    .navbar_burger_back {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      cursor: pointer;
      color: #fff;
    }

    /* 버튼을 오른쪽으로 밀고 햄버거 메뉴와 겹치지 않도록 설정 */
    .auth_buttons {
      position: fixed;
      top: 1.3rem;
      right: 70px; /* 햄버거 메뉴와 겹치지 않도록 간격 조정 */
      display: flex;
      gap: 1rem;
    }

    /* 메뉴 슬라이드 애니메이션 */
    .navbar_menu {
      position: fixed;
      top: 0;
      right: 0;
      width: 50%;
      height: 100%;
      background-color:rgb(135, 206, 138);
      padding: 0 2rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      transform: translateX(100%);  /* 메뉴 숨김 */
      z-index: 999;
      color: #ffffff;
      transition: transform 0.3s ease;
    }

    .navbar_menu a {
      position: relative;
      color: #ffffff;
      font-size: 1.5rem;
      margin-left: 1rem;
      margin-bottom: 3rem;
      text-decoration: none;
    }
    
    .navbar_menu a:hover {
      color:rgb(146, 45, 107);
    }

    .navbar_menu.active {
      transform: translateX(0);  /* active 클래스 추가 시 메뉴 보이도록 */
    }

    .navbar_overlay.active {
      opacity: 1;
      pointer-events: auto;  /* active 클래스 추가 시 오버레이 활성화 */
    }
    
    // #mobile-notice{
    //   margin-bottom:10px;
    // }
  
   /* 모바일 및 태블릿 클릭 이벤트를 위한 submenu 설정 */
    .submenu {
      display: none;
      background-color: #f4f4f4;
      padding:0;
      margin:0;
      margin-bottom:10px;
    }
    
    .submenu a{
      font-size: 20px;
      color:rgb(37, 58, 126);
      margin:15px;
    }
    
    .submenu a:hover{
      color:rgb(148, 62, 62);
    }
    
    .submenu.active {
      display: block;
    }
  }
  </style>

  <!-- 모바일버전 -->
<div class="navbar_main" id="mobile">
  <div class="nav_logo">
    <a href="#"><img src="../resources/logo.png" alt="SIDEMENU 로고" class="logo" /></a>
  </div>
  <div class="auth_buttons">
    <button>로그인 / 회원가입</button>
    <button>+ 프로젝트</button>
  </div>
  <div class="navbar_burger">
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
  </div>
  <div class="navbar_overlay">
    <div class="navbar_menu">
      <a href="#" id="mobile-notice">공지사항 ▾</a>
      <div class="submenu">
        <a href="#">공지사항</a>
        <a href="#">브랜드스토리</a>
        <a href="#">정부지원정책</a>
      </div>
      <a href="#">상품</a>
      <a href="#">견학/체험</a>
      <a href="#">축제</a>
      <a href="#">커뮤니티</a>
      <div class="navbar_burger_back">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<!-- PC 버전 -->
<div class="navbar_main" id="pc">
  <div class="nav_logo">
    <a href="#"><img src="../resources/logo.png" alt="SIDEMENU 로고" class="logo" /></a>
  </div>
  <div class="navbar_links">
    <a href="#" id="pc-notice">&nbsp공지사항 ▾&nbsp&nbsp&nbsp</a>
    <div class="submenu">
        <a href="#">&nbsp&nbsp&nbsp&nbsp공지사항</a>
        <a href="#">브랜드스토리</a>
        <a href="#">정부지원정책</a>
    </div>
    <a href="#">&nbsp상품&nbsp&nbsp</a>
    <a href="#">&nbsp견학/체험&nbsp&nbsp</a>
    <a href="#">&nbsp축제&nbsp&nbsp</a>
    <a href="#">&nbsp커뮤니티&nbsp&nbsp</a>
  </div>
  <div class="auth_buttons">
    <button>로그인 / 회원가입</button>
    <button>+ 프로젝트</button>
  </div>
</div>
`;

document.addEventListener('DOMContentLoaded', () => {
	// HTML 삽입
	document.body.insertAdjacentHTML('afterbegin', headerHTML);

	// 변수 선언
	const navbarBurger = document.querySelector('.navbar_burger');
	const navbarBurgerBack = document.querySelector('.navbar_burger_back');
	const navbarMenu = document.querySelector('.navbar_menu');
	const navbarOverlay = document.querySelector('.navbar_overlay');

	// **pc에서** 클릭된 항목의 submenu 열기
	const pcNotice = document.getElementById('pc-notice'); // PC에서 공지사항 선택
	const pcSubmenu = pcNotice ? pcNotice.nextElementSibling : null; // PC 공지사항 다음 submenu 찾기

	// **모바일에서** 클릭된 항목의 submenu 열기
	const mobileNotice = document.getElementById('mobile-notice'); // 모바일에서만 공지사항 선택
	const mobileSubmenu = mobileNotice ? mobileNotice.nextElementSibling : null; // 공지사항 다음 submenu 찾기

	// 햄버거 메뉴 버튼 클릭 시
	navbarBurger.addEventListener('click', () => {
		navbarMenu.classList.add('active');
		navbarOverlay.classList.add('active');
	});

	// 백버튼 클릭 시 메뉴 닫기
	navbarBurgerBack.addEventListener('click', () => {
		navbarMenu.classList.remove('active');
		navbarOverlay.classList.remove('active');
	});

	// // 오버레이 클릭 시 메뉴 닫기
	// navbarOverlay.addEventListener('click', () => {
	// 	navbarMenu.classList.remove('active');
	// 	navbarOverlay.classList.remove('active');
	// });

	// 모바일에서 클릭 시 세부 메뉴 열기
	if (mobileNotice) {
		mobileNotice.addEventListener('click', () => {
			if (mobileSubmenu) {
				mobileSubmenu.classList.toggle('active'); // 클릭 시 submenu 열기/닫기
			}
		});
	}

	// PC에서 호버 시 세부 메뉴 열기
	if (pcNotice && pcSubmenu) {
		pcNotice.addEventListener('mouseenter', () => {
			pcSubmenu.style.display = 'block'; // 호버 시 세부 메뉴 열기
		});

		// 세부 메뉴에 마우스를 올려도 메뉴가 닫히지 않도록
		pcSubmenu.addEventListener('mouseenter', () => {
			pcSubmenu.style.display = 'block'; // 메뉴가 열려있도록 유지
		});

		// 호버 벗어나면 메뉴 닫기
		pcNotice.addEventListener('mouseleave', () => {
			pcSubmenu.style.display = 'none'; // 호버 벗어나면 세부 메뉴 닫기
		});

		pcSubmenu.addEventListener('mouseleave', () => {
			pcSubmenu.style.display = 'none'; // 세부 메뉴에서 벗어나면 닫기
		});
	}
});
