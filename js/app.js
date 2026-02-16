// TrendDev Shop - 공통 기능

document.addEventListener("DOMContentLoaded", function () {
  initMobileMenu();
  initSearch();
  initScrollHeader();
});

// 모바일 메뉴 토글
function initMobileMenu() {
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav-links");
  if (!menuBtn || !nav) return;

  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
    menuBtn.classList.toggle("active");
  });

  // 메뉴 외부 클릭 시 닫기
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".main-nav")) {
      nav.classList.remove("active");
      menuBtn.classList.remove("active");
    }
  });
}

// 검색 기능
function initSearch() {
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-input");
  if (!searchForm || !searchInput) return;

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `products.html?search=${encodeURIComponent(query)}`;
    }
  });
}

// 스크롤 시 헤더 스타일 변경
function initScrollHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// URL 파라미터 가져오기
function getUrlParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// 맨 위로 스크롤
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
