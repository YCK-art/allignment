# Allign - AI Team Alignment Landing Page

모던하고 깔끔한 AI 팀 얼라인먼트 랜딩페이지입니다. 참고사진을 바탕으로 제작되었으며, Geist 폰트를 사용하여 현대적인 디자인을 구현했습니다.

## 주요 기능

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 최적화
- **모던한 UI**: 부드러운 그라데이션 배경과 글래스모피즘 효과
- **인터랙티브 요소**: 호버 효과, 애니메이션, 타이머 기능
- **AI 인터페이스**: 우측 하단에 고정된 AI 어시스턴트 박스

## 파일 구조

```
allignment/
├── index.html      # 메인 HTML 파일
├── styles.css      # CSS 스타일시트
├── script.js       # JavaScript 기능
└── README.md       # 프로젝트 설명서
```

## 사용된 기술

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션, 반응형 디자인
- **JavaScript**: ES6+, DOM 조작, 이벤트 핸들링
- **Google Fonts**: Geist 폰트 패밀리

## 주요 섹션

### 1. Topbar (상단 네비게이션)
- 왼쪽: Allign 로고 (체크마크 아이콘 포함)
- 중앙: Use cases, Pricing, Help, Careers 메뉴
- 오른쪽: Sign in 링크, Log in 버튼 (검은색 배경, 화살표 아이콘)

### 2. Hero Section (메인 콘텐츠)
- 제목: "AI that gets your team aligned before it's too late"
- 부제목: "Turn meetings and docs into instant understanding — AI quizzes reveal who's aligned, who's not, and what to do next."
- CTA 버튼: Mac/Windows 다운로드 버튼

### 3. AI Interface Box (우측 하단)
- 타이머 기능
- Ask AI, Show/Hide 버튼
- 설정 아이콘
- AI 응답 시뮬레이션 콘텐츠

## 실행 방법

1. 모든 파일을 같은 디렉토리에 저장
2. `index.html` 파일을 웹 브라우저에서 열기
3. 또는 로컬 서버를 실행하여 확인

```bash
# Python 3를 사용한 간단한 로컬 서버
python -m http.server 8000

# 또는 Node.js http-server 사용
npx http-server
```

## 커스터마이징

### 색상 변경
`styles.css` 파일에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #1a1a1a;
    --background-gradient: linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 50%, #f5f9ff 100%);
}
```

### 폰트 변경
Google Fonts에서 다른 폰트를 선택하여 `index.html`의 폰트 링크를 변경할 수 있습니다.

## 브라우저 지원

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 