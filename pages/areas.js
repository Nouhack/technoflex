import ReactMarkdown from "react-markdown";
import { attributes, react as HomeContent } from "../content/areas.md";

export default function Areas() {
  return (
    <div className="max-w-full px-10 p-2 prose  prose-img:mx-auto ">
      {/* 
        
      <HomeContent />
        */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0 ">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="2feffae2-9edf-414e-ab8c-f0e6396a0fc1"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#2feffae2-9edf-414e-ab8c-f0e6396a0fc1)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            Domaine d’exécution et mission
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            L’activité de transformation du caoutchouc nature et de synthèse en
            produits finis est une activité assez complexe qui fait appel à
            beaucoup de savoir-faire ; au même titre que beaucoup d’activités
            industrielles, les caoutchoucs sont traités à travers des procédés
            précis, spécifiques à chaque produit souhaité.
          </p>
        </div>
        <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="img2.jpeg"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="img1.jpeg"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              //   src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
              src="img3.jpeg"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
                Augmenter ses capacités de production de façon à se positionner
                sur le marché local en concurrent sérieux de l’importation, en
                offrant de meilleurs rapports qualité/prix.
              </h6>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
                Envisager l’exportation des produits à l’étranger selon l’agenda
                national et les orientations du gouvernement.
              </h6>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
                Promouvoir le transfert de savoir-faire dans la filière de la
                transformation du caoutchouc en Algérie.
              </h6>
            </div>
            <div className="pb-4 mb-4 border-b">
              <h6 className="mb-2 font-semibold leading-5">
                Faire de la transformation du caoutchouc un terrain fertile pour
                l’innovation.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
