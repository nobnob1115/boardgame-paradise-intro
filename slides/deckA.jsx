// 案A: ポップ&カラフル（赤・オレンジ サイコロ）版スライド
// 7スライド構成

const A_COLORS = {
  bg: '#FFF3E6',
  ink: '#2A1810',
  red: '#E63946',
  orange: '#F77F00',
  yellow: '#FCBF49',
  cream: '#FFF8EE',
  navy: '#1D3557',
};

const aFont = `'Hiragino Maru Gothic ProN','M PLUS Rounded 1c','Nunito',system-ui,sans-serif`;

function AFrame({ children, bg = A_COLORS.bg, pad = 56 }) {
  return (
    <div style={{
      width: '100%', height: '100%', background: bg, padding: pad,
      fontFamily: aFont, color: A_COLORS.ink, position: 'relative', overflow: 'hidden',
      boxSizing: 'border-box',
    }}>{children}</div>
  );
}

// デコ用 — 散らばったサイコロ
function AScatterDice({ dice = [] }) {
  return (
    <>
      {dice.map((d, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: d.top, left: d.left, right: d.right, bottom: d.bottom,
          transform: `rotate(${d.rot || 0}deg)`,
          opacity: d.opacity || 1,
          filter: d.shadow ? 'drop-shadow(0 6px 14px rgba(230,57,70,0.25))' : 'none',
          zIndex: d.z || 0,
          pointerEvents: 'none',
        }}>
          <Die face={d.face || 5} size={d.size || 80} fill={d.fill || A_COLORS.red} dots={d.dots || '#fff'} />
        </div>
      ))}
    </>
  );
}

function ATag({ children, bg = A_COLORS.red, color = '#fff' }) {
  return (
    <span style={{
      display: 'inline-block', background: bg, color,
      padding: '6px 14px', borderRadius: 999, fontSize: 14,
      fontWeight: 700, letterSpacing: '0.04em',
    }}>{children}</span>
  );
}

// ───────── Slide 1: 表紙 ─────────
function ASlide1() {
  return (
    <AFrame bg={A_COLORS.bg}>
      <AScatterDice dice={[
        { top: 60,  left: 80,  size: 110, face: 3, fill: A_COLORS.red,    rot: -12, shadow: true },
        { top: 200, right: 140, size: 140, face: 5, fill: A_COLORS.orange, rot: 8,  shadow: true },
        { bottom: 120, left: 180, size: 90,  face: 2, fill: A_COLORS.yellow, dots: A_COLORS.ink, rot: 20, shadow: true },
        { bottom: 60,  right: 100, size: 120, face: 6, fill: A_COLORS.navy, rot: -6,  shadow: true },
        { top: 420, left: 60,  size: 70,  face: 1, fill: A_COLORS.red, rot: 30, shadow: true },
      ]} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 80 }}>
        <div style={{ fontSize: 20, letterSpacing: '0.4em', color: A_COLORS.red, fontWeight: 700, marginBottom: 20 }}>
          2026.12 OPEN
        </div>
        <div style={{ fontSize: 96, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: 24 }}>
          ボードゲーム、<br/>
          <span style={{ color: A_COLORS.red }}>もっと本気で</span>。
        </div>
        <div style={{ fontSize: 22, color: A_COLORS.ink, opacity: 0.7, maxWidth: 720, lineHeight: 1.6, fontWeight: 500 }}>
          定例会を運営するサークルのための、<br/>
          ボードゲーム専用レンタルスペース＆会員システム
        </div>
        <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 14 }}>
          <Die size={36} fill={A_COLORS.red} />
          <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.12em' }}>
            BOARDGAME PARADICE
          </span>
        </div>
      </div>
    </AFrame>
  );
}

// ───────── Slide 2: 課題提起 ─────────
function ASlide2() {
  const pains = [
    '会場探しが毎回たいへん',
    '誰が何を持ってくるか当日までわからない',
    '次回のゲーム決めでグダる',
    'せっかくの名勝負が記録に残らない',
  ];
  return (
    <AFrame>
      <AScatterDice dice={[
        { top: 40, right: 60, size: 80, face: 1, fill: A_COLORS.yellow, dots: A_COLORS.ink, rot: 14 },
      ]} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ATag bg={A_COLORS.navy}>01 / 課題</ATag>
        <div style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.15, marginTop: 28, marginBottom: 40, maxWidth: 1200 }}>
          サークル運営、<br/>
          <span style={{ background: `linear-gradient(transparent 55%, ${A_COLORS.yellow} 55%)` }}>
            「ゲーム以外」の負担
          </span>が多すぎる。
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 1280 }}>
          {pains.map((p, i) => (
            <div key={i} style={{
              background: A_COLORS.cream, borderRadius: 20, padding: '32px 36px',
              display: 'flex', alignItems: 'center', gap: 24,
              boxShadow: '0 6px 0 rgba(42,24,16,0.08)',
              border: `3px solid ${A_COLORS.ink}`,
            }}>
              <div style={{ fontSize: 44, fontWeight: 900, color: A_COLORS.red, minWidth: 60 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.4 }}>{p}</div>
            </div>
          ))}
        </div>
      </div>
    </AFrame>
  );
}

// ───────── Slide 3: ソリューション概観 ─────────
function ASlide3() {
  const features = [
    { icon: '📅', t: 'スケジュール調整', d: 'イベント作成＆出席確認で出欠を一発集計' },
    { icon: '🗳️', t: 'ゲーム投票', d: '次回プレイするゲームを全員で決める' },
    { icon: '🎲', t: 'ゲームログ', d: 'AIが名場面を自動ハイライト' },
    { icon: '📝', t: '感想・レビュー', d: '遊んだ後の余韻もストック' },
    { icon: '📦', t: 'サークルロッカー', d: '持参不要、常設ゲーム棚を' },
    { icon: '👥', t: 'サークル管理', d: 'メンバー募集・権限もおまかせ' },
  ];
  return (
    <AFrame>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ATag>02 / ソリューション</ATag>
        <div style={{ fontSize: 68, fontWeight: 900, lineHeight: 1.1, marginTop: 28, marginBottom: 36 }}>
          定例会のすべてを、<br/>ひとつの会員システムに。
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          {features.map((f, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 20, padding: 28,
              border: `3px solid ${A_COLORS.ink}`, boxShadow: `6px 6px 0 ${A_COLORS.red}`,
            }}>
              <div style={{ fontSize: 42, marginBottom: 10 }}>{f.icon}</div>
              <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>{f.t}</div>
              <div style={{ fontSize: 15, lineHeight: 1.5, color: A_COLORS.ink, opacity: 0.72 }}>{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </AFrame>
  );
}

// ───────── Slide 4: ゲームログ推し（導入）─────────
function ASlide4() {
  return (
    <AFrame bg={A_COLORS.navy} pad={0}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', height: '100%', color: '#fff' }}>
        <div style={{ padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ATag bg={A_COLORS.yellow} color={A_COLORS.navy}>03 / 目玉機能</ATag>
          <div style={{ fontSize: 64, fontWeight: 900, lineHeight: 1.1, marginTop: 26, marginBottom: 26 }}>
            <span style={{ color: A_COLORS.yellow }}>AIハイライト</span>付き<br/>
            ゲームログ＆リプレイ
          </div>
          <div style={{ fontSize: 19, lineHeight: 1.7, opacity: 0.86, marginBottom: 28 }}>
            盤面も、手札も、ターンごとに自動で記録。<br/>
            AIが「逆転の一手」などの名場面を抽出し、<br/>
            音声解説つきでリプレイできます。
          </div>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['自社開発・自動撮影ハード', '手札も盤面も両方', 'AI音声実況', '共有＆アーカイブ'].map((x) => (
              <span key={x} style={{ background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.3)', padding: '6px 14px', borderRadius: 999, fontSize: 13, fontWeight: 600 }}>
                {x}
              </span>
            ))}
          </div>
        </div>
        <div style={{ padding: '64px 56px 64px 0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: 560 }}>
            <MockBrowser url="boardgame-paradice.com/game-logs.html">
              <MockGameLog />
            </MockBrowser>
          </div>
        </div>
      </div>
    </AFrame>
  );
}

// ───────── Slide 4.5: 撮影システム解説（新規）─────────
// 俯瞰カメラ（盤面）+ 手元カメラ（チェスクロック連動）のアピール
function ASlide4b() {
  return (
    <AFrame>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ATag>03 · 自社開発ハードウェア</ATag>
        <div style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.1, marginTop: 24, marginBottom: 10 }}>
          <span style={{ color: A_COLORS.red }}>ボードも、手札も</span>、<br/>
          ちゃんと残る撮影システム。
        </div>
        <div style={{ fontSize: 17, color: A_COLORS.ink, opacity: 0.72, marginBottom: 28, maxWidth: 1100 }}>
          市販ゲームにはない、私たちの発明。盤面は俯瞰カメラが自動撮影、<br/>
          手札はチェスクロックのターン切替に連動して自動撮影されます。
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          {/* 左: 俯瞰カメラ */}
          <div style={{
            background: 'white', borderRadius: 20, padding: 26,
            border: `3px solid ${A_COLORS.ink}`, boxShadow: `6px 6px 0 ${A_COLORS.orange}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ background: A_COLORS.orange, color: '#fff', padding: '4px 10px', borderRadius: 6, fontSize: 13, fontWeight: 900 }}>A</div>
              <div style={{ fontSize: 22, fontWeight: 900 }}>盤面 · 俯瞰カメラ</div>
            </div>
            <TopDownDiagram />
            <div style={{ fontSize: 14, color: A_COLORS.ink, opacity: 0.78, lineHeight: 1.6, marginTop: 16 }}>
              テーブル上方に固定された俯瞰カメラが、一定間隔 &amp; ターン切替時に盤面を自動撮影。
              プレイヤーは撮影を意識する必要がありません。
            </div>
          </div>

          {/* 右: 手元カメラ+チェスクロック */}
          <div style={{
            background: 'white', borderRadius: 20, padding: 26,
            border: `3px solid ${A_COLORS.ink}`, boxShadow: `6px 6px 0 ${A_COLORS.red}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ background: A_COLORS.red, color: '#fff', padding: '4px 10px', borderRadius: 6, fontSize: 13, fontWeight: 900 }}>B</div>
              <div style={{ fontSize: 22, fontWeight: 900 }}>手札 · チェスクロック連動</div>
            </div>
            <HandCamDiagram />
            <div style={{ fontSize: 14, color: A_COLORS.ink, opacity: 0.78, lineHeight: 1.6, marginTop: 16 }}>
              手元の小型カメラがチェスクロックと連動。自分のターン終了時に手札が自動記録され、
              リプレイ時に「誰が何を持っていたか」まで辿れます。
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 22, padding: '14px 20px', background: A_COLORS.cream, borderRadius: 14, border: `2px dashed ${A_COLORS.ink}` }}>
          <div style={{ fontSize: 28 }}>💡</div>
          <div style={{ fontSize: 15, fontWeight: 700, color: A_COLORS.ink }}>
            他ではできない体験 ― 手札情報まで記録されるのはおそらく世界初です。
            終局後に「あの場面、相手の手札はこうだった」までリプレイで追えます。
          </div>
        </div>
      </div>
    </AFrame>
  );
}

// 俯瞰カメラの図解
function TopDownDiagram() {
  return (
    <svg viewBox="0 0 420 180" style={{ width: '100%', height: 180 }}>
      {/* 天井＆カメラ */}
      <rect x="40" y="10" width="340" height="6" fill={A_COLORS.ink} />
      <g transform="translate(210, 16)">
        <rect x="-16" y="0" width="32" height="22" rx="4" fill={A_COLORS.orange} stroke={A_COLORS.ink} strokeWidth="2" />
        <circle cx="0" cy="14" r="6" fill={A_COLORS.ink} />
        <circle cx="0" cy="14" r="3" fill={A_COLORS.yellow} />
      </g>
      <text x="242" y="32" fontSize="12" fontWeight="700" fill={A_COLORS.ink}>俯瞰カメラ</text>

      {/* 視野の円錐 */}
      <path d="M 210 38 L 100 150 L 320 150 Z" fill={A_COLORS.yellow} opacity="0.28" />
      <path d="M 210 38 L 100 150" stroke={A_COLORS.orange} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M 210 38 L 320 150" stroke={A_COLORS.orange} strokeWidth="1.5" strokeDasharray="4 3" />

      {/* テーブル */}
      <rect x="60" y="150" width="300" height="20" rx="3" fill={A_COLORS.ink} />
      <rect x="90" y="130" width="240" height="22" rx="2" fill="#8B6F47" stroke={A_COLORS.ink} strokeWidth="2" />

      {/* 盤面ゴマ */}
      <circle cx="150" cy="142" r="4" fill={A_COLORS.red} />
      <circle cx="180" cy="142" r="4" fill={A_COLORS.navy} />
      <rect x="210" y="138" width="8" height="8" fill={A_COLORS.yellow} stroke={A_COLORS.ink} strokeWidth="1" />
      <rect x="240" y="138" width="8" height="8" fill={A_COLORS.red} stroke={A_COLORS.ink} strokeWidth="1" />
      <circle cx="280" cy="142" r="4" fill={A_COLORS.navy} />
    </svg>
  );
}

// 手元カメラ+チェスクロックの図解
function HandCamDiagram() {
  return (
    <svg viewBox="0 0 420 180" style={{ width: '100%', height: 180 }}>
      {/* 手札スタンド＋手札カード */}
      <rect x="20" y="102" width="200" height="14" rx="2" fill="#E8E3D8" stroke={A_COLORS.ink} strokeWidth="2" />
      {[0,1,2,3].map((i) => (
        <g key={i} transform={`translate(${44 + i * 40}, 40) rotate(${(i-1.5) * 3})`}>
          <rect x="-22" y="0" width="44" height="62" rx="4" fill="#fff" stroke={A_COLORS.ink} strokeWidth="1.8" />
          <rect x="-18" y="5" width="36" height="16" rx="2" fill={[A_COLORS.red, A_COLORS.navy, A_COLORS.yellow, A_COLORS.orange][i]} />
          <line x1="-15" y1="32" x2="15" y2="32" stroke={A_COLORS.ink} strokeWidth="1" opacity="0.5"/>
          <line x1="-15" y1="40" x2="15" y2="40" stroke={A_COLORS.ink} strokeWidth="1" opacity="0.5"/>
          <line x1="-15" y1="48" x2="15" y2="48" stroke={A_COLORS.ink} strokeWidth="1" opacity="0.5"/>
        </g>
      ))}

      {/* 手元カメラ */}
      <g transform="translate(210, 60)">
        <rect x="-3" y="-40" width="6" height="40" fill={A_COLORS.ink} />
        <rect x="-14" y="-12" width="28" height="18" rx="3" fill={A_COLORS.red} stroke={A_COLORS.ink} strokeWidth="2" />
        <circle cx="0" cy="-3" r="4" fill={A_COLORS.ink} />
        <circle cx="0" cy="-3" r="2" fill={A_COLORS.yellow} />
      </g>
      {/* 視線 */}
      <path d="M 210 66 L 60 96" stroke={A_COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />
      <path d="M 210 66 L 200 96" stroke={A_COLORS.red} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

      {/* チェスクロック */}
      <g transform="translate(300, 90)">
        <rect x="0" y="0" width="100" height="50" rx="6" fill={A_COLORS.ink} />
        <rect x="6" y="6" width="42" height="30" rx="3" fill={A_COLORS.yellow} />
        <text x="27" y="26" fontSize="11" fontWeight="900" fill={A_COLORS.ink} textAnchor="middle" fontFamily="monospace">11:49</text>
        <rect x="52" y="6" width="42" height="30" rx="3" fill="#333" />
        <text x="73" y="26" fontSize="11" fontWeight="900" fill="#888" textAnchor="middle" fontFamily="monospace">12:00</text>
        <circle cx="27" cy="43" r="3" fill={A_COLORS.red}>
          <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite"/>
        </circle>
      </g>
      {/* 連動線 */}
      <path d="M 224 64 Q 280 40 340 70" stroke={A_COLORS.orange} strokeWidth="2" fill="none" strokeDasharray="5 4" />
      <text x="260" y="40" fontSize="11" fontWeight="800" fill={A_COLORS.orange}>ターン切替で自動撮影</text>

      <text x="100" y="170" fontSize="11" fontWeight="700" fill={A_COLORS.ink} textAnchor="middle">手札</text>
      <text x="225" y="170" fontSize="11" fontWeight="700" fill={A_COLORS.ink} textAnchor="middle">手元カメラ</text>
      <text x="350" y="170" fontSize="11" fontWeight="700" fill={A_COLORS.ink} textAnchor="middle">チェスクロック</text>
    </svg>
  );
}

// ───────── Slide 5: スクショいろいろ ─────────
function ASlide5() {
  return (
    <AFrame>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ATag>04 / 実際の画面</ATag>
        <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginTop: 24, marginBottom: 32 }}>
          すぐに使える、迷わない設計。
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
          <div>
            <MockBrowser url=".../dashboard.html" style={{ transform: 'scale(0.98)', transformOrigin: 'top' }}>
              <MockDashboard />
            </MockBrowser>
            <div style={{ fontSize: 14, fontWeight: 800, marginTop: 12, color: A_COLORS.red }}>▲ ダッシュボード</div>
            <div style={{ fontSize: 13, color: A_COLORS.ink, opacity: 0.7, marginTop: 4 }}>統計と最近の活動が一目で。</div>
          </div>
          <div>
            <MockBrowser url=".../events.html">
              <MockEvents />
            </MockBrowser>
            <div style={{ fontSize: 14, fontWeight: 800, marginTop: 12, color: A_COLORS.red }}>▲ スケジュール</div>
            <div style={{ fontSize: 13, color: A_COLORS.ink, opacity: 0.7, marginTop: 4 }}>出席確認で出欠を即集計。</div>
          </div>
          <div>
            <MockBrowser url=".../polls.html">
              <MockPolls />
            </MockBrowser>
            <div style={{ fontSize: 14, fontWeight: 800, marginTop: 12, color: A_COLORS.red }}>▲ ゲーム投票</div>
            <div style={{ fontSize: 13, color: A_COLORS.ink, opacity: 0.7, marginTop: 4 }}>次回やるゲームを全員で。</div>
          </div>
        </div>
      </div>
    </AFrame>
  );
}

// ───────── Slide 5.5: レンタルスペースの魅力（新規）─────────
function ASlide5b() {
  const perks = [
    { icon: '🚪', t: '20㎡の完全個室', d: '他のお客さんに邪魔されない、あなたたちだけの空間。' },
    { icon: '🪑', t: 'ゲーム向き大テーブル', d: 'コンポーネントを広げても余裕。長時間でも疲れにくい高さ設計。' },
    { icon: '🛋️', t: '沈むソファ型チェア', d: '4〜6時間の長丁場でも腰が痛くならない、ゆったりタイプ。' },
    { icon: '🔐', t: 'サークル専用ロッカー', d: 'ゲームコレクションを保管可。次回から手ぶらでOK。' },
  ];
  return (
    <AFrame>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <ATag>04 · レンタルスペース</ATag>
        <div style={{ fontSize: 60, fontWeight: 900, lineHeight: 1.1, marginTop: 24, marginBottom: 10 }}>
          <span style={{ color: A_COLORS.red }}>あなたたちだけ</span>の、<br/>
          定例会のためのお部屋。
        </div>
        <div style={{ fontSize: 17, color: A_COLORS.ink, opacity: 0.72, marginBottom: 28, maxWidth: 1100 }}>
          20㎡の個室を丸ごと占有。家でも、カフェでも、公民館でもない、<br/>
          ボードゲームサークルのためだけに設計されたスペースです。
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 24, alignItems: 'stretch' }}>
          {/* 左: スペース俯瞰図 */}
          <div style={{
            background: 'white', borderRadius: 20, padding: 22,
            border: `3px solid ${A_COLORS.ink}`, boxShadow: `6px 6px 0 ${A_COLORS.navy}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div style={{ fontSize: 18, fontWeight: 900 }}>ROOM LAYOUT</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: A_COLORS.red, background: A_COLORS.cream, padding: '4px 10px', borderRadius: 999 }}>20㎡ / 個室</div>
            </div>
            <RoomLayoutDiagram />
          </div>

          {/* 右: 4特長 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {perks.map((p, i) => (
              <div key={i} style={{
                background: 'white', borderRadius: 16, padding: 20,
                border: `3px solid ${A_COLORS.ink}`,
                boxShadow: `5px 5px 0 ${[A_COLORS.red, A_COLORS.orange, A_COLORS.yellow, A_COLORS.navy][i]}`,
                display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ fontSize: 34, marginBottom: 6, lineHeight: 1 }}>{p.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 900, marginBottom: 6, lineHeight: 1.3 }}>{p.t}</div>
                <div style={{ fontSize: 13, lineHeight: 1.55, color: A_COLORS.ink, opacity: 0.72 }}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 20, padding: '14px 20px', background: A_COLORS.navy, color: '#fff', borderRadius: 14 }}>
          <div style={{ fontSize: 24 }}>🎒</div>
          <div style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.5 }}>
            重いゲームを毎回運ばなくていい。<span style={{ color: A_COLORS.yellow }}>ロッカーに預けて、手ぶらで通える</span>のが定例会の新しいスタンダード。
          </div>
        </div>
      </div>
    </AFrame>
  );
}

// ルームレイアウト図
function RoomLayoutDiagram() {
  return (
    <svg viewBox="0 0 460 260" style={{ width: '100%', height: 240 }}>
      {/* 部屋の外枠 */}
      <rect x="10" y="10" width="440" height="240" fill={A_COLORS.cream} stroke={A_COLORS.ink} strokeWidth="3" />

      {/* ドア */}
      <rect x="10" y="30" width="4" height="50" fill="#fff" stroke={A_COLORS.ink} strokeWidth="2.5" />
      <path d="M 14 30 A 50 50 0 0 1 64 80" fill="none" stroke={A_COLORS.ink} strokeWidth="1.2" strokeDasharray="3 3" />
      <text x="20" y="100" fontSize="11" fontWeight="700" fill={A_COLORS.ink}>ENTRY</text>

      {/* 大テーブル */}
      <rect x="130" y="80" width="200" height="110" rx="8" fill="#A88560" stroke={A_COLORS.ink} strokeWidth="2.5" />
      <rect x="140" y="90" width="180" height="90" rx="4" fill="#C4A378" stroke={A_COLORS.ink} strokeWidth="1" opacity="0.6" />
      {/* テーブル上のコマ */}
      <circle cx="180" cy="125" r="5" fill={A_COLORS.red} stroke={A_COLORS.ink} strokeWidth="1"/>
      <circle cx="200" cy="135" r="5" fill={A_COLORS.navy} stroke={A_COLORS.ink} strokeWidth="1"/>
      <rect x="220" y="120" width="10" height="10" fill={A_COLORS.yellow} stroke={A_COLORS.ink} strokeWidth="1"/>
      <rect x="250" y="145" width="10" height="10" fill={A_COLORS.orange} stroke={A_COLORS.ink} strokeWidth="1"/>
      <circle cx="280" cy="130" r="5" fill={A_COLORS.red} stroke={A_COLORS.ink} strokeWidth="1"/>
      <rect x="235" y="130" width="28" height="14" fill="#fff" stroke={A_COLORS.ink} strokeWidth="1"/>
      <text x="230" y="205" fontSize="11" fontWeight="800" fill={A_COLORS.ink} textAnchor="middle">ゲーム向け大テーブル</text>

      {/* ソファ×4 (上下左右) */}
      {/* 上 */}
      <rect x="160" y="52" width="140" height="22" rx="6" fill={A_COLORS.red} stroke={A_COLORS.ink} strokeWidth="2" />
      <rect x="166" y="56" width="30" height="14" rx="3" fill="#fff" opacity="0.3"/>
      <rect x="202" y="56" width="30" height="14" rx="3" fill="#fff" opacity="0.3"/>
      <rect x="238" y="56" width="30" height="14" rx="3" fill="#fff" opacity="0.3"/>
      {/* 下 */}
      <rect x="160" y="196" width="140" height="22" rx="6" fill={A_COLORS.red} stroke={A_COLORS.ink} strokeWidth="2" />
      <rect x="166" y="200" width="30" height="14" rx="3" fill="#fff" opacity="0.3"/>
      <rect x="202" y="200" width="30" height="14" rx="3" fill="#fff" opacity="0.3"/>
      <rect x="238" y="200" width="30" height="14" rx="3" fill="#fff" opacity="0.3"/>
      {/* 左 */}
      <rect x="96" y="95" width="22" height="80" rx="6" fill={A_COLORS.red} stroke={A_COLORS.ink} strokeWidth="2" />
      <rect x="100" y="100" width="14" height="30" rx="3" fill="#fff" opacity="0.3"/>
      <rect x="100" y="138" width="14" height="30" rx="3" fill="#fff" opacity="0.3"/>
      {/* 右 */}
      <rect x="342" y="95" width="22" height="80" rx="6" fill={A_COLORS.red} stroke={A_COLORS.ink} strokeWidth="2" />
      <rect x="346" y="100" width="14" height="30" rx="3" fill="#fff" opacity="0.3"/>
      <rect x="346" y="138" width="14" height="30" rx="3" fill="#fff" opacity="0.3"/>
      <text x="230" y="240" fontSize="11" fontWeight="800" fill={A_COLORS.ink} textAnchor="middle">ソファ型チェア ×8〜10席</text>

      {/* ロッカー */}
      <g transform="translate(388, 100)">
        <rect x="0" y="0" width="50" height="120" fill="#fff" stroke={A_COLORS.ink} strokeWidth="2.5" />
        {[0,1,2,3].map(i => (
          <g key={i}>
            <rect x="4" y={4 + i*29} width="42" height="26" fill={A_COLORS.yellow} stroke={A_COLORS.ink} strokeWidth="1.2" />
            <circle cx="40" cy={17 + i*29} r="1.8" fill={A_COLORS.ink} />
          </g>
        ))}
      </g>
      <text x="413" y="235" fontSize="10" fontWeight="800" fill={A_COLORS.ink} textAnchor="middle">🔐 ロッカー</text>

      {/* 俯瞰カメラアイコン（既存機材への接続示唆） */}
      <g transform="translate(230, 135)">
        <circle cx="0" cy="0" r="10" fill="#fff" stroke={A_COLORS.ink} strokeWidth="2" />
        <circle cx="0" cy="0" r="5" fill={A_COLORS.ink} />
        <circle cx="0" cy="0" r="2.5" fill={A_COLORS.yellow} />
      </g>
      <text x="248" y="138" fontSize="9" fontWeight="700" fill={A_COLORS.ink}>📷 俯瞰カメラ</text>
    </svg>
  );
}

// ───────── Slide 6: 料金プラン ─────────
function ASlide6() {
  const plans = [
    { name: 'ライト', price: '10,000', unit: '円/月', freq: '月1回まで', note: '試しに使ってみたい', accent: A_COLORS.yellow },
    { name: 'スタンダード', price: '15,000', unit: '円/月', freq: '平日のみ月4回まで', note: '平日中心のサークルに', accent: A_COLORS.orange, featured: true },
    { name: 'プレミアム', price: '25,000', unit: '円/月', freq: '土日込み月4回まで', note: '週末ガッツリ派に', accent: A_COLORS.red },
  ];
  return (
    <AFrame>
      <ATag>05 / 料金プラン</ATag>
      <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1.1, marginTop: 24, marginBottom: 10 }}>
        サークルで割ればおトク。
      </div>
      <div style={{ fontSize: 17, color: A_COLORS.ink, opacity: 0.7, marginBottom: 32 }}>
        すべてサークル単位の月額制。ロッカー・ゲーム棚・配信機材レンタル含む。
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
        {plans.map((p) => (
          <div key={p.name} style={{
            background: p.featured ? p.accent : 'white',
            color: p.featured ? '#fff' : A_COLORS.ink,
            borderRadius: 24, padding: 34,
            border: `3px solid ${A_COLORS.ink}`,
            boxShadow: p.featured ? `8px 8px 0 ${A_COLORS.ink}` : `6px 6px 0 ${p.accent}`,
            position: 'relative',
          }}>
            {p.featured && (
              <div style={{ position: 'absolute', top: -16, right: 20, background: A_COLORS.ink, color: A_COLORS.yellow, fontSize: 13, fontWeight: 800, padding: '6px 14px', borderRadius: 999, letterSpacing: '0.08em' }}>
                ★ おすすめ
              </div>
            )}
            <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: '0.08em', marginBottom: 12 }}>
              {p.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 18 }}>
              <div style={{ fontSize: 56, fontWeight: 900, lineHeight: 1 }}>¥{p.price}</div>
              <div style={{ fontSize: 14, fontWeight: 700, opacity: 0.8 }}>{p.unit}</div>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, padding: '10px 14px', borderRadius: 10, background: p.featured ? 'rgba(255,255,255,0.18)' : A_COLORS.cream, marginBottom: 14 }}>
              予約枠: {p.freq}
            </div>
            <div style={{ fontSize: 14, opacity: 0.8, lineHeight: 1.6 }}>{p.note}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 13, color: A_COLORS.ink, opacity: 0.55, marginTop: 20 }}>
        ※ 1サークル複数人で負担可能。予約枠超過分は従量課金オプションあり。
      </div>
    </AFrame>
  );
}

// ───────── Slide 7: CTA ─────────
function ASlide7() {
  return (
    <AFrame bg={A_COLORS.red} pad={0}>
      <AScatterDice dice={[
        { top: 60,  left: 80,  size: 100, face: 6, fill: A_COLORS.yellow, dots: A_COLORS.ink, rot: -10 },
        { bottom: 80, right: 100, size: 130, face: 3, fill: A_COLORS.navy, rot: 16 },
        { top: 200, right: 260, size: 60, face: 1, fill: A_COLORS.cream, dots: A_COLORS.ink, rot: 24, opacity: 0.7 },
      ]} />
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#fff', textAlign: 'center', padding: 80 }}>
        <div style={{ fontSize: 16, letterSpacing: '0.4em', fontWeight: 700, opacity: 0.85, marginBottom: 20 }}>
          NOW ACCEPTING EARLY MEMBERS
        </div>
        <div style={{ fontSize: 88, fontWeight: 900, lineHeight: 1.05, marginBottom: 28, letterSpacing: '-0.01em' }}>
          さあ、あなたの<br/>「定例会」を。
        </div>
        <div style={{ fontSize: 20, opacity: 0.9, maxWidth: 720, lineHeight: 1.7, marginBottom: 40 }}>
          2026年12月オープン。<br/>
          先行予約受付中です。まずは会員登録から。
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: '#fff', color: A_COLORS.red, padding: '22px 42px', borderRadius: 999, fontSize: 24, fontWeight: 900, boxShadow: `6px 6px 0 ${A_COLORS.ink}` }}>
          🎲 boardgame-paradice.com で登録
        </div>
      </div>
    </AFrame>
  );
}

Object.assign(window, { ASlide1, ASlide2, ASlide3, ASlide4, ASlide4b, ASlide5, ASlide5b, ASlide6, ASlide7 });
