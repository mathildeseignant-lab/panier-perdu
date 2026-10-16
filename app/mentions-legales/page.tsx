import Link from "next/link";

const ADRESSE = "67 cours Gambetta, 13100 Aix-en-Provence";

export const metadata = {
  title: "Mentions légales | Panier Perdu",
  robots: { index: true, follow: true },
};

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#1F2D26]">
      <div className="mx-auto max-w-xl px-5 py-10 leading-relaxed">
        <Link href="/" className="text-sm font-semibold uppercase tracking-wide text-[#C8512B]">
          Panier Perdu
        </Link>
        <h1 className="mt-6 text-3xl font-bold">Mentions légales</h1>

        <h2 className="mt-8 text-xl font-bold">Éditrice du site</h2>
        <p className="mt-2">
          Mathilde Seignant, entrepreneure individuelle.<br />
          Adresse : {ADRESSE}<br />
          Email : contact.panierperdu@gmail.com<br />
          SIRET : [À COMPLÉTER dès réception de ton numéro]
        </p>

        <h2 className="mt-8 text-xl font-bold">Directrice de la publication</h2>
        <p className="mt-2">Mathilde Seignant.</p>

        <h2 className="mt-8 text-xl font-bold">Hébergeur</h2>
        <p className="mt-2">
          Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
          Site : vercel.com.
        </p>

        <h2 className="mt-8 text-xl font-bold">Propriété intellectuelle</h2>
        <p className="mt-2">
          Les textes et éléments graphiques du site sont la propriété de
          l&apos;éditrice. Toute reproduction sans autorisation est interdite.
        </p>

        <h2 className="mt-8 text-xl font-bold">Données personnelles</h2>
        <p className="mt-2">
          Voir la <Link href="/confidentialite" className="underline">politique de confidentialité</Link>.
        </p>
      </div>
    </main>
  );
}
