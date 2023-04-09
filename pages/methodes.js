import ReactMarkdown from "react-markdown";
import { attributes, react as HomeContent } from "../content/methodes.md";

export default function Areas() {
  const methodes = [
    {
      title: "Exclusion",
      description:
        "L'exclusion est un processus de fabrication qui permet de produire des produits en forme de gouttes, de formes complexes et de formes moulées. Cette méthode est principalement utilisée pour produire des pièces en caoutchouc et en polymère de manière à satisfaire les exigences des applications industrielles et techniques.",
    },
    {
      title: "Vulcanisation (LCM) bain de sel",
      description:
        "La vulcanisation à basse température (LCM) et le bain de sel sont des techniques qui permettent d'améliorer la résistance et la durabilité des produits. La vulcanisation à basse température est généralement utilisée pour améliorer les propriétés mécaniques et thermiques des produits en caoutchouc et en polymère, tandis que le bain de sel est utilisé pour améliorer la résistance à la corrosion et à l'abrasion des produits.",
    },
    {
      title: "Compression",
      description:
        "La compression est une méthode utilisée pour produire des produits en caoutchouc et en polymère aux dimensions et aux formes précises. Cette méthode est particulièrement efficace pour produire des produits qui nécessitent une précision dimensionnelle élevée et qui ne peuvent pas être produits par d'autres méthodes de fabrication.",
    },
    {
      title: "Injection",
      description:
        "L'injection est une méthode qui permet de produire des produits en caoutchouc et en polymère à l'aide d'une machine d'injection. Cette méthode est principalement utilisée pour produire des produits aux formes complexes et qui nécessitent une grande précision dimensionnelle.",
    },
    {
      title: "Confection",
      description:
        "La confection est une méthode de fabrication utilisée pour produire des produits en caoutchouc et en polymère à partir de pièces découpées. Cette méthode est généralement utilisée pour produire des produits à partir de pièces en caoutchouc et en polymère de différentes formes et tailles.",
    },
  ];
  return (
    <div className="max-w-full px-10 p-2 prose  prose-img:mx-auto ">
      {/* 
        
      <HomeContent />
        */}
      {methodes.map((item, index) => {
        return (
          <div
            className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0 "
            dir={`${index % 2 === 0 ? "ltr" : "rtl"}`}
          >
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                  <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      points=" 8,5 8,1 16,1 16,5"
                      strokeLinejoin="round"
                    />
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      points="9,15 1,15 1,5 23,5 23,15 15,15"
                      strokeLinejoin="round"
                    />
                    <polyline
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      points="22,18 22,23 2,23 2,18"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="9"
                      y="13"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      width="6"
                      height="4"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="max-w-xl mb-6" dir="ltr">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    {item.title}
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center -mx-4 lg:pl-8">
                <div className="flex flex-col items-end px-3">
                  <img
                    className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                  <img
                    className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt=""
                  />
                </div>
                <div className="px-3">
                  <img
                    className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                    src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
