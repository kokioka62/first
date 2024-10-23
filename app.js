document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('blogForm');
    const main = document.querySelector('main');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // フォームのデフォルト送信を防ぐ

        // フォームからタイトルと内容を取得
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // 新しい記事を作成
        const article = document.createElement('article');
        const h2 = document.createElement('h2');
        h2.textContent = title;
        const p = document.createElement('p');
        p.textContent = content;

        // 記事を記事セクションに追加
        article.appendChild(h2);
        article.appendChild(p);
        main.appendChild(article);

        // フォームをリセット
        form.reset();
    });
});
