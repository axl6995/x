document.addEventListener('DOMContentLoaded', function() {
    // 為所有年級連結添加點擊事件
    const gradeLinks = document.querySelectorAll('.grade-link');
    gradeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const grade = this.textContent;
            showGradeContent(grade);
        });
    });
});

function showGradeContent(grade) {
    // 這裡可以根據年級顯示相應的內容
    // 例如：教材、練習題等
    console.log(`顯示 ${grade} 的內容`);
    
    // 這裡可以添加 AJAX 請求來加載具體內容
    // 或者顯示一個模態框來展示內容
    alert(`正在加載 ${grade} 的教學資源...`);
}

// 添加平滑滾動效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 