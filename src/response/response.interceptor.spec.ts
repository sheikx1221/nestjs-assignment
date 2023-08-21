import { ResponseInterceptor } from './response.interceptor';

describe('RequestInterceptor', () => {
  it('should be defined', () => {
    expect(new ResponseInterceptor()).toBeDefined();
  });
});
