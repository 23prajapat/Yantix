
export default function Technology() {

  return (
    <section className="w-full bg-neutral-950 text-white py-24 px-6">

      <div className="max-w-6xl mx-auto zoom-animation">
        <h2 className="text-4xl font-semibold mb-8 inline-block" >
          Our Technology
        </h2>
        <p className="text-gray-400 max-w-3xl">
          Yantix develops hardware-software platforms that embed intelligence
          directly into radio access networks. These systems enable real-time
          sensing, learning, and optimization of wireless performance.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-12">

          <div>
            <h3 className="text-xl font-medium mb-3">
              Intelligent Resource Allocation
            </h3>
            <p className="text-gray-400">
              Dynamic radio resource scheduling powered by AI models.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Adaptive Radio Behavior
            </h3>
            <p className="text-gray-400">
              Continuous network adaptation based on real-time conditions.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Edge-Native AI Processing
            </h3>
            <p className="text-gray-400">
              AI models deployed directly at the network edge.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-3">
              Software-Defined Control
            </h3>
            <p className="text-gray-400">
              Flexible network architecture controlled via software updates.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}