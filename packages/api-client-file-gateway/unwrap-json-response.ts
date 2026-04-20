export function unwrapJsonResponse<T>(response: unknown): T {
  return response as T;
}
