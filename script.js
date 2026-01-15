const banner = document.getElementById("cookieBanner");
const btn = document.getElementById("acceptCookies");

const key = "cookiesAccepted";

function showOrHideBanner() {
  const accepted = localStorage.getItem(key);
  if (accepted === "yes") {
    banner.style.display = "none";
  } else {
    banner.style.display = "flex";
  }
}

btn.addEventListener("click", () => {
  localStorage.setItem(key, "yes");
  showOrHideBanner();
});

showOrHideBanner();