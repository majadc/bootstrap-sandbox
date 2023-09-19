const ssExtractorReboot = document.getElementById("mdSSExtractorReboot");
if (ssExtractorReboot !== null && ssExtractorReboot !== "undefined") {
  const jsonDataUrlReboot = "./json/bootstrap-reboot.json";
  const styleFileNameReboot = "bootstrap-reboot.css";

  const ssSelectorListReboot = document.getElementById(
    "mdSSESelectorListReboot"
  );

  const selectorLoaderReboot = new JsonSelectorLoader(
    jsonDataUrlReboot,
    ssSelectorListReboot
  );
  selectorLoaderReboot.load();

  SelectorsStyleExtractorApp.init(ssExtractorReboot, styleFileNameReboot);
}
