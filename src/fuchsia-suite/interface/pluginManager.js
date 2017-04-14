export default class PluginManager {

  constructor() {
    this.plugins = [];
    this.pluginCount = 0;
    this.receivedPlugins = [];
  }

  setPlugins(plugins) {
    this.plugins = plugins;
    this.pluginCount = plugins.length;
  }

  loadPlugins() {
    this.plugins.forEach((plugin) => {
      const js = document.createElement("script");
      js.type = "application/javascript";
      js.async = "async";
      js.src = plugin;
      document.body.appendChild(js);
    });
  }

  notify(plugin) {
    console.log("received plugin", plugin);
    console.log(this.pluginCount);
    this.receivedPlugins.push(plugin);
  }

  loadedPlugins() {
    return this.receivedPlugins.length === this.plugins.length;
  }

}