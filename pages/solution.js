import ReactMarkdown from "react-markdown";
import { attributes, react as HomeContent } from "../content/solution.md";

export default function Areas() {
  return (
    <div className="max-w-full px-10 p-2 prose  prose-img:mx-auto ">
      {
        /* 
        
      <HomeContent />
        */
        <>
          {/* ====== About Section Start */}
          <div className="mb-16 ">
            <div className="bg-gray-100">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
                <div className="max-w-full mb-10 md:mx-auto sm:text-center  md:mb-12 ">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                    <span className="relative inline-block">
                      <svg
                        viewBox="0 0 52 24"
                        fill="currentColor"
                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                      >
                        <defs>
                          <pattern
                            id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                          >
                            <circle cx="1" cy="1" r=".7" />
                          </pattern>
                        </defs>
                        <rect
                          fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                          width="52"
                          height="24"
                        />
                      </svg>
                      <span className="relative">S</span>
                    </span>{" "}
                    olution
                  </h2>
                  <p
                    className="text-base text-gray-700 md:text-lg "
                    style={{
                      lineHeight: "2rem",
                    }}
                  >
                    Technoflex est une société leader dans la production et la
                    transformation des elastomères et des polymères pour des
                    applications industrielles et techniques. Nous sommes
                    spécialisés dans les domaines suivants : les travaux publics
                    et le bâtiment, l'hydraulique, le naval, l'automobile et les
                    cycles, ainsi que les pièces industrielles. Nous proposons
                    également un service personnalisé de fabrication de produits
                    spécifiques, adaptés aux besoins des clients. Notre
                    entreprise a pour objectif de fournir des produits et
                    services de haute qualité à des prix compétitifs. Nous
                    mettons tout en œuvre pour améliorer sans cesse nos procédés
                    de fabrication en vue d'atteindre la satisfaction optimale
                    de nos clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative px-4 sm:px-0">
              <div className="absolute inset-0 bg-gray-100 h-1/2" />
              <div className="relative grid mx-auto overflow-hidden bg-white divide-y rounded shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
                <div className="inline-block p-8 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <p className="font-bold tracking-wide text-gray-800">
                    Make it better
                  </p>
                </div>
                <div className="inline-block p-8 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <p className="font-bold tracking-wide text-gray-800">
                    Do it faster
                  </p>
                </div>
                <div className="inline-block p-8 text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-50">
                    <svg
                      className="w-10 h-10 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <p className="font-bold tracking-wide text-gray-800">
                    Working harder
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ====== About Section End */}
        </>
      }
    </div>
  );
}
