import OmniUtils from "./omniutils.mjs";
var tempExport

try {
  OmniUtils.internal.debug("HttpClient module imported.")
  tempExport = class HttpClient {
    constructor() {
      this.baseUrl = '';
    }
  
    setBaseUrl(baseUrl) {
      this.baseUrl = baseUrl;
    }
  
    async get(endpoint, options = {}) {
      return this.request('GET', endpoint, options);
    }
  
    async post(endpoint, data, options = {}) {
      return this.request('POST', endpoint, { ...options, body: data });
    }
  
    async put(endpoint, data, options = {}) {
      return this.request('PUT', endpoint, { ...options, body: data });
    }
  
    async patch(endpoint, data, options = {}) {
      return this.request('PATCH', endpoint, { ...options, body: data });
    }
  
    async delete(endpoint, options = {}) {
      return this.request('DELETE', endpoint, options);
    }
  
    async request(method, endpoint, options = {}) {
      const url = new URL(endpoint, this.baseUrl);
  
      // Add query parameters
      Object.entries(options.params || {}).forEach(([key, value]) => url.searchParams.append(key, value));
  
      const headers = {
        ...options.headers,
      };
  
      const response = await fetch(url.toString(), {
        method,
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
      }
  
      return response.json();
    }
  }
} catch (error) {
  OmniUtils.internal.error(error)
}

export default tempExport