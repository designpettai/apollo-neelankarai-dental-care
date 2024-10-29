// import React from 'react';
// import { ContentCarousel } from '@/components/Content-Carousel';
// import johnImage from '@/images/avatars/giordano-sagucio.jpg';
// import janeImage from '@/images/avatars/giordano-sagucio.jpg';
// import aliceImage from '@/images/avatars/giordano-sagucio.jpg';

// const items = [
//   {
//     id: '1',
//     name: 'John Doe',
//     role: 'Developer',
//     review: 'This is an amazing product! Highly recommend it.',
//     image: johnImage.src,
//   },
//   {
//     id: '2',
//     name: 'Jane Smith',
//     role: 'Designer',
//     review: 'Fantastic experience, loved every moment of it!',
//     image: janeImage.src,
//   },
//   {
//     id: '3',
//     name: 'Alice Johnson',
//     role: 'Project Manager',
//     review: 'An excellent service that exceeded my expectations.',
//     image: aliceImage.src,
//   },
// ];

// export function Greview() {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">User Reviews</h1>
//       <ContentCarousel 
//         items={items} 
//         autoPlay 
//         interval={3000} 
//         className="bg-gray-100 p-4 rounded" 
//       />
//     </div>
//   );
// }
import React from 'react';
import johnImage from '@/images/avatars/giordano-sagucio.jpg';
import janeImage from '@/images/avatars/cathlene-burrage.jpg';
import aliceImage from '@/images/avatars/parker-johnson.jpg';
import { Container } from '@/components/Container';

export function Greview() {
  const summary = "Patients consistently rave about the exceptional care provided at the dental hospital, noting the comprehensive range of services offered, from preventative care to complex surgeries. The facility is praised for its state-of-the-art technology and clean, welcoming environment. Many appreciate the easy-to-navigate online appointment system and the prompt communication from the staff. The knowledgeable and compassionate dental team goes above and beyond to ensure patients feel informed and comfortable during their visits. Overall, the excellent patient care, affordability, and extensive treatment options make this dental hospital a highly recommended choice for anyone seeking top-notch dental services.";

  const reviews = [
    {
      name: "Hannah Lee",
      rating: 5,
      comment: "Excellent quality of clothes. The store staff are knowledgeable and helpful...",
      imgSrc: johnImage.src
    },
    {
      name: "Tom Walker",
      rating: 5,
      comment: "Loved all the outfits especially the sweaters. I bought this amazing cashmere sweater...",
      imgSrc: janeImage.src
    },
    {
      name: "Sophia Brooks",
      rating: 5,
      comment: "My go-to place for shopping. Love the new bags and all new collections...",
      imgSrc: aliceImage.src
    },
  ];

  const rating = "247+";
  const reviewCount = 250;

  return (
    <section className="w-full max-w-7xl p-6 m-auto">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-gray-800">Our Customers' Reviews</h1>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <span className="text-yellow-400 text-xl">⭐⭐⭐⭐⭐</span>
            <p className="text-gray-600">4.9 rating from {reviewCount} reviews</p>
            <a
              href="https://www.google.com/maps/place/Apollo+Dental+Clinic+OMR+Padur+%7C+Invisalign+Provider+%7C+Best+Dental+Clinic+in+OMR+%7C+Dental+Laser+%26+Implant+Center/@12.8068947,80.2224549,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525196b51eb6f7:0x864b1dd15f681180!8m2!3d12.8068947!4d80.2250298!16s%2Fg%2F11y3kcq_d3?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="ml-4 bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-200 flex-1 text-right ">
                Share Your Review
              </button>
            </a>
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 mb-8">
          <h2 className="text-2xl font-semibold mb-2">Customer Reviews</h2>
          <p className="text-gray-700 mb-4">{summary}</p>
          <div className="flex items-center">
            {[
              "https://embedsocial.com/admin/uploads/custom/ff915f25624d817428c1c7518adea317.jpg",
              "https://embedsocial.com/admin/uploads/custom/281c738b6cf40e025265758d3a7b2782.jpg",
              "https://embedsocial.com/admin/uploads/custom/12ceba85d34940baae1534e8371e65b0.jpg"
            ].map((src, index) => (
              <img
                key={index}
                className="w-10 h-10 rounded-full border border-gray-300 mr-[-8px] object-cover"
                src={src}
                alt={`Profile ${index + 1}`}
              />
            ))}
            <span className="font-bold text-white bg-gray-800 rounded-full flex items-center justify-center h-10 w-10">{rating}</span>
            <span className="text-sm flex-1 text-right italic text-gray-600">based on {reviewCount} customer reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center space-x-4 mb-4">
                <img src={review.imgSrc} alt="Profile" className="w-10 h-10 rounded-full border border-gray-300 object-cover" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                  <span className="text-yellow-400">{'⭐'.repeat(review.rating)}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.comment}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}


