# 자동화·배포 흐름과 실습 범위

이 문서는 웹 자료 배포, n8n 데이터 수집과 API 테스트 기초 실습을 구분해 설명합니다.

## 1. GitHub Pages 웹 배포

저장소의 웹 자료를 GitHub Pages로 배포하는 흐름입니다.

저장소 변경 → Pages 빌드·배포 → 웹 분석서 열람

- [배포 실행 이력](https://github.com/JayJeongJW/Portfolio/actions)
- [2026-09-10 배포 성공 기록](https://github.com/JayJeongJW/Portfolio/actions/runs/34509891213)
- [배포된 DAVE THE DIVER 분석서](https://jayjeongjw.github.io/Portfolio/QA_Portfolio/DAVE_THE_DIVER/01_QA_Analysis/)

이 성공 기록은 웹 빌드·배포 결과입니다. 게임 기능이나 API 테스트를 자동 수행해 통과했다는 의미는 아닙니다.
Vercel로 제공하는 PR과 V26 분석서는 이 Pages 배포와 별도입니다.

## 2. n8n 데이터 수집 자동화

수동 실행 → 처리 대상 준비·반복 → 서브 워크플로우 호출 → HTTP 응답 처리 → Notion 저장

- [메인·서브 JSON과 실행 준비 사항](./AIAX/README.md)
- [인턴 업무 정리](https://jaewoo-qa-pr.vercel.app/documents/smartdongschool-n8n-workflow.pdf)

기업정보 수집을 위한 자동화입니다. 게임 테스트 자동화와는 별도 경험입니다.

## 3. Postman·Git·Jenkins 기초 실습

API 요청·응답 확인 → 테스트 결과 리포트 출력 → GitHub 저장소 업로드 → Jenkins 빌드 연결의 흐름을 실습했습니다.

| 도구 | 실습 범위 |
| --- | --- |
| Postman | 랭커 조회 API 요청·응답 확인과 외부 결과 리포트 출력 |
| Git / GitHub | 테스트 결과물을 개인 저장소에 업로드 |
| Jenkins | GitHub 저장소와 빌드 작업 연결 |

이는 교육과정의 기초 실습 경험입니다. 이 저장소에 재실행 가능한 Postman 컬렉션, Jenkinsfile과 실습 실행 로그를 함께 제공하고 있지는 않습니다.
따라서 저장소 전체에 API 자동 테스트와 배포가 연동된 CI/CD를 구축했다고 표현하지 않습니다.

[전체 포트폴리오로 돌아가기](./README.md)
