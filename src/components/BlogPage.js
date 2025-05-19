import React from 'react';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Top 5 Digital Marketing Trends in 2025",
      category: "Digital Marketing",
      description:
        "Stay ahead with the latest marketing trends: AI in advertising, voice search, video SEO, micro-influencers, and zero-click content.",
      date: "May 18, 2025",
    },
    {
      title: "React vs Next.js: What Should You Use?",
      category: "Development",
      description:
        "Explore the pros and cons of React and Next.js. Learn when to use each for frontend projects in 2025.",
      date: "May 10, 2025",
    },
    {
      title: "How to Create a High-Converting Landing Page",
      category: "Digital Marketing",
      description:
        "Learn how to design landing pages that convert visitors into leads using UX principles and marketing psychology.",
      date: "May 2, 2025",
    },
    {
      title: "Performance Optimization Tips for React Apps",
      category: "Development",
      description:
        "Optimize React apps for performance: lazy loading, memoization, CDN usage, and effective state management.",
      date: "April 28, 2025",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-dark">Our Blog</h1>
      <p className="text-center text-muted mb-5">
        Insights, trends, and guides on Digital Marketing and Web Development.
      </p>

      <div className="row g-4">
        {blogPosts.map((post, index) => (
          <div className="col-md-6" key={index}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <span className={`badge bg-${post.category === 'Development' ? 'primary' : 'success'} mb-2`}>
                  {post.category}
                </span>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <small className="text-muted">Published on {post.date}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
