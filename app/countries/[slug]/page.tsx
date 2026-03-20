import Link from "next/link";
import { notFound } from "next/navigation";
import { countries } from "../../../data/countries";

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export default async function CountryDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const country = countries.find((item) => item.slug === slug);

  if (!country) {
    notFound();
  }

  return (
    <main className="section">
      <div className="container">
        <div className="card">
          <div className="badge">{country.region}</div>
          <h1>{country.name}</h1>
          <p className="muted">最終更新日: {country.updatedAt}</p>

          <div className="detail-list">
            <div className="detail-row">
              <div className="detail-label">基本関税</div>
              <div>{country.tariff}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">その他税金</div>
              <div>{country.otherTaxes}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">車齢・年式ルール</div>
              <div>{country.ageRule}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">ハンドル条件</div>
              <div>{country.steeringRule}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">検査・船積み前確認</div>
              <div>{country.inspectionRule}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">関税以外の主な費用</div>
              <div>{country.extraCosts}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">規制・独自ルール</div>
              <div>{country.regulations}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">補足メモ</div>
              <div>{country.memo}</div>
            </div>
            <div className="detail-row">
              <div className="detail-label">出典</div>
              <div>
                {country.sourceName}<br />
                <a className="country-link" href={country.sourceUrl} target="_blank">
                  参考リンクを開く
                </a>
              </div>
            </div>
          </div>

          <p style={{ marginTop: 20 }}>
            <Link className="button-link" href="/">ホームへ戻る</Link>
          </p>
        </div>
      </div>
    </main>
  );
}