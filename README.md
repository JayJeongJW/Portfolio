# 정재우 | Game QA Portfolio

리그 오브 레전드 선수·코치·감독으로 활동했고, 현재 게임 QA 직무를 준비하고 있습니다.
직접 플레이한 내용을 바탕으로 게임 분석서, 테스트케이스와 버그리포트를 작성하고 있습니다.

## 먼저 보기

- **[자기소개·경력·사용 도구 — 웹 PR](https://jaewoo-qa-pr.vercel.app/)**
- **[컴투스프로야구V26 분석서 — 웹으로 보기](https://com2us-v26-qa-portfolio.vercel.app/)**
- **[컴투스프로야구2026 Live 퍼즐 분석서 — 웹으로 보기](https://jaewoo-qa-pr.vercel.app/documents/com2us2026/index.html)**
- [게임플레이 이력서](./Supporting_Documents/Game_Play_History_정재우.xlsx)

## 주요 QA 포트폴리오

### 컴투스프로야구V26

API로 수집한 KBO 경기 기록과 Live Update의 변화 방향을 비교한 분석서입니다.

- [분석서 열기](https://com2us-v26-qa-portfolio.vercel.app/)
- [V26 자료 안내](./QA_Portfolio/Com2uSProBaseballV26)

### 컴투스프로야구2026

Live 퍼즐의 카드 사용 가치와 보상 순환 구조를 분석하고, 직접 플레이를 바탕으로 테스트케이스와 버그리포트를 작성했습니다.

- [Live 퍼즐 분석서](https://jaewoo-qa-pr.vercel.app/documents/com2us2026/index.html)
- [테스트케이스 — Google Sheets](https://docs.google.com/spreadsheets/d/1RYzdh1bFZNKb6pEx6XinJFy3us4jBj6_WgMJ6YLR9nk/edit?usp=sharing)
- [버그리포트 — 신규 하드 리그 첫 경기의 출루율·OPS 표시 불일치](https://jaewoo-qa-pr.vercel.app/report-KAN-4.html)
- [저장소 사본과 테스트 결과 요약](./QA_Portfolio/Com2uSProBaseball2026)

분석서 소스, 테스트케이스와 버그리포트는 `QA_Portfolio/Com2uSProBaseball2026`에서 확인할 수 있습니다.

### DAVE THE DIVER

공식 패치 이력에서 반복되는 결함 구조를 정리하고, 테스트 설계와 직접 플레이 검증으로 연결했습니다.

- [분석서 — 웹으로 보기](https://jayjeongjw.github.io/Portfolio/QA_Portfolio/DAVE_THE_DIVER/01_QA_Analysis/)
- [분석서 소스](./QA_Portfolio/DAVE_THE_DIVER/01_QA_Analysis)
- [테스트케이스](./QA_Portfolio/DAVE_THE_DIVER/02_TestCase/DAVE_THE_DIVER_DLC_TestCase.xlsx)
- [버그리포트](./QA_Portfolio/DAVE_THE_DIVER/03_BugReport/DAVE_THE_DIVER_DLC_BugReport.pdf)

## 자동화·도구 활용

- **n8n 업무 자동화:** 기업정보 수집에 활용한 메인·서브 워크플로우 JSON을 보관하고 있습니다. [구성과 실행 준비 사항](./AIAX/README.md)
- **웹 자료 배포:** GitHub Pages의 빌드·배포 실행 이력은 [Actions](https://github.com/JayJeongJW/Portfolio/actions)에서 확인할 수 있습니다.
- **기초 실습:** Postman의 API 요청·응답 확인, Git/GitHub 결과물 업로드, Jenkins 빌드 연결을 실습했습니다.

웹 배포와 n8n 데이터 수집, API 테스트 실습은 목적과 수행 범위가 다릅니다. 각 경험과 이 저장소에서 확인할 수 있는 자료는 [자동화·배포 흐름 정리](./PIPELINE.md)에 구분했습니다.

## 게임 제작 경험

- [Show My Life](./GameProject_ShowMyLife): Unity 교육과정의 팀 프로젝트로, 기획과 팀 진행 관리를 맡고 중학교 구간을 직접 구성·배치했습니다.
- [Unity Shooting Game Practice](./GameProject_UnityShooting): 플레이어 이동, 발사체, 적 생성과 충돌 판정 등을 학습한 2D 슈팅게임 실습입니다.

## 기타 자료

- [전체 QA 자료 안내](./QA_Portfolio/README.md)
- [보관 자료 안내](./99_Archive/README.md)

## 연락처

- Email: [p1fixer2@gmail.com](mailto:p1fixer2@gmail.com)
- Blog: https://jayf.tistory.com/
