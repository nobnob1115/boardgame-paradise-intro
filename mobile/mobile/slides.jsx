// スマホ縦画面（390×844）用スライド群 — 案Aベース
// ポップ&カラフル — 赤／オレンジ／黄／ネイビー

const M_COLORS = {
  bg: '#FFF3E6',
  ink: '#2A1810',
  red: '#E63946',
  orange: '#F77F00',
  yellow: '#FCBF49',
  cream: '#FFF8EE',
  navy: '#1D3557',
};

const mFont = `'Hiragino Maru Gothic ProN','M PLUS Rounded 1c','Nunito',system-ui,sans-serif`;

// 密度によるパディング
function useDensity() {
  const d = (window.__MOBILE_TWEAKS || {}).density || 'normal';
  return d === 'cozy' ? { pad: 20, gap: 12, block: 14 } : { pad: 28, gap: 20, block: 22 };
}

// 共通フレーム
function MFrame({ children, bg = M_COLORS.bg, color = M_COLORS.ink, style = {} }) {
  const { pad } = useDensity();
  return (
    <div style={{
      width: '100%', height: '100%', background: bg, color,
      fontFamily: mFont, position: 'relative', overflow: 'hidden',
      boxSizing: 'border-box', padding: pad,
      display: 'flex', flexDirection: 'column',
      ...style,
    }}>{children}</div>
  );
}

// 小見出しタグ
function MTag({ children, bg = M_COLORS.red, color = '#fff' }) {
  return (
    <span style={{
      display: 'inline-block', background: bg, color,
      padding: '7px 16px', borderRadius: 999, fontSize: 14,
      fontWeight: 800, letterSpacing: '0.08em', alignSelf: 'flex-start',
    }}>{children}</span>
  );
}

// サイコロ装飾
function MDie({ face = 5, size = 56, fill = M_COLORS.red, dots = '#fff', style = {} }) {
  const r = size * 0.09;
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
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ display: 'block', ...style }}>
      <rect x="0" y="0" width={size} height={size} rx={size * 0.18} fill={fill} />
      {faces[face].map((k, i) => {
        const [cx, cy] = pos[k];
        return <circle key={i} cx={cx} cy={cy} r={r} fill={dots} />;
      })}
    </svg>
  );
}

// ───────── 1: 表紙 ─────────
function MSlide1({ active }) {
  return (
    <MFrame bg={M_COLORS.bg} style={{ padding: 0 }}>
      {/* 背景サイコロたち */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 70, left: 30, transform: `rotate(-14deg) ${active ? 'translateY(0)' : 'translateY(20px)'}`, opacity: active ? 1 : 0, transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s', filter: 'drop-shadow(0 8px 20px rgba(230,57,70,0.3))' }}>
          <MDie size={92} face={3} fill={M_COLORS.red} />
        </div>
        <div style={{ position: 'absolute', top: 140, right: 30, transform: `rotate(12deg) ${active ? 'translateY(0)' : 'translateY(30px)'}`, opacity: active ? 1 : 0, transition: 'all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s', filter: 'drop-shadow(0 10px 24px rgba(247,127,0,0.35))' }}>
          <MDie size={108} face={5} fill={M_COLORS.orange} />
        </div>
        <div style={{ position: 'absolute', bottom: 190, left: 40, transform: `rotate(22deg) ${active ? 'translateY(0)' : 'translateY(30px)'}`, opacity: active ? 1 : 0, transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s', filter: 'drop-shadow(0 8px 18px rgba(252,191,73,0.4))' }}>
          <MDie size={70} face={2} fill={M_COLORS.yellow} dots={M_COLORS.ink} />
        </div>
        <div style={{ position: 'absolute', bottom: 60, right: 60, transform: `rotate(-8deg) ${active ? 'translateY(0)' : 'translateY(30px)'}`, opacity: active ? 1 : 0, transition: 'all 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s', filter: 'drop-shadow(0 10px 22px rgba(29,53,87,0.35))' }}>
          <MDie size={86} face={6} fill={M_COLORS.navy} />
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '40px 28px' }}>
        <div style={{ fontSize: 14, letterSpacing: '0.4em', color: M_COLORS.red, fontWeight: 800, marginBottom: 24, opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.6s ease 0.5s' }}>
          2026.12 OPEN
        </div>
        <div className="m-fontscale-heading" style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: 20, opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) 0.55s' }}>
          ボードゲーム、<br/>
          <span style={{ color: M_COLORS.red }}>もっと本気で</span>。
        </div>
        <div className="m-fontscale-body" style={{ fontSize: 17, color: M_COLORS.ink, opacity: active ? 0.75 : 0, maxWidth: 320, lineHeight: 1.7, fontWeight: 600, transform: active ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease 0.7s' }}>
          定例会を運営するサークルのための、<br/>
          ボードゲーム専用レンタルスペース<br/>＆ 会員システム
        </div>
        <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 10, opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.6s ease 0.9s' }}>
          <MDie size={24} fill={M_COLORS.red} />
          <span style={{ fontSize: 13, fontWeight: 800, letterSpacing: '0.14em' }}>BOARDGAME PARADICE</span>
        </div>
      </div>
    </MFrame>
  );
}

// ───────── 2: 課題提起 ─────────
function MSlide2({ active }) {
  const { gap, block } = useDensity();
  const pains = [
    '会場探しが毎回たいへん',
    '誰が何を持ってくるか当日までわからない',
    '次回のゲーム決めでグダる',
    'せっかくの名勝負が記録に残らない',
  ];
  return (
    <MFrame>
      <MTag bg={M_COLORS.navy}>01 / 課題</MTag>
      <div className="m-fontscale-heading" style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.2, marginTop: 18, marginBottom: 22, opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) 0.15s' }}>
        サークル運営、<br/>
        <span style={{ background: `linear-gradient(transparent 55%, ${M_COLORS.yellow} 55%)`, padding: '0 4px' }}>
          「ゲーム以外」
        </span>の<br/>負担が多すぎる。
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: gap * 0.7, flex: 1 }}>
        {pains.map((p, i) => (
          <div key={i} style={{
            background: M_COLORS.cream, borderRadius: 18, padding: `${block}px ${block + 4}px`,
            display: 'flex', alignItems: 'center', gap: 18,
            boxShadow: '0 5px 0 rgba(42,24,16,0.1)',
            border: `2.5px solid ${M_COLORS.ink}`,
            opacity: active ? 1 : 0,
            transform: active ? 'translateX(0)' : 'translateX(-20px)',
            transition: `all 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) ${0.3 + i * 0.08}s`,
          }}>
            <div style={{ fontSize: 34, fontWeight: 900, color: M_COLORS.red, minWidth: 42, lineHeight: 1 }}>
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="m-fontscale-body" style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.4 }}>{p}</div>
          </div>
        ))}
      </div>
    </MFrame>
  );
}

// ───────── 3: ソリューション概観 ─────────
function MSlide3({ active }) {
  const { gap } = useDensity();
  const fullFeatures = [
    { icon: '📅', t: 'スケジュール調整', d: '出欠を一発集計' },
    { icon: '🗳️', t: 'ゲーム投票', d: '次回を全員で決める' },
    { icon: '🎲', t: 'ゲームログ', d: 'AIが名場面を抽出' },
    { icon: '📝', t: '感想・レビュー', d: '余韻もストック' },
    { icon: '📦', t: 'ロッカー', d: '常設ゲーム棚を' },
    { icon: '👥', t: 'サークル管理', d: 'メンバー・権限管理' },
  ];
  const count = (window.__MOBILE_TWEAKS || {}).featureCount || 6;
  const features = fullFeatures.slice(0, count);
  return (
    <MFrame>
      <MTag>02 / ソリューション</MTag>
      <div className="m-fontscale-heading" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginTop: 16, marginBottom: 24, opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s ease 0.15s' }}>
        定例会のすべてを、<br/>ひとつの<span style={{ color: M_COLORS.red }}>会員システム</span>に。
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: gap * 0.6, flex: 1 }}>
        {features.map((f, i) => {
          const shadowColors = [M_COLORS.red, M_COLORS.orange, M_COLORS.navy, M_COLORS.yellow, M_COLORS.red, M_COLORS.orange];
          return (
            <div key={i} style={{
              background: 'white', borderRadius: 16, padding: 16,
              border: `2.5px solid ${M_COLORS.ink}`, boxShadow: `4px 4px 0 ${shadowColors[i]}`,
              display: 'flex', flexDirection: 'column',
              opacity: active ? 1 : 0,
              transform: active ? 'scale(1)' : 'scale(0.9)',
              transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.25 + i * 0.07}s`,
            }}>
              <div style={{ fontSize: 32, marginBottom: 8, lineHeight: 1 }}>{f.icon}</div>
              <div className="m-fontscale-body" style={{ fontSize: 16, fontWeight: 900, marginBottom: 4, lineHeight: 1.3 }}>{f.t}</div>
              <div style={{ fontSize: 12, lineHeight: 1.4, color: M_COLORS.ink, opacity: 0.7 }}>{f.d}</div>
            </div>
          );
        })}
      </div>
    </MFrame>
  );
}

// ───────── 4: ゲームログ推し ─────────
function MSlide4({ active }) {
  return (
    <MFrame bg={M_COLORS.navy} color="#fff">
      <MTag bg={M_COLORS.yellow} color={M_COLORS.navy}>03 / 目玉機能</MTag>
      <div className="m-fontscale-heading" style={{ fontSize: 42, fontWeight: 900, lineHeight: 1.1, marginTop: 16, marginBottom: 16, opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s ease 0.15s' }}>
        <span style={{ color: M_COLORS.yellow }}>AIハイライト</span>付き<br/>
        ゲームログ＆<br/>リプレイ
      </div>
      <div className="m-fontscale-body" style={{ fontSize: 16, lineHeight: 1.7, opacity: active ? 0.88 : 0, marginBottom: 20, transition: 'all 0.6s ease 0.3s' }}>
        盤面も、手札も、ターンごとに自動で記録。AIが「逆転の一手」などの名場面を抽出し、音声解説つきでリプレイできます。
      </div>

      {/* カタン盤モック */}
      <div style={{
        background: '#0A1F2E', borderRadius: 12, padding: 10, marginBottom: 14,
        border: '1px solid rgba(255,255,255,0.1)',
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.97)',
        transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s',
      }}>
        <MiniCatan />
        <div style={{ color: M_COLORS.yellow, fontSize: 11, display: 'flex', justifyContent: 'space-between', padding: '8px 4px 0', fontWeight: 700 }}>
          <span>Turn 14 / 38</span>
          <span style={{ color: '#fff' }}>▶ 再生中</span>
          <span>ねね</span>
        </div>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.2)',
        borderRadius: 12, padding: 14, fontSize: 14,
        opacity: active ? 1 : 0,
        transform: active ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.6s ease 0.7s',
      }}>
        <div style={{ fontWeight: 900, marginBottom: 8, color: M_COLORS.yellow, fontSize: 14, letterSpacing: '0.04em' }}>✨ AIハイライト</div>
        <div style={{ padding: '4px 0', lineHeight: 1.5 }}>• T.07 最長交易路を獲得</div>
        <div style={{ padding: '4px 0', lineHeight: 1.5 }}>• T.21 逆転の一手「羊×3交換」</div>
        <div style={{ padding: '4px 0', lineHeight: 1.5 }}>• T.34 決勝点到達の瞬間</div>
      </div>
    </MFrame>
  );
}

// ミニカタン（縦型に最適化）
function MiniCatan() {
  const hexes = [
    [0,-2],[1,-2],[2,-2],
    [-1,-1],[0,-1],[1,-1],[2,-1],
    [-2,0],[-1,0],[0,0],[1,0],[2,0],
    [-2,1],[-1,1],[0,1],[1,1],
    [-2,2],[-1,2],[0,2],
  ];
  const terrains = ['wheat','sheep','ore','wood','hill','wheat','wood','sheep','desert','wheat','ore','sheep','hill','wood','sheep','ore','wheat','wood','hill'];
  const numbers = [9,12,10,11,3,8,4,5,null,6,5,9,10,11,4,8,3,6,2];
  const fill = { wheat: '#E8C547', sheep: '#A8D96C', wood: '#2F6B3E', ore: '#7A8999', hill: '#C86B3C', desert: '#E8D39A' };
  const SIZE = 26, W = Math.sqrt(3) * SIZE, H = 2 * SIZE, cx = 165, cy = 105;
  const hexPath = (r) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const a = Math.PI / 180 * (60 * i - 30);
      pts.push(`${r * Math.cos(a)},${r * Math.sin(a)}`);
    }
    return `M ${pts.join(' L ')} Z`;
  };
  return (
    <svg viewBox="0 0 330 210" style={{ width: '100%', height: 180, display: 'block' }}>
      <rect x="0" y="0" width="330" height="210" fill="#0A1F2E" />
      {hexes.map(([q, r], i) => {
        const x = cx + W * (q + r / 2);
        const y = cy + H * 0.75 * r;
        const t = terrains[i];
        const num = numbers[i];
        const isRed = num === 6 || num === 8;
        return (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <path d={hexPath(SIZE)} fill={fill[t]} stroke="#2A1810" strokeWidth="1.3" />
            {num !== null && (
              <g>
                <circle cx="0" cy="0" r="9" fill="#F2E9D8" stroke="#2A1810" strokeWidth="0.8"/>
                <text x="0" y="3.5" fontSize="10" fontWeight="900" fill={isRed ? '#C23B22' : '#2A1810'} textAnchor="middle" fontFamily="serif">{num}</text>
              </g>
            )}
          </g>
        );
      })}
      <circle cx={cx + W*0.5} cy={cy - H*0.375} r="3.5" fill="#C23B22" stroke="#fff" strokeWidth="1"/>
      <circle cx={cx - W*1.5} cy={cy + H*0.375} r="3.5" fill="#E8D08A" stroke="#fff" strokeWidth="1"/>
    </svg>
  );
}

// ───────── 5: 撮影システム（独自ハード）─────────
function MSlide5({ active }) {
  return (
    <MFrame>
      <MTag>03 · 自社開発ハード</MTag>
      <div className="m-fontscale-heading" style={{ fontSize: 38, fontWeight: 900, lineHeight: 1.15, marginTop: 16, marginBottom: 10, opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s ease 0.15s' }}>
        <span style={{ color: M_COLORS.red }}>盤面も、手札も</span>、<br/>
        ちゃんと残る。
      </div>
      <div className="m-fontscale-body" style={{ fontSize: 14, color: M_COLORS.ink, opacity: active ? 0.72 : 0, marginBottom: 18, lineHeight: 1.6, transition: 'all 0.6s ease 0.3s' }}>
        俯瞰カメラが盤面を、手元カメラがチェスクロックに連動して手札を自動撮影します。
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
        <div style={{
          background: 'white', borderRadius: 16, padding: 16,
          border: `2.5px solid ${M_COLORS.ink}`, boxShadow: `5px 5px 0 ${M_COLORS.orange}`,
          opacity: active ? 1 : 0,
          transform: active ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'all 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) 0.35s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{ background: M_COLORS.orange, color: '#fff', padding: '4px 10px', borderRadius: 6, fontSize: 13, fontWeight: 900 }}>A</div>
            <div className="m-fontscale-body" style={{ fontSize: 17, fontWeight: 900 }}>盤面 · 俯瞰カメラ</div>
          </div>
          <TopDownMini />
          <div style={{ fontSize: 12, color: M_COLORS.ink, opacity: 0.75, lineHeight: 1.55, marginTop: 8 }}>
            テーブル上方の俯瞰カメラがターン切替時に自動撮影。
          </div>
        </div>

        <div style={{
          background: 'white', borderRadius: 16, padding: 16,
          border: `2.5px solid ${M_COLORS.ink}`, boxShadow: `5px 5px 0 ${M_COLORS.red}`,
          opacity: active ? 1 : 0,
          transform: active ? 'translateX(0)' : 'translateX(-20px)',
          transition: 'all 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) 0.5s',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div style={{ background: M_COLORS.red, color: '#fff', padding: '4px 10px', borderRadius: 6, fontSize: 13, fontWeight: 900 }}>B</div>
            <div className="m-fontscale-body" style={{ fontSize: 17, fontWeight: 900 }}>手札 · クロック連動</div>
          </div>
          <HandCamMini />
          <div style={{ fontSize: 12, color: M_COLORS.ink, opacity: 0.75, lineHeight: 1.55, marginTop: 8 }}>
            チェスクロック連動で手札も自動記録。相手の手札まで辿れます。
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, marginTop: 14,
        padding: '10px 14px', background: M_COLORS.cream,
        borderRadius: 12, border: `2px dashed ${M_COLORS.ink}`,
        opacity: active ? 1 : 0, transition: 'all 0.5s ease 0.75s',
      }}>
        <div style={{ fontSize: 20 }}>💡</div>
        <div style={{ fontSize: 12, fontWeight: 800, color: M_COLORS.ink, lineHeight: 1.4 }}>
          手札まで記録されるのはおそらく世界初。
        </div>
      </div>
    </MFrame>
  );
}

function TopDownMini() {
  return (
    <svg viewBox="0 0 340 130" style={{ width: '100%', height: 110 }}>
      <rect x="30" y="8" width="280" height="5" fill={M_COLORS.ink} />
      <g transform="translate(170, 13)">
        <rect x="-14" y="0" width="28" height="18" rx="3" fill={M_COLORS.orange} stroke={M_COLORS.ink} strokeWidth="2" />
        <circle cx="0" cy="12" r="5" fill={M_COLORS.ink} />
        <circle cx="0" cy="12" r="2.5" fill={M_COLORS.yellow} />
      </g>
      <path d="M 170 32 L 70 110 L 270 110 Z" fill={M_COLORS.yellow} opacity="0.3" />
      <path d="M 170 32 L 70 110" stroke={M_COLORS.orange} strokeWidth="1.5" strokeDasharray="4 3" />
      <path d="M 170 32 L 270 110" stroke={M_COLORS.orange} strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x="50" y="110" width="240" height="14" rx="3" fill={M_COLORS.ink} />
      <rect x="75" y="94" width="190" height="18" rx="2" fill="#8B6F47" stroke={M_COLORS.ink} strokeWidth="1.5" />
      <circle cx="120" cy="103" r="4" fill={M_COLORS.red} />
      <circle cx="150" cy="103" r="4" fill={M_COLORS.navy} />
      <rect x="175" y="99" width="8" height="8" fill={M_COLORS.yellow} stroke={M_COLORS.ink} strokeWidth="1" />
      <rect x="200" y="99" width="8" height="8" fill={M_COLORS.red} stroke={M_COLORS.ink} strokeWidth="1" />
      <circle cx="235" cy="103" r="4" fill={M_COLORS.navy} />
    </svg>
  );
}

function HandCamMini() {
  return (
    <svg viewBox="0 0 340 130" style={{ width: '100%', height: 110 }}>
      <rect x="14" y="74" width="160" height="10" rx="2" fill="#E8E3D8" stroke={M_COLORS.ink} strokeWidth="1.8" />
      {[0,1,2,3].map((i) => (
        <g key={i} transform={`translate(${36 + i * 32}, 26) rotate(${(i-1.5) * 3})`}>
          <rect x="-18" y="0" width="36" height="50" rx="3" fill="#fff" stroke={M_COLORS.ink} strokeWidth="1.6" />
          <rect x="-14" y="4" width="28" height="12" rx="2" fill={[M_COLORS.red, M_COLORS.navy, M_COLORS.yellow, M_COLORS.orange][i]} />
          <line x1="-12" y1="26" x2="12" y2="26" stroke={M_COLORS.ink} strokeWidth="1" opacity="0.5"/>
          <line x1="-12" y1="34" x2="12" y2="34" stroke={M_COLORS.ink} strokeWidth="1" opacity="0.5"/>
        </g>
      ))}
      <g transform="translate(170, 44)">
        <rect x="-3" y="-30" width="6" height="30" fill={M_COLORS.ink} />
        <rect x="-12" y="-10" width="24" height="16" rx="3" fill={M_COLORS.red} stroke={M_COLORS.ink} strokeWidth="2" />
        <circle cx="0" cy="-2" r="4" fill={M_COLORS.ink} />
        <circle cx="0" cy="-2" r="2" fill={M_COLORS.yellow} />
      </g>
      <g transform="translate(240, 68)">
        <rect x="0" y="0" width="84" height="42" rx="5" fill={M_COLORS.ink} />
        <rect x="5" y="5" width="35" height="24" rx="2" fill={M_COLORS.yellow} />
        <text x="22.5" y="22" fontSize="11" fontWeight="900" fill={M_COLORS.ink} textAnchor="middle" fontFamily="monospace">11:49</text>
        <rect x="44" y="5" width="35" height="24" rx="2" fill="#333" />
        <text x="61.5" y="22" fontSize="11" fontWeight="900" fill="#888" textAnchor="middle" fontFamily="monospace">12:00</text>
        <circle cx="22.5" cy="36" r="2.5" fill={M_COLORS.red}>
          <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite"/>
        </circle>
      </g>
      <path d="M 182 46 Q 230 30 270 62" stroke={M_COLORS.orange} strokeWidth="2" fill="none" strokeDasharray="5 4" />
      <text x="215" y="18" fontSize="10" fontWeight="800" fill={M_COLORS.orange}>ターン切替で自動</text>
    </svg>
  );
}

// ───────── 6: 実画面 ─────────
function MSlide6({ active }) {
  return (
    <MFrame>
      <MTag>04 / 実際の画面</MTag>
      <div className="m-fontscale-heading" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginTop: 16, marginBottom: 20, opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s ease 0.15s' }}>
        すぐに使える、<br/>迷わない設計。
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, flex: 1 }}>
        {[
          { title: 'ダッシュボード', desc: '統計と最近の活動が一目で。', comp: <MobileDashboard />, color: M_COLORS.red },
          { title: 'ゲーム投票', desc: '次回やるゲームを全員で。', comp: <MobilePolls />, color: M_COLORS.orange },
        ].map((s, i) => (
          <div key={i} style={{
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(20px)',
            transition: `all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) ${0.3 + i * 0.12}s`,
          }}>
            <PhoneMock>{s.comp}</PhoneMock>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 8 }}>
              <div style={{ fontSize: 15, fontWeight: 900, color: s.color }}>▲ {s.title}</div>
              <div style={{ fontSize: 12, color: M_COLORS.ink, opacity: 0.7 }}>{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </MFrame>
  );
}

// スマホ中のスマホモック
function PhoneMock({ children }) {
  return (
    <div style={{
      background: '#0A1628', borderRadius: 14, padding: 6,
      boxShadow: '0 8px 24px rgba(0,0,0,0.15), 0 2px 6px rgba(0,0,0,0.08)',
    }}>
      <div style={{ background: '#fff', borderRadius: 9, overflow: 'hidden', fontFamily: "'Segoe UI','Hiragino Sans','Meiryo',sans-serif", color: '#1A2744' }}>
        {children}
      </div>
    </div>
  );
}

function MobileDashboard() {
  return (
    <div>
      <div style={{ background: '#0A1628', color: '#C4972A', padding: '8px 12px', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 6, borderBottom: '2px solid #C4972A' }}>
        <MDie size={14} fill="#C4972A" />
        ボードゲームパラダイス
      </div>
      <div style={{ padding: 12, background: '#F4F7FB' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#0D2144', marginBottom: 8 }}>🏠 ダッシュボード</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6, marginBottom: 8 }}>
          {[
            { icon: '📅', n: 3, l: '予定', bg: '#0D2144' },
            { icon: '🗳️', n: 2, l: '投票', bg: '#C4972A' },
            { icon: '📝', n: 14, l: '感想', bg: '#1B6B3A' },
          ].map((s) => (
            <div key={s.l} style={{ background: s.bg, borderRadius: 6, padding: 8, color: 'white' }}>
              <div style={{ fontSize: 14 }}>{s.icon}</div>
              <div style={{ fontSize: 16, fontWeight: 900 }}>{s.n}</div>
              <div style={{ fontSize: 9, opacity: 0.85 }}>{s.l}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'white', borderLeft: '3px solid #0D2144', borderRadius: 4, padding: 8, fontSize: 10 }}>
          <div style={{ fontWeight: 800, marginBottom: 4, color: '#0D2144' }}>📅 直近のイベント</div>
          <div style={{ padding: '3px 0', borderBottom: '1px solid #D8E2F0' }}>4月の定例会・日曜の部</div>
          <div style={{ padding: '3px 0' }}>GW特別企画・重ゲー会</div>
        </div>
      </div>
    </div>
  );
}

function MobilePolls() {
  const opts = [
    { n: 'テラフォーミング・マーズ', v: 5, p: 80 },
    { n: 'ウィングスパン', v: 3, p: 50 },
    { n: 'カタン', v: 4, p: 65 },
  ];
  return (
    <div>
      <div style={{ background: '#0A1628', color: '#C4972A', padding: '8px 12px', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 6, borderBottom: '2px solid #C4972A' }}>
        <MDie size={14} fill="#C4972A" />
        ボードゲームパラダイス
      </div>
      <div style={{ padding: 12, background: '#F4F7FB' }}>
        <div style={{ fontSize: 12, fontWeight: 800, color: '#0D2144', marginBottom: 8 }}>🗳️ 次回遊ぶゲームを決めよう</div>
        <div style={{ background: 'white', borderLeft: '3px solid #C4972A', borderRadius: 4, padding: 10, fontSize: 10 }}>
          <div style={{ fontSize: 9, color: '#6B7A99', marginBottom: 6 }}>締切: 4/26 · 投票者 6名</div>
          {opts.map((o) => (
            <div key={o.n} style={{ marginBottom: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2, fontSize: 10, fontWeight: 700 }}>
                <span>{o.n}</span>
                <span style={{ color: '#6B7A99' }}>{o.v}票</span>
              </div>
              <div style={{ height: 5, background: '#D8E2F0', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${o.p}%`, height: '100%', background: '#C4972A' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ───────── 7: レンタルスペース ─────────
function MSlide7({ active }) {
  const { gap } = useDensity();
  const perks = [
    { icon: '🚪', t: '20㎡の完全個室', d: '邪魔されないあなた達の空間。' },
    { icon: '🪑', t: 'ゲーム向き大テーブル', d: '長時間でも疲れにくい設計。' },
    { icon: '🛋️', t: '沈むソファチェア', d: '4〜6時間でも腰が痛くならない。' },
    { icon: '🔐', t: 'サークル専用ロッカー', d: '次回から手ぶらでOK。' },
  ];
  return (
    <MFrame>
      <MTag>04 · レンタルスペース</MTag>
      <div className="m-fontscale-heading" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginTop: 16, marginBottom: 8, opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s ease 0.15s' }}>
        <span style={{ color: M_COLORS.red }}>あなた達だけ</span>の、<br/>
        定例会のお部屋。
      </div>
      <div className="m-fontscale-body" style={{ fontSize: 14, color: M_COLORS.ink, opacity: active ? 0.72 : 0, marginBottom: 16, lineHeight: 1.6, transition: 'all 0.6s ease 0.3s' }}>
        20㎡の個室を丸ごと占有。ボードゲームサークルのためだけに設計されたスペース。
      </div>

      {/* ルームレイアウト */}
      <div style={{
        background: 'white', borderRadius: 14, padding: 12,
        border: `2.5px solid ${M_COLORS.ink}`, boxShadow: `5px 5px 0 ${M_COLORS.navy}`,
        marginBottom: 14,
        opacity: active ? 1 : 0,
        transform: active ? 'scale(1)' : 'scale(0.95)',
        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.35s',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
          <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: '0.08em' }}>ROOM LAYOUT</div>
          <div style={{ fontSize: 11, fontWeight: 800, color: M_COLORS.red, background: M_COLORS.cream, padding: '3px 8px', borderRadius: 999 }}>20㎡ / 個室</div>
        </div>
        <RoomLayoutMini />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {perks.map((p, i) => (
          <div key={i} style={{
            background: 'white', borderRadius: 12, padding: 12,
            border: `2px solid ${M_COLORS.ink}`,
            boxShadow: `3px 3px 0 ${[M_COLORS.red, M_COLORS.orange, M_COLORS.yellow, M_COLORS.navy][i]}`,
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(12px)',
            transition: `all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1) ${0.5 + i * 0.07}s`,
          }}>
            <div style={{ fontSize: 22, marginBottom: 4, lineHeight: 1 }}>{p.icon}</div>
            <div style={{ fontSize: 13, fontWeight: 900, marginBottom: 3, lineHeight: 1.3 }}>{p.t}</div>
            <div style={{ fontSize: 10.5, lineHeight: 1.45, color: M_COLORS.ink, opacity: 0.72 }}>{p.d}</div>
          </div>
        ))}
      </div>
    </MFrame>
  );
}

function RoomLayoutMini() {
  return (
    <svg viewBox="0 0 340 210" style={{ width: '100%', height: 170 }}>
      <rect x="8" y="8" width="324" height="194" fill={M_COLORS.cream} stroke={M_COLORS.ink} strokeWidth="2.5" />
      <rect x="8" y="22" width="3" height="36" fill="#fff" stroke={M_COLORS.ink} strokeWidth="2" />
      <path d="M 11 22 A 36 36 0 0 1 47 58" fill="none" stroke={M_COLORS.ink} strokeWidth="1" strokeDasharray="3 3" />
      <text x="14" y="78" fontSize="10" fontWeight="700" fill={M_COLORS.ink}>ENTRY</text>

      <rect x="90" y="62" width="160" height="86" rx="6" fill="#A88560" stroke={M_COLORS.ink} strokeWidth="2" />
      <rect x="98" y="70" width="144" height="70" rx="3" fill="#C4A378" stroke={M_COLORS.ink} strokeWidth="0.8" opacity="0.6" />
      <circle cx="130" cy="98" r="4" fill={M_COLORS.red} stroke={M_COLORS.ink} strokeWidth="1"/>
      <circle cx="150" cy="108" r="4" fill={M_COLORS.navy} stroke={M_COLORS.ink} strokeWidth="1"/>
      <rect x="170" y="94" width="8" height="8" fill={M_COLORS.yellow} stroke={M_COLORS.ink} strokeWidth="1"/>
      <rect x="195" y="115" width="8" height="8" fill={M_COLORS.orange} stroke={M_COLORS.ink} strokeWidth="1"/>
      <circle cx="220" cy="104" r="4" fill={M_COLORS.red} stroke={M_COLORS.ink} strokeWidth="1"/>
      <text x="168" y="165" fontSize="10" fontWeight="800" fill={M_COLORS.ink} textAnchor="middle">ゲーム向け大テーブル</text>

      <rect x="110" y="42" width="120" height="16" rx="4" fill={M_COLORS.red} stroke={M_COLORS.ink} strokeWidth="1.5" />
      <rect x="110" y="152" width="120" height="16" rx="4" fill={M_COLORS.red} stroke={M_COLORS.ink} strokeWidth="1.5" />
      <rect x="58" y="72" width="18" height="66" rx="4" fill={M_COLORS.red} stroke={M_COLORS.ink} strokeWidth="1.5" />
      <rect x="264" y="72" width="18" height="66" rx="4" fill={M_COLORS.red} stroke={M_COLORS.ink} strokeWidth="1.5" />
      <text x="168" y="185" fontSize="10" fontWeight="800" fill={M_COLORS.ink} textAnchor="middle">ソファ型チェア ×8〜10席</text>

      <g transform="translate(295, 82)">
        <rect x="0" y="0" width="34" height="88" fill="#fff" stroke={M_COLORS.ink} strokeWidth="2" />
        {[0,1,2].map(i => (
          <g key={i}>
            <rect x="3" y={3 + i*28} width="28" height="24" fill={M_COLORS.yellow} stroke={M_COLORS.ink} strokeWidth="1" />
            <circle cx="26" cy={15 + i*28} r="1.5" fill={M_COLORS.ink} />
          </g>
        ))}
      </g>
      <text x="312" y="183" fontSize="9" fontWeight="800" fill={M_COLORS.ink} textAnchor="middle">🔐</text>
    </svg>
  );
}

// ───────── 8: 料金プラン ─────────
function MSlide8({ active }) {
  const plans = [
    { name: 'ライト', price: '10,000', freq: '月1回まで', note: '試しに使ってみたい', accent: M_COLORS.yellow, featured: false },
    { name: 'スタンダード', price: '15,000', freq: '平日のみ月4回', note: '平日中心のサークルに', accent: M_COLORS.orange, featured: true },
    { name: 'プレミアム', price: '25,000', freq: '土日込み月4回', note: '週末ガッツリ派に', accent: M_COLORS.red, featured: false },
  ];
  return (
    <MFrame>
      <MTag>05 / 料金プラン</MTag>
      <div className="m-fontscale-heading" style={{ fontSize: 40, fontWeight: 900, lineHeight: 1.15, marginTop: 16, marginBottom: 8, opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(16px)', transition: 'all 0.7s ease 0.15s' }}>
        サークルで<br/>割ればおトク。
      </div>
      <div className="m-fontscale-body" style={{ fontSize: 14, color: M_COLORS.ink, opacity: active ? 0.7 : 0, marginBottom: 16, lineHeight: 1.6, transition: 'all 0.6s ease 0.3s' }}>
        サークル単位の月額制。ロッカー・配信機材レンタル込み。
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {plans.map((p, i) => (
          <div key={p.name} style={{
            background: p.featured ? p.accent : 'white',
            color: p.featured ? '#fff' : M_COLORS.ink,
            borderRadius: 16, padding: '18px 20px',
            border: `2.5px solid ${M_COLORS.ink}`,
            boxShadow: p.featured ? `5px 5px 0 ${M_COLORS.ink}` : `5px 5px 0 ${p.accent}`,
            position: 'relative',
            opacity: active ? 1 : 0,
            transform: active ? 'translateX(0)' : 'translateX(-20px)',
            transition: `all 0.55s cubic-bezier(0.2, 0.8, 0.2, 1) ${0.3 + i * 0.1}s`,
          }}>
            {p.featured && (
              <div style={{ position: 'absolute', top: -12, right: 14, background: M_COLORS.ink, color: M_COLORS.yellow, fontSize: 11, fontWeight: 900, padding: '4px 10px', borderRadius: 999, letterSpacing: '0.08em' }}>
                ★ おすすめ
              </div>
            )}
            <div style={{ fontSize: 14, fontWeight: 900, letterSpacing: '0.1em', marginBottom: 6 }}>
              {p.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 10 }}>
              <div style={{ fontSize: 36, fontWeight: 900, lineHeight: 1 }}>¥{p.price}</div>
              <div style={{ fontSize: 12, fontWeight: 700, opacity: 0.85 }}>/月</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 800, padding: '6px 10px', borderRadius: 8, background: p.featured ? 'rgba(255,255,255,0.22)' : M_COLORS.cream, marginBottom: 6, display: 'inline-block' }}>
              {p.freq}
            </div>
            <div style={{ fontSize: 12, opacity: 0.85, lineHeight: 1.5 }}>{p.note}</div>
          </div>
        ))}
      </div>
    </MFrame>
  );
}

// ───────── 9: CTA ─────────
function MSlide9({ active }) {
  return (
    <MFrame bg={M_COLORS.red} color="#fff" style={{ padding: 0 }}>
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 60, left: 30, transform: `rotate(-12deg) ${active ? 'translateY(0)' : 'translateY(20px)'}`, opacity: active ? 1 : 0, transition: 'all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s' }}>
          <MDie size={78} face={6} fill={M_COLORS.yellow} dots={M_COLORS.ink} />
        </div>
        <div style={{ position: 'absolute', top: 170, right: 20, transform: `rotate(18deg) ${active ? 'translateY(0)' : 'translateY(30px)'}`, opacity: active ? 1 : 0, transition: 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s' }}>
          <MDie size={60} face={1} fill={M_COLORS.cream} dots={M_COLORS.ink} />
        </div>
        <div style={{ position: 'absolute', bottom: 90, right: 40, transform: `rotate(-8deg) ${active ? 'translateY(0)' : 'translateY(30px)'}`, opacity: active ? 1 : 0, transition: 'all 1.1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s' }}>
          <MDie size={92} face={3} fill={M_COLORS.navy} />
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '40px 28px' }}>
        <div style={{ fontSize: 12, letterSpacing: '0.32em', fontWeight: 800, opacity: active ? 0.85 : 0, marginBottom: 20, transform: active ? 'translateY(0)' : 'translateY(10px)', transition: 'all 0.6s ease 0.5s' }}>
          EARLY MEMBERS
        </div>
        <div className="m-fontscale-heading" style={{ fontSize: 54, fontWeight: 900, lineHeight: 1.05, marginBottom: 20, letterSpacing: '-0.02em', opacity: active ? 1 : 0, transform: active ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) 0.55s' }}>
          さあ、あなたの<br/>「定例会」を。
        </div>
        <div className="m-fontscale-body" style={{ fontSize: 16, opacity: active ? 0.92 : 0, lineHeight: 1.7, marginBottom: 36, fontWeight: 600, transform: active ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.7s ease 0.7s' }}>
          2026年12月オープン。<br/>先行予約受付中です。
        </div>
        <a
          className="m-cta-btn"
          href="https://www.boardgame-paradice.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            cursor: 'pointer', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: '#fff', color: M_COLORS.red,
            padding: '20px 32px', borderRadius: 999,
            fontSize: 20, fontWeight: 900, fontFamily: mFont,
            boxShadow: `6px 6px 0 ${M_COLORS.ink}`,
            opacity: active ? 1 : 0, transform: active ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
            transition: 'all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s',
          }}>
          🎲 会員登録する
        </a>
        <div style={{ fontSize: 12, opacity: active ? 0.8 : 0, marginTop: 20, fontWeight: 600, transition: 'all 0.6s ease 1.1s' }}>
          boardgame-paradice.com
        </div>
      </div>
    </MFrame>
  );
}

Object.assign(window, {
  MSlide1, MSlide2, MSlide3, MSlide4, MSlide5, MSlide6, MSlide7, MSlide8, MSlide9,
  M_COLORS, MDie,
});
