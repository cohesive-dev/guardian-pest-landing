// Content for the per-pest "splash" pages at /pests/[slug].
// Each service card in the Services grid links here by matching `serviceTitle`.
// Draft copy — accurate for Southern California but written to be reviewed and
// edited by the Guardian team before launch.

export type Pest = {
  slug: string;
  /** Matches the card title in the Services grid so cards can link here. */
  serviceTitle: string;
  /** Short label used in chips and related-links. */
  short: string;
  /** Page H1. */
  name: string;
  image: string;
  tagline: string;
  intro: string;
  origin: string;
  lifecycle: string;
  damage: string;
  signs: string[];
  treatment: string;
  /** SEO meta description. */
  meta: string;
};

export const PESTS: Pest[] = [
  {
    slug: "ants",
    serviceTitle: "Ant Control",
    short: "Ants",
    name: "Ants",
    image: "/services/ant.jpg",
    tagline: "Small foragers, endless supply lines.",
    intro:
      "Ants are the most common call we get. A few scouts on the counter usually mean a colony of thousands is already established nearby — and killing the trail you can see does nothing to the nest you can't.",
    origin:
      "The Argentine ant, the species behind most local invasions, is native to the Paraná River basin of South America and arrived in the United States in the late 1800s. In California it now forms enormous multi-queen \"supercolonies\" that can stretch across entire neighborhoods. Carpenter ants and odorous house ants are also common here. Ants push indoors when the weather turns dry or after heavy rain, hunting for the water and sugars your kitchen provides.",
    lifecycle:
      "Ants develop through complete metamorphosis — egg, larva, pupa, then adult — inside a colony of egg-laying queens, sterile female workers, and seasonal winged reproductives. Argentine colonies rarely swarm; instead they \"bud,\" splitting off a queen and a group of workers to start a satellite nest a few feet away. That budding is exactly why over-the-counter sprays backfire: they scatter the colony into several new ones.",
    damage:
      "Most ants are a contamination and nuisance problem, tracking bacteria across food-prep surfaces and getting into pantries. Carpenter ants are the exception — they don't eat wood like termites, but they excavate smooth galleries in moist or damaged framing to nest, and over years that tunneling can weaken structural wood. Ants also farm aphids in the garden, protecting them and making other pest problems worse.",
    signs: [
      "Steady trails along baseboards, counters, or foundation lines",
      "Small dirt piles or hills near the slab, driveway, or patio",
      "Winged swarmers appearing indoors, especially near windows",
      "Sawdust-like shavings (frass) below wood — a carpenter ant sign",
      "A faint rustling inside walls or door frames",
    ],
    treatment:
      "We identify the species first, then use targeted baits that foraging workers carry back to the queens — collapsing the colony at its source — combined with treatment of entry points and an exterior barrier to stop re-entry.",
    meta: "Argentine, carpenter, and odorous house ants — where they come from, how their colonies grow, the damage they cause, and how Guardian eliminates them at the source.",
  },
  {
    slug: "termites",
    serviceTitle: "Termite Defense",
    short: "Termites",
    name: "Termites",
    image: "/services/termite.jpg",
    tagline: "Silent, around the clock, out of sight.",
    intro:
      "Termites feed on your home 24 hours a day and can do it for years before a single sign shows. By the time damage is visible, the colony is often well established — which is why inspection matters more with termites than almost any other pest.",
    origin:
      "Two types dominate Southern California. Subterranean termites (Reticulitermes) live in the soil and build pencil-thin mud tubes to reach the wood above ground. Western drywood termites (Incisitermes) skip the soil entirely and live inside dry, sound wood — attic rafters, eaves, window frames, even furniture. Termites are among the oldest social insects on Earth, and every colony traces back to a single pair of winged swarmers that paired off and found a home.",
    lifecycle:
      "A colony grows through egg and nymph stages into distinct castes: workers that feed on wood, soldiers that defend the nest, and reproductives. Once a colony matures — usually two to five years — it releases winged swarmers in spring and summer to start new colonies elsewhere. A single mature colony can number from tens of thousands to well over a million termites, and a queen can live for many years.",
    damage:
      "Termites eat cellulose, the main component of wood, and they never stop. Working out of sight, they hollow out framing, subfloors, and trim from the inside — leaving a thin shell that looks intact until it's pressed. Termites cause billions of dollars in structural damage across the U.S. every year, and that damage is almost never covered by homeowners insurance.",
    signs: [
      "Pencil-width mud tubes running up the foundation or crawlspace",
      "Discarded wings in small piles near windows or light fixtures",
      "Wood that sounds hollow or has a blistered, rippled surface",
      "Tiny pellet-like droppings (frass) beneath drywood-infested wood",
      "Doors or windows that suddenly stick or feel warped",
      "Swarms of winged insects around the home in spring",
    ],
    treatment:
      "We start with a full interior and exterior inspection to map the infestation, then match the fix to it — localized spot treatments and soil barriers for smaller problems, up to whole-structure fumigation when a drywood infestation is widespread.",
    meta: "Subterranean and drywood termites — their biology, life cycle, and the hidden structural damage they cause, plus how Guardian inspects and treats San Diego homes.",
  },
  {
    slug: "rodents",
    serviceTitle: "Rodent Control",
    short: "Rodents",
    name: "Rats & Mice",
    image: "/services/rodent.jpg",
    tagline: "Fast breeders that chew through everything.",
    intro:
      "Rats and mice want the same three things your home offers: warmth, food, and shelter. Once they're inside the walls or attic, a small problem multiplies quickly — and the chewing they do is both a fire risk and a health risk.",
    origin:
      "The Norway rat, roof rat, and house mouse all originated in Asia and spread worldwide alongside human trade. Along the California coast the roof rat is especially common, nesting high in attics, palm trees, and dense vines rather than in burrows. All three are \"commensal\" rodents — they've evolved to live right alongside people, which is why sanitation alone rarely keeps them out.",
    lifecycle:
      "Rodents breed relentlessly. A house mouse reaches maturity in about six weeks and a female can produce up to eight or more litters a year, several pups at a time. Rats aren't far behind. That math means a single pair can become dozens within a few months, so an infestation that seems minor today can be a serious one by next season.",
    damage:
      "A rodent's front teeth never stop growing, so it gnaws constantly — on wood, pipes, insulation, and electrical wiring, where the stripped wires become a genuine house-fire hazard. Rodents also contaminate food and surfaces with droppings and urine and can spread diseases including hantavirus, salmonella, and leptospirosis, while carrying fleas and ticks indoors.",
    signs: [
      "Dark, pellet-shaped droppings along walls, in cabinets, or in the attic",
      "Gnaw marks on food packaging, wood, or wiring",
      "Greasy rub marks where they travel along baseboards and beams",
      "Scratching or scurrying sounds in walls and ceilings at night",
      "Nests of shredded paper, insulation, or fabric in hidden spots",
      "A restless or fixated pet staring at a wall or appliance",
    ],
    treatment:
      "Trapping alone is a losing game if the door stays open, so we start with exclusion — sealing every entry point — then combine strategic trapping and baiting with sanitation guidance and follow-up monitoring so they don't come back.",
    meta: "Rats and mice — their origins, how fast they breed, the fire and health risks they bring, and how Guardian seals them out and keeps them out.",
  },
  {
    slug: "cockroaches",
    serviceTitle: "Cockroach Removal",
    short: "Cockroaches",
    name: "Cockroaches",
    image: "/services/cockroach.jpg",
    tagline: "A health pest that hides and multiplies.",
    intro:
      "Cockroaches are more than unsettling — they're a documented trigger for asthma and allergies, especially in children. For every roach you see in daylight, many more are tucked into the warm, damp voids of your home.",
    origin:
      "The German cockroach, the small species that infests kitchens and bathrooms, likely originated in Southeast Asia and is now the most common indoor roach in the world. The larger American cockroach came from Africa and favors sewers, drains, and crawlspaces, while the Oriental cockroach seeks out cool, damp areas. All of them thrive wherever warmth, moisture, and food come together.",
    lifecycle:
      "Cockroaches develop through incomplete metamorphosis — egg, nymph, adult, with no pupal stage. Females carry an egg case, or ootheca, holding 30 to 40 or more eggs. German cockroaches reproduce the fastest of any household roach: under good conditions, a single female and her offspring can produce thousands in a year, which is how a light infestation explodes so quickly.",
    damage:
      "Roaches aren't a structural threat, but they are a serious health one. They crawl through drains and garbage and then across food-prep surfaces, spreading bacteria like salmonella and E. coli. Their shed skins and droppings become airborne allergens that trigger asthma attacks, and heavy infestations leave a distinctive musty odor behind.",
    signs: [
      "Droppings that look like ground pepper or coffee grounds",
      "Small brown egg cases in cabinets, drawers, or behind appliances",
      "A musty, oily odor in the kitchen or bathroom",
      "Smear marks along surfaces in damp, dark areas",
      "Seeing roaches in daylight — usually a sign of a heavy infestation",
      "Shed skins near harborage points",
    ],
    treatment:
      "We treat roaches where they actually live — using gel baits and precise applications in the wall voids, cracks, and harborage points they hide in, paired with moisture and sanitation guidance to make your home inhospitable to the next generation.",
    meta: "German, American, and Oriental cockroaches — where they come from, how fast they breed, the health risks they pose, and how Guardian clears them out.",
  },
  {
    slug: "spiders",
    serviceTitle: "Spider & Web Control",
    short: "Spiders",
    name: "Spiders",
    image: "/services/spider.jpg",
    tagline: "Mostly harmless — but not the widows.",
    intro:
      "Most spiders around a home are harmless hunters that actually keep other insects in check. The problem is the two that aren't: the native western black widow and the invasive brown widow, both of which have made themselves at home across Southern California.",
    origin:
      "The western black widow is native to the region, while the brown widow is a more recent invader that has spread rapidly through Southern California over the past two decades. Both prefer quiet, undisturbed spots — garage corners, eaves, woodpiles, patio furniture, and the underside of railings and pots. Where insect prey is plentiful, spiders follow.",
    lifecycle:
      "Spiders hatch from silk egg sacs — a single widow sac can hold hundreds of eggs. The tiny spiderlings often disperse on strands of silk carried by the wind, then molt repeatedly as they grow. Females are the long-lived sex, surviving one to three years, and it's the female widow that builds the tangled, strong-strand webs low to the ground where people and pets encounter her.",
    damage:
      "For most species the issue is simply the unsightly webbing that collects on eaves and in corners. Widows are the real concern: their bite is medically significant, causing intense pain, muscle cramps, and nausea. Healthy adults usually recover, but a bite is far more dangerous to young children, older adults, and pets — and no one wants a widow nesting beside the front door.",
    signs: [
      "Irregular, tangled webs in low, dark, undisturbed corners",
      "Round, papery egg sacs suspended in webbing",
      "Shed spider skins near harborage points",
      "A rise in other insects nearby — the prey that draws spiders in",
      "The spiders themselves in garages, sheds, and along eaves",
    ],
    treatment:
      "We knock down webs and egg sacs, treat the harborage points and entry gaps where spiders shelter, and reduce the insect prey that attracts them — finished with an exterior barrier to keep widows away from doors and play areas.",
    meta: "Black widow and brown widow spiders — their habits, life cycle, and the real bite risk they carry, plus how Guardian clears webs and harborage safely.",
  },
  {
    slug: "bees-wasps",
    serviceTitle: "Bees & Wasps",
    short: "Bees & Wasps",
    name: "Bees & Wasps",
    image: "/services/bee.jpg",
    tagline: "Stinging colonies that peak in late summer.",
    intro:
      "A wasp nest near a doorway or in a wall void turns an ordinary afternoon into a hazard — especially for anyone with a sting allergy. Wasps also get more aggressive as the season goes on, so a nest that seemed minor in June is a very different problem by September.",
    origin:
      "Paper wasps, yellowjackets, and hornets are social wasps that build nests in eaves, wall voids, and underground around local homes. Yellowjackets in particular become bold scavengers in late summer, showing up wherever there's food or sugar outdoors. Honeybees are a different story — as vital pollinators we relocate them alive whenever it's possible rather than exterminate.",
    lifecycle:
      "Social wasp colonies live for a single year. A fertilized queen overwinters alone, starts a small nest in spring, and builds a worker force through the summer. The colony peaks in size — and in aggression — in late summer and early fall, then produces new queens before the rest of the colony dies off in winter. At its peak a single nest can hold thousands of wasps.",
    damage:
      "The main danger is the sting, which is painful for anyone and potentially life-threatening for those with allergies, who can go into anaphylaxis. Nests built in wall voids or attics put the colony inches from living space, and yellowjackets will chew through drywall and wood, sometimes breaking through into a room. Disturbing a mature nest can trigger a swarm of repeated stings.",
    signs: [
      "Visible paper-comb nests under eaves, in shrubs, or in wall voids",
      "Steady wasp traffic in and out of a single gap or hole",
      "Buzzing heard inside a wall or ceiling",
      "Wasps gathering around trash cans, food, or drinks outdoors",
      "Ground-nesting yellowjackets emerging from a hole in the yard",
    ],
    treatment:
      "We treat and remove nests safely, seal the wall voids and gaps wasps exploit, and — when the colony turns out to be honeybees — refer them for live relocation rather than extermination.",
    meta: "Paper wasps, yellowjackets, and hornets — their yearly colony cycle, why they turn aggressive in late summer, and how Guardian removes nests safely.",
  },
  {
    slug: "mosquitoes",
    serviceTitle: "Mosquito Reduction",
    short: "Mosquitoes",
    name: "Mosquitoes",
    image: "/services/mosquito.jpg",
    tagline: "Disease vectors breeding in a bottle cap of water.",
    intro:
      "Mosquitoes have gone from a dusk-only nuisance to an all-day problem in Southern California, thanks to invasive species that bite in broad daylight and breed in the smallest amounts of standing water. Beyond the itch, they're the deadliest disease carriers on the planet.",
    origin:
      "Two invasive species, Aedes aegypti and the Asian tiger mosquito (Aedes albopictus), are now established across California. Unlike the native mosquitoes people grew up with, these are aggressive daytime biters that breed in tiny containers — a saucer under a potted plant, a clogged gutter, a forgotten bucket. Native Culex mosquitoes are still around too and are the main carriers of West Nile virus.",
    lifecycle:
      "Mosquitoes pass through four stages — egg, larva, pupa, and adult — and every stage but the adult happens in water. Eggs are laid on or near standing water and can hatch in as little as a week; Aedes eggs can even survive dry for months and hatch once they're flooded. Only females bite, because they need a blood meal to produce eggs, and adults live for several weeks.",
    damage:
      "The bites themselves are itchy and can make a yard or patio unusable, but the real risk is what mosquitoes carry. They transmit West Nile virus, Zika, dengue, and chikungunya, along with heartworm that's often fatal to dogs. Aedes mosquitoes breeding in local yards raise the disease risk for an entire neighborhood, not just one home.",
    signs: [
      "Being bitten during the day, not just at dusk (a sign of Aedes)",
      "Standing water in saucers, gutters, buckets, or plant bases",
      "Tiny wriggling larvae — \"wigglers\" — in any pooled water",
      "Swarms hovering in shady, humid spots around the yard",
      "Bites concentrated around the ankles and lower legs",
    ],
    treatment:
      "The key to mosquitoes is the water, so we start with source reduction — finding and eliminating breeding sites — then add larvicide, targeted adult misting, and an ongoing barrier treatment so you can use your yard again.",
    meta: "Invasive Aedes and native Culex mosquitoes — how they breed, the diseases they carry, and how Guardian cuts them off at the source in San Diego yards.",
  },
];

export function getPest(slug: string): Pest | undefined {
  return PESTS.find((p) => p.slug === slug);
}

/** Map a Services card title to its pest page slug, if one exists. */
export function slugForService(serviceTitle: string): string | undefined {
  return PESTS.find((p) => p.serviceTitle === serviceTitle)?.slug;
}
