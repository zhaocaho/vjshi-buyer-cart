// TODO这里为了快速开发。没有对请求进行错误处理。

export const fetchData = async <T>(
  url: string,
  params?: Record<string, string | number | boolean>,
): Promise<T> => {
  let fullUrl = url;

  if (params && Object.keys(params).length > 0) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      searchParams.append(key, value.toString());
    }
    fullUrl += `?${searchParams.toString()}`;
  }

  const response = await fetch(fullUrl);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json() as Promise<T>;
};

export function createQueryString(numbers: number[], paramName: string = "vid"): string {
  if (numbers.length === 0) {
    return "";
  }

  const queryParams = numbers
    .map((num) => `${encodeURIComponent(paramName)}=${encodeURIComponent(num)}`)
    .join("&");
  return `?${queryParams}`;
}
