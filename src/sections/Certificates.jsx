import React, { useState } from 'react'

const certificates = [
  {
    title: 'Full Stack Development',
    issuer: 'TechElevate Learning Solutions',
    date: 'March 2022',
    duration: '6 Months',
    id: 'TEL/FS/2022/0318',
    image: '/certificates/full-stack-development.png',
  },
  {
    title: 'Machine Learning & Data Science',
    issuer: 'DataLearn Institute',
    date: '30 November 2025',
    duration: 'September 2025 – November 2025',
    id: 'DLI/MLDS/2025/0923',
    image: '/certificates/machine-learning-data-science.png',
  },
]

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  return (
    <section
      id="certificates"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            My Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Certifications
          </h2>

          <div className="w-20 h-1 bg-blue-500 mx-auto mt-5 rounded-full" />

          <p className="max-w-2xl mx-auto mt-6 text-slate-400">
            Professional certifications and course achievements that
            complement my academic and technical experience.
          </p>
        </div>

        {/* Certificate cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="
                group
                rounded-2xl
                overflow-hidden
                bg-slate-900/70
                border border-slate-700/60
                backdrop-blur-xl
                shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-blue-500/50
                hover:shadow-blue-500/10
              "
            >

              {/* Certificate preview */}
              <div
                className="
                  relative
                  bg-slate-950
                  p-4
                  cursor-pointer
                  overflow-hidden
                "
                onClick={() => setSelectedCertificate(certificate)}
              >
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="
                    w-full
                    aspect-[16/10]
                    object-cover
                    rounded-xl
                    transition-transform
                    duration-500
                    group-hover:scale-[1.02]
                  "
                />

                {/* Hover overlay */}
                <div
                  className="
                    absolute
                    inset-4
                    rounded-xl
                    bg-black/60
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                    flex
                    items-center
                    justify-center
                  "
                >
                  <span className="
                    px-5
                    py-3
                    rounded-full
                    bg-white/10
                    border
                    border-white/30
                    text-white
                    backdrop-blur-md
                    font-medium
                  ">
                    Click to Preview
                  </span>
                </div>
              </div>

              {/* Certificate information */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      {certificate.title}
                    </h3>

                    <p className="text-blue-400 mt-2">
                      {certificate.issuer}
                    </p>
                  </div>

                  <div className="
                    shrink-0
                    w-10
                    h-10
                    rounded-full
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    flex
                    items-center
                    justify-center
                    text-blue-400
                  ">
                    ✓
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Completion
                    </p>

                    <p className="text-sm text-slate-300 mt-1">
                      {certificate.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider text-slate-500">
                      Certificate ID
                    </p>

                    <p className="text-sm text-slate-300 mt-1 break-all">
                      {certificate.id}
                    </p>
                  </div>

                </div>

                {/* Button */}
                <button
                  onClick={() => setSelectedCertificate(certificate)}
                  className="
                    mt-7
                    w-full
                    py-3
                    rounded-xl
                    bg-blue-600
                    hover:bg-blue-500
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    shadow-lg
                    shadow-blue-600/20
                  "
                >
                  View Certificate
                </button>

              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Full-screen certificate preview */}
      {selectedCertificate && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            bg-black/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setSelectedCertificate(null)}
        >

          <div
            className="
              relative
              max-w-6xl
              w-full
              max-h-[95vh]
              flex
              items-center
              justify-center
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="
                absolute
                -top-4
                -right-2
                md:-right-4
                z-10
                w-11
                h-11
                rounded-full
                bg-slate-900
                border
                border-slate-700
                text-white
                text-xl
                hover:bg-red-600
                transition-colors
              "
              aria-label="Close certificate preview"
            >
              ×
            </button>

            <img
              src={selectedCertificate.image}
              alt={`${selectedCertificate.title} certificate enlarged`}
              className="
                max-w-full
                max-h-[90vh]
                object-contain
                rounded-xl
                shadow-2xl
              "
            />

          </div>
        </div>
      )}
    </section>
  )
}