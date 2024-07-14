export default function getItemImage(categorie:string, url: string): string {
  const idRegExp = /\/([0-9]*)\/$/;
  const idRegExpResult = url.match(idRegExp);
  const id = idRegExpResult ? idRegExpResult[1] : '';
  const src = `https://starwars-visualguide.com/assets/img/${categorie}/${id}.jpg`
  return src
}
