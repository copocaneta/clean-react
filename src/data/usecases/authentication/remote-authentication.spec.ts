import { HttpPostClient } from 'data/protocols/http/http-post-client';
import { RemoteAuthentication } from './remote-authentication';

describe('RemoteAuthentication', () => {
  test('Should call http client with correct URL', async () => {
    class HttpClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
        return Promise.resolve();
      }
    }
    const url = 'any_url';
    const httPostClientSpy = new HttpClientSpy();
    // sut = system under test
    const sut = new RemoteAuthentication(url, httPostClientSpy);
    await sut.auth();
    expect(httPostClientSpy.url).toBe(url);
  });
});
