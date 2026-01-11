# Zod + React Hook Form 실습 과제

## 📋 과제 개요

각 레벨은 실무에서 자주 마주치는 시나리오를 기반으로 구성되어 있습니다.
모든 과제는 **React + TypeScript + Zod + React Hook Form**을 사용하여 구현합니다.

---

## 🟢 Level 1: 기본 실무 패턴

### 과제 1-1: 회원가입 폼 검증

#### 📌 요구사항

**기능 요구사항:**

1. 사용자는 이메일, 비밀번호, 비밀번호 확인, 생년월일, 약관 동의를 입력/선택할 수 있다
2. 각 필드는 실시간으로 검증되어야 한다 (onBlur 또는 onChange)
3. 제출 버튼은 모든 필드가 유효할 때만 활성화된다
4. 제출 시 콘솔에 검증된 데이터를 출력한다

**검증 규칙:**

- **이메일**

  - 이메일 형식이어야 함
  - `@company.com` 또는 `@startup.com` 도메인만 허용
  - 에러 메시지: "회사 이메일을 입력해주세요 (@company.com 또는 @startup.com)"

- **비밀번호**

  - 최소 8자 이상
  - 대문자 최소 1개
  - 소문자 최소 1개
  - 숫자 최소 1개
  - 특수문자 최소 1개 (!@#$%^&\*)
  - 각 조건 미충족 시 구체적인 에러 메시지 표시

- **비밀번호 확인**

  - 비밀번호와 정확히 일치해야 함
  - 에러 메시지: "비밀번호가 일치하지 않습니다"

- **생년월일**

  - 날짜 형식 (YYYY-MM-DD)
  - 만 14세 이상만 가입 가능
  - 미래 날짜 불가
  - 에러 메시지: "만 14세 이상만 가입 가능합니다"

- **약관 동의**
  - 서비스 이용약관 (필수)
  - 개인정보 처리방침 (필수)
  - 마케팅 수신 동의 (선택)
  - 필수 약관 미동의 시 에러 메시지: "필수 약관에 동의해주세요"

#### 🎨 UI 요구사항

```
┌─────────────────────────────────────┐
│        회원가입                      │
├─────────────────────────────────────┤
│                                     │
│ 이메일 *                            │
│ [                    ]              │
│ ⚠️ 에러 메시지 영역                  │
│                                     │
│ 비밀번호 *                          │
│ [                    ] 👁           │
│ ✓ 8자 이상                          │
│ ✓ 대문자 포함                       │
│ ✗ 숫자 포함                         │
│ ✗ 특수문자 포함                     │
│                                     │
│ 비밀번호 확인 *                     │
│ [                    ]              │
│ ⚠️ 에러 메시지 영역                  │
│                                     │
│ 생년월일 *                          │
│ [    -  -    ] (YYYY-MM-DD)        │
│ ⚠️ 에러 메시지 영역                  │
│                                     │
│ ☑️ [필수] 서비스 이용약관 동의       │
│ ☑️ [필수] 개인정보 처리방침 동의     │
│ ☐  [선택] 마케팅 수신 동의          │
│                                     │
│         [  가입하기  ]              │
│            (disabled)               │
└─────────────────────────────────────┘
```

**UI 세부사항:**

- 에러가 있는 필드는 빨간 테두리 표시
- 검증 통과한 필드는 초록 체크마크 표시
- 비밀번호 강도 표시기 (실시간 업데이트)
- 비밀번호 보기/숨기기 토글 버튼
- 약관 텍스트 클릭 시 모달로 전문 표시 (구현은 선택)

#### ✅ 평가 기준

- [ ] Zod 스키마가 모든 검증 규칙을 정확히 구현했는가?
- [ ] `refine` 또는 `superRefine`을 적절히 사용했는가?
- [ ] 비밀번호 확인 등 크로스 필드 검증이 작동하는가?
- [ ] 에러 메시지가 사용자 친화적인가?
- [ ] React Hook Form과 올바르게 통합되었는가?
- [ ] TypeScript 타입 안정성이 보장되는가?

---

### 과제 1-2: API 응답 검증 및 변환

#### 📌 요구사항

**시나리오:**
당신은 외부 날씨 API를 사용하는 대시보드를 만들고 있습니다.
API는 일관되지 않은 형식으로 데이터를 반환하며, 이를 안전하게 파싱하고 변환해야 합니다.

**기능 요구사항:**

1. Mock API 응답을 fetch하는 함수 작성
2. Zod로 응답을 검증하고 변환
3. 변환된 데이터를 UI에 표시
4. 검증 실패 시 에러 처리 및 폴백 UI 표시

**API 응답 예시 (일관되지 않음):**

```json
{
  "city": "Seoul",
  "temperature": "23.5",
  "humidity": 65,
  "wind_speed": "12",
  "forecast_date": "2025-01-15T00:00:00Z",
  "last_updated": "2025-01-10T14:30:00.000Z",
  "conditions": "partly_cloudy",
  "alerts": null,
  "hourly_forecast": [
    { "time": "14:00", "temp": "24", "condition": "sunny" },
    { "time": "15:00", "temp": "25.5", "condition": "sunny" }
  ]
}
```

**검증 및 변환 규칙:**

- `temperature`: string을 number로 변환, -50~60 범위 체크
- `wind_speed`: string을 number로 변환
- `forecast_date`: ISO string을 Date 객체로 변환
- `last_updated`: ISO string을 Date 객체로 변환
- `conditions`: enum 타입으로 제한 ("sunny" | "cloudy" | "rainy" | "partly_cloudy" | "stormy")
- `alerts`: null이면 빈 배열로 변환
- `hourly_forecast[].temp`: string을 number로 변환
- 잘못된 데이터가 오면 기본값 제공 또는 에러 처리

**추가 요구사항:**

- 선택적 필드: `feels_like`, `uv_index`, `visibility`
- `feels_like`가 없으면 `temperature`와 동일한 값 사용
- `uv_index`가 없으면 0으로 기본값 설정

#### 🎨 UI 요구사항

```
┌─────────────────────────────────────┐
│      날씨 대시보드                   │
├─────────────────────────────────────┤
│                                     │
│  📍 Seoul                           │
│  🌡️  23.5°C (체감 23.5°C)          │
│  💧 습도: 65%                       │
│  💨 풍속: 12 m/s                    │
│  ☁️  부분 흐림                      │
│                                     │
│  ⏰ 마지막 업데이트:                 │
│     2025-01-10 14:30               │
│                                     │
│  📊 시간대별 예보:                   │
│  ┌─────────────────────────────┐   │
│  │ 14:00  24°C   ☀️ 맑음       │   │
│  │ 15:00  25.5°C ☀️ 맑음       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ⚠️ 알림: 없음                      │
│                                     │
│      [ 새로고침 ]                   │
└─────────────────────────────────────┘

로딩 상태:
┌─────────────────────────────────────┐
│      날씨 대시보드                   │
├─────────────────────────────────────┤
│                                     │
│          ⏳ 로딩 중...              │
│                                     │
└─────────────────────────────────────┘

에러 상태:
┌─────────────────────────────────────┐
│      날씨 대시보드                   │
├─────────────────────────────────────┤
│                                     │
│     ❌ 데이터를 불러올 수 없습니다   │
│        다시 시도해주세요            │
│                                     │
│      [ 다시 시도 ]                  │
└─────────────────────────────────────┘
```

#### 💻 구현 가이드

```typescript
// Mock API 응답 (3가지 케이스 준비)
const mockResponses = {
  valid: {
    /* 정상 응답 */
  },
  invalidTemp: { temperature: '999' }, // 범위 초과
  missingFields: { city: 'Seoul' }, // 필수 필드 누락
};

// Zod 스키마 작성
const weatherSchema = z
  .object({
    // TODO: 구현
  })
  .transform((data) => {
    // TODO: 데이터 변환
  });

// React 컴포넌트
function WeatherDashboard() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    // TODO: API 호출 및 검증
  };

  // TODO: UI 렌더링
}
```

#### ✅ 평가 기준

- [ ] `coerce`, `transform`, `catch`, `default`를 적절히 사용했는가?
- [ ] 모든 타입 변환이 정확히 동작하는가?
- [ ] null/undefined 처리가 적절한가?
- [ ] 검증 실패 시 명확한 에러 메시지를 제공하는가?
- [ ] 타입 안정성이 보장되는가 (z.infer 활용)?
- [ ] 로딩/에러 상태 UI가 구현되었는가?

---

## 🟡 Level 2: 복잡한 구조

### 과제 2-1: 이커머스 상품 등록 폼

#### 📌 요구사항

**시나리오:**
쿠팡이나 네이버 쇼핑 같은 이커머스의 상품 등록 폼을 만듭니다.
상품 카테고리에 따라 다른 필수 정보가 필요하며, 옵션/재고 관리 기능도 포함됩니다.

**기능 요구사항:**

1. 카테고리 선택 시 필요한 필드가 동적으로 표시
2. 상품 옵션 추가/삭제 (색상, 사이즈 등)
3. 옵션별 가격/재고 관리
4. 이미지 업로드 (최대 10장)
5. 등록 전 미리보기 모달

**상품 데이터 구조:**

```typescript
{
  // === 기본 정보 ===
  category: "fashion" | "electronics" | "food" | "book",
  productName: string, // 5-100자
  brand?: string, // category가 "fashion" 또는 "electronics"일 때 필수

  // === 가격 정보 ===
  pricing: {
    basePrice: number, // 100원 이상
    discountType?: "none" | "percentage" | "fixed",

    // discountType이 "percentage"일 때
    discountPercentage?: number, // 1-99

    // discountType이 "fixed"일 때
    discountAmount?: number, // basePrice보다 작아야 함

    // 최종 가격 (자동 계산되어야 함)
    finalPrice: number
  },

  // === 카테고리별 필수 정보 ===
  categoryDetails:
    // fashion인 경우
    | {
        type: "fashion",
        gender: "men" | "women" | "unisex",
        season: Array<"spring" | "summer" | "fall" | "winter">, // 최소 1개
        material: string, // 예: "면 100%"
        washingInstructions?: string
      }
    // electronics인 경우
    | {
        type: "electronics",
        warranty: number, // 개월 수, 0-36
        powerConsumption?: string, // 예: "220V 60Hz"
        manufacturer: string,
        modelNumber: string
      }
    // food인 경우
    | {
        type: "food",
        expirationDate: Date, // 미래 날짜만
        storageMethod: "refrigerated" | "frozen" | "room_temperature",
        allergens: Array<"milk" | "egg" | "peanut" | "soy" | "wheat">, // 빈 배열 허용
        nutritionFacts: {
          servingSize: string, // 예: "100g"
          calories: number,
          protein: number, // g
          fat: number, // g
          carbohydrates: number // g
        }
      }
    // book인 경우
    | {
        type: "book",
        author: string,
        publisher: string,
        publishDate: Date,
        isbn: string, // ISBN-10 또는 ISBN-13 형식
        pageCount: number, // 1 이상
        language: "korean" | "english" | "japanese" | "chinese"
      },

  // === 옵션 및 재고 ===
  hasOptions: boolean,

  // hasOptions가 true일 때만 필수
  options?: Array<{
    id: string, // 고유 ID (자동 생성)
    name: string, // 예: "블랙 - M", "256GB"
    attributes: Record<string, string>, // { color: "블랙", size: "M" }
    additionalPrice: number, // 0 이상 (기본가 대비 추가 금액)
    stock: number, // 0 이상
    sku?: string // 재고 관리 코드
  }>, // 최소 1개, 최대 50개

  // hasOptions가 false일 때만 필수
  simpleStock?: number, // 0 이상

  // === 상품 설명 ===
  description: {
    summary: string, // 10-500자, 간단한 설명
    detail: string, // 100-5000자, 상세 설명
    images: Array<File>, // 최소 1개, 최대 10개, 각 5MB 이하
    mainImageIndex: number // 0부터 시작, images 배열 길이보다 작아야 함
  },

  // === 배송 정보 ===
  shipping: {
    freeShipping: boolean,

    // freeShipping이 false일 때만 필수
    shippingFee?: number, // 0 이상

    // freeShipping이 false이고 조건부 무료배송 제공 시
    freeShippingThreshold?: number, // shippingFee보다 커야 함

    deliveryTime: {
      min: number, // 일 수, 1 이상
      max: number // min보다 크거나 같아야 함
    },

    returnPolicy: {
      returnable: boolean,
      // returnable이 true일 때만 필수
      returnPeriod?: number, // 일 수, 7-30
      returnShippingFee?: number // 0 이상
    }
  },

  // === 검색 및 노출 ===
  seo: {
    keywords: string[], // 최소 3개, 최대 10개, 각 2-20자
    isVisible: boolean, // 상품 공개 여부
    isFeatured: boolean // 추천 상품 여부
  }
}
```

**추가 검증 규칙:**

- `finalPrice`는 할인 적용 후 가격과 정확히 일치해야 함
- `options`가 있으면 전체 재고는 각 옵션의 stock 합계
- `mainImageIndex`는 업로드된 이미지 개수보다 작아야 함
- `expirationDate`는 등록일로부터 최소 7일 이후여야 함
- ISBN은 체크섬 알고리즘 검증 필요

#### 🎨 UI 요구사항

```
┌─────────────────────────────────────────────────────────────┐
│  상품 등록                                          [임시저장] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ━━━ 기본 정보 ━━━                                          │
│                                                             │
│  카테고리 *                                                 │
│  ⦿ 패션     ○ 전자제품     ○ 식품     ○ 도서              │
│                                                             │
│  상품명 *                                                   │
│  [                              ] (5-100자)                │
│                                                             │
│  브랜드 *                                                   │
│  [                              ]                          │
│  ℹ️ 패션/전자제품 카테고리는 필수입니다                      │
│                                                             │
│  ━━━ 가격 정보 ━━━                                          │
│                                                             │
│  기본 가격 *                                                │
│  ₩ [                ]                                      │
│                                                             │
│  할인 적용                                                  │
│  ○ 없음  ⦿ 퍼센트 할인  ○ 정액 할인                         │
│                                                             │
│  할인율 *                                                   │
│  [10        ] %                                            │
│                                                             │
│  💰 최종 판매가: ₩27,000 (자동 계산)                        │
│                                                             │
│  ━━━ 패션 상품 정보 ━━━                                     │
│                                                             │
│  성별 *                                                     │
│  ○ 남성용  ⦿ 여성용  ○ 남녀공용                            │
│                                                             │
│  시즌 * (다중 선택)                                         │
│  ☑️ 봄  ☑️ 여름  ☐ 가을  ☐ 겨울                           │
│                                                             │
│  소재 *                                                     │
│  [면 100%                        ]                         │
│                                                             │
│  세탁 방법 (선택)                                           │
│  [손세탁 권장                     ]                         │
│                                                             │
│  ━━━ 옵션 설정 ━━━                                          │
│                                                             │
│  ☑️ 이 상품은 옵션이 있습니다                               │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 옵션 1                                    [삭제]     │   │
│  │ ───────────────────────────────────────────────────│   │
│  │ 옵션명: [블랙 - M                        ]         │   │
│  │                                                    │   │
│  │ 속성:                                              │   │
│  │ • 색상: [블랙  ]  • 사이즈: [M     ]              │   │
│  │                                                    │   │
│  │ 추가 금액: ₩ [0       ]                           │   │
│  │ 재고: [50      ] 개                               │   │
│  │ SKU: [BLK-M-001        ] (선택)                   │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 옵션 2                                    [삭제]     │   │
│  │ ───────────────────────────────────────────────────│   │
│  │ 옵션명: [화이트 - M                      ]         │   │
│  │ 속성: • 색상: [화이트] • 사이즈: [M     ]          │   │
│  │ 추가 금액: ₩ [0       ]                           │   │
│  │ 재고: [30      ] 개                               │   │
│  │ SKU: [WHT-M-001        ]                          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  [+ 옵션 추가]                                             │
│                                                             │
│  📦 전체 재고: 80개                                         │
│                                                             │
│  ━━━ 상품 이미지 ━━━                                        │
│                                                             │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                             │
│  │ ⭐ │ │    │ │    │ │ +  │  (최대 10장)                │
│  │ 📷 │ │ 📷 │ │ 📷 │ │추가│                             │
│  └────┘ └────┘ └────┘ └────┘                             │
│   대표     2      3                                        │
│                                                             │
│  ℹ️ 첫 번째 이미지가 대표 이미지로 표시됩니다                │
│                                                             │
│  ━━━ 상품 설명 ━━━                                          │
│                                                             │
│  간단 설명 * (10-500자)                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 부드러운 면 소재의 여름용 티셔츠입니다...           │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│  125 / 500                                                 │
│                                                             │
│  상세 설명 * (100-5000자)                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [편집기]                                            │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ━━━ 배송 정보 ━━━                                          │
│                                                             │
│  ☑️ 무료 배송                                              │
│                                                             │
│  배송 기간 *                                                │
│  [2] ~ [3] 일                                              │
│                                                             │
│  반품 가능 여부                                             │
│  ☑️ 반품 가능 (기간: [7] 일, 반품 배송비: ₩[2,500])        │
│                                                             │
│  ━━━ 검색 최적화 ━━━                                        │
│                                                             │
│  키워드 * (3-10개, 쉼표로 구분)                             │
│  [티셔츠, 면티, 여름옷, 베이직                ]              │
│  4개 입력됨                                                 │
│                                                             │
│  ☑️ 상품 공개    ☐ 추천 상품으로 표시                       │
│                                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                             │
│              [미리보기]            [등록하기]                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**미리보기 모달:**

```
┌───────────────────────────────────────────────────────┐
│  상품 미리보기                              [✕]       │
├───────────────────────────────────────────────────────┤
│                                                       │
│  ┌──────────────┐  여성용 면 티셔츠                  │
│  │              │  ByeBrand                          │
│  │   대표 이미지 │                                    │
│  │              │  💰 ₩27,000  ~~₩30,000~~          │
│  │              │  🏷️ 10% 할인                       │
│  └──────────────┘                                    │
│                                                       │
│  📦 배송: 2-3일 / 무료배송                            │
│  🔄 반품: 7일 이내 가능 (반품비 ₩2,500)              │
│                                                       │
│  ━━━ 옵션 선택 ━━━                                    │
│                                                       │
│  블랙 - M (재고: 50개) [선택 ▼]                       │
│                                                       │
│  ━━━ 상품 정보 ━━━                                    │
│                                                       │
│  부드러운 면 소재의 여름용 티셔츠입니다...            │
│                                                       │
│  • 성별: 여성용                                       │
│  • 시즌: 봄, 여름                                     │
│  • 소재: 면 100%                                      │
│  • 세탁: 손세탁 권장                                  │
│                                                       │
│  [상세 설명 보기]                                     │
│                                                       │
│           [수정하기]          [등록하기]              │
│                                                       │
└───────────────────────────────────────────────────────┘
```

#### 💻 구현 가이드

```typescript
// Zod 스키마 - discriminatedUnion으로 카테고리별 분기
const categoryDetailsSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('fashion'),
    gender: z.enum(['men', 'women', 'unisex']),
    season: z.enum(['spring', 'summer', 'fall', 'winter']).array().min(1),
    material: z.string().min(1),
    washingInstructions: z.string().optional(),
  }),
  z.object({
    type: z.literal('electronics'),
    warranty: z.number().min(0).max(36),
    powerConsumption: z.string().optional(),
    manufacturer: z.string().min(1),
    modelNumber: z.string().min(1),
  }),
  z.object({
    type: z.literal('food'),
    expirationDate: z.date().min(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)),
    storageMethod: z.enum(['refrigerated', 'frozen', 'room_temperature']),
    allergens: z.enum(['milk', 'egg', 'peanut', 'soy', 'wheat']).array(),
    nutritionFacts: z.object({
      servingSize: z.string(),
      calories: z.number().min(0),
      protein: z.number().min(0),
      fat: z.number().min(0),
      carbohydrates: z.number().min(0),
    }),
  }),
  z.object({
    type: z.literal('book'),
    author: z.string().min(1),
    publisher: z.string().min(1),
    publishDate: z.date(),
    isbn: z.string().regex(/^(ISBN-)?\d{9}[\dX]$|^(ISBN-)?\d{13}$/),
    pageCount: z.number().min(1),
    language: z.enum(['korean', 'english', 'japanese', 'chinese']),
  }),
]);

const productSchema = z
  .object({
    category: z.enum(['fashion', 'electronics', 'food', 'book']),
    productName: z.string().min(5).max(100),
    brand: z.string().optional(),

    pricing: z
      .object({
        basePrice: z.number().min(100),
        discountType: z.enum(['none', 'percentage', 'fixed']).optional(),
        discountPercentage: z.number().min(1).max(99).optional(),
        discountAmount: z.number().optional(),
        finalPrice: z.number(),
      })
      .superRefine((data, ctx) => {
        let calculatedPrice = data.basePrice;

        if (data.discountType === 'percentage' && data.discountPercentage) {
          calculatedPrice = data.basePrice * (1 - data.discountPercentage / 100);
        } else if (data.discountType === 'fixed' && data.discountAmount) {
          if (data.discountAmount >= data.basePrice) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['discountAmount'],
              message: '할인 금액은 기본 가격보다 작아야 합니다',
            });
          }
          calculatedPrice = data.basePrice - data.discountAmount;
        }

        if (Math.abs(data.finalPrice - calculatedPrice) > 0.01) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['finalPrice'],
            message: '최종 가격이 계산된 가격과 일치하지 않습니다',
          });
        }
      }),

    categoryDetails: categoryDetailsSchema,

    hasOptions: z.boolean(),
    options: z
      .array(
        z.object({
          id: z.string(),
          name: z.string().min(1),
          attributes: z.record(z.string()),
          additionalPrice: z.number().min(0),
          stock: z.number().min(0),
          sku: z.string().optional(),
        })
      )
      .min(1)
      .max(50)
      .optional(),

    simpleStock: z.number().min(0).optional(),

    // ... 나머지 필드
  })
  .superRefine((data, ctx) => {
    // brand는 fashion 또는 electronics일 때 필수
    if ((data.category === 'fashion' || data.category === 'electronics') && !data.brand) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['brand'],
        message: '패션/전자제품 카테고리는 브랜드가 필수입니다',
      });
    }

    // hasOptions에 따른 검증
    if (data.hasOptions && !data.options) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['options'],
        message: '옵션을 최소 1개 이상 추가해주세요',
      });
    }

    if (!data.hasOptions && data.simpleStock === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['simpleStock'],
        message: '재고 수량을 입력해주세요',
      });
    }
  });

type Product = z.infer<typeof productSchema>;
```

#### ✅ 평가 기준

- [ ] `discriminatedUnion`으로 카테고리별 필드 분기가 작동하는가?
- [ ] 가격 계산 로직이 정확한가 (할인 적용)?
- [ ] 옵션 추가/삭제가 동적으로 작동하는가?
- [ ] 조건부 필수 필드 (brand, options 등)가 올바르게 검증되는가?
- [ ] 이미지 업로드 및 대표 이미지 설정이 작동하는가?
- [ ] 전체 재고가 옵션별 재고 합계와 일치하는가?
- [ ] 미리보기 모달에 모든 정보가 올바르게 표시되는가?

---

### 과제 2-2: 설문조사 폼 빌더

#### 📌 요구사항

**시나리오:**
Google Forms나 Typeform 같은 설문조사 생성 도구를 만듭니다.
다양한 질문 유형을 지원하고, 각 유형별로 다른 설정 옵션이 있습니다.

**기능 요구사항:**

1. 질문 추가/삭제/순서 변경
2. 질문 유형 선택 (객관식, 주관식, 평점, 날짜 등)
3. 질문별 필수 여부 설정
4. 조건부 질문 (이전 답변에 따라 표시)
5. 설문 미리보기 및 JSON 내보내기

**설문 데이터 구조:**

```typescript
{
  // === 설문 기본 정보 ===
  title: string, // 5-100자
  description: string, // 10-500자

  settings: {
    allowMultipleSubmissions: boolean,
    showProgressBar: boolean,
    shuffleQuestions: boolean,

    // 제출 후 동작
    afterSubmit: "show_message" | "redirect_url",

    // afterSubmit이 "show_message"일 때
    thankYouMessage?: string,

    // afterSubmit이 "redirect_url"일 때
    redirectUrl?: string, // URL 형식

    // 응답 제한
    hasResponseLimit: boolean,
    responseLimit?: number, // hasResponseLimit이 true일 때 필수, 1 이상

    // 응답 기간
    hasDeadline: boolean,
    deadline?: Date // hasDeadline이 true일 때 필수, 미래 날짜
  },

  // === 질문 목록 ===
  questions: Array<{
    id: string, // 고유 ID
    order: number, // 표시 순서, 1부터 시작
    required: boolean,

    // 조건부 표시 설정
    conditionalDisplay?: {
      dependsOn: string, // 다른 질문의 ID
      showWhen: "equals" | "not_equals" | "contains",
      value: any
    },

    // 질문 유형별 데이터 (discriminated union)
    type: "short_text" | "long_text" | "single_choice" | "multiple_choice"
        | "rating" | "date" | "file_upload" | "email"
  } & (
    // 단답형
    | {
        type: "short_text",
        question: string,
        placeholder?: string,
        maxLength?: number, // 1-500
        validationPattern?: "none" | "number" | "phone" | "url"
      }

    // 장문형
    | {
        type: "long_text",
        question: string,
        placeholder?: string,
        minLength?: number, // 1 이상
        maxLength?: number, // minLength보다 크고 5000 이하
      }

    // 객관식 (단일 선택)
    | {
        type: "single_choice",
        question: string,
        options: Array<{
          id: string,
          label: string,
          value: string
        }>, // 최소 2개, 최대 20개
        allowOther: boolean, // "기타" 옵션 허용
        displayStyle: "radio" | "dropdown"
      }

    // 객관식 (다중 선택)
    | {
        type: "multiple_choice",
        question: string,
        options: Array<{
          id: string,
          label: string,
          value: string
        }>, // 최소 2개, 최대 20개
        allowOther: boolean,
        minSelections?: number, // 1 이상
        maxSelections?: number, // minSelections보다 크고 options 길이 이하
      }

    // 평점
    | {
        type: "rating",
        question: string,
        scale: 3 | 5 | 7 | 10, // 최대 점수
        scaleType: "stars" | "numbers" | "emojis",
        labels?: {
          low: string, // 최저점 레이블 (예: "매우 불만족")
          high: string // 최고점 레이블 (예: "매우 만족")
        }
      }

    // 날짜 선택
    | {
        type: "date",
        question: string,
        dateType: "date" | "datetime" | "time",
        minDate?: Date,
        maxDate?: Date,
        defaultToday: boolean
      }

    // 파일 업로드
    | {
        type: "file_upload",
        question: string,
        allowedTypes: Array<"image" | "pdf" | "document" | "video">, // 최소 1개
        maxFileSize: number, // MB, 1-50
        maxFiles: number, // 1-10
      }

    // 이메일
    | {
        type: "email",
        question: string,
        requireConfirmation: boolean, // 이메일 확인란 추가
        allowedDomains?: string[] // 특정 도메인만 허용 (예: ["company.com"])
      }
  )> // 최소 1개 질문 필요
}
```

**추가 검증 규칙:**

- `questions[].order`는 중복 없이 1부터 순차적이어야 함
- `conditionalDisplay.dependsOn`은 실제 존재하는 질문 ID여야 함
- 순환 참조 방지 (A가 B에 의존, B가 A에 의존)
- `maxLength`는 `minLength`보다 커야 함
- `maxSelections`는 `options` 배열 길이 이하여야 함

#### 🎨 UI 요구사항

```
┌─────────────────────────────────────────────────────────────┐
│  설문조사 만들기                    [미리보기] [JSON 내보내기] │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ━━━ 설문 정보 ━━━                                          │
│                                                             │
│  제목 *                                                     │
│  [2025 고객 만족도 조사                    ] (5-100자)      │
│                                                             │
│  설명 *                                                     │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 소중한 의견을 들려주세요...                         │   │
│  └─────────────────────────────────────────────────────┘   │
│  50 / 500                                                  │
│                                                             │
│  ━━━ 설정 ━━━                                               │
│                                                             │
│  ☑️ 중복 응답 허용    ☑️ 진행률 표시    ☐ 질문 순서 섞기    │
│                                                             │
│  제출 후 동작                                               │
│  ⦿ 감사 메시지 표시   ○ URL로 리다이렉트                    │
│                                                             │
│  감사 메시지                                                │
│  [참여해주셔서 감사합니다!          ]                       │
│                                                             │
│  ☐ 응답 수 제한 (     개)                                  │
│  ☐ 마감 기한 설정 (____-__-__)                             │
│                                                             │
│  ━━━ 질문 목록 ━━━                                          │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [≡] 질문 1                 [↑] [↓] [복사] [삭제]   │   │
│  │ ───────────────────────────────────────────────────│   │
│  │                                                    │   │
│  │ 질문 유형: [객관식 (단일 선택) ▼]                   │   │
│  │                                                    │   │
│  │ 질문 *                                             │   │
│  │ [당신의 연령대는?                ]                  │   │
│  │                                                    │   │
│  │ 선택지:                                            │   │
│  │ ○ [10대           ] [삭제]                         │   │
│  │ ○ [20대           ] [삭제]                         │   │
│  │ ○ [30대           ] [삭제]                         │   │
│  │ ○ [40대 이상      ] [삭제]                         │   │
│  │ [+ 선택지 추가]                                    │   │
│  │                                                    │   │
│  │ 표시 방식: ⦿ 라디오 버튼   ○ 드롭다운              │   │
│  │ ☐ "기타" 옵션 허용                                 │   │
│  │                                                    │   │
│  │ ☑️ 필수 질문                                       │   │
│  │ ☐ 조건부 표시                                      │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ [≡] 질문 2                 [↑] [↓] [복사] [삭제]   │   │
│  │ ───────────────────────────────────────────────────│   │
│  │                                                    │   │
│  │ 질문 유형: [평점 ▼]                                 │   │
│  │                                                    │   │
│  │ 질문 *                                             │   │
│  │ [서비스에 얼마나 만족하시나요?      ]               │   │
│  │                                                    │   │
│  │ 척도: ⦿ 5점   ○ 10점                               │   │
│  │ 표시: ⦿ 별점   ○ 숫자   ○ 이모지                   │   │
│  │                                                    │   │
│  │ 레이블:                                            │   │
│  │ 최저점: [매우 불만족      ]                        │   │
│  │ 최고점: [매우 만족        ]                        │   │
│  │                                                    │   │
│  │ ☑️ 필수 질문                                       │   │
│  │ ☑️ 조건부 표시                                     │   │
│  │   ↳ "질문 1"의 답변이 "30대"와 같을 때 표시        │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  [+ 질문 추가]                                             │
│                                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                             │
│                              [임시저장]      [생성 완료]     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**미리보기 화면:**

```
┌─────────────────────────────────────┐
│  미리보기                [✕]        │
├─────────────────────────────────────┤
│                                     │
│  2025 고객 만족도 조사              │
│  소중한 의견을 들려주세요...        │
│                                     │
│  진행률: [████████░░] 80%           │
│                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                     │
│  1. 당신의 연령대는? *              │
│  ○ 10대                             │
│  ○ 20대                             │
│  ⦿ 30대                             │
│  ○ 40대 이상                        │
│                                     │
│  2. 서비스에 얼마나 만족하시나요? * │
│  (이전 답변이 "30대"라서 표시됨)    │
│                                     │
│  매우 불만족  ☆☆☆★★  매우 만족     │
│                                     │
│  [이전]              [다음]         │
│                                     │
└─────────────────────────────────────┘
```

#### 💻 구현 가이드

```typescript
// 질문 타입별 스키마
const questionSchemas = [
  z.object({
    type: z.literal('short_text'),
    question: z.string().min(1),
    placeholder: z.string().optional(),
    maxLength: z.number().min(1).max(500).optional(),
    validationPattern: z.enum(['none', 'number', 'phone', 'url']).optional(),
  }),

  z.object({
    type: z.literal('single_choice'),
    question: z.string().min(1),
    options: z
      .array(
        z.object({
          id: z.string(),
          label: z.string().min(1),
          value: z.string(),
        })
      )
      .min(2)
      .max(20),
    allowOther: z.boolean(),
    displayStyle: z.enum(['radio', 'dropdown']),
  }),

  z.object({
    type: z.literal('rating'),
    question: z.string().min(1),
    scale: z.enum([3, 5, 7, 10]),
    scaleType: z.enum(['stars', 'numbers', 'emojis']),
    labels: z
      .object({
        low: z.string(),
        high: z.string(),
      })
      .optional(),
  }),

  // ... 나머지 타입들
];

const surveySchema = z
  .object({
    title: z.string().min(5).max(100),
    description: z.string().min(10).max(500),

    settings: z
      .object({
        allowMultipleSubmissions: z.boolean(),
        showProgressBar: z.boolean(),
        shuffleQuestions: z.boolean(),
        afterSubmit: z.enum(['show_message', 'redirect_url']),
        thankYouMessage: z.string().optional(),
        redirectUrl: z.string().url().optional(),
        hasResponseLimit: z.boolean(),
        responseLimit: z.number().min(1).optional(),
        hasDeadline: z.boolean(),
        deadline: z.date().optional(),
      })
      .superRefine((data, ctx) => {
        // afterSubmit 검증
        if (data.afterSubmit === 'show_message' && !data.thankYouMessage) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['thankYouMessage'],
            message: '감사 메시지를 입력해주세요',
          });
        }

        if (data.afterSubmit === 'redirect_url' && !data.redirectUrl) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['redirectUrl'],
            message: '리다이렉트 URL을 입력해주세요',
          });
        }

        // 응답 제한 검증
        if (data.hasResponseLimit && !data.responseLimit) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['responseLimit'],
            message: '응답 제한 수를 입력해주세요',
          });
        }

        // 마감 기한 검증
        if (data.hasDeadline) {
          if (!data.deadline) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['deadline'],
              message: '마감 기한을 설정해주세요',
            });
          } else if (data.deadline <= new Date()) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ['deadline'],
              message: '마감 기한은 미래 날짜여야 합니다',
            });
          }
        }
      }),

    questions: z
      .array(
        z
          .object({
            id: z.string(),
            order: z.number().min(1),
            required: z.boolean(),
            conditionalDisplay: z
              .object({
                dependsOn: z.string(),
                showWhen: z.enum(['equals', 'not_equals', 'contains']),
                value: z.any(),
              })
              .optional(),
          })
          .and(z.discriminatedUnion('type', questionSchemas))
      )
      .min(1),
  })
  .superRefine((data, ctx) => {
    // 질문 순서 검증
    const orders = data.questions.map((q) => q.order).sort((a, b) => a - b);
    const expectedOrders = Array.from({ length: orders.length }, (_, i) => i + 1);

    if (JSON.stringify(orders) !== JSON.stringify(expectedOrders)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['questions'],
        message: '질문 순서가 올바르지 않습니다 (1부터 순차적이어야 함)',
      });
    }

    // 조건부 표시 검증
    const questionIds = new Set(data.questions.map((q) => q.id));

    data.questions.forEach((q, index) => {
      if (q.conditionalDisplay) {
        if (!questionIds.has(q.conditionalDisplay.dependsOn)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['questions', index, 'conditionalDisplay', 'dependsOn'],
            message: '존재하지 않는 질문을 참조하고 있습니다',
          });
        }

        // 순환 참조 체크 (간단한 버전)
        if (q.conditionalDisplay.dependsOn === q.id) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            path: ['questions', index, 'conditionalDisplay', 'dependsOn'],
            message: '자기 자신을 참조할 수 없습니다',
          });
        }
      }
    });
  });

type Survey = z.infer<typeof surveySchema>;
```

#### ✅ 평가 기준

- [ ] `discriminatedUnion`으로 질문 유형별 필드가 올바르게 분기되는가?
- [ ] 질문 추가/삭제/순서 변경이 작동하는가?
- [ ] 질문 순서 검증 (1부터 순차적)이 작동하는가?
- [ ] 조건부 표시 설정이 올바르게 검증되는가?
- [ ] 각 질문 유형별 특수 검증이 정확한가?
- [ ] 미리보기에서 조건부 질문이 올바르게 표시/숨김 되는가?
- [ ] JSON 내보내기가 타입 안전하게 작동하는가?

---

## 🔴 Level 3: 실전 통합 패턴

### 과제 3-1: 다단계 레슨 요청서 폼

#### 📌 요구사항

**시나리오:**
숨고 스타일의 레슨 요청서를 만듭니다.
4단계로 구성되며, 각 단계의 선택에 따라 후속 단계가 동적으로 변경됩니다.

**기능 요구사항:**

1. 4단계 폼 네비게이션 (진행률 표시)
2. 단계별 검증 (다음 단계로 넘어갈 때)
3. 이전 단계로 돌아가기 (데이터 유지)
4. 임시저장 기능 (localStorage)
5. 최종 제출 전 요약 모달
6. URL에 현재 단계 반영 (/request/step-1, /step-2, ...)

**폼 구조:**

**Step 1: 기본 정보**

```typescript
{
  category: "yoga" | "pilates" | "guitar" | "english" | "coding",
  studentCount: number, // 1-10
  studentAge: "child" | "teen" | "adult" | "senior",
  hasExperience: boolean,

  // hasExperience가 true일 때만 필수
  experienceLevel?: "beginner" | "intermediate" | "advanced",

  // hasExperience가 true일 때만 선택
  previousInstructor?: string // 최대 100자
}
```

**Step 2: 레슨 일정 (category별로 다른 옵션)**

```typescript
{
  preferredDays: Array<"mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun">,
  // 최소 1개, 최대 7개

  timeSlots: Array<"morning" | "afternoon" | "evening" | "night">,
  // 최소 1개

  sessionDuration: 30 | 60 | 90 | 120, // 분 단위
  // category가 "yoga"나 "pilates"면 60 이상만 허용

  frequency: "once" | "weekly" | "twice_weekly" | "three_times_weekly" | "daily",

  // frequency가 "once"가 아닐 때만 필수
  desiredStartDate?: Date, // 오늘 이후, 6개월 이내

  // frequency가 "weekly" 이상일 때만 필수
  commitmentPeriod?: number, // 주 단위, 4-52

  // studentAge가 "child"이고 timeSlots에 "night"가 포함되면 경고
  // (검증은 통과하지만 확인 필요)
}
```

**Step 3: 장소 및 환경**

```typescript
{
  locationType: "teacher_visits" | "student_visits" | "online" | "flexible",

  // locationType이 "teacher_visits"일 때만 필수
  address?: {
    sido: string, // 시/도
    sigungu: string, // 시/군/구
    dong: string, // 동/읍/면
    detail?: string, // 상세주소 (선택)
    hasParking: boolean,
    hasElevator: boolean
  },

  // locationType이 "student_visits"일 때만 필수
  facilityType?: "instructor_studio" | "public_facility" | "outdoor",
  travelableDistance?: number, // km, 1-50

  // locationType이 "online"일 때만 필수
  onlinePlatform?: "zoom" | "google_meet" | "skype" | "other",
  hasRequiredEquipment?: boolean, // 카메라, 마이크 등

  // category가 "yoga"나 "pilates"이고 locationType이 "teacher_visits"일 때만
  spaceSize?: "small" | "medium" | "large", // 요가매트 깔 공간

  budget: {
    type: "per_session" | "per_month",
    min: number, // 10,000원 이상
    max: number, // min보다 커야 함, 10,000,000원 이하
    isNegotiable: boolean,

    // isNegotiable이 false이고 max-min 차이가 50,000원 미만이면 경고
  }
}
```

**Step 4: 추가 정보 및 연락처**

```typescript
{
  goals: string, // 최소 10자, 최대 1000자
  // XSS 방지: <script>, <iframe> 등 태그 불허

  specialRequests?: string, // 최대 500자

  photos?: Array<File>,
  // 최대 5개
  // 각 파일: 10MB 이하, image/jpeg, image/png, image/webp만
  // 총 용량: 30MB 이하

  // category가 "coding"일 때만
  preferredLanguages?: Array<"javascript" | "python" | "java" | "cpp">,
  // 최소 1개

  contact: {
    name: string, // 2-20자, 한글/영문만
    phone: string, // 010-0000-0000 형식
    email: string,
    preferredContactTime: Array<"morning" | "afternoon" | "evening">,
    // 최소 1개

    // studentAge가 "child"나 "teen"일 때 필수
    guardianContact?: {
      name: string,
      phone: string,
      relationship: "parent" | "guardian" | "other"
    }
  },

  marketingConsent: {
    email: boolean,
    sms: boolean,
    push: boolean
  },

  termsAgreed: boolean, // 반드시 true
  privacyAgreed: boolean // 반드시 true
}
```

#### 🎨 UI 요구사항

```
┌─────────────────────────────────────────────────────────────┐
│  레슨 요청서 작성                                   [임시저장]  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ●━━━━○━━━━○━━━━○                                          │
│  Step 1  Step 2  Step 3  Step 4                            │
│  기본정보  일정   장소    추가정보                           │
│                                                             │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                             │
│  어떤 레슨을 원하시나요? *                                   │
│  ⦿ 요가          ○ 필라테스    ○ 기타                       │
│  ○ 영어          ○ 코딩                                     │
│                                                             │
│  수강 인원 *                                                │
│  [1  ▼]  명                                                │
│                                                             │
│  수강생 연령대 *                                             │
│  ⦿ 성인(20-64세)   ○ 아동(7-12세)                          │
│  ○ 청소년(13-19세) ○ 시니어(65세 이상)                      │
│                                                             │
│  레슨 경험이 있으신가요? *                                   │
│  ⦿ 예             ○ 아니오                                 │
│                                                             │
│  --- (경험 있음 선택 시 표시) ---                           │
│  경험 수준 *                                                │
│  ⦿ 초급           ○ 중급      ○ 고급                       │
│                                                             │
│  이전 강사명 (선택)                                         │
│  [                              ]                          │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ │
│                                                             │
│                                   [이전]        [다음 단계]  │
│                                            (Step 2로 이동)  │
└─────────────────────────────────────────────────────────────┘

Step 4 완료 후 최종 확인 모달:

┌─────────────────────────────────────┐
│  요청서 최종 확인        [✕]        │
├─────────────────────────────────────┤
│                                     │
│  입력하신 내용을 확인해주세요        │
│                                     │
│  ━━━ Step 1: 기본 정보 ━━━          │
│  • 레슨: 요가                       │
│  • 인원: 1명                        │
│  • 연령: 성인                       │
│  • 경험: 초급                       │
│                                     │
│  ━━━ Step 2: 일정 ━━━               │
│  • 요일: 월, 수, 금                 │
│  • 시간: 저녁                       │
│  • 1회당: 60분                      │
│  • 빈도: 주 3회                     │
│  • 시작: 2025-01-20                │
│  • 기간: 12주                       │
│                                     │
│  ━━━ Step 3: 장소 및 예산 ━━━       │
│  • 방문: 선생님이 방문              │
│  • 주소: 서울 강남구 역삼동         │
│  • 주차: 가능 / 엘레베이터: 있음    │
│  • 공간: 중형                       │
│  • 예산: 회당 50,000-70,000원       │
│                                     │
│  ━━━ Step 4: 추가 정보 ━━━          │
│  • 목표: 다이어트와 유연성 향상...  │
│  • 사진: 2개                        │
│  • 연락처: 홍길동 (010-1234-5678)   │
│                                     │
│  [수정하기]           [제출하기]     │
│                                     │
└─────────────────────────────────────┘
```

**모바일 반응형:**

- 진행 바는 숫자만 표시 (1/4, 2/4, ...)
- 라디오 버튼은 카드 형태로 배치
- 하단 버튼 고정 (sticky)

#### 💻 구현 가이드

```typescript
// 1. 단계별 스키마 분리
const step1Schema = z
  .object({
    category: z.enum(['yoga', 'pilates', 'guitar', 'english', 'coding']),
    studentCount: z.number().min(1).max(10),
    studentAge: z.enum(['child', 'teen', 'adult', 'senior']),
    hasExperience: z.boolean(),
  })
  .superRefine((data, ctx) => {
    if (data.hasExperience && !data.experienceLevel) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['experienceLevel'],
        message: '경험 수준을 선택해주세요',
      });
    }
  });

const step2Schema = z
  .object({
    // ...
  })
  .superRefine((data, ctx) => {
    // category별 sessionDuration 검증
    // studentAge + timeSlots 조합 경고
  });

// 2. 전체 스키마 조합
const lessonRequestSchema = z
  .object({
    ...step1Schema.shape,
    ...step2Schema.shape,
    ...step3Schema.shape,
    ...step4Schema.shape,
  })
  .superRefine((data, ctx) => {
    // 크로스 스텝 검증
  });

// 3. React Hook Form 통합
function LessonRequestForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const navigate = useNavigate();

  const form = useForm<LessonRequest>({
    resolver: zodResolver(lessonRequestSchema),
    mode: 'onBlur',
    defaultValues: loadFromLocalStorage() || {},
  });

  // 특정 필드 watch
  const category = form.watch('category');
  const locationType = form.watch('locationType');
  const studentAge = form.watch('studentAge');

  // 단계별 검증
  const validateStep = async (step: number) => {
    const fieldsToValidate = getFieldsForStep(step);
    const isValid = await form.trigger(fieldsToValidate);
    return isValid;
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setCurrentStep((prev) => prev + 1);
      navigate(`/request/step-${currentStep + 1}`);
      saveToLocalStorage(form.getValues());
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
    navigate(`/request/step-${currentStep - 1}`);
  };

  // locationType 변경 시 관련 필드 초기화
  useEffect(() => {
    if (locationType !== 'teacher_visits') {
      form.resetField('address');
      form.resetField('spaceSize');
    }
    if (locationType !== 'student_visits') {
      form.resetField('facilityType');
      form.resetField('travelableDistance');
    }
    if (locationType !== 'online') {
      form.resetField('onlinePlatform');
      form.resetField('hasRequiredEquipment');
    }
  }, [locationType]);

  return (
    <form>
      <ProgressBar current={currentStep} total={4} />

      {currentStep === 1 && <Step1Fields control={form.control} />}
      {currentStep === 2 && <Step2Fields control={form.control} category={category} />}
      {currentStep === 3 && <Step3Fields control={form.control} />}
      {currentStep === 4 && <Step4Fields control={form.control} />}

      <Navigation
        onPrevious={handlePrevious}
        onNext={handleNext}
        onSubmit={form.handleSubmit(handleSubmit)}
        isFirstStep={currentStep === 1}
        isLastStep={currentStep === 4}
      />
    </form>
  );
}

// 4. 필드별 컴포넌트 예시
function Step3Fields({ control }: { control: Control<LessonRequest> }) {
  const locationType = useWatch({ control, name: 'locationType' });
  const category = useWatch({ control, name: 'category' });

  return (
    <>
      <Controller
        control={control}
        name="locationType"
        render={({ field, fieldState }) => (
          <RadioGroup {...field} error={fieldState.error?.message}>
            <Radio value="teacher_visits">선생님이 방문</Radio>
            <Radio value="student_visits">제가 방문</Radio>
            <Radio value="online">온라인</Radio>
            <Radio value="flexible">유연하게</Radio>
          </RadioGroup>
        )}
      />

      {locationType === 'teacher_visits' && (
        <>
          <AddressFields control={control} />
          {(category === 'yoga' || category === 'pilates') && <SpaceSizeField control={control} />}
        </>
      )}

      {/* 다른 조건부 필드들 */}
    </>
  );
}
```

#### ✅ 평가 기준

- [ ] 4단계 네비게이션이 올바르게 작동하는가?
- [ ] 각 단계별 검증이 정확한가?
- [ ] 조건부 필드가 동적으로 표시/숨김 되는가?
- [ ] 필드 변경 시 관련 필드가 적절히 초기화되는가?
- [ ] 임시저장 기능이 작동하는가?
- [ ] URL이 현재 단계를 반영하는가?
- [ ] 최종 확인 모달이 모든 데이터를 올바르게 표시하는가?
- [ ] 에러 메시지가 단계별로 명확하게 표시되는가?
- [ ] 모바일 반응형이 구현되었는가?
- [ ] 타입 안정성이 전체 폼에서 보장되는가?
