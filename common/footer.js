// footer.js

const footerHTML = `
  <style>
    .footer {
      border-top: 1px solid #ccc;
      padding: 1.25rem;
      font-size: 0.875rem;
      background-color: #f9f9f9;
      color: #333;
      box-sizing: border-box;
      width: 100%;
      clear: both;
      margin-top: 20px;
    }

    .footer-inner {
      padding: 2rem;
    }

    .footer-container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .footer-section {
      flex: 1 1 60px;
      min-width: 15.625rem;
    }

    .footer p {
      margin-top: 1rem;
      line-height: 1.6;
    }

    @media (max-width: 767px) {
      #pc-tablet {
        display: none;
      }

      .footer {
        padding: 0.75rem;
        font-size: 0.625rem;
      }

      .footer-inner {
        padding: 0.5rem;
      }

      .footer-container {
        flex-direction: column;
        gap: 0.5rem;
      }

      .footer p {
        font-size: 0.55rem;
      }
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      #mobile {
        display: none;
      }

      .footer {
        padding: 1rem;
        font-size: 0.875rem;
      }

      .footer-container {
        flex-direction: column;
        gap: 1rem;
      }
    }

    @media (min-width: 1024px) {
      #mobile {
        display: none;
      }

      .footer-container {
        flex-direction: row;
        gap: 1.5rem;
      }

      .footer p {
        margin-top: 1.25rem;
      }

      #call-center {
        max-width: 18.75rem;
      }
    }
  </style>

  <!-- PC/태블릿용 푸터 -->
  <div class="footer" id="pc-tablet">
    <div class="footer-inner">
      <div class="footer-container">
        <div class="footer-section" id="call-center">
          <strong>상담 가능 시간</strong><br>
          평일 오전 9시 ~ 오후 6시 (주말, 공휴일 제외)
        </div>
        <div class="footer-section">
          <strong>회사명</strong> (주)SIDEMENU &nbsp; | &nbsp;
          <strong>대표</strong> 윤서하 &nbsp; | &nbsp;
          <strong>주소</strong> 충청남도 천안시 동남구 대흥로 215 7층<br>
          <strong>통신판매업 신고번호</strong> 2025-천안동남-0000 &nbsp; | &nbsp;
          <strong>사업자등록번호</strong> 111-22-33333<br>
          <strong>대표번호</strong> 010-1111-2222 &nbsp; | &nbsp;
          <strong>이메일주소</strong> mokash1ae@gmail.com
        </div>
      </div>
      <p>
        일부 상품의 경우 SIDEMENU는 통신판매중개자이며 통신판매 당사자가 아닙니다.<br>
        해당되는 상품의 경우 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있으므로,
        각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
      </p>
    </div>
  </div>

  <!-- 모바일용 푸터 -->
  <div class="footer" id="mobile">
    <div class="footer-inner">
      <div class="footer-container">
        <div class="footer-section" id="call-center">
          <strong>상담 가능 시간</strong><br>
          평일 오전 9시 ~ 오후 6시 (주말, 공휴일 제외)
        </div>
        <div class="footer-section">
          <strong>회사명</strong> (주)SIDEMENU &nbsp; | &nbsp;
          <strong>대표</strong> 윤서하 &nbsp; | &nbsp; <br>
          <strong>주소</strong> 충청남도 천안시 동남구 대흥로 215 7층<br>
          <strong>통신판매업 신고번호</strong> 2025-천안동남-0000 &nbsp; | &nbsp; <br>
          <strong>사업자등록번호</strong> 111-22-33333<br>
          <strong>대표번호</strong> 010-1111-2222 &nbsp; | &nbsp;
          <strong>이메일주소</strong> mokash1ae@gmail.com
        </div>
      </div>
      <p>
        일부 상품의 경우 SIDEMENU는 통신판매중개자이며 통신판매 당사자가 아닙니다.<br>
        해당되는 상품의 경우 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있으므로,
        각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
      </p>
    </div>
  </div>
`;

// DOM이 로드되면 푸터 추가
document.addEventListener('DOMContentLoaded', () => {
	const footerWrapper = document.createElement('div');
	footerWrapper.innerHTML = footerHTML;
	document.body.appendChild(footerWrapper); // 올바르게 삽입
});
