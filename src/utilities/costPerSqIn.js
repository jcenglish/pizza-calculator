export default function(diameter, price) {
  const area = Math.PI * (Number(diameter) / 2) ** 2
  console.log(diameter + ", " + price)
  return Number(price) / area
}
