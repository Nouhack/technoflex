import Link from "next/link";
export default function Feature() {
  return (
    <div className="px-4 py-16  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
                  id="27df4f81-c854-45de-942a-fe90f7a300f9"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">D</span>
          </span>
          {""}
          omaines
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid  gap-8 row-gap-10  mx-auto lg:grid-cols-2">
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
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
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Travaux public et B??timent
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Nous proposons aux secteurs des travaux publics et du b??timent des
              solutions innovantes et de qualit??. Notre expertise nous permet de
              fournir des produits ?? haut rendement et des mat??riaux de
              construction durables et robustes. Nous travaillons avec des
              partenaires fiables pour assurer la qualit?? et la fiabilit?? de nos
              produits. Notre ??quipe de professionnels qualifi??s est ?? votre
              disposition pour vous garantir un travail de qualit?? ?? chaque
              ??tape du processus.
            </p>
            <Link
              href="/areas"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
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
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">Hydraulique</h6>
            <p className="mb-3 text-sm text-gray-900">
              Notre ??quipe sp??cialis??e est en mesure de fournir des services de
              qualit?? pour les applications les plus complexes. Nous disposons
              d&#39;une grande vari??t?? de composants hydrauliques, y compris des
              pompes, des v??rins, des raccords, des tuyaux et des valves, qui
              sont con??us et fabriqu??s avec les plus hauts standards de qualit??.
            </p>
            <Link
              href="/areas"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
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
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">Naval</h6>
            <p className="mb-3 text-sm text-gray-900">
              Ces pieces sont con??ues pour r??sister aux contraintes
              environnementales et aux conditions m??t??orologiques les plus
              extr??mes. Gr??ce ?? leur flexibilit?? et ?? leur robustesse, elles
              sont parfaitement adapt??es aux conditions de navigation
              difficiles. De plus, Technoflex offre une large gamme de produits
              pour r??pondre aux besoins sp??cifiques de chaque application
              maritime.
            </p>
            <Link
              href="/areas"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
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
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Automobile et Cycles
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Notre gamme de produits innovants et robustes offre des solutions
              de haute qualit?? aux secteurs de l&#39;automobile et du cycle.
              Nous sommes fiers de produire des mat??riaux durables et fiables
              qui r??pondent aux normes les plus exigeantes de l&#39;industrie.
              Notre ??quipe d&#39;experts met tout en ??uvre pour offrir des
              produits qui r??pondent aux exigences les plus strictes et offrent
              une performance et une durabilit?? sans compromis.
            </p>
            <Link
              href="/areas"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>

        <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
          <div className="mr-4">
            <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
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
          </div>
          <div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Pi??ce industrielles
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Toutes les pi??ces sont con??ues pour offrir une r??sistance et une
              durabilit?? optimales afin de garantir une performance optimale et
              une longue dur??e de vie. Les mat??riaux sont choisis en fonction
              des propri??t??s m??caniques et thermiques requises et des exigences
              sp??ciales de l&#39;application.
            </p>
            <Link
              href="/areas"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
