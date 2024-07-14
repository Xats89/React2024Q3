export default function getDetailsPage(url: string | null | undefined): string {
  if(url) {
    const idRegExp = /details=(\d+)/;
    const idRegExpResult = url.match(idRegExp);
    const page = idRegExpResult ? idRegExpResult[0] : '';
    return page
  }
  return ''
}