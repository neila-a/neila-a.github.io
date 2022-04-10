/* global Yun, CONFIG */

Yun.boot = {
  /**
   * 显示版权
   */
  copyright() {
    console.log(
      `%c ☁️ neila ${CONFIG.version} %c https://github.com/neila-a/neila-a.github.io/`,
      "color: white; background: #0078E7; padding:5px 0;",
      "padding:4px;border:1px solid #0078E7;"
    );
  },
};

function initPage() {
  Yun.utils.registerToggleSidebar();
  Yun.utils.registerScrollPercent();

  Yun.utils.insertCopyCodeBtn();
  Yun.utils.wrapTable();
}

Yun.boot.copyright();
document.addEventListener("DOMContentLoaded", initPage);