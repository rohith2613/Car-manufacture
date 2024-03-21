import { Link } from "react-router-dom"


const Hero = () => {
  return (
<section
  className="relative bg-[url(https://images.unsplash.com/photo-1518987048-93e29699e79a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnN8ZW58MHwwfDB8fHww)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl text-slate-100  font-extrabold sm:text-5xl space-y-2">
      The Intricate World

        <strong className="block font-extrabold text-slate-200"> of Car Manufacturing. </strong>
      </h1>

      <p className="mt-4 max-w-lg text-white font-serif font-extrabold sm:text-2xl/relaxed">
      Car manufacturing involves intricate processes, advanced technology, and skilled workforce to meet quality and safety standards
      </p>

      <div className="mt-8 flex justify-center gap-4 text-center">
        

        <Link
          to="/process"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Unveiling the Process
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero
