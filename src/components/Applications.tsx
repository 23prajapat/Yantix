export default function Applications() {

  return (
    <section className="w-full bg-black text-white py-24 px-6 mt-20">

      <div className="max-w-6xl mx-auto zoom-animation">

        <h2 className="text-4xl font-semibold mb-12">
          Industry Applications
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-xl font-medium mb-2">Private 5G</h3>
            <p className="text-gray-400">
              Enterprise wireless infrastructure for campuses and factories.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Industry 4.0</h3>
            <p className="text-gray-400">
              Connectivity for smart manufacturing and automation.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Edge AI</h3>
            <p className="text-gray-400">
              Real-time analytics and machine learning at the network edge.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Future 6G</h3>
            <p className="text-gray-400">
              Next-generation autonomous wireless networks.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}