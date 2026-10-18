// Lightweight animated illustrations for each flagship project.
// Pure SVG/CSS: animations only run once the panel scrolls into view (.viz.in).

const Interviewer = () => (
  <div className="v-interviewer">
    <div className="bubble q">Walk me through a production RAG pipeline.</div>
    <div className="bubble a">
      <span className="wave">
        {Array.from({ length: 14 }).map((_, i) => <i key={i} style={{ animationDelay: `${(i % 7) * 0.09}s` }} />)}
      </span>
      <span className="mono">listening…</span>
    </div>
    <div className="score-row">
      <svg viewBox="0 0 64 64" className="score-ring" aria-hidden="true">
        <circle cx="32" cy="32" r="26" className="track" />
        <circle cx="32" cy="32" r="26" className="fill" pathLength="100" />
      </svg>
      <div>
        <div className="score-num">86<span>/100</span></div>
        <div className="formula mono">0.3·cos + 0.7·depth</div>
      </div>
    </div>
    <div className="chips">
      <span>pgvector · HNSW</span><span>768-d</span><span>Groq</span>
    </div>
  </div>
);

const steps = ["INTENT_SIGNED", "POLICY_CHECK", "ESCALATED", "HUMAN_APPROVED", "AUTHORIZED"];
const TrustRail = () => (
  <div className="v-trustrail">
    <div className="mono sig">ed25519 · nonce 7f3a · exp 120s</div>
    <ol className="fsm">
      {steps.map((s, i) => (
        <li key={s} style={{ animationDelay: `${i * 0.7}s` }}>
          <span className="dot" style={{ animationDelay: `${i * 0.7}s` }} />
          <span className="mono">{s}</span>
        </li>
      ))}
    </ol>
    <div className="ledger">
      {["a91c", "3e07", "f25b", "08dd"].map((h, i) => (
        <span key={h} className="mono" style={{ animationDelay: `${i * 0.25 + 0.4}s` }}>#{h}</span>
      ))}
    </div>
  </div>
);

const ColdTrust = () => (
  <div className="v-coldtrust">
    <div className="ct-head">
      <span className="mono">SHIP-E2E-8971 · °C</span>
      <span className="badge mono">COMPROMISED</span>
    </div>
    <svg viewBox="0 0 300 140" className="chart" aria-hidden="true">
      <line x1="0" y1="48" x2="300" y2="48" className="limit" />
      <text x="296" y="42" textAnchor="end" className="mono lbl">maxTemp 4.0</text>
      <path
        className="line"
        pathLength="100"
        d="M0 104 L30 98 L60 102 L90 92 L120 96 L150 88 L180 94 L210 78 L235 34 L260 28 L300 40"
      />
      <circle cx="235" cy="34" r="5" className="spike" />
    </svg>
    <div className="orgs">
      {["Manufacturer", "Transport", "Retailer", "Regulator"].map((o) => <span key={o}>{o}</span>)}
    </div>
  </div>
);

const results = [
  { name: "Client A / Wardrobe 3-door", s: 0.95 },
  { name: "Client B / Bookshelf", s: 0.55 },
  { name: "Client C / TV unit", s: 0.41 },
];
const DesignFinder = () => (
  <div className="v-designfinder">
    <div className="capture">
      <svg viewBox="0 0 120 90" aria-hidden="true">
        <rect x="22" y="10" width="76" height="72" rx="3" />
        <line x1="47" y1="10" x2="47" y2="82" />
        <line x1="73" y1="10" x2="73" y2="82" />
        <circle cx="43" cy="46" r="2" /><circle cx="51" cy="46" r="2" /><circle cx="69" cy="46" r="2" />
      </svg>
      <span className="scan" />
    </div>
    <ul className="results">
      {results.map((r, i) => (
        <li key={r.name}>
          <div className="r-top"><span>{r.name}</span><span className="mono">{r.s.toFixed(2)}</span></div>
          <div className="bar"><i style={{ "--w": r.s, animationDelay: `${0.5 + i * 0.2}s` }} /></div>
        </li>
      ))}
    </ul>
  </div>
);

const Notary = () => (
  <div className="v-notary">
    <div className="file">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l4 4v16H6z M14 2v4h4" /></svg>
      <span className="mono">contract.pdf</span>
    </div>
    <div className="mono hash">sha256 → 0x9f3a…c41e</div>
    <div className="chain">
      {[1842, 1843, 1844].map((b, i) => (
        <div key={b} className="block" style={{ animationDelay: `${0.3 + i * 0.35}s` }}>
          <span className="mono">#{b}</span>
          <i />
        </div>
      ))}
    </div>
    <div className="verified mono">✓ isNotarized() → true</div>
  </div>
);

const map = { interviewer: Interviewer, trustrail: TrustRail, coldtrust: ColdTrust, designfinder: DesignFinder, notary: Notary };

export default function Visual({ kind }) {
  const C = map[kind];
  return <C />;
}
