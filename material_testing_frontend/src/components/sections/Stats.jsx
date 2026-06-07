// import { STATS } from "../../data/siteData";

// export default function Stats() {
//   return (
//     <section className="bg-accent">
//       <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
//         {STATS.map((stat, i) => (
//           <div key={i} className="text-center">
//             <div className="font-display text-white font-extrabold text-5xl leading-none mb-2">
//               {stat.value}
//             </div>
//             <div className="font-ui text-white/70 text-sm uppercase tracking-widest">
//               {stat.label}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function Stats() {
  return (
    <section className="bg-accent py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <div className="font-display text-white font-extrabold text-5xl">
            15+
          </div>
          <div className="font-ui text-white/70 text-sm uppercase tracking-widest">
            Years Experience
          </div>
        </div>
        <div className="text-center">
          <div className="font-display text-white font-extrabold text-5xl">
            5000+
          </div>
          <div className="font-ui text-white/70 text-sm uppercase tracking-widest">
            Tests Completed
          </div>
        </div>
        <div className="text-center">
          <div className="font-display text-white font-extrabold text-5xl">
            200+
          </div>
          <div className="font-ui text-white/70 text-sm uppercase tracking-widest">
            Happy Clients
          </div>
        </div>
        <div className="text-center">
          <div className="font-display text-white font-extrabold text-5xl">
            99%
          </div>
          <div className="font-ui text-white/70 text-sm uppercase tracking-widest">
            Accuracy Rate
          </div>
        </div>
      </div>
    </section>
  );
}
