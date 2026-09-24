export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  // { label: 'Contact', path: '/contact' },
]

export const SERVICES = [
  {
    slug: "soil-aggregate-testing",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Oedometer.jpg",
    alt: "Laboratory consolidation test apparatus used for soil testing",
    imgCredit: {
      author: "Deryck Chan",
      license: "CC BY-SA 4.0",
      url: "https://commons.wikimedia.org/wiki/File:Oedometer.jpg",
    },
    name: "Soil & Aggregate Physical & Strength Testing",
    seoTitle: "Soil & Aggregate Testing Lab in Georgia | SSN Lab",
    seoDescription:
      "Grain size, Atterberg limits, Proctor, CBR, shear strength, consolidation and aggregate gradation testing from our Georgia lab.",
    summary:
      "Physical and strength properties of soil and aggregate for foundations, pavements and earthwork.",
    intro:
      "We evaluate soil and aggregate materials to determine engineering properties essential for foundations, pavements, and earthwork design.",
    overview: [
      "Soil and aggregate testing measures the physical properties and the strength of the natural soil beneath a project and of the sand, gravel and crushed stone used to build on it. Physical properties describe what the material is: its particle sizes, plasticity, moisture and density. Strength properties describe what it can do: how much load it can carry before it fails or settles.",
      "Together, these results tell engineers whether a site can support a foundation, pavement or embankment, and whether a construction material meets its specification. Nearly every earthwork project starts with this testing, and the tests below are what fall under it.",
    ],
    usedFor: ["Foundation design", "Pavement subgrade and base design", "Earthwork and fill control"],
    tests: [
      {
        name: "Grain Size Analysis (Sieve & Hydrometer)",
        method: "ASTM D6913 / D7928",
        text: "Grain size analysis determines the proportions of gravel, sand, silt and clay in a soil. Coarse particles are separated on a stack of sieves, and the finer silt and clay fraction is measured with a hydrometer as the particles settle in water. The resulting curve is used to classify the soil and to predict behavior such as drainage.",
      },
      {
        name: "Atterberg Limits",
        method: "ASTM D4318",
        text: "The Atterberg limits are the moisture contents at which a fine-grained soil changes from liquid to plastic (the liquid limit) and from plastic to semi-solid (the plastic limit). The difference between them is the plasticity index. These values classify clays and silts and indicate how much a soil will swell, shrink or lose strength when its moisture changes.",
      },
      {
        name: "Standard & Modified Proctor Compaction",
        method: "ASTM D698 / D1557",
        text: "Proctor tests find the relationship between a soil's moisture content and its dry density when it is compacted with a set amount of effort. The peak of that curve gives the maximum dry density and the optimum moisture content, which become the targets for compaction in the field. The Standard test uses a lighter compaction effort and the Modified test uses a heavier one, for projects carrying higher loads.",
      },
      {
        name: "California Bearing Ratio (CBR)",
        method: "ASTM D1883",
        text: "The California Bearing Ratio measures the strength of a compacted soil or base material by pushing a standard piston into it and comparing the load to that of a reference crushed stone. Higher values mean a stronger material. The result is widely used in pavement design to size the thickness of the base and subbase layers.",
      },
      {
        name: "Direct Shear and Triaxial Shear Tests",
        method: "ASTM D3080 / D4767",
        text: "Shear strength tests measure how much stress a soil can take before it slides or fails. In direct shear, a sample is forced to slip along a set plane. In triaxial testing, a cylindrical sample is confined under pressure and loaded until it fails. Both give the cohesion and friction angle used to design foundations, retaining walls and slopes.",
      },
      {
        name: "Unconfined Compressive Strength (UCS)",
        method: "ASTM D2166",
        text: "Unconfined compressive strength is a quick strength test for cohesive soils. A cylindrical sample is loaded vertically, with no confining pressure, until it fails, and the peak stress is the result. It gives a fast estimate of how strong and how stiff a clay soil is.",
      },
      {
        name: "Specific Gravity and Moisture Content",
        method: "ASTM D854 / D2216",
        text: "Moisture content is the weight of water in a soil compared with the weight of its solid particles, and it influences almost every other property, including strength and compaction. Specific gravity is the density of the soil particles relative to water. Both are basic measurements that other calculations, such as void ratio and the hydrometer analysis, depend on.",
      },
      {
        name: "Relative Density",
        method: "ASTM D4253 / D4254",
        text: "Relative density describes how tightly packed a sand or gravel is compared with its loosest and densest possible states. The laboratory determines those two limits, and the result is compared with the density in the ground or in the fill. It is used to judge how well a granular soil has been compacted and how it will behave under load.",
      },
      {
        name: "Consolidation Tests",
        method: "ASTM D2435",
        text: "Consolidation testing measures how much a saturated clay compresses over time when a load is applied, and how quickly that settlement happens. A sample is loaded in stages inside a rigid ring while its change in height is recorded. Engineers use the results to predict how much a building or embankment will settle, and over what period.",
      },
      {
        name: "Aggregate Gradation",
        method: "ASTM C136",
        text: "Aggregate gradation is the distribution of particle sizes in a sample of sand, gravel or crushed stone, measured by shaking it through a stack of sieves. Gradation controls how well the particles pack together, which affects the strength, workability and stability of concrete, asphalt and base courses. Results are compared against the limits in the project specification.",
      },
      {
        name: "Aggregate Abrasion",
        method: "ASTM C131",
        text: "Abrasion testing measures how well coarse aggregate resists wear and breakdown. The sample is tumbled in a rotating drum with steel spheres, and the percentage of material worn away is reported. Aggregate that breaks down easily is a poor choice for pavements and other surfaces that carry heavy traffic.",
      },
      {
        name: "Aggregate Soundness",
        method: "ASTM C88",
        text: "Soundness testing evaluates how well aggregate stands up to weathering, particularly freezing and thawing. The sample is soaked repeatedly in a sulfate solution, which forms crystals in the pores in a way that imitates weathering forces, and the percentage lost is measured. It helps identify aggregates likely to deteriorate over time in exposed conditions.",
      },
    ],
  },
  {
    slug: "concrete-testing",
        image: "/california-bearing-ratio-test.jpg",
    alt: "Laboratory testing of construction material samples",
    name: "Fresh & Hardened Concrete Testing",
    seoTitle: "Concrete Testing Lab in Georgia | SSN Material Testing",
    seoDescription:
      "Concrete slump, air content, cylinder compressive strength, flexural strength and RCPT testing. Well-documented reports from our Georgia lab.",
    summary:
      "Fresh and hardened concrete tests for mix design, strength and durability.",
    intro:
      "Our concrete testing services ensure compliance with mix design specifications, structural performance requirements, and durability standards.",
    overview: [
      "Concrete testing is done in two stages. Fresh concrete tests are performed at the time of placement, while the concrete is still workable, to confirm that the mix delivered matches the design. Hardened concrete tests are performed after the concrete has cured, on specimens cast at placement, to confirm that it reached the strength and durability the design requires.",
      "Together, the two stages show whether the concrete that went into the structure is the concrete that was specified. The tests below are what fall under it.",
    ],
    usedFor: ["Mix design verification", "Structural performance", "Durability requirements"],
    tests: [
      {
        name: "Slump Test",
        method: "ASTM C143",
        text: "The slump test measures the consistency and workability of fresh concrete. A cone is filled with concrete and lifted away, and the distance the concrete settles is the slump. It is a quick check, made on delivery, that the mix has the right amount of water and can be placed properly.",
      },
      {
        name: "Air Content Test",
        method: "ASTM C231",
        text: "Air content measures the percentage of microscopic air bubbles in fresh concrete. Deliberately entrained air helps concrete resist damage from freezing and thawing, but too much air lowers its strength, so the amount is checked against the specified range.",
      },
      {
        name: "Temperature Measurement",
        method: "ASTM C1064",
        text: "The temperature of fresh concrete is measured because it affects setting time and strength gain. Concrete that is too hot can set too quickly and crack, while concrete that is too cold gains strength slowly. Specifications usually give minimum and maximum temperatures at placement.",
      },
      {
        name: "Unit Weight and Yield",
        method: "ASTM C138",
        text: "Unit weight is the density of fresh concrete, found by weighing a known volume of it. It is used to calculate yield, which confirms that a batch produces the volume of concrete it should and helps detect errors in batching.",
      },
      {
        name: "Concrete Sampling and Cylinder Casting",
        method: "ASTM C172 / C31",
        text: "Taking a representative sample from the delivered concrete and casting cylinders from it is the starting point for all strength testing. The cylinders are protected on site and then cured under controlled conditions, so that their test results reflect the quality of the concrete itself and not the way the samples were handled.",
      },
      {
        name: "Compressive Strength",
        method: "ASTM C39",
        text: "Compressive strength is the main measure of hardened concrete. Cylinders are crushed in a compression machine at a specified age, and the maximum load is converted to pounds per square inch. Results are compared with the strength specified in the design.",
      },
      {
        name: "Flexural Strength",
        method: "ASTM C78",
        text: "Flexural strength measures a concrete beam's resistance to bending. A beam is loaded until it cracks, and the load at failure gives the result. It is used mainly for pavements and slabs on ground, where bending stress matters more than compression.",
      },
      {
        name: "Splitting Tensile Strength",
        method: "ASTM C496",
        text: "Splitting tensile strength indirectly measures concrete's resistance to pulling forces. A cylinder is laid on its side and compressed along its length until it splits. Concrete is much weaker in tension than in compression, so this result helps evaluate its resistance to cracking.",
      },
      {
        name: "Modulus of Elasticity",
        method: "ASTM C469",
        text: "The modulus of elasticity describes how stiff concrete is, meaning how much it deforms under a given load. It is measured by loading a cylinder and recording how much it shortens, and it is used in structural design to predict the deflection of beams, slabs and columns.",
      },
      {
        name: "Rapid Chloride Permeability (RCPT)",
        method: "ASTM C1202",
        text: "The rapid chloride permeability test measures how easily chloride ions can pass through concrete, reported as the electrical charge passed through a sample over six hours. Lower values indicate concrete that better resists chlorides from de-icing salts or seawater, which corrode reinforcing steel.",
      },
    ],
  },
  {
    slug: "rock-testing",
    image: "https://images.unsplash.com/photo-1780342333689-2a76cfdb0152?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Rock samples for laboratory strength testing",
    name: "Rock Testing & Characterization",
    seoTitle: "Rock Testing & Characterization | SSN Material Testing",
    seoDescription:
      "UCS, triaxial, point load, Brazilian tensile and slake durability rock testing for foundations, slopes and excavations. Georgia lab.",
    summary: "Strength, durability and deformation testing of rock.",
    intro:
      "Our rock testing services assess rock strength, durability, and deformation to support engineering decisions for foundations, slopes, excavations, and underground structures.",
    overview: [
      "Rock testing measures the strength, durability and deformation behavior of rock samples, usually cores taken from the site. Characterization means describing the rock with numbers rather than by eye, so that engineers can design with measured values instead of judgment alone.",
      "Rock strength and stiffness control how foundations, slopes, excavations and underground structures behave. The tests below are what fall under it.",
    ],
    usedFor: ["Foundations", "Slopes and excavations", "Underground structures"],
    tests: [
      {
        name: "Uniaxial Compressive Strength (UCS) Testing",
        method: "ASTM D7012",
        text: "Uniaxial compressive strength is the load an intact rock core can carry, with no confinement, before it fails. It is the most widely used rock strength value, and it is used to classify rock and to support the design of foundations on rock.",
      },
      {
        name: "Triaxial Compressive Strength Testing",
        method: "ASTM D7012",
        text: "Triaxial tests load a rock core while fluid pressure confines its sides, which imitates the pressure of the surrounding rock underground. Running several tests at different confining pressures gives the strength envelope of the rock, which is used in the design of excavations, tunnels and deep foundations.",
      },
      {
        name: "Point Load Strength Index Testing",
        method: "ASTM D5731",
        text: "The point load test is a fast, portable way to estimate rock strength. A piece of rock is squeezed between two conical points until it splits, and the load is converted to a strength index. It is often used to screen many samples, or where preparing cores for a UCS test is not practical.",
      },
      {
        name: "Brazilian Tensile Strength Testing",
        method: "ASTM D3967",
        text: "The Brazilian test measures tensile strength indirectly. A disc of rock is compressed across its diameter until it splits. Rock is far weaker in tension than in compression, so this value matters when judging how rock will crack or break.",
      },
      {
        name: "Slake Durability Testing",
        method: "ASTM D4644",
        text: "Slake durability testing shows how quickly a rock breaks down when it goes through cycles of wetting and drying. Pieces are rotated in a drum partly submerged in water, and the fraction that remains intact is the durability index. It is especially important for shales and other weak rocks used in slopes, cuts and fills.",
      },
      {
        name: "Porosity and Absorption Testing",
        method: "",
        text: "Porosity is the share of a rock's volume that is empty pore space, and absorption is how much water the rock takes up. These properties affect strength and durability, and they influence how the rock reacts to freezing and weathering.",
      },
      {
        name: "Direct Shear Strength Testing of Rock Joints",
        method: "ASTM D5607",
        text: "Rock masses often fail along joints and fractures rather than through solid rock. This test shears a sample along a joint under a controlled load to measure the shear strength of that surface, which is critical for slope stability and for checking foundations against sliding.",
      },
      {
        name: "Modulus of Elasticity and Deformation Testing",
        method: "ASTM D7012",
        text: "This test measures how stiff the rock is, through its modulus of elasticity and Poisson's ratio, by recording how a core deforms as it is loaded. The results are used to predict how much a rock foundation or an excavation will move under load.",
      },
    ],
  },
  {
    slug: "asphalt-testing",
    name: "Bitumen & Asphalt Mix Testing",
    seoTitle: "Asphalt & Bitumen Testing Lab | SSN Material Testing",
    seoDescription:
      "Marshall stability, Superpave mix design, binder testing, ignition oven asphalt content and gradation for pavement projects. Georgia lab.",
    summary:
      "Asphalt mix and binder testing for pavement design and production control.",
    intro:
      "We provide comprehensive asphalt and bituminous material testing for pavement design, production control, and performance evaluation.",
    overview: [
      "Asphalt pavement is a mix of aggregate and a bituminous binder. Testing covers both parts: binder tests describe the bitumen itself, while mix tests describe how the finished combination behaves.",
      "The results are used to design a mix before production, to control the mix being produced, and to evaluate how a pavement will perform. The tests below are what fall under it.",
    ],
    usedFor: ["Pavement design", "Production control", "Performance evaluation"],
    tests: [
      {
        name: "Asphalt Binder Penetration, Softening Point, and Viscosity",
        method: "ASTM D5 / D36 / D4402",
        text: "These tests describe the consistency of the bitumen. Penetration measures how deeply a standard needle sinks into it, softening point is the temperature at which it becomes soft enough to flow, and viscosity measures how it flows at higher temperatures, which guides the temperatures used for mixing and compaction.",
      },
      {
        name: "Marshall Stability and Flow",
        method: "ASTM D6927",
        text: "The Marshall test loads a compacted asphalt specimen until it fails. Stability is the maximum load the specimen carries, and flow is how much it deforms before failing. It is a widely used way to evaluate and control an asphalt mix design.",
      },
      {
        name: "Superpave Mix Design Testing",
        method: "AASHTO R 35",
        text: "Superpave is a performance-based method for designing asphalt mixes. Aggregate and binder are selected to suit the traffic and climate of the project, and specimens are compacted in a gyratory compactor to find the binder content that meets the volumetric requirements.",
      },
      {
        name: "Asphalt Content by Ignition Method",
        method: "ASTM D6307",
        text: "The ignition method burns the binder out of a sample of asphalt mix in a furnace, and the weight lost gives the binder content. It is a fast way to check production mix against the job formula, and the aggregate that remains can then be used for gradation testing.",
      },
      {
        name: "Gradation Analysis of Hot Mix Asphalt",
        method: "ASTM D5444",
        text: "Once the binder has been removed, the aggregate is sieved to find its particle-size distribution. That gradation is compared with the mix design to confirm that the plant is producing the correct mix.",
      },
      {
        name: "Bulk Specific Gravity and Density",
        method: "ASTM D2726",
        text: "Bulk specific gravity and density measure how compact a laboratory or field-cored asphalt specimen is. The results are used to calculate air voids and the degree of compaction, both of which strongly influence how long the pavement lasts.",
      },
      {
        name: "Indirect Tensile Strength",
        method: "ASTM D6931",
        text: "Indirect tensile strength is measured by loading a cylindrical specimen across its diameter until it splits. It indicates the mix's resistance to cracking, and it is also the measurement used in moisture susceptibility testing.",
      },
      {
        name: "Moisture Susceptibility Testing",
        method: "AASHTO T 283",
        text: "Moisture susceptibility testing checks whether water will strip the binder from the aggregate. Specimens are conditioned with water and freeze-thaw cycles, and their tensile strength is compared with unconditioned specimens. A large drop signals a mix likely to ravel or crack in service.",
      },
    ],
  },
  {
    slug: "drainage-permeability-testing",
        image: "https://images.unsplash.com/photo-1526898943670-92bfa9f94c12?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2F0ZXIlMjBwZXJtBWFiaWxpdHklMjBkcmFpbmFnZSUyMHRlc3R8ZW58MHx8MHx8fDA%3D",
    alt: "Water flowing through material during permeability testing",
    name: "Water Drainage & Permeability Testing",
    seoTitle: "Permeability & Drainage Testing | SSN Material Testing",
    seoDescription:
      "Constant and falling head permeability, infiltration rate and hydraulic conductivity testing for drainage and permeable pavement projects.",
    summary:
      "Permeability and infiltration testing for soils, filters and drainage materials.",
    intro:
      "Our hydraulic and permeability testing services evaluate infiltration, drainage capacity, and water movement through soils and materials.",
    overview: [
      "Permeability describes how easily water moves through a material. Hydraulic testing measures that movement in soils, filter materials and pavement systems, so that drainage and infiltration systems can be designed to carry the flows they are meant to.",
      "A system that drains too slowly floods, and one that drains too quickly may not filter or hold water as intended. The tests below are what fall under it.",
    ],
    usedFor: ["Drainage design", "Stormwater infiltration systems", "Permeable pavement"],
    tests: [
      {
        name: "Constant Head and Falling Head Permeability",
        method: "ASTM D2434 / D5856",
        text: "Both tests measure how fast water flows through a soil sample. In constant head testing, water flows under a fixed head, which suits sands and gravels. In falling head testing, the head drops over time in a standpipe, which suits finer soils that let water through slowly.",
      },
      {
        name: "Infiltration Rate Testing",
        method: "",
        text: "Infiltration rate is how quickly water soaks into the ground surface or into a material. It determines whether stormwater basins, rain gardens and infiltration trenches will drain in the time required.",
      },
      {
        name: "Soil Hydraulic Conductivity",
        method: "ASTM D5084",
        text: "Hydraulic conductivity is the standard measure of how easily water moves through a soil, expressed as a speed. Very low values are wanted for liners and barriers, and higher values for drainage layers and filters.",
      },
      {
        name: "Porosity and Void Ratio Evaluation",
        method: "",
        text: "Porosity and void ratio describe how much of a material's volume is open space. They control how much water the material can hold and move, and they are needed to interpret permeability and compaction results.",
      },
      {
        name: "Filter Media Testing",
        method: "",
        text: "Filter media testing checks that sand, gravel or engineered filter material has the particle sizes and flow characteristics needed to let water pass while holding back fine soil. It applies to underdrains, bioretention systems and stormwater filters.",
      },
      {
        name: "Permeable Pavement Testing",
        method: "ASTM C1701 / C1781",
        text: "Permeable pavement testing measures how quickly water passes through pervious concrete, porous asphalt or permeable pavers. It is used to confirm that a new surface meets its infiltration requirement, and to check whether a surface has clogged over time.",
      },
    ],
  },
];

export const STATS = [
  { value: '15+', label: 'Years Experience' },
  { value: '5000+', label: 'Tests Completed' },
  { value: '200+', label: 'Happy Clients' },
  { value: '99%', label: 'Accuracy Rate' },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: "James Carter",
    role: "Project Engineer, Carter & Associates",
    text: "SSN delivered our soil and concrete test reports within 24 hours. The accuracy and detail in the reports gave us full confidence during the foundation inspection.",
  },
  {
    id: 2,
    name: "Michael Thompson",
    role: "Site Manager, Apex Construction Group",
    text: "We've worked with several testing labs across Virginia, but SSN stands out for their turnaround time and the clarity of their reports. Our DOT submissions have never been smoother.",
  },
  {
    id: 3,
    name: "David Hartley",
    role: "Structural Engineer, Hartley & Burns LLC",
    text: "The Marshall stability and asphalt testing results were thorough and well-documented. SSN's team was professional and responsive throughout the project.",
  },
  {
    id: 4,
    name: "Robert Simmons",
    role: "Civil Engineer, BlueLine Infrastructure",
    text: "SSN handled our full geotechnical testing package for a highway project. Reliable, fast, and their reports are accepted without question by all regulatory bodies.",
  },
];

export const CERTIFICATIONS = [
  { label: 'ISO 9001:2015', desc: 'Quality Management' },
  { label: 'NABL Accredited', desc: 'National Accreditation' },
  { label: 'BIS Certified', desc: 'Bureau of Indian Standards' },
  { label: 'ASTM Standards', desc: 'International Testing' },
]

export const CONTACT_INFO = {
  address: '6500 McDonough Dr, Suite E-04, Norcross, Georgia 30093',
  phone: '(470) 504-5962',
  email: 'contact@ssnmaterialtesting.com',
  hours: 'Mon–Sat: 7am – 4pm',
}