import { Fraunces } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"], display: "swap" });

// Ce lien sera remplacé à l'étape suivante par ton formulaire d'inscription.
const FORM_URL = "https://tally.so/r/0VrbWP";

export const metadata = {
  title: "Panier Perdu : récupère tes paniers abandonnés, 29 €/mois",
  description:
    "Deux relances écrites et personnalisées pour récupérer les paniers abandonnés de ta boutique Shopify. Relances illimitées, sans engagement.",
  openGraph: {
    title: "Panier Perdu : récupère tes paniers abandonnés",
    description:
      "Deux relances écrites et personnalisées pour ta boutique Shopify. 29 €/mois, sans engagement.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#1F2D26]">
      <div className="mx-auto max-w-xl px-5 pb-16 pt-6">
        <p className="text-sm font-semibold tracking-wide uppercase text-[#C8512B]">
          Panier Perdu
        </p>

        <h1
          className={`${fraunces.className} mt-8 text-4xl font-bold leading-tight sm:text-5xl`}
        >
          Récupère les paniers que tes clients ont laissés.
        </h1>

        <p className="mt-5 text-lg leading-relaxed">
          Deux relances écrites, personnalisées, envoyées toutes seules. Pour
          les boutiques Shopify qui font quelques dizaines de commandes par
          mois.
        </p>

        <a
          href={FORM_URL}
          className="mt-8 flex h-14 w-full items-center justify-center rounded-lg bg-[#C8512B] px-6 text-lg font-semibold text-white active:opacity-90"
        >
          Commencer, c&apos;est gratuit
        </a>
        <p className="mt-3 text-center text-sm text-[#1F2D26]/70">
          Ouverture le 6 novembre 2026. Réserve ta place, sans paiement.
        </p>

        <section className="mt-14 border-t border-[#1F2D26]/20 pt-8">
          <h2 className={`${fraunces.className} text-2xl font-bold`}>
            Le problème, chiffré
          </h2>
          <p className="mt-3 leading-relaxed">
            En moyenne, près de 7 paniers sur 10 sont abandonnés en ligne. Sur
            une boutique qui fait 30 commandes par mois, ça représente des
            dizaines de ventes qui t&apos;ont échappé, chaque mois. Les
            grosses solutions de relance coûtent trop cher à ce niveau de
            chiffre d&apos;affaires, alors la plupart des petites boutiques ne
            relancent rien.
          </p>
        </section>

        <section className="mt-12">
          <h2 className={`${fraunces.className} text-2xl font-bold`}>
            Ce que tu obtiens
          </h2>
          <ul className="mt-4 space-y-5">
            <li>
              <p className="font-semibold">Branchée en quelques minutes</p>
              <p className="mt-1 leading-relaxed">
                Tu connectes ta boutique Shopify. Panier Perdu lit les paniers
                abandonnés, sans que tu aies rien à ajouter à ton site.
              </p>
            </li>
            <li>
              <p className="font-semibold">Deux relances, espacées</p>
              <p className="mt-1 leading-relaxed">
                Un premier rappel, puis un second avec, si tu le souhaites, un
                code de réduction. Chaque message reprend les produits laissés
                dans le panier.
              </p>
            </li>
            <li>
              <p className="font-semibold">Le chiffre d&apos;affaires récupéré</p>
              <p className="mt-1 leading-relaxed">
                Un compteur te montre, en euros, ce que les relances ont
                ramené. Tu vois tout de suite si ça vaut les 29 €.
              </p>
            </li>
          </ul>
        </section>

        <section
          id="reserver"
          className="mt-14 rounded-xl bg-[#1F2D26] p-6 text-[#F6F1E7]"
        >
          <h2 className={`${fraunces.className} text-2xl font-bold`}>
            29 € par mois, relances illimitées
          </h2>
          <p className="mt-2">Soit moins d&apos;1 € par jour. Sans engagement, résiliable à tout moment.</p>
          <p className="mt-4 leading-relaxed">
            Garantie satisfait ou remboursé pendant 30 jours après ton premier
            paiement : tu écris à la boutique, on te rembourse, sans
            justification.
          </p>
          <a
            href={FORM_URL}
            className="mt-6 flex h-14 w-full items-center justify-center rounded-lg bg-[#C8512B] px-6 text-lg font-semibold text-white active:opacity-90"
          >
            Réserver ma place, gratuit
          </a>
          <p className="mt-3 text-center text-sm text-[#F6F1E7]/70">
            Ouverture le 6 novembre 2026. Aucun paiement aujourd&apos;hui.
          </p>
        </section>

        <p className="mt-10 text-center text-sm text-[#1F2D26]/60">
          Panier Perdu, créé par Mathilde. <a href="/mentions-legales" className="underline">Mentions légales</a> · <a href="/confidentialite" className="underline">Confidentialité</a>
        </p>
      </div>
    </main>
  );
}
