export const reviews = [
  {
    name: 'Jovian Nanda Sismawan',
    review: 'Mantap, keren banget',
    rating: 5,
    date: '2021-08-17'
  },
  {
    name: 'Jovian Nanda Sismawan',
    review: 'Mantap, keren banget',
    rating: 5,
    date: '2021-08-17'
  },
  {
    name: 'Jovian Nanda Sismawan',
    review: 'Mantap, keren banget',
    rating: 4,
    date: '2021-08-17'
  }
]

export const countRating = (rating) => {
  return reviews.filter((review) => review.rating === rating).length
}
