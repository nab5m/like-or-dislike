<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style>
@font-face {
	font-family: 'NanumGothicEco';
	src:
		url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumEco/NanumGothicEco/NanumGothicEco.eot);
	src:
		url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumEco/NanumGothicEco/NanumGothicEco.eot?#iefix)
		format("embedded-opentype"),
		url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumEco/NanumGothicEco/NanumGothicEco.woff)
		format("woff"),
		url(https://hangeul.pstatic.net/hangeul_static/webfont/NanumEco/NanumGothicEco/NanumGothicEco.ttf)
		format("truetype");
}

body {
	font-family: 'NanumGothicEco';
}
#data-container {
	margin-top: 20px;
}
</style>
</head>
<body>
	<h1>우리팀 소개</h1>
	<hr>
	<div>
		<button onclick="fetchData('teamName')">우리 팀명</button>
		<button onclick="fetchData('ourTeam')">우리 팀원</button>
	</div>
	<div id="data-container"></div>
	<script>
	function fetchData(mode) {
		
		const xhr = new XMLHttpRequest();

		xhr.onload = function() {
		console.log(mode);
			if (xhr.status === 200) {
				const response = JSON.parse(xhr.responseText);
				let htmlContent = "";

				if (mode === "teamName") {
					
					htmlContent = `
						<p>${response.teamName}</p>

					`;
				} else if (mode === "ourTeam") {
					htmlContent = "<ul>";
					response.teamMember.forEach(member => {
						htmlContent += `<li>${member.name}: 별명은 ${member.nicName}이고 좋아하는 음식은 ${member.food}입니다.</li>`;
					});
					htmlContent += "</ul>";
				}
				document.getElementById("data-container").innerHTML = htmlContent;
			} else {
				console.error("오류 발생:", xhr.status);
			}
		};

		const url = "/springlab/myTeamData?mode=" + mode;
	    xhr.open("GET", url);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.send();
	}
</script>
</body>
</html>