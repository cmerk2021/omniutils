var RunService = {}

function detectEnvironment() {
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Browser environment
    return {
      type: 'browser',
      userAgent: navigator.userAgent,
      isMobile: /Mobi|Android/i.test(navigator.userAgent),
    };
  } else if (typeof process !== 'undefined' && process.versions && process.versions.node) {
    // Node.js environment
    return {
      type: 'node',
      version: process.versions.node,
    };
  } else if (typeof Deno !== 'undefined') {
    // Deno environment
    return {
      type: 'deno',
      version: Deno.version.deno,
    };
  } else if (typeof globalThis !== 'undefined' && typeof globalThis.process !== 'undefined') {
    // Other environments that might use globalThis
    return {
      type: 'globalThis',
      isNode: typeof globalThis.process.versions.node !== 'undefined',
    };
  } else if (typeof importScripts === 'function') {
    // Web Worker environment
    return {
      type: 'web worker',
    };
  } else if (typeof process !== 'undefined' && process.versions && process.versions.electron) {
    // Electron environment
    return {
      type: 'electron',
      version: process.versions.electron,
    };
  } else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    // React Native environment
    return {
      type: 'react-native',
      userAgent: navigator.userAgent,
    };
  } else if (typeof window !== 'undefined' && window.cordova) {
    // Cordova environment
    return {
      type: 'cordova',
      userAgent: navigator.userAgent,
    };
  } else {
    // Unknown environment
    return {
      type: 'unknown',
    };
  }
}

const environment = detectEnvironment()

Object.defineProperty(RunService, "environment", {
    value: environment
});


const Heartbeat = {
  heartbeatCallback: null, // Property to hold the callback function
  isRunning: false, // Flag to control the heartbeat

  // Method to start the heartbeat
  startHeartbeat(callback) {
    this.heartbeatCallback = callback; // Set the callback function
    this.isRunning = true; // Set the running flag to true
    this.tick(); // Start the ticking process
  },

  // Method to stop the heartbeat
  stopHeartbeat() {
    this.isRunning = false; // Set the running flag to false
  },

  // Internal method to handle the heartbeat
  tick() {
    if (this.isRunning && this.heartbeatCallback) {
      this.heartbeatCallback(); // Call the callback function
      requestAnimationFrame(() => this.tick()); // Schedule the next tick
    }
  }
};

RunService.Heartbeat = Heartbeat


export default RunService