import axios from 'axios';

export class Search {
  private fileUrl: string;

  constructor(fileUrl: string) {
    this.fileUrl = fileUrl;
  }
  
  /**
   * Retrieves the content of the file from the specified URL.
   * @returns {Promise<string | null >}
   */
  async getContent(): Promise<string | null > {
    const response = await axios.get(this.fileUrl).then(data => data.data).catch(err => console.log);
    return response ?? null;
  }
  
  /**
   * Searches for a function in the file by its name.
   * @param {string} functionName - function name that exists in the Telegram API
   * @returns {string} - returns the parameter of the function, and what it produces
   */
  async getFunction(functionName: string): Promise<string | null> {
    let res;
    const functionRegex = new RegExp(`\\b${functionName}\\s*\\([^)]*\\):[^;{]+(?=;)`, 'g');
    const functionFile = await this.getContent();
    if (functionFile === null) return null;
    res = await functionFile?.match?.(functionRegex);
    if (res?.[0] === undefined) return null;
    return res[0];
  }
  
  /**
   * This function returns a reference to the specified function. 
   * @param {string} functionName - name function
   * @returns {string} - returns a function reference
   */
  async getFunctionLink(functionName: string): Promise<string | null> {
    let res;
    const search = await this.getFunction(functionName);
    if (search === null)
    return null;
    else
    res = `https://core.telegram.org/bots/api#${functionName.toLowerCase()}`;
    return res;
  }
  
  /**
   * Returns a link to an object
   * @param {string} object - name object
   * @returns {string} - link to object
   */
  async getObject(objectName: string): Promise<string> {
    return `https://core.telegram.org/bots/api#${objectName.toLowerCase()}`;
  }
}