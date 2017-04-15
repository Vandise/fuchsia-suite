(function(fuchsia) {

  console.log("1", fuchsia);

  fuchsia.ComponentManager.addPage("test1", () => {
    return "loaded 1";
  });

  fuchsia.SideBarManager.addSideBarElement("Home", "#");

  fuchsia.PluginManager.register({
    name: "1"
  });
})(window.FuchsiaSuite.Interface);