import { HttpPostClient } from 'data/protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call httpPostClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post(url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }
    const url = 'any_url'
    const httPostClientSpy = new HttpPostClientSpy()
    // sut = system under test
    const sut = new RemoteAuthentication(url, httPostClientSpy)
    await sut.auth()
    expect(httPostClientSpy.url).toBe(url)
  })
})
