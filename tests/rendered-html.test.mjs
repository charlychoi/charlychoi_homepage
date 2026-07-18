import assert from "node:assert/strict";
import test from "node:test";

const root = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("server-renders the conversion landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /현장 업무에 바로 적용하는/);
  assert.match(html, /AI 활용 교육과 AX 컨설팅/);
  assert.match(html, /기업·공공기관 AI 활용 교육/);
  assert.match(html, /중장년·시니어 AI 교육/);
  assert.match(html, /AI Agent·업무 자동화 PoC/);
  assert.match(html, /자주 묻는 질문/);
  assert.match(html, /ChatGPT·Gemini·Claude·Grok AI 핵심 기능/);
  assert.match(html, /ChatGPT, Claude, Gemini, Grok AI 업무 활용/);
  assert.match(html, /슬라이드, 이미지, 유튜브 롱폼, 숏폼 영상 생성/);
  assert.match(html, /사내 규정\/지식\/FAQ RAG AI 챗봇/);
  assert.doesNotMatch(html, /이메일로 문의하기/);
  assert.match(html, /Hermes\/OpenClaw 에이전트 활용/);
  assert.match(html, /Hermes\/OpenClaw Agent 활용/);
  assert.match(html, /온라인 마케팅 AI 진단/);
  assert.doesNotMatch(html, /문서 요약·검색|Google Workspace 자동화/);
  assert.doesNotMatch(html, /<iframe/i);
  assert.doesNotMatch(html, /유튜브 구독자/);
});

test("includes accessible navigation, contact fields, and SEO", async () => {
  const response = await render();
  const html = await response.text();
  assert.match(html, /aria-label="주요 메뉴"/);
  assert.doesNotMatch(html, /<form/i);
  assert.match(html, /찰리초이 \| 기업·공공기관 AI 활용 교육·AX 컨설팅/);
  assert.match(html, /og\.webp/);
  assert.match(html, /charlychoi-left\.webp/);
  assert.doesNotMatch(html, /개인정보처리방침|이용약관/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton/);
});

test("project metadata remains connected to the existing Sites project", async () => {
  const hosting = await (await import("node:fs/promises")).readFile(new URL(".openai/hosting.json", root), "utf8");
  assert.match(hosting, /appgprj_6a50e0e1ea3c8191aec4062195d1e44f/);
});
