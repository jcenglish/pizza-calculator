export default function(diameter, price) {
  let area = Math.PI * (Number(diameter) / 2) ** 2
  console.log(area)
  return Number(price) / area
}
