<div className="lg:py-20 py-10 lg:mt-20 mt-20">
      <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'veda', logo: logoVeda },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="font-display text-lg mx-auto justify-center text-slate-900 pt-6 max-w-2xl">
        VEDA provides an unparalleled cruise experience on the Nile, blending authenticity with luxury. Enjoy private journeys featuring organic cuisine, eco-friendly energy solutions, and a dedicated, warm-hearted crew. 
        </p>
        <p className="font-display text-gold-800 italic text-xl mx-auto justify-center text-slate-900 pt-4 max-w-4xl">Discover a cruise like no other with us on the Nile.
        </p>
      </div>