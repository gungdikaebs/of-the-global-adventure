export const reviews = [
  {
    name: 'Ravi',
    review:
      '"We had an amazing time with this travel company! From the moment we landed, everything was perfectly organized. The guide was very knowledgeable and took us to stunning spots like Uluwatu and Ubud. The transportation was comfortable, and we felt well taken care of. Highly recommended!"',
    rating: 5,
    date: 'November 10, 2024',
    img: 'https://media.istockphoto.com/id/1540766473/photo/young-adult-male-design-professional-smiles-for-camera.jpg?s=612x612&w=0&k=20&c=BbwgfMOtFOIJn1Km-ASix_EBbF9SHW5h0FtWbna5nFk='
  },
  {
    name: 'Emily',
    review:
      '"Traveling with kids can be tricky, but this company made it so easy! Our family had a wonderful time exploring Bali’s beaches and temples. The driver was super friendly and patient with our kids. We’ll definitely book with them again."',
    rating: 5,
    date: 'October 22, 2024',
    img: 'https://st4.depositphotos.com/13193658/27067/i/450/depositphotos_270674086-stock-photo-beautiful-smiling-teenage-girl-looking.jpg'
  },
  {
    name: 'John',
    review:
      '"I had to plan a last-minute trip, and this company came through! They quickly arranged a custom itinerary that suited my schedule. There was a slight delay at one of the pick-up points, but they handled it professionally. Overall, I’m very satisfied with their service."',
    rating: 4,
    date: 'November 5, 2024',
    img: 'https://img.freepik.com/free-photo/medium-shot-smiley-man-outdoors_23-2149201362.jpg'
  },
  {
    name: 'Ananya',
    review:
      '"I loved how detailed and affordable their tour packages are. They covered all the must-visit places in Bali and even included some hidden gems. The guide shared fascinating insights about Balinese culture. I’d book with them again without hesitation!"',
    rating: 5,
    date: 'October 30, 2024',
    img: 'https://photosnow.org/wp-content/uploads/2024/04/cute-girl-photo_5.jpg'
  },
  {
    name: 'Sarah',
    review:
      '"My partner and I booked a honeymoon package, and it exceeded our expectations! From the candlelight dinner on the beach to the private tours of scenic spots, every detail was perfect. Thank you for making our trip so memorable!"',
    rating: 4.5,
    date: 'November 15, 2024',
    img: 'https://media.istockphoto.com/id/506879484/photo/no-make-up-selfie.jpg?s=612x612&w=0&k=20&c=IwxeUoptuQcg9mFRxRs3azYVGziN-AwyH7b-jbi-tgY='
  }
]

export const countRating = (rating) => {
  return reviews.filter((review) => review.rating === rating).length
}
