export default function getPage(url: string | null | undefined): string {
  if(url) {
    const idRegExp = /page=(\d+)/;
    const idRegExpResult = url.match(idRegExp);
    const page = idRegExpResult ? idRegExpResult[0] : '';
    return page
  }
  return ''
}