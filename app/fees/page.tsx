export default function FeesPage() {
  return (
    <main className="section">
      <div className="container card">
        <h1>関税以外の費用</h1>
        <div className="detail-list">
          <div className="detail-row">
            <div className="detail-label">港湾費・通関関連費</div>
            <div>港湾手数料、通関手数料、書類作成費などが発生します。</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">検査費</div>
            <div>船積み前検査、登録前検査、安全検査などの費用です。</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">検疫・洗浄費</div>
            <div>土砂や生物付着の洗浄、消毒対応が必要な国があります。</div>
          </div>
          <div className="detail-row">
            <div className="detail-label">登録条件対応費</div>
            <div>ハンドル条件、灯火類、速度表示、装置追加などの改修費が発生する場合があります。</div>
          </div>
        </div>
      </div>
    </main>
  );
}