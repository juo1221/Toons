# Toons

> 네이버, 카카오, 카카오 페이지 웹툰을 검색할 수 있는 애플리케이션입니다.

배포주소 : https://main--soft-pixie-1e7120.netlify.app/



# 1. 스택 

- react
- typeScript
- styled-components
- mobx




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

  한번 요청한 데이터는 재요청하지 않고 캐싱해서 사용.

<div align="center">
  <img src='https://user-images.githubusercontent.com/79268108/166193335-56ffa52c-30c2-41be-80a1-18702f5177ec.gif' width=500>
</div>

- 디바운스( 검색 바에만 )

  과도한 api요청을 막기위해 0.5초로 디바운스 적용.
<div align="center">
  <img src="https://user-images.githubusercontent.com/79268108/166194216-a1ff02ec-e954-4c24-a0b4-077d1c4baaaa.gif" width=500>
</div>

- 스켈레톤 UI  

  의미없는 스피너보다 로딩 후 그려지는 데이터의 모습과 유사하게 만들기 위해 사용하고, 약간의 재미를 위해 애니메이션을 추가.
<div align="center">
  <img src="https://user-images.githubusercontent.com/79268108/166194532-67e29ea8-468f-4830-b2cc-aee72418ac29.gif" width=500 />
</div>


# 4. 최적화 포인트

#### 1. 폰트 최적화 

<div align="center">
<img width="500" alt="스크린샷 2022-05-02 오후 3 45 57" src="https://user-images.githubusercontent.com/79268108/166194987-9c5a2ab1-0507-463d-a9b9-516bb5020460.png">
  <p>
    브라우저의 지원 유무에 따라 woff2 => woff => ttf 순으로 폰트를 적용.
  </p>
  <p>
      3초 전에 다운로드가 되면 폰트를 교체하고 그렇지 않으면 기본 폰트로 유지하고 캐시하기 위해 fallback 사용.</p>
</div>

<div align="center">
<img width="500" alt="스크린샷 2022-05-02 오후 3 44 52" src="https://user-images.githubusercontent.com/79268108/166194993-8a1e8d78-f3aa-4b48-85ef-8db80b9ea45b.png">
  <p>
    woff2는 가장 먼저 불러올 수 있도록 preload를 적용.
  </p>
</div>



<div align="center">
<img width="800" alt="스크린샷 2022-05-02 오후 3 50 25" src="https://user-images.githubusercontent.com/79268108/166195419-bcd20b64-fa5c-4ab6-acb9-a19e8f62f9cb.png">
<p>
네트워크 요청 시 가장 먼저 woff2에 대한 요청이 이루어지는것을 확인.
</p>
</div>



#### 2. 이미지 포맷 최적화

<div align="center">
<img width="500" alt="스크린샷 2022-05-02 오후 4 09 56" src="https://user-images.githubusercontent.com/79268108/166197455-4cc04448-3a6f-4769-8d22-9271cb621a9a.png">
  <p>
    브라우저의 지원 유무에 따라 webp를 적용하고 그렇지 않으면 기존 포멧을 이용한다. 
  </p>
</div>

<div align="center">
<img width="500" alt="스크린샷 2022-05-02 오후 4 10 30" src="https://user-images.githubusercontent.com/79268108/166197512-0cb8a8a9-6c11-40e7-bad8-9c60a2ca9ae4.png">
 <p>
	요청한 데이터에서 jpeg로 제공되는 이미지를 캔버스를 이용해 webp 형식으로 바꾸고 용량을 0.1배로 줄였다. 
  </p>
</div>




<table>
  <thead>
    <tr>
  		<th>원본</th>
	  	<th>webp</th>
		</tr>
  </thead>
  <tbody>
  	<tr>
      <td>
       <img  alt="스크린샷 2022-05-02 오후 4 17 59" src="https://user-images.githubusercontent.com/79268108/166198579-94fa3dfb-640a-4b0b-8524-8b2c478285a6.png">
      </td>
      <td>
       <img  alt="스크린샷 2022-05-02 오후 4 18 19" src="https://user-images.githubusercontent.com/79268108/166198554-4dba91d3-5093-4943-9180-c4b627c5f89b.png">
      </td>
    </tr>
   </tbody>
</table>

31.5kb에서 3.7kb으로 압축 적용 확인.



#### 3. 지연 로딩

1. 마우스 Hover 시 컴포넌트가 마운트 되도록 코드 스플리트 적용

   <div align="center">
   <img  width="700"  alt="스크린샷 2022-05-02 오후 3 45 57" src="https://user-images.githubusercontent.com/79268108/166201367-b4ec2fb3-89f0-4221-b66e-9a64373f86b3.gif">
   <p>
     마우스가 hover 된 후 CardHoverView 컴포넌트가 로드되는 것을 확인
     </p>
   </div>

   <div align="center">
   <img width="700" alt="스크린샷 2022-05-02 오후 5 13 58" src="https://user-images.githubusercontent.com/79268108/166204663-ea0c3d2f-3a1a-438a-8bf6-ca417858b5b7.png">
    <p>
   CardHoverView 컴포넌트가 잘 분리된 것을 확인할 수 있다.
     </p>
   </div>

   

2. intersection observer 을 이용한 무한 스크롤

   -  jpeg와 webp의 로딩 속도 비교를 위해 네트워크 throttling을 적용했을 때 ( 8Mbit/s로 )
   
   <table>
     <thead>
       <tr>
     		<th>원본</th>
   	  	<th>webp</th>
   		</tr>
     </thead>
     <tbody>
     	<tr>
         <td>
          <img  alt="스크린샷 2022-05-02 오후 4 17 59" src="https://user-images.githubusercontent.com/79268108/166202789-921c041b-8054-483a-a6c5-2ddf8803495a.gif">
         </td>
         <td>
          <img  alt="스크린샷 2022-05-02 오후 4 18 19" src="https://user-images.githubusercontent.com/79268108/166202892-b4e2017c-d5a6-488d-9b8e-12b3e19fb650.gif">
         </td>
       </tr>
      </tbody>
   </table>

   webp로 변환한 이미지의 로딩 속도가 더 빠른것을 확인할 수 있다. 
   
   

   - 정상적인 네트워크 환경일 경우 

     <div align="center">
     <img  alt="스크린샷 2022-05-02 오후 3 45 57" src="https://user-images.githubusercontent.com/79268108/166203949-6b04473a-200c-47ec-a59c-7dd0dc72a777.gif">
     </div>



#### 4. 라이브러리 용량 축소 

1. lodash

   <table>
     <thead>
       <tr>
     		<th>전</th>
   	  	<th>후</th>
   		</tr>
     </thead>
     <tbody>
     	<tr>
         <td>
   			<img alt="스크린샷 2022-04-30 오후 9 59 48" src="https://user-images.githubusercontent.com/79268108/166206060-b9fe54c1-6a2e-4086-9188-df86b765680f.png">
         </td>
         <td>
          <img  alt="스크린샷 2022-04-30 오후 10 09 02" src="https://user-images.githubusercontent.com/79268108/166206054-63d38100-78e3-4966-86fd-56dff083dd87.png">
             </td>
   	</tr> 
     </tbody>
   </table>

   debounce만 이용하는 것에 비해 너무 많은 크기를 차지하고 있는 것을 확인했다. 라이브러리 전체가 아니라 핵심 메서드만 담겨있는 파일을 사용하도록 용량을 축소했다. 

   

2. react-icons

   <table>
     <thead>
       <tr>
     		<th>전</th>
   	  	<th>후</th>
   		</tr>
     </thead>
     <tbody>
     	<tr>
         <td>
   			<img  alt="스크린샷 2022-04-30 오후 9 15 14" src="https://user-images.githubusercontent.com/79268108/166207069-819a04a0-6d05-4104-94fc-ce89bc4fb16e.png">
         </td>
         <td>
          <img  alt="스크린샷 2022-05-02 오후 5 21 37" src="https://user-images.githubusercontent.com/79268108/166207078-067a13c1-766f-4527-919a-6f711dce8a43.png">
             </td>
   	</tr> 
     </tbody>
   </table>

   React-icons도 마찬가지로 매우 큰 용량을 차지하는 것을 확인했고 사용하는 아이콘에 해당하는 용량만 차지하는 것으로 최적화했다.



# 5. 디자인

피그마 초기 목업 : https://www.figma.com/file/vpxi6KExQEVK2W6sPohaiC/Untitled?node-id=0%3A1



# 6. 플로우 차트

MIRO : https://miro.com/app/board/uXjVO9XvsQA=/

<img width="1459" alt="스크린샷 2022-04-23 오전 9 33 46" src="https://user-images.githubusercontent.com/79268108/164838473-a2ec48e7-8592-463e-865d-97bdd15d094e.png">
