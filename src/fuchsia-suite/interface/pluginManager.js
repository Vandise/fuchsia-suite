export default class PluginManager {

  constructor() {
    this.plugins = [];
    this.pluginCount = 0;
    this.registeredPlugins = [];
    this.loadedCount = 0;
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
      js.onload = this.loaded.bind(this);
      document.body.appendChild(js);
    });
  }

  loaded() {
    this.loadedCount += 1;
  }  

  register(plugin) {
    this.registeredPlugins.push(plugin);
  }

  loadedPlugins() {
    console.log(this.registeredPlugins.length, this.plugins.length, this.loadedCount, this.plugins.length);
    return (
      this.registeredPlugins.length === this.plugins.length
        &&
      this.loadedCount === this.plugins.length
    );
  }

}