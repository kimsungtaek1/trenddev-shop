// TrendDev Shop - 상품 데이터
const products = [
  {
    id: 1,
    name: "프리미엄 무선 블루투스 이어폰",
    price: 29900,
    originalPrice: 49900,
    image: "https://via.placeholder.com/400x400/1a1a2e/e94560?text=Earbuds",
    category: "electronics",
    description: "고음질 블루투스 5.3 무선 이어폰. 노이즈 캔슬링 기능 탑재, 최대 30시간 재생. IPX5 방수 등급으로 운동 시에도 안심하고 사용 가능합니다.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.5,
    reviewCount: 1283,
    tags: ["베스트셀러", "무료배송"]
  },
  {
    id: 2,
    name: "초경량 접이식 노트북 거치대",
    price: 15900,
    originalPrice: 25900,
    image: "https://via.placeholder.com/400x400/16213e/e94560?text=Stand",
    category: "electronics",
    description: "알루미늄 합금 소재의 초경량 노트북 거치대. 6단계 각도 조절 가능. 11~17인치 노트북 호환. 접으면 손바닥 크기로 휴대 간편.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.3,
    reviewCount: 856,
    tags: ["로켓배송"]
  },
  {
    id: 3,
    name: "2024 남성 슬림핏 맨투맨",
    price: 19900,
    originalPrice: 35000,
    image: "https://via.placeholder.com/400x400/0f3460/e94560?text=Sweatshirt",
    category: "fashion",
    description: "부드러운 기모 안감의 슬림핏 맨투맨. 다양한 컬러 옵션. 사계절 착용 가능한 적당한 두께감. S~XXL 사이즈.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.2,
    reviewCount: 2341,
    tags: ["베스트셀러"]
  },
  {
    id: 4,
    name: "스테인리스 텀블러 500ml",
    price: 12900,
    originalPrice: 19900,
    image: "https://via.placeholder.com/400x400/533483/e94560?text=Tumbler",
    category: "living",
    description: "진공 이중벽 스테인리스 텀블러. 12시간 보온·보냉. BPA-free 소재. 원터치 뚜껑으로 편리한 사용. 차량 컵홀더 호환.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.6,
    reviewCount: 3102,
    tags: ["로켓배송", "무료배송"]
  },
  {
    id: 5,
    name: "대용량 보조배터리 20000mAh",
    price: 24900,
    originalPrice: 39900,
    image: "https://via.placeholder.com/400x400/1a1a2e/e94560?text=PowerBank",
    category: "electronics",
    description: "20000mAh 대용량 보조배터리. PD 고속충전 지원. USB-C, USB-A 듀얼 포트. LED 잔량 표시. 비행기 반입 가능.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.4,
    reviewCount: 1567,
    tags: ["베스트셀러", "로켓배송"]
  },
  {
    id: 6,
    name: "여성 데일리 크로스백",
    price: 23900,
    originalPrice: 38000,
    image: "https://via.placeholder.com/400x400/16213e/e94560?text=Bag",
    category: "fashion",
    description: "심플한 디자인의 데일리 크로스백. PU 가죽 소재. 다수납 수납공간. 조절 가능한 스트랩. 가볍고 실용적인 사이즈.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.1,
    reviewCount: 987,
    tags: ["무료배송"]
  },
  {
    id: 7,
    name: "프로틴 쉐이크 초코맛 2kg",
    price: 32900,
    originalPrice: 45000,
    image: "https://via.placeholder.com/400x400/0f3460/e94560?text=Protein",
    category: "health",
    description: "WPC 농축유청단백질 프로틴 파우더. 1회 섭취당 단백질 25g. 진한 초코맛으로 맛있게 즐기는 단백질 보충. HACCP 인증.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.3,
    reviewCount: 2156,
    tags: ["베스트셀러", "로켓배송"]
  },
  {
    id: 8,
    name: "LED 데스크 무드등",
    price: 18900,
    originalPrice: 29900,
    image: "https://via.placeholder.com/400x400/533483/e94560?text=LED+Lamp",
    category: "living",
    description: "터치식 밝기 조절 LED 무드등. 3가지 색온도 변환. USB 충전식. 눈이 편안한 자연광 LED. 독서등·수유등·취침등 겸용.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.5,
    reviewCount: 1432,
    tags: ["로켓배송"]
  },
  {
    id: 9,
    name: "남녀공용 러닝화",
    price: 34900,
    originalPrice: 59000,
    image: "https://via.placeholder.com/400x400/1a1a2e/e94560?text=Shoes",
    category: "fashion",
    description: "초경량 메쉬 소재 러닝화. 쿠셔닝 인솔로 편안한 착화감. 미끄럼 방지 아웃솔. 230~280mm. 조깅, 워킹, 일상 겸용.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.0,
    reviewCount: 1876,
    tags: ["베스트셀러"]
  },
  {
    id: 10,
    name: "무선 충전 마우스패드",
    price: 21900,
    originalPrice: 35000,
    image: "https://via.placeholder.com/400x400/16213e/e94560?text=MousePad",
    category: "electronics",
    description: "Qi 무선충전 내장 마우스패드. 스마트폰 올려놓기만 하면 충전. 넓은 사이즈(300x250mm). 미끄럼 방지 바닥면. 가죽 질감 표면.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.2,
    reviewCount: 654,
    tags: ["무료배송"]
  },
  {
    id: 11,
    name: "종합비타민 멀티비타민 90정",
    price: 15900,
    originalPrice: 28000,
    image: "https://via.placeholder.com/400x400/0f3460/e94560?text=Vitamin",
    category: "health",
    description: "하루 1정으로 필수 비타민·미네랄 13종 섭취. 3개월분. 식약처 인증 건강기능식품. 장용성 코팅으로 위 부담 없이 섭취.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.7,
    reviewCount: 4521,
    tags: ["베스트셀러", "로켓배송", "무료배송"]
  },
  {
    id: 12,
    name: "극세사 대형 담요 150x200",
    price: 16900,
    originalPrice: 25000,
    image: "https://via.placeholder.com/400x400/533483/e94560?text=Blanket",
    category: "living",
    description: "부드러운 극세사 소재 대형 담요. 150x200cm 넉넉한 사이즈. 세탁기 세탁 가능. 가벼우면서도 따뜻한 보온성. 다양한 컬러.",
    coupangUrl: "https://www.coupang.com",
    rating: 4.4,
    reviewCount: 2876,
    tags: ["로켓배송"]
  }
];

// 카테고리 정보
const categories = {
  all: { name: "전체", icon: "🛒" },
  electronics: { name: "전자기기", icon: "📱" },
  fashion: { name: "패션", icon: "👕" },
  living: { name: "생활용품", icon: "🏠" },
  health: { name: "건강/식품", icon: "💊" }
};

// 가격 포맷
function formatPrice(price) {
  return price.toLocaleString("ko-KR") + "원";
}

// 할인율 계산
function getDiscountRate(price, originalPrice) {
  return Math.round((1 - price / originalPrice) * 100);
}

// 별점 HTML 생성
function renderStars(rating) {
  let stars = "";
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  for (let i = 0; i < full; i++) stars += '<span class="star full">★</span>';
  if (half) stars += '<span class="star half">★</span>';
  const empty = 5 - full - (half ? 1 : 0);
  for (let i = 0; i < empty; i++) stars += '<span class="star empty">☆</span>';
  return stars;
}

// 상품 카드 HTML 생성
function createProductCard(product) {
  const discount = getDiscountRate(product.price, product.originalPrice);
  const tagsHtml = product.tags
    .map((tag) => `<span class="product-tag">${tag}</span>`)
    .join("");

  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}">
      <a href="product-detail.html?id=${product.id}" class="product-link">
        <div class="product-image-wrap">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          ${discount > 0 ? `<span class="discount-badge">${discount}%</span>` : ""}
        </div>
        <div class="product-info">
          <div class="product-tags">${tagsHtml}</div>
          <h3 class="product-name">${product.name}</h3>
          <div class="product-price">
            ${product.originalPrice > product.price ? `<span class="original-price">${formatPrice(product.originalPrice)}</span>` : ""}
            <span class="current-price">${formatPrice(product.price)}</span>
          </div>
          <div class="product-rating">
            ${renderStars(product.rating)}
            <span class="review-count">(${product.reviewCount.toLocaleString()})</span>
          </div>
        </div>
      </a>
      <a href="${product.coupangUrl}" target="_blank" rel="noopener noreferrer" class="btn-coupang">
        쿠팡에서 구매하기
      </a>
    </div>
  `;
}

// 상품 목록 렌더링
function renderProducts(productList, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = productList.map(createProductCard).join("");
}

// 상품 ID로 찾기
function getProductById(id) {
  return products.find((p) => p.id === parseInt(id));
}

// 카테고리별 필터
function getProductsByCategory(category) {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

// 검색
function searchProducts(query) {
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      categories[p.category].name.includes(q)
  );
}

// 정렬
function sortProducts(productList, sortBy) {
  const sorted = [...productList];
  switch (sortBy) {
    case "price-low":
      sorted.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      sorted.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case "review":
      sorted.sort((a, b) => b.reviewCount - a.reviewCount);
      break;
    case "discount":
      sorted.sort(
        (a, b) =>
          getDiscountRate(b.price, b.originalPrice) -
          getDiscountRate(a.price, a.originalPrice)
      );
      break;
    default:
      break;
  }
  return sorted;
}
