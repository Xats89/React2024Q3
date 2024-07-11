export default function getPage(url: string): string {
  const idRegExp = /[?&]page=(\d+)/;
  const idRegExpResult = url.match(idRegExp);
  const page = idRegExpResult ? idRegExpResult[0] : '';
  return page
}