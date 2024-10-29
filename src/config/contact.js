// 6282266619405
const whatsapp = {
  numberShow: '+6281213736625',
  number: '6281213736625'
}
const email = {
  name: 'offtheglobaladventure@gmail.com'
}
const contact = 'https://wa.me/' + whatsapp.number

function contactTemplate(place, placeType) {
  place = place.replace(/ /g, '%20')
  placeType = placeType.toLowerCase()

  if (placeType == 'destination') {
    return (
      contact +
      '/?text=Hello%20%2AOff%20The%20Global%20Adventure!%2A%2C%20%0AI%20would%20like%20to%20ask%20about%20the%20%2A' +
      place +
      '%20Destination%2A.%20Could%20you%20explain%20it%20in%20more%20detail%3F'
    )
  } else if (placeType == 'restaurant') {
    return (
      contact +
      '/?text=Hello%20%2AOff%20The%20Global%20Adventure!%2A%2C%20%0AI%20would%20like%20to%20ask%20about%20the%20%2A' +
      place +
      '%20Restaurant%2A.%20Could%20you%20explain%20it%20in%20more%20detail%3F'
    )
  } else if (placeType == 'hotel') {
    return (
      contact +
      '/?text=Hello%20%2AOff%20The%20Global%20Adventure!%2A%2C%20%0AI%20would%20like%20to%20ask%20about%20the%20%2A' +
      place +
      '%20Hotel%2A.%20Could%20you%20explain%20it%20in%20more%20detail%3F'
    )
  }
}
export { whatsapp, email, contact, contactTemplate }
