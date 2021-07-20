export function setCookie(name, value, { expires, path, domain, secure }) {
  var cookieStr = null;
  cookieStr = encodeURIComponent(name) + "=" + encodeURIComponent(value)
  if (expires) {
    cookieStr += ";" + "expires=" + afterDay(expires)
  }
  if (path) {
    cookieStr += ";" + "path=" + path
  }
  if (domain) {
    cookieStr += ";" + "domain=" + domain
  }
  if (secure) {
    cookieStr += ";" + "secure=" + secure
  }
  document.cookie = cookieStr;
}

export function getCookie(name) {
  var cookieName = encodeURIComponent(name);
  var start = document.cookie.indexOf(cookieName);
  var end = document.cookie.indexOf(start, ";")
  if (end == -1) {
      end = document.cookie.length;
  }
  var cookieValue = decodeURIComponent(document.cookie.substring(start + cookieName.length + 1, end));
  return cookieValue;
}

function afterDay(n) {
  var d = new Date();
  var day = d.getDate();
  d.setDate(day + n);
  return d;
}