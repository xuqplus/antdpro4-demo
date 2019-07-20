import request from '@/utils/request';

export async function queryA02(): Promise<any> {
  return request('/api/aaa/a02');
}
