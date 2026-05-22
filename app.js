// ── Theme Toggle ──────────────────────────────────────────
function toggleTheme() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('cq_theme', isDark ? 'dark' : 'light');
  updateThemeBtn();
}

function updateThemeBtn() {
  const btn = document.getElementById('themeBtn');
  if (!btn) return;
  btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
}

function initTheme() {
  const saved = localStorage.getItem('cq_theme');
  if (saved === 'dark') document.body.classList.add('dark');
  updateThemeBtn();
}

// ── Tab / Pill selectors ───────────────────────────────────
function selectTab(el, selector) {
  const parent = el.closest('.lang-tabs, .topic-pills-row, .diff-row');
  if (!parent) return;
  parent.querySelectorAll(selector).forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function selectMode(el) {
  document.querySelectorAll('.mode-tile').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

function selectDiff(el, level) {
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

// ── Stats Helpers ──────────────────────────────────────────
function getStats() {
  return {
    totalSolved:   parseInt(localStorage.getItem('cq_totalSolved')  || 0),
    totalCorrect:  parseInt(localStorage.getItem('cq_totalCorrect') || 0),
    streak:        parseInt(localStorage.getItem('cq_streak')       || 0),
    lastPlayed:    localStorage.getItem('cq_lastPlayed') || null,
    history:       JSON.parse(localStorage.getItem('cq_history')       || '[]'),
    topicProgress: JSON.parse(localStorage.getItem('cq_topicProgress') || '{}')
  };
}

function saveQuizResult(lang, topic, mode, difficulty, correct, total) {
  const stats = getStats();

  stats.totalSolved  += total;
  stats.totalCorrect += correct;

  const today = new Date().toDateString();
  if (stats.lastPlayed !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    stats.streak = stats.lastPlayed === yesterday ? stats.streak + 1 : 1;
  }

  if (!stats.topicProgress[topic]) stats.topicProgress[topic] = { solved: 0, correct: 0 };
  stats.topicProgress[topic].solved  += total;
  stats.topicProgress[topic].correct += correct;

  stats.history.unshift({
    lang, topic, mode, difficulty,
    score: `${correct}/${total}`,
    pct: Math.round((correct / total) * 100),
    date: getRelativeDate(new Date().toDateString())
  });
  if (stats.history.length > 10) stats.history.pop();

  localStorage.setItem('cq_totalSolved',   stats.totalSolved);
  localStorage.setItem('cq_totalCorrect',  stats.totalCorrect);
  localStorage.setItem('cq_streak',        stats.streak);
  localStorage.setItem('cq_lastPlayed',    today);
  localStorage.setItem('cq_history',       JSON.stringify(stats.history));
  localStorage.setItem('cq_topicProgress', JSON.stringify(stats.topicProgress));

  // Update daily goals progress after a quiz
  updateDailyGoalsProgress(total, mode);
}

function getRelativeDate(dateStr) {
  const today     = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (dateStr === today)     return 'Today';
  if (dateStr === yesterday) return 'Yesterday';
  return dateStr;
}

// ── Daily Goals ────────────────────────────────────────────
// Goals reset daily. Stored as { date, solvedToday, testModeDone, topicsDoneToday[] }
function getDailyGoals() {
  const today = new Date().toDateString();
  const raw   = localStorage.getItem('cq_dailyGoals');
  if (raw) {
    const parsed = JSON.parse(raw);
    if (parsed.date === today) return parsed;
  }
  // New day → reset
  const fresh = { date: today, solvedToday: 0, testModeDone: false, topicsDoneToday: [] };
  localStorage.setItem('cq_dailyGoals', JSON.stringify(fresh));
  return fresh;
}

function saveDailyGoals(goals) {
  localStorage.setItem('cq_dailyGoals', JSON.stringify(goals));
}

function updateDailyGoalsProgress(total, mode) {
  const goals = getDailyGoals();
  goals.solvedToday += total;
  if (mode && mode.toLowerCase().includes('test')) goals.testModeDone = true;
  saveDailyGoals(goals);
}

// Called from quiz page after topic is solved
function markTopicGoalDone(topic) {
  const goals = getDailyGoals();
  if (!goals.topicsDoneToday.includes(topic)) {
    goals.topicsDoneToday.push(topic);
    saveDailyGoals(goals);
  }
}

function renderDailyGoals() {
  const goalsList = document.getElementById('goalsList');
  const goalsBar  = document.getElementById('goalsBar');
  const goalsPct  = document.getElementById('goalsPct');
  if (!goalsList) return;

  const goals  = getDailyGoals();
  const stats  = getStats();

  const SOLVE_TARGET = 10;

  const goalDefs = [
    {
      icon: '📝',
      label: `Solve ${SOLVE_TARGET} questions`,
      check: () => goals.solvedToday >= SOLVE_TARGET,
      progress: () => {
        const done = Math.min(goals.solvedToday, SOLVE_TARGET);
        return `${done}/${SOLVE_TARGET}`;
      },
      pending: () => goals.solvedToday === 0
    },
    {
      icon: '⏱️',
      label: 'Try Test Mode once',
      check: () => goals.testModeDone,
      progress: () => goals.testModeDone ? 'Done ✓' : 'Pending',
      pending: () => !goals.testModeDone
    },
    {
      icon: '📚',
      label: 'Practice any topic',
      check: () => goals.topicsDoneToday.length > 0,
      progress: () => goals.topicsDoneToday.length > 0
        ? goals.topicsDoneToday.join(', ')
        : 'Pending',
      pending: () => goals.topicsDoneToday.length === 0
    }
  ];

  const completed = goalDefs.filter(g => g.check()).length;
  const pct       = Math.round((completed / goalDefs.length) * 100);

  if (goalsList) {
    if (goals.solvedToday === 0 && !goals.testModeDone && goals.topicsDoneToday.length === 0) {
      // No activity yet — show empty state + greyed out goals
      goalsList.innerHTML = `
        <div class="goals-empty">Complete a quiz to track your daily goals!</div>
        ${goalDefs.map(g => `
          <div class="goal-item goal-pending">
            <div class="goal-dot goal-dot-pending"></div>
            <div class="goal-info">
              <div class="goal-label">${g.icon} ${g.label}</div>
              <div class="goal-status">Not started</div>
            </div>
          </div>
        `).join('')}
      `;
    } else {
      goalsList.innerHTML = goalDefs.map(g => {
        const done = g.check();
        return `
          <div class="goal-item ${done ? 'goal-done' : 'goal-pending'}">
            <div class="goal-dot ${done ? 'goal-dot-done' : 'goal-dot-pending'}"></div>
            <div class="goal-info">
              <div class="goal-label">${g.icon} ${g.label}</div>
              <div class="goal-status ${done ? 'goal-status-done' : ''}">${g.progress()}</div>
            </div>
          </div>
        `;
      }).join('');
    }
  }

  if (goalsBar) {
    goalsBar.style.width = '0%';
    setTimeout(() => { goalsBar.style.width = pct + '%'; }, 300);
  }
  if (goalsPct) goalsPct.textContent = pct + '%';
}

// ── Dashboard Dynamic Render ───────────────────────────────
function renderDashboard() {
  const stats = getStats();

  // Greeting
  const helloEl = document.getElementById('dashHello');
  const subEl   = document.getElementById('dashSub');
  if (helloEl) helloEl.innerHTML = `Hello, <span>You!</span> 👋`;
  if (subEl) {
    subEl.textContent = stats.streak > 0
      ? `You're on a ${stats.streak}-day streak. Keep it going!`
      : `Welcome! Start a quiz to begin your streak.`;
  }

  // Stats tiles
  const accuracy = stats.totalSolved > 0
    ? Math.round((stats.totalCorrect / stats.totalSolved) * 100)
    : 0;

  const solvedEl   = document.getElementById('statSolved');
  const accuracyEl = document.getElementById('statAccuracy');
  const streakEl   = document.getElementById('statStreak');
  const badgesEl   = document.getElementById('statBadges');

  if (solvedEl)   solvedEl.textContent   = stats.totalSolved;
  if (accuracyEl) accuracyEl.textContent = accuracy + '%';
  if (streakEl)   streakEl.textContent   = stats.streak;

  // Badges count (simple milestone badges)
  if (badgesEl) {
    let badges = 0;
    if (stats.totalSolved >= 10)  badges++;
    if (stats.totalSolved >= 50)  badges++;
    if (stats.totalSolved >= 100) badges++;
    if (stats.streak >= 3)  badges++;
    if (stats.streak >= 7)  badges++;
    if (accuracy >= 70 && stats.totalSolved >= 10) badges++;
    badgesEl.textContent = badges;
  }

  // Recent Activity
  const actList = document.getElementById('activityList');
  if (actList) {
    if (stats.history.length === 0) {
      actList.innerHTML = `
        <div class="dash-empty-state">
          <div class="dash-empty-icon">📭</div>
          <div>No activity yet — start a quiz!</div>
        </div>`;
    } else {
      const topicEmoji = {
        DSA:'🌳', OOPs:'🧩', DBMS:'🗄️', OS:'⚙️',
        CN:'🌐', 'Web Dev':'💻', SQL:'📋', Aptitude:'🧠'
      };
      actList.innerHTML = stats.history.map(h => `
        <div class="act-item">
          <div class="act-icon" style="background:var(--purple-soft)">${topicEmoji[h.topic] || '📝'}</div>
          <div class="act-info">
            <div class="act-name">${h.topic} · ${h.difficulty}</div>
            <div class="act-meta">${h.date} · ${h.mode} · ${h.lang}</div>
          </div>
          <div class="act-score" style="color:${h.pct >= 70 ? 'var(--success)' : h.pct >= 50 ? 'var(--warning)' : 'var(--danger)'}">${h.score}</div>
        </div>
      `).join('');
    }
  }

  // Topic Progress
  const progList = document.getElementById('progressList');
  if (progList) {
    const topics = Object.keys(stats.topicProgress);
    if (topics.length === 0) {
      progList.innerHTML = `
        <div class="dash-empty-state">
          <div class="dash-empty-icon">📊</div>
          <div>No progress yet — complete a quiz!</div>
        </div>`;
    } else {
      progList.innerHTML = topics.map(topic => {
        const t   = stats.topicProgress[topic];
        const pct = Math.round((t.correct / t.solved) * 100);
        return `
          <div>
            <div class="prog-item-label">
              <span class="prog-item-name">${topic}</span>
              <span class="prog-item-pct">${pct}%</span>
            </div>
            <div class="prog-bar">
              <div class="prog-fill" style="width:${pct}%"></div>
            </div>
          </div>`;
      }).join('');
    }
  }

  // Daily Goals
  renderDailyGoals();
}

// ── Animate progress bars ──────────────────────────────────
function animateProgressBars() {
  document.querySelectorAll('.prog-fill').forEach(bar => {
    const target = bar.style.width;
    bar.style.width = '0%';
    setTimeout(() => { bar.style.width = target; }, 300);
  });
}

// ── Quick Start → quiz.html ────────────────────────────────
function startQuiz() {
  const langEl  = document.querySelector('.lang-tab.active');
  const topicEl = document.querySelector('.topic-pill.active');
  const modeEl  = document.querySelector('.mode-tile.active .mode-tile-title');
  const diffEl  = document.querySelector('.diff-btn.active');

  localStorage.setItem('cq_lang',       langEl  ? langEl.textContent  : 'Python');
  localStorage.setItem('cq_topic',      topicEl ? topicEl.textContent : 'DSA');
  localStorage.setItem('cq_mode',       modeEl  ? modeEl.textContent  : 'Practice');
  localStorage.setItem('cq_difficulty', diffEl  ? diffEl.textContent.replace(/[^a-zA-Z]/g,'') : 'Easy');

  window.location.href = 'quiz.html';
}

// ── Clear all data ─────────────────────────────────────────
function clearAllData() {
  if (!confirm('Reset all your progress? This cannot be undone.')) return;
  ['cq_totalSolved','cq_totalCorrect','cq_streak','cq_lastPlayed',
   'cq_history','cq_topicProgress','cq_dailyGoals'].forEach(k => localStorage.removeItem(k));
  renderDashboard();
  animateProgressBars();
}

// ── Init ──────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderDashboard();
  animateProgressBars();
});