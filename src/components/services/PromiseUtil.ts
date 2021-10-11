class PromiseUtil {
  async wait(timeoutMs = 300): Promise<void> {
    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), timeoutMs);
    });
  }

  async returnDelayed<T>(response: T, timeoutMs = 300): Promise<T> {
    await this.wait(timeoutMs);
    return response;
  }
}

const instance = new PromiseUtil();

export default instance;