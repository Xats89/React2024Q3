export default function getItemId(url: string | undefined): string {
  if (url) {
    const idRegExp = /\/([0-9]*)\/$/;
    const idRegExpResult = url.match(idRegExp);
    const page = idRegExpResult ? idRegExpResult[1] : '';
    return page
  }
  return ''
}