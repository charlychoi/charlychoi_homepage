const sourceUrl =
  "https://charlychoi-ai-landing.charlychoi.chatgpt.site/charlychoi.html";

const replacementCard = `          <article class="project-card">
            <div class="project-visual"><span class="project-icon">⚙️</span><span class="project-no">CASE 09</span></div>
            <div class="project-copy"><div class="project-tags"><span>N8N</span><span>AUTOMATION</span><span>POC</span></div><h3>n8n 업무자동화 PoC</h3><p>클로바노트 회의록을 Google Drive에서 가져와 개인정보를 마스킹하고 AI·폼 분석 후 카카오 SMTP 알림까지 연결하는 업무자동화 PoC입니다.</p><div class="project-links"><a class="project-link" href="https://github.com/charlychoi/n8n_automation" target="_blank" rel="noopener noreferrer">GitHub</a></div></div>
          </article>`;

function replaceCaseNine(html: string) {
  const caseIndex = html.indexOf("CASE 09");
  if (caseIndex === -1) return html;

  const cardStart = html.lastIndexOf(
    '<article class="project-card">',
    caseIndex,
  );
  const cardEnd = html.indexOf("</article>", caseIndex);
  if (cardStart === -1 || cardEnd === -1) return html;

  return `${html.slice(0, cardStart)}${replacementCard}${html.slice(
    cardEnd + "</article>".length,
  )}`;
}

export async function GET() {
  const response = await fetch(sourceUrl, {
    headers: { accept: "text/html" },
  });

  if (!response.ok) {
    return new Response("사이트 콘텐츠를 불러오지 못했습니다.", {
      status: 502,
      headers: { "content-type": "text/plain; charset=utf-8" },
    });
  }

  const html = replaceCaseNine(await response.text());

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "public, max-age=300, s-maxage=300",
    },
  });
}
