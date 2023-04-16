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
          <div className="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-0 ">
            <div className=" ">
              <div className="flex flex-col justify-center md:pr-8 xl:pr-0 ">
                <div className="w-full " dir="ltr">
                  <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                    {item.title}
                  </h2>
                  <p className="text-base text-gray-700 md:text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
