import Image from 'next/image'
import Link from 'next/link'
import Carousel from '@/components/Carousel'

export default function Home() {
  const testimonials = [
    {
      id: 1,
      text: "Victoria's expertise in Palm Coast real estate is unmatched. She helped us find our dream home!",
      author: "Sarah Johnson",
      image: '/images/testimonial1.jpg',
    },
    {
      id: 2,
      text: "Professional, knowledgeable, and always available. Highly recommend Victoria for any real estate needs.",
      author: "Michael Smith",
      image: '/images/testimonial2.jpg',
    },
  ]

  return (
    <div>
      <main>
        {/* Hero Section */}
        <section className="relative h-screen">
          <Image
            src="/images/hero-beach.jpg"
            alt="Palm Coast Beach"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30">
            <div className="container h-full flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-5xl md:text-7xl font-serif mb-6">
                Victoria Villano Evans
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Palm Coast Realtor
              </p>
              <button className="btn btn-primary">Explore Properties</button>
            </div>
          </div>
        </section>

        {/* Mission & Expertise Fold */}
        <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>
          <div className="container relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-serif mb-6 text-accent">Our Mission</h2>
                <p className="text-gray-600 text-lg mb-4">
                  To provide exceptional real estate experiences by delivering personalized service, expert guidance, and unwavering integrity. We are dedicated to helping our clients achieve their dreams, whether buying, selling, or investing in Palm Coast's luxury properties.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-serif mb-6 text-accent">Our Expertise</h2>
                <p className="text-gray-600 text-lg mb-4">
                  With over a decade of experience, we specialize in luxury and waterfront homes, market analysis, and strategic negotiations. Our deep local knowledge and commitment to excellence ensure our clients receive the best results in every transaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Luxury Living Image Grid Fold */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="container">
            <h2 className="text-4xl font-serif text-center mb-16 text-accent relative">
              <span className="relative z-10">Luxury Living in Palm Coast, Florida</span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent"></div>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src="/images/property1.jpg" alt="Luxury Living 1" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src="/images/property2.jpg" alt="Luxury Living 2" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src="/images/property3.jpg" alt="Luxury Living 3" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src="/images/property4.jpg" alt="Luxury Living 4" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src="/images/property5.jpg" alt="Luxury Living 5" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src="/images/property6.jpg" alt="Luxury Living 6" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-serif mb-6">Meet Victoria</h2>
                <p className="text-gray-600 mb-6">
                  With over a decade of experience in Palm Coast real estate, Victoria Villano Evans brings unparalleled expertise and dedication to every client. Specializing in luxury properties and waterfront homes, she has consistently ranked among the top realtors in the area.
                </p>
                <Link href="/about" className="btn btn-primary inline-block">
                  Learn More
                </Link>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/agent1.jpg"
                  alt="Victoria Villano Evans"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Carousel */}
        <section className="py-24">
          <div className="container">
            <h2 className="text-4xl font-serif text-center mb-16 relative">
              <span className="relative z-10">What Clients Say</span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-accent"></div>
            </h2>
            <div className="relative pb-12">
              <Carousel
                items={testimonials.map(testimonial => (
                  <div key={testimonial.id} className="px-4">
                    <div className="max-w-2xl mx-auto text-center">
                      <div className="relative w-20 h-20 mx-auto mb-6">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover rounded-full"
                        />
                      </div>
                      <p className="text-xl italic mb-4">{testimonial.text}</p>
                      <p className="text-gray-600 mb-8">- {testimonial.author}</p>
                    </div>
                  </div>
                ))}
              />
            </div>
            <div className="text-center mt-8">
              <Link href="/testimonials" className="btn btn-primary">
                Read More Testimonials
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 
