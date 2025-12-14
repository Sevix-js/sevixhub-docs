// DOM이 준비되면 실행
document.addEventListener("DOMContentLoaded", function() {
    // 모든 버튼 클릭 시 알림 예제
    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.addEventListener("click", function() {
            alert("버튼이 클릭되었습니다!");
        });
    });

    // 다른 페이지 링크 클릭 시 콘솔 로그 (디버그용)
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            console.log(`Navigating to ${link.getAttribute("href")}`);
        });
    });
});
