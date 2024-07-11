export default function getPage(url: string): string {
  const idRegExp = /\/([0-9]*)\/$/;
  const idRegExpResult = url.match(idRegExp);
  const page = idRegExpResult ? idRegExpResult[1] : '';
  return page
}