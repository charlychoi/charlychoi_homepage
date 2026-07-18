const services = [
  { icon: "01", title: "기업·공공기관 AI 활용 교육", text: "생성형 AI와 Gemini를 실제 업무에 적용하는 방법을 조직 수준과 직무에 맞춰 교육합니다.", bullets: ["ChatGPT, Claude, Gemini, Grok AI 업무 활용", "슬라이드, 이미지, 유튜브 롱폼, 숏폼 영상 생성", "Google Workspace와 AI 활용"], cta: "강의 문의", type: "기업·기관 AI 강의" },
  { icon: "02", title: "중장년·시니어 AI 교육", text: "AI가 낯선 학습자도 따라올 수 있도록 쉬운 설명, 반복 실습, 생활 사례 중심으로 진행합니다.", bullets: ["생성형 AI 기초", "스마트폰·PC 실습", "글쓰기·검색·콘텐츠 제작"], cta: "교육 문의", type: "중장년·시니어 AI 교육" },
  { icon: "03", title: "AX·AI Agent 컨설팅", text: "반복 업무와 고객 접점을 진단해 AI 자동화와 AI Agent 적용 방안을 설계합니다.", bullets: ["업무 프로세스 진단", "Hermes/OpenClaw 에이전트 활용", "사내 규정/지식/FAQ RAG AI 챗봇", "n8n·Workspace 자동화"], cta: "상담 요청", type: "AX·AI Agent 컨설팅" },
];

const lectures = [
  ["생성형 AI 실무 활용 특강", "90분~2시간", "기업 임직원·공공기관 직원", "ChatGPT·Gemini·Claude·Grok AI 핵심 기능, 프롬프트, 문서 업무 활용", "강의 + 시연 + 간단한 실습", "이 강의 문의하기"],
  ["중장년을 위한 쉬운 AI 활용 교육", "2~4시간", "중장년·시니어·재취업 교육생", "AI 기초, 검색, 글쓰기, 이미지, 생활·업무 활용", "쉬운 설명 + 반복 실습", "교육 일정 문의하기"],
  ["바이브코딩으로 만드는 나만의 AI 도구", "반일 또는 1일", "비개발자·실무자·기획자", "자연어로 웹앱 만들기, AI 도구 기획과 배포", "실습 중심 워크숍", "워크숍 문의하기"],
  ["Google Workspace·Gemini 업무 혁신", "2시간~1일", "Google Workspace 사용 기업·기관", "Gmail, Docs, Sheets, Drive와 Gemini 연계 활용", "업무 시나리오 기반 실습", "맞춤 교육 문의하기"],
];

const consulting = [
  ["AI 활용 사전 진단", "현재 업무와 데이터 활용 수준을 점검하고 AI 적용 과제와 우선순위를 도출합니다.", ["현황·페인포인트 진단", "AI 적용 후보 과제", "단기·중기 로드맵"]],
  ["AI Agent·업무 자동화 PoC", "반복 업무를 줄이기 위한 AI Agent 또는 자동화 시제품을 제작합니다.", ["반복업무 자동화", "Hermes/OpenClaw Agent 활용", "상담 챗봇·보고서 자동화", "업무 자동화", "온라인 마케팅 AI 진단"]],
  ["AI 교육체계 설계", "기관의 대상과 수준에 맞는 AI 교육과정과 실습 프로그램을 설계합니다.", ["임직원 AI 리터러시", "부서별 실무 교육", "비개발자 바이브코딩"]],
];

const projects = [
  ["AX 현장 컨설팅 분석 도구", "중소기업 현장 자료에서 핵심 이슈와 실행 과제를 찾는 어려움", "AI 분석과 컨설팅 보고서 작성을 지원하는 웹앱", "AX 진단·실행 과제 설계", "AI ANALYSIS · REPORT", "https://ax-consulting-beta.vercel.app", "서비스 보기"],
  ["디지털센터 운영 예측 대시보드", "센터별 방문자·혼잡도·교육 참석 예측의 어려움", "Google TimesFM으로 운영 데이터를 예측·시각화", "인력과 프로그램 운영 의사결정", "TIMESFM · FORECAST", "https://github.com/charlychoi/timesfm-didongpul", "GitHub"],
  ["AI 에이전트 운영·모니터링 도구", "에이전트 작업 상태와 운영 흐름 파악의 어려움", "작업 상태를 확인하고 흐름을 실험하는 UI", "AI Agent 교육·PoC 설계", "AI AGENT · MONITORING", "https://github.com/CharlyChoiStory/hermesUI", "GitHub"],
  ["사내 규정 RAG 챗봇", "방대한 규정에서 근거 조항을 빠르게 찾기 어려움", "자연어 검색과 출처 기반 답변을 제공하는 챗봇 PoC", "사내 지식 검색·안전 응답", "RAG · CHATBOT", "https://github.com/charlychoi/internal-policy-rag-chatbot", "GitHub"],
];

const moreProjects = [
  ["한글 문서 변환기", "HWP·HWPX·PDF를 Markdown으로 변환", "https://github.com/charlychoi/hwp"],
  ["AI 비용 거버넌스 PoC", "모델 접근·예산·사용량 통제", "https://github.com/charlychoi/ssw-litellm-poc"],
  ["사회적기업 날씨·대기질 운영 코치", "현장 운영 판단과 대응 메시지 지원", "https://social-weather-ai-ops-coach.vercel.app/"],
  ["n8n 업무자동화", "회의록 마스킹·분석·알림 자동화", "https://github.com/charlychoi/n8n_automation"],
  ["상상우리 매칭 서비스", "사회적기업과 중장년 인재 매칭", "https://github.com/CharlyChoiStory/sangsangwoori-matching"],
  ["로컬 기업용 RAG 챗봇", "내부 반복 질문 자동응답 PoC", "https://github.com/CharlyChoiStory/local-enterprise-rag-chatbot"],
];

const faqs = [
  ["AI를 처음 접하는 사람도 교육을 받을 수 있나요?", "가능합니다. 참가자의 연령과 디지털 활용 수준에 맞춰 기초부터 단계적으로 구성합니다."],
  ["기업과 기관에 맞춤형 교육이 가능한가요?", "가능합니다. 직무, 인원, 교육 시간, 사용하는 도구를 확인한 뒤 실제 업무 사례 중심으로 조정합니다."],
  ["온라인과 오프라인 교육이 모두 가능한가요?", "모두 협의할 수 있습니다. 교육 목적과 실습 방식에 따라 적합한 방식을 제안합니다."],
  ["강의 시간은 어떻게 구성되나요?", "90분 특강, 2시간 실습, 반일·1일 워크숍 등으로 구성할 수 있습니다."],
  ["컨설팅은 어떤 방식으로 진행되나요?", "사전 인터뷰와 자료 검토로 문제를 진단하고 AI 적용 과제, 실행 우선순위 또는 PoC를 제안합니다."],
  ["강의료나 컨설팅 비용은 어떻게 결정되나요?", "시간, 인원, 지역, 준비 범위와 맞춤 자료 제작 여부를 확인한 뒤 구체적으로 안내합니다."],
];

const nav = [["소개", "intro"], ["주요 서비스", "services"], ["강의 프로그램", "programs"], ["컨설팅", "consulting"], ["프로젝트", "projects"], ["경력·저서", "career"], ["FAQ", "faq"]];

export default function Home() {
  return <>
    <header className="topbar">
      <div className="container nav-wrap">
        <a className="brand" href="#top"><b>찰리초이</b><span>AI 활용 강사 · 컨설턴트 · 작가</span></a>
        <nav className="desktop-nav" aria-label="주요 메뉴">{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}</nav>
        <a className="nav-cta" href="#contact">문의하기</a>
        <details className="mobile-nav"><summary aria-label="메뉴 열기"><span></span><span></span><span></span></summary><nav>{nav.map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}<a href="#contact">문의하기</a></nav></details>
      </div>
    </header>

    <main id="top">
      <section className="hero" id="intro"><div className="container hero-grid">
        <div className="hero-copy"><p className="eyebrow">기업·공공기관·중장년을 위한 실무형 AI 교육</p><h1>현장 업무에 바로 적용하는<br/><em>AI 활용 교육과 AX 컨설팅</em></h1><p className="lead">기업·공공기관·교육기관의 업무와 구성원 수준에 맞춰 AI Agent, 바이브코딩, 생성형 AI 활용법을 쉽고 실용적으로 전달합니다.</p><p className="sublead">30년 이상의 IT 현장 경험과 교육·저술·AI 도구 개발 경험으로 복잡한 기술을 누구나 활용할 수 있는 실행 방법으로 바꿉니다.</p><div className="actions"><a className="button primary" href="#contact">AI 강의 문의하기</a><a className="button secondary" href="#contact">AI 컨설팅 상담하기</a><a className="text-link" href="#programs">강의 프로그램 보기 →</a></div></div>
        <div className="hero-visual"><div className="portrait">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/charlychoi-left.webp" alt="AI 활용 강사 찰리초이" width="720" height="720" fetchPriority="high"/>
        </div><div className="promise-card"><p>직접 만들고 적용하고 검증한 경험을<br/><b>교육과 컨설팅으로 전달합니다.</b></p><ul><li>기업·기관 맞춤형 교육</li><li>중장년 눈높이 설명</li><li>실습 중심 프로그램</li><li>직접 개발한 AI 사례 활용</li></ul></div></div>
      </div></section>

      <section className="trust"><div className="container trust-grid">{[["30년+", "IT·디지털 업무 경력", "기업 현장과 교육을 연결한 실무 경험"], ["13권+", "AI·디지털 관련 저서", "한국어·영어·일본어 AI 활용 도서"], ["5년+", "AI 활용 강의·컨설팅", "생성형 AI·Workspace·바이브코딩"], ["10개+", "직접 기획·개발한 프로젝트", "Agent·RAG·자동화·데이터 분석"]].map(x => <article key={x[1]}><strong>{x[0]}</strong><h2>{x[1]}</h2><p>{x[2]}</p></article>)}</div></section>

      <Section id="services" eyebrow="Core Services" title="조직의 AI 활용을 실행으로 연결합니다" intro="교육에서 작은 PoC까지, 지금 필요한 범위부터 구체적으로 시작합니다."><div className="card-grid three">{services.map(s => <article className="service-card" key={s.title}><span className="number">{s.icon}</span><h3>{s.title}</h3><p>{s.text}</p><ul>{s.bullets.map(b => <li key={b}>{b}</li>)}</ul><a href="#contact" className="card-link">{s.cta} →</a></article>)}</div><div className="capabilities" aria-label="보조 역량">{["바이브코딩", "Google Workspace·Gemini", "AI 글쓰기·출판", "AI Agent·RAG", "업무 자동화", "데이터 분석·예측"].map(x => <span key={x}>{x}</span>)}</div></Section>

      <Section className="soft" eyebrow="For Teams" title="이런 기관에 적합합니다" intro="처음 시작하는 조직부터 실제 전환 과제를 검증하려는 조직까지 함께합니다."><div className="card-grid four audience">{[["기업·기관 교육 담당자", "직원 생성형 AI 교육을 어디서부터 시작할지 고민하는 조직"], ["공공기관·복지기관", "중장년·시니어·소상공인에게 실용적인 AI 교육이 필요한 기관"], ["중소기업 지원기관", "반복 업무와 고객 대응·콘텐츠 업무를 AI로 개선하려는 조직"], ["AI 전환 준비 조직", "거창한 구축보다 작은 PoC부터 빠르게 검증하고 싶은 조직"]].map(([a,b], i) => <article key={a}><span>0{i+1}</span><h3>{a}</h3><p>{b}</p></article>)}</div></Section>

      <Section id="programs" eyebrow="Lecture Programs" title="목적과 대상이 분명한 대표 강의" intro="기관의 상황에 맞춰 시간, 난이도, 실습 범위를 조정합니다."><div className="program-grid">{lectures.map((x,i) => <article className="program-card" key={x[0]}><div className="program-head"><span>PROGRAM {String(i+1).padStart(2,"0")}</span><h3>{x[0]}</h3></div><dl><div><dt>시간</dt><dd>{x[1]}</dd></div><div><dt>대상</dt><dd>{x[2]}</dd></div><div><dt>내용</dt><dd>{x[3]}</dd></div><div><dt>방식</dt><dd>{x[4]}</dd></div></dl><a href="#contact">{x[5]} →</a></article>)}</div></Section>

      <Section id="consulting" className="navy-section" eyebrow="AX Consulting" title="진단에서 실행 가능한 PoC까지" intro="기술 도입 자체보다 실제 업무 문제와 필요한 결과에 집중합니다."><div className="card-grid three consulting-grid">{consulting.map((x,i) => <article key={x[0]}><span>0{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p><ul>{(x[2] as string[]).map(y => <li key={y}>{y}</li>)}</ul></article>)}</div><a className="button primary section-cta" href="#contact">AI 컨설팅 상담하기</a></Section>

      <Section id="projects" eyebrow="Projects & PoC" title="직접 만든 AI 프로젝트와 개발 사례" intro="문제를 정의하고, AI 기능을 만들고, 현장에서 활용할 수 있는 형태로 검증했습니다."><div className="project-grid">{projects.map((x,i) => <article className="project-card" key={x[0]}><div className="project-top"><span>CASE {String(i+1).padStart(2,"0")}</span><small>{x[4]}</small></div><h3>{x[0]}</h3><p><b>문제</b>{x[1]}</p><p><b>해결</b>{x[2]}</p><p><b>활용</b>{x[3]}</p><a href={x[5]} target="_blank" rel="noopener noreferrer">{x[6]} ↗</a></article>)}</div><details className="more-projects"><summary>전체 프로젝트 보기 <span>＋</span></summary><div className="more-grid">{moreProjects.map(x => <a key={x[0]} href={x[2]} target="_blank" rel="noopener noreferrer"><b>{x[0]}</b><span>{x[1]}</span><i>↗</i></a>)}</div></details></Section>

      <Section className="soft" eyebrow="Why Charly Choi" title="찰리초이를 선택해야 하는 이유"><div className="reason-grid">{[["기술을 쉽게 설명합니다", "복잡한 AI 기술을 전문 용어가 아닌 일과 생활의 사례로 이해할 수 있게 전달합니다."], ["직접 만들어 본 경험이 있습니다", "AI Agent, RAG, 자동화, 예측 웹앱을 직접 기획하고 제작한 경험을 교육에 반영합니다."], ["교육과 현장을 연결합니다", "기능 설명에서 끝나지 않고 수강자가 자신의 업무에 적용하도록 안내합니다."], ["중장년의 눈높이를 이해합니다", "빠르게 넘어가기보다 천천히 반복하며 실제 결과를 만들도록 돕습니다."]].map(([a,b],i) => <article key={a}><span>{String(i+1).padStart(2,"0")}</span><h3>{a}</h3><p>{b}</p></article>)}</div></Section>

      <Section id="career" eyebrow="Experience & Books" title="경험을 지식으로, 지식을 현장으로" intro="IT 현장, 조직 교육, AI 도구 개발과 저술의 경험이 하나의 실행형 프로그램으로 연결됩니다."><div className="career-layout"><div className="career-list">{[["IT 교육·컨설팅 전문가", "30년+", "IT 교육과 업무 도구 컨설팅 경험으로 디지털 전환과 역량 강화를 지원합니다."], ["Google Workspace·Gemini", "교육 및 컨설팅", "조직 생산성 도구를 실제 업무 시나리오에 맞춰 안내합니다."], ["상상우리 AI 강사", "AI 활용 컨설턴트", "기업·기관과 중장년을 위한 AI 교육·컨설팅 프로그램을 제공합니다."], ["AI 전문 작가", "국내외 13권+", "AI, 글쓰기, 생산성 분야의 실용 지식을 한국어·영어·일본어로 전합니다."]].map(x => <article key={x[0]}><span>{x[1]}</span><h3>{x[0]}</h3><p>{x[2]}</p></article>)}</div><div className="books"><Book lang="한국어 · 국내 출판" title="클로드 AI 글쓰기" text="생성형 AI로 아이디어를 정리하고 글을 기획·작성·수정하는 실전 방법" audience="작가·강사·콘텐츠 제작자·입문자" href="https://www.yes24.com/product/goods/130768170"/><Book lang="영어 · Amazon KDP" title="Write and Publish with GPT-5.5" text="저자와 전문가를 위한 AI 글쓰기·출판 워크플로" audience="저자·블로거·컨설턴트" href="https://www.amazon.com/author/charlychoi"/><Book lang="일본어 · Amazon KDP" title="Perplexity AIの業務活用 完全制覇" text="Perplexity AI를 조사와 실무에 활용하는 방법" audience="업무 활용자·AI 입문자" href="https://www.amazon.com/author/charlychoi"/></div></div></Section>

      <Section className="process-section" eyebrow="How We Work" title="강의·컨설팅 진행 절차"><div className="process">{[["문의", "대상, 목적, 일정, 인원과 희망 주제를 전달합니다."], ["사전 협의", "통화 또는 온라인 미팅으로 현재 상황과 필요한 결과를 확인합니다."], ["맞춤 설계", "대상과 수준에 맞춰 교육, 실습과 컨설팅 범위를 구성합니다."], ["실행·후속 지원", "교육 또는 컨설팅 후 필요한 자료와 실행안을 제공합니다."]].map((x,i) => <article key={x[0]}><span>{i+1}</span><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></Section>

      <Section id="faq" className="soft faq-section" eyebrow="FAQ" title="자주 묻는 질문"><div className="faq-list">{faqs.map((x,i) => <details key={x[0]} open={i===0}><summary>{x[0]}<span>＋</span></summary><p>{x[1]}</p></details>)}</div></Section>

      <section id="contact" className="contact"><div className="container contact-card"><p className="eyebrow">Contact</p><h2>우리 조직에 맞는 AI 교육과 활용 방법을 함께 설계해 보세요.</h2><p>교육 대상, 희망 일정, 필요한 내용을 이메일로 알려주시면 확인 후 영업일 기준 1~2일 이내에 연락드리겠습니다.</p><a className="email-link" href="mailto:charlychoi@kakao.com">charlychoi@kakao.com</a></div></section>
    </main>

    <footer><div className="container footer-wrap"><div><b>찰리초이</b><span>AI 활용 강사 · 컨설턴트 · 작가</span></div><nav aria-label="외부 링크"><a href="mailto:charlychoi@kakao.com">이메일</a><a href="https://charlychoi.blogspot.com/" target="_blank" rel="noopener noreferrer">블로그</a><a href="https://www.amazon.com/author/charlychoi" target="_blank" rel="noopener noreferrer">Amazon 저자 페이지</a><a href="https://www.youtube.com/@CharlyChoi" target="_blank" rel="noopener noreferrer">YouTube</a></nav><small>© 2026 Charly Choi. All rights reserved.</small></div></footer>
    <div className="mobile-cta"><a href="#contact">강의 문의</a><a href="#contact">컨설팅 상담</a></div>
  </>;
}

function Section({ id, className="", eyebrow, title, intro, children }: { id?: string; className?: string; eyebrow: string; title: string; intro?: string; children: React.ReactNode }) { return <section id={id} className={`section ${className}`}><div className="container"><header className="section-head"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p>{intro}</p>}</header>{children}</div></section> }
function Book({lang,title,text,audience,href}:{lang:string;title:string;text:string;audience:string;href:string}) { return <a className="book" href={href} target="_blank" rel="noopener noreferrer"><span>{lang}</span><h3>{title}</h3><p>{text}</p><small><b>추천</b> {audience}</small><i>도서 보기 ↗</i></a> }
