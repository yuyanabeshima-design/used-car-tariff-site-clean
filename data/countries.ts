export type CountryData = {
  slug: string;
  name: string;
  region: string;
  ranking: number;
  tariff: string;
  otherTaxes: string;
  ageRule: string;
  steeringRule: string;
  inspectionRule: string;
  extraCosts: string;
  regulations: string;
  memo: string;
  updatedAt: string;
  sourceName: string;
  sourceUrl: string;
};

export const countries: CountryData[] = [
  {
    slug: "uae",
    name: "UAE",
    region: "中東",
    ranking: 1,
    tariff: "輸入関税 5%",
    otherTaxes: "VAT 5%",
    ageRule: "車種・首長国・用途により条件差あり。年式条件は現地運用確認推奨。",
    steeringRule: "左ハンドル中心。右ハンドルは制限に注意。",
    inspectionRule: "登録時の技術基準確認が必要。",
    extraCosts: "登録費、港湾費、検査費、輸送費",
    regulations: "GCC基準、現地登録ルールに注意",
    memo: "再輸出ハブとして利用されることが多い。",
    updatedAt: "2026-03-18",
    sourceName: "初期調査メモ",
    sourceUrl: "https://example.com"
  },
  {
    slug: "new-zealand",
    name: "ニュージーランド",
    region: "オセアニア",
    ranking: 2,
    tariff: "一般関税 0%が多い",
    otherTaxes: "GST 15%",
    ageRule: "年式よりも安全・排ガス基準適合が重要。",
    steeringRule: "右ハンドルに適合しやすい。",
    inspectionRule: "検疫・安全装置・排ガス確認が重要。",
    extraCosts: "検疫洗浄、登録前点検、輸送費",
    regulations: "ESCや排ガス基準、CO2関連費用に注意",
    memo: "制度条件で実質負担が変わる。",
    updatedAt: "2026-03-18",
    sourceName: "初期調査メモ",
    sourceUrl: "https://example.com"
  },
  {
    slug: "kenya",
    name: "ケニア",
    region: "アフリカ",
    ranking: 3,
    tariff: "輸入関税 35%",
    otherTaxes: "VAT 16%、物品税あり",
    ageRule: "一般に8年規制",
    steeringRule: "右ハンドル中心",
    inspectionRule: "船積み前検査が重要",
    extraCosts: "IDF、RDL、検査費、港湾費",
    regulations: "KEBS適合や年式制限に注意",
    memo: "日本中古車の主要市場の一つ。",
    updatedAt: "2026-03-18",
    sourceName: "初期調査メモ",
    sourceUrl: "https://example.com"
  },
  {
    slug: "malaysia",
    name: "マレーシア",
    region: "東南アジア",
    ranking: 4,
    tariff: "関税 0〜30%",
    otherTaxes: "物品税 75〜105%、売上税 10%",
    ageRule: "制度・許可枠に左右される",
    steeringRule: "右ハンドル適合",
    inspectionRule: "輸入許可と登録条件の確認が必要",
    extraCosts: "AP関連費、登録費、検査費",
    regulations: "AP制度、車種ごとの課税差に注意",
    memo: "関税だけでなく物品税の影響が大きい。",
    updatedAt: "2026-03-18",
    sourceName: "初期調査メモ",
    sourceUrl: "https://example.com"
  },
  {
    slug: "philippines",
    name: "フィリピン",
    region: "東南アジア",
    ranking: 5,
    tariff: "一般商業輸入は原則制限あり",
    otherTaxes: "制度により異なる",
    ageRule: "例外制度や特区制度の確認が必要",
    steeringRule: "左ハンドル基準に注意",
    inspectionRule: "輸入許可と適法性確認が重要",
    extraCosts: "検査費、港湾費、登録対応費",
    regulations: "一般輸入禁止の例外制度、EV優遇制度など",
    memo: "輸入可否の確認が最優先。",
    updatedAt: "2026-03-18",
    sourceName: "初期調査メモ",
    sourceUrl: "https://example.com"
  }
];

export const regions = ["すべて", "中東", "オセアニア", "アフリカ", "東南アジア"];