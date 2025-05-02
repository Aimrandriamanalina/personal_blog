import React from 'react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: 'Mon premier article',
            date: '2023-10-01',
            content: 'Ceci est le contenu de mon premier article de blog.'
        },
        {
            id: 2,
            title: 'Un autre article intéressant',
            date: '2023-10-05',
            content: 'Voici quelques réflexions sur un sujet intéressant.'
        },
        {
            id: 3,
            title: 'Conseils pour les blogueurs',
            date: '2023-10-10',
            content: 'Des conseils utiles pour ceux qui souhaitent commencer un blog.'
        }
    ];

    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p><em>{post.date}</em></p>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;