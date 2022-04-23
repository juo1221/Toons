# Toons

> 네이버, 카카오, 카카오페이지 웹툰을 검색할 수 있는 어플리케이션 

배포주소 : https://juo1221.github.io/toons/



# 1. 스택 

- react
- typeScript
- styled-components
- mobx
- cd



# 2. 이용방법

<details>
  <summary>오늘 날짜에 해당하는 웹툰 데이터 요청 후 로딩 중 화면</summary>
  <img width="1680" alt="스크린샷 2022-04-23 오전 9 36 33" src="https://user-images.githubusercontent.com/79268108/164838666-02fb70cb-f245-4656-904b-11256457963b.png">
  <p>로딩 완료 화면</p>
  <img width="1675" alt="스크린샷 2022-04-23 오전 9 42 15" src="https://user-images.githubusercontent.com/79268108/164839154-56a00e71-3126-4344-9548-83ef4ce5b43f.png">
</details>

<details>
  <summary>다른 요일 클릭 시 해당 요일의 웹툰으로 렌더링 </summary>
  <img width="1675" alt="스크린샷 2022-04-23 오전 9 43 27" src="https://user-images.githubusercontent.com/79268108/164839757-a1bf1d60-ca05-4315-b707-1335889c50cb.png">
</details>

<details>
  <summary>하트 클릭 시 마이리스트로 저장</summary>
  <img width="1680" alt="스크린샷 2022-04-23 오전 9 56 14" src="https://user-images.githubusercontent.com/79268108/164844395-c235dc03-9d6b-4638-807b-b9e6c9995d60.png">
	<p>저장한 마이리스트가 없을 경우</p>
  <img width="1680" alt="스크린샷 2022-04-23 오전 9 56 23" src="https://user-images.githubusercontent.com/79268108/164844406-f341cebc-9ed8-4611-956a-c4b71203db78.png">
</details>

<details>
  <summary>웹툰 검색 시</summary>
  <img width="1680" alt="스크린샷 2022-04-23 오전 9 59 30" src="https://user-images.githubusercontent.com/79268108/164844914-f262310f-a8d3-4ae3-a3ec-27c7644e953f.png">
  <p>검색한 웹툰 클릭 시 자동으로 플랫폼, 요일 변경 및 해당 웹툰으로 필터링 적용 </p>
	<img width="1680" alt="스크린샷 2022-04-23 오전 9 59 55" src="https://user-images.githubusercontent.com/79268108/164844922-d91184b8-1b94-4a8e-b347-ddb3ab775fc4.png">
  <p>검색 데이터가 없다면</p>
  <img width="1680" alt="스크린샷 2022-04-23 오전 10 05 20" src="https://user-images.githubusercontent.com/79268108/164845089-034bf613-03ad-4ef8-9446-1f3b00b0c231.png">
</details>

<details>
  <summary>필터링</summary>
	<img width="1680" alt="스크린샷 2022-04-23 오전 10 10 06" src="https://user-images.githubusercontent.com/79268108/164845779-076ad108-eb63-4f85-9afd-53ec2c9a6676.png"> 
</details>

<details>
  <summary>정렬</summary>
  
  <p>이름 순 정렬</p>
  <img width="1680" alt="스크린샷 2022-04-23 오전 10 24 39" src="https://user-images.githubusercontent.com/79268108/164857377-c719dce2-4359-40da-a91a-3f8f2ce6ee25.png">
 	<p>좋아요 순 정렬</p>  
	<img width="1680" alt="스크린샷 2022-04-23 오전 10 25 29" src="https://user-images.githubusercontent.com/79268108/164858186-a323a4f1-5348-4e02-84b9-de337982e38a.png">
</details>

<details>
  <summary>웹툰에 1초간 마우스 호버 시 상세 정보 표시</summary>
<img width="1680" alt="스크린샷 2022-04-23 오전 10 12 30" src="https://user-images.githubusercontent.com/79268108/164846442-02f7bbfe-c5df-4a2e-84fb-34d5eddc39a6.png">
<p>웹툰의 상태에 해당하는 정보는 붉게 표시</p>
<p>up : 업로드 된 상태 , 19 : 성인 콘텐츠, new : 신작, rest : 휴재</p>
<img width="1680" alt="스크린샷 2022-04-23 오전 10 14 35" src="https://user-images.githubusercontent.com/79268108/164848427-bdffa71d-6377-4db7-8b92-7fc14ad4f822.png">
<p>Run 아이콘 클릭 시 해당 웹툰 링크로 이동</p>  
</details>



# 3. 기능

- 데이터 캐싱

  한번 요청한 데이터는 재요청하지 않고 바로 이용가능

- 디바운스( 검색 바에만 )

  과도한 api요청을 막기위해 0.5초로 디바운스 적용

- 로컬 폰트

  네트워크 요청을 보내 폰트를 다운받지 않고 로컬에 저장한 폰트를 바로 이용

- 스켈레톤 UI  

  의미없는 스피너보다 로딩 후 그려지는 데이터의 모습과 유사하게 만들기 위해 사용하고, 약간의 재미를 위해 애니메이션을 추가

- CD 

  main 브랜치에 push 할 경우 gitHub pages에 자동 배포를 위해 설정



# 4. 디자인

피그마 초기 목업 : https://www.figma.com/file/vpxi6KExQEVK2W6sPohaiC/Untitled?node-id=0%3A1



# 5. 플로우 차트

MIRO : https://miro.com/app/board/uXjVO9XvsQA=/

<img width="1459" alt="스크린샷 2022-04-23 오전 9 33 46" src="https://user-images.githubusercontent.com/79268108/164838473-a2ec48e7-8592-463e-865d-97bdd15d094e.png">



