export default function RulesPage() {
  return (
    <main className="section">
      <div className="container card">
        <h1>関税ルール</h1>
        <div className="detail-list">
          <div className="detail-row">
            <div className="detail-label">年式・車齢</div>
            <div>国によって輸入可能年数が異なります。関税率ではなく、そもそも輸入可否に影響する場合があります。</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">左右ハンドル</div>
            <div>左ハンドルのみ許容の国、右ハンドルに適した国など差があります。登録可否に直結します。</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">EV・HVの特例</div>
            <div>優遇税率がある国もありますが、変更頻度が高いため更新運用が重要です。</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">排ガス・安全基準</div>
            <div>関税よりも技術基準適合が重要な場合があります。現地登録条件とセットで確認が必要です。</div>
          </div>
        </div>
      </div>
    </main>
  );
}