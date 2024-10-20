const createLogger = (moduleName: string) => {
  
  const log = (message: string) => {
    console.log(`[LOG] ${new Date().toISOString()} [${moduleName}]: ${message}`);
  };

  const error = (message: string) => {
    console.error(`[ERROR] ${new Date().toISOString()} [${moduleName}]: ${message}`);
  };

  return {
    log,
    error,
  };
};

export default createLogger;
