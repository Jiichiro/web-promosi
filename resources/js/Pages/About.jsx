import { Link } from "@inertiajs/react"
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Navbar from "../components/Navbar"

export default function AboutPage({isLogin, user}) {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <Navbar login={isLogin} user={user} className='mx-4'/>

      {/* Hero Section */}
      <div className="bg-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-white mb-4">About Us</h1>
            <nav className="text-slate-400">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About Us</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="images/logo.png"
              alt="Digital Services"
              width={500}
              height={400}
              className="rounded-lg"
            />  
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Memenuhi Kebutuhan Digital Anda dengan Solusi Terbaik
            </h2>
            <p className="text-slate-400 mb-6">
              QuicsX hadir untuk memberikan solusi digital terlengkap untuk berbagai kebutuhan Anda. 
              Dengan pengalaman dan dedikasi tim kami, kami berkomitmen untuk memberikan layanan 
              terbaik dan hasil yang memuaskan.
            </p>
            <p className="text-slate-400 mb-6">
              Kami memahami bahwa setiap kebutuhan digital adalah unik, oleh karena itu kami 
              menyediakan berbagai layanan yang dapat disesuaikan dengan kebutuhan Anda.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Perjalanan Kami</h2>
        <div className="flex justify-center gap-4 mb-12">
          {[2020, 2021, 2022, 2023].map((year) => (
            <div
              key={year}
              className={`px-6 py-2 rounded-full ${
                year === 2023
                  ? "bg-blue-500 text-white"
                  : "bg-slate-900 text-slate-400"
              }`}
            >
              {year}
            </div>
          ))}
        </div>
        <div className="bg-slate-900 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-4">2023 - Ekspansi Layanan Digital</h3>
          <p className="text-slate-400">
            Tahun ini menandai pencapaian penting dalam perjalanan kami dengan peningkatan 
            signifikan dalam jangkauan layanan dan kepuasan pelanggan. Kami terus berinovasi 
            untuk memberikan solusi digital terbaik.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Tim Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Ahmad Rizki",
              role: "CEO & Founder",
              image: "/placeholder.svg?height=200&width=200"
            },
            {
              name: "Sarah Putri",
              role: "Digital Service Manager",
              image: "/placeholder.svg?height=200&width=200"
            },
            {
              name: "Budi Santoso",
              role: "Technical Lead",
              image: "/placeholder.svg?height=200&width=200"
            },
            {
              name: "Linda Wijaya",
              role: "Customer Support Head",
              image: "/placeholder.svg?height=200&width=200"
            }
          ].map((member) => (
            <div key={member.name} className="bg-slate-900 p-6 rounded-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-slate-400 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4">
                <Link href="#" className="text-slate-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-slate-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">QuicsX</h2>
            <p className="text-slate-400">banyak pelanggan yang puas dengan layanan kami</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Knowledgebase</li>
              <li>Online Doc</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">About us</h3>
            <ul className="space-y-2 text-slate-400">
              <li>Knowledgebase</li>
              <li>Online Doc</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Subscribe to new Newsletter</h3>
            <p className="text-slate-400 mb-4">What are you waiting for? Subscribe and follow our progress!</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="ID"
                className="flex-1 px-3 py-2 bg-white rounded-md"
              />
              <button className="bg-orange-500 hover:bg-orange-600">Subscribe</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

