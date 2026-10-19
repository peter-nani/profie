(() => {
  const themes = ['midnight','navy','nordic','violet','emerald','sunset','mono','ocean','sand','cyber','royal','rose'];
  try {
    const saved = localStorage.getItem('profile-theme');
    if (themes.includes(saved)) document.documentElement.dataset.theme = saved;
  } catch {}
})();
