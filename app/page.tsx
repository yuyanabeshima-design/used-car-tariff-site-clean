import Link from "next/link";
import { countries } from "../data/countries";
import { newsItems } from "../data/news";

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-box">
            <h1>各国の中古車輸入ルールを、すばやく確認</h1>
            <p>
              関税、VAT/GST、車齢制限、ハンドル条件、船積み前検査、関税以外の費用までまとめて確認できる、
              中古車輸出事業者向けの初期版サイトです。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-3">
          <div className="card">
            <div className="muted">初期掲載国</div>
            <div className="kpi">5か国</div>
          </div>
          <div className="card">
            <div className="muted">公開方針</div>
            <div className="kpi">最小構成MVP</div>
          </div>
          <div className="card">
            <div className="muted">更新方式</div>
            <div className="kpi">GitHubで更新</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2>対日関税 早見表</h2>
          <p className="muted">まずは主要5か国を掲載しています。国名をクリックすると詳細ページに移動します。</p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>順位</th>
                  <th>国名</th>
                  <th>地域</th>
                  <th>基本関税</th>
                  <th>その他税</th>
                  <th>主な注意点</th>
                </tr>
              </thead>
              <tbody>
                {countries
                  .sort((a, b) => a.ranking - b.ranking)
                  .map((country) => (
                    <tr key={country.slug}>
                      <td>#{country.ranking}</td>
                      <td>
                        <Link className="country-link" href={`/countries/${country.slug}`}>
                          {country.name}
                        </Link>
                      </td>
                      <td>{country.region}</td>
                      <td>{country.tariff}</td>
                      <td>{country.otherTaxes}</td>
                      <td>{country.memo}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h2>関税ルール</h2>
            <p className="muted">年式、左右ハンドル、輸入許可、EV優遇など、国ごとに見落としやすい条件を整理します。</p>
            <p><Link className="button-link" href="/rules">ルールを見る</Link></p>
          </div>
          <div className="card">
            <h2>関税以外の費用</h2>
            <p className="muted">検査費、港湾費、登録費、洗浄費など、関税以外にかかる実務費用を整理します。</p>
            <p><Link className="button-link" href="/fees">追加費用を見る</Link></p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2>お知らせ</h2>
          <div className="list">
            {newsItems.map((item) => (
              <div className="notice-item" key={item.date + item.title}>
                <div className="badge">{item.date}</div>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </div>
            ))}
          </div>
          <p><Link className="button-link" href="/news">一覧を見る</Link></p>
        </div>
      </section>
    </main>
  );
}