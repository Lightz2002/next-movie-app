export function handleError(e: unknown) {
  console.log(e);
}

export function getParam(param: string) {
  // Create a URL object from the current page's URL
  const url = new URL(window.location.href);

  // Access individual parameters
  const paramValue = url.searchParams.get(param); // "value1"

  return paramValue;
}

export function getImageUrl(path: string) {
  // Create a URL object from the current page's URL
  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  return `${baseImageUrl}/${path}`;
}

export function getDateYear(date: string) {
  return new Date(date).getFullYear() ?? "Invalid Date";
}
