/* =============================================
   VChemLab — Application Logic
   app.js
   ============================================= */

// ── Category-based experiment card images ──
// Keys: category id OR experiment id (experiment id takes priority)
// Add images to images/experiments/ folder in your repo.
const expImages = {
  'class9':    'images/experiments/c9.png',
  'class11':   'images/experiments/c10.png',
  'undergrad': 'images/experiments/ug.png',
  'postgrad':  'images/experiments/pg.png',
};

function _getExpImagePath(expId, catId) {
  return expImages[expId] || expImages[catId] || null;
}

// ── Apparatus image paths ──
// Priority: 1) your own local PNG  2) SVG illustration
// To use local images: add files to images/apparatus/ in your repo,
// then uncomment and fill in the paths below.
const apparatusLocalImages = {
  // 'beaker':             'images/apparatus/beaker.png',
  // 'burette':            'images/apparatus/burette.png',
  // 'conical-flask':      'images/apparatus/conical-flask.png',
  // 'pipette':            'images/apparatus/pipette.png',
  // 'test-tube':          'images/apparatus/test-tube.png',
  // 'bunsen-burner':      'images/apparatus/bunsen-burner.png',
  // 'round-bottom-flask': 'images/apparatus/round-bottom-flask.png',
  // 'measuring-cylinder': 'images/apparatus/measuring-cylinder.png',
  // 'dropper':            'images/apparatus/dropper.png',
  // 'thermometer':        'images/apparatus/thermometer.png',
  // 'tripod-stand':       'images/apparatus/tripod-stand.png',
  // 'clamp-stand':        'images/apparatus/clamp-stand.png',
  // 'funnel':             'images/apparatus/funnel.png',
  // 'evaporating-dish':   'images/apparatus/evaporating-dish.png',
  // 'watch-glass':        'images/apparatus/watch-glass.png',
  // 'spatula':            'images/apparatus/spatula.png',
  // 'condenser':          'images/apparatus/condenser.png',
  // 'separating-funnel':  'images/apparatus/separating-funnel.png',
  // 'dropper-bottle':     'images/apparatus/dropper-bottle.png',
  // 'wire-gauze':         'images/apparatus/wire-gauze.png',
};

function getApparatusImg(app) {
  return apparatusLocalImages[app.id] || null;
}

// ── Apparatus category colors ──
const apparatusColors = {
  'Glassware': { color: '#06b6d4', bg: 'rgba(6,182,212,.12)' },
  'Measuring': { color: '#a855f7', bg: 'rgba(168,85,247,.12)' },
  'Heating':   { color: '#f97316', bg: 'rgba(249,115,22,.12)' },
  'Tools':     { color: '#9ca3af', bg: 'rgba(156,163,175,.1)' },
  'Support':   { color: '#f59e0b', bg: 'rgba(245,158,11,.12)' },
  'Storage':   { color: '#22c55e', bg: 'rgba(34,197,94,.12)' },
};

// ── Apparatus SVG Illustrations ──
const apparatusSVGs = {
  'beaker': `<svg width="100" height="120" viewBox="0 0 100 120" fill="none"><path d="M22 18 L18 100 L82 100 L78 18 Z" stroke="#06b6d4" stroke-width="2.5" fill="rgba(6,182,212,.08)" stroke-linejoin="round"/><line x1="22" y1="18" x2="78" y2="18" stroke="#06b6d4" stroke-width="2.5"/><path d="M78 24 L83 20" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/><path d="M20 72 L18 100 L82 100 L80 72 Z" fill="rgba(6,182,212,.25)"/><line x1="28" y1="38" x2="34" y2="38" stroke="#06b6d4" stroke-width="1.5" opacity=".6"/><line x1="26" y1="52" x2="34" y2="52" stroke="#06b6d4" stroke-width="1.5" opacity=".5"/><line x1="24" y1="66" x2="34" y2="66" stroke="#06b6d4" stroke-width="1.5" opacity=".6"/><circle cx="42" cy="82" r="2.5" fill="#22d3ee" opacity=".5"/><circle cx="54" cy="78" r="3" fill="#22d3ee" opacity=".4"/><circle cx="63" cy="85" r="2" fill="#22d3ee" opacity=".6"/></svg>`,
  'burette': `<svg width="60" height="130" viewBox="0 0 60 130" fill="none"><rect x="20" y="8" width="20" height="90" rx="10" fill="rgba(6,182,212,.1)" stroke="#06b6d4" stroke-width="2"/><path d="M21 8 L21 55 Q30 55 39 55 L39 8 Q30 10 21 8Z" fill="rgba(249,115,22,.35)"/><line x1="24" y1="20" x2="36" y2="20" stroke="#06b6d4" stroke-width=".8" opacity=".5"/><line x1="25" y1="30" x2="36" y2="30" stroke="#06b6d4" stroke-width=".8" opacity=".5"/><line x1="24" y1="40" x2="36" y2="40" stroke="#06b6d4" stroke-width=".8" opacity=".5"/><line x1="25" y1="50" x2="36" y2="50" stroke="#06b6d4" stroke-width=".8" opacity=".5"/><line x1="24" y1="60" x2="36" y2="60" stroke="#06b6d4" stroke-width=".8" opacity=".5"/><line x1="25" y1="70" x2="36" y2="70" stroke="#06b6d4" stroke-width=".8" opacity=".5"/><line x1="24" y1="80" x2="36" y2="80" stroke="#06b6d4" stroke-width=".8" opacity=".5"/><rect x="14" y="94" width="32" height="7" rx="3" fill="#374151" stroke="#06b6d4" stroke-width="1"/><line x1="30" y1="101" x2="30" y2="115" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round"/><path d="M29 115 L30 125 L31 115" fill="#06b6d4" opacity=".6"/><ellipse cx="30" cy="127" rx="3" ry="3.5" fill="#06b6d4" opacity=".5"/></svg>`,
  'conical-flask': `<svg width="110" height="120" viewBox="0 0 110 120" fill="none"><path d="M38 16 L28 44 L18 100 L92 100 L82 44 L72 16 Z" stroke="#3b82f6" stroke-width="2.5" fill="rgba(59,130,246,.07)" stroke-linejoin="round"/><line x1="38" y1="16" x2="72" y2="16" stroke="#3b82f6" stroke-width="2.5"/><path d="M24 76 L18 100 L92 100 L86 76 Z" fill="rgba(59,130,246,.28)"/><circle cx="44" cy="85" r="3" fill="#60a5fa" opacity=".5"/><circle cx="56" cy="82" r="3.5" fill="#60a5fa" opacity=".4"/><circle cx="67" cy="88" r="2.5" fill="#60a5fa" opacity=".6"/></svg>`,
  'pipette': `<svg width="55" height="130" viewBox="0 0 55 130" fill="none"><line x1="27" y1="8" x2="27" y2="100" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="27" cy="52" rx="10" ry="22" fill="rgba(168,85,247,.12)" stroke="#a855f7" stroke-width="2"/><path d="M27 8 L27 35 Q23 35 23 42 L23 62 Q23 69 27 69 L27 100" fill="rgba(168,85,247,.2)"/><path d="M26 100 L27 115 L28 100" fill="#a855f7" opacity=".5"/><line x1="27" y1="115" x2="27" y2="122" stroke="#a855f7" stroke-width="2" stroke-linecap="round"/><ellipse cx="27" cy="124" rx="2.5" ry="3" fill="#a855f7" opacity=".5"/></svg>`,
  'test-tube': `<svg width="60" height="130" viewBox="0 0 60 130" fill="none"><path d="M16 12 L16 90 Q16 110 30 110 Q44 110 44 90 L44 12 Z" stroke="#22c55e" stroke-width="2.5" fill="rgba(34,197,94,.08)"/><line x1="16" y1="12" x2="44" y2="12" stroke="#22c55e" stroke-width="2.5"/><path d="M17 75 L16 90 Q16 110 30 110 Q44 110 44 90 L43 75 Z" fill="rgba(34,197,94,.35)"/><circle cx="26" cy="88" r="2" fill="#4ade80" opacity=".5"/><circle cx="34" cy="84" r="2.5" fill="#4ade80" opacity=".4"/></svg>`,
  'bunsen-burner': `<svg width="100" height="130" viewBox="0 0 100 130" fill="none"><rect x="20" y="110" width="60" height="12" rx="4" fill="#374151" stroke="#6b7280" stroke-width="1.5"/><rect x="40" y="82" width="20" height="28" rx="4" fill="#4b5563" stroke="#6b7280" stroke-width="1.5"/><ellipse cx="50" cy="82" rx="20" ry="5" fill="#374151" stroke="#6b7280" stroke-width="1.5"/><rect x="32" y="78" width="36" height="8" rx="4" fill="#374151" stroke="#6b7280" stroke-width="1.5"/><ellipse cx="50" cy="60" rx="14" ry="22" fill="url(#flameBG)" opacity=".85"/><ellipse cx="50" cy="68" rx="8" ry="14" fill="url(#flameM)" opacity=".9"/><ellipse cx="50" cy="75" rx="3" ry="4" fill="#fef3c7"/><defs><radialGradient id="flameBG" cx="50%" cy="75%" r="50%"><stop offset="0%" stop-color="#f97316"/><stop offset="100%" stop-color="#fbbf24" stop-opacity="0"/></radialGradient><radialGradient id="flameM" cx="50%" cy="80%" r="50%"><stop offset="0%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#60a5fa" stop-opacity="0"/></radialGradient></defs></svg>`,
  'round-bottom-flask': `<svg width="120" height="130" viewBox="0 0 120 130" fill="none"><circle cx="60" cy="82" r="36" fill="rgba(168,85,247,.1)" stroke="#a855f7" stroke-width="2.5"/><rect x="52" y="22" width="16" height="44" rx="8" fill="rgba(168,85,247,.08)" stroke="#a855f7" stroke-width="2.5"/><line x1="52" y1="22" x2="68" y2="22" stroke="#a855f7" stroke-width="2.5"/><path d="M24 88 Q24 114 60 116 Q96 114 96 88 Z" fill="rgba(168,85,247,.3)"/><circle cx="47" cy="96" r="3" fill="#c084fc" opacity=".5"/><circle cx="60" cy="100" r="3.5" fill="#c084fc" opacity=".4"/></svg>`,
  'measuring-cylinder': `<svg width="70" height="130" viewBox="0 0 70 130" fill="none"><path d="M16 16 L14 112 Q14 120 35 120 Q56 120 56 112 L54 16 Z" stroke="#06b6d4" stroke-width="2" fill="rgba(6,182,212,.07)"/><ellipse cx="35" cy="16" rx="19" ry="5" fill="rgba(6,182,212,.1)" stroke="#06b6d4" stroke-width="2"/><path d="M16 80 L14 112 Q14 120 35 120 Q56 120 56 112 L54 80 Z" fill="rgba(6,182,212,.3)"/><line x1="22" y1="28" x2="30" y2="28" stroke="#06b6d4" stroke-width="1.2" opacity=".6"/><line x1="22" y1="40" x2="28" y2="40" stroke="#06b6d4" stroke-width="1.2" opacity=".5"/><line x1="22" y1="52" x2="30" y2="52" stroke="#06b6d4" stroke-width="1.2" opacity=".6"/><line x1="22" y1="64" x2="28" y2="64" stroke="#06b6d4" stroke-width="1.2" opacity=".5"/><line x1="22" y1="76" x2="30" y2="76" stroke="#06b6d4" stroke-width="1.2" opacity=".6"/></svg>`,
  'funnel': `<svg width="100" height="130" viewBox="0 0 100 130" fill="none"><path d="M8 18 L42 70 L42 122 L58 122 L58 70 L92 18 Z" stroke="#f59e0b" stroke-width="2.5" fill="rgba(245,158,11,.08)" stroke-linejoin="round"/><line x1="8" y1="18" x2="92" y2="18" stroke="#f59e0b" stroke-width="2.5"/><path d="M10 18 L42 67 L58 67 L90 18 Z" fill="rgba(245,158,11,.2)"/><ellipse cx="50" cy="125" rx="3" ry="4" fill="#f59e0b" opacity=".5"/></svg>`,
  'thermometer': `<svg width="50" height="130" viewBox="0 0 50 130" fill="none"><rect x="20" y="14" width="10" height="80" rx="5" fill="rgba(239,68,68,.08)" stroke="#ef4444" stroke-width="2"/><circle cx="25" cy="110" r="14" fill="rgba(239,68,68,.15)" stroke="#ef4444" stroke-width="2"/><circle cx="25" cy="110" r="10" fill="rgba(239,68,68,.5)"/><rect x="23" y="60" width="4" height="56" rx="2" fill="#ef4444"/><line x1="30" y1="25" x2="37" y2="25" stroke="#ef4444" stroke-width="1.2" opacity=".6"/><line x1="30" y1="45" x2="37" y2="45" stroke="#ef4444" stroke-width="1.2" opacity=".6"/><line x1="30" y1="65" x2="37" y2="65" stroke="#ef4444" stroke-width="1.2" opacity=".6"/><line x1="30" y1="85" x2="37" y2="85" stroke="#ef4444" stroke-width="1.2" opacity=".6"/></svg>`,
  'dropper': `<svg width="70" height="130" viewBox="0 0 70 130" fill="none"><ellipse cx="35" cy="22" rx="18" ry="12" fill="#374151" stroke="#6b7280" stroke-width="2"/><rect x="28" y="42" width="14" height="56" rx="7" fill="rgba(59,130,246,.12)" stroke="#3b82f6" stroke-width="2"/><path d="M29 42 L29 80 Q35 80 41 80 L41 42 Q35 44 29 42Z" fill="rgba(59,130,246,.3)"/><path d="M29 96 L28 108 Q28 118 35 118 Q42 118 42 108 L41 96 Z" stroke="#3b82f6" stroke-width="2" fill="rgba(59,130,246,.1)"/><ellipse cx="35" cy="122" rx="4" ry="5" fill="#3b82f6" opacity=".5"/></svg>`,
  'tripod-stand': `<svg width="120" height="130" viewBox="0 0 120 130" fill="none"><line x1="60" y1="22" x2="15" y2="118" stroke="#6b7280" stroke-width="4" stroke-linecap="round"/><line x1="60" y1="22" x2="60" y2="118" stroke="#6b7280" stroke-width="4" stroke-linecap="round"/><line x1="60" y1="22" x2="105" y2="118" stroke="#6b7280" stroke-width="4" stroke-linecap="round"/><rect x="8" y="115" width="22" height="8" rx="3" fill="#4b5563"/><rect x="49" y="115" width="22" height="8" rx="3" fill="#4b5563"/><rect x="90" y="115" width="22" height="8" rx="3" fill="#4b5563"/><circle cx="60" cy="22" r="10" fill="#374151" stroke="#9ca3af" stroke-width="2"/><rect x="26" y="54" width="68" height="6" rx="3" fill="#9ca3af" opacity=".5"/></svg>`,
  'clamp-stand': `<svg width="110" height="130" viewBox="0 0 110 130" fill="none"><rect x="20" y="112" width="50" height="12" rx="4" fill="#374151" stroke="#6b7280" stroke-width="1.5"/><rect x="38" y="14" width="8" height="98" rx="4" fill="#4b5563" stroke="#6b7280" stroke-width="1.5"/><rect x="42" y="50" width="35" height="8" rx="4" fill="#374151" stroke="#6b7280" stroke-width="1.5"/><circle cx="44" cy="54" r="6" fill="#6b7280" stroke="#9ca3af" stroke-width="1.5"/><rect x="68" y="44" width="12" height="20" rx="4" fill="#374151" stroke="#9ca3af" stroke-width="1.5"/></svg>`,
  'evaporating-dish': `<svg width="120" height="80" viewBox="0 0 120 80" fill="none"><path d="M8 40 Q8 72 60 72 Q112 72 112 40 Z" stroke="#f59e0b" stroke-width="2.5" fill="rgba(245,158,11,.1)"/><ellipse cx="60" cy="40" rx="52" ry="12" fill="rgba(245,158,11,.08)" stroke="#f59e0b" stroke-width="2.5"/><path d="M16 44 Q16 68 60 68 Q104 68 104 44 Z" fill="rgba(245,158,11,.25)"/></svg>`,
  'watch-glass': `<svg width="120" height="70" viewBox="0 0 120 70" fill="none"><path d="M8 52 Q8 20 60 20 Q112 20 112 52 Z" stroke="#06b6d4" stroke-width="2.5" fill="rgba(6,182,212,.08)"/><ellipse cx="60" cy="52" rx="52" ry="8" fill="rgba(6,182,212,.06)" stroke="#06b6d4" stroke-width="2"/></svg>`,
  'spatula': `<svg width="130" height="60" viewBox="0 0 130 60" fill="none"><rect x="8" y="22" width="55" height="16" rx="3" fill="rgba(156,163,175,.2)" stroke="#9ca3af" stroke-width="2"/><rect x="63" y="28" width="58" height="4" rx="2" fill="#9ca3af"/></svg>`,
  'condenser': `<svg width="80" height="130" viewBox="0 0 80 130" fill="none"><rect x="16" y="12" width="48" height="106" rx="10" fill="rgba(6,182,212,.08)" stroke="#06b6d4" stroke-width="2"/><rect x="26" y="18" width="28" height="94" rx="6" fill="rgba(6,182,212,.12)" stroke="#22d3ee" stroke-width="1.5"/><path d="M16 80 L8 84" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/><path d="M64 44 L72 40" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  'separating-funnel': `<svg width="100" height="130" viewBox="0 0 100 130" fill="none"><circle cx="50" cy="52" r="35" fill="rgba(168,85,247,.08)" stroke="#a855f7" stroke-width="2.5"/><rect x="43" y="12" width="14" height="20" rx="7" fill="rgba(168,85,247,.08)" stroke="#a855f7" stroke-width="2.5"/><path d="M15 62 Q15 85 50 87 Q85 85 85 62 Z" fill="rgba(6,182,212,.3)"/><path d="M44 87 L43 98 L57 98 L56 87 Z" stroke="#a855f7" stroke-width="2" fill="rgba(168,85,247,.08)"/><rect x="36" y="95" width="28" height="8" rx="3" fill="#374151" stroke="#a855f7" stroke-width="1.5"/><line x1="50" y1="103" x2="50" y2="118" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round"/></svg>`,
  'dropper-bottle': `<svg width="90" height="130" viewBox="0 0 90 130" fill="none"><rect x="22" y="44" width="46" height="76" rx="6" fill="rgba(34,197,94,.08)" stroke="#22c55e" stroke-width="2.5"/><rect x="30" y="28" width="30" height="20" rx="4" fill="rgba(34,197,94,.1)" stroke="#22c55e" stroke-width="2"/><rect x="34" y="14" width="22" height="16" rx="6" fill="#374151" stroke="#4b5563" stroke-width="2"/><path d="M26 82 L22 120 L68 120 L64 82 Z" fill="rgba(34,197,94,.22)"/></svg>`,
  'wire-gauze': `<svg width="120" height="100" viewBox="0 0 120 100" fill="none"><rect x="12" y="22" width="96" height="56" rx="4" fill="rgba(156,163,175,.08)" stroke="#9ca3af" stroke-width="2"/><line x1="28" y1="22" x2="28" y2="78" stroke="#6b7280" stroke-width="1" opacity=".5"/><line x1="44" y1="22" x2="44" y2="78" stroke="#6b7280" stroke-width="1" opacity=".5"/><line x1="60" y1="22" x2="60" y2="78" stroke="#6b7280" stroke-width="1" opacity=".5"/><line x1="76" y1="22" x2="76" y2="78" stroke="#6b7280" stroke-width="1" opacity=".5"/><line x1="92" y1="22" x2="92" y2="78" stroke="#6b7280" stroke-width="1" opacity=".5"/><line x1="12" y1="34" x2="108" y2="34" stroke="#6b7280" stroke-width="1" opacity=".5"/><line x1="12" y1="46" x2="108" y2="46" stroke="#6b7280" stroke-width="1" opacity=".5"/><line x1="12" y1="58" x2="108" y2="58" stroke="#6b7280" stroke-width="1" opacity=".5"/><line x1="12" y1="70" x2="108" y2="70" stroke="#6b7280" stroke-width="1" opacity=".5"/><circle cx="60" cy="50" r="16" fill="rgba(255,255,255,.06)" stroke="#9ca3af" stroke-width="2"/></svg>`
};

// ── Experiment Categories (40 experiments across 4 levels) ──
const expCategories = [
  {
    id: 'class9', catColor: '#22c55e', num: 1,
    title: 'Class 9–10: Basic Chemistry',
    subtitle: 'Foundation experiments for beginners',
    experiments: [
      { id: 'c9-1', title: 'Acid-Base Titration', desc: 'Determine the concentration of HCl using a standard NaOH solution.', difficulty: 'intermediate', duration: '45 min', xp: 50, apparatus: ['burette','pipette','conical-flask','clamp-stand','beaker','funnel'], aim: 'To determine the concentration of HCl by titrating it against a standard NaOH solution using phenolphthalein as indicator.', theory: 'In acid-base titration a standard solution neutralises the analyte. The equivalence point (where moles of acid = moles of base) is detected by a colour change of the indicator. Phenolphthalein is colourless in acid and turns pink in base at pH ~8.2.', equation: 'HCl + NaOH → NaCl + H₂O', materials: ['Burette (50 mL)','Pipette (10 mL)','Conical flask (250 mL)','Burette stand and clamp','Standard NaOH (0.1 M)','HCl solution (unknown)','Phenolphthalein indicator','Distilled water','White tile'], procedure: ['Rinse the burette with distilled water then with NaOH solution. Fill the burette with NaOH and remove air bubbles.','Record the initial burette reading.','Pipette 10 mL of HCl into a clean conical flask. Add 2–3 drops of phenolphthalein indicator.','Place the flask on a white tile beneath the burette.','Add NaOH dropwise while swirling. Add the last few drops one at a time.','Stop when a pale pink colour persists for 30 seconds. Record the final reading.','Repeat until concordant readings (within 0.1 mL) are obtained.'], observations: 'The solution changes from colourless to pale pink at the endpoint.', result: 'Molarity of HCl = (M_NaOH × V_NaOH) / V_HCl', precautions: ['Rinse burette with NaOH and pipette with HCl before use.','Remove air bubbles from the burette tip.','Add NaOH very slowly near the endpoint.','Read the meniscus from the bottom.'], videoId: 'nFniJ6MHZWY', quiz: [{q:'Which indicator is used for strong acid–strong base titration?',opts:['Methyl orange','Phenolphthalein','Starch','Both A and B'],ans:1},{q:'At the equivalence point the moles of acid equal moles of:',opts:['Solvent','Base','Indicator','Water'],ans:1},{q:'What colour change marks the endpoint with phenolphthalein and NaOH?',opts:['Yellow to orange','Colourless to pale pink','Pink to colourless','Blue to red'],ans:1},{q:'Burette readings are taken from which part of the meniscus?',opts:['Top','Middle','Bottom','Any point'],ans:2},{q:'Why must the burette be rinsed with NaOH before filling?',opts:['To remove dust','To prevent dilution of NaOH','To increase volume','To clean stains'],ans:1}] },
      { id: 'c9-2', title: 'Preparation of Oxygen Gas', desc: 'Generate oxygen by decomposition of hydrogen peroxide using MnO₂ as catalyst.', difficulty: 'beginner', duration: '30 min', xp: 50, apparatus: ['round-bottom-flask','test-tube','measuring-cylinder','thermometer','dropper'], aim: 'To prepare oxygen gas by catalytic decomposition of hydrogen peroxide and verify its properties.', theory: 'Hydrogen peroxide decomposes slowly at room temperature. Manganese dioxide acts as a catalyst, speeding up the decomposition without being consumed. Oxygen is a colourless, odourless gas that relights a glowing splint.', equation: '2H₂O₂ → 2H₂O + O₂↑ (MnO₂ catalyst)', materials: ['Conical flask with one-hole stopper','Delivery tube and trough','Test tubes','30% H₂O₂ solution','MnO₂ powder','Glowing wooden splint','Distilled water'], procedure: ['Set up gas collection apparatus with a delivery tube leading into an inverted test tube filled with water.','Add 20 mL of hydrogen peroxide to the conical flask.','Add a spatula tip of MnO₂ powder. Immediately fit the stopper.','Observe vigorous gas evolution. Collect gas by water displacement.','Test with a glowing splint — it relights, confirming oxygen.'], observations: 'Vigorous effervescence occurs. The glowing splint relights.', result: 'Oxygen gas prepared. The gas relights a glowing splint.', precautions: ['Handle H₂O₂ with care — strong oxidiser.','Ensure all joints are gas-tight.','Keep away from flames during collection.'], videoId: 'YSrLWgwLNMM', quiz: [{q:'What is the role of MnO₂?',opts:['Reactant','Product','Catalyst','Inhibitor'],ans:2},{q:'How is oxygen confirmed?',opts:['Burning smell','Blue litmus turns red','Glowing splint relights','Turns limewater milky'],ans:2},{q:'Which collection method is used?',opts:['Downward displacement of water','Upward displacement of air','Downward displacement of air','All equally'],ans:0},{q:'What type of reaction is decomposition of H₂O₂?',opts:['Combination','Displacement','Decomposition','Neutralisation'],ans:2},{q:'Oxygen supports:',opts:['Combustion only','Respiration only','Neither','Both combustion and respiration'],ans:3}] },
      { id: 'c9-3', title: 'Chemical Reaction Types', desc: 'Observe and classify combination, decomposition, and displacement reactions.', difficulty: 'beginner', duration: '40 min', xp: 45, apparatus: ['test-tube','bunsen-burner','spatula','dropper','beaker'], aim: 'To observe and classify different types of chemical reactions.', theory: 'Combination reactions join substances into one product. Decomposition breaks one substance into simpler ones. Single displacement: one element replaces another. Double displacement: exchange of ions between two compounds.', equation: 'Combination: Mg + O₂ → MgO | Decomposition: CaCO₃ → CaO + CO₂', materials: ['Magnesium ribbon','Calcium carbonate chips','Zinc granules','Copper sulphate solution','Test tubes','Bunsen burner','Iron nail'], procedure: ['Burn magnesium ribbon in air. White ash (MgO) — combination.','Heat calcium carbonate strongly. Gas turns limewater milky (CO₂) — decomposition.','Drop zinc into copper sulphate. Brown copper deposits — single displacement.','Mix lead nitrate and sodium iodide solutions. Yellow ppt — double displacement.','Record observations and classify each reaction.'], observations: 'Mg burns with bright white flame. Limewater turns milky. Copper deposits on zinc. Yellow PbI₂ ppt forms.', result: 'All four types of reactions demonstrated.', precautions: ['Do not look directly at burning magnesium.','Wear safety goggles.','Perform double displacement reactions in a tray.'], videoId: '', quiz: [{q:'Burning magnesium in oxygen is which reaction type?',opts:['Decomposition','Combination','Displacement','Double displacement'],ans:1},{q:'Zinc displaces copper from:',opts:['Copper oxide','Copper sulphate solution','Copper nitrate solid','Copper chloride gas'],ans:1},{q:'Which gas turns limewater milky?',opts:['Oxygen','Hydrogen','Carbon dioxide','Nitrogen'],ans:2},{q:'Pb(NO₃)₂ + 2KI → PbI₂ + 2KNO₃ is which type?',opts:['Single displacement','Combination','Decomposition','Double displacement'],ans:3}] },
      { id: 'c9-4', title: 'Properties of Acids and Bases', desc: 'Test substances with litmus, phenolphthalein and methyl orange indicators.', difficulty: 'beginner', duration: '35 min', xp: 40, apparatus: ['test-tube','dropper','beaker','watch-glass'], aim: 'To identify acidic, basic and neutral substances using various indicators.', theory: 'Acids release H⁺ ions and turn blue litmus red. Bases release OH⁻ ions and turn red litmus blue. Phenolphthalein is colourless in acid and pink in base. Methyl orange is red in acid and yellow in base.', equation: 'HCl → H⁺ + Cl⁻ | NaOH → Na⁺ + OH⁻', materials: ['Litmus solution (red and blue)','Phenolphthalein solution','Methyl orange solution','Dilute HCl','Dilute NaOH','Vinegar','Lemon juice','Baking soda solution','Distilled water','Test tubes'], procedure: ['Take samples of each test liquid in separate test tubes.','Add blue litmus to each. Record colour changes.','Repeat with red litmus, phenolphthalein, and methyl orange.','Record all colour changes in a table.','Classify each substance as acid, base, or neutral.'], observations: 'Acids turn blue litmus red. Bases turn red litmus blue. Phenolphthalein pink in base.', result: 'Acids and bases correctly identified using indicators.', precautions: ['Do not taste any chemicals.','Wash hands after the experiment.','Label all test tubes clearly.'], videoId: '', quiz: [{q:'What colour does red litmus turn in a base?',opts:['Remains red','Blue','Yellow','Colourless'],ans:1},{q:'Phenolphthalein turns pink in:',opts:['Acids','Neutral solutions','Bases','All solutions'],ans:2},{q:'Methyl orange in acidic solution is:',opts:['Yellow','Blue','Red','Colourless'],ans:2},{q:'Lemon juice turns blue litmus:',opts:['Blue','Red','Yellow','Colourless'],ans:1}] },
      { id: 'c9-5', title: 'Reactivity Series of Metals', desc: 'Determine relative reactivity of metals through displacement reactions.', difficulty: 'intermediate', duration: '40 min', xp: 50, apparatus: ['test-tube','spatula','beaker','dropper'], aim: 'To establish the relative reactivity of metals by displacement reactions.', theory: 'A more reactive metal displaces a less reactive metal from its salt solution. The reactivity series ranks metals by their tendency to lose electrons. Mg > Al > Zn > Fe > Cu.', equation: 'Zn + CuSO₄ → ZnSO₄ + Cu | Fe + CuSO₄ → FeSO₄ + Cu', materials: ['Test tubes','Zinc pieces','Iron filings','Copper turnings','Magnesium ribbon','Copper sulphate solution','Zinc sulphate solution','Iron sulphate solution','Sandpaper'], procedure: ['Clean metal surfaces with sandpaper to remove oxide layers.','Place zinc in copper sulphate. Observe brown copper depositing.','Place iron in copper sulphate. Observe copper deposition (slower).','Place copper in zinc sulphate. Observe no reaction.','Place magnesium in copper sulphate. Observe vigorous reaction.','Rank metals: Mg > Zn > Fe > Cu.'], observations: 'Zn and Mg displace Cu. Fe displaces Cu slowly. Cu does not displace Zn.', result: 'Reactivity order: Mg > Zn > Fe > Cu.', precautions: ['Clean metals before use.','Record observations immediately.','Handle copper sulphate carefully (toxic).'], videoId: '', quiz: [{q:'Most reactive among Mg, Zn, Fe, Cu?',opts:['Copper','Iron','Zinc','Magnesium'],ans:3},{q:'Zinc placed in copper sulphate deposits:',opts:['Zinc','Silver','Copper','Iron'],ans:2},{q:'Copper placed in zinc sulphate results in:',opts:['Zinc depositing','No reaction','Blue colour intensifying','Hydrogen gas'],ans:1},{q:'The reactivity series is based on tendency to:',opts:['Gain electrons','Lose electrons','Gain protons','Lose neutrons'],ans:1}] },
      { id: 'c9-6', title: 'Crystallisation of Copper Sulphate', desc: 'Grow pure blue copper sulphate crystals from a supersaturated solution.', difficulty: 'intermediate', duration: '2 days', xp: 55, apparatus: ['beaker','evaporating-dish','funnel','watch-glass','tripod-stand','wire-gauze'], aim: 'To obtain pure crystals of copper sulphate by crystallisation.', theory: 'Crystallisation separates soluble impurities by forming crystals when a hot saturated solution cools. Copper sulphate forms characteristic blue pentahydrate crystals (CuSO₄·5H₂O).', equation: 'CuSO₄ (solution, hot) → CuSO₄·5H₂O (crystals, on cooling)', materials: ['Impure copper sulphate','Distilled water','Beaker (250 mL)','Filter paper and funnel','Evaporating dish','Tripod stand and wire gauze','Bunsen burner','Stirring rod'], procedure: ['Dissolve impure copper sulphate in minimum hot distilled water.','Filter the hot solution to remove insoluble impurities.','Transfer clear filtrate to an evaporating dish.','Heat gently until crystals start to appear.','Allow to cool slowly, undisturbed. Blue crystals form.','Separate crystals by filtration. Dry between filter papers.'], observations: 'Pure blue rhombic crystals of CuSO₄·5H₂O obtained.', result: 'Pure copper sulphate crystals obtained by crystallisation.', precautions: ['Cool slowly for larger crystals.','Do not overheat the solution.','Handle hot glassware with tongs.'], videoId: '', quiz: [{q:'Copper sulphate crystals are:',opts:['White','Green','Blue','Red'],ans:2},{q:'Water molecules in CuSO₄·5H₂O:',opts:['3','4','5','7'],ans:2},{q:'Purpose of filtering the hot solution:',opts:['Remove colour','Remove insoluble impurities','Speed crystallisation','Concentrate solution'],ans:1},{q:'Why cool slowly?',opts:['Save fuel','Obtain larger pure crystals','Prevent colour loss','Avoid breaking dish'],ans:1}] },
      { id: 'c9-7', title: 'Law of Conservation of Mass', desc: 'Verify that mass is conserved during a chemical reaction.', difficulty: 'beginner', duration: '30 min', xp: 45, apparatus: ['beaker','measuring-cylinder','watch-glass','spatula'], aim: 'To verify the law of conservation of mass using NaCl and AgNO₃ reaction.', theory: 'Mass can neither be created nor destroyed in a chemical reaction. Total mass of reactants equals total mass of products. Stated by Antoine Lavoisier.', equation: 'NaCl + AgNO₃ → AgCl↓ + NaNO₃', materials: ['Sodium chloride solution','Silver nitrate solution','Two small beakers','Balance','Stopper or cling wrap','Conical flask'], procedure: ['Weigh a conical flask containing NaCl solution. Record the mass.','Weigh a test tube containing AgNO₃ solution.','Note the combined mass of both containers and contents.','Carefully mix both solutions inside the sealed conical flask.','Weigh the flask with mixed contents.','Compare mass before and after reaction.'], observations: 'White precipitate of AgCl forms. Mass before = mass after.', result: 'Law of Conservation of Mass is verified.', precautions: ['Ensure no solution is spilt during transfer.','Keep the system closed to prevent evaporation.','Use an accurate balance.'], videoId: '', quiz: [{q:'Law of Conservation of Mass was proposed by:',opts:['Dalton','Lavoisier','Avogadro','Newton'],ans:1},{q:'NaCl + AgNO₃ gives white precipitate of:',opts:['NaNO₃','AgCl','NaCl','AgNO₃'],ans:1},{q:'If 10 g of reactants are taken, products total:',opts:['More than 10 g','Less than 10 g','Exactly 10 g','Cannot be determined'],ans:2},{q:'To prevent mass loss, the system must be:',opts:['Open','Heated','Closed/sealed','Stirred'],ans:2}] },
      { id: 'c9-8', title: 'Flame Test for Metals', desc: 'Identify metal ions by their characteristic emission colours in a Bunsen flame.', difficulty: 'intermediate', duration: '35 min', xp: 40, apparatus: ['bunsen-burner','spatula','dropper','watch-glass'], aim: 'To identify metal ions by their characteristic flame colours.', theory: 'When metal salts are heated, electrons absorb energy and jump to higher levels. On returning to ground state they emit light of characteristic wavelengths specific to each element.', equation: 'Metal ion + heat → Excited electrons → Photon emission', materials: ['Nichrome wire loop','Dilute HCl (for cleaning)','Metal salt solutions: NaCl, KCl, CaCl₂, CuCl₂, BaCl₂','Bunsen burner','Tongs','Safety goggles'], procedure: ['Clean the nichrome wire in dilute HCl and hold in flame until no colour appears.','Dip clean wire in the first salt solution.','Hold in the hottest part of the blue flame. Observe and record colour.','Clean the wire before each test.','Repeat for all salt solutions.'], observations: 'Na⁺ = golden yellow, K⁺ = lilac/violet, Ca²⁺ = brick red, Cu²⁺ = green, Ba²⁺ = pale green.', result: 'Metal ions identified by characteristic flame colours.', precautions: ['Never leave a lit Bunsen burner unattended.','Use tongs — wire becomes extremely hot.','View potassium through blue cobalt glass.'], videoId: 'IJkLuwt8GWU', quiz: [{q:'Flame colour of sodium ions:',opts:['Lilac','Green','Golden yellow','Brick red'],ans:2},{q:'Lilac/violet flame colour — which ions?',opts:['Na⁺','Ca²⁺','Cu²⁺','K⁺'],ans:3},{q:'Why clean the wire with HCl?',opts:['Add HCl colour','Prevent contamination from previous test','Make wire longer','Cool the wire'],ans:1},{q:'Copper ions produce ___ colour flame.',opts:['Red','Blue','Green','Yellow'],ans:2}] },
      { id: 'c9-9', title: 'Identification of Acids with Indicators', desc: 'Use multiple indicators to identify and classify unknown acid solutions.', difficulty: 'beginner', duration: '30 min', xp: 40, apparatus: ['test-tube','dropper','watch-glass','beaker'], aim: 'To identify and classify unknown solutions as strong or weak acids.', theory: 'Strong acids (HCl, H₂SO₄) fully dissociate. Weak acids (CH₃COOH) partially dissociate. Universal indicator gives a pH reading. Strong acids pH 1–2; weak acids pH 3–5.', equation: 'Strong acid: HCl → H⁺ + Cl⁻ | Weak acid: CH₃COOH ⇌ CH₃COO⁻ + H⁺', materials: ['Dilute HCl','Acetic acid','Universal indicator','Litmus solution','pH strips','Test tubes','Dropper'], procedure: ['Take 2 mL of each unknown solution in test tubes.','Test each with litmus solution.','Add universal indicator and compare with colour chart.','Use pH strips to measure approximate pH.','Classify: strong acids (pH 1–2), weak acids (pH 3–5).'], observations: 'Strong acids show pH 1–2. Weak acids show pH 3–5.', result: 'Strong and weak acids correctly identified.', precautions: ['Handle acids carefully. Wear gloves and goggles.','Do not mix acids.','Neutralise waste with baking soda before disposal.'], videoId: '', quiz: [{q:'Universal indicator shows pH 1–2 for:',opts:['Weak acid','Strong acid','Both equally','Neutral solution'],ans:1},{q:'Acetic acid (vinegar) is classified as:',opts:['Strong acid','Strong base','Weak acid','Neutral'],ans:2},{q:'pH of a neutral solution:',opts:['0','5','7','14'],ans:2},{q:'Strong acids have ___ degree of ionisation.',opts:['Zero','Partial','Complete','Variable'],ans:2}] },
      { id: 'c9-10', title: 'Simple Salt Formation (NaCl)', desc: 'Prepare common salt by neutralisation of hydrochloric acid with sodium hydroxide.', difficulty: 'beginner', duration: '30 min', xp: 50, apparatus: ['beaker','evaporating-dish','burette','tripod-stand','wire-gauze','watch-glass'], aim: 'To prepare pure sodium chloride by neutralisation and crystallisation.', theory: 'Neutralisation is a reaction between an acid and a base forming salt and water. HCl + NaOH → NaCl + H₂O. The salt can be recovered by evaporation.', equation: 'HCl + NaOH → NaCl + H₂O', materials: ['Dilute HCl (25 mL)','Dilute NaOH (0.1 M)','Phenolphthalein indicator','Evaporating dish','Bunsen burner and tripod','Stirring rod'], procedure: ['Measure 25 mL of HCl into a beaker.','Add a few drops of phenolphthalein.','Add NaOH dropwise while stirring until indicator just turns pink.','Add one drop of HCl to make exactly neutral (colourless).','Transfer to evaporating dish and heat gently until salt forms.','Allow to dry. Observe white crystals of NaCl.'], observations: 'White crystalline NaCl forms after evaporation.', result: 'Sodium chloride successfully prepared by neutralisation.', precautions: ['Do not overheat — NaCl does not melt at this stage.','Add HCl and NaOH carefully.','Keep flame low during evaporation.'], videoId: '', quiz: [{q:'Neutralisation produces:',opts:['Only salt','Only water','Salt and water','Acid and base'],ans:2},{q:'Indicator that turns pink at endpoint:',opts:['Methyl orange','Starch','Phenolphthalein','Universal indicator'],ans:2},{q:'NaCl crystals obtained after:',opts:['Filtration','Distillation','Evaporation','Crystallisation and evaporation'],ans:3},{q:'pH of neutralised solution at endpoint:',opts:['1','4','7','14'],ans:2}] }
    ]
  },
  {
    id: 'class11', catColor: '#06b6d4', num: 2,
    title: 'Class 11–12: Intermediate Chemistry',
    subtitle: 'Advanced school-level experiments',
    experiments: [
      { id: 'c11-1', title: 'Preparation of Ferrous Sulphate', desc: 'Synthesise green ferrous sulphate crystals from iron and dilute sulphuric acid.', difficulty: 'intermediate', duration: '45 min', xp: 60, apparatus: ['beaker','evaporating-dish','funnel','measuring-cylinder','tripod-stand','wire-gauze'], aim: 'To prepare ferrous sulphate (FeSO₄·7H₂O) crystals from iron filings and dilute sulphuric acid.', theory: 'Iron reacts with dilute H₂SO₄ to form ferrous sulphate and hydrogen gas. Iron must be in slight excess to prevent oxidation of Fe²⁺ to Fe³⁺.', equation: 'Fe + H₂SO₄ → FeSO₄ + H₂↑', materials: ['Iron filings (clean)','Dilute H₂SO₄ (50 mL)','Beaker (250 mL)','Funnel and filter paper','Evaporating dish','Dilute H₂SO₄ (few drops, prevent oxidation)'], procedure: ['Add excess iron filings to 50 mL dilute H₂SO₄.','Warm gently on water bath. Observe H₂ bubbling.','Continue until H₂ evolution stops.','Filter warm solution to remove excess iron.','Add a few drops dilute H₂SO₄ to filtrate.','Evaporate to crystallising point. Cool slowly. Filter off pale green crystals.'], observations: 'Pale green crystals of FeSO₄·7H₂O form.', result: 'Ferrous sulphate crystals successfully prepared.', precautions: ['Handle H₂SO₄ with care.','Keep iron in excess to avoid Fe³⁺ formation.','Add dilute acid to prevent oxidation.'], videoId: '', quiz: [{q:'Colour of ferrous sulphate crystals:',opts:['Blue','White','Pale green','Yellow'],ans:2},{q:'Formula of ferrous sulphate crystals:',opts:['FeSO₄·5H₂O','FeSO₄·7H₂O','Fe₂(SO₄)₃','FeSO₄'],ans:1},{q:'Why keep iron in excess?',opts:['Produce more H₂','Prevent oxidation of Fe²⁺ to Fe³⁺','Speed up reaction','Change colour'],ans:1},{q:'Gas evolved when Fe reacts with H₂SO₄:',opts:['O₂','CO₂','SO₂','H₂'],ans:3}] },
      { id: 'c11-2', title: 'Determination of pH using pH Meter', desc: 'Measure and compare pH of various solutions using a calibrated digital pH meter.', difficulty: 'beginner', duration: '30 min', xp: 55, apparatus: ['beaker','dropper','measuring-cylinder'], aim: 'To determine the pH of different solutions using a digital pH meter.', theory: 'pH = -log[H⁺]. A pH meter measures the potential difference between a glass electrode and a reference electrode. Calibrate with buffer solutions of known pH (4.0, 7.0, 10.0).', equation: 'pH = -log[H⁺]', materials: ['Digital pH meter with electrode','Buffer solutions (pH 4, 7, 10)','Distilled water','Test solutions: HCl, NaOH, lemon juice, milk, baking soda','Beakers'], procedure: ['Calibrate pH meter using pH 7 buffer. Rinse with distilled water.','Calibrate with pH 4 buffer. Rinse.','Immerse electrode in test solution. Wait for stable reading. Record pH.','Rinse electrode with distilled water between measurements.','Classify as acid (pH<7), neutral (pH=7), base (pH>7).'], observations: 'HCl: pH ~1–2; NaOH: pH ~12–13; lemon juice: pH ~2–3; milk: pH ~6.5.', result: 'pH values measured and solutions classified correctly.', precautions: ['Rinse electrode between samples.','Keep electrode in storage solution when not in use.','Calibrate before every use.'], videoId: '', quiz: [{q:'pH of [H⁺] = 10⁻³ M is:',opts:['3','7','1','0'],ans:0},{q:'pH meter calibrated using:',opts:['Distilled water','Buffer solutions','Test solution itself','HCl'],ans:1},{q:'pH of milk is approximately:',opts:['2','4','7','11'],ans:2},{q:'Highest [OH⁻] among these:',opts:['pH 2','pH 5','pH 7','pH 12'],ans:3}] },
      { id: 'c11-3', title: 'Esterification Reaction', desc: 'Prepare ethyl acetate from ethanol and acetic acid via Fischer esterification.', difficulty: 'advanced', duration: '60 min', xp: 65, apparatus: ['round-bottom-flask','condenser','separating-funnel','beaker','measuring-cylinder'], aim: 'To prepare ethyl acetate from ethanol and glacial acetic acid using conc. H₂SO₄ as catalyst.', theory: 'Esterification is a reversible reaction between a carboxylic acid and an alcohol. Conc. H₂SO₄ acts as catalyst and dehydrating agent. The ester is identified by its fruity smell.', equation: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O (H₂SO₄, heat)', materials: ['Glacial acetic acid (10 mL)','Ethanol (15 mL)','Conc. H₂SO₄ (2 mL)','Round bottom flask','Reflux condenser','Water bath','Separating funnel','Sodium carbonate solution','Anhydrous CaCl₂'], procedure: ['Mix 10 mL glacial acetic acid and 15 mL ethanol in round bottom flask.','Carefully add 2 mL conc. H₂SO₄ dropwise while swirling.','Fit reflux condenser. Heat gently on water bath at 70°C for 30 minutes.','Cool. Pour into separating funnel with water.','Wash with sodium carbonate solution to remove acid impurities.','Wash with distilled water. Dry over anhydrous CaCl₂. Collect ester layer.'], observations: 'A liquid with a characteristic fruity odour is obtained. Two layers form in separating funnel.', result: 'Ethyl acetate prepared with pleasant apple-like fruity smell.', precautions: ['Add H₂SO₄ slowly — exothermic.','Use reflux to prevent loss of volatile products.','Perform in a fume hood.'], videoId: '', quiz: [{q:'Esterification of acetic acid and ethanol produces:',opts:['Methyl acetate','Ethyl acetate','Propyl acetate','Butyl acetate'],ans:1},{q:'Catalyst used in Fischer esterification:',opts:['NaOH','KMnO₄','Conc. H₂SO₄','AlCl₃'],ans:2},{q:'Esterification is which type?',opts:['Irreversible','Reversible','Decomposition','Redox'],ans:1},{q:'Sodium carbonate wash removes:',opts:['Ester','Ethanol','Acid impurities','Water'],ans:2}] },
      { id: 'c11-4', title: 'Qualitative Analysis of Salts', desc: 'Systematically identify cations and anions in unknown inorganic salt samples.', difficulty: 'advanced', duration: '90 min', xp: 70, apparatus: ['test-tube','bunsen-burner','dropper','beaker','spatula'], aim: 'To identify the cation (Na⁺, K⁺, Ca²⁺, Fe³⁺, Cu²⁺) and anion (Cl⁻, SO₄²⁻, CO₃²⁻, NO₃⁻) in an unknown salt.', theory: 'Qualitative analysis uses systematic group reagents to precipitate cations. Anions are identified by specific colour reactions and gas tests.', equation: 'BaCl₂ + Na₂SO₄ → BaSO₄↓(white) + 2NaCl | AgNO₃ + NaCl → AgCl↓(white) + NaNO₃', materials: ['Unknown salt samples','Dilute HCl','Dilute H₂SO₄','BaCl₂ solution','AgNO₃ solution','NaOH solution','NH₄OH solution','Flame test wire','Test tubes and droppers'], procedure: ['Preliminary tests: note colour, perform flame test, dissolve in water or acid.','Anion tests: CO₃²⁻ (HCl + fizzing), Cl⁻ (AgNO₃ + white ppt), SO₄²⁻ (BaCl₂ + white ppt insoluble in HCl).','Cation tests with NaOH: white ppt = Ca²⁺/Zn²⁺/Al³⁺; blue ppt = Cu²⁺; reddish-brown = Fe³⁺.','Confirm identifications with further specific tests.'], observations: 'Record colour of precipitates, gas evolved and flame colours for each test.', result: 'Cation and anion of unknown salt identified.', precautions: ['Perform all tests systematically.','Use known samples for comparison.','Label all test tubes.'], videoId: '', quiz: [{q:'Reddish-brown ppt with NaOH indicates:',opts:['Cu²⁺','Fe³⁺','Ca²⁺','K⁺'],ans:1},{q:'AgNO₃ white ppt with:',opts:['SO₄²⁻','NO₃⁻','Cl⁻','CO₃²⁻'],ans:2},{q:'BaCl₂ white ppt insoluble in HCl with:',opts:['Cl⁻','CO₃²⁻','SO₄²⁻','NO₃⁻'],ans:2},{q:'Dilute HCl added to a carbonate gives:',opts:['White precipitate','Blue colour','Effervescence of CO₂','Brown ring'],ans:2}] },
      { id: 'c11-5', title: 'Rate of Reaction — Temperature Effect', desc: 'Study the effect of temperature on reaction rate using sodium thiosulphate and HCl.', difficulty: 'intermediate', duration: '50 min', xp: 60, apparatus: ['beaker','measuring-cylinder','thermometer','watch-glass'], aim: 'To study the effect of temperature on the rate of reaction between sodium thiosulphate and HCl.', theory: 'Reaction rate increases with temperature. The rate of sulphur precipitation is measured by the time taken for an X mark below the beaker to become invisible.', equation: 'Na₂S₂O₃ + 2HCl → 2NaCl + H₂O + SO₂ + S↓', materials: ['Sodium thiosulphate solution (0.1 M)','Dilute HCl (1 M)','Beakers','Thermometer','Water bath','Stopwatch','White paper with X mark'], procedure: ['Place 50 mL Na₂S₂O₃ over the X mark.','Add 5 mL HCl. Start stopwatch immediately.','Record time for X to become invisible.','Repeat at 20°C, 30°C, 40°C, 50°C using a water bath.','Plot rate (1/time) vs temperature.'], observations: 'As temperature increases, time for X to disappear decreases.', result: 'Rate of reaction increases with increase in temperature.', precautions: ['Use fresh solutions each time.','Ensure X mark is consistent.','Stir during heating to maintain uniform temperature.'], videoId: '', quiz: [{q:'X becomes invisible due to:',opts:['Colour of Na₂S₂O₃','Precipitation of sulphur','Formation of NaCl','Evolution of SO₂'],ans:1},{q:'Factor being investigated:',opts:['Concentration','Temperature','Pressure','Surface area'],ans:1},{q:'If time decreases with temperature, rate:',opts:['Decreases','Stays constant','Increases','Cannot be determined'],ans:2},{q:'Rate of reaction plotted as:',opts:['Time vs temperature','1/time vs temperature','Concentration vs time','Volume vs temperature'],ans:1}] },
      { id: 'c11-6', title: 'Saponification of Fats and Oils', desc: 'Prepare soap by the saponification of vegetable oil with sodium hydroxide.', difficulty: 'intermediate', duration: '60 min', xp: 65, apparatus: ['beaker','evaporating-dish','measuring-cylinder','dropper','spatula'], aim: 'To prepare soap (sodium salt of fatty acid) by saponification of vegetable oil with NaOH.', theory: 'Saponification is the alkaline hydrolysis of an ester (fat or oil) to form glycerol and the sodium salt of fatty acids (soap). Fats are triglycerides.', equation: 'Fat (triglyceride) + 3NaOH → Glycerol + 3 Sodium fatty acid salt (soap)', materials: ['Vegetable oil (20 mL)','NaOH solution (40%, 20 mL)','Ethanol (5 mL)','Saturated NaCl solution (for salting out)','Beaker','Bunsen burner','Stirring rod'], procedure: ['Mix 20 mL vegetable oil with 20 mL NaOH and 5 mL ethanol.','Heat gently on water bath while stirring for 20–30 minutes.','Test a drop in warm water — should form lather if complete.','Add mixture to 100 mL saturated NaCl solution. Soap separates as white curds.','Filter or skim off soap. Wash with cold water.'], observations: 'White soap curds form when salted out. Soap produces lather with water.', result: 'Soap successfully prepared by saponification.', precautions: ['Handle hot NaOH with care.','Keep flame low.','Add NaCl solution slowly.'], videoId: '', quiz: [{q:'Saponification is reaction of fat with:',opts:['HCl','H₂SO₄','NaOH','Na₂CO₃'],ans:2},{q:'Products of saponification:',opts:['Ester and water','Soap and glycerol','Salt and water','Acid and alcohol'],ans:1},{q:'Salting out means:',opts:['Adding salt to taste','Adding NaCl to separate soap','Removing glycerol','Boiling the mixture'],ans:1},{q:'Soap is the sodium salt of:',opts:['Glycerol','Fatty acid','Ethanol','Acetic acid'],ans:1}] },
      { id: 'c11-7', title: 'Electrolysis of Water', desc: 'Decompose water into hydrogen and oxygen using a Hoffmann voltameter.', difficulty: 'intermediate', duration: '45 min', xp: 60, apparatus: ['beaker','measuring-cylinder','dropper'], aim: 'To decompose water into hydrogen and oxygen by electrolysis and verify the 2:1 volume ratio.', theory: 'Pure water is a poor conductor. Addition of H₂SO₄ makes it conductive. At cathode: 2H₂O + 2e⁻ → H₂ + 2OH⁻. At anode: 2H₂O → O₂ + 4H⁺ + 4e⁻. H₂:O₂ volume ratio = 2:1.', equation: '2H₂O → 2H₂↑ + O₂↑ (electrolysis)', materials: ['Hoffmann voltameter','Dilute H₂SO₄ solution','DC power supply (9V)','Graphite or platinum electrodes','Connecting wires','Test tubes'], procedure: ['Fill voltameter with dilute H₂SO₄.','Connect electrodes to DC power supply. Switch on.','Observe gas bubbles at both electrodes. Collect gases in inverted tubes.','Note twice the volume at cathode (H₂) vs anode (O₂).','Test cathode gas with burning splint — burns with pop (H₂).','Test anode gas with glowing splint — relights (O₂).'], observations: 'H₂:O₂ ≈ 2:1. H₂ burns with squeaky pop; O₂ relights glowing splint.', result: 'Water decomposes into H₂ and O₂ in 2:1 ratio by electrolysis.', precautions: ['Handle H₂SO₄ with care.','Keep H₂ away from flames during collection.','Do not touch live electrodes.'], videoId: 'VJTNyW36VCw', quiz: [{q:'Hydrogen collected at which electrode?',opts:['Anode (positive)','Cathode (negative)','Both equally','Neither'],ans:1},{q:'Electrolyte added to water:',opts:['NaCl','KOH','Dilute H₂SO₄','Both A and B'],ans:2},{q:'Volume ratio H₂:O₂:',opts:['1:1','1:2','2:1','1:3'],ans:2},{q:'Hydrogen confirmed by:',opts:['Relighting glowing splint','Burning with squeaky pop','Turning limewater milky','Blue colour test'],ans:1}] },
      { id: 'c11-8', title: 'Chromatography of Plant Pigments', desc: 'Separate leaf pigments by paper chromatography to identify chlorophylls and carotenoids.', difficulty: 'intermediate', duration: '50 min', xp: 55, apparatus: ['beaker','watch-glass','measuring-cylinder'], aim: 'To separate and identify the pigments in green leaves using paper chromatography.', theory: 'Paper chromatography separates substances based on differential solubility in a solvent and affinity for paper. Rf = distance moved by pigment / distance moved by solvent. Chlorophyll-a (blue-green), chlorophyll-b (yellow-green), carotenoids (yellow-orange).', equation: 'Rf = distance travelled by pigment / distance travelled by solvent front', materials: ['Green leaves (spinach)','Chromatography paper strips','Petroleum ether:acetone (9:1) solvent','Glass jar with lid','Pencil','Mortar and pestle','Sand'], procedure: ['Grind fresh leaves with sand and solvent in mortar. Filter extract.','Draw pencil line 2 cm from bottom of chromatography strip.','Apply concentrated spot on pencil line. Dry and re-apply 5 times.','Place strip in jar with solvent below the spot. Cover and develop.','Mark solvent front immediately when complete.','Observe bands: carotenoids (top, highest Rf), chlorophyll b, chlorophyll a.'], observations: '3–4 coloured bands visible.', result: 'Plant pigments separated. Rf values calculated.', precautions: ['Do not let solvent wet the spot before development.','Work in well-ventilated area.','Keep jar covered during development.'], videoId: '', quiz: [{q:'Rf = ?',opts:['Solvent distance / pigment distance','Pigment distance / solvent distance','Time / distance','Distance / time'],ans:1},{q:'Highest Rf pigment in plant chromatography:',opts:['Chlorophyll-a','Chlorophyll-b','Carotenoids','Xanthophyll'],ans:2},{q:'Mobile phase in paper chromatography:',opts:['Paper','Silica gel','Solvent','Both paper and silica'],ans:2},{q:'Green colour in leaves is due to:',opts:['Carotenoids','Anthocyanins','Chlorophylls','Xanthophylls'],ans:2}] },
      { id: 'c11-9', title: 'Water Hardness Test (EDTA Method)', desc: 'Determine total hardness of water by complexometric titration with EDTA.', difficulty: 'advanced', duration: '60 min', xp: 60, apparatus: ['burette','pipette','conical-flask','beaker','clamp-stand'], aim: 'To determine the total hardness of a water sample by complexometric titration using EDTA.', theory: 'Hard water contains dissolved Ca²⁺ and Mg²⁺ salts. EDTA forms stable 1:1 complexes with these ions. EBT indicator turns wine-red with Ca²⁺/Mg²⁺ and blue when all ions are complexed (endpoint). Hardness expressed as ppm CaCO₃.', equation: 'Ca²⁺ + EDTA⁴⁻ → [Ca-EDTA]²⁻', materials: ['Water sample','0.01 M EDTA standard solution','EBT indicator','NH₄OH–NH₄Cl buffer (pH 10)','Burette and pipette','Conical flask'], procedure: ['Pipette 25 mL water sample into conical flask.','Add 5 mL NH₄OH–NH₄Cl buffer to maintain pH 10.','Add a pinch of EBT indicator. Solution turns wine-red.','Titrate with 0.01 M EDTA until colour changes from wine-red to blue.','Record volume used. Repeat for concordant results.','Calculate hardness: (V_EDTA × M_EDTA × 100 × 1000) / V_water.'], observations: 'Solution changes from wine-red to blue at endpoint.', result: 'Total hardness of water = ___ ppm CaCO₃.', precautions: ['Use fresh EBT indicator.','Maintain pH 10 with buffer.','Titrate slowly near endpoint.'], videoId: '', quiz: [{q:'Type of titration in EDTA water hardness test:',opts:['Acid-base','Redox','Complexometric','Precipitation'],ans:2},{q:'Indicator used:',opts:['Phenolphthalein','EBT (Eriochrome Black T)','Starch','Methyl orange'],ans:1},{q:'Hardness of water mainly due to:',opts:['NaCl and KCl','Ca²⁺ and Mg²⁺ salts','Fe²⁺ salts','Cl⁻ ions'],ans:1},{q:'Endpoint colour change with EBT:',opts:['Wine-red','Yellow','Blue','Pink'],ans:2}] },
      { id: 'c11-10', title: 'Solubility Curve of Potassium Nitrate', desc: 'Determine solubility of KNO₃ at different temperatures and plot the curve.', difficulty: 'intermediate', duration: '55 min', xp: 60, apparatus: ['beaker','thermometer','measuring-cylinder','spatula','watch-glass'], aim: 'To determine the solubility of KNO₃ at different temperatures and plot the solubility curve.', theory: 'Solubility is the maximum mass of solute that dissolves in 100 g of solvent at a given temperature. For most solids, solubility increases with temperature.', equation: 'Solubility = (mass of KNO₃ dissolved / mass of water) × 100', materials: ['KNO₃ (potassium nitrate)','Distilled water','Beakers (100 mL)','Thermometer (0–100°C)','Hot plate/water bath','Stirring rod','Balance','Graph paper'], procedure: ['Dissolve weighed KNO₃ in minimum boiling water.','Note temperature at which crystals just appear on cooling (saturation temperature).','Add more KNO₃, re-dissolve, cool again. Record new saturation temperature.','Repeat at 30, 40, 50, 60, 70°C.','Calculate solubility at each temperature. Plot solubility vs temperature.'], observations: 'Solubility of KNO₃ increases sharply with temperature.', result: 'Solubility curve plotted. KNO₃ shows high positive temperature dependence.', precautions: ['Cool slowly for accurate saturation temperature.','Stir continuously while cooling.','Use accurate temperature readings.'], videoId: '', quiz: [{q:'Solubility expressed in grams per:',opts:['1 L solvent','100 g solvent','100 mL solution','1 kg solution'],ans:1},{q:'Solubility of most salts ___ with temperature.',opts:['Decreases','Increases','Stays constant','First increases then decreases'],ans:1},{q:'A saturated solution:',opts:['Contains maximum dissolved solute','Is very dilute','Has been filtered','Contains a precipitate'],ans:0},{q:'KNO₃ shows ___ temperature coefficient of solubility.',opts:['Negative','Zero','High positive','Low positive'],ans:2}] }
    ]
  },
  {
    id: 'undergrad', catColor: '#a855f7', num: 3,
    title: 'Undergraduate: Physical & Organic',
    subtitle: 'BSc level analytical experiments',
    experiments: [
      { id: 'ug-1', title: 'Determination of Molarity by Titration', desc: 'Accurately determine molar concentration of an acid solution by standardisation.', difficulty: 'advanced', duration: '60 min', xp: 75, apparatus: ['burette','pipette','conical-flask','beaker','clamp-stand'], aim: 'To determine the molarity of a given HCl solution by titrating against standard Na₂CO₃ using methyl orange indicator.', theory: 'Na₂CO₃ is a primary standard (stable, pure, high molecular mass). Methyl orange used since equivalence point is in the acid range.', equation: '2HCl + Na₂CO₃ → 2NaCl + H₂O + CO₂', materials: ['Primary standard Na₂CO₃ (anhydrous, dried at 250°C)','HCl solution (~0.1 M)','Methyl orange indicator','Burette (50 mL)','Pipette (25 mL)','Conical flask','Distilled water'], procedure: ['Prepare standard Na₂CO₃ solution in 250 mL volumetric flask.','Fill burette with HCl.','Pipette 25 mL Na₂CO₃ into conical flask. Add methyl orange.','Titrate with HCl until colour changes from yellow to orange-pink.','Repeat for concordant readings (within 0.05 mL).','Calculate: M_HCl = 2 × M_Na₂CO₃ × V_Na₂CO₃ / V_HCl.'], observations: 'Indicator changes from yellow to orange-pink at endpoint.', result: 'Molarity of HCl = ___ M.', precautions: ['Dry Na₂CO₃ at 250°C to remove moisture.','Use volumetric flask for standard solution.','Take concordant readings.'], videoId: '', quiz: [{q:'Na₂CO₃ used as primary standard because:',opts:['It is cheap','It is highly soluble','It is stable, pure and has high molecular mass','It changes colour'],ans:2},{q:'Methyl orange preferred because:',opts:['More colourful','Equivalence point is in the acid range','Dissolves faster','Costs less'],ans:1},{q:'Molarity defined as:',opts:['Moles per kg solvent','Moles per litre solution','Grams per litre','Moles per 100 mL'],ans:1},{q:'Why dry Na₂CO₃ before weighing?',opts:['Increase mass','Remove surface moisture for accurate mass','Prevent colour change','React faster'],ans:1}] },
      { id: 'ug-2', title: 'Heat of Neutralisation', desc: 'Determine the enthalpy change during acid-base neutralisation using a calorimeter.', difficulty: 'advanced', duration: '60 min', xp: 70, apparatus: ['beaker','thermometer','measuring-cylinder'], aim: 'To determine the heat of neutralisation of HCl with NaOH.', theory: 'Heat of neutralisation is the enthalpy change when one mole of water forms. For strong acid + strong base: H⁺ + OH⁻ → H₂O, ΔH ≈ -57.3 kJ/mol. Measured using polystyrene cup calorimeter.', equation: 'H⁺ (aq) + OH⁻ (aq) → H₂O (l), ΔH = -57.3 kJ/mol', materials: ['1 M HCl (50 mL)','1 M NaOH (50 mL)','Polystyrene cup (calorimeter)','Thermometer (0.1°C accuracy)','Stirring rod','Balance'], procedure: ['Measure 50 mL HCl into polystyrene calorimeter. Record T₁.','Measure 50 mL NaOH separately.','Mix NaOH into HCl quickly. Stir and record maximum temperature T₂.','Calculate ΔT = T₂ - T₁.','q = mcΔT (m = 100 g, c = 4.18 J/g°C).','ΔH = -q / 0.05 kJ/mol.'], observations: 'ΔT ≈ 5–7°C rise. Heat released ≈ 2.5–3 kJ.', result: 'ΔH (neutralisation) ≈ -57 kJ/mol.', precautions: ['Use polystyrene cup to minimise heat loss.','Stir rapidly and record maximum temperature.','Use equimolar quantities.'], videoId: '', quiz: [{q:'Heat of neutralisation for strong acid + strong base:',opts:['-40 kJ/mol','-57 kJ/mol','-100 kJ/mol','-25 kJ/mol'],ans:1},{q:'Why use polystyrene cup?',opts:['Transparent','Poor heat conductor — minimises heat loss','Cheaper','Holds more liquid'],ans:1},{q:'Heat of neutralisation involves formation of:',opts:['Salt','Water','Acid','Both salt and water'],ans:1},{q:'50 mL each of 1M HCl and 1M NaOH: moles of water formed =',opts:['0.1','0.05','1','0.025'],ans:1}] },
      { id: 'ug-3', title: 'Conductometric Titration', desc: 'Titrate HCl with NaOH while monitoring electrical conductance to find the equivalence point.', difficulty: 'advanced', duration: '60 min', xp: 75, apparatus: ['beaker','burette','measuring-cylinder'], aim: 'To determine the equivalence point in titration of HCl vs NaOH by measuring conductance.', theory: 'During titration, H⁺ (high mobility) is replaced by Na⁺ (lower mobility), so conductance decreases before the equivalence point. After EP, OH⁻ addition increases conductance. Minimum conductance = equivalence point.', equation: 'H⁺ + OH⁻ → H₂O | Equivalence point = minimum conductance', materials: ['HCl solution (50 mL, ~0.1 M)','NaOH solution (~0.1 M)','Conductance meter with dip cell','Burette','Magnetic stirrer'], procedure: ['Take 50 mL HCl in beaker with conductance cell and stirrer.','Add NaOH from burette in 0.5 mL increments.','Measure and record conductance after each addition.','Plot conductance vs volume of NaOH.','V-shaped minimum indicates equivalence point.'], observations: 'Conductance decreases, reaches minimum at EP, then increases.', result: 'Equivalence point determined from conductance minimum. [HCl] calculated.', precautions: ['Calibrate conductance meter before use.','Stir before each reading.','Add NaOH slowly near expected EP.'], videoId: '', quiz: [{q:'Conductance decreases because:',opts:['Na⁺ is less mobile than H⁺','OH⁻ reacts with electrode','Water is formed','NaCl does not conduct'],ans:0},{q:'Equivalence point corresponds to:',opts:['Maximum conductance','Minimum conductance','No change','Colour change'],ans:1},{q:'Conductance is measured in:',opts:['Ohms','Siemens','Volts','Amperes'],ans:1},{q:'After EP, conductance increases due to excess:',opts:['NaCl','H⁺','OH⁻','Na⁺'],ans:2}] },
      { id: 'ug-4', title: 'Viscosity and Surface Tension Measurement', desc: 'Measure viscosity by Ostwald viscometer and surface tension by stalagmometer.', difficulty: 'advanced', duration: '60 min', xp: 70, apparatus: ['measuring-cylinder','thermometer','beaker'], aim: 'To determine viscosity and surface tension of given liquids.', theory: 'Viscosity is resistance to flow. Measured by time for liquid to flow through a capillary. η/η₀ = (ρ·t)/(ρ₀·t₀). Surface tension measured by drop count: γ = γ₀ × (ρ·n₀)/(ρ₀·n).', equation: 'η/η₀ = (ρ × t) / (ρ₀ × t₀)', materials: ['Ostwald viscometer','Stalagmometer','Water (reference)','Alcohol or glycerine (test liquid)','Thermometer','Stopwatch','Density bottle'], procedure: ['Viscosity: fill viscometer with water. Time flow from upper to lower mark. Repeat 3 times. Average = t₀.','Repeat with test liquid. Record t and ρ.','Calculate η = η₀ × (ρ·t)/(ρ₀·t₀).','Surface tension: count drops of water = n₀. Count drops of test liquid = n.','Calculate γ = γ₀ × (ρ·n₀)/(ρ₀·n).'], observations: 'Viscous liquids flow slowly. Liquids with lower surface tension form more drops.', result: 'Viscosity and surface tension of test liquids calculated.', precautions: ['Maintain constant temperature.','Clean glassware before use.','Ensure no air bubbles.'], videoId: '', quiz: [{q:'Ostwald viscometer measures viscosity based on:',opts:['Colour change','Time of flow through capillary','Drop count','Temperature change'],ans:1},{q:'Higher viscosity means liquid flows:',opts:['Faster','Slower','Same rate','More drops form'],ans:1},{q:'Surface tension units:',opts:['N/m²','N/m','Pa','J/m³'],ans:1},{q:'Water has higher surface tension than ethanol because:',opts:['Water is heavier','Water forms stronger hydrogen bonds','Ethanol is more viscous','Ethanol is denser'],ans:1}] },
      { id: 'ug-5', title: 'Preparation of Aspirin', desc: 'Synthesise aspirin (acetylsalicylic acid) from salicylic acid by acetylation.', difficulty: 'advanced', duration: '75 min', xp: 80, apparatus: ['beaker','round-bottom-flask','conical-flask','measuring-cylinder','watch-glass'], aim: 'To prepare aspirin by acetylation of salicylic acid with acetic anhydride.', theory: 'Aspirin is prepared by reacting salicylic acid with acetic anhydride in the presence of phosphoric acid (catalyst). The -OH group reacts with the anhydride forming the ester (aspirin) and acetic acid.', equation: 'C₆H₄(OH)COOH + (CH₃CO)₂O → C₆H₄(OCOCH₃)COOH + CH₃COOH', materials: ['Salicylic acid (2 g)','Acetic anhydride (3 mL)','Conc. H₃PO₄ (5 drops)','Distilled water','Ice bath','Conical flask (50 mL)','Filter paper and Buchner funnel','FeCl₃ solution (purity test)'], procedure: ['Weigh 2 g salicylic acid into dry 50 mL conical flask.','Add 3 mL acetic anhydride and 5 drops conc. H₃PO₄. Swirl.','Heat at 85°C for 15 minutes in water bath. Swirl occasionally.','Remove from heat. Carefully add 20 mL distilled water (CAUTION: exothermic).','Cool in ice bath. Crystals of aspirin form.','Filter with Buchner funnel. Wash with cold water. Dry.','Test purity: dissolve crystals in ethanol. Add FeCl₃. No purple = pure.'], observations: 'White needle-like crystals form. No purple colour with FeCl₃ indicates purity.', result: 'Aspirin synthesised. Purity confirmed by FeCl₃ test.', precautions: ['Add water carefully — exothermic.','Acetic anhydride is corrosive. Work in fume hood.','Keep ice bath ready.'], videoId: '', quiz: [{q:'Aspirin is chemically:',opts:['Acetaminophen','Acetylsalicylic acid','Salicylic acid','Asparagine'],ans:1},{q:'Purity of aspirin tested with:',opts:['AgNO₃','FeCl₃','NaOH','KMnO₄'],ans:1},{q:'Acetic anhydride reacts with ___ group of salicylic acid.',opts:['-COOH','-NH₂','-OH','-CHO'],ans:2},{q:'Purpose of ice bath:',opts:['Cool catalyst','Promote crystallisation','Prevent reaction','Add water'],ans:1}] },
      { id: 'ug-6', title: 'Colloid Formation (Arsenious Sulfide)', desc: 'Prepare an As₂S₃ colloid and study coagulation and Tyndall effect.', difficulty: 'advanced', duration: '50 min', xp: 65, apparatus: ['beaker','measuring-cylinder','dropper'], aim: 'To prepare As₂S₃ sol and study its colloidal properties.', theory: 'Colloids are dispersions of particles 1–100 nm in size. As₂S₃ sol is negatively charged. Properties: Tyndall effect, Brownian motion, coagulation by electrolytes. Hardy-Schulze rule: higher charge = more effective coagulation.', equation: 'As₂O₃ + 3H₂S → As₂S₃ (sol) + 3H₂O', materials: ['Arsenic trioxide','H₂S gas or sodium sulphide solution','Distilled water','Electrolytes: NaCl, MgCl₂, AlCl₃','Dialysis membrane','Laser pointer (Tyndall effect)'], procedure: ['Prepare As₂S₃ sol by passing H₂S gas through cold dilute As₂O₃ solution.','Observe yellow As₂S₃ sol formed.','Demonstrate Tyndall effect by passing laser beam through sol.','Test coagulation: add NaCl, MgCl₂, AlCl₃ to separate portions.','Compare coagulation power: Al³⁺ > Mg²⁺ > Na⁺.'], observations: 'Yellow sol shows Tyndall effect. AlCl₃ coagulates at lowest concentration.', result: 'As₂S₃ sol prepared. Hardy-Schulze rule verified.', precautions: ['Handle arsenic compounds with extreme care (toxic).','Perform in fume hood.','Wear gloves throughout.'], videoId: '', quiz: [{q:'Tyndall effect shown by:',opts:['True solutions','Colloids','Suspensions','Gases'],ans:1},{q:'As₂S₃ sol is ___ charged.',opts:['Positively','Negatively','Neutral','Both'],ans:1},{q:'Most effective coagulant for As₂S₃:',opts:['NaCl','MgCl₂','AlCl₃','KCl'],ans:2},{q:'Colloid particle size:',opts:['<1 nm','1–100 nm','100–1000 nm','>1 μm'],ans:1}] },
      { id: 'ug-7', title: 'Determination of Equilibrium Constant', desc: 'Determine Kc for the ester-acid equilibrium reaction experimentally.', difficulty: 'advanced', duration: '90 min', xp: 75, apparatus: ['beaker','measuring-cylinder','burette','conical-flask'], aim: 'To determine the equilibrium constant Kc for the esterification reaction.', theory: 'Kc = [products]/[reactants] at equilibrium. By back-titrating the equilibrium mixture with NaOH, remaining acid concentration is determined, allowing calculation of all equilibrium concentrations.', equation: 'CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O; Kc = [ester][water]/[acid][alcohol]', materials: ['Glacial acetic acid','Ethanol','Conc. H₂SO₄ (catalyst)','Sealed ampoules','Standard NaOH (0.5 M)','Phenolphthalein','Burette','Ice bath'], procedure: ['Prepare mixtures of acetic acid and ethanol in different molar ratios in sealed ampoules.','Add a few drops H₂SO₄ as catalyst.','Heat at 60°C for 1 hour to reach equilibrium.','Quench in ice to freeze equilibrium.','Titrate acid content with standard NaOH.','Calculate moles of acid remaining, ester formed, and Kc.'], observations: 'Kc for different initial compositions gives the same value at same temperature.', result: 'Kc ≈ 4 for this esterification at 60°C.', precautions: ['Seal ampoules properly.','Quench rapidly in ice.','Use accurate titration technique.'], videoId: '', quiz: [{q:'Kc for the esterification is approximately:',opts:['0.5','4','100','0.01'],ans:1},{q:'Equilibrium is frozen by:',opts:['Adding catalyst','Quenching in ice','Increasing temperature','Adding NaOH'],ans:1},{q:'Kc changes with:',opts:['Concentration','Temperature','Pressure','Both concentration and pressure'],ans:1},{q:'Back titration with NaOH determines:',opts:['Ester concentration','Alcohol concentration','Remaining acid concentration','Catalyst amount'],ans:2}] },
      { id: 'ug-8', title: 'Saponification Kinetics', desc: 'Determine the second-order rate constant for ester hydrolysis by conductometry.', difficulty: 'advanced', duration: '75 min', xp: 75, apparatus: ['beaker','measuring-cylinder','thermometer'], aim: 'To study the kinetics of saponification of ethyl acetate with NaOH and determine rate constant k.', theory: 'Saponification: CH₃COOC₂H₅ + OH⁻ → CH₃COO⁻ + C₂H₅OH. Second-order reaction. As NaOH is consumed, conductance decreases (OH⁻ replaced by less mobile CH₃COO⁻).', equation: 'Second-order rate law: k = (1/t) × [a·ΔG₀ / (a-x)·ΔG_t]', materials: ['Ethyl acetate','NaOH (0.01 M, equal volume)','Conductance meter','Stopwatch','Beaker','Water bath (constant temperature)'], procedure: ['Mix equal volumes of ethyl acetate and NaOH at time zero.','Immediately measure conductance G₀.','Record conductance at 5-minute intervals for 60 minutes.','Record G∞ (conductance at completion).','Calculate k from second-order integrated rate law.'], observations: 'Conductance decreases exponentially with time.', result: 'Rate constant k = ___ L mol⁻¹ min⁻¹.', precautions: ['Maintain constant temperature.','Measure conductance immediately after mixing.','Keep same cell constant throughout.'], videoId: '', quiz: [{q:'Order of saponification reaction:',opts:['Zero','First','Second','Third'],ans:2},{q:'Why does conductance decrease?',opts:['OH⁻ is replaced by less mobile CH₃COO⁻','Temperature increases','NaOH concentration increases','Ester is conductor'],ans:0},{q:'Units of second-order rate constant k:',opts:['s⁻¹','mol L⁻¹ s⁻¹','L mol⁻¹ s⁻¹','Dimensionless'],ans:2},{q:'G∞ represents:',opts:['Initial conductance','Conductance at completion','Maximum conductance','Average conductance'],ans:1}] },
      { id: 'ug-9', title: 'Preparation of Acetylacetone Complex', desc: 'Synthesise the tris(acetylacetonato)iron(III) complex [Fe(acac)₃].', difficulty: 'advanced', duration: '75 min', xp: 75, apparatus: ['beaker','conical-flask','measuring-cylinder','watch-glass'], aim: 'To prepare and characterise [Fe(acac)₃], a coordination compound.', theory: 'Acetylacetone (acac⁻) is a bidentate β-diketone chelate. Fe³⁺ reacts with 3 acac⁻ ligands forming a neutral octahedral complex.', equation: 'FeCl₃ + 3 C₅H₈O₂ + 3 NH₃ → [Fe(acac)₃] + 3 NH₄Cl', materials: ['FeCl₃·6H₂O (2.7 g)','Acetylacetone (3.5 mL)','Dilute aqueous ammonia (1 M)','Ethanol','Distilled water','Beaker (100 mL)'], procedure: ['Dissolve 2.7 g FeCl₃·6H₂O in 10 mL water.','Add 3.5 mL acetylacetone while stirring.','Add dilute ammonia dropwise until pH 6–7. Red-brown precipitate forms.','Cool in ice, filter, wash with cold water.','Recrystallise from minimum hot ethanol. Cool. Filter off red-brown crystals.','Dry in a desiccator.'], observations: 'Red-brown crystalline [Fe(acac)₃] obtained.', result: '[Fe(acac)₃] complex prepared.', precautions: ['Add ammonia slowly to avoid overshooting pH.','Keep product away from moisture.','Handle FeCl₃ carefully (stains).'], videoId: '', quiz: [{q:'Acetylacetone is a ___ ligand.',opts:['Monodentate','Bidentate','Tridentate','Tetradentate'],ans:1},{q:'[Fe(acac)₃] geometry:',opts:['Tetrahedral','Square planar','Octahedral','Linear'],ans:2},{q:'Colour of [Fe(acac)₃] crystals:',opts:['Blue','White','Red-brown','Yellow'],ans:2},{q:'Acetylacetone coordinates through its ___ atoms.',opts:['Carbon','Nitrogen','Oxygen','Sulphur'],ans:2}] },
      { id: 'ug-10', title: 'Thermochemical Reaction Study', desc: "Determine enthalpy of dissolution and lattice energy using Hess's law.", difficulty: 'advanced', duration: '75 min', xp: 70, apparatus: ['beaker','thermometer','measuring-cylinder'], aim: "To determine the enthalpy of dissolution (ΔH_soln) of KNO₃ and verify Hess's law.", theory: "ΔH_soln = ΔH_lattice + ΔH_hydration. Measured using a calorimeter: q = mcΔT. By measuring enthalpy changes for different steps and applying Hess's law, the enthalpy of an unmeasured step can be calculated.", equation: "ΔH_soln = ΔH_lattice + ΔH_hydration; q = mcΔT", materials: ['KNO₃ (10 g)','Distilled water (100 mL)','Polystyrene calorimeter','Thermometer','Balance'], procedure: ['Add 100 mL water to calorimeter. Record temperature T₁.','Add 10 g KNO₃. Stir until dissolved. Record T₂.','Calculate ΔT = T₂ - T₁ (endothermic: negative ΔT).','q = -mcΔT. Moles KNO₃ = 10/101 = 0.099 mol.','Repeat for NaOH dissolution (exothermic).','Use Hess\'s law to calculate lattice energy.'], observations: 'KNO₃ dissolves endothermically (ΔT negative). NaOH dissolves exothermically.', result: 'ΔH_soln(KNO₃) ≈ +35 kJ/mol.', precautions: ['Add solute in one lot to minimise heat exchange.','Stir rapidly and record temperature quickly.','Use an insulated calorimeter.'], videoId: '', quiz: [{q:'KNO₃ dissolves ___ and the temperature ___.',opts:['exothermically, rises','endothermically, falls','exothermically, falls','endothermically, rises'],ans:1},{q:"Hess's law states the total enthalpy change is:",opts:['Path dependent','Path independent','Temperature dependent','Pressure dependent'],ans:1},{q:'Units of enthalpy:',opts:['J/mol','kJ/mol','Both J/mol and kJ/mol','Calories only'],ans:2},{q:'ΔH_soln measured using:',opts:['Spectrophotometer','pH meter','Calorimeter','Conductance meter'],ans:2}] }
    ]
  },
  {
    id: 'postgrad', catColor: '#f59e0b', num: 4,
    title: 'Postgraduate: Analytical Chemistry',
    subtitle: 'MSc level instrumental analysis',
    experiments: [
      { id: 'pg-1', title: 'UV-Visible Spectroscopy of KMnO₄', desc: 'Study the absorption spectrum of KMnO₄ and verify Beer-Lambert law.', difficulty: 'expert', duration: '60 min', xp: 85, apparatus: ['beaker','measuring-cylinder','dropper'], aim: 'To record the UV-Visible absorption spectrum of KMnO₄ and verify Beer-Lambert law by preparing a calibration curve.', theory: 'Beer-Lambert law: A = ε·c·l. KMnO₄ absorbs visible light at λmax ≈ 525 nm (purple colour). Absorbance is directly proportional to concentration for dilute solutions.', equation: 'A = εcl; log(I₀/I) = A', materials: ['KMnO₄ stock solution (1000 ppm)','Distilled water','Volumetric flasks','UV-Vis spectrophotometer','Cuvettes','Pipettes'], procedure: ['Prepare standard KMnO₄ solutions: 2, 4, 6, 8, 10 ppm from stock.','Scan 400–700 nm to find λmax (≈525 nm).','Measure absorbance of each standard at λmax.','Plot A vs concentration (calibration curve).','Measure absorbance of unknown. Read concentration from calibration curve.'], observations: 'Linear calibration curve obtained. λmax = 525 nm. R² ≥ 0.999.', result: 'Beer-Lambert law verified. Concentration of unknown determined.', precautions: ['Blank spectrophotometer with distilled water.','Keep cuvettes clean and scratch-free.','Work within linear range (A < 1.0).'], videoId: '', quiz: [{q:'Beer-Lambert law: absorbance is proportional to:',opts:['Temperature','Concentration and path length','Pressure','Wavelength'],ans:1},{q:'KMnO₄ maximum absorbance at approximately:',opts:['400 nm','525 nm','650 nm','780 nm'],ans:1},{q:'Colour of KMnO₄ solution:',opts:['Blue','Yellow','Purple','Green'],ans:2},{q:'Beer-Lambert law fails at:',opts:['Low concentrations','High concentrations','Any temperature','All dilutions'],ans:1}] },
      { id: 'pg-2', title: 'IR Spectroscopy of Organic Compounds', desc: 'Identify functional groups in organic compounds from their IR spectra.', difficulty: 'expert', duration: '60 min', xp: 85, apparatus: ['beaker','watch-glass','dropper'], aim: 'To record IR spectra of given organic compounds and identify functional groups from characteristic absorption bands.', theory: 'IR spectroscopy measures absorption of infrared radiation by molecular vibrations. Key regions: O–H (2500–3300 cm⁻¹ broad), N–H (~3300 cm⁻¹), C=O (1700–1750 cm⁻¹), C–H (2850–2960 cm⁻¹).', equation: 'Wavenumber (ν̃) = 1/λ; E = hν = hcν̃', materials: ['IR spectrophotometer (FTIR)','KBr discs','Organic samples (ethanol, acetone, acetic acid, amine)','Liquid cell','Mortar and pestle'], procedure: ['Prepare KBr disc: mix a few mg of solid sample with KBr and press into a transparent disc.','For liquids: place 1–2 drops between NaCl plates as thin film.','Record IR spectrum from 4000 to 400 cm⁻¹.','Identify key peaks: C=O stretch (~1715 cm⁻¹ for acid), O–H broad (2500–3300).','Assign peaks to functional groups for each compound.'], observations: 'Acetic acid: broad O–H (2500–3300), C=O at 1710. Ethanol: O–H at 3330. Acetone: C=O at 1715.', result: 'Functional groups identified from characteristic IR bands.', precautions: ['KBr must be dry.','NaCl plates dissolve in water — keep dry.','Clean plates before each measurement.'], videoId: '', quiz: [{q:'C=O stretch of a carboxylic acid at approximately:',opts:['3300 cm⁻¹','1710 cm⁻¹','1000 cm⁻¹','500 cm⁻¹'],ans:1},{q:'Broad O–H absorption is characteristic of:',opts:['Ketones','Esters','Carboxylic acids','Amines'],ans:2},{q:'KBr used for solid IR sample preparation because:',opts:['It absorbs IR','It is transparent to IR radiation','It improves solubility','It reacts with sample'],ans:1},{q:'N–H stretch at approximately:',opts:['1000 cm⁻¹','1700 cm⁻¹','3300 cm⁻¹','500 cm⁻¹'],ans:2}] },
      { id: 'pg-3', title: 'Potentiometric Titration', desc: 'Determine the endpoint of acid-base titration by monitoring electrode potential.', difficulty: 'expert', duration: '60 min', xp: 80, apparatus: ['burette','beaker','clamp-stand','measuring-cylinder'], aim: 'To determine the endpoint of a titration by potentiometric method.', theory: 'A glass electrode + reference electrode measures potential (emf) of the solution. Endpoint corresponds to maximum rate of emf change (d(pH)/dV maximum). More accurate than indicators.', equation: 'E = E° + (RT/nF)ln[H⁺] = E° - 0.0591·pH (at 25°C)', materials: ['NaOH solution (0.1 M)','HCl solution (unknown)','pH meter with glass electrode','Magnetic stirrer','Burette (50 mL)','Beaker (150 mL)'], procedure: ['Take 25 mL HCl in beaker with magnetic stirrer and electrodes.','Add NaOH in 0.5 mL increments.','Record pH after each addition.','Add in 0.1 mL increments near the endpoint.','Plot pH vs V_NaOH. Draw dpH/dV vs V. Maximum = endpoint.','Calculate [HCl] from endpoint volume.'], observations: 'Sharp inflection in pH curve and sharp peak in dpH/dV at endpoint.', result: 'Endpoint determined accurately. [HCl] calculated.', precautions: ['Calibrate pH meter before use.','Stir between readings.','Allow equilibration before reading.'], videoId: '', quiz: [{q:'Endpoint in potentiometric titration corresponds to:',opts:['Maximum pH','Minimum pH','Maximum d(pH)/dV','Minimum emf'],ans:2},{q:'Nernst equation relates emf to:',opts:['Temperature only','Concentration only','Both temperature and concentration','Pressure'],ans:2},{q:'Potentiometric titration is more accurate because:',opts:['It is faster','It is objective — no colour judgment needed','It uses less titrant','It is cheaper'],ans:1},{q:'The glass electrode is sensitive to:',opts:['Na⁺ ions','H⁺ ions','Cl⁻ ions','OH⁻ ions'],ans:1}] },
      { id: 'pg-4', title: 'Chemical Kinetics of Iodination', desc: 'Study the iodine clock reaction to determine the rate law for iodination of acetone.', difficulty: 'expert', duration: '75 min', xp: 85, apparatus: ['beaker','measuring-cylinder','dropper','thermometer'], aim: 'To determine the order of reaction with respect to I₂, acetone, and H⁺ for acid-catalysed iodination of acetone.', theory: 'CH₃COCH₃ + I₂ → ICH₂COCH₃ + H⁺ + I⁻. First order in acetone and H⁺, zero order in I₂. Rate = k[acetone][H⁺]. Starch indicator turns blue when thiosulphate is consumed, marking time for a fixed amount of I₂ to react.', equation: 'Rate = k[CH₃COCH₃][H⁺]; r = d[I₂]/dt', materials: ['Acetone solutions (0.5 M, 1.0 M)','HCl solutions (0.5 M, 1.0 M)','I₂ solution (0.01 M)','Sodium thiosulphate (0.001 M)','Starch solution','Stopwatch','Beakers'], procedure: ['Mix acetone, HCl, thiosulphate, and starch in a beaker.','Add I₂ solution at time zero.','Start stopwatch. Record time for blue colour to appear.','Repeat varying concentrations of acetone, HCl and I₂ separately.','Calculate rate = ΔI₂/time. Determine order from rate vs concentration data.'], observations: 'Doubling acetone doubles rate. Doubling HCl doubles rate. Doubling I₂ has no effect.', result: 'Rate law: Rate = k[acetone]¹[H⁺]¹[I₂]⁰. k calculated.', precautions: ['Use consistent temperature throughout.','Add I₂ last and start timing precisely.','Use same concentration of thiosulphate for all runs.'], videoId: '', quiz: [{q:'Order w.r.t. I₂ in iodination of acetone:',opts:['First','Second','Zero','Third'],ans:2},{q:'Overall rate law:',opts:['k[I₂]','k[acetone][H⁺]','k[acetone][I₂][H⁺]','k[acetone][I₂]'],ans:1},{q:'Starch in iodine clock detects:',opts:['Acetone','I₂ depletion','H⁺ presence','Thiosulphate'],ans:1},{q:'Doubling acetone and observing double rate confirms ___ order.',opts:['Zero','First','Second','Third'],ans:1}] },
      { id: 'pg-5', title: 'pKa Determination of Weak Acid', desc: 'Determine the acid dissociation constant (Ka) of acetic acid potentiometrically.', difficulty: 'expert', duration: '60 min', xp: 80, apparatus: ['burette','beaker','measuring-cylinder','clamp-stand'], aim: 'To determine pKa of acetic acid using a potentiometric half-neutralisation method.', theory: 'For a weak acid: Ka = [H⁺][A⁻]/[HA]. At half-neutralisation, [HA] = [A⁻], so Ka = [H⁺] and pKa = pH at that point.', equation: 'pKa = pH at half-equivalence point (Henderson-Hasselbalch: pH = pKa + log[A⁻]/[HA])', materials: ['Acetic acid (0.1 M, 25 mL)','NaOH (0.1 M)','pH meter with glass electrode','Burette','Magnetic stirrer'], procedure: ['Titrate 25 mL acetic acid with 0.1 M NaOH potentiometrically.','Record pH at each 0.5 mL addition.','Plot pH vs V_NaOH. Identify equivalence point from inflection.','Half-equivalence volume = V_eq / 2.','pKa = pH at half-equivalence point.','Compare with literature value (4.74).'], observations: 'pH at half-equivalence ≈ 4.74, consistent with pKa(CH₃COOH) = 4.74.', result: 'pKa of acetic acid = ___ (experimental). Literature = 4.74.', precautions: ['Calibrate pH meter precisely.','Add NaOH slowly near equivalence point.','Allow equilibration before reading.'], videoId: '', quiz: [{q:'pKa of acetic acid is approximately:',opts:['1.2','4.74','7.0','10.5'],ans:1},{q:'At half-equivalence point [HA] = [A⁻] and pH =',opts:['7','0','pKa','pKb'],ans:2},{q:'Henderson-Hasselbalch equation:',opts:['pH = pKa - log[A⁻]/[HA]','pH = pKa + log[A⁻]/[HA]','pH = pKw - pKa','pH = pKa × c'],ans:1},{q:'A weaker acid has a ___ Ka value.',opts:['Larger','Smaller','Equal to 1','Zero'],ans:1}] },
      { id: 'pg-6', title: 'Complexometric Titration with EDTA', desc: 'Determine concentrations of Ca²⁺ and Mg²⁺ in water by EDTA titration.', difficulty: 'expert', duration: '75 min', xp: 80, apparatus: ['burette','pipette','conical-flask','beaker','clamp-stand'], aim: 'To determine total Ca²⁺ and Mg²⁺ hardness using EDTA titrations.', theory: 'At pH 10 EDTA titrates both Ca²⁺ and Mg²⁺ (total hardness). At pH 12–13 Mg²⁺ is precipitated as Mg(OH)₂ and only Ca²⁺ is titrated. [Mg²⁺] = total - [Ca²⁺].', equation: 'Ca²⁺ + EDTA⁴⁻ → [Ca-EDTA]²⁻ (pH 12); Ca²⁺ + Mg²⁺ + EDTA (pH 10)', materials: ['0.01 M EDTA standard','Water sample','EBT indicator (pH 10)','Calcon indicator (pH 12)','NH₄OH–NH₄Cl buffer (pH 10)','NaOH (2 M)','Burette'], procedure: ['Total hardness: Pipette 25 mL water. Add buffer pH 10. Add EBT. Titrate with EDTA until blue.','Ca²⁺ hardness: Pipette 25 mL water. Add NaOH (pH 12–13). Add Calcon. Titrate with EDTA until blue.','[Ca²⁺] from second titration. [Mg²⁺] = total – [Ca²⁺].','Express as ppm CaCO₃.'], observations: 'Different volumes of EDTA for total and Ca²⁺ titrations allow calculation of [Mg²⁺].', result: '[Ca²⁺] = ___ ppm; [Mg²⁺] = ___ ppm; Total hardness = ___ ppm CaCO₃.', precautions: ['Prepare fresh indicators.','Perform titrations in duplicate.','Ensure correct pH for each titration.'], videoId: '', quiz: [{q:'At pH 12 EDTA titrates mainly:',opts:['Mg²⁺ only','Ca²⁺ only','Both Ca²⁺ and Mg²⁺','Neither'],ans:1},{q:'Indicator for Ca²⁺ determination at pH 12:',opts:['EBT','Calcon/Murexide','Phenolphthalein','Starch'],ans:1},{q:'[Mg²⁺] = total - [Ca²⁺] is based on:',opts:['Stoichiometry',"Hess's law",'Beer-Lambert','Hardy-Schulze'],ans:0},{q:'EDTA stands for:',opts:['Ethylene diamine tetra acetic acid','Ethanol dimer triamine acetic acid','Ethyl diacetic acid','Ethylene diazo tetra amine'],ans:0}] },
      { id: 'pg-7', title: 'Thin Layer Chromatography', desc: 'Separate and identify amino acids or dyes by TLC and calculate Rf values.', difficulty: 'expert', duration: '45 min', xp: 75, apparatus: ['beaker','watch-glass','dropper'], aim: 'To separate a mixture of amino acids using TLC and determine Rf values.', theory: 'TLC uses silica gel as stationary phase. Less polar compounds travel further. Rf = distance by spot / distance by solvent. Amino acids visualised by ninhydrin spray (purple colour).', equation: 'Rf = distance moved by compound / distance moved by solvent front', materials: ['TLC plates (silica gel 60 F254)','Developing tank with lid','Developing solvent (n-butanol:acetic acid:water 4:1:1)','Amino acid solutions (glycine, alanine, leucine)','Capillary tubes','Ninhydrin spray','UV lamp (254 nm)'], procedure: ['Draw pencil baseline 1 cm from bottom of TLC plate.','Apply amino acid spots with capillary. Dry between applications.','Place plate in tank. Solvent level below baseline.','Develop until solvent front is 8–10 cm. Mark solvent front immediately.','Spray with ninhydrin. Warm gently. Mark all purple spots.','Calculate Rf for each amino acid.'], observations: 'Different amino acids give separate spots. Purple spots appear after ninhydrin spray.', result: 'Rf (glycine) ≈ 0.26; Rf (alanine) ≈ 0.38; Rf (leucine) ≈ 0.61.', precautions: ['Do not let solvent touch the spot.','Keep tank covered to saturate vapour.','Mark spots immediately after development.'], videoId: '', quiz: [{q:'Rf value increases with:',opts:['Increasing polarity','Decreasing polarity','Increasing molecular weight','Decreasing temperature'],ans:1},{q:'Amino acids in TLC visualised using:',opts:['UV light only','Iodine vapour','Ninhydrin spray','FeCl₃ spray'],ans:2},{q:'TLC stationary phase is commonly:',opts:['Alumina','Cellulose','Silica gel','Ion exchange resin'],ans:2},{q:'Rf of 1.0 means the compound:',opts:['Did not move','Moved with the solvent front','Moved halfway','Is not detectable'],ans:1}] },
      { id: 'pg-8', title: 'Gravimetric Analysis of Sulphate', desc: 'Determine sulphate content by precipitation as BaSO₄ and gravimetric weighing.', difficulty: 'expert', duration: '90 min', xp: 85, apparatus: ['beaker','funnel','evaporating-dish','watch-glass','spatula'], aim: 'To determine the percentage of SO₄²⁻ in a sample by precipitation as BaSO₄.', theory: 'Gravimetric analysis involves precipitation, filtration, washing, ignition, and weighing. BaSO₄ is highly insoluble (Ksp ≈ 10⁻¹¹). %SO₄²⁻ calculated from mass of BaSO₄.', equation: 'Ba²⁺ + SO₄²⁻ → BaSO₄↓ (white)', materials: ['Sample containing SO₄²⁻','BaCl₂ solution (0.1 M)','Dilute HCl','Crucible','Muffle furnace','Ashless filter paper (Whatman 42)','Drying oven'], procedure: ['Dissolve sample in dilute HCl. Heat to near boiling.','Add excess BaCl₂ slowly while stirring. Digest 1 hour at 80°C.','Filter through ashless filter paper. Wash with hot water until Cl⁻ free.','Transfer paper + ppt to pre-weighed crucible. Ignite at 800°C for 30 min.','Cool in desiccator. Weigh crucible + BaSO₄.','%SO₄²⁻ = (mass BaSO₄ × 96.06 / 233.4) / sample mass × 100.'], observations: 'White BaSO₄ precipitate obtained. Stable after ignition.', result: '%SO₄²⁻ = ___ % in sample.', precautions: ['Add BaCl₂ slowly to obtain large filterable crystals.','Digest at 80°C for coagulation.','Wash until Cl⁻-free.'], videoId: '', quiz: [{q:'Precipitating agent for SO₄²⁻:',opts:['AgNO₃','BaCl₂','Pb(NO₃)₂','CaCl₂'],ans:1},{q:'BaSO₄ ignited at 800°C to:',opts:['Dissolve it','Burn off filter paper and dry precipitate','Change colour','Increase solubility'],ans:1},{q:'Gravimetric factor for BaSO₄ to SO₄²⁻:',opts:['233.4/96.06','96.06/233.4','137.3/96.06','32/233.4'],ans:1},{q:'Washing with AgNO₃ tests for absence of:',opts:['Ba²⁺','SO₄²⁻','Cl⁻','OH⁻'],ans:2}] },
      { id: 'pg-9', title: 'Atomic Absorption Spectroscopy Simulation', desc: 'Determine trace metal concentrations using AAS calibration and standard addition.', difficulty: 'expert', duration: '60 min', xp: 90, apparatus: ['beaker','measuring-cylinder','dropper'], aim: 'To determine trace concentrations of Cu²⁺ using AAS by standard addition method.', theory: 'AAS measures absorption of light at a specific wavelength by free atoms. Calibration curve: A = kc. Standard addition method compensates for matrix effects.', equation: 'A = kc; C_unknown = C_std × A_sample / (A_spike – A_sample)', materials: ['AAS instrument with Cu hollow cathode lamp','Cu²⁺ standard solutions (0.5, 1.0, 2.0, 5.0 ppm)','Unknown water sample','1% HNO₃','Volumetric flasks','Pipettes'], procedure: ['Warm up AAS instrument. Set wavelength to 324.7 nm (Cu).','Prepare standards and blank.','Measure absorbance of each standard.','Plot calibration curve (A vs ppm Cu).','Measure unknown sample absorbance. Read [Cu] from curve.','Standard addition: spike unknown with known Cu, compare absorbances.'], observations: 'Linear calibration curve. R² > 0.999. [Cu] in unknown read from graph.', result: 'Cu²⁺ in unknown sample = ___ ppm.', precautions: ['All solutions in 1% HNO₃ to prevent adsorption.','Aspirate blank between samples.','Ensure flame is stable before readings.'], videoId: '', quiz: [{q:'AAS measures absorption at:',opts:['Any visible wavelength','A wavelength specific to each element','Only UV wavelengths','A fixed universal wavelength'],ans:1},{q:'Cu hollow cathode lamp emits at approximately:',opts:['200 nm','324.7 nm','550 nm','780 nm'],ans:1},{q:'Standard addition method used to:',opts:['Prepare calibration curve','Compensate for matrix effects','Increase sensitivity','Reduce background'],ans:1},{q:'AAS most useful for determination of:',opts:['Non-metals','Organic compounds','Trace metals','Gases'],ans:2}] },
      { id: 'pg-10', title: 'Preparation of Coordination Complex', desc: 'Synthesise and characterise [Cu(NH₃)₄]SO₄·H₂O, the tetraamminecopper(II) sulphate complex.', difficulty: 'expert', duration: '75 min', xp: 85, apparatus: ['beaker','funnel','measuring-cylinder','watch-glass','dropper'], aim: 'To prepare tetraamminecopper(II) sulphate monohydrate [Cu(NH₃)₄]SO₄·H₂O.', theory: 'NH₃ is a neutral monodentate ligand with lone pair on N that donates to Cu²⁺. The deep blue complex is square planar. CuSO₄ is light blue; excess NH₃ gives deep blue solution.', equation: 'CuSO₄ + 4NH₃ → [Cu(NH₃)₄]SO₄', materials: ['CuSO₄·5H₂O (5 g)','Conc. aqueous ammonia (15 mL)','Ethanol (20 mL)','Distilled water','Beaker (100 mL)','Funnel and filter paper'], procedure: ['Dissolve 5 g CuSO₄·5H₂O in 10 mL warm water.','Add 15 mL conc. ammonia dropwise while stirring. Deep blue solution forms.','Add 20 mL ethanol slowly (reduces solubility, precipitates the complex).','Cool in ice bath. Filter deep blue crystals.','Wash with small amount of ethanol-water (3:1). Dry in air.','Characterise by colour, solubility, and reaction with NaOH.'], observations: 'Deep blue, well-formed crystals of [Cu(NH₃)₄]SO₄·H₂O obtained.', result: '[Cu(NH₃)₄]SO₄·H₂O prepared. Confirmed by deep blue colour.', precautions: ['Work in fume hood (ammonia fumes).','Add ethanol slowly to prevent splashing.','Dry at room temperature only (complex decomposes on heating).'], videoId: '', quiz: [{q:'NH₃ is classified as which ligand?',opts:['Bidentate anionic','Monodentate neutral','Bidentate neutral','Tetradentate'],ans:1},{q:'Colour of [Cu(NH₃)₄]²⁺:',opts:['Light blue','Green','Deep blue/violet','Yellow'],ans:2},{q:'Ethanol added to:',opts:['React with copper','Act as solvent only','Reduce solubility and precipitate the complex','Increase temperature'],ans:2},{q:'Geometry of [Cu(NH₃)₄]²⁺:',opts:['Tetrahedral','Octahedral','Square planar','Linear'],ans:2}] }
    ]
  }
];

// ── Apparatus Data ──
const apparatusData = [
  { id:'beaker', name:'Beaker', category:'Glassware', short:'General-purpose glass container for mixing and heating.', desc:'A beaker is a cylindrical glass container with a flat bottom and a small spout for pouring. Used for mixing, stirring, and heating liquids.', uses:['Mixing and stirring chemicals','Heating liquids on a hot plate or water bath','Temporary storage of solutions','Dissolving solids in liquids'], safety:['Do not heat empty beakers — thermal shock can cause cracking','Use tongs when handling hot beakers','Check for cracks before use','Place on a wire gauze when heating with a Bunsen burner'], relatedExp:['c9-1','c9-6','c9-10','c11-1'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Beaker_laboratory_ware.svg/200px-Beaker_laboratory_ware.svg.png' },
  { id:'burette', name:'Burette', category:'Measuring', short:'Graduated glass tube for delivering precise volumes of liquid in titrations.', desc:'A burette is a long, graduated glass tube with a stopcock at the bottom used to deliver precise and variable volumes of liquid. Essential for titration experiments.', uses:['Delivering precise volumes of titrant','Measuring exact volumes of solution','Acid-base titrations','Complexometric titrations'], safety:['Check the stopcock for leaks before filling','Remove air bubbles from the tip before titration','Read from the bottom of the meniscus','Clamp securely on a burette stand'], relatedExp:['c9-1','ug-1','c11-9','pg-3'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Burette.svg/100px-Burette.svg.png' },
  { id:'conical-flask', name:'Conical Flask (Erlenmeyer)', category:'Glassware', short:'Tapered flask ideal for titrations and swirling without spilling.', desc:'An Erlenmeyer flask has a wide flat bottom and a narrow neck. Its tapered shape makes it ideal for swirling solutions without spillage.', uses:['Titration flask','Swirling reaction mixtures','Culturing microorganisms','Filtrate collection'], safety:['Do not heat sealed flasks','Handle with tongs when hot','Check for cracks before use'], relatedExp:['c9-1','c9-7','ug-1','pg-3'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Erlenmeyer_flask.svg/150px-Erlenmeyer_flask.svg.png' },
  { id:'pipette', name:'Volumetric Pipette', category:'Measuring', short:'Delivers a single fixed, accurate volume of liquid.', desc:'A volumetric pipette is calibrated to deliver one precise volume (commonly 10, 25 mL). Used for accurate transfer of known volumes of solution.', uses:['Transferring exact volumes in titration','Preparing standard solutions','Dilution of solutions','Quantitative analysis'], safety:['Never use mouth suction — use a pipette filler/bulb','Rinse with the solution being measured before use','Read at the bottom of the meniscus at eye level'], relatedExp:['c9-1','ug-1','c11-9','pg-3'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Volumetric_pipette.svg/100px-Volumetric_pipette.svg.png' },
  { id:'test-tube', name:'Test Tube', category:'Glassware', short:'Cylindrical glass tube closed at one end for small-scale reactions.', desc:'A test tube is a cylindrical glass vessel closed at one end used to hold small amounts of substances for reactions, heating, or observation.', uses:['Small-scale reactions','Heating small quantities of chemicals','Collecting and testing gases','Qualitative analysis tests'], safety:['Always point the open end away from people when heating','Do not seal a test tube being heated','Use a test tube holder when heating'], relatedExp:['c9-2','c9-3','c9-4','c11-4'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Test_tube_ss_2013.svg/100px-Test_tube_ss_2013.svg.png' },
  { id:'bunsen-burner', name:'Bunsen Burner', category:'Heating', short:'Gas burner providing a clean, controllable flame for heating.', desc:'A Bunsen burner produces a single open gas flame. Used for heating, sterilisation and combustion. The air-hole controls the type of flame: open = blue (hotter); closed = yellow (cooler).', uses:['Heating chemicals in test tubes','Flame tests for metal ions','Sterilising wire loops','Igniting substances'], safety:['Never leave a lit burner unattended','Tie back hair and loose clothing','Keep flammable materials away','Ensure gas supply is off when not in use'], relatedExp:['c9-8','c9-3','c11-1','c11-3'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Bunsen_burner.svg/100px-Bunsen_burner.svg.png' },
  { id:'round-bottom-flask', name:'Round-Bottom Flask', category:'Glassware', short:'Flask with a spherical base for uniform heating in distillation and reflux.', desc:'A round-bottom flask has a spherical base that distributes heat evenly, making it ideal for reactions requiring heating, reflux, or distillation.', uses:['Reflux reactions','Distillation setups','Evaporation under reduced pressure','Heating reaction mixtures uniformly'], safety:['Never place on a flat surface unsupported','Use a cork ring or clamp stand','Do not overheat — use a water bath when possible'], relatedExp:['c11-3','ug-5'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Round_bottom_flask_250ml.jpg/100px-Round_bottom_flask_250ml.jpg' },
  { id:'measuring-cylinder', name:'Measuring Cylinder', category:'Measuring', short:'Graduated cylinder for measuring volumes of liquids with moderate precision.', desc:'A measuring cylinder is a tall, narrow container graduated in mL used for measuring the volume of liquids. Less accurate than a volumetric flask but more convenient for general use.', uses:['Measuring approximate volumes of liquids','Preparing solutions of approximate concentration','Measuring volumes for mixing'], safety:['Read at eye level from the bottom of the meniscus','Do not use as a reaction vessel','Do not heat in a measuring cylinder'], relatedExp:['c9-2','c11-5','ug-2','pg-4'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Graduated_cylinder.svg/80px-Graduated_cylinder.svg.png' },
  { id:'dropper', name:'Dropper / Pasteur Pipette', category:'Measuring', short:'Glass or plastic tube for transferring small drops of liquid.', desc:'A dropper is a simple glass or plastic tube with a rubber bulb used to transfer small volumes of liquid drop by drop. Essential for adding indicators or precise small additions.', uses:['Adding indicators to titration flasks','pH testing drop by drop','Adding small amounts of reagents','Transferring small liquid volumes'], safety:['Do not use the same dropper for different reagents without rinsing','Label droppers clearly','Squeeze the bulb before inserting into liquid'], relatedExp:['c9-4','c9-8','c11-2','pg-1'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Dripper_%28PSF%29.svg/80px-Dripper_%28PSF%29.svg.png' },
  { id:'thermometer', name:'Laboratory Thermometer', category:'Measuring', short:'Glass mercury or digital thermometer for measuring temperature.', desc:'A laboratory thermometer measures the temperature of substances. Range typically -10°C to 110°C. Digital thermometers are preferred for safety.', uses:['Measuring temperature of reactions','Monitoring water bath temperature','Boiling point determination','Measuring temperature changes in calorimetry'], safety:['Mercury thermometers are hazardous — handle with extreme care','Do not use to stir solutions','Digital thermometers preferred for safety'], relatedExp:['c11-5','ug-2','ug-10','pg-4'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Mercury_thermometer.jpg/60px-Mercury_thermometer.jpg' },
  { id:'tripod-stand', name:'Tripod Stand & Wire Gauze', category:'Support', short:'Three-legged iron stand supporting equipment during heating.', desc:'A tripod stand is a three-legged metal stand used to support glassware during heating. A wire gauze placed on top distributes the Bunsen burner flame evenly.', uses:['Supporting beakers and flasks during heating','Providing stable base for glassware','Distributing heat evenly (wire gauze)'], safety:['Ensure the tripod is stable before placing glassware','Use wire gauze to prevent direct flame contact','Allow to cool before touching after use'], relatedExp:['c9-6','c9-10','c11-1','c11-6'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Tripod_stand.jpg/100px-Tripod_stand.jpg' },
  { id:'clamp-stand', name:'Clamp & Retort Stand', category:'Support', short:'Adjustable rod and clamp for holding burettes, condensers, and flasks.', desc:'A retort stand consists of a heavy base, a vertical rod, and adjustable clamps. It holds glassware such as burettes, condensers, and separating funnels securely.', uses:['Holding burettes vertically for titrations','Supporting condensers in distillation','Positioning reflux apparatus','Holding thermometers in place'], safety:['Ensure clamps are tightened firmly','Attach heavy items near the base to prevent toppling','Do not overtighten clamps on glassware — may crack it'], relatedExp:['c9-1','ug-1','c11-9','pg-3'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Retort_stand.jpg/80px-Retort_stand.jpg' },
  { id:'funnel', name:'Funnel', category:'Glassware', short:'Conical glassware for directing liquids or supporting filter paper.', desc:'A laboratory funnel has a wide conical top and a narrow stem. Used for transferring liquids into narrow-mouthed containers or for supporting filter paper in filtration.', uses:['Filtration with filter paper','Transferring liquids into narrow openings','Loading a burette','Gravity filtration setups'], safety:['Ensure funnel stem reaches into the vessel to prevent splashing','Support the funnel in a ring clamp','Keep stem clear to allow filtrate to drain'], relatedExp:['c9-6','c11-1','ug-5','pg-8'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Glass_laboratory_funnel.jpg/80px-Glass_laboratory_funnel.jpg' },
  { id:'evaporating-dish', name:'Evaporating Dish', category:'Glassware', short:'Wide shallow porcelain dish for evaporating solvents from solutions.', desc:'An evaporating dish is a wide, shallow porcelain or glass dish with a curved interior used to evaporate solvents from solutions.', uses:['Evaporating solutions to obtain crystals','Drying precipitates','Concentrating solutions','Heating small quantities of solid'], safety:['Use tongs when handling hot dishes','Do not overheat — contents may spit or splatter','Place on a wire gauze'], relatedExp:['c9-6','c9-10','c11-1','c11-6'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Evaporating_Dish.svg/100px-Evaporating_Dish.svg.png' },
  { id:'watch-glass', name:'Watch Glass', category:'Glassware', short:'Circular concave glass used as a lid or for small-scale observations.', desc:'A watch glass is a circular piece of concave glass used as an improvised lid for beakers, as a surface for evaporating small amounts of liquids, or for observing crystals.', uses:['Covering beakers to prevent contamination','Evaporating small quantities','Weighing solids','Observing colour changes'], safety:['Handle with care — thin and fragile','Do not apply direct flame','Ensure it properly covers the beaker when used as lid'], relatedExp:['c9-7','c9-8','ug-5','c11-4'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Watch_glass.svg/100px-Watch_glass.svg.png' },
  { id:'spatula', name:'Spatula', category:'Tools', short:'Metal tool for transferring small quantities of solid chemicals.', desc:'A spatula is a flat, blunt metal tool used for transferring solid chemicals, scraping substances from containers, or mixing on a watch glass.', uses:['Transferring solid reagents','Mixing solids','Scraping residues from containers','Spreading paste-like substances'], safety:['Use separate spatulas for different chemicals','Clean and dry before use to prevent contamination'], relatedExp:['c9-6','c9-7','c11-1','c11-4'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Spatel.jpg/100px-Spatel.jpg' },
  { id:'condenser', name:'Liebig Condenser', category:'Glassware', short:'Water-cooled glass tube for condensing vapour back to liquid in distillation.', desc:'A Liebig condenser consists of an inner glass tube surrounded by an outer jacket through which cooling water flows. Used in distillation and reflux.', uses:['Reflux reactions','Distillation to collect pure solvents','Cooling reaction vapours'], safety:['Always connect water inlet at bottom and outlet at top','Check for blockages before heating','Secure tightly to retort stand'], relatedExp:['c11-3','ug-3'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Liebig_condenser.svg/100px-Liebig_condenser.svg.png' },
  { id:'separating-funnel', name:'Separating Funnel', category:'Glassware', short:'Pear-shaped funnel with stopcock for separating immiscible liquids.', desc:'A separating funnel is a pear-shaped glass vessel with a stopcock at the bottom. Used to separate two immiscible liquids based on density.', uses:['Solvent extraction','Separating immiscible layers','Washing organic products','Liquid-liquid extraction in synthesis'], safety:['Vent pressure regularly when using volatile solvents','Support in a ring clamp','Do not point the stem toward people when opening stopcock'], relatedExp:['c11-3','ug-5'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Separating_funnel.jpg/100px-Separating_funnel.jpg' },
  { id:'dropper-bottle', name:'Reagent Bottle', category:'Storage', short:'Labeled glass or plastic bottles for storing reagents.', desc:'Reagent bottles are used for storing chemicals safely in the lab. Must always be labeled with content, concentration, and hazard information.', uses:['Storing chemical reagents','Dispensing solutions safely','Long-term storage of prepared solutions'], safety:['Always label with chemical name, concentration, and hazard','Store in appropriate cabinets (acids away from bases)','Keep sealed when not in use'], relatedExp:['c9-1','c9-4','ug-1'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Reagent_bottles.jpg/100px-Reagent_bottles.jpg' },
  { id:'wire-gauze', name:'Wire Gauze', category:'Support', short:'Metal mesh square placed on a tripod to distribute heat evenly.', desc:'A wire gauze is a woven metal mesh with a ceramic centre. Placed on a tripod stand, it supports beakers and flasks above a Bunsen burner flame, distributing heat evenly.', uses:['Even heat distribution for glassware','Preventing direct flame contact with glass','Supporting beakers on a tripod'], safety:['Check gauze is flat and undamaged before use','Do not use a gauze without a tripod','Allow to cool before touching'], relatedExp:['c9-6','c9-10','c11-1'], img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wire_gauze.jpg/100px-Wire_gauze.jpg' }
];

// ── Periodic Elements (118) ──
const periodicElements = [
  {n:1,sym:'H',name:'Hydrogen',w:'1.008',cat:'nonmetal',g:1,p:1},{n:2,sym:'He',name:'Helium',w:'4.003',cat:'noble-gas',g:18,p:1},
  {n:3,sym:'Li',name:'Lithium',w:'6.941',cat:'alkali',g:1,p:2},{n:4,sym:'Be',name:'Beryllium',w:'9.012',cat:'alkaline',g:2,p:2},
  {n:5,sym:'B',name:'Boron',w:'10.81',cat:'metalloid',g:13,p:2},{n:6,sym:'C',name:'Carbon',w:'12.01',cat:'nonmetal',g:14,p:2},
  {n:7,sym:'N',name:'Nitrogen',w:'14.01',cat:'nonmetal',g:15,p:2},{n:8,sym:'O',name:'Oxygen',w:'16.00',cat:'nonmetal',g:16,p:2},
  {n:9,sym:'F',name:'Fluorine',w:'19.00',cat:'nonmetal',g:17,p:2},{n:10,sym:'Ne',name:'Neon',w:'20.18',cat:'noble-gas',g:18,p:2},
  {n:11,sym:'Na',name:'Sodium',w:'22.99',cat:'alkali',g:1,p:3},{n:12,sym:'Mg',name:'Magnesium',w:'24.31',cat:'alkaline',g:2,p:3},
  {n:13,sym:'Al',name:'Aluminium',w:'26.98',cat:'post-transition',g:13,p:3},{n:14,sym:'Si',name:'Silicon',w:'28.09',cat:'metalloid',g:14,p:3},
  {n:15,sym:'P',name:'Phosphorus',w:'30.97',cat:'nonmetal',g:15,p:3},{n:16,sym:'S',name:'Sulfur',w:'32.06',cat:'nonmetal',g:16,p:3},
  {n:17,sym:'Cl',name:'Chlorine',w:'35.45',cat:'nonmetal',g:17,p:3},{n:18,sym:'Ar',name:'Argon',w:'39.95',cat:'noble-gas',g:18,p:3},
  {n:19,sym:'K',name:'Potassium',w:'39.10',cat:'alkali',g:1,p:4},{n:20,sym:'Ca',name:'Calcium',w:'40.08',cat:'alkaline',g:2,p:4},
  {n:21,sym:'Sc',name:'Scandium',w:'44.96',cat:'transition',g:3,p:4},{n:22,sym:'Ti',name:'Titanium',w:'47.87',cat:'transition',g:4,p:4},
  {n:23,sym:'V',name:'Vanadium',w:'50.94',cat:'transition',g:5,p:4},{n:24,sym:'Cr',name:'Chromium',w:'52.00',cat:'transition',g:6,p:4},
  {n:25,sym:'Mn',name:'Manganese',w:'54.94',cat:'transition',g:7,p:4},{n:26,sym:'Fe',name:'Iron',w:'55.85',cat:'transition',g:8,p:4},
  {n:27,sym:'Co',name:'Cobalt',w:'58.93',cat:'transition',g:9,p:4},{n:28,sym:'Ni',name:'Nickel',w:'58.69',cat:'transition',g:10,p:4},
  {n:29,sym:'Cu',name:'Copper',w:'63.55',cat:'transition',g:11,p:4},{n:30,sym:'Zn',name:'Zinc',w:'65.38',cat:'transition',g:12,p:4},
  {n:31,sym:'Ga',name:'Gallium',w:'69.72',cat:'post-transition',g:13,p:4},{n:32,sym:'Ge',name:'Germanium',w:'72.63',cat:'metalloid',g:14,p:4},
  {n:33,sym:'As',name:'Arsenic',w:'74.92',cat:'metalloid',g:15,p:4},{n:34,sym:'Se',name:'Selenium',w:'78.97',cat:'nonmetal',g:16,p:4},
  {n:35,sym:'Br',name:'Bromine',w:'79.90',cat:'nonmetal',g:17,p:4},{n:36,sym:'Kr',name:'Krypton',w:'83.80',cat:'noble-gas',g:18,p:4},
  {n:37,sym:'Rb',name:'Rubidium',w:'85.47',cat:'alkali',g:1,p:5},{n:38,sym:'Sr',name:'Strontium',w:'87.62',cat:'alkaline',g:2,p:5},
  {n:39,sym:'Y',name:'Yttrium',w:'88.91',cat:'transition',g:3,p:5},{n:40,sym:'Zr',name:'Zirconium',w:'91.22',cat:'transition',g:4,p:5},
  {n:41,sym:'Nb',name:'Niobium',w:'92.91',cat:'transition',g:5,p:5},{n:42,sym:'Mo',name:'Molybdenum',w:'95.95',cat:'transition',g:6,p:5},
  {n:43,sym:'Tc',name:'Technetium',w:'98',cat:'transition',g:7,p:5},{n:44,sym:'Ru',name:'Ruthenium',w:'101.07',cat:'transition',g:8,p:5},
  {n:45,sym:'Rh',name:'Rhodium',w:'102.91',cat:'transition',g:9,p:5},{n:46,sym:'Pd',name:'Palladium',w:'106.42',cat:'transition',g:10,p:5},
  {n:47,sym:'Ag',name:'Silver',w:'107.87',cat:'transition',g:11,p:5},{n:48,sym:'Cd',name:'Cadmium',w:'112.41',cat:'transition',g:12,p:5},
  {n:49,sym:'In',name:'Indium',w:'114.82',cat:'post-transition',g:13,p:5},{n:50,sym:'Sn',name:'Tin',w:'118.71',cat:'post-transition',g:14,p:5},
  {n:51,sym:'Sb',name:'Antimony',w:'121.76',cat:'metalloid',g:15,p:5},{n:52,sym:'Te',name:'Tellurium',w:'127.60',cat:'metalloid',g:16,p:5},
  {n:53,sym:'I',name:'Iodine',w:'126.90',cat:'nonmetal',g:17,p:5},{n:54,sym:'Xe',name:'Xenon',w:'131.29',cat:'noble-gas',g:18,p:5},
  {n:55,sym:'Cs',name:'Caesium',w:'132.91',cat:'alkali',g:1,p:6},{n:56,sym:'Ba',name:'Barium',w:'137.33',cat:'alkaline',g:2,p:6},
  {n:57,sym:'La',name:'Lanthanum',w:'138.91',cat:'lanthanide',g:3,p:6},{n:58,sym:'Ce',name:'Cerium',w:'140.12',cat:'lanthanide',g:3,p:6},
  {n:59,sym:'Pr',name:'Praseodymium',w:'140.91',cat:'lanthanide',g:3,p:6},{n:60,sym:'Nd',name:'Neodymium',w:'144.24',cat:'lanthanide',g:3,p:6},
  {n:61,sym:'Pm',name:'Promethium',w:'145',cat:'lanthanide',g:3,p:6},{n:62,sym:'Sm',name:'Samarium',w:'150.36',cat:'lanthanide',g:3,p:6},
  {n:63,sym:'Eu',name:'Europium',w:'151.96',cat:'lanthanide',g:3,p:6},{n:64,sym:'Gd',name:'Gadolinium',w:'157.25',cat:'lanthanide',g:3,p:6},
  {n:65,sym:'Tb',name:'Terbium',w:'158.93',cat:'lanthanide',g:3,p:6},{n:66,sym:'Dy',name:'Dysprosium',w:'162.50',cat:'lanthanide',g:3,p:6},
  {n:67,sym:'Ho',name:'Holmium',w:'164.93',cat:'lanthanide',g:3,p:6},{n:68,sym:'Er',name:'Erbium',w:'167.26',cat:'lanthanide',g:3,p:6},
  {n:69,sym:'Tm',name:'Thulium',w:'168.93',cat:'lanthanide',g:3,p:6},{n:70,sym:'Yb',name:'Ytterbium',w:'173.04',cat:'lanthanide',g:3,p:6},
  {n:71,sym:'Lu',name:'Lutetium',w:'174.97',cat:'lanthanide',g:3,p:6},{n:72,sym:'Hf',name:'Hafnium',w:'178.49',cat:'transition',g:4,p:6},
  {n:73,sym:'Ta',name:'Tantalum',w:'180.95',cat:'transition',g:5,p:6},{n:74,sym:'W',name:'Tungsten',w:'183.84',cat:'transition',g:6,p:6},
  {n:75,sym:'Re',name:'Rhenium',w:'186.21',cat:'transition',g:7,p:6},{n:76,sym:'Os',name:'Osmium',w:'190.23',cat:'transition',g:8,p:6},
  {n:77,sym:'Ir',name:'Iridium',w:'192.22',cat:'transition',g:9,p:6},{n:78,sym:'Pt',name:'Platinum',w:'195.08',cat:'transition',g:10,p:6},
  {n:79,sym:'Au',name:'Gold',w:'196.97',cat:'transition',g:11,p:6},{n:80,sym:'Hg',name:'Mercury',w:'200.59',cat:'transition',g:12,p:6},
  {n:81,sym:'Tl',name:'Thallium',w:'204.38',cat:'post-transition',g:13,p:6},{n:82,sym:'Pb',name:'Lead',w:'207.2',cat:'post-transition',g:14,p:6},
  {n:83,sym:'Bi',name:'Bismuth',w:'208.98',cat:'post-transition',g:15,p:6},{n:84,sym:'Po',name:'Polonium',w:'209',cat:'metalloid',g:16,p:6},
  {n:85,sym:'At',name:'Astatine',w:'210',cat:'nonmetal',g:17,p:6},{n:86,sym:'Rn',name:'Radon',w:'222',cat:'noble-gas',g:18,p:6},
  {n:87,sym:'Fr',name:'Francium',w:'223',cat:'alkali',g:1,p:7},{n:88,sym:'Ra',name:'Radium',w:'226',cat:'alkaline',g:2,p:7},
  {n:89,sym:'Ac',name:'Actinium',w:'227',cat:'actinide',g:3,p:7},{n:90,sym:'Th',name:'Thorium',w:'232.04',cat:'actinide',g:3,p:7},
  {n:91,sym:'Pa',name:'Protactinium',w:'231.04',cat:'actinide',g:3,p:7},{n:92,sym:'U',name:'Uranium',w:'238.03',cat:'actinide',g:3,p:7},
  {n:93,sym:'Np',name:'Neptunium',w:'237',cat:'actinide',g:3,p:7},{n:94,sym:'Pu',name:'Plutonium',w:'244',cat:'actinide',g:3,p:7},
  {n:95,sym:'Am',name:'Americium',w:'243',cat:'actinide',g:3,p:7},{n:96,sym:'Cm',name:'Curium',w:'247',cat:'actinide',g:3,p:7},
  {n:97,sym:'Bk',name:'Berkelium',w:'247',cat:'actinide',g:3,p:7},{n:98,sym:'Cf',name:'Californium',w:'251',cat:'actinide',g:3,p:7},
  {n:99,sym:'Es',name:'Einsteinium',w:'252',cat:'actinide',g:3,p:7},{n:100,sym:'Fm',name:'Fermium',w:'257',cat:'actinide',g:3,p:7},
  {n:101,sym:'Md',name:'Mendelevium',w:'258',cat:'actinide',g:3,p:7},{n:102,sym:'No',name:'Nobelium',w:'259',cat:'actinide',g:3,p:7},
  {n:103,sym:'Lr',name:'Lawrencium',w:'266',cat:'actinide',g:3,p:7},{n:104,sym:'Rf',name:'Rutherfordium',w:'267',cat:'transition',g:4,p:7},
  {n:105,sym:'Db',name:'Dubnium',w:'268',cat:'transition',g:5,p:7},{n:106,sym:'Sg',name:'Seaborgium',w:'271',cat:'transition',g:6,p:7},
  {n:107,sym:'Bh',name:'Bohrium',w:'272',cat:'transition',g:7,p:7},{n:108,sym:'Hs',name:'Hassium',w:'277',cat:'transition',g:8,p:7},
  {n:109,sym:'Mt',name:'Meitnerium',w:'278',cat:'transition',g:9,p:7},{n:110,sym:'Ds',name:'Darmstadtium',w:'281',cat:'transition',g:10,p:7},
  {n:111,sym:'Rg',name:'Roentgenium',w:'282',cat:'transition',g:11,p:7},{n:112,sym:'Cn',name:'Copernicium',w:'285',cat:'transition',g:12,p:7},
  {n:113,sym:'Nh',name:'Nihonium',w:'286',cat:'post-transition',g:13,p:7},{n:114,sym:'Fl',name:'Flerovium',w:'289',cat:'post-transition',g:14,p:7},
  {n:115,sym:'Mc',name:'Moscovium',w:'290',cat:'post-transition',g:15,p:7},{n:116,sym:'Lv',name:'Livermorium',w:'293',cat:'post-transition',g:16,p:7},
  {n:117,sym:'Ts',name:'Tennessine',w:'294',cat:'nonmetal',g:17,p:7},{n:118,sym:'Og',name:'Oganesson',w:'294',cat:'noble-gas',g:18,p:7}
];

// ── App State ──
let currentPage = 'home';
let currentExp = null;
let currentDiffFilter = 'all';
let quizState = { expId: null, questions: [], qIndex: 0, score: 0, answered: false };

// ── Storage Helpers ──
function getProgress() { try { return JSON.parse(localStorage.getItem('vcl_progress') || '{}'); } catch { return {}; } }
function setProgress(p) { localStorage.setItem('vcl_progress', JSON.stringify(p)); }
function getUser() { try { return JSON.parse(localStorage.getItem('vcl_user') || 'null'); } catch { return null; } }
function setUser(u) { localStorage.setItem('vcl_user', JSON.stringify(u)); }
function getUsers() { try { return JSON.parse(localStorage.getItem('vcl_users') || '[]'); } catch { return []; } }
function setUsers(u) { localStorage.setItem('vcl_users', JSON.stringify(u)); }
function isDark() { return document.documentElement.getAttribute('data-theme') === 'dark'; }
function setExpProgress(expId, level) { const p = getProgress(); if ((p[expId] || 0) < level) { p[expId] = level; setProgress(p); } }
function getExpPct(level) { return [0, 25, 50, 100][level] || 0; }

// ── Navigation ──
function navigateTo(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById('page-' + page);
  if (el) { el.classList.add('active'); window.scrollTo(0, 0); }
  const footer = document.getElementById('siteFooter');
  if (footer) footer.style.display = (page === 'home') ? 'block' : 'none';
  currentPage = page;
  document.querySelectorAll('.nav-link').forEach(l => l.classList.toggle('active', l.dataset.page === page));
  if (page === 'experiments') renderExperiments();
  if (page === 'apparatus') renderApparatus();
  if (page === 'quiz') renderQuiz();
  if (page === 'progress') renderProgress();
  if (page === 'elements') renderPeriodicTable();
  if (page === 'profile') renderProfile();
}

// ── Auth ──
function updateNavAuth() {
  const area = document.getElementById('navAuthArea');
  const user = getUser();
  area.innerHTML = user
    ? `<div class="nav-avatar" onclick="navigateTo('profile')" title="Profile">${user.username[0].toUpperCase()}</div>`
    : `<button class="btn-login" onclick="navigateTo('login')">Sign In</button>`;
}

function doLogin() {
  const un = document.getElementById('loginUsername').value.trim();
  const pw = document.getElementById('loginPassword').value;
  const err = document.getElementById('loginError');
  err.classList.remove('show');
  if (!un || !pw) { err.textContent = 'Please fill in all fields.'; err.classList.add('show'); return; }
  const found = getUsers().find(u => u.username === un && u.password === pw);
  if (!found) { err.textContent = 'Invalid username or password.'; err.classList.add('show'); return; }
  setUser(found); updateNavAuth();
  showToast('Welcome back, ' + found.username + '!', 'success');
  navigateTo('home');
}

function doRegister() {
  const un = document.getElementById('regUsername').value.trim();
  const em = document.getElementById('regEmail').value.trim();
  const pw = document.getElementById('regPassword').value;
  const err = document.getElementById('regError');
  err.classList.remove('show');
  if (!un || !em || !pw) { err.textContent = 'Please fill in all fields.'; err.classList.add('show'); return; }
  if (pw.length < 6) { err.textContent = 'Password must be at least 6 characters.'; err.classList.add('show'); return; }
  const users = getUsers();
  if (users.find(u => u.username === un)) { err.textContent = 'Username already taken.'; err.classList.add('show'); return; }
  const newUser = { username: un, email: em, password: pw, joined: new Date().toISOString() };
  users.push(newUser); setUsers(users); setUser(newUser); updateNavAuth();
  showToast('Account created! Welcome, ' + un + '!', 'success');
  navigateTo('home');
}

function doLogout() {
  localStorage.removeItem('vcl_user'); updateNavAuth();
  showToast('Signed out successfully.', 'success');
  navigateTo('home');
}

function resetProgress() {
  if (confirm('Reset all experiment and quiz progress? This cannot be undone.')) {
    localStorage.removeItem('vcl_progress');
    showToast('Progress reset.', 'success');
    if (currentPage === 'progress') renderProgress();
  }
}

function renderProfile() {
  const user = getUser();
  if (!user) { navigateTo('login'); return; }
  document.getElementById('profileAvatar').textContent = user.username[0].toUpperCase();
  document.getElementById('profileName').textContent = user.username;
  document.getElementById('profileEmail').textContent = user.email;
  document.getElementById('profileJoined').textContent = 'Member since ' + new Date(user.joined).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
  const p = getProgress();
  const allExp = expCategories.flatMap(c => c.experiments);
  const opened = allExp.filter(e => (p[e.id] || 0) >= 1).length;
  const quizDone = allExp.filter(e => (p[e.id] || 0) >= 3).length;
  const totalXP = allExp.reduce((s, e) => s + ((p[e.id] || 0) >= 3 ? e.xp : (p[e.id] || 0) >= 1 ? Math.floor(e.xp * 0.25) : 0), 0);
  document.getElementById('profileStats').innerHTML = `
    <div class="profile-stat"><div class="ps-val">${opened}</div><div class="ps-lbl">Experiments Opened</div></div>
    <div class="profile-stat"><div class="ps-val">${quizDone}</div><div class="ps-lbl">Quizzes Completed</div></div>
    <div class="profile-stat"><div class="ps-val">${totalXP}</div><div class="ps-lbl">XP Earned</div></div>`;
  const tt = document.getElementById('themeToggle');
  if (tt) tt.classList.toggle('on', isDark());
}

// ── Theme ──
function toggleTheme() {
  const html = document.documentElement;
  const dark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', dark ? 'light' : 'dark');
  localStorage.setItem('vcl_theme', dark ? 'light' : 'dark');
  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.innerHTML = dark
      ? '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>'
      : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
  }
  const tt = document.getElementById('themeToggle');
  if (tt) tt.classList.toggle('on', !dark);
}

// ── Experiments ──
function filterExperiments() { renderExperiments(); }

function setDiffFilter(btn, diff) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  currentDiffFilter = diff;
  renderExperiments();
}

function renderExperiments() {
  const search = (document.getElementById('expSearch')?.value || '').toLowerCase();
  const container = document.getElementById('expListContainer');
  const p = getProgress();
  const allExp = expCategories.flatMap(c => c.experiments);
  const cc = document.getElementById('expCompletedCount');
  if (cc) cc.textContent = allExp.filter(e => (p[e.id] || 0) >= 3).length;

  let html = '';
  expCategories.forEach(cat => {
    const filtered = cat.experiments.filter(e => {
      const matchDiff = currentDiffFilter === 'all' || e.difficulty === currentDiffFilter;
      const matchSearch = !search || e.title.toLowerCase().includes(search) || e.desc.toLowerCase().includes(search);
      return matchDiff && matchSearch;
    });
    if (!filtered.length) return;
    const done = cat.experiments.filter(e => (p[e.id] || 0) >= 3).length;

    html += `<div class="cat-block">
      <div class="cat-header" style="--cat-color:${cat.catColor}">
        <div class="cat-num">${cat.num}</div>
        <div class="cat-info"><h3>${cat.title}</h3><p>${cat.subtitle}</p></div>
        <div class="cat-count-badge">${done}/${cat.experiments.length} Completed</div>
      </div>
      <div class="exp-grid">`;

    filtered.forEach(exp => {
      const level = p[exp.id] || 0;
      const isCompleted = level >= 3;
      const isStarted = level > 0;
      const progressPct = [0, 33, 66, 100][level] || 0;
      const statusLabel = ['Not started', 'In progress', 'Quiz attempted', 'Completed'][level];
      const statusClass = isCompleted ? 's-completed' : isStarted ? 's-in-prog' : '';
      const imgSrc = _getExpImagePath(exp.id, cat.id);
      const btnClass = isCompleted ? 'review' : isStarted ? 'resume' : '';
      const btnLabel = isCompleted ? 'Review' : isStarted ? 'Continue' : 'Start';
      const fallbackStyle = `background:linear-gradient(135deg,color-mix(in srgb,${cat.catColor} 18%,var(--bg-card)) 0%,var(--bg-card2) 100%)`;

      let statusIcon = '';
      if (isCompleted) statusIcon = `<div class="exp-img-status done"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="3" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg></div>`;
      else if (isStarted) statusIcon = `<div class="exp-img-status in-prog"><svg width="12" height="12" viewBox="0 0 24 24" fill="#67e8f9"><path d="M8 5v14l11-7z"/></svg></div>`;

      html += `<div class="exp-card${isCompleted ? ' is-completed' : ''}" style="--cat-color:${cat.catColor}" onclick="openExperiment('${exp.id}')">
        <div class="exp-card-img">
          ${imgSrc ? `<img class="exp-card-photo" src="${imgSrc}" alt="${exp.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">` : ''}
          <div class="exp-card-svg-banner" style="${imgSrc ? 'display:none;' : ''}${fallbackStyle}">
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="${cat.catColor}" stroke-width="1.2" stroke-linecap="round" opacity=".45"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11l-4 7h14l-4-7V3"/></svg>
          </div>
          <div class="exp-card-img-overlay"></div>
          <div class="exp-card-img-tint"></div>
          <span class="exp-img-diff ${exp.difficulty}">${exp.difficulty.charAt(0).toUpperCase() + exp.difficulty.slice(1)}</span>
          ${statusIcon}
          <span class="exp-img-xp"><svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> +${exp.xp} XP</span>
        </div>
        <div class="exp-card-body">
          <h4>${exp.title}</h4>
          <div class="exp-card-desc">${exp.desc}</div>
          <div class="exp-card-meta"><span class="exp-meta-chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>${exp.duration}</span></div>
        </div>
        <div class="exp-card-progress"><div class="exp-card-progress-fill" style="width:${progressPct}%"></div></div>
        <div class="exp-card-foot">
          <span class="exp-status-label ${statusClass}">${statusLabel}</span>
          <button class="start-btn ${btnClass}" onclick="event.stopPropagation();openExperiment('${exp.id}')">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>${btnLabel}
          </button>
        </div>
      </div>`;
    });
    html += `</div></div>`;
  });

  if (!html) html = `<div style="text-align:center;padding:4rem 2rem;color:var(--text-muted)"><svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="margin:0 auto 1rem;display:block;opacity:.4"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><p>No experiments match your search.</p></div>`;
  container.innerHTML = html;
}

// ── Experiment Detail ──
function openExperiment(expId) {
  const cat = expCategories.find(c => c.experiments.some(e => e.id === expId));
  const exp = cat?.experiments.find(e => e.id === expId);
  if (!exp) return;
  currentExp = exp;
  setExpProgress(expId, 1);
  const ytQuery = encodeURIComponent(exp.title + ' chemistry experiment');
  const hasVideo = exp.videoId && exp.videoId.length > 0;
  const si = path => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;

  const videoHTML = `<div class="video-section">
    <div class="vs-header"><div class="vs-header-left"><div class="vs-icon"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div><div><h3>Watch Demonstration</h3><p>${exp.title}</p></div></div></div>
    ${hasVideo ? `<div class="video-wrapper"><iframe src="https://www.youtube-nocookie.com/embed/${exp.videoId}?rel=0&modestbranding=1" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen loading="lazy"></iframe></div><div class="vs-or"><span>or search for more</span></div>` : ''}
    <div class="vs-yt-wrap">
      <a class="vs-yt-card" href="https://www.youtube.com/results?search_query=${ytQuery}" target="_blank" rel="noopener">
        <div class="vs-yt-logo"><svg viewBox="0 0 24 24" fill="#ef4444"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/></svg></div>
        <div class="vs-yt-text"><strong>Watch on YouTube</strong><div class="vs-yt-query"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg><span>${exp.title} chemistry experiment</span></div></div>
        <div class="vs-yt-go"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </a>
    </div>
  </div>`;

  const appChips = exp.apparatus.map(appId => {
    const app = apparatusData.find(a => a.id === appId);
    return app ? `<span class="app-chip" onclick="openApparatusModal('${appId}')">${app.name}</span>` : '';
  }).join('');

  document.getElementById('expDetailContent').innerHTML = `
    <div class="detail-header">
      <div class="detail-badges"><span class="badge badge-${exp.difficulty}">${exp.difficulty.charAt(0).toUpperCase()+exp.difficulty.slice(1)}</span><span class="badge badge-xp">+${exp.xp} XP</span></div>
      <div class="detail-title">${exp.title}</div>
      <div class="detail-desc">${exp.desc}</div>
      <div class="detail-meta">
        <span class="meta-item">${si('<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>')} ${exp.duration}</span>
        <span class="meta-item">${si('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>')} ${exp.difficulty.charAt(0).toUpperCase()+exp.difficulty.slice(1)} level</span>
        <span class="meta-item">${si('<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11l-4 7h14l-4-7V3"/>')} ${exp.apparatus.length} apparatus</span>
      </div>
    </div>
    <div class="take-quiz-bar">
      <div class="tqb-text"><h4>Test Your Understanding</h4><p>Take the quiz after reading to earn +${exp.xp} XP</p></div>
      <button class="btn btn-primary btn-sm" onclick="startQuizForExp('${exp.id}')">Take Quiz →</button>
    </div>
    <div class="detail-section"><h3>${si('<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>')} Aim</h3><p>${exp.aim}</p></div>
    <div class="detail-section"><h3>${si('<path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>')} Theory</h3><p>${exp.theory}</p>${exp.equation ? `<div class="equation-box">${exp.equation}</div>` : ''}</div>
    <div class="detail-section"><h3>${si('<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11l-4 7h14l-4-7V3"/>')} Required Apparatus</h3><p style="font-size:.82rem;color:var(--text-muted);margin-bottom:.65rem">Click any item for details</p><div class="apparatus-chips">${appChips}</div></div>
    <div class="detail-section"><h3>${si('<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>')} Materials Required</h3><ul class="materials-list">${exp.materials.map(m=>`<li>${m}</li>`).join('')}</ul></div>
    <div class="detail-section"><h3>${si('<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>')} Procedure</h3><ul class="procedure-list">${exp.procedure.map((s,i)=>`<li><span class="step-num">${i+1}</span><span>${s}</span></li>`).join('')}</ul></div>
    <div class="detail-section"><h3>${si('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>')} Observations</h3><p>${exp.observations}</p></div>
    <div class="detail-section"><h3>${si('<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>')} Result</h3><p>${exp.result}</p></div>
    <div class="detail-section"><h3>${si('<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>')} Precautions</h3><ul class="precautions-list">${exp.precautions.map(pr=>`<li>${pr}</li>`).join('')}</ul></div>
    ${videoHTML}`;
  navigateTo('experiment-detail');
}

// ── Apparatus ──
function renderApparatus() {
  document.getElementById('apparatusGrid').innerHTML = apparatusData.map(app => {
    const col = apparatusColors[app.category] || { color: '#3b82f6', bg: 'rgba(59,130,246,.1)' };
    const svg = apparatusSVGs[app.id] || '<svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="' + col.color + '" stroke-width="1.5"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11l-4 7h14l-4-7V3"/></svg>';
    const imgSrc = apparatusLocalImages[app.id] || null;
    const visual = imgSrc
      ? '<div class="app-img-wrap" style="--app-bg:' + col.bg + '"><img src="' + imgSrc + '" alt="' + app.name + '" loading="lazy"></div>'
      : '<div class="app-svg-wrap">' + svg + '</div>';
    return '<div class="app-card" style="--app-color:' + col.color + ';--app-bg:' + col.bg + '" onclick="openApparatusModal(' + "'" + app.id + "'" + ')">'
      + visual
      + '<div class="app-card-body"><h3>' + app.name + '</h3><p>' + app.short + '</p></div>'
      + '<div class="app-card-foot">'
      + '<div class="app-cat-tag">' + app.category + '</div>'
      + '<div class="app-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg></div>'
      + '</div></div>';
  }).join('');
}

function openApparatusModal(appId) {
  const app = apparatusData.find(a => a.id === appId);
  if (!app) return;
  const col = apparatusColors[app.category] || { color: '#3b82f6', bg: 'rgba(59,130,246,.1)' };
  const svg = apparatusSVGs[app.id] || '<svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="' + col.color + '" stroke-width="1.2"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v11l-4 7h14l-4-7V3"/></svg>';
  const imgSrc = apparatusLocalImages[app.id] || null;
  const heroInner = imgSrc
    ? '<img src="' + imgSrc + '" alt="' + app.name + '" style="max-height:140px;max-width:220px;object-fit:contain;filter:drop-shadow(0 6px 18px rgba(0,0,0,.3))">'
    : svg;
  const relatedHTML = app.relatedExp && app.relatedExp.length
    ? '<div class="modal-section"><h4>Used In Experiments</h4><div style="display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.5rem">'
      + app.relatedExp.map(eid => {
          const ex = expCategories.flatMap(c => c.experiments).find(e => e.id === eid);
          return ex ? '<span class="app-chip" onclick="document.getElementById(' + "'apparatusModal'" + ').classList.remove(' + "'open'" + ');openExperiment(' + "'" + eid + "'" + ')">' + ex.title + '</span>' : '';
        }).join('')
      + '</div></div>'
    : '';
  document.getElementById('apparatusModalContent').innerHTML =
    '<div class="modal-hero-banner" style="--accent:' + col.color + ';--accent-glow:' + col.bg + '">'
    + '<span class="modal-hero-cat">' + app.category + '</span>'
    + heroInner
    + '</div>'
    + '<div class="modal-title-row"><h2>' + app.name + '</h2><p>' + app.desc + '</p></div>'
    + '<div class="modal-body">'
    + '<div class="modal-section"><h4>Common Uses</h4><ul class="modal-list">' + app.uses.map(u => '<li>' + u + '</li>').join('') + '</ul></div>'
    + '<div class="modal-section"><h4>Safety Guidelines</h4><ul class="modal-list">' + app.safety.map(s => '<li>' + s + '</li>').join('') + '</ul></div>'
    + relatedHTML
    + '</div>';
  document.getElementById('apparatusModal').classList.add('open');
}

function closeModal(e) { if (e.target.classList.contains('modal-overlay')) e.target.classList.remove('open'); }

// ── Quiz ──
function renderQuiz() {
  const p = getProgress();
  let html = '';
  expCategories.forEach(cat => {
    html += `<div class="quiz-cat-card" style="--cat-color:${cat.catColor}"><div class="quiz-cat-header"><div class="quiz-cat-dot"></div><h3>${cat.title}</h3></div><div class="quiz-exp-list">`;
    cat.experiments.forEach(exp => {
      const level = p[exp.id] || 0;
      const statusClass = level >= 3 ? 'status-completed' : level >= 2 ? 'status-attempted' : 'status-pending';
      const statusLabel = level >= 3 ? 'Completed' : level >= 2 ? 'Attempted' : 'Pending';
      html += `<div class="quiz-exp-item" onclick="startQuizForExp('${exp.id}')">
        <div class="qei-left"><div class="qei-name">${exp.title}</div><div class="qei-badges"><span class="badge badge-${exp.difficulty}" style="font-size:.7rem">${exp.difficulty}</span><span class="qei-status ${statusClass}">${statusLabel}</span></div></div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round"><path d="M9 18l6-6-6-6"/></svg>
      </div>`;
    });
    html += `</div></div>`;
  });
  document.getElementById('quizCatGrid').innerHTML = html;
}

function startQuizForExp(expId) {
  const exp = expCategories.flatMap(c => c.experiments).find(e => e.id === expId);
  if (!exp || !exp.quiz || exp.quiz.length === 0) { showToast('No quiz available for this experiment yet.', 'error'); return; }
  quizState = { expId, questions: [...exp.quiz], qIndex: 0, score: 0, answered: false, expTitle: exp.title };
  setExpProgress(expId, 2);
  renderActiveQuiz();
  navigateTo('quiz-active');
}

function renderActiveQuiz() {
  const { questions, qIndex, expTitle } = quizState;
  if (qIndex >= questions.length) { renderQuizResult(); return; }
  const q = questions[qIndex];
  const pct = Math.round((qIndex / questions.length) * 100);
  document.getElementById('quizActiveContent').innerHTML = `
    <div style="margin-bottom:1rem"><div style="font-size:.95rem;font-weight:700">${expTitle} — Quiz</div></div>
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    <div class="quiz-q-num">Question ${qIndex + 1} of ${questions.length}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="quiz-options">${q.opts.map((opt, i) => `<button class="quiz-opt" id="opt${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div>
    <div class="quiz-feedback" id="quizFeedback"></div>
    <div class="quiz-next-btn" id="quizNextWrap" style="display:none">
      <button class="btn btn-primary" onclick="nextQuizQuestion()">${qIndex < questions.length - 1 ? 'Next Question' : 'See Results'}</button>
    </div>`;
  quizState.answered = false;
}

function answerQuiz(chosen) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.qIndex];
  const correct = q.ans;
  const fb = document.getElementById('quizFeedback');
  document.querySelectorAll('.quiz-opt').forEach((btn, i) => {
    btn.classList.add('disabled');
    if (i === correct) btn.classList.add('correct');
    else if (i === chosen) btn.classList.add('wrong');
  });
  if (chosen === correct) { quizState.score++; fb.textContent = 'Correct!'; fb.className = 'quiz-feedback show correct'; }
  else { fb.textContent = `Incorrect. The correct answer is: "${q.opts[correct]}"`; fb.className = 'quiz-feedback show wrong'; }
  document.getElementById('quizNextWrap').style.display = 'flex';
}

function nextQuizQuestion() { quizState.qIndex++; renderActiveQuiz(); }

function renderQuizResult() {
  const { score, questions, expId, expTitle } = quizState;
  const pct = Math.round((score / questions.length) * 100);
  if (pct >= 60) setExpProgress(expId, 3);
  const emoji = pct === 100 ? '🏆' : pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
  const msg = pct === 100 ? 'Perfect Score!' : pct >= 80 ? 'Excellent work!' : pct >= 60 ? 'Good job! Keep practising.' : 'Keep studying and try again.';
  document.getElementById('quizActiveContent').innerHTML = `
    <div class="quiz-result-card">
      <div style="font-size:3rem;margin-bottom:.5rem">${emoji}</div>
      <div class="quiz-result-score">${pct}%</div>
      <h2>${msg}</h2>
      <p>You scored ${score} out of ${questions.length} in <strong>${expTitle}</strong>.</p>
      <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap">
        <button class="btn btn-primary" onclick="startQuizForExp('${expId}')">Retry Quiz</button>
        <button class="btn btn-outline" onclick="openExperiment('${expId}')">Review Experiment</button>
        <button class="btn btn-outline" onclick="navigateTo('quiz')">All Quizzes</button>
      </div>
    </div>`;
}

// ── Progress ──
function renderProgress() {
  const p = getProgress();
  const allExp = expCategories.flatMap(c => c.experiments);
  const opened = allExp.filter(e => (p[e.id] || 0) >= 1).length;
  const completed = allExp.filter(e => (p[e.id] || 0) >= 3).length;
  const overallPct = Math.round(allExp.reduce((s, e) => s + getExpPct(p[e.id] || 0), 0) / (allExp.length * 100) * 100);
  document.getElementById('overallStats').innerHTML = `
    <div class="overall-stat"><div class="val">${overallPct}%</div><div class="lbl">Overall Progress</div></div>
    <div class="overall-stat"><div class="val">${opened}</div><div class="lbl">Experiments Opened</div></div>
    <div class="overall-stat"><div class="val">${completed}</div><div class="lbl">Fully Completed</div></div>`;
  let html = '';
  expCategories.forEach(cat => {
    html += `<div style="margin-bottom:1.5rem"><div style="font-size:.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:${cat.catColor};margin-bottom:.75rem">${cat.title}</div>`;
    cat.experiments.forEach(exp => {
      const level = p[exp.id] || 0;
      const pct = getExpPct(level);
      const labels = ['Not started', 'Experiment opened', 'Quiz attempted', 'Fully completed'];
      html += `<div class="prog-exp-item">
        <div class="prog-exp-header">
          <div><h4>${exp.title}</h4>
            <div class="prog-states">
              <span class="prog-state"><span class="prog-state-dot" style="background:${level>=1?'var(--accent2)':'var(--border-s)'}"></span>Opened</span>
              <span class="prog-state"><span class="prog-state-dot" style="background:${level>=2?'#f59e0b':'var(--border-s)'}"></span>Quiz attempted</span>
              <span class="prog-state"><span class="prog-state-dot" style="background:${level>=3?'#22c55e':'var(--border-s)'}"></span>Completed</span>
            </div>
          </div>
          <div style="text-align:right"><div class="prog-pct">${pct}%</div><div style="font-size:.75rem;color:var(--text-muted)">${labels[level]}</div></div>
        </div>
        <div class="prog-bar"><div class="prog-bar-fill" style="width:${pct}%"></div></div>
      </div>`;
    });
    html += '</div>';
  });
  document.getElementById('progressList').innerHTML = html;
}

// ── Periodic Table ──
function renderPeriodicTable() {
  const grid = document.getElementById('periodicTableGrid');
  if (!grid) return;
  const mainTable = {}, lanthanides = [], actinides = [];
  periodicElements.forEach(el => {
    if (el.cat === 'lanthanide') lanthanides.push(el);
    else if (el.cat === 'actinide') actinides.push(el);
    else { if (!mainTable[el.p]) mainTable[el.p] = {}; mainTable[el.p][el.g] = el; }
  });
  lanthanides.sort((a,b) => a.n - b.n);
  actinides.sort((a,b) => a.n - b.n);
  const cells = [];
  for (let period = 1; period <= 7; period++) {
    for (let group = 1; group <= 18; group++) {
      const el = mainTable[period]?.[group] || null;
      if ((period === 6 || period === 7) && group === 3) {
        cells.push(`<div class="element-cell el-${period===6?'lanthanide':'actinide'} special-cell">${period===6?'Ln':'An'}</div>`);
      } else if (el) {
        cells.push(`<div class="element-cell el-${el.cat}" onclick="showElementModal(${el.n})" title="${el.name}"><span class="el-number">${el.n}</span><span class="el-sym">${el.sym}</span><span class="el-name">${el.name}</span></div>`);
      } else {
        cells.push('<div class="el-spacer"></div>');
      }
    }
  }
  grid.innerHTML = cells.join('');
  const mkRow = (els, label) => `<div class="el-series-label">${label}</div><div class="el-spacer"></div>` +
    els.map(el => `<div class="element-cell el-${el.cat}" onclick="showElementModal(${el.n})" title="${el.name}"><span class="el-number">${el.n}</span><span class="el-sym">${el.sym}</span><span class="el-name">${el.name}</span></div>`).join('');
  const lantRow = document.getElementById('lanthanideRow');
  if (lantRow) lantRow.innerHTML = mkRow(lanthanides, 'Ln');
  const actRow = document.getElementById('actinideRow');
  if (actRow) actRow.innerHTML = mkRow(actinides, 'An');
  const legendEl = document.getElementById('ptLegend');
  if (legendEl) legendEl.innerHTML = [
    {label:'Alkali',bg:'linear-gradient(135deg,#fde68a,#fcd34d)',border:'#f59e0b'},
    {label:'Alkaline',bg:'linear-gradient(135deg,#fdba74,#fb923c)',border:'#f97316'},
    {label:'Transition',bg:'linear-gradient(135deg,#fca5a5,#f87171)',border:'#ef4444'},
    {label:'Post-transition',bg:'linear-gradient(135deg,#d1fae5,#a7f3d0)',border:'#10b981'},
    {label:'Metalloid',bg:'linear-gradient(135deg,#c7d2fe,#a5b4fc)',border:'#6366f1'},
    {label:'Nonmetal',bg:'linear-gradient(135deg,#bfdbfe,#93c5fd)',border:'#3b82f6'},
    {label:'Noble gas',bg:'linear-gradient(135deg,#fbcfe8,#f9a8d4)',border:'#ec4899'},
    {label:'Lanthanide',bg:'linear-gradient(135deg,#fed7aa,#fdba74)',border:'#fb923c'},
    {label:'Actinide',bg:'linear-gradient(135deg,#fecaca,#fca5a5)',border:'#f87171'}
  ].map(i=>`<div class="legend-item"><div class="legend-swatch" style="background:${i.bg};border-color:${i.border}"></div>${i.label}</div>`).join('');
}

function showElementModal(n) {
  const el = periodicElements.find(e => e.n === n);
  if (!el) return;
  const cats = {nonmetal:'Nonmetal','noble-gas':'Noble Gas',alkali:'Alkali Metal',alkaline:'Alkaline Earth Metal',transition:'Transition Metal',metalloid:'Metalloid','post-transition':'Post-Transition Metal',lanthanide:'Lanthanide',actinide:'Actinide'};
  document.getElementById('modalSymbol').textContent = el.sym;
  document.getElementById('modalName').textContent = el.name;
  document.getElementById('modalInfoGrid').innerHTML = `
    <div class="info-cell"><div class="info-cell-label">Atomic Number</div><div class="info-cell-value">${el.n}</div></div>
    <div class="info-cell"><div class="info-cell-label">Atomic Weight</div><div class="info-cell-value">${el.w} u</div></div>
    <div class="info-cell"><div class="info-cell-label">Group</div><div class="info-cell-value">${el.g}</div></div>
    <div class="info-cell"><div class="info-cell-label">Period</div><div class="info-cell-value">${el.p}</div></div>
    <div class="info-cell" style="grid-column:1/-1"><div class="info-cell-label">Category</div><div class="info-cell-value">${cats[el.cat]||'Other'}</div></div>`;
  document.getElementById('elementModal').classList.add('open');
}

function closeElementModal(event) {
  const overlay = document.getElementById('elementModal');
  if (!event || event.target === overlay) overlay.classList.remove('open');
}

// ── Toast ──
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast show' + (type ? ' ' + type : '');
  setTimeout(() => { t.className = 'toast'; }, 3000);
}

// ── Scroll Reveal ──
(function () {
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    if (!window.IntersectionObserver) { els.forEach(el => el.classList.add('in')); return; }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  }
  setTimeout(initReveal, 80);
})();

// ── Navbar Scroll Shadow ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

// ── Init ──
(function init() {
  const savedTheme = localStorage.getItem('vcl_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  const icon = document.getElementById('themeIcon');
  if (icon) icon.innerHTML = savedTheme === 'dark'
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
  updateNavAuth();
  navigateTo('home');
})();
