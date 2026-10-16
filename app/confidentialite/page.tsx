import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité | Panier Perdu",
  robots: { index: true, follow: true },
};

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-[#F6F1E7] text-[#1F2D26]">
      <div className="mx-auto max-w-xl px-5 py-10 leading-relaxed">
        <Link href="/" className="text-sm font-semibold uppercase tracking-wide text-[#C8512B]">
          Panier Perdu
        </Link>
        <h1 className="mt-6 text-3xl font-bold">Politique de confidentialité</h1>

        <h2 className="mt-8 text-xl font-bold">Qui est responsable de tes données</h2>
        <p className="mt-2">
          Mathilde Seignant, éditrice du site Panier Perdu.
          Contact : contact.panierperdu@gmail.com.
        </p>

        <h2 className="mt-8 text-xl font-bold">Ce que nous collectons</h2>
        <p className="mt-2">
          Uniquement ton adresse email, quand tu réserves ta place via le
          formulaire, ainsi que ton consentement à être contactée.
        </p>

        <h2 className="mt-8 text-xl font-bold">Pourquoi</h2>
        <p className="mt-2">
          Pour te prévenir de l&apos;ouverture de Panier Perdu et te donner
          accès au service. Base légale : ton consentement. Nous ne revendons
          jamais tes données.
        </p>

        <h2 className="mt-8 text-xl font-bold">Combien de temps</h2>
        <p className="mt-2">
          Ton email est conservé jusqu&apos;à ce que tu retires ton
          consentement, et au maximum 3 ans après notre dernier échange.
        </p>

        <h2 className="mt-8 text-xl font-bold">Qui y a accès</h2>
        <p className="mt-2">
          Le formulaire est fourni par Tally, et le site est hébergé par
          Vercel (États-Unis). Ces prestataires traitent les données pour
          notre compte. Aucun autre tiers n&apos;y a accès.
        </p>

        <h2 className="mt-8 text-xl font-bold">Tes droits</h2>
        <p className="mt-2">
          Tu peux demander l&apos;accès, la correction ou la suppression de
          tes données, ou retirer ton consentement à tout moment, en écrivant
          à contact.panierperdu@gmail.com. Tu peux aussi saisir la CNIL
          (cnil.fr) si tu estimes que tes droits ne sont pas respectés.
        </p>
      </div>
    </main>
  );
}
