import { Head, Link } from "@inertiajs/react"
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'
import Navbar from "@/components/Navbar"
import Footer from '@/components/Footer'

export default function AboutPage({ isLogin, user }) {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className="min-h-screen bg-slate-950">
        {/* Navigation */}
        <Navbar login={isLogin} user={user} className='mx-4' />

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
        <section id="description" className="container mx-auto px-4 py-16">
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

        {/* Team Section */}
        <section id="team" className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Tim Kami</h2>
          <div className="flex flex-row gap-12 justify-center">
            {[
              {
                name: "Devid Nur Faidzin",
                role: "Founder",
                image: "/images/depit.png"
              },
              {
                name: "Andy Satria Budi Utomo",
                role: "Founder",
                image: "/images/andy.png"
              },
              {
                name: "Lendra Dimas Elwando",
                role: "Founder",
                image: "/images/dimaz.png"
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
        <Footer />
      </div>
    </>
  )
}

