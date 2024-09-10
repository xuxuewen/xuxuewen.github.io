async function loadPosts() {
    const response = await fetch('https://api.github.com/repos/xuxuewen/xuxuewen.github.io/contents/_posts');
    const posts = await response.json();
    const postsContainer = document.getElementById('posts');

    for (const post of posts) {
        const postContent = await fetch(post.download_url);
        const postText = await postContent.text();
        const postElement = document.createElement('article');
        postElement.innerHTML = marked(postText);
        postsContainer.appendChild(postElement);
    }
}

document.addEventListener('DOMContentLoaded', loadPosts);