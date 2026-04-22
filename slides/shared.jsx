// 共通コンポーネント — 全案で使うモックUI、ロゴ、アイコンなど

// ───────────── ロゴマーク（サイコロ＋テキスト）─────────────
function BPLogo({ size = 28, color = 'currentColor', textColor = 'currentColor', tagline = true }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: size * 0.35 }}>
      <Die size={size} fill={color} dots="#fff" />
      <span style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontSize: size * 0.56, fontWeight: 800, letterSpacing: '0.04em', color: textColor }}>
          BOARDGAME PARADICE
        </span>
        {tagline && (
          <span style={{ fontSize: size * 0.32, letterSpacing: '0.28em', color: textColor, opacity: 0.6, marginTop: size * 0.1 }}>
            MEMBER SYSTEM
          </span>
        )}
      </span>
    </span>
  );
}

// サイコロ（1〜6 SVG）
function Die({ face = 5, size = 56, fill = '#E64A19', dots = '#fff', radius = 0.18 }) {
  const r = size * 0.07;
  const pos = {
    tl: [size * 0.25, size * 0.25], tr: [size * 0.75, size * 0.25],
    ml: [size * 0.25, size * 0.5],   mc: [size * 0.5,  size * 0.5],  mr: [size * 0.75, size * 0.5],
    bl: [size * 0.25, size * 0.75], br: [size * 0.75, size * 0.75],
  };
  const faces = {
    1: ['mc'], 2: ['tl', 'br'], 3: ['tl', 'mc', 'br'],
    4: ['tl', 'tr', 'bl', 'br'], 5: ['tl', 'tr', 'mc', 'bl', 'br'],
    6: ['tl', 'tr', 'ml', 'mr', 'bl', 'br'],
  };
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block' }}>
      <rect x="0" y="0" width={size} height={size} rx={size * radius} fill={fill} />
      {faces[face].map((k, i) => {
        const [cx, cy] = pos[k];
        return <circle key={i} cx={cx} cy={cy} r={r} fill={dots} />;
      })}
    </svg>
  );
}

// ───────────── モックUI：実際の会員システム画面の簡易再現 ─────────────
function MockBrowser({ children, url = 'boardgame-paradice.com/dashboard', style = {} }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 10, overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0,0,0,0.18), 0 4px 16px rgba(0,0,0,0.08)',
      border: '1px solid rgba(0,0,0,0.08)',
      fontFamily: "'Segoe UI','Hiragino Sans','Meiryo',sans-serif",
      color: '#1A2744',
      ...style,
    }}>
      <div style={{ background: '#e9ecef', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
        <span style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
        <div style={{ flex: 1, marginLeft: 10, background: '#fff', borderRadius: 6, padding: '4px 12px', fontSize: 11, color: '#64748b', fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace' }}>
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}

function MockNav({ active = 'ホーム' }) {
  const items = ['ホーム', '予定', '投票', 'ログ', 'サークル'];
  return (
    <div style={{
      background: '#0A1628', color: 'white',
      padding: '0 14px', display: 'flex', alignItems: 'center',
      height: 36, gap: 2, borderBottom: '2px solid #C4972A',
      fontSize: 10, whiteSpace: 'nowrap', overflow: 'hidden',
    }}>
      <span style={{ fontWeight: 700, letterSpacing: '0.04em', color: '#C4972A', marginRight: 12, fontSize: 10.5, display: 'flex', alignItems: 'center', gap: 5, whiteSpace: 'nowrap', flexShrink: 0 }}>
        <Die size={14} fill="#C4972A" />
        ボードゲームパラダイス
      </span>
      {items.map((n) => (
        <span key={n} style={{
          padding: '5px 9px', borderRadius: 4,
          background: n === active ? 'rgba(196,151,42,0.18)' : 'transparent',
          color: n === active ? '#E8D08A' : 'rgba(255,255,255,0.65)',
          fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0,
        }}>{n}</span>
      ))}
    </div>
  );
}

// ダッシュボード風モック
function MockDashboard() {
  const stats = [
    { icon: '📅', n: 3, l: '予定イベント', bg: '#0D2144' },
    { icon: '🗳️', n: 2, l: '開催中の投票', bg: '#C4972A' },
    { icon: '📝', n: 14, l: '投稿された感想', bg: '#1B6B3A' },
    { icon: '🎮', n: 28, l: 'マイゲーム', bg: '#7c3aed' },
    { icon: '📋', n: 1, l: '日程調整中', bg: '#0891b2' },
  ];
  return (
    <div>
      <MockNav active="ホーム" />
      <div style={{ padding: 20, background: '#F4F7FB' }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: '#0D2144', paddingBottom: 10, borderBottom: '3px solid #C4972A', marginBottom: 16 }}>
          🏠 ダッシュボード
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 10, marginBottom: 16 }}>
          {stats.map((s) => (
            <div key={s.l} style={{ background: s.bg, borderRadius: 8, padding: 12, color: 'white' }}>
              <div style={{ fontSize: 18 }}>{s.icon}</div>
              <div style={{ fontSize: 20, fontWeight: 800 }}>{s.n}</div>
              <div style={{ fontSize: 9, opacity: 0.85 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <div style={{ background: 'white', borderLeft: '3px solid #0D2144', borderRadius: 6, padding: 12, fontSize: 10 }}>
            <div style={{ fontWeight: 700, marginBottom: 6, color: '#0D2144' }}>📅 直近のイベント</div>
            <div style={{ padding: '6px 0', borderBottom: '1px solid #D8E2F0' }}>4月の定例会・日曜の部</div>
            <div style={{ padding: '6px 0', borderBottom: '1px solid #D8E2F0' }}>ウィングスパン マラソン会</div>
            <div style={{ padding: '6px 0' }}>GW特別企画・重ゲー会</div>
          </div>
          <div style={{ background: 'white', borderLeft: '3px solid #C4972A', borderRadius: 6, padding: 12, fontSize: 10 }}>
            <div style={{ fontWeight: 700, marginBottom: 6, color: '#0D2144' }}>🗳️ アクティブな投票</div>
            <div style={{ padding: '6px 0', borderBottom: '1px solid #D8E2F0' }}>次回遊ぶゲームを決めよう</div>
            <div style={{ padding: '6px 0' }}>重ゲー vs 軽ゲー どっち？</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// カタン風ミニボード
function CatanBoardMini() {
  // axial coords -> 19 standard hexes
  const hexes = [
    [0,-2],[1,-2],[2,-2],
    [-1,-1],[0,-1],[1,-1],[2,-1],
    [-2,0],[-1,0],[0,0],[1,0],[2,0],
    [-2,1],[-1,1],[0,1],[1,1],
    [-2,2],[-1,2],[0,2],
  ];
  // 地形: 砂漠1, 森4, 牧草地4, 畑4, 丘3, 山3
  const terrains = [
    'wheat','sheep','ore',
    'wood','hill','wheat','wood',
    'sheep','desert','wheat','ore','sheep',
    'hill','wood','sheep','ore',
    'wheat','wood','hill',
  ];
  const fill = {
    wheat: '#E8C547', sheep: '#A8D96C', wood: '#2F6B3E',
    ore: '#7A8999', hill: '#C86B3C', desert: '#E8D39A',
  };
  // 数字チップ (砂漠以外)
  const numbers = [9,12,10, 11,3,8,4, 5,null,6,5,9, 10,11,4,8, 3,6,2];
  const SIZE = 22; // hex radius
  const W = Math.sqrt(3) * SIZE;
  const H = 2 * SIZE;
  const cx = 150, cy = 90;
  const hexPath = (r) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = Math.PI / 180 * (60 * i - 30);
      pts.push(`${r * Math.cos(a)},${r * Math.sin(a)}`);
    }
    return `M ${pts.join(' L ')} Z`;
  };
  return (
    <svg viewBox="0 0 300 180" style={{ width: '100%', height: 140, display: 'block' }}>
      {/* 海 */}
      <rect x="0" y="0" width="300" height="180" fill="#0A1F2E" />
      {/* 海の波模様 */}
      {[30, 80, 150].map((y, i) => (
        <path key={i} d={`M 10 ${y} Q 30 ${y-3} 50 ${y} T 90 ${y} T 130 ${y}`} stroke="#1B3A52" strokeWidth="1" fill="none" opacity="0.6"/>
      ))}
      {hexes.map(([q, r], i) => {
        const x = cx + W * (q + r / 2);
        const y = cy + H * 0.75 * r;
        const t = terrains[i];
        const num = numbers[i];
        const isRed = num === 6 || num === 8;
        return (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <path d={hexPath(SIZE)} fill={fill[t]} stroke="#2A1810" strokeWidth="1.2" />
            {/* 地形模様 */}
            {t === 'wheat' && <g opacity="0.5"><line x1="-8" y1="-2" x2="-8" y2="8" stroke="#8B6F20" strokeWidth="1.5"/><line x1="0" y1="-4" x2="0" y2="8" stroke="#8B6F20" strokeWidth="1.5"/><line x1="8" y1="-2" x2="8" y2="8" stroke="#8B6F20" strokeWidth="1.5"/></g>}
            {t === 'wood' && <g opacity="0.6"><circle cx="-6" cy="2" r="3" fill="#1A4020"/><circle cx="4" cy="-4" r="4" fill="#1A4020"/><circle cx="6" cy="5" r="3" fill="#1A4020"/></g>}
            {t === 'sheep' && <g opacity="0.5"><circle cx="-5" cy="0" r="3" fill="#fff"/><circle cx="5" cy="3" r="2.5" fill="#fff"/></g>}
            {t === 'ore' && <g opacity="0.6"><path d="M -6 4 L -3 -4 L 2 3 Z" fill="#4A5565"/><path d="M 1 5 L 5 -2 L 8 4 Z" fill="#4A5565"/></g>}
            {t === 'hill' && <g opacity="0.5"><rect x="-7" y="-2" width="4" height="3" fill="#7A3A1A"/><rect x="-2" y="2" width="4" height="3" fill="#7A3A1A"/><rect x="3" y="-2" width="4" height="3" fill="#7A3A1A"/></g>}
            {/* 数字チップ */}
            {num !== null && (
              <g>
                <circle cx="0" cy="0" r="8" fill="#F2E9D8" stroke="#2A1810" strokeWidth="0.8"/>
                <text x="0" y="3.2" fontSize="9" fontWeight="900" fill={isRed ? '#C23B22' : '#2A1810'} textAnchor="middle" fontFamily="serif">{num}</text>
              </g>
            )}
            {t === 'desert' && <text x="0" y="3" fontSize="8" fontWeight="700" fill="#8B6F47" textAnchor="middle">desert</text>}
          </g>
        );
      })}
      {/* 入植地・道のサンプル */}
      <circle cx={cx + W*0.5} cy={cy - H*0.375} r="3" fill="#C23B22" stroke="#fff" strokeWidth="1"/>
      <circle cx={cx - W*1.5} cy={cy + H*0.375} r="3" fill="#E8D08A" stroke="#fff" strokeWidth="1"/>
      {/* 道 */}
      <line x1={cx + W*0.3} y1={cy - H*0.5} x2={cx + W*0.7} y2={cy - H*0.25} stroke="#C23B22" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1={cx - W*1.3} y1={cy + H*0.25} x2={cx - W*1.7} y2={cy + H*0.5} stroke="#E8D08A" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  );
}

// ゲームログ風モック
function MockGameLog() {
  return (
    <div>
      <MockNav active="ログ" />
      <div style={{ padding: 18, background: '#F4F7FB' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#0D2144', paddingBottom: 8, borderBottom: '3px solid #C4972A', marginBottom: 14 }}>
          🎲 ゲームログ · カタン 2026-04-18
        </div>
        <div style={{ background: '#0A1F2E', borderRadius: 6, padding: 12, marginBottom: 0 }}>
          <CatanBoardMini />
        </div>
        <div style={{ background: '#0A1628', color: '#E8D08A', padding: '6px 10px', borderRadius: '0 0 6px 6px', fontSize: 9, display: 'flex', justifyContent: 'center', gap: 14, marginBottom: 10 }}>
          <span>Turn 14 / 38</span>
          <span style={{ color: 'white' }}>▶ 再生中</span>
          <span>Player: <span style={{ color: '#E8D08A', fontWeight: 700 }}>ねね</span></span>
        </div>
        <div style={{ background: 'white', borderRadius: 6, padding: 10, fontSize: 9 }}>
          <div style={{ fontWeight: 700, marginBottom: 4, color: '#0D2144' }}>✨ AIハイライト</div>
          <div style={{ padding: '4px 0', color: '#1A2744' }}>• T.07 ねねが最長交易路を獲得</div>
          <div style={{ padding: '4px 0', color: '#1A2744' }}>• T.21 逆転の一手「羊×3交換」</div>
          <div style={{ padding: '4px 0', color: '#1A2744' }}>• T.34 決勝点到達の瞬間</div>
        </div>
      </div>
    </div>
  );
}

// スケジュール風モック
function MockEvents() {
  return (
    <div>
      <MockNav active="予定" />
      <div style={{ padding: 18, background: '#F4F7FB' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8, borderBottom: '3px solid #C4972A', marginBottom: 12 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#0D2144' }}>📅 スケジュール調整</div>
          <div style={{ background: '#0D2144', color: 'white', padding: '5px 10px', borderRadius: 4, fontSize: 9, fontWeight: 600 }}>＋ イベントを作成</div>
        </div>
        {[
          { t: '4月の定例会・日曜の部', d: '4/27(日) 13:00〜18:00', y: 8, n: 1, m: 2, s: '募集中' },
          { t: 'ウィングスパン マラソン会', d: '5/04(日) 10:00〜20:00', y: 6, n: 0, m: 3, s: '実施確定' },
          { t: 'GW特別企画・重ゲー会', d: '5/05(月) 13:00〜22:00', y: 5, n: 2, m: 1, s: '募集中' },
        ].map((e, i) => (
          <div key={i} style={{ background: 'white', borderLeft: '3px solid #0D2144', borderRadius: 6, padding: 10, marginBottom: 6, fontSize: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, color: '#0D2144' }}>{e.t}</div>
              <div style={{ fontSize: 9, color: '#6B7A99', marginTop: 2 }}>{e.d}</div>
            </div>
            <div style={{ display: 'flex', gap: 6, fontSize: 9 }}>
              <span style={{ background: '#1B6B3A', color: 'white', padding: '2px 6px', borderRadius: 3 }}>参加 {e.y}</span>
              <span style={{ background: '#C4972A', color: 'white', padding: '2px 6px', borderRadius: 3 }}>検討 {e.m}</span>
              <span style={{ background: e.s === '実施確定' ? '#1B6B3A' : '#0D2144', color: 'white', padding: '2px 6px', borderRadius: 3 }}>{e.s}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// 投票画面モック
function MockPolls() {
  const opts = [
    { n: 'テラフォーミング・マーズ', v: 5, p: 80 },
    { n: 'ウィングスパン', v: 3, p: 50 },
    { n: 'カタン', v: 4, p: 65 },
    { n: 'アグリコラ', v: 2, p: 35 },
  ];
  return (
    <div>
      <MockNav active="投票" />
      <div style={{ padding: 18, background: '#F4F7FB' }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#0D2144', paddingBottom: 8, borderBottom: '3px solid #C4972A', marginBottom: 12 }}>
          🗳️ 次回遊ぶゲームを決めよう
        </div>
        <div style={{ background: 'white', borderLeft: '3px solid #C4972A', borderRadius: 6, padding: 14, fontSize: 10 }}>
          <div style={{ fontSize: 9, color: '#6B7A99', marginBottom: 10 }}>締切: 4/26 23:59 · 投票者 6名</div>
          {opts.map((o) => (
            <div key={o.n} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontWeight: 600 }}>{o.n}</span>
                <span style={{ color: '#6B7A99' }}>{o.v}票</span>
              </div>
              <div style={{ height: 6, background: '#D8E2F0', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${o.p}%`, height: '100%', background: '#C4972A' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BPLogo, Die, MockBrowser, MockNav, MockDashboard, MockGameLog, CatanBoardMini, MockEvents, MockPolls });
