export default function dateConverter(data) {
  const arrDate = [['Date', 'Value']];

  data.map(d => {
    const { createdAt, value } = d;
    let convertDate = createdAt.split(' ')[0].split(/\//);
    convertDate = [convertDate[1], convertDate[0], convertDate[2]].join('/');

    arrDate.push([new Date(convertDate), value]);
  });
  return arrDate;
}
