import { HttpPostClientSpy } from '../../test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call httpPostClient with correct URL', async () => {
    const url = 'any_url'
    const httPostClientSpy = new HttpPostClientSpy()
    // sut = system under test
    const sut = new RemoteAuthentication(url, httPostClientSpy)
    await sut.auth()
    expect(httPostClientSpy.url).toBe(url)
  })
})
