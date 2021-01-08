export const browserNames = {
    firefox: "firefox",
    chrome: "chrome",
    safari: "safari",
    trident: "trident",
    edge: "edge",
    edg: "edg",
    opr: "opr"
  };
  
  /**
   * This is not a generally recommended approach.
   * The userAgent string can be "spoofed" easily.
   * However in this case it's to aid end-user and
   * reduce error reports
   * @param {String} agent
   */
  export function browserCheck(agent, vendor) {
    const browserNameFound = Object.keys(browserNames).find(name => {
      const regExp = new RegExp(name, "i");
  
      if (regExp.test("chrome", "i")) {
        return !!window.chrome;
      }
  
      if (regExp.test("opr", "i")) {
        return !!window.opr;
      }
  
      return regExp.test(agent, "i");
    });
  
    // Safari and Chrome have very similar userAgents.
    // use the vendor property to ensure it's Chrome.
    if (
      browserNameFound === browserNames.safari &&
      vendor &&
      vendor.indexOf("Google") > -1
    ) {
      return browserNames.chrome;
    }
  
    return browserNameFound;
  }
  
  export const isChromeBrowser = (
    agent = window.navigator.userAgent,
    vendor = window.navigator.vendor
  ) => browserCheck(agent, vendor) === browserNames.chrome;
  