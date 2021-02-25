const canActive = (to, from, next) => {
  const { location } = to;
  if (to.meta.auth) {
    if (sessionStorage.getItem("auth") !== null) {
      console.log("it run "+ sessionStorage.getItem("auth"))
      // next()
      const permission_urls = JSON.parse(sessionStorage.getItem('auth')).data.permission.modules.map(m => {
        if (m.functions.some(s => s.name_identified === "UNALLOW")) {
          return
        } else {
          return m.url
        }
      });

      if (permission_urls.indexOf(location.pathname) > -1 || location.pathname === "/" || permission_urls.some(s => location.pathname.includes(s))) {
        next();
      } else {
        window.location.href = `/error?error=401`;
      }
    } else {
      window.location.href = `/login?returnUrl=${location.pathname}`;
    }
  } else {
    next();
  }
};
export default canActive
