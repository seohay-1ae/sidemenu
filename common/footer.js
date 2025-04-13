// footer.js

const footerHTML = `
  <style>
    .footer {
      border-top: 1px solid #ccc;
      padding: 20px;
      font-size: 12px;
      background-color: #f9f9f9;
      color: #333;
      box-sizing: border-box;
    }

    .footer-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .footer-section {
      flex: 1 1 60px;
      min-width: 250px;
    }

    .footer p {
      margin-top: 10px;
      line-height: 1.6;
    }

    /* 모바일 (0 ~ 767px) */
    @media (max-width: 767px) {
      .footer-container {
        flex-direction: column;
      }

      .footer {
        padding: 12px; /* 전체 여백도 모바일에서 좀 더 좁게 */
      }

      .footer p {
        font-size: 11px;
      }
    }

    /* 태블릿 (768px ~ 1023px) */
    @media (min-width: 768px) and (max-width: 1023px) {
      .footer-container {
        flex-direction: column;
      }
    }

    /* PC (1024px 이상) */
    @media (min-width: 1024px) {
      .footer-container {
        flex-direction: row;
        gap: 20px;
      }
      .footer p {
        margin-top: 20px;
    }
  </style>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
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
  </footer>
`;

document.addEventListener('DOMContentLoaded', () => {
	document.body.insertAdjacentHTML('beforeend', footerHTML);
});
