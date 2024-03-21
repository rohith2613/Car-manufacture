

const Stats = () => {
  return (
    <>
    <section className="min-h-screen bg-white dark:bg-gray-900">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
        Trusted by our customers
      </h2>
      <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
      Analyzing customer buying patterns reveals fascinating insights. It`s not just about the car`s features or price. Factors such as brand reputation, after-sales service, fuel efficiency, and even color play a significant role. Understanding these preferences helps us tailor our offerings and deliver a superior customer experience.
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
          <dt className="order-last text-lg font-medium text-red-500 dark:text-white/75">
            Total Sales
          </dt>
          <dd className="text-4xl font-extrabold text-red-600 md:text-5xl dark:text-red-500">
            $4.8m
          </dd>
        </div>
        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
            Official Addons
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-red-500">
            24
          </dd>
        </div>
        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
          <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
            Total Addons
          </dt>
          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-red-500">
            86
          </dd>
        </div>
      </dl>
    </div>
  </div>
</section>

    </>
  )
}

export default Stats
