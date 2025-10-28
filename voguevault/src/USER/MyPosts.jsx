import React from "react";
import { Link } from "react-router-dom";

export default function MyPosts() {
  const posts = [
    {
      id: 1,
      title: "Top 5 Summer Outfits ☀️",
      date: "Oct 5, 2025",
      status: "Published",
    },
    {
      id: 2,
      title: "Winter Wardrobe Essentials ❄️",
      date: "Sep 28, 2025",
      status: "Draft",
    },
    {
      id: 3,
      title: "Accessorizing Like a Pro 💍",
      date: "Sep 10, 2025",
      status: "Published",
    },
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins', sans-serif;
          background: url("https://images.template.net/75381/Free-Pastel-Iphone-Background-01-1.jpg") no-repeat center center fixed;
          background-size: cover;
          color: #333;
        }
        header {
          background: #f8d3e1;
          padding: 20px;
          text-align: center;
          color: #ff69b4;
          font-size: 28px;
          font-weight: 700;
          border-bottom: 2px solid #f8d3e1;
        }
        .posts-container {
          max-width: 900px;
          margin: 50px auto;
          background: white;
          padding: 30px;
          border-radius: 25px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          border: 2px solid #ffc0cb;
        }
        h2 {
          color: #ff69b4;
          text-align: center;
          margin-bottom: 30px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 15px;
        }
        th, td {
          padding: 12px 15px;
          border-bottom: 1px solid #ffd6e0;
          text-align: left;
        }
        th {
          background: #fff0f5;
          color: #ff69b4;
        }
        tr:hover {
          background: #fff5f8;
        }
        .status {
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 12px;
          text-align: center;
        }
        .status.Published {
          background: #ffb6c1;
          color: white;
        }
        .status.Draft {
          background: #ffe1eb;
          color: #ff69b4;
        }
        .btn {
          display: inline-block;
          background: #ff69b4;
          color: white;
          padding: 8px 18px;
          border-radius: 20px;
          text-decoration: none;
          transition: background 0.3s;
        }
        .btn:hover {
          background: #ff85c1;
        }
        footer {
          background: #f8d3e1;
          padding: 15px;
          text-align: center;
          color: #999;
          font-size: 14px;
          border-top: 2px solid #ffb6c1;
          margin-top: 40px;
        }
      `}</style>

      {/* <header>📝 My Posts</header> */}

      <div className="posts-container">
        <h2>Your Blog Posts</h2>

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>{post.date}</td>
                <td>
                  <span className={`status ${post.status}`}>
                    {post.status}
                  </span>
                </td>
                <td>
                  <Link to={`/edit/${post.id}`} className="btn">
                    ✏️ Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <Link to="/create" className="btn">
            ➕ New Post
          </Link>
        </div>
      </div>

      {/* <footer>© 2025 Vogue Vault | Designed with 💖 for fashion lovers</footer> */}
    </>
  );
}
