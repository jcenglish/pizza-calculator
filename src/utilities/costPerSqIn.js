export default function(diameter, price) {
  const area = Math.PI * (Number(diameter) / 2) ** 2
  return Number(price) / area
}
