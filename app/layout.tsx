import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "中古車 対日関税検索サイト",
  description: "中古車輸出事業者向けに、各国の関税・税金・規制を確認できるサイトです。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <div className="container site-header-inner">
            <div>
              <div className="brand-subtitle">中古車輸出事業者向け</div>
              <div className="brand-title">中古車 対日関税検索サイト</div>
            </div>
            <nav className="nav">
              <Link href="/">ホーム</Link>
              <Link href="/rules">関税ルール</Link>
              <Link href="/fees">追加費用</Link>
              <Link href="/news">お知らせ</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <p><strong>中古車 対日関税検索サイト</strong></p>
            <p>初期版では主要国の参考情報を掲載しています。最新制度は必ず各国公的機関等で確認してください。</p>
          </div>
        </footer>
      </body>
    </html>
  );
}