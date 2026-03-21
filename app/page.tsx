"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { countries, regions } from "../data/countries";
import { newsItems } from "../data/news";

export default function HomePage() {
  const [keyword, setKeyword] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("すべて");

  const filteredCountries = useMemo(() => {
    const q = keyword.trim().toLowerCase();

    return countries
      .filter((country) => {
        const regionMatch =
          selectedRegion === "すべて" || country.region === selectedRegion;

        const text = [
          country.name,
          country.region,
          country.tariff,
          country.otherTaxes,
          country.ageRule,
          country.steeringRule,
          country.inspectionRule,
          country.extraCosts,
          country.regulations,
          country.memo
        ]
          .join(" ")
          .toLowerCase();

        const keywordMatch = q === "" || text.includes(q);
        return regionMatch && keywordMatch;
      })
      .sort((a, b) => a.ranking - b.ranking);
  }, [keyword, selectedRegion]);

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
          <h2>国検索</h2>
          <p className="muted">
            国名、地域、関税、VAT、車齢制限、右ハンドル・左ハンドルなどのキーワードで絞り込めます。
          </p>

          <div style={{ marginTop: "16px" }}>
            <input
              className="search-box"
              type="text"
              placeholder="例：UAE、アフリカ、VAT、8年、右ハンドル"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />

            <div className="filter-row">
              {regions.map((region) => (
                <button
                  key={region}
                  type="button"
                  onClick={() => setSelectedRegion(region)}
                  style={{
                    border: "1px solid #cbd5e1",
                    background: selectedRegion === region ? "#1d4ed8" : "#ffffff",
                    color: selectedRegion === region ? "#ffffff" : "#334155",
                    padding: "10px 14px",
                    borderRadius: "999px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: 700
                  }}
                >
                  {region}
                </button>
              ))}
            </div>

            <p className="muted" style={{ marginTop: "14px" }}>
              該当件数: <strong>{filteredCountries.length}</strong> 件
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container card">
          <h2>対日関税 早見表</h2>
          <p className="muted">
            まずは主要5か国を掲載しています。国名をクリックすると詳細ページに移動します。
          </p>

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
                {filteredCountries.map((country) => (
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

          {filteredCountries.length === 0 && (
            <div
              style={{
                marginTop: "18px",
                padding: "16px",
                background: "#f8fafc",
                border: "1px dashed #cbd5e1",
                borderRadius: "14px",
                color: "#475569"
              }}
            >
              条件に一致する国がありません。キーワードや地域条件を変更してください。
            </div>
          )}
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-2">
          <div className="card">
            <h2>関税ルール</h2>
            <p className="muted">
              年式、左右ハンドル、輸入許可、EV優遇など、国ごとに見落としやすい条件を整理します。
            </p>
            <p>
              <Link className="button-link" href="/rules">
                ルールを見る
              </Link>
            </p>
          </div>

          <div className="card">
            <h2>関税以外の費用</h2>
            <p className="muted">
              検査費、港湾費、登録費、洗浄費など、関税以外にかかる実務費用を整理します。
            </p>
            <p>
              <Link className="button-link" href="/fees">
                追加費用を見る
              </Link>
            </p>
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
          <p>
            <Link className="button-link" href="/news">
              一覧を見る
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
