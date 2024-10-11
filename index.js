
    document.querySelectorAll('.toggle-para').forEach(button => {
        button.addEventListener('click', () => {
            const extraPara = button.nextElementSibling; 
            if (extraPara.style.display === 'none') {
                extraPara.style.display = 'block'; 
                button.textContent = 'Show Less'; 
            } else {
                extraPara.style.display = 'none'; 
                button.textContent = 'Show More'; 
            }
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach(progressBar => {
            const skillValue = progressBar.getAttribute('data-skill');
            progressBar.style.width = skillValue + '%';
        });
    });
    