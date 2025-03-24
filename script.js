const sidebarLinks = document.querySelectorAll('.sidebar ul li a');

sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebarLinks.forEach(l => l.classList.remove('active-link'));
        link.classList.add('active-link');
    });
});

const postButton = document.querySelector('.post-button');
const textarea = document.querySelector('textarea');
const feed = document.querySelector('.feed');

postButton.addEventListener('click', () => {
    if (textarea.value.trim() !== '') {
        const newPost = document.createElement('div');
        newPost.classList.add('post');
        newPost.innerHTML = `
            <div class="post-header">
                <p>Вы</p>
            </div>
            <p>${textarea.value}</p>
            <div class="post-footer">
                <p>0 лайков • 0 комментариев</p>
            </div>
        `;
        feed.appendChild(newPost);
        textarea.value = '';
    }
});
