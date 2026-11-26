// ==========================================================================
// GOLDENPRO STREAMING WEB - GESTOR INTELIGENTE DE CUENTAS, PERFILES Y VENCIMIENTOS
// ==========================================================================

const PLATFORMS_CONFIG = [
  { key: 'NETFLIX PERSONAL', name: 'Netflix (Personal)', prefix: 'NPERS', defaultPrice: 6.0, defaultInvestment: 3.0, price3m: null, color: 'border-red-500 bg-red-500/10 text-red-400', badge: 'bg-red-600', icon: 'user-check', isPersonal: true },
  { key: 'PANTALLAS NETFLIX', name: 'Netflix (Pantalla Normal)', prefix: 'PNET', defaultPrice: 4.0, defaultInvestment: 1.5, price3m: null, color: 'border-red-600 bg-red-600/10 text-red-400', badge: 'bg-red-700', icon: 'tv' },
  { key: 'CUENTA NETFLIX', name: 'Netflix (Cuenta Completa)', prefix: 'CNET', defaultPrice: 12.0, defaultInvestment: 7.0, price3m: null, color: 'border-rose-600 bg-rose-600/10 text-rose-400', badge: 'bg-rose-700', icon: 'monitor' },
  { key: 'DISNEY PLUS', name: 'Disney+ (Sin ESPN)', prefix: 'DP', defaultPrice: 2.5, defaultInvestment: 1.0, price3m: null, color: 'border-blue-500 bg-blue-500/10 text-blue-400', badge: 'bg-blue-600', icon: 'sparkles' },
  { key: 'PRIME VIDEO', name: 'Prime Video', prefix: 'PV', defaultPrice: 2.5, defaultInvestment: 1.0, price3m: null, color: 'border-sky-500 bg-sky-500/10 text-sky-400', badge: 'bg-sky-600', icon: 'video' },
  { key: 'HBO MAX', name: 'Max', prefix: 'HM', defaultPrice: 2.5, defaultInvestment: 1.0, price3m: null, color: 'border-purple-500 bg-purple-500/10 text-purple-400', badge: 'bg-purple-600', icon: 'film' },
  { key: 'VIX', name: 'ViX', prefix: 'VIX', defaultPrice: 2.5, defaultInvestment: 1.0, price3m: null, color: 'border-orange-500 bg-orange-500/10 text-orange-400', badge: 'bg-orange-600', icon: 'flame' },
  { key: 'FLUJO TV', name: 'Flujo TV', prefix: 'FTV', defaultPrice: 4.0, defaultInvestment: 2.0, price3m: null, color: 'border-teal-500 bg-teal-500/10 text-teal-400', badge: 'bg-teal-600', icon: 'tv-2' },
  { key: 'APPLE TV', name: 'Apple TV+', prefix: 'ATV', defaultPrice: 3.0, defaultInvestment: 1.2, price3m: null, color: 'border-slate-400 bg-slate-400/10 text-slate-300', badge: 'bg-slate-600', icon: 'film' },
  { key: 'IQIYI', name: 'iQIYI', prefix: 'IQY', defaultPrice: 2.8, defaultInvestment: 1.0, price3m: null, color: 'border-emerald-400 bg-emerald-400/10 text-emerald-300', badge: 'bg-emerald-600', icon: 'play-square' },
  { key: 'VIKI', name: 'Viki', prefix: 'VIKI', defaultPrice: 2.8, defaultInvestment: 1.0, price3m: null, color: 'border-pink-500 bg-pink-500/10 text-pink-400', badge: 'bg-pink-600', icon: 'heart' },
  { key: 'SPOTIFY', name: 'Spotify', prefix: 'SP', defaultPrice: 4.0, defaultInvestment: 1.5, price3m: 10.0, color: 'border-emerald-500 bg-emerald-500/10 text-emerald-400', badge: 'bg-emerald-600', icon: 'music' },
  { key: 'YT PREMIUM', name: 'YouTube Premium', prefix: 'YT', defaultPrice: 4.0, defaultInvestment: 1.5, price3m: 10.0, color: 'border-red-600 bg-red-600/10 text-red-500', badge: 'bg-red-700', icon: 'play' },
  { key: 'MAGIS TV', name: 'Magis TV', prefix: 'MTV', defaultPrice: 6.0, defaultInvestment: 3.0, price3m: null, color: 'border-indigo-500 bg-indigo-500/10 text-indigo-400', badge: 'bg-indigo-600', icon: 'airplay' },
  { key: 'STAR PLUS', name: 'Star+', prefix: 'STP', defaultPrice: 2.5, defaultInvestment: 1.0, price3m: null, color: 'border-amber-500 bg-amber-500/10 text-amber-400', badge: 'bg-amber-600', icon: 'star' },
  { key: 'PLEX', name: 'Plex', prefix: 'PLX', defaultPrice: 3.0, defaultInvestment: 1.0, price3m: null, color: 'border-yellow-500 bg-yellow-500/10 text-yellow-400', badge: 'bg-yellow-600', icon: 'server' }
];

// LISTA COMPLETA DE PRODUCTOS/CUENTAS QUE VENDE (COMO EL TARIFARIO)
const DEFAULT_CATALOG_ITEMS = [
  { id: 'cat_net_pers', name: 'Netflix (Personal)', desc: 'Cuenta o perfil personal exclusivo', defaultPrice: 6.0, defaultInv: 3.0, defaultQty: 10, color: 'text-red-400', badge: 'bg-red-600', icon: 'user-check' },
  { id: 'cat_net_pant', name: 'Netflix (Pantalla Normal)', desc: 'Pantalla en cuenta compartida', defaultPrice: 4.0, defaultInv: 1.5, defaultQty: 25, color: 'text-red-400', badge: 'bg-red-700', icon: 'tv' },
  { id: 'cat_net_comp', name: 'Netflix (Cuenta Completa)', desc: 'Cuenta completa 4 pantallas', defaultPrice: 12.0, defaultInv: 7.0, defaultQty: 5, color: 'text-rose-400', badge: 'bg-rose-700', icon: 'monitor' },
  { id: 'cat_disney', name: 'Disney+ (Sin ESPN)', desc: 'Pantalla Disney individual', defaultPrice: 2.5, defaultInv: 1.0, defaultQty: 15, color: 'text-blue-400', badge: 'bg-blue-600', icon: 'sparkles' },
  { id: 'cat_prime', name: 'Prime Video', desc: 'Pantalla Prime Video', defaultPrice: 2.5, defaultInv: 1.0, defaultQty: 12, color: 'text-sky-400', badge: 'bg-sky-600', icon: 'video' },
  { id: 'cat_vix', name: 'ViX', desc: 'Pantalla ViX Premium', defaultPrice: 2.5, defaultInv: 1.0, defaultQty: 8, color: 'text-orange-400', badge: 'bg-orange-600', icon: 'flame' },
  { id: 'cat_max', name: 'Max', desc: 'Pantalla Max (HBO)', defaultPrice: 2.5, defaultInv: 1.0, defaultQty: 10, color: 'text-purple-400', badge: 'bg-purple-600', icon: 'film' },
  { id: 'cat_flujo', name: 'Flujo TV', desc: 'Suscripción Flujo TV', defaultPrice: 4.0, defaultInv: 2.0, defaultQty: 10, color: 'text-teal-400', badge: 'bg-teal-600', icon: 'tv-2' },
  { id: 'cat_apple', name: 'Apple TV+', desc: 'Acceso Apple TV+', defaultPrice: 3.0, defaultInv: 1.2, defaultQty: 6, color: 'text-slate-300', badge: 'bg-slate-600', icon: 'film' },
  { id: 'cat_iqiyi', name: 'iQIYI', desc: 'Pantalla iQIYI Doramas', defaultPrice: 2.8, defaultInv: 1.0, defaultQty: 5, color: 'text-emerald-300', badge: 'bg-emerald-600', icon: 'play-square' },
  { id: 'cat_viki', name: 'Viki', desc: 'Pantalla Viki Rakuten', defaultPrice: 2.8, defaultInv: 1.0, defaultQty: 5, color: 'text-pink-400', badge: 'bg-pink-600', icon: 'heart' },
  { id: 'cat_spot_1m', name: 'Spotify (1 Mes)', desc: 'Cuenta Spotify Premium 1 mes', defaultPrice: 4.0, defaultInv: 1.5, defaultQty: 8, color: 'text-emerald-400', badge: 'bg-emerald-600', icon: 'music' },
  { id: 'cat_spot_3m', name: 'Spotify (3 Meses)', desc: 'Promo Spotify Premium 3 meses', defaultPrice: 10.0, defaultInv: 3.5, defaultQty: 4, color: 'text-emerald-400', badge: 'bg-emerald-700', icon: 'music' },
  { id: 'cat_yt_1m', name: 'YouTube Premium (1 Mes)', desc: 'Cuenta YouTube Premium 1 mes', defaultPrice: 4.0, defaultInv: 1.5, defaultQty: 8, color: 'text-red-500', badge: 'bg-red-700', icon: 'play' },
  { id: 'cat_yt_3m', name: 'YouTube Premium (3 Meses)', desc: 'Promo YouTube Premium 3 meses', defaultPrice: 10.0, defaultInv: 3.5, defaultQty: 4, color: 'text-red-500', badge: 'bg-red-800', icon: 'play' },
  { id: 'cat_magis', name: 'Magis TV', desc: 'Acceso Magis TV', defaultPrice: 6.0, defaultInv: 3.0, defaultQty: 10, color: 'text-indigo-400', badge: 'bg-indigo-600', icon: 'airplay' },
  { id: 'cat_star', name: 'Star+', desc: 'Pantalla Star+', defaultPrice: 2.5, defaultInv: 1.0, defaultQty: 5, color: 'text-amber-400', badge: 'bg-amber-600', icon: 'star' },
  { id: 'cat_plex', name: 'Plex', desc: 'Acceso servidor Plex', defaultPrice: 3.0, defaultInv: 1.0, defaultQty: 4, color: 'text-yellow-400', badge: 'bg-yellow-600', icon: 'server' }
];
const CATALOG_ITEMS = DEFAULT_CATALOG_ITEMS;

// Normalize legacy or alias platform names
function normalizePlatformName(name) {
  if (!name) return 'Netflix (Pantalla Normal)';
  const lower = name.trim().toLowerCase();
  if (lower.includes('netflix') && (lower.includes('personal') || lower.includes('npers'))) return 'Netflix (Personal)';
  if (lower.includes('pantalla') && lower.includes('netflix')) return 'Netflix (Pantalla Normal)';
  if (lower === 'netflix (pantallas)') return 'Netflix (Pantalla Normal)';
  if (lower === 'cuenta netflix' || lower.includes('cuenta completa')) return 'Netflix (Cuenta Completa)';
  if (lower.includes('disney')) return 'Disney+ (Sin ESPN)';
  if (lower.includes('prime')) return 'Prime Video';
  if (lower.includes('max') || lower.includes('hbo')) return 'Max';
  if (lower.includes('vix')) return 'ViX';
  if (lower.includes('flujo') || lower.includes('fjulo')) return 'Flujo TV';
  if (lower.includes('apple')) return 'Apple TV+';
  if (lower.includes('iqiyi') || lower.includes('iquiyi')) return 'iQIYI';
  if (lower.includes('viki')) return 'Viki';
  if (lower.includes('spotify')) return 'Spotify';
  if (lower.includes('youtube') || lower.includes('yt')) return 'YouTube Premium';
  if (lower.includes('magis')) return 'Magis TV';
  if (lower.includes('star')) return 'Star+';
  if (lower.includes('plex')) return 'Plex';
  return name;
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Capacidad total de perfiles/pantallas por cuenta
function getAccountCapacity(acc) {
  if (acc.capacidad && acc.capacidad > 0) return acc.capacidad;
  const norm = normalizePlatformName(acc.plataforma);
  if (acc.tipo === 'CUENTA' || norm.includes('Personal')) return 1;
  if (norm.includes('Netflix (Pantalla Normal)') || norm.includes('Netflix (Pantallas)')) {
    return Math.max(5, (acc.perfiles || []).length);
  }
  if (norm.includes('Disney')) return Math.max(4, (acc.perfiles || []).length);
  if (norm.includes('Max')) return Math.max(4, (acc.perfiles || []).length);
  if (norm.includes('Prime')) return Math.max(3, (acc.perfiles || []).length);
  if (norm.includes('Star')) return Math.max(4, (acc.perfiles || []).length);
  if (norm.includes('Viki') || norm.includes('iQIYI')) return Math.max(4, (acc.perfiles || []).length);
  return Math.max(acc.numPerfiles || 1, (acc.perfiles || []).length || 1);
}

// Asegura que todos los slots de perfiles (1..capacidad) existan
function ensureAccountProfileSlots(acc) {
  const cap = getAccountCapacity(acc);
  if (!acc.perfiles) acc.perfiles = [];
  for (let i = 1; i <= cap; i++) {
    let existing = acc.perfiles.find(p => p.num === i);
    if (!existing) {
      acc.perfiles.push({ num: i, cliente: '', telefono: '', pin: '', raw: '', fechaEntrega: '', fechaCorte: '', dias: 30 });
    } else {
      const hasClient = Boolean((existing.cliente && existing.cliente.trim() !== '') || (existing.raw && existing.raw.trim() !== ''));
      if (hasClient) {
        if (!existing.fechaCorte) {
          // Asignar 30 días estándar a partir de fechaEntrega o hoy (NUNCA copiar fecha lejana del proveedor)
          const baseDate = parseDMY(existing.fechaEntrega) || new Date();
          existing.fechaCorte = formatDMY(addDaysToDate(baseDate, existing.dias || 30));
          existing.fechaEntrega = formatDMY(baseDate);
          existing.dias = existing.dias || 30;
        }
      } else {
        // Perfil libre: NUNCA debe tener fecha de vencimiento
        existing.fechaCorte = '';
        existing.fechaEntrega = '';
      }
    }
  }
  acc.perfiles.sort((a, b) => a.num - b.num);
  acc.numPerfiles = cap;
  acc.capacidad = cap;
}

// Garantiza que cada cuenta tenga un identificador único irrepetible (_uid)
function ensureAccountUniqueIds() {
  if (!state.accounts || !Array.isArray(state.accounts)) return;
  state.accounts.forEach((a, idx) => {
    if (!a._uid) {
      a._uid = 'acc_' + idx + '_' + (a.id || 'row');
    }
    ensureAccountProfileSlots(a);
  });
}


// Obtiene la fecha de vencimiento más próxima de una cuenta
function getAccountEarliestDate(acc) {
  ensureAccountProfileSlots(acc);
  const activeProfiles = (acc.perfiles || []).filter(p => (p.cliente && p.cliente.trim() !== '') || (p.raw && p.raw.trim() !== ''));
  if (activeProfiles.length === 0) return acc.fechaCorte;
  let earliest = null;
  let earliestTime = Infinity;
  activeProfiles.forEach(p => {
    const d = parseDMY(p.fechaCorte || acc.fechaCorte);
    if (d && d.getTime() < earliestTime) {
      earliestTime = d.getTime();
      earliest = p.fechaCorte || acc.fechaCorte;
    }
  });
  return earliest || acc.fechaCorte;
}

// Verifica si una cuenta coincide con el filtro de estado (vencidos, hoy, urgente, pronto, activos)
function getAccountMatchesStatus(acc, statusFilter) {
  if (statusFilter === 'todos') return true;
  ensureAccountProfileSlots(acc);
  const activeProfiles = (acc.perfiles || []).filter(p => (p.cliente && p.cliente.trim() !== '') || (p.raw && p.raw.trim() !== ''));
  if (activeProfiles.length > 0) {
    return activeProfiles.some(p => {
      const d = getDaysUntil(p.fechaCorte || acc.fechaCorte);
      return d.status === statusFilter;
    });
  }
  const d = getDaysUntil(acc.fechaCorte);
  return d.status === statusFilter;
}

// Alternar entre Vista por Cuentas y Vista por Pantallas/Clientes
function setAccountsViewMode(mode) {
  state.accountsViewMode = mode;
  try { localStorage.setItem('jmc_accounts_view_mode', mode); } catch(e){}
  updateViewModeButtons();
  renderAccounts();
}

function updateViewModeButtons() {
  const btnCuentas = document.getElementById('btn-view-mode-cuentas');
  const btnPantallas = document.getElementById('btn-view-mode-pantallas');
  if (!btnCuentas || !btnPantallas) return;
  const isCuentas = (state.accountsViewMode || 'cuentas') === 'cuentas';
  if (isCuentas) {
    btnCuentas.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow-md shadow-indigo-600/30';
    btnPantallas.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-slate-200';
  } else {
    btnCuentas.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition text-slate-400 hover:text-slate-200';
    btnPantallas.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition bg-indigo-600 text-white shadow-md shadow-indigo-600/30';
  }
}

// Abre el modal para renovar un único perfil específico
function openRenewProfileModal(accKey, perfilNum) {
  const acc = findAccountByIdOrUid(accKey);
  if (!acc) return;
  ensureAccountProfileSlots(acc);
  const p = (acc.perfiles || []).find(x => x.num === perfilNum);
  if (!p) return;

  state.selectedAccount = acc;
  state.selectedProfileNum = perfilNum;

  const currCorte = parseDMY(p.fechaCorte || acc.fechaCorte) || new Date();
  const today = new Date();
  today.setHours(0,0,0,0);

  const baseDate = (currCorte < today) ? today : currCorte;
  const newCorte = addDaysToDate(baseDate, 30);

  const pricing = getCatalogPriceAndInvestment(acc.plataforma, 30, acc);

  document.getElementById('renew-acc-id').textContent = `${acc.plataforma} (${acc.id}) - Perfil #${perfilNum}: ${p.cliente || 'Cliente'}`;
  document.getElementById('renew-current-corte').textContent = formatDisplayDate(p.fechaCorte || acc.fechaCorte);
  document.getElementById('renew-days').value = '30';
  document.getElementById('renew-new-corte').value = formatYMD(newCorte);
  document.getElementById('renew-sale-price').value = pricing.price.toFixed(2);
  document.getElementById('renew-investment').value = '0.00';
  document.getElementById('renew-log-sale').checked = true;

  updateRenewProfitPreview();
  openModal('renew-modal');
}

// Recalcular vencimiento al asignar perfil
function recalculateAssignExpiryDate() {
  const delivInput = document.getElementById('assign-delivery-date');
  const expiryInput = document.getElementById('assign-expiry-date');
  if (!delivInput || !expiryInput) return;
  const delivYMD = delivInput.value;
  if (!delivYMD) return;
  const parts = delivYMD.split('-');
  const delivDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
  const newExpiry = addDaysToDate(delivDate, 30);
  expiryInput.value = formatYMD(newExpiry);
}

// Búsqueda infalible de cuenta por _uid único o por id
function findAccountByIdOrUid(key) {
  if (!key) return null;
  return state.accounts.find(a => a._uid === key) || state.accounts.find(a => a.id === key);
}

// Obtiene estado de disponibilidad: FULL, disponibles, ocupados, etc.
function getAccountAvailabilityInfo(acc) {
  ensureAccountProfileSlots(acc);
  const occupiedSlots = (acc.perfiles || []).filter(p => (p.cliente && p.cliente.trim() !== '') || (p.raw && p.raw.trim() !== ''));
  const occupiedCount = occupiedSlots.length;
  const capacity = acc.capacidad || getAccountCapacity(acc);
  const availableCount = Math.max(0, capacity - occupiedCount);
  const isFull = availableCount === 0;
  const isEmpty = occupiedCount === 0;
  return { capacity, occupiedCount, availableCount, isFull, isEmpty, occupiedSlots };
}

// Obtener el item correspondiente en el tarifario para una cuenta/plataforma
function getCatalogItemForPlatform(platformName, days = 30, acc = null) {
  const norm = normalizePlatformName(platformName);
  const items = getCatalogItems();
  
  if (acc) {
    if (acc.id && acc.id.startsWith('NPERS')) {
      const it = items.find(i => i.id === 'cat_net_pers');
      if (it) return it;
    }
    if ((acc.id && acc.id.startsWith('CNET')) || (acc.tipo === 'CUENTA' && norm.includes('Netflix'))) {
      const it = items.find(i => i.id === 'cat_net_comp');
      if (it) return it;
    }
  }
  
  if (norm.includes('Personal')) {
    const it = items.find(i => i.id === 'cat_net_pers');
    if (it) return it;
  }
  if (norm.includes('Completa')) {
    const it = items.find(i => i.id === 'cat_net_comp');
    if (it) return it;
  }
  if (norm.includes('Pantalla Normal') || norm === 'Netflix (Pantallas)') {
    const it = items.find(i => i.id === 'cat_net_pant');
    if (it) return it;
  }
  
  if (norm.toLowerCase().includes('spotify')) {
    if (days >= 80) {
      return items.find(i => i.id === 'cat_spot_3m') || items.find(i => i.id === 'cat_spot_1m');
    }
    return items.find(i => i.id === 'cat_spot_1m');
  }

  if (norm.toLowerCase().includes('youtube') || norm.toLowerCase().includes('yt')) {
    if (days >= 80) {
      return items.find(i => i.id === 'cat_yt_3m') || items.find(i => i.id === 'cat_yt_1m');
    }
    return items.find(i => i.id === 'cat_yt_1m');
  }
  
  // Coincidencia exacta por ID o por Nombre
  let found = items.find(i => i.id === platformName || i.name.toLowerCase() === norm.toLowerCase());
  if (found) return found;
  
  // Coincidencia parcial por Nombre
  found = items.find(i => i.name.toLowerCase().includes(norm.toLowerCase()) || norm.toLowerCase().includes(i.name.toLowerCase()));
  if (found) return found;
  
  return null;
}

// Obtener precio de venta y costo de inversión guardados del tarifario
function getCatalogPriceAndInvestment(platformName, days = 30, acc = null) {
  const item = getCatalogItemForPlatform(platformName, days, acc);
  if (item) {
    const costData = (state.catalogCosts && state.catalogCosts[item.id]) ? state.catalogCosts[item.id] : {};
    const price = (costData.price !== undefined) ? costData.price : item.defaultPrice;
    const inv = (costData.inv !== undefined) ? costData.inv : item.defaultInv;
    return { price, inv, item };
  }
  
  const norm = normalizePlatformName(platformName);
  const conf = PLATFORMS_CONFIG.find(p => p.name === norm);
  const defPrice = conf ? (conf.price3m && days >= 80 ? conf.price3m : conf.defaultPrice) : 3.0;
  const defInv = conf?.defaultInvestment || 1.0;
  return { price: defPrice, inv: defInv, item: null };
}

// Get official price based on platform and duration (days)
function getDefaultPrice(platformName, days = 30, acc = null) {
  const pricing = getCatalogPriceAndInvestment(platformName, days, acc);
  if (pricing && pricing.price !== undefined) {
    return pricing.price;
  }
  const norm = normalizePlatformName(platformName);
  const conf = PLATFORMS_CONFIG.find(p => p.name === norm);
  if (!conf) return 3.0;
  if (conf.price3m && days >= 80) {
    return conf.price3m;
  }
  return conf.defaultPrice;
}

// App State
const state = {
  accountsViewMode: localStorage.getItem('jmc_accounts_view_mode') || 'cuentas',
  selectedProfileNum: null,
  accounts: [],
  clients: [],
  sales: [],
  catalog: [], // Full catalog items (default + custom)
  catalogCosts: {}, // Stores user-customized { [catId]: { price: X, inv: Y, qty: Z } }
  currentTab: 'cuentas', // 'cuentas', 'correos', 'tarifario_ganancias', 'clientes', 'contabilidad'
  statusFilter: 'todos',
  platformFilter: 'todas',
  searchTerm: '',
  selectedAccount: null,
  activeModal: null,
  whatsappData: null,
  accountingChart: null
};

// Utilities: Date Parsing and Formatting
function parseDMY(dateStr) {
  if (!dateStr) return null;
  if (dateStr instanceof Date) return isNaN(dateStr.getTime()) ? null : dateStr;
  if (typeof dateStr !== 'string') return null;
  const parts = dateStr.trim().split(/[\/\-]/);
  if (parts.length !== 3) return null;
  let d, m, y;
  if (parts[0].length === 4) {
    // Formato YYYY-MM-DD
    y = parseInt(parts[0], 10);
    m = parseInt(parts[1], 10) - 1;
    d = parseInt(parts[2], 10);
  } else {
    // Formato DD/MM/YYYY o D/M/YYYY
    d = parseInt(parts[0], 10);
    m = parseInt(parts[1], 10) - 1;
    y = parseInt(parts[2], 10);
    if (y < 100) y += 2000;
  }
  const date = new Date(y, m, d, 0, 0, 0, 0);
  return isNaN(date.getTime()) ? null : date;
}

function formatDMY(date) {
  if (!date) return '';
  if (typeof date === 'string') {
    const p = parseDMY(date);
    if (!p) return date;
    date = p;
  }
  if (!(date instanceof Date) || isNaN(date.getTime())) return '';
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

// Formateador infalible que garantiza visualización estricta DD/MM/YYYY en toda la aplicación
function formatDisplayDate(val) {
  if (!val || val === '—' || val === 'Sin fecha' || val === 'N/A') return val || '—';
  return formatDMY(val) || val;
}

// Normaliza todas las fechas guardadas a formato DD/MM/YYYY con 2 dígitos
function normalizeAllDates() {
  if (!state.accounts || !Array.isArray(state.accounts)) return;
  state.accounts.forEach(acc => {
    if (acc.fechaCorte) acc.fechaCorte = formatDisplayDate(acc.fechaCorte);
    if (acc.fechaEntrega) acc.fechaEntrega = formatDisplayDate(acc.fechaEntrega);
    if (acc.perfiles && Array.isArray(acc.perfiles)) {
      acc.perfiles.forEach(p => {
        if (p.fechaCorte) p.fechaCorte = formatDisplayDate(p.fechaCorte);
        if (p.fechaEntrega) p.fechaEntrega = formatDisplayDate(p.fechaEntrega);
      });
    }
  });
  if (state.sales && Array.isArray(state.sales)) {
    state.sales.forEach(s => {
      if (s.fecha) s.fecha = formatDisplayDate(s.fecha);
    });
  }
}

function formatYMD(date) {
  if (!date || !(date instanceof Date) || isNaN(date.getTime())) return '';
  const d = String(date.getDate()).padStart(2, '0');
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = date.getFullYear();
  return `${y}-${m}-${d}`;
}

function addDaysToDate(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getDaysUntil(dateStr) {
  const target = parseDMY(dateStr);
  if (!target) return { diffDays: null, status: 'sin_fecha', label: 'Sin Fecha', color: 'gray' };
  
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const diffTime = target.getTime() - today.getTime();
  const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays < 0) {
    return {
      diffDays,
      status: 'vencidos',
      badgeClass: 'bg-red-500/20 text-red-400 border border-red-500/30',
      pillClass: 'bg-red-500 text-white animate-pulse',
      icon: 'alert-triangle',
      label: `Vencido hace ${Math.abs(diffDays)} ${Math.abs(diffDays) === 1 ? 'día' : 'días'}`
    };
  } else if (diffDays === 0) {
    return {
      diffDays: 0,
      status: 'hoy',
      badgeClass: 'bg-amber-500/20 text-amber-300 border border-amber-500/40',
      pillClass: 'bg-amber-500 text-black font-bold animate-bounce',
      icon: 'bell',
      label: 'VENCE HOY'
    };
  } else if (diffDays <= 3) {
    return {
      diffDays,
      status: 'urgente',
      badgeClass: 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30',
      pillClass: 'bg-yellow-500 text-black font-semibold',
      icon: 'clock',
      label: `Vence en ${diffDays} ${diffDays === 1 ? 'día' : 'días'}`
    };
  } else if (diffDays <= 7) {
    return {
      diffDays,
      status: 'pronto',
      badgeClass: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
      pillClass: 'bg-blue-500 text-white',
      icon: 'calendar',
      label: `Vence en ${diffDays} días`
    };
  } else {
    return {
      diffDays,
      status: 'activos',
      badgeClass: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
      pillClass: 'bg-emerald-600 text-white',
      icon: 'check-circle',
      label: `Activo (${diffDays} días)`
    };
  }
}

function sanitizePhone(raw) {
  if (!raw) return '';
  let cleaned = raw.replace(/[^\d+]/g, '');
  if (cleaned.startsWith('+')) {
    cleaned = cleaned.substring(1);
  } else if (cleaned.startsWith('04') && cleaned.length >= 10) {
    cleaned = '58' + cleaned.substring(1);
  } else if (cleaned.startsWith('4') && cleaned.length === 10) {
    cleaned = '58' + cleaned;
  }
  return cleaned;
}

// LocalStorage Persistence
function loadState() {
  const savedAcc = localStorage.getItem('jmc_accounts');
  const savedCli = localStorage.getItem('jmc_clients');
  const savedSal = localStorage.getItem('jmc_sales');
  const savedCosts = localStorage.getItem('jmc_catalog_costs');
  
  if (savedAcc) {
    try { state.accounts = JSON.parse(savedAcc); } catch(e) { state.accounts = window.INITIAL_ACCOUNTS || []; }
  } else {
    state.accounts = window.INITIAL_ACCOUNTS || [];
  }

  state.accounts.forEach(a => {
    a.plataforma = normalizePlatformName(a.plataforma);
  });
  ensureAccountUniqueIds();
  normalizeAllDates();
  saveAccounts();
  
  if (savedCli) {
    try { state.clients = JSON.parse(savedCli); } catch(e) { state.clients = window.INITIAL_CLIENTS || []; }
  } else {
    state.clients = window.INITIAL_CLIENTS || [];
    saveClients();
  }
  
  if (savedSal) {
    try { state.sales = JSON.parse(savedSal); } catch(e) { state.sales = []; }
  } else {
    state.sales = [];
  }

  // Load custom or active catalog items
  const savedCatalog = localStorage.getItem('jmc_catalog_items');
  if (savedCatalog) {
    try {
      state.catalog = JSON.parse(savedCatalog);
    } catch(e) {
      state.catalog = JSON.parse(JSON.stringify(DEFAULT_CATALOG_ITEMS));
    }
  } else {
    state.catalog = JSON.parse(JSON.stringify(DEFAULT_CATALOG_ITEMS));
  }
  saveCatalog();

  // Load catalog investment costs
  if (savedCosts) {
    try { state.catalogCosts = JSON.parse(savedCosts); } catch(e) { state.catalogCosts = {}; }
  } else {
    state.catalogCosts = {};
  }
  
  // Ensure default catalog costs exist for all items
  getCatalogItems().forEach(item => {
    if (!state.catalogCosts[item.id]) {
      state.catalogCosts[item.id] = {
        price: item.defaultPrice,
        inv: item.defaultInv,
        qty: item.defaultQty
      };
    }
  });
  saveCatalogCosts();
}

function saveAccounts() {
  normalizeAllDates();
  localStorage.setItem('jmc_accounts', JSON.stringify(state.accounts));
  scheduleFirebaseSync();
}

function saveClients() {
  localStorage.setItem('jmc_clients', JSON.stringify(state.clients));
  scheduleFirebaseSync();
}

function saveSales() {
  localStorage.setItem('jmc_sales', JSON.stringify(state.sales));
  scheduleFirebaseSync();
}

function saveCatalog() {
  localStorage.setItem('jmc_catalog_items', JSON.stringify(state.catalog));
  scheduleFirebaseSync();
}

function saveCatalogCosts() {
  localStorage.setItem('jmc_catalog_costs', JSON.stringify(state.catalogCosts));
  scheduleFirebaseSync();
}

function getCatalogItems() {
  if (!state.catalog || !Array.isArray(state.catalog) || state.catalog.length === 0) {
    state.catalog = JSON.parse(JSON.stringify(DEFAULT_CATALOG_ITEMS));
  }
  return state.catalog;
}

function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  const colors = {
    success: 'bg-emerald-600 text-white border-emerald-500',
    error: 'bg-red-600 text-white border-red-500',
    warning: 'bg-amber-600 text-white border-amber-500',
    info: 'bg-slate-800 text-slate-100 border-slate-700'
  };
  
  toast.className = `flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl border text-sm font-medium transition-all transform duration-300 translate-y-2 opacity-0 ${colors[type] || colors.info}`;
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check' : type === 'error' ? 'alert-circle' : 'info'}" class="w-5 h-5 flex-shrink-0"></i>
    <span>${message}</span>
  `;
  container.appendChild(toast);
  lucide.createIcons();
  
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });
  
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Compute Statistics
function getStats() {
  let total = state.accounts.length;
  let vencidos = 0;
  let hoy = 0;
  let urgente = 0;
  let pronto = 0;
  let activos = 0;
  let totalPerfilesOcupados = 0;
  
  state.accounts.forEach(acc => {
    ensureAccountProfileSlots(acc);
    const normPlat = normalizePlatformName(acc.plataforma);
    const platConf = PLATFORMS_CONFIG.find(p => p.name === normPlat) || PLATFORMS_CONFIG[0];
    const isFull = acc.tipo === 'CUENTA' || platConf.isPersonal || (acc.dueno && (!acc.perfiles || acc.perfiles.filter(p => p.cliente || p.raw).length === 0));

    if (isFull) {
      totalPerfilesOcupados++;
      const info = getDaysUntil(acc.fechaCorte);
      if (info.status === 'vencidos') vencidos++;
      else if (info.status === 'hoy') hoy++;
      else if (info.status === 'urgente') urgente++;
      else if (info.status === 'pronto') pronto++;
      else if (info.status === 'activos') activos++;
    } else {
      const activeProfiles = (acc.perfiles || []).filter(p => (p.cliente && p.cliente.trim() !== '') || (p.raw && p.raw.trim() !== ''));
      activeProfiles.forEach(p => {
        totalPerfilesOcupados++;
        const info = getDaysUntil(p.fechaCorte || acc.fechaCorte);
        if (info.status === 'vencidos') vencidos++;
        else if (info.status === 'hoy') hoy++;
        else if (info.status === 'urgente') urgente++;
        else if (info.status === 'pronto') pronto++;
        else if (info.status === 'activos') activos++;
      });
    }
  });
  
  return {
    total,
    vencidos,
    hoy,
    urgente,
    pronto,
    activos,
    atencionTotal: vencidos + hoy + urgente,
    totalPerfilesOcupados,
    totalClientes: state.clients.length
  };
}

function renderKpis() {
  const stats = getStats();
  
  const elTotal = document.getElementById('kpi-total');
  const elVencidos = document.getElementById('kpi-vencidos');
  const elHoy = document.getElementById('kpi-hoy');
  const elUrgente = document.getElementById('kpi-urgente');
  const elPronto = document.getElementById('kpi-pronto');
  const elActivos = document.getElementById('kpi-activos');
  
  if (elTotal) elTotal.textContent = stats.total;
  if (elVencidos) elVencidos.textContent = stats.vencidos;
  if (elHoy) elHoy.textContent = stats.hoy;
  if (elUrgente) elUrgente.textContent = stats.urgente;
  if (elPronto) elPronto.textContent = stats.pronto;
  if (elActivos) elActivos.textContent = stats.activos;
  
  const bannerAttention = document.getElementById('urgent-banner');
  if (bannerAttention) {
    if (stats.vencidos > 0 || stats.hoy > 0) {
      bannerAttention.classList.remove('hidden');
      bannerAttention.innerHTML = `
        <div class="flex flex-col sm:flex-row items-center justify-between gap-3 bg-gradient-to-r from-red-950/80 via-slate-900 to-amber-950/70 border border-red-500/40 rounded-2xl p-4 shadow-xl">
          <div class="flex items-center gap-3">
            <span class="flex h-4 w-4 relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
            <div>
              <h4 class="font-bold text-red-200 text-sm sm:text-base">¡Atención prioritaria de vencimientos!</h4>
              <p class="text-xs sm:text-sm text-slate-300">
                Tienes <strong class="text-red-400">${stats.vencidos} cuentas vencidas</strong> y <strong class="text-amber-400">${stats.hoy} que vencen hoy</strong>.
              </p>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="setStatusFilter('vencidos')" class="px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded-lg text-xs font-semibold shadow transition">
              Ver Vencidas (${stats.vencidos})
            </button>
            <button onclick="setStatusFilter('hoy')" class="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-semibold shadow transition">
              Ver Vencen Hoy (${stats.hoy})
            </button>
          </div>
        </div>
      `;
    } else {
      bannerAttention.classList.add('hidden');
    }
  }
}

function renderPlatformPills() {
  const container = document.getElementById('platform-pills');
  if (!container) return;
  
  const counts = { todas: state.accounts.length };
  PLATFORMS_CONFIG.forEach(p => counts[p.name] = 0);
  state.accounts.forEach(a => {
    const norm = normalizePlatformName(a.plataforma);
    if (counts[norm] !== undefined) counts[norm]++;
    else counts[norm] = 1;
  });
  
  let html = `
    <button onclick="setPlatformFilter('todas')" class="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${state.platformFilter === 'todas' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'}">
      Todas (${counts.todas})
    </button>
  `;
  
  PLATFORMS_CONFIG.forEach(p => {
    const c = counts[p.name] || 0;
    const isSelected = state.platformFilter === p.name;
    html += `
      <button onclick="setPlatformFilter('${p.name}')" class="px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${isSelected ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700/60'}">
        <span>${p.name}</span>
        <span class="px-1.5 py-0.2 rounded-full text-[10px] ${c > 0 ? 'bg-indigo-500/40 text-indigo-200' : 'bg-black/30 text-slate-500'} font-mono">${c}</span>
        <span class="text-[10px] font-bold text-emerald-400">$${p.defaultPrice}</span>
      </button>
    `;
  });
  
  container.innerHTML = html;
}

function renderAccounts() {
  const container = document.getElementById('accounts-list');
  if (!container) return;
  
  updateViewModeButtons();

  const isPantallasMode = state.accountsViewMode === 'pantallas';

  // ============================================================
  // MODO 1: VISTA POR CLIENTES / PANTALLAS INDIVIDUALES
  // ============================================================
  if (isPantallasMode) {
    const allSubscriptions = [];
    state.accounts.forEach(acc => {
      ensureAccountProfileSlots(acc);
      const accKey = acc._uid || acc.id;
      const normPlat = normalizePlatformName(acc.plataforma);
      const platConf = PLATFORMS_CONFIG.find(p => p.name === normPlat) || PLATFORMS_CONFIG[0];
      const isFull = acc.tipo === 'CUENTA' || platConf.isPersonal || (acc.dueno && (!acc.perfiles || acc.perfiles.filter(p => p.cliente || p.raw).length === 0));

      if (isFull) {
        const clientName = acc.dueno || (acc.perfiles?.[0]?.cliente) || 'Cuenta Completa';
        const clientPhone = acc.perfiles?.[0]?.telefono || '';
        const cDate = acc.fechaCorte || 'Sin fecha';
        const dateInfo = getDaysUntil(cDate);
        allSubscriptions.push({
          acc,
          accKey,
          isFullAccount: true,
          perfilNum: 'dueno',
          perfilLabel: platConf.isPersonal ? 'Perfil Personal' : 'Cuenta Completa',
          cliente: clientName,
          telefono: clientPhone,
          pin: '',
          plataforma: normPlat,
          platConf,
          correo: acc.correo,
          clave: acc.clave,
          claveCorreo: acc.claveCorreo,
          fechaEntrega: acc.fechaEntrega || '—',
          dias: acc.dias || 30,
          fechaCorte: cDate,
          dateInfo,
          standardPrice: getDefaultPrice(normPlat, acc.dias || 30)
        });
      } else {
        (acc.perfiles || []).forEach(p => {
          const hasClient = Boolean((p.cliente && p.cliente.trim() !== '') || (p.raw && p.raw.trim() !== ''));
          if (hasClient) {
            const clientName = p.cliente || p.raw;
            const cDate = p.fechaCorte || acc.fechaCorte || 'Sin fecha';
            const dateInfo = getDaysUntil(cDate);
            allSubscriptions.push({
              acc,
              accKey,
              isFullAccount: false,
              perfilNum: p.num,
              perfilLabel: `Perfil #${p.num}`,
              cliente: clientName,
              telefono: p.telefono || '',
              pin: p.pin || '',
              plataforma: normPlat,
              platConf,
              correo: acc.correo,
              clave: acc.clave,
              claveCorreo: acc.claveCorreo,
              fechaEntrega: p.fechaEntrega || acc.fechaEntrega || '—',
              dias: p.dias || acc.dias || 30,
              fechaCorte: cDate,
              dateInfo,
              standardPrice: getDefaultPrice(normPlat, p.dias || acc.dias || 30)
            });
          }
        });
      }
    });

    let filtered = allSubscriptions.filter(item => {
      if (state.platformFilter !== 'todas' && item.plataforma !== state.platformFilter) return false;
      if (state.statusFilter !== 'todos' && item.dateInfo.status !== state.statusFilter) return false;
      if (state.searchTerm) {
        const q = state.searchTerm.toLowerCase();
        const inCli = (item.cliente || '').toLowerCase().includes(q);
        const inTel = (item.telefono || '').toLowerCase().includes(q);
        const inEmail = (item.correo || '').toLowerCase().includes(q);
        const inPlat = (item.plataforma || '').toLowerCase().includes(q);
        const inId = (item.acc.id || '').toLowerCase().includes(q);
        const inPerf = (item.perfilLabel || '').toLowerCase().includes(q);
        return inCli || inTel || inEmail || inPlat || inId || inPerf;
      }
      return true;
    });

    filtered.sort((a, b) => {
      const da = parseDMY(a.fechaCorte);
      const db = parseDMY(b.fechaCorte);
      if (!da && !db) return 0;
      if (!da) return 1;
      if (!db) return -1;
      return da.getTime() - db.getTime();
    });

    const countEl = document.getElementById('results-count');
    if (countEl) countEl.textContent = `${filtered.length} pantallas / clientes encontrados`;

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
          <i data-lucide="user-x" class="w-12 h-12 text-slate-500 mx-auto mb-3"></i>
          <h3 class="text-lg font-semibold text-slate-300">No se encontraron clientes ni pantallas</h3>
          <p class="text-sm text-slate-500 max-w-sm mx-auto mt-1">Prueba cambiando los filtros de estado o el término de búsqueda.</p>
          <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition">
            Restablecer Filtros
          </button>
        </div>
      `;
      lucide.createIcons();
      return;
    }

    let html = '';
    filtered.forEach(item => {
      const cardKey = `${item.accKey}_${item.perfilNum}`;
      html += `
        <div class="bg-slate-900/90 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 shadow-xl transition flex flex-col justify-between gap-3 relative overflow-hidden group">
          <div class="absolute top-0 left-0 right-0 h-1 ${item.dateInfo.status === 'vencidos' ? 'bg-red-500' : item.dateInfo.status === 'hoy' ? 'bg-amber-500' : item.dateInfo.status === 'urgente' ? 'bg-yellow-400' : 'bg-emerald-500'}"></div>

          <div>
            <!-- Encabezado: Servicio, Perfil y Vencimiento -->
            <div class="flex items-start justify-between gap-2 mb-2.5">
              <div class="min-w-0 flex-1">
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${item.platConf.badgeColor || 'bg-indigo-600/30 text-indigo-300'}">
                    ${escapeHtml(item.plataforma)}
                  </span>
                  <span class="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-800 text-slate-300 font-mono">
                    ${item.perfilLabel}
                  </span>
                  <span class="font-mono text-xs text-slate-400 font-bold">#${escapeHtml(item.acc.id)}</span>
                </div>
                <!-- Nombre del Cliente Destacado -->
                <h4 class="text-base font-black text-slate-100 mt-1.5 flex items-center gap-1.5 truncate">
                  <i data-lucide="user" class="w-4 h-4 text-indigo-400 shrink-0"></i>
                  <span class="truncate">${escapeHtml(item.cliente)}</span>
                </h4>
                ${item.telefono ? `
                  <p class="text-xs text-slate-400 font-mono flex items-center gap-1 mt-0.5">
                    <i data-lucide="phone" class="w-3 h-3 text-slate-500 shrink-0"></i>
                    <span>${escapeHtml(item.telefono)}</span>
                  </p>
                ` : ''}
              </div>

              <!-- Badge Estado Vencimiento -->
              <span class="px-2.5 py-1 rounded-full text-xs font-bold shrink-0 flex items-center gap-1 ${item.dateInfo.badgeClass}">
                <i data-lucide="${item.dateInfo.icon}" class="w-3.5 h-3.5"></i>
                <span>${item.dateInfo.label}</span>
              </span>
            </div>

            <!-- Credenciales de acceso (con copiar rápido) -->
            <div class="p-2.5 bg-slate-950/80 rounded-xl border border-slate-800/80 space-y-1.5 text-xs font-mono mb-2.5">
              <div class="flex items-center justify-between">
                <span class="text-slate-300 truncate mr-2" title="${escapeHtml(item.correo || '')}">
                  <i data-lucide="mail" class="w-3.5 h-3.5 inline mr-1 text-sky-400"></i>${escapeHtml(item.correo || 'Sin correo')}
                </span>
                <button onclick="copyToClipboard('${escapeHtml(item.correo || '')}', 'Correo')" class="text-slate-500 hover:text-white p-1 hover:bg-slate-800 rounded transition shrink-0" title="Copiar correo">
                  <i data-lucide="copy" class="w-3 h-3"></i>
                </button>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-1 text-slate-300">
                  <i data-lucide="key" class="w-3.5 h-3.5 text-slate-500"></i>
                  <span id="pwd-${cardKey}">••••••••</span>
                  <span id="pwd-real-${cardKey}" class="hidden">${escapeHtml(item.clave || 'Sin clave')}</span>
                  <button onclick="togglePassword('${cardKey}')" class="text-slate-500 hover:text-slate-300 ml-1">
                    <i data-lucide="eye" id="pwd-icon-${cardKey}" class="w-3 h-3"></i>
                  </button>
                </div>
                <button onclick="copyToClipboard('${escapeHtml(item.clave || '')}', 'Contraseña')" class="text-slate-500 hover:text-white p-1 hover:bg-slate-800 rounded transition shrink-0" title="Copiar contraseña">
                  <i data-lucide="copy" class="w-3 h-3"></i>
                </button>
              </div>
              ${item.pin ? `
                <div class="text-[10px] text-amber-400 font-bold pt-1 border-t border-slate-800/60 flex items-center justify-between">
                  <span>PIN Perfil: <strong class="bg-amber-500/20 px-1.5 py-0.5 rounded font-mono text-amber-300">${escapeHtml(item.pin)}</strong></span>
                </div>
              ` : ''}
            </div>

            <!-- Fila de Fechas del Cliente -->
            <div class="grid grid-cols-3 gap-2 p-2 bg-slate-950/40 rounded-xl border border-slate-800/50 text-[11px] mb-1">
              <div>
                <span class="text-slate-500 block text-[9px] uppercase font-semibold">Entrega</span>
                <span class="text-slate-300 font-medium truncate block">${escapeHtml(formatDisplayDate(item.fechaEntrega))}</span>
              </div>
              <div>
                <span class="text-slate-500 block text-[9px] uppercase font-semibold">Duración</span>
                <span class="text-slate-300 font-medium">${item.dias} días</span>
              </div>
              <div>
                <span class="text-slate-500 block text-[9px] uppercase font-semibold">Vencimiento</span>
                <span class="font-bold ${item.dateInfo.status === 'vencidos' ? 'text-red-400' : item.dateInfo.status === 'hoy' ? 'text-amber-400' : 'text-slate-200'}">
                  ${escapeHtml(formatDisplayDate(item.fechaCorte))}
                </span>
              </div>
            </div>
          </div>

          <!-- Botones de Acción de esta Pantalla -->
          <div class="pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-2">
            <button onclick="openRenewProfileModal('${item.accKey}', ${item.perfilNum})" class="flex-1 py-2 px-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-1.5 active:scale-95" title="Renovar suscripción de este cliente">
              <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
              <span>Renovar ($${item.standardPrice})</span>
            </button>
            <button onclick="openWhatsAppModal('${item.accKey}', ${item.perfilNum})" class="p-2 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white rounded-xl transition flex items-center justify-center active:scale-95" title="Enviar WhatsApp de cobro">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
            </button>
            ${!item.isFullAccount ? `
              <button onclick="freeProfile('${item.accKey}', ${item.perfilNum})" class="p-2 bg-slate-800 hover:bg-rose-900/50 text-slate-400 hover:text-rose-300 rounded-xl transition flex items-center justify-center active:scale-95" title="Liberar pantalla">
                <i data-lucide="user-minus" class="w-4 h-4"></i>
              </button>
            ` : ''}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    lucide.createIcons();
    return;
  }

  // ============================================================
  // MODO 2: VISTA POR CUENTAS (CON PERFILES Y VENCIMIENTOS INDIVIDUALES)
  // ============================================================
  let filtered = state.accounts.filter(acc => {
    const platNorm = normalizePlatformName(acc.plataforma);
    if (state.platformFilter !== 'todas' && platNorm !== state.platformFilter) {
      return false;
    }
    if (state.statusFilter !== 'todos' && !getAccountMatchesStatus(acc, state.statusFilter)) {
      return false;
    }
    if (state.searchTerm) {
      const q = state.searchTerm.toLowerCase();
      const inId = (acc.id || '').toLowerCase().includes(q);
      const inEmail = (acc.correo || '').toLowerCase().includes(q);
      const inPlat = (acc.plataforma || '').toLowerCase().includes(q);
      const inDueno = (acc.dueno || '').toLowerCase().includes(q);
      let inPerfiles = false;
      if (acc.perfiles) {
        inPerfiles = acc.perfiles.some(p => 
          (p.cliente || '').toLowerCase().includes(q) || 
          (p.telefono || '').toLowerCase().includes(q) ||
          (p.raw || '').toLowerCase().includes(q)
        );
      }
      return inId || inEmail || inPlat || inDueno || inPerfiles;
    }
    return true;
  });
  
  filtered.sort((a, b) => {
    const da = parseDMY(getAccountEarliestDate(a));
    const db = parseDMY(getAccountEarliestDate(b));
    if (!da && !db) return 0;
    if (!da) return 1;
    if (!db) return -1;
    return da.getTime() - db.getTime();
  });
  
  const countEl = document.getElementById('results-count');
  if (countEl) countEl.textContent = `${filtered.length} cuentas encontradas`;
  
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
        <i data-lucide="search-x" class="w-12 h-12 text-slate-500 mx-auto mb-3"></i>
        <h3 class="text-lg font-semibold text-slate-300">No se encontraron cuentas</h3>
        <p class="text-sm text-slate-500 max-w-sm mx-auto mt-1">Prueba cambiando los filtros de estado, plataforma o el término de búsqueda.</p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition">
          Restablecer Filtros
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }
  
  let html = '';
  filtered.forEach(acc => {
    ensureAccountProfileSlots(acc);
    const normPlat = normalizePlatformName(acc.plataforma);
    const platConf = PLATFORMS_CONFIG.find(p => p.name === normPlat) || PLATFORMS_CONFIG[0];
    const earliestDate = getAccountEarliestDate(acc);
    const earliestInfo = getDaysUntil(earliestDate);
    const providerDateInfo = getDaysUntil(acc.fechaCorte);
    const standardPrice = getDefaultPrice(normPlat, acc.dias || 30);
    const accKey = acc._uid || acc.id;
    
    const perfiles = acc.perfiles || [];
    let perfilesHtml = '';
    
    if (acc.tipo === 'CUENTA' || platConf.isPersonal || (acc.dueno && perfiles.length === 0)) {
      perfilesHtml = `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs">
          <div class="flex items-center gap-2">
            <span class="w-6 h-6 rounded-full bg-indigo-600/30 text-indigo-400 flex items-center justify-center font-bold text-[10px]">
              ${platConf.isPersonal ? 'P' : 'C'}
            </span>
            <div>
              <p class="font-semibold text-slate-200">
                ${platConf.isPersonal ? 'Perfil Personal:' : 'Cuenta Completa:'} ${acc.dueno || (perfiles[0]?.cliente) || 'Sin Asignar'}
              </p>
              <p class="text-[10px] text-slate-400">
                Tarifa: <strong class="text-emerald-400">$${standardPrice.toFixed(2)}</strong> | Entrega: ${formatDisplayDate(acc.fechaEntrega)}
              </p>
            </div>
          </div>
          ${(acc.dueno || perfiles[0]?.cliente) ? `
            <button onclick="openWhatsAppModal('${accKey}', 'dueno')" class="p-1.5 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-lg transition" title="Enviar WhatsApp de cobro">
              <i data-lucide="message-circle" class="w-4 h-4"></i>
            </button>
          ` : ''}
        </div>
      `;
    } else {
      perfilesHtml = `
        <div class="space-y-2">
          ${perfiles.map(p => {
            const hasClient = Boolean((p.cliente && p.cliente.trim() !== '') || (p.raw && p.raw.trim() !== ''));
            const pCorte = p.fechaCorte || acc.fechaCorte || 'Sin fecha';
            const pDateInfo = getDaysUntil(pCorte);
            if (hasClient) {
              return `
                <div class="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 flex flex-col gap-1.5 transition">
                  <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-2 overflow-hidden min-w-0">
                      <span class="w-5 h-5 rounded-md bg-indigo-600/30 text-indigo-300 font-bold flex items-center justify-center text-[10px] shrink-0">
                        #${p.num}
                      </span>
                      <div class="truncate">
                        <span class="font-bold text-slate-200 text-xs truncate">${escapeHtml(p.cliente || p.raw)}</span>
                        ${p.telefono ? `<span class="text-[10px] text-slate-400 font-mono ml-1.5">(${escapeHtml(p.telefono)})</span>` : ''}
                      </div>
                    </div>
                    <div class="flex items-center gap-1 shrink-0">
                      <button onclick="openWhatsAppModal('${accKey}', ${p.num})" class="p-1.5 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-lg transition" title="Enviar WhatsApp a este cliente">
                        <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
                      </button>
                      <button onclick="openRenewProfileModal('${accKey}', ${p.num})" class="px-2 py-1 bg-emerald-600/30 hover:bg-emerald-600 text-emerald-300 hover:text-white rounded-lg text-[10px] font-bold transition flex items-center gap-1 active:scale-95" title="Renovar solo este perfil ($${standardPrice})">
                        <i data-lucide="refresh-cw" class="w-3 h-3"></i>
                        <span>Renovar</span>
                      </button>
                      <button onclick="freeProfile('${accKey}', ${p.num})" class="p-1.5 bg-slate-700 hover:bg-rose-900/50 text-slate-400 hover:text-rose-300 rounded-lg transition" title="Liberar perfil">
                        <i data-lucide="user-minus" class="w-3.5 h-3.5"></i>
                      </button>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-[11px] pt-1 border-t border-slate-700/40">
                    <div class="flex items-center gap-1 text-slate-400 font-mono text-[10px]">
                      <i data-lucide="calendar" class="w-3 h-3 text-slate-500"></i>
                      <span>Vence: <strong class="text-slate-200">${escapeHtml(formatDisplayDate(pCorte))}</strong></span>
                    </div>
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${pDateInfo.badgeClass}">
                      ${pDateInfo.label}
                    </span>
                  </div>
                </div>
              `;
            } else {
              return `
                <div class="flex items-center justify-between p-2 rounded-xl bg-slate-900/40 border border-dashed border-slate-800 text-slate-500 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="w-5 h-5 rounded-md bg-slate-800 text-slate-500 flex items-center justify-center text-[10px]">#${p.num}</span>
                    <span class="italic text-[11px]">Perfil Disponible</span>
                  </div>
                  <button onclick="openAssignProfileModal('${accKey}', ${p.num})" class="px-2.5 py-1 bg-indigo-600/20 text-indigo-300 hover:bg-indigo-600 hover:text-white rounded-lg text-xs font-semibold transition flex items-center gap-1 active:scale-95">
                    <span>+ Asignar</span>
                  </button>
                </div>
              `;
            }
          }).join('')}
        </div>
      `;
    }
    
    html += `
      <div class="bg-slate-900/80 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 sm:p-5 shadow-lg transition-all flex flex-col justify-between gap-4 relative overflow-hidden group">
        <div class="absolute top-0 left-0 right-0 h-1 ${earliestInfo.status === 'vencidos' ? 'bg-red-500' : earliestInfo.status === 'hoy' ? 'bg-amber-500' : earliestInfo.status === 'urgente' ? 'bg-yellow-400' : 'bg-emerald-500'}"></div>
        
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <div class="flex flex-col gap-1">
              <div class="flex items-center gap-2">
                <span class="px-2.5 py-1 rounded-lg text-xs font-bold ${platConf.badgeColor || 'bg-indigo-600/30 text-indigo-300'}">
                  ${escapeHtml(normPlat)}
                </span>
                <span class="text-xs font-mono font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded-md">
                  ${acc.id}
                </span>
              </div>
              <span class="text-[11px] font-semibold text-emerald-400 pl-0.5">
                Tarifa Oficial: $${standardPrice.toFixed(2)}
              </span>
            </div>
            <div class="flex items-center gap-1.5">
              <span class="px-2.5 py-1 rounded-full text-[11px] font-bold flex items-center gap-1 ${providerDateInfo.badgeClass}" title="Renovación con Proveedor">
                <i data-lucide="truck" class="w-3.5 h-3.5"></i>
                <span>Prov: ${escapeHtml(formatDisplayDate(acc.fechaCorte))}</span>
              </span>
            </div>
          </div>
          
          <div class="bg-slate-950/60 rounded-xl p-3 border border-slate-800/80 mb-3 space-y-1.5 text-xs font-mono">
            <div class="flex items-center justify-between">
              <span class="text-slate-400 truncate mr-2" title="${acc.correo}">
                <i data-lucide="mail" class="w-3 h-3 inline mr-1 text-slate-500"></i>${acc.correo || 'Sin correo'}
              </span>
              <button onclick="copyToClipboard('${acc.correo}', 'Correo')" class="text-slate-500 hover:text-indigo-400 p-1" title="Copiar correo">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              </button>
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-1 text-slate-300">
                <i data-lucide="key" class="w-3 h-3 text-slate-500"></i>
                <span id="pwd-${accKey}">••••••••</span>
                <span id="pwd-real-${accKey}" class="hidden">${acc.clave || 'Sin clave'}</span>
                <button onclick="togglePassword('${accKey}')" class="text-slate-500 hover:text-slate-300 ml-1">
                  <i data-lucide="eye" id="pwd-icon-${accKey}" class="w-3 h-3"></i>
                </button>
              </div>
              <button onclick="copyToClipboard('${acc.clave}', 'Clave')" class="text-slate-500 hover:text-indigo-400 p-1" title="Copiar contraseña">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              </button>
            </div>
            ${acc.claveCorreo ? `
              <div class="text-[10px] text-slate-500 pt-1 border-t border-slate-800/50">
                Clave Correo: <span class="text-slate-400 font-semibold">${acc.claveCorreo}</span>
              </div>
            ` : ''}
          </div>
          
          <div class="mb-3">
            <div class="flex items-center justify-between mb-2 text-[11px] font-semibold text-slate-400">
              <span>Perfiles / Clientes & Vencimientos</span>
              <span class="text-[10px] text-slate-500">${perfiles.filter(p => p.cliente || p.raw).length} asignados</span>
            </div>
            ${perfilesHtml}
          </div>
        </div>
        
        <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
          <button onclick="openRenewModal('${accKey}')" class="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl text-xs font-semibold transition active:scale-95" title="Renovar cuenta completa con el proveedor">
            <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
            <span>Renovar Proveedor</span>
          </button>
          
          <button onclick="openEditAccountModal('${accKey}')" class="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl transition" title="Editar Cuenta">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
          </button>
          
          <button onclick="confirmDeleteAccount('${accKey}')" class="p-2 bg-slate-800 hover:bg-red-600/30 text-slate-400 hover:text-red-400 rounded-xl transition" title="Eliminar Cuenta">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  lucide.createIcons();
}

function copyToClipboard(text, fieldName = 'Dato') {
  if (!text) {
    showToast(`No hay ${fieldName} para copiar`, 'warning');
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    showToast(`¡${fieldName} copiado al portapapeles!`, 'success');
  }).catch(() => {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    input.remove();
    showToast(`¡${fieldName} copiado!`, 'success');
  });
}

function togglePassword(accId) {
  const pwdDot = document.getElementById(`pwd-${accId}`);
  const pwdReal = document.getElementById(`pwd-real-${accId}`);
  const icon = document.getElementById(`pwd-icon-${accId}`);
  if (!pwdDot || !pwdReal) return;
  
  if (pwdDot.classList.contains('hidden')) {
    pwdDot.classList.remove('hidden');
    pwdReal.classList.add('hidden');
    icon.setAttribute('data-lucide', 'eye');
  } else {
    pwdDot.classList.add('hidden');
    pwdReal.classList.remove('hidden');
    icon.setAttribute('data-lucide', 'eye-off');
  }
  lucide.createIcons();
}

// ==========================================
// SECCIÓN DE CORREOS & DISPONIBILIDAD (FULL / DISPONIBLES)
// ==========================================

function populateCorreosPlatformFilter() {
  const sel = document.getElementById('correos-plat-filter');
  if (!sel) return;
  const currentVal = sel.value;
  const platforms = [...new Set(state.accounts.map(a => normalizePlatformName(a.plataforma)).filter(Boolean))].sort();
  
  sel.innerHTML = '<option value="todas">Todas las Plataformas</option>' + 
    platforms.map(p => `<option value="${escapeHtml(p)}">${escapeHtml(p)}</option>`).join('');
  
  if (currentVal && platforms.includes(currentVal)) {
    sel.value = currentVal;
  }
}

function filterCorreosList() {
  renderCorreos();
}

function copyAvailableEmailsToClipboard() {
  const availableAccounts = state.accounts.filter(a => {
    const info = getAccountAvailabilityInfo(a);
    return info.availableCount > 0;
  });

  if (availableAccounts.length === 0) {
    showToast('No hay cuentas con pantallas disponibles en este momento', 'warning');
    return;
  }

  let text = `📧 INVENTARIO DE CORREOS DISPONIBLES (${availableAccounts.length} cuentas con espacio):\n\n`;
  availableAccounts.forEach(a => {
    const info = getAccountAvailabilityInfo(a);
    text += `🔹 ${a.plataforma} [${a.id}]\n`;
    text += `   Correo: ${a.correo || 'Sin correo'}\n`;
    if (a.clave) text += `   Clave: ${a.clave}\n`;
    text += `   Disponibilidad: ${info.availableCount} de ${info.capacity} pantallas libres\n\n`;
  });

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`Copiados ${availableAccounts.length} correos con pantallas disponibles`, 'success');
    }).catch(() => {
      showToast('Error al copiar al portapapeles', 'error');
    });
  } else {
    showToast('Portapapeles no disponible en este navegador', 'warning');
  }
}

function exportCorreosToCSV() {
  const headers = ['Servicio', 'ID Cuenta', 'Correo', 'Capacidad', 'Perfiles Ocupados', 'Pantallas Disponibles', 'Estado', 'Fecha Renovacion Proveedor', 'Dias Restantes', 'Detalle Perfiles'];
  const rows = state.accounts.map(acc => {
    const info = getAccountAvailabilityInfo(acc);
    const dateInfo = getDaysUntil(acc.fechaCorte);
    const perfilesStr = (acc.perfiles || []).map(p => {
      const oc = (p.cliente && p.cliente.trim() !== '') || (p.raw && p.raw.trim() !== '');
      return '#' + p.num + ': ' + (oc ? (p.cliente || p.raw) : 'Libre');
    }).join(' | ');

    return [
      '"' + (acc.plataforma || '').replace(/"/g, '""') + '"',
      '"' + (acc.id || '').replace(/"/g, '""') + '"',
      '"' + (acc.correo || '').replace(/"/g, '""') + '"',
      info.capacity,
      info.occupiedCount,
      info.availableCount,
      '"' + (info.isFull ? 'FULL' : (info.availableCount + ' Disponibles')) + '"',
      '"' + (acc.fechaCorte || '').replace(/"/g, '""') + '"',
      dateInfo.diffDays !== null ? dateInfo.diffDays : '',
      '"' + perfilesStr.replace(/"/g, '""') + '"'
    ].join(',');
  });

  const csvContent = '\uFEFF' + [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'GoldenPro_Inventario_Correos_' + new Date().toISOString().slice(0, 10) + '.csv';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  showToast('Inventario de correos descargado en CSV / Excel', 'success');
}

function renderCorreos() {
  const container = document.getElementById('correos-list');
  if (!container) return;

  // Actualizar dropdown de plataformas si es necesario
  populateCorreosPlatformFilter();

  // Calcular KPIs generales de disponibilidad y renovación con proveedor
  let totalCapacidad = 0;
  let totalOcupadas = 0;
  let totalDisponibles = 0;
  let totalFull = 0;
  let totalPorRenovar = 0;

  state.accounts.forEach(acc => {
    ensureAccountProfileSlots(acc);
    const info = getAccountAvailabilityInfo(acc);
    const dateInfo = getDaysUntil(acc.fechaCorte);
    totalCapacidad += info.capacity;
    totalOcupadas += info.occupiedCount;
    totalDisponibles += info.availableCount;
    if (info.isFull) totalFull++;
    if (dateInfo.status === 'vencidos' || dateInfo.status === 'hoy' || dateInfo.status === 'urgente' || dateInfo.status === 'pronto') {
      totalPorRenovar++;
    }
  });

  const kpiDispEl = document.getElementById('correos-kpi-disponibles');
  if (kpiDispEl) kpiDispEl.textContent = totalDisponibles + ' libres';

  const kpiFullEl = document.getElementById('correos-kpi-full');
  if (kpiFullEl) kpiFullEl.textContent = totalFull + ' FULL';

  const kpiRenovarEl = document.getElementById('correos-kpi-renovar');
  if (kpiRenovarEl) kpiRenovarEl.textContent = totalPorRenovar + ' por renovar';

  const kpiTotalEl = document.getElementById('correos-kpi-total');
  if (kpiTotalEl) kpiTotalEl.textContent = state.accounts.length + ' correos';

  const kpiOcupadasEl = document.getElementById('correos-kpi-ocupadas');
  if (kpiOcupadasEl) kpiOcupadasEl.textContent = totalOcupadas + ' de ' + totalCapacidad + ' pantallas ocupadas';

  // Lectura de búsqueda y filtros
  const searchInput = document.getElementById('correos-search');
  const q = searchInput ? searchInput.value.trim().toLowerCase() : '';

  const platFilterEl = document.getElementById('correos-plat-filter');
  const platFilter = (platFilterEl && platFilterEl.value) ? platFilterEl.value : 'todas';

  const statusFilterEl = document.getElementById('correos-status-filter');
  const statusFilter = (statusFilterEl && statusFilterEl.value) ? statusFilterEl.value : 'todos';

  // Filtrar cuentas
  let filtered = state.accounts.filter(acc => {
    const norm = normalizePlatformName(acc.plataforma);
    if (platFilter && platFilter !== 'todas' && norm !== platFilter) return false;

    const info = getAccountAvailabilityInfo(acc);
    const dateInfo = getDaysUntil(acc.fechaCorte);

    if (statusFilter === 'disponibles' && info.availableCount <= 0) return false;
    if (statusFilter === 'full' && !info.isFull) return false;
    if (statusFilter === 'por_renovar' && !(dateInfo.status === 'vencidos' || dateInfo.status === 'hoy' || dateInfo.status === 'urgente' || dateInfo.status === 'pronto')) return false;
    if (statusFilter === 'vacias' && !info.isEmpty) return false;

    if (q) {
      const inEmail = (acc.correo || '').toLowerCase().includes(q);
      const inId = (acc.id || '').toLowerCase().includes(q);
      const inPlat = (acc.plataforma || '').toLowerCase().includes(q);
      const inDueno = (acc.dueno || '').toLowerCase().includes(q);
      const inPerfil = (acc.perfiles || []).some(p => 
        (p.cliente || '').toLowerCase().includes(q) || 
        (p.telefono || '').toLowerCase().includes(q) ||
        (p.raw || '').toLowerCase().includes(q)
      );
      if (!inEmail && !inId && !inPlat && !inDueno && !inPerfil) return false;
    }

    return true;
  });

  // Ordenar: si se filtra por proveedor ordenar por vencimiento; de lo contrario por disponibilidad
  filtered.sort((a, b) => {
    if (statusFilter === 'por_renovar') {
      const da = parseDMY(a.fechaCorte);
      const db = parseDMY(b.fechaCorte);
      if (!da && !db) return 0;
      if (!da) return 1;
      if (!db) return -1;
      return da.getTime() - db.getTime();
    }
    const infoA = getAccountAvailabilityInfo(a);
    const infoB = getAccountAvailabilityInfo(b);
    if (infoA.availableCount > 0 && infoB.availableCount === 0) return -1;
    if (infoA.availableCount === 0 && infoB.availableCount > 0) return 1;
    return a.id.localeCompare(b.id, undefined, { numeric: true });
  });

  const countEl = document.getElementById('correos-results-count');
  if (countEl) {
    countEl.textContent = 'Mostrando ' + filtered.length + ' de ' + state.accounts.length + ' correos';
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="py-16 text-center text-slate-400 bg-slate-900/50 border border-slate-800 rounded-2xl">
        <i data-lucide="mail-search" class="w-12 h-12 mx-auto mb-3 text-slate-600"></i>
        <p class="text-base font-semibold text-slate-300">No se encontraron correos con estos filtros</p>
        <p class="text-xs text-slate-500 mt-1">Prueba con otro término de búsqueda o restablece los filtros.</p>
        <button onclick="document.getElementById('correos-search').value=''; document.getElementById('correos-plat-filter').value='todas'; document.getElementById('correos-status-filter').value='todos'; renderCorreos();" class="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-sky-400 rounded-xl text-xs font-bold transition">
          Restablecer Filtros
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  // TABLA EN FILAS Y COLUMNAS (SOLO CORREOS, SIN CLAVE, CON FECHA PROVEEDOR)
  let rowsHtml = '';
  let mobileCardsHtml = '';
  filtered.forEach(acc => {
    const accKey = acc._uid || acc.id;
    const norm = normalizePlatformName(acc.plataforma);
    const platConf = PLATFORMS_CONFIG.find(p => p.name === norm) || { color: 'indigo', badgeColor: 'bg-indigo-600/30 text-indigo-300' };
    const info = getAccountAvailabilityInfo(acc);
    const pctOcupado = Math.round((info.occupiedCount / info.capacity) * 100);
    const dateInfo = getDaysUntil(acc.fechaCorte);

    // Estado FULL o Disponibles
    const statusBadge = info.isFull
      ? `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/60 shadow-sm shadow-rose-950/40"><span class="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span> FULL</span>`
      : `<span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-sm shadow-emerald-950/40"><span class="w-2 h-2 rounded-full bg-emerald-400"></span> ${info.availableCount} disponible${info.availableCount > 1 ? 's' : ''}</span>`;

    // Desglose de perfiles con botón "+ Asignar" para las pantallas libres
    const perfilesHtml = acc.perfiles.map(p => {
      const isOccupied = (p.cliente && p.cliente.trim() !== '') || (p.raw && p.raw.trim() !== '');
      const clientLabel = p.cliente || p.raw || '';
      if (isOccupied) {
        return `
          <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-950/90 border border-slate-800 text-[11px] text-slate-300" title="${escapeHtml(clientLabel)}">
            <strong class="text-indigo-400 font-mono">#${p.num}</strong>
            <span class="max-w-[110px] truncate font-medium">${escapeHtml(clientLabel)}</span>
            ${p.pin ? `<span class="px-1 py-0.1 bg-amber-500/20 text-amber-300 text-[9px] rounded font-mono">PIN:${escapeHtml(p.pin)}</span>` : ''}
            <button onclick="freeProfile('${accKey}', ${p.num})" class="text-slate-500 hover:text-rose-400 ml-0.5" title="Liberar perfil #${p.num}">
              <i data-lucide="x" class="w-3 h-3"></i>
            </button>
          </span>
        `;
      } else {
        return `
          <button onclick="openAssignProfileModal('${accKey}', ${p.num})" class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg bg-emerald-950/40 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/40 text-[11px] font-bold transition shadow-sm active:scale-95" title="Asignar pantalla libre a cliente">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>#${p.num} + Asignar</span>
          </button>
        `;
      }
    }).join(' ');

    const rowBg = info.isFull ? 'hover:bg-rose-950/10' : 'hover:bg-slate-800/40';

    // Fila para Desktop
    rowsHtml += `
      <tr class="border-b border-slate-800/80 ${rowBg} transition">
        
        <!-- 1. Servicio / ID -->
        <td class="p-3.5 pl-4 whitespace-nowrap">
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${platConf.badgeColor || 'bg-indigo-600/30 text-indigo-300'}">
              ${escapeHtml(norm)}
            </span>
            <span class="font-mono font-bold text-slate-400">#${escapeHtml(acc.id)}</span>
          </div>
        </td>

        <!-- 2. Correo Electrónico (SOLO EL CORREO, SIN CLAVE) -->
        <td class="p-3.5 font-mono text-xs">
          <div class="flex items-center gap-1.5 max-w-[240px]">
            <i data-lucide="mail" class="w-3.5 h-3.5 text-sky-400 shrink-0"></i>
            <span class="text-slate-200 font-semibold truncate select-all" title="${escapeHtml(acc.correo || 'Sin correo')}">
              ${escapeHtml(acc.correo || 'Sin correo registrado')}
            </span>
            ${acc.correo ? `
              <button onclick="copyToClipboard('${escapeHtml(acc.correo)}', 'Correo')" class="text-slate-400 hover:text-white p-1 hover:bg-slate-800 rounded transition shrink-0" title="Copiar correo">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              </button>
            ` : ''}
            <button onclick="openEditCorreoModal('${accKey}')" class="text-slate-400 hover:text-indigo-400 p-1 hover:bg-slate-800 rounded transition shrink-0" title="Editar correo y cuenta">
              <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </td>

        <!-- 3. Estado (FULL vs X Disponibles) -->
        <td class="p-3.5 text-center whitespace-nowrap">
          ${statusBadge}
        </td>

        <!-- 4. Capacidad & Ocupación -->
        <td class="p-3.5 whitespace-nowrap">
          <div class="flex items-center justify-between gap-3 text-xs mb-1">
            <span class="font-bold ${info.isFull ? 'text-rose-400' : 'text-emerald-400'}">
              ${info.occupiedCount} de ${info.capacity} ocupados
            </span>
            <span class="text-[10px] text-slate-400 font-mono">${pctOcupado}%</span>
          </div>
          <div class="w-28 bg-slate-950 rounded-full h-1.5 overflow-hidden border border-slate-800">
            <div class="h-full rounded-full transition-all duration-300 ${info.isFull ? 'bg-rose-500' : (info.availableCount === 1 ? 'bg-amber-400' : 'bg-emerald-500')}" style="width: ${pctOcupado}%"></div>
          </div>
        </td>

        <!-- 5. Perfiles / Clientes & Pantallas Libres -->
        <td class="p-3.5">
          <div class="flex flex-wrap items-center gap-1.5 max-w-md">
            ${perfilesHtml}
          </div>
        </td>

        <!-- 6. Renovación con Proveedor (FECHA Y ESTADO EXACTO) -->
        <td class="p-3.5 whitespace-nowrap">
          <div class="flex items-center gap-2.5">
            <div>
              <div class="font-mono font-bold text-slate-100 text-xs flex items-center gap-1.5">
                <i data-lucide="calendar" class="w-3.5 h-3.5 text-slate-400"></i>
                <span>${escapeHtml(formatDisplayDate(acc.fechaCorte))}</span>
              </div>
              <div class="mt-1">
                <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${dateInfo.badgeClass}">
                  ${dateInfo.label}
                </span>
              </div>
            </div>
            <button onclick="openRenewModal('${accKey}')" class="px-2.5 py-1.5 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-300 hover:text-white border border-emerald-500/30 hover:border-transparent rounded-xl text-xs font-bold transition flex items-center gap-1 shadow-sm active:scale-95 shrink-0" title="Renovar suscripción con el proveedor">
              <i data-lucide="refresh-cw" class="w-3.5 h-3.5"></i>
              <span>Renovar</span>
            </button>
          </div>
        </td>

        <!-- 7. Acciones Rápidas (Opción de Edición Directa) -->
        <td class="p-3.5 text-right pr-4 whitespace-nowrap">
          <div class="flex items-center justify-end gap-1.5">
            <button onclick="openEditCorreoModal('${accKey}')" class="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-md shadow-indigo-600/30 active:scale-95" title="Editar correo, fecha proveedor y perfiles">
              <i data-lucide="edit-3" class="w-3.5 h-3.5"></i>
              <span>Editar</span>
            </button>
            <button onclick="confirmDeleteAccount('${accKey}')" class="p-1.5 bg-slate-800 hover:bg-rose-900/40 text-slate-400 hover:text-rose-400 rounded-xl transition" title="Eliminar cuenta">
              <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </td>

      </tr>
    `;

    // Tarjeta adaptada para Teléfonos Móviles
    mobileCardsHtml += `
      <div class="bg-slate-900/90 border ${info.isFull ? 'border-rose-950/80 shadow-rose-950/20' : 'border-slate-800/80 shadow-slate-950/40'} rounded-2xl p-4 space-y-3 shadow-lg transition">
        <!-- Encabezado Tarjeta Móvil -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-1 rounded-lg text-xs font-bold ${platConf.badgeColor || 'bg-indigo-600/30 text-indigo-300'}">
              ${escapeHtml(norm)}
            </span>
            <span class="font-mono text-xs font-bold text-slate-400">#${escapeHtml(acc.id)}</span>
          </div>
          ${statusBadge}
        </div>

        <!-- Correo Electrónico (Grande y fácil de copiar en móvil) -->
        <div class="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex items-center justify-between gap-2">
          <div class="flex items-center gap-2 min-w-0 flex-1">
            <i data-lucide="mail" class="w-4 h-4 text-sky-400 shrink-0"></i>
            <span class="text-xs text-slate-200 font-semibold font-mono truncate select-all" title="${escapeHtml(acc.correo || '')}">
              ${escapeHtml(acc.correo || 'Sin correo registrado')}
            </span>
          </div>
          <div class="flex items-center gap-1 shrink-0">
            ${acc.correo ? `
              <button onclick="copyToClipboard('${escapeHtml(acc.correo)}', 'Correo')" class="p-2 bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-slate-300 rounded-lg text-xs active:scale-95" title="Copiar correo">
                <i data-lucide="copy" class="w-3.5 h-3.5"></i>
              </button>
            ` : ''}
            <button onclick="openEditCorreoModal('${accKey}')" class="p-2 bg-slate-800 hover:bg-indigo-600 active:bg-indigo-700 text-indigo-400 hover:text-white rounded-lg text-xs active:scale-95" title="Editar">
              <i data-lucide="edit-2" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </div>

        <!-- Fecha Renovación Proveedor -->
        <div class="p-2.5 bg-slate-950/60 rounded-xl border border-slate-800/60 flex items-center justify-between text-xs">
          <div>
            <span class="text-[10px] text-slate-400 uppercase font-semibold block">Renovación Proveedor:</span>
            <span class="font-mono font-bold text-slate-200 text-xs">${escapeHtml(formatDisplayDate(acc.fechaCorte))}</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 rounded-md text-[10px] font-bold ${dateInfo.badgeClass}">
              ${dateInfo.label}
            </span>
            <button onclick="openRenewModal('${accKey}')" class="px-2.5 py-1.5 bg-emerald-600/30 hover:bg-emerald-600 active:bg-emerald-700 text-emerald-300 hover:text-white border border-emerald-500/40 rounded-lg text-xs font-bold transition flex items-center gap-1 active:scale-95">
              <i data-lucide="refresh-cw" class="w-3 h-3"></i>
              <span>Renovar</span>
            </button>
          </div>
        </div>

        <!-- Capacidad y Barra de Ocupación -->
        <div>
          <div class="flex items-center justify-between text-xs mb-1">
            <span class="text-slate-400 font-medium">Ocupación:</span>
            <span class="font-bold ${info.isFull ? 'text-rose-400' : 'text-emerald-400'}">
              ${info.occupiedCount} de ${info.capacity} perfiles (${pctOcupado}%)
            </span>
          </div>
          <div class="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
            <div class="${info.isFull ? 'bg-rose-500' : (info.availableCount === 1 ? 'bg-amber-400' : 'bg-emerald-500')} h-2 rounded-full transition-all duration-300" style="width: ${pctOcupado}%"></div>
          </div>
        </div>

        <!-- Perfiles y Clientes Asignados -->
        <div class="pt-2 border-t border-slate-800/60">
          <span class="text-[10px] text-slate-400 uppercase font-semibold block mb-1.5">Perfiles / Pantallas:</span>
          <div class="flex flex-wrap gap-1.5">
            ${perfilesHtml}
          </div>
        </div>

        <!-- Botones de Acción Móvil -->
        <div class="grid grid-cols-5 gap-2 pt-1">
          <button onclick="openEditCorreoModal('${accKey}')" class="col-span-4 py-2.5 bg-indigo-600/20 hover:bg-indigo-600 active:bg-indigo-700 text-indigo-300 hover:text-white border border-indigo-500/30 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 active:scale-95">
            <i data-lucide="edit-3" class="w-4 h-4"></i>
            <span>Editar Correo y Perfiles</span>
          </button>
          <button onclick="confirmDeleteAccount('${accKey}')" class="col-span-1 py-2.5 bg-slate-800 hover:bg-rose-900/50 active:bg-rose-900 text-slate-400 hover:text-rose-300 rounded-xl transition flex items-center justify-center border border-slate-700/60 active:scale-95" title="Eliminar">
            <i data-lucide="trash-2" class="w-4 h-4"></i>
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <!-- Vista Tabla para Computadoras y Tablets -->
    <div class="hidden md:block bg-slate-900/95 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="bg-slate-950/90 text-slate-400 font-bold border-b border-slate-800 uppercase tracking-wider text-[11px]">
              <th class="p-3.5 pl-4">Servicio / ID</th>
              <th class="p-3.5">Correo Electrónico (Solo Correo)</th>
              <th class="p-3.5 text-center">Estado</th>
              <th class="p-3.5">Capacidad & Ocupación</th>
              <th class="p-3.5">Perfiles / Clientes & Libres</th>
              <th class="p-3.5">Renovación con Proveedor</th>
              <th class="p-3.5 text-right pr-4">Acciones</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/80">
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Vista Tarjetas Cómodas para Teléfonos Móviles -->
    <div class="md:hidden flex flex-col gap-3">
      ${mobileCardsHtml}
    </div>
  `;
  lucide.createIcons();
}

// ==========================================
// EDICIÓN DE CORREO, FECHA PROVEEDOR Y PERFILES
// ==========================================

function openEditCorreoModal(accId) {
  const acc = findAccountByIdOrUid(accId);
  if (!acc) return;

  ensureAccountProfileSlots(acc);

  document.getElementById('edit-correo-acc-id').value = acc._uid || acc.id;
  document.getElementById('edit-correo-modal-title').textContent = 'Editar Cuenta: ' + acc.id;
  document.getElementById('edit-correo-modal-subtitle').textContent = 'Plataforma: ' + acc.plataforma;
  document.getElementById('edit-correo-plat').value = acc.plataforma;
  document.getElementById('edit-correo-id').value = acc.id;
  document.getElementById('edit-correo-email').value = acc.correo || '';

  const expiry = parseDMY(acc.fechaCorte) || new Date();
  document.getElementById('edit-correo-expiry').value = formatYMD(expiry);

  const cap = acc.capacidad || getAccountCapacity(acc);
  document.getElementById('edit-correo-capacidad').value = cap;

  renderEditCorreoPerfiles(acc);
  openModal('edit-correo-modal');
}

function renderEditCorreoPerfiles(acc) {
  const container = document.getElementById('edit-correo-perfiles-container');
  if (!container) return;

  const capInput = document.getElementById('edit-correo-capacidad');
  const cap = parseInt(capInput ? capInput.value : 5, 10) || acc.capacidad || 5;

  let html = '';
  for (let i = 1; i <= cap; i++) {
    const p = (acc.perfiles || []).find(x => x.num === i) || { num: i, cliente: '', telefono: '', pin: '', fechaCorte: '' };
    const isOccupied = Boolean((p.cliente && p.cliente.trim() !== '') || (p.raw && p.raw.trim() !== ''));
    const clientName = p.cliente || p.raw || '';
    
    // Si tiene cliente, mostrar su fecha individual de cliente. Si no tiene cliente, dejar la fecha vacía (NO copiar fecha de proveedor)
    let pCorteYMD = '';
    if (isOccupied) {
      if (p.fechaCorte) {
        const d = parseDMY(p.fechaCorte);
        pCorteYMD = d ? formatYMD(d) : '';
      } else {
        // Por defecto 30 días para un cliente nuevo
        pCorteYMD = formatYMD(addDaysToDate(new Date(), 30));
      }
    }

    html += `
      <div class="flex items-center gap-2 bg-slate-950/80 border ${isOccupied ? 'border-slate-800' : 'border-dashed border-slate-800'} rounded-xl p-2.5 transition flex-wrap sm:flex-nowrap">
        <span class="w-8 h-8 rounded-lg ${isOccupied ? 'bg-indigo-600/20 text-indigo-400' : 'bg-slate-800 text-slate-500'} font-mono font-bold flex items-center justify-center shrink-0 text-xs">
          #${i}
        </span>
        <div class="flex-1 min-w-[130px]">
          <input type="text" id="edit-slot-cliente-${i}" value="${escapeHtml(clientName)}" oninput="onEditSlotClienteChange(${i})" placeholder="Nombre del cliente (o dejar libre...)" class="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-lg px-2.5 py-1.5 text-slate-100 text-xs outline-none">
        </div>
        <div class="w-28 sm:w-32">
          <input type="text" id="edit-slot-tel-${i}" value="${escapeHtml(p.telefono || '')}" placeholder="Teléfono..." class="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-lg px-2.5 py-1.5 text-slate-100 text-xs outline-none font-mono">
        </div>
        <div class="w-32 sm:w-36">
          <input type="date" id="edit-slot-corte-${i}" value="${pCorteYMD}" class="w-full bg-slate-900 border border-slate-800 focus:border-indigo-500 rounded-lg px-2 py-1.5 text-slate-100 text-xs outline-none font-mono" title="Fecha de Vencimiento de este Cliente">
        </div>
        <button type="button" onclick="clearEditSlot(${i})" class="p-1.5 hover:bg-slate-800 text-slate-500 hover:text-rose-400 rounded-lg transition shrink-0" title="Dejar este perfil libre">
          <i data-lucide="user-x" class="w-4 h-4"></i>
        </button>
      </div>
    `;
  }

  container.innerHTML = html;
  lucide.createIcons();
}

function onEditSlotClienteChange(slotNum) {
  const nameEl = document.getElementById('edit-slot-cliente-' + slotNum);
  const corteEl = document.getElementById('edit-slot-corte-' + slotNum);
  if (!nameEl || !corteEl) return;
  const name = nameEl.value.trim();
  if (name && !corteEl.value) {
    // Si se escribe un cliente y la fecha estaba vacía, pre-llenar con 30 días a partir de hoy
    corteEl.value = formatYMD(addDaysToDate(new Date(), 30));
  } else if (!name) {
    corteEl.value = '';
  }
}

function clearEditSlot(slotNum) {
  const cli = document.getElementById('edit-slot-cliente-' + slotNum);
  const tel = document.getElementById('edit-slot-tel-' + slotNum);
  const corte = document.getElementById('edit-slot-corte-' + slotNum);
  if (cli) cli.value = '';
  if (tel) tel.value = '';
  if (corte) corte.value = '';
}

function onEditCorreoCapacidadChange(newVal) {
  const cap = parseInt(newVal, 10);
  if (isNaN(cap) || cap < 1 || cap > 10) return;
  const accId = document.getElementById('edit-correo-acc-id').value;
  const acc = findAccountByIdOrUid(accId);
  if (!acc) return;

  const currentSlots = [];
  for (let i = 1; i <= 10; i++) {
    const cliEl = document.getElementById('edit-slot-cliente-' + i);
    const telEl = document.getElementById('edit-slot-tel-' + i);
    const corteEl = document.getElementById('edit-slot-corte-' + i);
    if (cliEl) {
      let formattedCorte = '';
      if (corteEl && corteEl.value) {
        const parts = corteEl.value.split('-');
        formattedCorte = parts[2] + '/' + parts[1] + '/' + parts[0];
      }
      currentSlots.push({
        num: i,
        cliente: cliEl.value.trim(),
        telefono: telEl ? telEl.value.trim() : '',
        fechaCorte: formattedCorte
      });
    }
  }

  const tempAcc = {
    ...acc,
    capacidad: cap,
    perfiles: []
  };
  for (let i = 1; i <= cap; i++) {
    const cur = currentSlots.find(s => s.num === i);
    const orig = (acc.perfiles || []).find(p => p.num === i);
    const cliente = cur ? cur.cliente : (orig ? orig.cliente : '');
    const telefono = cur ? cur.telefono : (orig ? orig.telefono : '');
    const fechaCorte = (cur && cur.fechaCorte) ? cur.fechaCorte : (orig ? orig.fechaCorte : '');
    tempAcc.perfiles.push({
      num: i,
      cliente: cliente,
      telefono: telefono,
      fechaCorte: fechaCorte,
      raw: cliente
    });
  }
  renderEditCorreoPerfiles(tempAcc);
}

function saveEditCorreoForm(e) {
  e.preventDefault();
  const accId = document.getElementById('edit-correo-acc-id').value;
  const acc = findAccountByIdOrUid(accId);
  if (!acc) return;

  const newEmail = document.getElementById('edit-correo-email').value.trim();
  const newExpiryYMD = document.getElementById('edit-correo-expiry').value;
  const newCap = parseInt(document.getElementById('edit-correo-capacidad').value, 10) || acc.capacidad || 5;

  if (!newExpiryYMD) {
    showToast('La fecha de renovación con el proveedor es obligatoria', 'warning');
    return;
  }

  const expParts = newExpiryYMD.split('-');
  const formattedProviderExpiry = expParts[2] + '/' + expParts[1] + '/' + expParts[0];

  const perfiles = [];
  for (let i = 1; i <= newCap; i++) {
    const cliEl = document.getElementById('edit-slot-cliente-' + i);
    const telEl = document.getElementById('edit-slot-tel-' + i);
    const corteEl = document.getElementById('edit-slot-corte-' + i);
    const cliente = cliEl ? cliEl.value.trim() : '';
    const telefono = telEl ? telEl.value.trim() : '';
    const corteVal = corteEl ? corteEl.value : '';

    const existingP = (acc.perfiles || []).find(x => x.num === i);

    if (cliente) {
      let formattedClientCorte = '';
      if (corteVal) {
        const parts = corteVal.split('-');
        formattedClientCorte = parts[2] + '/' + parts[1] + '/' + parts[0];
      } else if (existingP && existingP.fechaCorte) {
        formattedClientCorte = existingP.fechaCorte;
      } else {
        formattedClientCorte = formatDMY(addDaysToDate(new Date(), 30));
      }

      const clientEntrega = (existingP && existingP.fechaEntrega) ? existingP.fechaEntrega : formatDMY(new Date());
      const clientDias = (existingP && existingP.dias) ? existingP.dias : 30;

      perfiles.push({
        num: i,
        cliente: cliente,
        telefono: telefono,
        pin: existingP ? (existingP.pin || '') : '',
        fechaEntrega: clientEntrega,
        dias: clientDias,
        fechaCorte: formattedClientCorte,
        raw: telefono ? (cliente + ' - ' + telefono) : cliente
      });
    } else {
      // Perfil libre: sin fecha de cliente
      perfiles.push({
        num: i,
        cliente: '',
        telefono: '',
        pin: '',
        fechaEntrega: '',
        dias: 30,
        fechaCorte: '',
        raw: ''
      });
    }
  }

  acc.correo = newEmail;
  acc.fechaCorte = formattedProviderExpiry; // Solo guarda la fecha del proveedor en la cuenta
  acc.capacidad = newCap;
  acc.numPerfiles = newCap;
  acc.perfiles = perfiles;

  if (perfiles[0] && perfiles[0].cliente) {
    acc.dueno = perfiles[0].cliente + (perfiles[0].telefono ? (' - ' + perfiles[0].telefono) : '');
  }

  saveAccounts();

  closeModal('edit-correo-modal');
  showToast('¡Cuenta ' + acc.id + ' actualizada con éxito!', 'success');
  renderAll();
}


function openWhatsAppModal(accId, perfilIdentifier) {
  const acc = findAccountByIdOrUid(accId);
  if (!acc) return;
  
  let clienteNombre = '';
  let clienteTelefono = '';
  let perfilLabel = '';
  
  if (perfilIdentifier === 'dueno') {
    const parts = (acc.dueno || '').split('-');
    clienteNombre = parts[0]?.trim() || (acc.perfiles?.[0]?.cliente) || 'Cliente';
    clienteTelefono = parts[1]?.trim() || (acc.perfiles?.[0]?.telefono) || '';
    perfilLabel = acc.plataforma.includes('Personal') ? 'Perfil Personal' : 'Cuenta Completa';
  } else {
    const p = (acc.perfiles || []).find(x => x.num === perfilIdentifier);
    if (p) {
      clienteNombre = p.cliente || p.raw || 'Cliente';
      clienteTelefono = p.telefono || '';
      perfilLabel = `Perfil #${p.num}`;
    }
  }
  
  let fechaCorteCliente = acc.fechaCorte || 'Sin fecha';
  if (perfilIdentifier !== 'dueno') {
    const p = (acc.perfiles || []).find(x => x.num === perfilIdentifier);
    if (p && p.fechaCorte) fechaCorteCliente = p.fechaCorte;
  }
  
  const cleanPhone = sanitizePhone(clienteTelefono);
  state.whatsappData = {
    acc,
    clienteNombre,
    clienteTelefono,
    cleanPhone,
    perfilLabel,
    fechaCorteCliente
  };
  
  document.getElementById('wa-client-name').value = clienteNombre;
  document.getElementById('wa-client-phone').value = cleanPhone;
  document.getElementById('wa-service-name').textContent = `${acc.plataforma} (${perfilLabel})`;
  document.getElementById('wa-expiry-date').textContent = formatDisplayDate(fechaCorteCliente);
  
  const dateInfo = getDaysUntil(fechaCorteCliente);
  let templateType = 'aviso';
  if (dateInfo.status === 'vencidos') templateType = 'vencido';
  else if (dateInfo.status === 'hoy') templateType = 'hoy';
  
  document.getElementById('wa-template-select').value = templateType;
  updateWhatsAppMessageText(templateType);
  
  openModal('whatsapp-modal');
}

function updateWhatsAppMessageText(type) {
  if (!state.whatsappData) return;
  const { acc, clienteNombre, perfilLabel } = state.whatsappData;
  const name = document.getElementById('wa-client-name').value || clienteNombre || 'Estimado cliente';
  const corte = formatDisplayDate((state.whatsappData && state.whatsappData.fechaCorteCliente) || acc.fechaCorte || 'pronto');
  const price = getDefaultPrice(acc.plataforma, acc.dias || 30);
  
  let msg = '';
  switch(type) {
    case 'aviso':
      msg = `Hola *${name}*, un saludo cordial de *GoldenPro* 🍿📺\n\nTe recordamos que tu pantalla de *${acc.plataforma}* (${perfilLabel}) vencerá el día *${corte}*.\n\n💰 *Costo de renovación:* $${price.toFixed(2)}\n\n¿Deseas renovar tu servicio para continuar activo y sin interrupciones? Quedamos a tu orden para procesar tu pago. ¡Muchas gracias! 🙏`;
      break;
    case 'hoy':
      msg = `Hola *${name}*, buen día de parte de *GoldenPro* ⏰⚡\n\nTe informamos que tu suscripción de *${acc.plataforma}* (${perfilLabel}) vence *HOY ${corte}*.\n\n💰 *Monto de renovación:* $${price.toFixed(2)}\n\nPor favor indícanos si realizas la renovación para mantener tu perfil activo y asegurar tu programación. ¡Feliz día! ✨`;
      break;
    case 'vencido':
      msg = `Hola *${name}*, te saludamos de *GoldenPro* ⚠️\n\nTe notificamos que tu pantalla de *${acc.plataforma}* (${perfilLabel}) ha *VENCIDO*.\n\nSi deseas reactivarla de inmediato por *$${price.toFixed(2)}*, contáctanos para enviarte los datos de pago y renovar tu mes. ¡Saludos! 🙌`;
      break;
    case 'datos':
      msg = `Hola *${name}*, ¡aquí tienes los datos de tu cuenta de *${acc.plataforma}*! 🎬✨\n\n📧 *Correo:* ${acc.correo}\n🔑 *Clave:* ${acc.clave}\n👤 *Perfil asignado:* ${perfilLabel}\n📅 *Vence el:* ${corte}\n💰 *Tarifa mensual:* $${price.toFixed(2)}\n\n⚠️ *Reglas:* No modificar contraseña ni perfiles ajenos.\n¡Disfruta tu entretenimiento con GoldenPro! 🍿`;
      break;
    default:
      msg = `Hola *${name}*, te escribimos de GoldenPro respecto a tu cuenta de ${acc.plataforma}. Tarifa: $${price.toFixed(2)}`;
  }
  
  document.getElementById('wa-message-preview').value = msg;
}

function sendWhatsAppMessage() {
  const phone = document.getElementById('wa-client-phone').value.trim();
  const text = document.getElementById('wa-message-preview').value.trim();
  
  if (!phone) {
    showToast('Por favor introduce un número de teléfono válido', 'warning');
    return;
  }
  
  const encodedText = encodeURIComponent(text);
  const waUrl = `https://wa.me/${phone}?text=${encodedText}`;
  window.open(waUrl, '_blank');
  closeModal('whatsapp-modal');
  showToast('Abriendo WhatsApp...', 'success');
}

function openRenewModal(accId) {
  const acc = findAccountByIdOrUid(accId);
  if (!acc) return;
  
  state.selectedAccount = acc;
  state.selectedProfileNum = null;
  
  const currCorte = parseDMY(acc.fechaCorte) || new Date();
  const today = new Date();
  today.setHours(0,0,0,0);
  
  const baseDate = (currCorte < today) ? today : currCorte;
  const newCorte = addDaysToDate(baseDate, 30);
  
  // Obtener precio y costo configurados exactamente en el tarifario
  const pricing = getCatalogPriceAndInvestment(acc.plataforma, 30, acc);
  
  document.getElementById('renew-acc-id').textContent = `${acc.plataforma} (${acc.id})`;
  document.getElementById('renew-current-corte').textContent = formatDisplayDate(acc.fechaCorte);
  document.getElementById('renew-days').value = '30';
  document.getElementById('renew-new-corte').value = formatYMD(newCorte);
  document.getElementById('renew-sale-price').value = pricing.price.toFixed(2);
  document.getElementById('renew-investment').value = pricing.inv.toFixed(2);
  document.getElementById('renew-log-sale').checked = true;
  
  updateRenewProfitPreview();
  openModal('renew-modal');
}

function recalculateRenewDate() {
  if (!state.selectedAccount) return;
  const acc = state.selectedAccount;
  const days = parseInt(document.getElementById('renew-days').value, 10) || 30;
  const currCorte = parseDMY(acc.fechaCorte) || new Date();
  const today = new Date();
  today.setHours(0,0,0,0);
  
  const baseDate = (currCorte < today) ? today : currCorte;
  const newCorte = addDaysToDate(baseDate, days);
  document.getElementById('renew-new-corte').value = formatYMD(newCorte);
  
  // Actualizar precio y costo de inversión guardados del tarifario para la duración
  const pricing = getCatalogPriceAndInvestment(acc.plataforma, days, acc);
  document.getElementById('renew-sale-price').value = pricing.price.toFixed(2);
  document.getElementById('renew-investment').value = pricing.inv.toFixed(2);
  updateRenewProfitPreview();
}

function updateRenewProfitPreview() {
  const price = parseFloat(document.getElementById('renew-sale-price')?.value) || 0;
  const inv = parseFloat(document.getElementById('renew-investment')?.value) || 0;
  const profit = price - inv;
  const badge = document.getElementById('renew-profit-badge');
  if (badge) {
    badge.textContent = `Ganancia: ${profit >= 0 ? '+' : ''}$${profit.toFixed(2)}`;
    badge.className = `text-[11px] font-mono font-bold ${profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`;
  }
}

function confirmRenewal() {
  if (!state.selectedAccount) return;
  const acc = state.selectedAccount;
  const newDateVal = document.getElementById('renew-new-corte').value;
  const days = parseInt(document.getElementById('renew-days').value, 10) || 30;
  
  if (!newDateVal) {
    showToast('Selecciona una fecha válida', 'warning');
    return;
  }
  
  const parts = newDateVal.split('-');
  const formattedCorte = `${parts[2]}/${parts[1]}/${parts[0]}`;
  const todayFormatted = formatDMY(new Date());

  if (state.selectedProfileNum) {
    ensureAccountProfileSlots(acc);
    const p = (acc.perfiles || []).find(x => x.num === state.selectedProfileNum);
    if (p) {
      p.fechaEntrega = todayFormatted;
      p.dias = days;
      p.fechaCorte = formattedCorte;
    }
    saveAccounts();

    const logSale = document.getElementById('renew-log-sale').checked;
    if (logSale) {
      const salePrice = parseFloat(document.getElementById('renew-sale-price').value) || 0;
      const invPrice = parseFloat(document.getElementById('renew-investment').value) || 0;
      const profit = salePrice - invPrice;

      state.sales.push({
        id: 'V_' + Date.now(),
        fecha: todayFormatted,
        cuentaId: acc.id,
        plataforma: acc.plataforma,
        perfil: `Perfil #${state.selectedProfileNum}`,
        cliente: p ? (p.cliente || p.raw) : '',
        tipo: 'PERFIL',
        valorUnitario: salePrice,
        cantidad: 1,
        totalVenta: salePrice,
        inversion: invPrice,
        totalGanancia: profit,
        nota: `Renovación Perfil #${state.selectedProfileNum} (${p ? (p.cliente || '') : ''}) +${days} días`
      });
      saveSales();
    }

    closeModal('renew-modal');
    showToast(`¡Perfil #${state.selectedProfileNum} (${p ? (p.cliente || '') : ''}) renovado hasta ${formattedCorte}!`, 'success');
    state.selectedProfileNum = null;
    renderAll();
    return;
  }
  
  acc.fechaEntrega = todayFormatted;
  acc.dias = days;
  acc.fechaCorte = formattedCorte;
  saveAccounts();
  
  const logSale = document.getElementById('renew-log-sale').checked;
  if (logSale) {
    const salePrice = parseFloat(document.getElementById('renew-sale-price').value) || 0;
    const invPrice = parseFloat(document.getElementById('renew-investment').value) || 0;
    const profit = salePrice - invPrice;
    
    state.sales.push({
      id: 'V_' + Date.now(),
      fecha: todayFormatted,
      cuentaId: acc.id,
      plataforma: acc.plataforma,
      tipo: acc.tipo || 'PERFIL',
      valorUnitario: salePrice,
      cantidad: 1,
      totalVenta: salePrice,
      inversion: invPrice,
      totalGanancia: profit,
      nota: `Renovación ${acc.id} +${days} días`
    });
    saveSales();
  }
  
  closeModal('renew-modal');
  showToast(`¡Cuenta ${acc.id} renovada exitosamente hasta el ${formattedCorte}!`, 'success');
  renderAll();
}

function openAddAccountModal(presetPlatform) {
  document.getElementById('account-modal-title').textContent = 'Agregar Nueva Cuenta';
  document.getElementById('acc-edit-id-orig').value = '';
  
  const plat = presetPlatform || 'Netflix (Personal)';
  document.getElementById('acc-plat-select').value = plat;
  onPlatformSelectChange(plat);
  
  document.getElementById('acc-email-input').value = '';
  document.getElementById('acc-emailpwd-input').value = '';
  document.getElementById('acc-pwd-input').value = '';
  document.getElementById('acc-owner-input').value = '';
  
  const today = new Date();
  document.getElementById('acc-delivery-date').value = formatYMD(today);
  document.getElementById('acc-days-input').value = '30';
  document.getElementById('acc-expiry-date').value = formatYMD(addDaysToDate(today, 30));
  
  openModal('account-modal');
}

function onPlatformSelectChange(platName) {
  const norm = normalizePlatformName(platName);
  const conf = PLATFORMS_CONFIG.find(p => p.name === norm);
  document.getElementById('acc-id-input').value = generateNextId(norm);
  
  const typeSelect = document.getElementById('acc-type-select');
  const profCountInput = document.getElementById('acc-profiles-count');

  if (conf && conf.isPersonal) {
    if (typeSelect) typeSelect.value = 'CUENTA';
    if (profCountInput) profCountInput.value = '1';
    document.getElementById('acc-price-badge').textContent = `$${conf.defaultPrice.toFixed(2)}`;
  } else {
    if (norm.includes('Netflix')) {
      if (typeSelect) typeSelect.value = 'PERFIL';
      if (profCountInput) profCountInput.value = '5'; // Netflix: 5 perfiles estándar
    } else if (norm.includes('Disney') || norm.includes('Max') || norm.includes('Star') || norm.includes('Viki') || norm.includes('iQIYI')) {
      if (typeSelect) typeSelect.value = 'PERFIL';
      if (profCountInput) profCountInput.value = '4'; // 4 perfiles
    } else if (norm.includes('Prime')) {
      if (typeSelect) typeSelect.value = 'PERFIL';
      if (profCountInput) profCountInput.value = '3'; // 3 pantallas
    } else {
      if (typeSelect) typeSelect.value = 'PERFIL';
      if (profCountInput && (!profCountInput.value || profCountInput.value === '1')) profCountInput.value = '1';
    }
    if (conf) {
      document.getElementById('acc-price-badge').textContent = `$${conf.defaultPrice.toFixed(2)}`;
    }
  }
}

function openEditAccountModal(accId) {
  const acc = findAccountByIdOrUid(accId);
  if (!acc) return;
  
  const norm = normalizePlatformName(acc.plataforma);
  document.getElementById('account-modal-title').textContent = `Editar Cuenta: ${acc.id}`;
  document.getElementById('acc-edit-id-orig').value = acc._uid || acc.id;
  document.getElementById('acc-plat-select').value = norm;
  document.getElementById('acc-id-input').value = acc.id;
  document.getElementById('acc-email-input').value = acc.correo || '';
  document.getElementById('acc-emailpwd-input').value = acc.claveCorreo || '';
  document.getElementById('acc-pwd-input').value = acc.clave || '';
  document.getElementById('acc-type-select').value = acc.tipo || 'PERFIL';
  document.getElementById('acc-owner-input').value = acc.dueno || '';
  document.getElementById('acc-profiles-count').value = (acc.perfiles?.length || acc.numPerfiles || 5);
  
  const deliv = parseDMY(acc.fechaEntrega) || new Date();
  const expiry = parseDMY(acc.fechaCorte) || addDaysToDate(deliv, 30);
  
  document.getElementById('acc-delivery-date').value = formatYMD(deliv);
  document.getElementById('acc-days-input').value = acc.dias || 30;
  document.getElementById('acc-expiry-date').value = formatYMD(expiry);
  
  const conf = PLATFORMS_CONFIG.find(p => p.name === norm);
  if (conf) {
    document.getElementById('acc-price-badge').textContent = `$${conf.defaultPrice.toFixed(2)}`;
  }
  
  openModal('account-modal');
}

function saveAccountForm(e) {
  e.preventDefault();
  const origId = document.getElementById('acc-edit-id-orig').value;
  const plat = normalizePlatformName(document.getElementById('acc-plat-select').value);
  const id = document.getElementById('acc-id-input').value.trim();
  const email = document.getElementById('acc-email-input').value.trim();
  const emailPwd = document.getElementById('acc-emailpwd-input').value.trim();
  const pwd = document.getElementById('acc-pwd-input').value.trim();
  const type = document.getElementById('acc-type-select').value;
  const owner = document.getElementById('acc-owner-input').value.trim();
  const profCount = parseInt(document.getElementById('acc-profiles-count').value, 10) || 1;
  const delivYMD = document.getElementById('acc-delivery-date').value;
  const days = parseInt(document.getElementById('acc-days-input').value, 10) || 30;
  const expiryYMD = document.getElementById('acc-expiry-date').value;
  
  if (!id) {
    showToast('El ID de cuenta es obligatorio', 'warning');
    return;
  }
  
  const delivParts = delivYMD.split('-');
  const formattedDeliv = `${delivParts[2]}/${delivParts[1]}/${delivParts[0]}`;
  const expParts = expiryYMD.split('-');
  const formattedExpiry = `${expParts[2]}/${expParts[1]}/${expParts[0]}`;
  
  if (origId) {
    const existing = findAccountByIdOrUid(origId); const idx = existing ? state.accounts.indexOf(existing) : -1;
    if (idx !== -1) {
      const existing = state.accounts[idx];
      existing.id = id;
      existing.plataforma = plat;
      existing.correo = email;
      existing.claveCorreo = emailPwd;
      existing.clave = pwd;
      existing.tipo = type;
      existing.dueno = owner;
      existing.numPerfiles = profCount;
      existing.capacidad = profCount;
      existing.fechaEntrega = formattedDeliv;
      existing.dias = days;
      existing.fechaCorte = formattedExpiry;
      ensureAccountProfileSlots(existing);
    }
    showToast('Cuenta actualizada exitosamente', 'success');
  } else {
    if (state.accounts.some(a => a.id === id)) {
      showToast('Ya existe una cuenta con este ID', 'error');
      return;
    }
    
    const perfiles = [];
    for (let i = 1; i <= profCount; i++) {
      perfiles.push({ num: i, cliente: (i === 1 && owner ? owner : ''), telefono: '', raw: (i === 1 && owner ? owner : '') });
    }
    
    const newAcc = {
      id,
      plataforma: plat,
      correo: email,
      claveCorreo: emailPwd,
      clave: pwd,
      tipo: type,
      dueno: owner,
      perfiles,
      numPerfiles: profCount,
      capacidad: profCount,
      fechaEntrega: formattedDeliv,
      dias: days,
      fechaCorte: formattedExpiry
    };
    ensureAccountProfileSlots(newAcc);
    state.accounts.unshift(newAcc);
    showToast(`Nueva cuenta ${plat} agregada`, 'success');
  }
  
  saveAccounts();
  closeModal('account-modal');
  renderAll();
}

function autoComputeExpiryInForm() {
  const delivVal = document.getElementById('acc-delivery-date').value;
  const days = parseInt(document.getElementById('acc-days-input').value, 10) || 30;
  if (!delivVal) return;
  const deliv = new Date(delivVal + 'T00:00:00');
  const exp = addDaysToDate(deliv, days);
  document.getElementById('acc-expiry-date').value = formatYMD(exp);
}

function generateNextId(platformName) {
  const norm = normalizePlatformName(platformName);
  const conf = PLATFORMS_CONFIG.find(p => p.name === norm);
  const prefix = conf?.prefix || 'ACC';
  let maxNum = 0;
  state.accounts.forEach(a => {
    if (a.id && a.id.startsWith(prefix)) {
      const num = parseInt(a.id.replace(prefix, ''), 10);
      if (!isNaN(num) && num > maxNum) maxNum = num;
    }
  });
  return `${prefix}${maxNum + 1}`;
}

function openAssignProfileModal(accId, perfilNum) {
  const acc = findAccountByIdOrUid(accId);
  if (!acc) return;
  
  document.getElementById('assign-acc-id').value = acc._uid || acc.id;
  document.getElementById('assign-profile-num').value = perfilNum;
  document.getElementById('assign-target-info').textContent = `${acc.plataforma} (${acc.id}) - Perfil #${perfilNum}`;
  document.getElementById('assign-client-name').value = '';
  document.getElementById('assign-client-phone').value = '';

  const today = new Date();
  const defDelivery = formatYMD(today);
  const defExpiry = formatYMD(addDaysToDate(today, 30));
  const elDeliv = document.getElementById('assign-delivery-date');
  const elExpiry = document.getElementById('assign-expiry-date');
  if (elDeliv) elDeliv.value = defDelivery;
  if (elExpiry) elExpiry.value = defExpiry;
  
  const datalist = document.getElementById('clients-datalist');
  if (datalist) {
    datalist.innerHTML = state.clients.map(c => `<option value="${c.nombre}">${c.telefono || ''}</option>`).join('');
  }
  
  openModal('assign-profile-modal');
}

function onClientSelectFromList(name) {
  const found = state.clients.find(c => c.nombre.toLowerCase() === name.toLowerCase());
  if (found) {
    document.getElementById('assign-client-phone').value = found.telefono || '';
  }
}

function confirmAssignProfile() {
  const accId = document.getElementById('assign-acc-id').value;
  const num = parseInt(document.getElementById('assign-profile-num').value, 10);
  const name = document.getElementById('assign-client-name').value.trim();
  const phone = document.getElementById('assign-client-phone').value.trim();
  
  if (!name) {
    showToast('Debes ingresar el nombre del cliente', 'warning');
    return;
  }
  
  const acc = findAccountByIdOrUid(accId);
  if (!acc) return;
  
  ensureAccountProfileSlots(acc);
  const elDeliv = document.getElementById('assign-delivery-date');
  const elExpiry = document.getElementById('assign-expiry-date');
  const delivYMD = elDeliv ? elDeliv.value : '';
  const expiryYMD = elExpiry ? elExpiry.value : '';
  let formattedDeliv = formatDMY(new Date());
  let formattedExpiry = formatDMY(addDaysToDate(new Date(), 30));
  if (delivYMD) {
    const parts = delivYMD.split('-');
    formattedDeliv = `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  if (expiryYMD) {
    const parts = expiryYMD.split('-');
    formattedExpiry = `${parts[2]}/${parts[1]}/${parts[0]}`;
  }

  const p = (acc.perfiles || []).find(x => x.num === num);
  if (p) {
    p.cliente = name;
    p.telefono = phone;
    p.fechaEntrega = formattedDeliv;
    p.fechaCorte = formattedExpiry;
    p.dias = 30;
    p.raw = phone ? `${name} - ${phone}` : name;
  }
  saveAccounts();
  
  const exists = state.clients.some(c => c.nombre.toLowerCase() === name.toLowerCase());
  if (!exists) {
    state.clients.push({
      nombre: name,
      telefono: phone,
      servicios: [{ plataforma: acc.plataforma, cuentaId: acc.id, perfil: `Perfil #${num}`, fechaCorte: formattedExpiry }]
    });
    saveClients();
  }
  
  closeModal('assign-profile-modal');
  showToast(`Perfil #${num} asignado a ${name} (Vence: ${formattedExpiry})`, 'success');
  renderAll();
}

function freeProfile(accId, perfilNum) {
  if (!confirm(`¿Estás seguro de liberar el Perfil #${perfilNum} de esta cuenta?`))
    return;
  const acc = findAccountByIdOrUid(accId);
  if (!acc) return;
  
  const p = (acc.perfiles || []).find(x => x.num === perfilNum);
  if (p) {
    p.cliente = '';
    p.telefono = '';
    p.raw = '';
  }
  saveAccounts();
  showToast(`Perfil #${perfilNum} liberado y disponible`, 'info');
  renderAll();
}

function confirmDeleteAccount(key) {
  const acc = findAccountByIdOrUid(key);
  if (!acc) return;
  if (!confirm(`¿Estás seguro de eliminar la cuenta ${acc.id} (${acc.correo || "Sin correo"})? Esta acción no se puede deshacer.`)) return;
  
  if (acc._uid) {
    state.accounts = state.accounts.filter(a => a._uid !== acc._uid);
  } else {
    const idx = state.accounts.indexOf(acc);
    if (idx !== -1) state.accounts.splice(idx, 1);
  }
  saveAccounts();
  showToast(`Cuenta ${accId} eliminada`, 'info');
  renderAll();
}

// ==========================================================================
// SECCIÓN DE TODAS LAS CUENTAS QUE VENDE (TARIFARIO & GANANCIAS POR PRODUCTO)
// ==========================================================================

function updateCatalogPrice(catId, val) {
  const num = parseFloat(val) || 0;
  if (!state.catalogCosts[catId]) state.catalogCosts[catId] = {};
  state.catalogCosts[catId].price = num;
  saveCatalogCosts();
  renderCatalogProfits();
  populatePlatformDropdowns();
}

function updateCatalogInvestment(catId, val) {
  const num = parseFloat(val) || 0;
  if (!state.catalogCosts[catId]) state.catalogCosts[catId] = {};
  state.catalogCosts[catId].inv = num;
  saveCatalogCosts();
  renderCatalogProfits();
}

function updateCatalogQty(catId, val) {
  const num = parseInt(val, 10) || 0;
  if (!state.catalogCosts[catId]) state.catalogCosts[catId] = {};
  state.catalogCosts[catId].qty = num;
  saveCatalogCosts();
  renderCatalogProfits();
}

// Guardado manual explícito del tarifario
function manualSaveCatalog() {
  document.querySelectorAll('.catalog-price-input').forEach(input => {
    const catId = input.dataset.catId;
    if (catId) {
      if (!state.catalogCosts[catId]) state.catalogCosts[catId] = {};
      state.catalogCosts[catId].price = parseFloat(input.value) || 0;
    }
  });
  document.querySelectorAll('.catalog-inv-input').forEach(input => {
    const catId = input.dataset.catId;
    if (catId) {
      if (!state.catalogCosts[catId]) state.catalogCosts[catId] = {};
      state.catalogCosts[catId].inv = parseFloat(input.value) || 0;
    }
  });
  document.querySelectorAll('.catalog-qty-input').forEach(input => {
    const catId = input.dataset.catId;
    if (catId) {
      if (!state.catalogCosts[catId]) state.catalogCosts[catId] = {};
      state.catalogCosts[catId].qty = parseInt(input.value, 10) || 0;
    }
  });
  
  saveCatalog();
  saveCatalogCosts();
  renderCatalogProfits();
  populatePlatformDropdowns();
  
  showToast('¡Tarifario, costos y ganancias guardados exitosamente!', 'success');
}

// Abrir modal para nuevo servicio
function openAddServiceModal() {
  const nameInput = document.getElementById('serv-name-input');
  const descInput = document.getElementById('serv-desc-input');
  const priceInput = document.getElementById('serv-price-input');
  const invInput = document.getElementById('serv-inv-input');
  const qtyInput = document.getElementById('serv-qty-input');
  const colorSelect = document.getElementById('serv-color-select');
  
  if (nameInput) nameInput.value = '';
  if (descInput) descInput.value = '';
  if (priceInput) priceInput.value = '4.00';
  if (invInput) invInput.value = '1.50';
  if (qtyInput) qtyInput.value = '10';
  if (colorSelect) colorSelect.value = 'indigo';
  
  recalcNewServicePreview();
  openModal('service-modal');
  setTimeout(() => {
    document.getElementById('serv-name-input')?.focus();
  }, 100);
}

// Recalcular previsualización dentro del modal de nuevo servicio
function recalcNewServicePreview() {
  const price = parseFloat(document.getElementById('serv-price-input')?.value) || 0;
  const inv = parseFloat(document.getElementById('serv-inv-input')?.value) || 0;
  const qty = parseInt(document.getElementById('serv-qty-input')?.value, 10) || 0;
  
  const profit = price - inv;
  const margin = price > 0 ? ((profit / price) * 100) : 0;
  const month = profit * qty;
  
  const elProfit = document.getElementById('serv-profit-preview');
  const elMargin = document.getElementById('serv-margin-preview');
  const elMonth = document.getElementById('serv-month-preview');
  
  if (elProfit) {
    elProfit.textContent = `${profit >= 0 ? '+' : ''}$${profit.toFixed(2)}`;
    elProfit.className = `text-sm font-bold font-mono ${profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`;
  }
  if (elMargin) {
    elMargin.textContent = `${margin.toFixed(1)}%`;
    elMargin.className = `text-sm font-bold font-mono ${margin >= 50 ? 'text-emerald-400' : margin > 0 ? 'text-amber-400' : 'text-red-400'}`;
  }
  if (elMonth) {
    elMonth.textContent = `$${month.toFixed(2)}`;
  }
}

// Guardar nuevo servicio al catálogo
function saveNewServiceForm(e) {
  e.preventDefault();
  const name = document.getElementById('serv-name-input').value.trim();
  const desc = document.getElementById('serv-desc-input').value.trim() || 'Servicio de streaming';
  const price = parseFloat(document.getElementById('serv-price-input').value) || 0;
  const inv = parseFloat(document.getElementById('serv-inv-input').value) || 0;
  const qty = parseInt(document.getElementById('serv-qty-input').value, 10) || 0;
  const colorChoice = document.getElementById('serv-color-select').value;
  
  if (!name) {
    showToast('Ingresa el nombre del servicio', 'warning');
    return;
  }
  
  const colorStyles = {
    indigo: { color: 'text-indigo-400', badge: 'bg-indigo-600', icon: 'tv' },
    emerald: { color: 'text-emerald-400', badge: 'bg-emerald-600', icon: 'check-circle' },
    blue: { color: 'text-blue-400', badge: 'bg-blue-600', icon: 'sparkles' },
    red: { color: 'text-red-400', badge: 'bg-red-600', icon: 'play' },
    amber: { color: 'text-amber-400', badge: 'bg-amber-600', icon: 'star' },
    teal: { color: 'text-teal-400', badge: 'bg-teal-600', icon: 'airplay' },
    pink: { color: 'text-pink-400', badge: 'bg-pink-600', icon: 'heart' },
    slate: { color: 'text-slate-300', badge: 'bg-slate-700', icon: 'film' }
  };
  const style = colorStyles[colorChoice] || colorStyles.indigo;
  
  const newId = 'cat_custom_' + Date.now();
  const newService = {
    id: newId,
    name: name,
    desc: desc,
    defaultPrice: price,
    defaultInv: inv,
    defaultQty: qty,
    color: style.color,
    badge: style.badge,
    icon: style.icon,
    isCustom: true
  };
  
  if (!state.catalog || !Array.isArray(state.catalog)) {
    state.catalog = JSON.parse(JSON.stringify(DEFAULT_CATALOG_ITEMS));
  }
  state.catalog.push(newService);
  
  if (!state.catalogCosts) state.catalogCosts = {};
  state.catalogCosts[newId] = {
    price: price,
    inv: inv,
    qty: qty
  };
  
  saveCatalog();
  saveCatalogCosts();
  populatePlatformDropdowns();
  renderCatalogProfits();
  closeModal('service-modal');
  showToast(`¡Servicio "${name}" agregado con éxito al tarifario!`, 'success');
}

// Eliminar servicio del catálogo
function deleteCatalogService(catId) {
  const allItems = getCatalogItems();
  const item = allItems.find(c => c.id === catId);
  if (!item) return;
  
  if (!confirm(`¿Estás seguro de eliminar "${item.name}" del tarifario?`)) return;
  
  state.catalog = allItems.filter(c => c.id !== catId);
  if (state.catalogCosts && state.catalogCosts[catId]) {
    delete state.catalogCosts[catId];
  }
  saveCatalog();
  saveCatalogCosts();
  populatePlatformDropdowns();
  renderCatalogProfits();
  showToast(`Servicio "${item.name}" eliminado del tarifario`, 'info');
}

// Restablecer valores de fábrica
function resetCatalogDefaults() {
  if (!confirm('¿Restablecer el tarifario a los 17 servicios originales de fábrica? Se restablecerán precios y sugerencias.')) return;
  state.catalog = JSON.parse(JSON.stringify(DEFAULT_CATALOG_ITEMS));
  state.catalogCosts = {};
  state.catalog.forEach(item => {
    state.catalogCosts[item.id] = {
      price: item.defaultPrice,
      inv: item.defaultInv,
      qty: item.defaultQty
    };
  });
  saveCatalog();
  saveCatalogCosts();
  populatePlatformDropdowns();
  renderCatalogProfits();
  showToast('Tarifario restablecido a valores oficiales de fábrica', 'info');
}

// Sincronizar listas desplegables de plataformas en toda la app
function populatePlatformDropdowns() {
  const accSelect = document.getElementById('acc-plat-select');
  const saleSelect = document.getElementById('sale-plat');
  const items = getCatalogItems();
  
  if (accSelect) {
    const currentVal = accSelect.value;
    accSelect.innerHTML = items.map(it => {
      const cost = state.catalogCosts[it.id] || { price: it.defaultPrice };
      const price = cost.price !== undefined ? cost.price : it.defaultPrice;
      return `<option value="${it.name}">${it.name} - $${price.toFixed(2)}</option>`;
    }).join('');
    if (currentVal && items.some(it => it.name === currentVal)) {
      accSelect.value = currentVal;
    }
  }

  if (saleSelect) {
    const currentVal = saleSelect.value;
    saleSelect.innerHTML = items.map(it => {
      const cost = state.catalogCosts[it.id] || { price: it.defaultPrice };
      const price = cost.price !== undefined ? cost.price : it.defaultPrice;
      return `<option value="${it.name}">${it.name} - $${price.toFixed(2)}</option>`;
    }).join('');
    if (currentVal && items.some(it => it.name === currentVal)) {
      saleSelect.value = currentVal;
    }
  }
}

function renderCatalogProfits() {
  const container = document.getElementById('catalog-profits-table-body');
  if (!container) return;
  
  let totalGananciaMensual = 0;
  let totalIngresosMensuales = 0;
  let totalInversionMensual = 0;
  let sumaMargenes = 0;
  let bestItem = null;
  let maxProfit = -1;
  
  const searchQ = (document.getElementById('catalog-search')?.value || '').toLowerCase();
  
  const allItems = getCatalogItems();
  const filteredItems = allItems.filter(item => {
    return item.name.toLowerCase().includes(searchQ) || (item.desc || '').toLowerCase().includes(searchQ);
  });
  
  container.innerHTML = filteredItems.map(item => {
    const costData = state.catalogCosts[item.id] || { price: item.defaultPrice, inv: item.defaultInv, qty: item.defaultQty };
    const salePrice = costData.price !== undefined ? costData.price : item.defaultPrice;
    const invCost = costData.inv !== undefined ? costData.inv : item.defaultInv;
    const estQty = costData.qty !== undefined ? costData.qty : item.defaultQty;
    
    const profitPerUnit = salePrice - invCost;
    const marginPercent = salePrice > 0 ? ((profitPerUnit / salePrice) * 100) : 0;
    const monthlyProfit = profitPerUnit * estQty;
    
    totalGananciaMensual += monthlyProfit;
    totalIngresosMensuales += (salePrice * estQty);
    totalInversionMensual += (invCost * estQty);
    sumaMargenes += marginPercent;
    
    if (profitPerUnit > maxProfit) {
      maxProfit = profitPerUnit;
      bestItem = item.name;
    }
    
    const isProfitable = profitPerUnit >= 0;
    
    return `
      <tr class="border-b border-slate-800 hover:bg-slate-800/40 transition text-xs">
        <!-- Servicio / Cuenta que vende -->
        <td class="py-3 px-4">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-xl ${item.badge || 'bg-indigo-600'} text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <i data-lucide="${item.icon || 'tv'}" class="w-4 h-4"></i>
            </div>
            <div>
              <div class="font-bold text-slate-100 text-sm flex items-center gap-1.5">
                <span>${item.name}</span>
                ${item.isCustom ? '<span class="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold">Nuevo</span>' : ''}
              </div>
              <div class="text-[11px] text-slate-400">${item.desc || 'Suscripción'}</div>
            </div>
          </div>
        </td>

        <!-- Precio de Venta ($) -->
        <td class="py-3 px-4 font-mono">
          <div class="flex items-center gap-1">
            <span class="text-slate-500 font-bold">$</span>
            <input 
              type="number" 
              step="0.1" 
              min="0"
              data-cat-id="${item.id}"
              value="${salePrice.toFixed(2)}"
              onchange="updateCatalogPrice('${item.id}', this.value)"
              class="catalog-price-input w-20 bg-slate-950 border border-slate-700 focus:border-indigo-500 rounded-lg px-2 py-1 text-xs font-mono font-bold text-slate-100 outline-none transition text-right"
              title="Precio al que vendes este servicio al cliente"
            />
          </div>
        </td>

        <!-- Tu Inversión / Costo ($) [Editable] -->
        <td class="py-3 px-4 font-mono">
          <div class="flex items-center gap-1">
            <span class="text-slate-500 font-bold">$</span>
            <input 
              type="number" 
              step="0.1" 
              min="0"
              data-cat-id="${item.id}"
              value="${invCost.toFixed(2)}"
              onchange="updateCatalogInvestment('${item.id}', this.value)"
              class="catalog-inv-input w-20 bg-slate-950 border border-slate-700 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 rounded-lg px-2 py-1 text-xs font-mono font-bold text-amber-300 outline-none transition text-right"
              title="Escribe aquí cuánto te cuesta a ti este servicio"
            />
          </div>
        </td>

        <!-- Ganancia Neta por Venta -->
        <td class="py-3 px-4 font-mono">
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-bold ${isProfitable ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30' : 'bg-red-600/20 text-red-400 border border-red-500/30'}">
            ${isProfitable ? '+' : ''}$${profitPerUnit.toFixed(2)}
          </span>
          <span class="block text-[10px] text-slate-500 mt-0.5">por cada venta</span>
        </td>

        <!-- Margen de Rendimiento % -->
        <td class="py-3 px-4 font-mono font-bold">
          <span class="${marginPercent >= 50 ? 'text-emerald-400' : marginPercent > 0 ? 'text-amber-400' : 'text-red-400'}">
            ${marginPercent.toFixed(1)}%
          </span>
        </td>

        <!-- Ventas Estimadas al Mes -->
        <td class="py-3 px-4 font-mono">
          <div class="flex items-center gap-1">
            <input 
              type="number" 
              step="1" 
              min="0"
              data-cat-id="${item.id}"
              value="${estQty}"
              onchange="updateCatalogQty('${item.id}', this.value)"
              class="catalog-qty-input w-16 bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg px-2 py-1 text-xs font-mono text-slate-200 outline-none text-center"
              title="Ventas mensuales estimadas de este servicio"
            />
            <span class="text-[10px] text-slate-500">al mes</span>
          </div>
        </td>

        <!-- Ganancia Total Mensual Proyectada -->
        <td class="py-3 px-4 font-mono font-bold text-indigo-400 text-right">
          $${monthlyProfit.toFixed(2)}
        </td>

        <!-- Accion (Eliminar) -->
        <td class="py-3 px-3 text-center">
          <button onclick="deleteCatalogService('${item.id}')" class="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition" title="Eliminar servicio">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      </tr>
    `;
  }).join('');
  
  // Update Top KPI Cards
  const elTotGanMes = document.getElementById('cat-kpi-ganancia-mes');
  const elTotIngMes = document.getElementById('cat-kpi-ingreso-mes');
  const elTotInvMes = document.getElementById('cat-kpi-inversion-mes');
  const elAvgMargin = document.getElementById('cat-kpi-avg-margin');
  const elBestProd = document.getElementById('cat-kpi-best-prod');
  
  if (elTotGanMes) elTotGanMes.textContent = `$ ${totalGananciaMensual.toFixed(2)}`;
  if (elTotIngMes) elTotIngMes.textContent = `$ ${totalIngresosMensuales.toFixed(2)}`;
  if (elTotInvMes) elTotInvMes.textContent = `$ ${totalInversionMensual.toFixed(2)}`;
  if (elAvgMargin) {
    const totalCount = allItems.length;
    const avg = totalCount > 0 ? (sumaMargenes / totalCount).toFixed(1) : '0';
    elAvgMargin.textContent = `${avg}% Promedio`;
  }
  if (elBestProd) elBestProd.textContent = bestItem ? `${bestItem} (+$${maxProfit.toFixed(2)})` : 'N/A';
  
  lucide.createIcons();
}

// Render Clients Tab
function renderClients() {
  const container = document.getElementById('clients-table-body');
  if (!container) return;
  
  const clientMap = new Map();
  state.accounts.forEach(acc => {
    (acc.perfiles || []).forEach(p => {
      if (p.cliente) {
        const k = p.cliente.toLowerCase();
        if (!clientMap.has(k)) {
          clientMap.set(k, { nombre: p.cliente, telefono: p.telefono, servicios: [] });
        }
        clientMap.get(k).servicios.push({
          plataforma: acc.plataforma,
          cuentaId: acc.id,
          perfil: `Perfil #${p.num}`,
          fechaCorte: acc.fechaCorte
        });
      }
    });
    if (acc.dueno) {
      const parts = acc.dueno.split('-');
      const name = parts[0]?.trim();
      const phone = parts[1]?.trim();
      if (name) {
        const k = name.toLowerCase();
        if (!clientMap.has(k)) {
          clientMap.set(k, { nombre: name, telefono: phone, servicios: [] });
        }
        clientMap.get(k).servicios.push({
          plataforma: acc.plataforma,
          cuentaId: acc.id,
          perfil: 'Cuenta Completa',
          fechaCorte: acc.fechaCorte
        });
      }
    }
  });
  
  const allClients = Array.from(clientMap.values());
  const searchQ = (document.getElementById('clients-search')?.value || '').toLowerCase();
  
  const filteredClients = allClients.filter(c => {
    return c.nombre.toLowerCase().includes(searchQ) || (c.telefono || '').toLowerCase().includes(searchQ);
  });
  
  const countEl = document.getElementById('clients-count');
  if (countEl) countEl.textContent = `${filteredClients.length} clientes registrados`;
  
  if (filteredClients.length === 0) {
    container.innerHTML = `
      <tr>
        <td colspan="4" class="text-center py-12 text-slate-500">
          No se encontraron clientes con ese criterio de búsqueda.
        </td>
      </tr>
    `;
    return;
  }
  
  container.innerHTML = filteredClients.map(c => {
    const cleanPhone = sanitizePhone(c.telefono);
    return `
      <tr class="border-b border-slate-800 hover:bg-slate-800/40 transition">
        <td class="py-3 px-4 font-semibold text-slate-200">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-indigo-600/30 text-indigo-400 flex items-center justify-center font-bold text-xs uppercase">
              ${c.nombre.substring(0, 2)}
            </div>
            <span>${c.nombre}</span>
          </div>
        </td>
        <td class="py-3 px-4 font-mono text-xs text-slate-300">
          ${c.telefono || '<span class="text-slate-600">Sin teléfono</span>'}
        </td>
        <td class="py-3 px-4">
          <div class="flex flex-wrap gap-1.5">
            ${c.servicios.map(s => {
              const dInfo = getDaysUntil(s.fechaCorte);
              return `
                <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-medium bg-slate-800 border border-slate-700 text-slate-300">
                  <span class="font-bold text-indigo-400">${s.plataforma}</span>
                  <span class="text-slate-500">(${s.cuentaId})</span>
                  <span class="${dInfo.status === 'vencidos' ? 'text-red-400 font-bold' : dInfo.status === 'hoy' ? 'text-amber-400 font-bold' : 'text-slate-400'}">${formatDisplayDate(s.fechaCorte)}</span>
                </span>
              `;
            }).join('')}
          </div>
        </td>
        <td class="py-3 px-4 text-right">
          ${cleanPhone ? `
            <button onclick="window.open('https://wa.me/${cleanPhone}', '_blank')" class="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white rounded-lg text-xs font-semibold transition">
              <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
              <span>WhatsApp</span>
            </button>
          ` : `
            <span class="text-xs text-slate-600">N/A</span>
          `}
        </td>
      </tr>
    `;
  }).join('');
  
  lucide.createIcons();
}

// Render Accounting Tab
function renderAccounting() {
  const salesTable = document.getElementById('sales-table-body');
  if (!salesTable) return;
  
  let totalVentas = 0;
  let totalInversion = 0;
  let totalGanancia = 0;
  
  state.sales.forEach(s => {
    totalVentas += (s.totalVenta || 0);
    totalInversion += (s.inversion || 0);
    totalGanancia += (s.totalGanancia || 0);
  });
  
  const elTotV = document.getElementById('acc-tot-ventas');
  const elTotI = document.getElementById('acc-tot-inversion');
  const elTotG = document.getElementById('acc-tot-ganancias');
  const elMargin = document.getElementById('acc-margin');
  
  if (elTotV) elTotV.textContent = `$ ${totalVentas.toFixed(2)}`;
  if (elTotI) elTotI.textContent = `$ ${totalInversion.toFixed(2)}`;
  if (elTotG) elTotG.textContent = `$ ${totalGanancia.toFixed(2)}`;
  if (elMargin) {
    const margin = totalVentas > 0 ? ((totalGanancia / totalVentas) * 100).toFixed(1) : '0';
    elMargin.textContent = `${margin}% Margen`;
  }
  
  if (state.sales.length === 0) {
    salesTable.innerHTML = `
      <tr>
        <td colspan="7" class="text-center py-10 text-slate-500">
          No hay registros de ventas todavía. Haz clic en "Registrar Venta" o renueva una cuenta para empezar a ver el balance financiero.
        </td>
      </tr>
    `;
  } else {
    salesTable.innerHTML = state.sales.map((s, idx) => `
      <tr class="border-b border-slate-800 hover:bg-slate-800/40 text-xs">
        <td class="py-2.5 px-4 font-mono text-slate-400">${formatDisplayDate(s.fecha)}</td>
        <td class="py-2.5 px-4 font-semibold text-slate-200">${s.plataforma}</td>
        <td class="py-2.5 px-4 text-slate-400">${s.tipo}</td>
        <td class="py-2.5 px-4 font-mono text-emerald-400 font-bold">$ ${(s.totalVenta || 0).toFixed(2)}</td>
        <td class="py-2.5 px-4 font-mono text-rose-400">$ ${(s.inversion || 0).toFixed(2)}</td>
        <td class="py-2.5 px-4 font-mono text-indigo-400 font-bold">$ ${(s.totalGanancia || 0).toFixed(2)}</td>
        <td class="py-2.5 px-4 text-right">
          <button onclick="deleteSale(${idx})" class="p-1 text-slate-500 hover:text-red-400 transition" title="Eliminar venta">
            <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
          </button>
        </td>
      </tr>
    `).join('');
    lucide.createIcons();
  }
  
  renderAccountingChart();
}

function openAddSaleModal() {
  document.getElementById('sale-date').value = formatYMD(new Date());
  document.getElementById('sale-plat').value = 'Netflix (Personal)';
  document.getElementById('sale-type').value = 'Pantalla';
  const pricing = getCatalogPriceAndInvestment('Netflix (Personal)', 30);
  document.getElementById('sale-price').value = pricing.price.toFixed(2);
  document.getElementById('sale-qty').value = '1';
  document.getElementById('sale-investment').value = pricing.inv.toFixed(2);
  recalculateSaleModal();
  openModal('sale-modal');
}

function onSalePlatformChange(plat) {
  const qty = parseInt(document.getElementById('sale-qty').value, 10) || 1;
  const days = qty >= 3 ? 90 : 30;
  const pricing = getCatalogPriceAndInvestment(plat, days);
  document.getElementById('sale-price').value = pricing.price.toFixed(2);
  document.getElementById('sale-investment').value = (pricing.inv * qty).toFixed(2);
  recalculateSaleModal();
}

function recalculateSaleModal() {
  const price = parseFloat(document.getElementById('sale-price').value) || 0;
  const qty = parseInt(document.getElementById('sale-qty').value, 10) || 1;
  const inv = parseFloat(document.getElementById('sale-investment').value) || 0;
  
  const total = price * qty;
  const profit = total - inv;
  
  document.getElementById('sale-total-preview').textContent = `$ ${total.toFixed(2)}`;
  document.getElementById('sale-profit-preview').textContent = `$ ${profit.toFixed(2)}`;
}

function saveSaleForm(e) {
  e.preventDefault();
  const dateVal = document.getElementById('sale-date').value;
  const plat = normalizePlatformName(document.getElementById('sale-plat').value);
  const type = document.getElementById('sale-type').value;
  const unitVal = parseFloat(document.getElementById('sale-price').value) || 0;
  const qty = parseInt(document.getElementById('sale-qty').value, 10) || 1;
  const inv = parseFloat(document.getElementById('sale-investment').value) || 0;
  
  const parts = dateVal.split('-');
  const formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
  const totalVentas = unitVal * qty;
  const totalGanancia = totalVentas - inv;
  
  state.sales.unshift({
    id: 'S_' + Date.now(),
    fecha: formattedDate,
    plataforma: plat,
    tipo: type,
    valorUnitario: unitVal,
    cantidad: qty,
    totalVenta: totalVentas,
    inversion: inv,
    totalGanancia: totalGanancia
  });
  
  saveSales();
  closeModal('sale-modal');
  showToast('Venta registrada con éxito', 'success');
  renderAccounting();
}

function deleteSale(idx) {
  if (!confirm('¿Deseas eliminar este registro contable?')) return;
  state.sales.splice(idx, 1);
  saveSales();
  showToast('Registro eliminado', 'info');
  renderAccounting();
}

function renderAccountingChart() {
  const canvas = document.getElementById('accounting-chart');
  if (!canvas) return;
  
  const dataByPlat = {};
  PLATFORMS_CONFIG.forEach(p => dataByPlat[p.name] = { ventas: 0, ganancias: 0 });
  
  state.sales.forEach(s => {
    const norm = normalizePlatformName(s.plataforma);
    if (!dataByPlat[norm]) dataByPlat[norm] = { ventas: 0, ganancias: 0 };
    dataByPlat[norm].ventas += s.totalVenta || 0;
    dataByPlat[norm].ganancias += s.totalGanancia || 0;
  });
  
  const labels = Object.keys(dataByPlat).filter(k => dataByPlat[k].ventas > 0);
  const ventasData = labels.map(k => dataByPlat[k].ventas);
  const gananciasData = labels.map(k => dataByPlat[k].ganancias);
  
  if (state.accountingChart) {
    state.accountingChart.destroy();
  }
  
  const ctx = canvas.getContext('2d');
  state.accountingChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels.length > 0 ? labels : ['Sin ventas registradas'],
      datasets: [
        {
          label: 'Total Ventas ($)',
          data: labels.length > 0 ? ventasData : [0],
          backgroundColor: '#3b82f6',
          borderRadius: 6
        },
        {
          label: 'Ganancias Netas ($)',
          data: labels.length > 0 ? gananciasData : [0],
          backgroundColor: '#10b981',
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#94a3b8', font: { family: 'inherit', size: 12 } } }
      },
      scales: {
        x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
        y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } }
      }
    }
  });
}

function copyPriceListToWhatsApp() {
  let text = `🍿 *LISTA DE PRECIOS - GOLDENPRO* 🎬✨\n\n`;
  text += `¡Disfruta del mejor entretenimiento al mejor precio!\n\n`;
  
  getCatalogItems().forEach(p => {
    const cost = state.catalogCosts[p.id] || { price: p.defaultPrice };
    const price = cost.price !== undefined ? cost.price : p.defaultPrice;
    text += `🔹 *${p.name}:* $${price.toFixed(2)}\n`;
  });
  
  text += `\n⚡ Cuentas estables, soporte y garantía garantizada.\n📲 ¡Escríbenos para activar tu pantalla ahora!`;
  
  copyToClipboard(text, 'Lista de Precios para WhatsApp');
}

// Export to Excel / JSON
function exportToExcel() {
  try {
    const wb = XLSX.utils.book_new();
    
    // Sheet 1: Todas las Cuentas y Vencimientos
    const accountsData = state.accounts.map(a => {
      const dInfo = getDaysUntil(a.fechaCorte);
      const unitPrice = getDefaultPrice(a.plataforma, a.dias || 30);
      const row = {
        'ID': a.id,
        'PLATAFORMA': a.plataforma,
        'TARIFA_UNITARIA': unitPrice,
        'CORREO': a.correo,
        'CLAVE': a.clave,
        'CLAVE CORREO': a.claveCorreo || '',
        'TIPO': a.tipo,
        'DUEÑO': a.dueno || '',
        'FECHA ENTREGA': a.fechaEntrega,
        'DIAS': a.dias,
        'FECHA CORTE': a.fechaCorte,
        'ESTADO': dInfo.label,
        'DIAS RESTANTES': dInfo.diffDays !== null ? dInfo.diffDays : ''
      };
      (a.perfiles || []).forEach(p => {
        row[`PERFIL #${p.num}`] = p.raw || (p.cliente ? `${p.cliente} - ${p.telefono}` : '');
      });
      return row;
    });
    const wsAccounts = XLSX.utils.json_to_sheet(accountsData);
    XLSX.utils.book_append_sheet(wb, wsAccounts, 'CUENTAS Y PANTALLAS');
    
    // Sheet 2: Tarifario y Ganancias por Servicio
    const catalogData = getCatalogItems().map(p => {
      const cost = state.catalogCosts[p.id] || { price: p.defaultPrice, inv: p.defaultInv, qty: p.defaultQty };
      const sale = cost.price !== undefined ? cost.price : p.defaultPrice;
      const inv = cost.inv !== undefined ? cost.inv : p.defaultInv;
      const profit = sale - inv;
      const margin = sale > 0 ? ((profit / sale) * 100).toFixed(1) + '%' : '0%';
      return {
        'SERVICIO': p.name,
        'DESCRIPCION': p.desc,
        'PRECIO_VENTA': sale,
        'COSTO_INVERSION': inv,
        'GANANCIA_NETA_POR_VENTA': profit,
        'MARGEN': margin,
        'VENTAS_ESTIMADAS_MES': cost.qty !== undefined ? cost.qty : p.defaultQty,
        'GANANCIA_MENSUAL_ESTIMADA': profit * (cost.qty !== undefined ? cost.qty : p.defaultQty)
      };
    });
    const wsCatalog = XLSX.utils.json_to_sheet(catalogData);
    XLSX.utils.book_append_sheet(wb, wsCatalog, 'TARIFARIO_Y_GANANCIAS');

    // Sheet 3: Historial Contable
    if (state.sales.length > 0) {
      const wsSales = XLSX.utils.json_to_sheet(state.sales);
      XLSX.utils.book_append_sheet(wb, wsSales, 'H_CONTABLE');
    }
    
    const fileName = `GOLDENPRO_STREAMING_${formatYMD(new Date())}.xlsx`;
    XLSX.writeFile(wb, fileName);
    showToast(`Archivo Excel descargado: ${fileName}`, 'success');
  } catch (err) {
    console.error(err);
    showToast('Error al exportar a Excel: ' + err.message, 'error');
  }
}

function exportBackupJSON() {
  const data = {
    accounts: state.accounts,
    clients: state.clients,
    sales: state.sales,
    catalog: state.catalog,
    catalogCosts: state.catalogCosts,
    exportDate: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `GOLDENPRO_BACKUP_${formatYMD(new Date())}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Copia de seguridad descargada', 'success');
}

function importBackupJSON(file) {
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (data.accounts && Array.isArray(data.accounts)) {
        state.accounts = data.accounts.map(a => {
          a.plataforma = normalizePlatformName(a.plataforma);
          return a;
        });
        saveAccounts();
      }
      if (data.clients && Array.isArray(data.clients)) {
        state.clients = data.clients;
        saveClients();
      }
      if (data.sales && Array.isArray(data.sales)) {
        state.sales = data.sales;
        saveSales();
      }
      if (data.catalog && Array.isArray(data.catalog)) {
        state.catalog = data.catalog;
        saveCatalog();
      }
      if (data.catalogCosts && typeof data.catalogCosts === 'object') {
        state.catalogCosts = data.catalogCosts;
        saveCatalogCosts();
      }
      showToast('¡Copia de seguridad restaurada correctamente!', 'success');
      renderAll();
    } catch (err) {
      showToast('Archivo JSON no válido: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
}

function restoreInitialSeed() {
  if (!confirm('¿Deseas restaurar todos los datos iniciales originales de JMC PLANTILLA? Se sobreescribirán las cuentas actuales.')) return;
  state.accounts = JSON.parse(JSON.stringify(window.INITIAL_ACCOUNTS || [])).map(a => {
    a.plataforma = normalizePlatformName(a.plataforma);
    return a;
  });
  state.clients = JSON.parse(JSON.stringify(window.INITIAL_CLIENTS || []));
  saveAccounts();
  saveClients();
  showToast('¡Datos iniciales de plantilla restaurados!', 'success');
  renderAll();
}

// Navigation & Tab Switching
function switchTab(tab) {
  state.currentTab = tab;
  
  // Desktop Tabs
  document.querySelectorAll('.nav-tab').forEach(btn => {
    btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-lg');
    btn.classList.add('text-slate-400', 'hover:text-slate-200');
  });
  
  const activeBtn = document.getElementById(`tab-btn-${tab}`);
  if (activeBtn) {
    activeBtn.classList.remove('text-slate-400', 'hover:text-slate-200');
    activeBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-lg');
  }

  // Mobile Tabs
  document.querySelectorAll('.mobile-nav-tab').forEach(btn => {
    btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-600/30', 'font-bold');
    btn.classList.add('text-slate-400', 'hover:text-slate-200', 'font-semibold');
  });
  
  const activeMobileBtn = document.getElementById(`mobile-tab-${tab}`);
  if (activeMobileBtn) {
    activeMobileBtn.classList.remove('text-slate-400', 'hover:text-slate-200', 'font-semibold');
    activeMobileBtn.classList.add('bg-indigo-600', 'text-white', 'shadow-md', 'shadow-indigo-600/30', 'font-bold');
  }
  
  const views = ['cuentas', 'correos', 'tarifario_ganancias', 'clientes', 'contabilidad'];
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) {
      if (v === tab) el.classList.remove('hidden');
      else el.classList.add('hidden');
    }
  });
  
  if (tab === 'cuentas') renderAccounts();
  else if (tab === 'correos') renderCorreos();
  else if (tab === 'tarifario_ganancias') renderCatalogProfits();
  else if (tab === 'clientes') renderClients();
  else if (tab === 'contabilidad') renderAccounting();
}

function setStatusFilter(status) {
  state.statusFilter = status;
  
  document.querySelectorAll('.status-card').forEach(c => c.classList.remove('ring-2', 'ring-indigo-400'));
  const card = document.getElementById(`card-filter-${status}`);
  if (card) card.classList.add('ring-2', 'ring-indigo-400');
  
  switchTab('cuentas');
  renderAccounts();
}

function setPlatformFilter(plat) {
  state.platformFilter = plat;
  renderPlatformPills();
  renderAccounts();
}

function resetFilters() {
  state.statusFilter = 'todos';
  state.platformFilter = 'todas';
  state.searchTerm = '';
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.status-card').forEach(c => c.classList.remove('ring-2', 'ring-indigo-400'));
  renderPlatformPills();
  renderAccounts();
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function renderAll() {
  renderKpis();
  renderPlatformPills();
  populatePlatformDropdowns();
  if (state.currentTab === 'cuentas') renderAccounts();
  else if (state.currentTab === 'correos') renderCorreos();
  else if (state.currentTab === 'tarifario_ganancias') renderCatalogProfits();
  else if (state.currentTab === 'clientes') renderClients();
  else if (state.currentTab === 'contabilidad') renderAccounting();
}

// ==========================================================================
// GOLDENPRO STREAMING - SINCRONIZACIÓN EN TIEMPO REAL CON FIREBASE FIRESTORE
// ==========================================================================

let firebaseApp = null;
let firestoreDb = null;
let isFirebaseConnected = false;
let isSyncingRemote = false;
let unsubscribeFirestore = null;
let syncDebounceTimer = null;
let currentFirebaseConfig = null;

function getStoredFirebaseConfig() {
  if (window.FIREBASE_CONFIG && window.FIREBASE_CONFIG.apiKey && window.FIREBASE_CONFIG.projectId) {
    return window.FIREBASE_CONFIG;
  }
  const saved = localStorage.getItem('goldenpro_firebase_config');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.apiKey && parsed.projectId) return parsed;
    } catch(e) {}
  }
  return null;
}

function updateFirebaseStatusUI(status, message = '') {
  const iconCloud = document.getElementById('icon-cloud-status');
  const textCloud = document.getElementById('text-cloud-status');
  const dotCloud = document.getElementById('badge-cloud-dot');
  
  const statusCard = document.getElementById('fb-status-card');
  const statusIconWrap = document.getElementById('fb-status-icon-wrap');
  const statusTitle = document.getElementById('fb-status-title');
  const statusBadge = document.getElementById('fb-status-badge');
  const statusDesc = document.getElementById('fb-status-desc');
  const statusActions = document.getElementById('fb-status-actions');
  const cloudActionsBox = document.getElementById('fb-cloud-actions-box');
  
  if (status === 'connected' || status === 'synced') {
    if (iconCloud) {
      iconCloud.className = 'w-4 h-4 text-emerald-400 group-hover:scale-110 transition';
    }
    if (textCloud) {
      textCloud.textContent = 'En Vivo';
      textCloud.className = 'hidden lg:inline text-emerald-300 font-bold';
    }
    if (dotCloud) {
      dotCloud.className = 'w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/80 animate-pulse';
    }
    
    if (statusCard) {
      statusCard.className = 'p-4 rounded-2xl border transition bg-emerald-950/30 border-emerald-800/60 shadow-lg shadow-emerald-950/20';
    }
    if (statusIconWrap) {
      statusIconWrap.className = 'w-9 h-9 rounded-xl bg-emerald-600/20 flex items-center justify-center text-emerald-400';
      statusIconWrap.innerHTML = '<i data-lucide="cloud-check" class="w-5 h-5"></i>';
    }
    if (statusTitle) {
      statusTitle.textContent = 'Nube Activa (Firestore en Vivo)';
      statusTitle.className = 'font-bold text-sm text-emerald-300';
    }
    if (statusBadge) {
      statusBadge.textContent = 'Sincronizado';
      statusBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-600/30 text-emerald-300 border border-emerald-500/30';
    }
    if (statusDesc) {
      statusDesc.textContent = message || `Sincronizando automáticamente en vivo con el proyecto "${currentFirebaseConfig?.projectId || ''}".`;
    }
    if (statusActions) statusActions.classList.remove('hidden');
    if (cloudActionsBox) cloudActionsBox.classList.remove('hidden');
  } else if (status === 'syncing') {
    if (textCloud) {
      textCloud.textContent = 'Guardando...';
      textCloud.className = 'hidden lg:inline text-amber-300 font-bold';
    }
    if (dotCloud) {
      dotCloud.className = 'w-2 h-2 rounded-full bg-amber-400 animate-ping';
    }
    if (statusDesc) statusDesc.textContent = message || 'Guardando cambios en Firestore...';
  } else if (status === 'error') {
    if (iconCloud) iconCloud.className = 'w-4 h-4 text-red-400';
    if (textCloud) {
      textCloud.textContent = 'Error Nube';
      textCloud.className = 'hidden lg:inline text-red-400 font-bold';
    }
    if (dotCloud) dotCloud.className = 'w-2 h-2 rounded-full bg-red-500';
    
    if (statusCard) statusCard.className = 'p-4 rounded-2xl border transition bg-red-950/30 border-red-800/60';
    if (statusIconWrap) {
      statusIconWrap.className = 'w-9 h-9 rounded-xl bg-red-600/20 flex items-center justify-center text-red-400';
      statusIconWrap.innerHTML = '<i data-lucide="alert-triangle" class="w-5 h-5"></i>';
    }
    if (statusTitle) {
      statusTitle.textContent = 'Error de Conexión';
      statusTitle.className = 'font-bold text-sm text-red-300';
    }
    if (statusBadge) {
      statusBadge.textContent = 'Error';
      statusBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-600/30 text-red-300 border border-red-500/30';
    }
    if (statusDesc) statusDesc.textContent = message;
    if (statusActions) statusActions.classList.remove('hidden');
    if (cloudActionsBox) cloudActionsBox.classList.add('hidden');
  } else {
    // Offline / Local mode
    if (iconCloud) iconCloud.className = 'w-4 h-4 text-amber-400 group-hover:scale-110 transition';
    if (textCloud) {
      textCloud.textContent = 'Nube';
      textCloud.className = 'hidden lg:inline text-slate-300';
    }
    if (dotCloud) dotCloud.className = 'w-2 h-2 rounded-full bg-amber-400';
    
    if (statusCard) statusCard.className = 'p-4 rounded-2xl border transition bg-slate-950/80 border-slate-800';
    if (statusIconWrap) {
      statusIconWrap.className = 'w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400';
      statusIconWrap.innerHTML = '<i data-lucide="cloud-off" class="w-5 h-5"></i>';
    }
    if (statusTitle) {
      statusTitle.textContent = 'Modo Local (Sin Nube)';
      statusTitle.className = 'font-bold text-sm text-slate-200';
    }
    if (statusBadge) {
      statusBadge.textContent = 'Desconectado';
      statusBadge.className = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 text-slate-400';
    }
    if (statusDesc) statusDesc.textContent = message || 'Los cambios se guardan solo en la memoria de este navegador.';
    if (statusActions) statusActions.classList.add('hidden');
    if (cloudActionsBox) cloudActionsBox.classList.add('hidden');
  }
  
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    try { lucide.createIcons(); } catch(e) {}
  }
}

async function initFirebase(config, userInitiated = false) {
  if (!config || !config.apiKey || !config.projectId) {
    if (userInitiated) showToast('Por favor introduce una configuración válida con apiKey y projectId', 'warning');
    return;
  }
  
  if (typeof firebase === 'undefined') {
    console.warn('Firebase SDK no cargado en la página.');
    updateFirebaseStatusUI('error', 'El SDK de Firebase no se cargó correctamente. Revisa tu conexión a internet.');
    return;
  }
  
  try {
    currentFirebaseConfig = config;
    
    // Check if app already initialized
    if (!firebase.apps || !firebase.apps.length) {
      firebaseApp = firebase.initializeApp(config);
    } else {
      firebaseApp = firebase.app();
    }
    
    firestoreDb = firebase.firestore();
    
    // Attempt local persistence
    try {
      await firestoreDb.enablePersistence({ synchronizeTabs: true });
    } catch(err) {
      // Ignore multiple tabs / unsupported error
    }
    
    isFirebaseConnected = true;
    localStorage.setItem('goldenpro_firebase_config', JSON.stringify(config));
    
    // Unsubscribe previous listener if exists
    if (unsubscribeFirestore) {
      unsubscribeFirestore();
      unsubscribeFirestore = null;
    }
    
    // Set up real-time listener on document 'goldenpro/main_data'
    const docRef = firestoreDb.collection('goldenpro').doc('main_data');
    
    unsubscribeFirestore = docRef.onSnapshot((doc) => {
      if (doc && doc.exists) {
        const remoteData = doc.data();
        if (remoteData && remoteData.lastUpdated) {
          // If remote is newer than local or if user just connected
          if (remoteData.lastUpdated !== state.lastFirebaseUpdate) {
            state.lastFirebaseUpdate = remoteData.lastUpdated;
            if (Array.isArray(remoteData.accounts)) {
      state.accounts = remoteData.accounts;
      ensureAccountUniqueIds();
    }
            if (Array.isArray(remoteData.clients)) state.clients = remoteData.clients;
            if (Array.isArray(remoteData.sales)) state.sales = remoteData.sales;
            if (Array.isArray(remoteData.catalog)) state.catalog = remoteData.catalog;
            if (remoteData.catalogCosts) state.catalogCosts = remoteData.catalogCosts;
            
            // Cache locally
            localStorage.setItem('jmc_accounts', JSON.stringify(state.accounts));
            localStorage.setItem('jmc_clients', JSON.stringify(state.clients));
            localStorage.setItem('jmc_sales', JSON.stringify(state.sales));
            localStorage.setItem('jmc_catalog_items', JSON.stringify(state.catalog));
            localStorage.setItem('jmc_catalog_costs', JSON.stringify(state.catalogCosts));
            
            renderAll();
            
            const timeStr = new Date(remoteData.lastUpdated).toLocaleTimeString();
            updateFirebaseStatusUI('synced', `Última sincronización: ${timeStr} (${state.accounts.length} cuentas)`);
            if (!userInitiated) {
              showToast(`Sincronizado en vivo desde la nube (${timeStr})`, 'success');
            }
          }
        }
      } else {
        // Document doesn't exist yet on Firebase, upload initial data automatically!
        uploadAllToFirebase(false);
      }
    }, (error) => {
      console.error('Firestore listener error:', error);
      updateFirebaseStatusUI('error', `Error al escuchar Firestore: ${error.message}`);
    });
    
    updateFirebaseStatusUI('connected', `Conectado a ${config.projectId}`);
    if (userInitiated) {
      showToast('¡Conectado exitosamente a Firebase Firestore!', 'success');
      closeModal('firebase-modal');
    }
  } catch(err) {
    console.error('Error inicializando Firebase:', err);
    isFirebaseConnected = false;
    updateFirebaseStatusUI('error', `Error al inicializar Firebase: ${err.message}`);
    if (userInitiated) showToast(`Error al conectar Firebase: ${err.message}`, 'error');
  }
}

function scheduleFirebaseSync() {
  if (!isFirebaseConnected || !firestoreDb || isSyncingRemote) return;
  if (syncDebounceTimer) clearTimeout(syncDebounceTimer);
  
  updateFirebaseStatusUI('syncing', 'Guardando cambios en la nube...');
  syncDebounceTimer = setTimeout(() => {
    syncStateToFirebase();
  }, 450);
}

async function syncStateToFirebase() {
  if (!isFirebaseConnected || !firestoreDb || isSyncingRemote) return;
  try {
    isSyncingRemote = true;
    const now = new Date().toISOString();
    state.lastFirebaseUpdate = now;
    
    await firestoreDb.collection('goldenpro').doc('main_data').set({
      accounts: state.accounts,
      clients: state.clients,
      sales: state.sales,
      catalog: state.catalog,
      catalogCosts: state.catalogCosts,
      lastUpdated: now,
      version: 'GoldenPro_v1'
    });
    
    isSyncingRemote = false;
    const timeStr = new Date(now).toLocaleTimeString();
    updateFirebaseStatusUI('synced', `Guardado en Firestore a las ${timeStr}`);
  } catch(err) {
    isSyncingRemote = false;
    console.error('Error guardando en Firestore:', err);
    updateFirebaseStatusUI('error', `Error al guardar en Firestore: ${err.message}`);
  }
}

async function uploadAllToFirebase(manual = true) {
  if (!isFirebaseConnected || !firestoreDb) {
    showToast('Debes conectar Firebase primero antes de subir datos.', 'warning');
    return;
  }
  
  if (manual) {
    if (!confirm(`¿Deseas subir todos tus datos locales actuales (${state.accounts.length} cuentas) a Firebase? Esto creará o actualizará la base de datos en la nube.`)) {
      return;
    }
  }
  
  try {
    updateFirebaseStatusUI('syncing', 'Subiendo todos los datos a la nube...');
    const now = new Date().toISOString();
    state.lastFirebaseUpdate = now;
    
    await firestoreDb.collection('goldenpro').doc('main_data').set({
      accounts: state.accounts,
      clients: state.clients,
      sales: state.sales,
      catalog: state.catalog,
      catalogCosts: state.catalogCosts,
      lastUpdated: now,
      version: 'GoldenPro_v1'
    });
    
    updateFirebaseStatusUI('synced', `Subidos exitosamente ${state.accounts.length} cuentas a la nube`);
    showToast(`¡${state.accounts.length} cuentas subidas exitosamente a Firebase!`, 'success');
  } catch(err) {
    console.error('Error en uploadAllToFirebase:', err);
    updateFirebaseStatusUI('error', `Error al subir: ${err.message}`);
    showToast(`Error al subir a Firebase: ${err.message}`, 'error');
  }
}

async function downloadAllFromFirebase() {
  if (!isFirebaseConnected || !firestoreDb) {
    showToast('Debes conectar Firebase primero antes de descargar.', 'warning');
    return;
  }
  
  if (!confirm('¿Deseas descargar los datos de Firebase y reemplazar los datos locales de este navegador?')) {
    return;
  }
  
  try {
    updateFirebaseStatusUI('syncing', 'Descargando datos de la nube...');
    const doc = await firestoreDb.collection('goldenpro').doc('main_data').get();
    if (!doc.exists) {
      showToast('No se encontró información en la base de datos de Firebase.', 'warning');
      return;
    }
    
    const remoteData = doc.data();
    state.lastFirebaseUpdate = remoteData.lastUpdated || new Date().toISOString();
    if (Array.isArray(remoteData.accounts)) state.accounts = remoteData.accounts;
    if (Array.isArray(remoteData.clients)) state.clients = remoteData.clients;
    if (Array.isArray(remoteData.sales)) state.sales = remoteData.sales;
    if (Array.isArray(remoteData.catalog)) state.catalog = remoteData.catalog;
    if (remoteData.catalogCosts) state.catalogCosts = remoteData.catalogCosts;
    
    saveAccounts();
    saveClients();
    saveSales();
    saveCatalog();
    saveCatalogCosts();
    
    renderAll();
    updateFirebaseStatusUI('synced', `Descargado exitosamente (${state.accounts.length} cuentas)`);
    showToast(`¡Datos descargados con éxito! (${state.accounts.length} cuentas)`, 'success');
  } catch(err) {
    console.error('Error descargando de Firebase:', err);
    updateFirebaseStatusUI('error', `Error al descargar: ${err.message}`);
    showToast(`Error al descargar: ${err.message}`, 'error');
  }
}

function disconnectFirebase() {
  if (!confirm('¿Deseas desconectar Firebase de este navegador? La aplicación volverá a guardar los datos solo en la memoria local.')) {
    return;
  }
  
  if (unsubscribeFirestore) {
    unsubscribeFirestore();
    unsubscribeFirestore = null;
  }
  
  isFirebaseConnected = false;
  firestoreDb = null;
  firebaseApp = null;
  currentFirebaseConfig = null;
  localStorage.removeItem('goldenpro_firebase_config');
  
  updateFirebaseStatusUI('disconnected', 'Modo local activo.');
  showToast('Firebase desconectado. GoldenPro funciona en modo local.', 'info');
}

function openFirebaseModal() {
  const config = getStoredFirebaseConfig();
  if (config) {
    const rawEl = document.getElementById('fb-raw-config');
    if (rawEl && !rawEl.value) {
      rawEl.value = JSON.stringify(config, null, 2);
    }
    ['apiKey', 'projectId', 'authDomain', 'storageBucket', 'messagingSenderId', 'appId'].forEach(key => {
      const input = document.getElementById(`fb-input-${key}`);
      if (input && config[key]) input.value = config[key];
    });
  }
  
  if (isFirebaseConnected) {
    updateFirebaseStatusUI('connected', `Conectado a ${currentFirebaseConfig?.projectId || ''}`);
  } else {
    updateFirebaseStatusUI('disconnected');
  }
  
  openModal('firebase-modal');
}

function parseFirebaseSnippet(text) {
  if (!text || typeof text !== 'string') return null;
  
  // Try direct JSON parse first
  try {
    const parsed = JSON.parse(text);
    if (parsed && (parsed.apiKey || parsed.projectId)) return parsed;
  } catch(e) {}
  
  // Extract key-value pairs using regex
  const config = {};
  const keys = ['apiKey', 'authDomain', 'projectId', 'storageBucket', 'messagingSenderId', 'appId'];
  
  keys.forEach(k => {
    const reg = new RegExp(`['"]?${k}['"]?\\s*:\\s*['"]([^'"]+)['"]`, 'i');
    const match = text.match(reg);
    if (match && match[1]) {
      config[k] = match[1].trim();
    }
  });
  
  if (config.apiKey && config.projectId) return config;
  return null;
}

function handleSaveFirebaseConfig(e) {
  if (e && e.preventDefault) e.preventDefault();
  
  const rawText = document.getElementById('fb-raw-config')?.value || '';
  let config = parseFirebaseSnippet(rawText);
  
  // Fallback to individual inputs
  if (!config || !config.apiKey || !config.projectId) {
    config = {
      apiKey: document.getElementById('fb-input-apiKey')?.value?.trim() || '',
      projectId: document.getElementById('fb-input-projectId')?.value?.trim() || '',
      authDomain: document.getElementById('fb-input-authDomain')?.value?.trim() || '',
      storageBucket: document.getElementById('fb-input-storageBucket')?.value?.trim() || '',
      messagingSenderId: document.getElementById('fb-input-messagingSenderId')?.value?.trim() || '',
      appId: document.getElementById('fb-input-appId')?.value?.trim() || ''
    };
  }
  
  if (!config.apiKey || !config.projectId) {
    showToast('Debes ingresar al menos el apiKey y el projectId de Firebase.', 'error');
    return;
  }
  
  initFirebase(config, true);
}

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchTerm = e.target.value;
      renderAccounts();
    });
  }

  const correosSearch = document.getElementById('correos-search');
  if (correosSearch) {
    correosSearch.addEventListener('input', () => {
      renderCorreos();
    });
  }

  const catalogSearch = document.getElementById('catalog-search');
  if (catalogSearch) {
    catalogSearch.addEventListener('input', () => {
      renderCatalogProfits();
    });
  }
  
  const clientsSearch = document.getElementById('clients-search');
  if (clientsSearch) {
    clientsSearch.addEventListener('input', () => {
      renderClients();
    });
  }
  
  renderAll();
  if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();

  // Auto-connect Firebase if credentials exist
  const storedFb = getStoredFirebaseConfig();
  if (storedFb) {
    initFirebase(storedFb, false);
  } else {
    updateFirebaseStatusUI('disconnected');
  }
});
