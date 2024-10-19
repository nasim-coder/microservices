class Logger {
  private moduleName: string;

  constructor(moduleName: string) {
    this.moduleName = moduleName;
  }

  public log(message: string) {
    console.log(`[LOG] ${new Date().toISOString()} [${this.moduleName}]: ${message}`);
  }

  public error(message: string) {
    console.error(`[ERROR] ${new Date().toISOString()} [${this.moduleName}]: ${message}`);
  }
}

export default Logger;
