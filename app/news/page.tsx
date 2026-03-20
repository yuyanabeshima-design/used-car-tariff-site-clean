import { newsItems } from "../../data/news";

export default function NewsPage() {
  return (
    <main className="section">
      <div className="container card">
        <h1>お知らせ</h1>
        <div className="list">
          {newsItems.map((item) => (
            <div className="notice-item" key={item.date + item.title}>
              <div className="badge">{item.date}</div>
              <h3>{item.title}</h3>
              <p className="muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}