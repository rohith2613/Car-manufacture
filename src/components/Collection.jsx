

const Collection = () => {
  return (
    <section className="bg-slate-900" >
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header className="text-center">
      <h2 className="text-xl font-bold text-gray-100 sm:text-3xl">Car Collection</h2>

      <p className="mx-auto mt-4 max-w-md text-gray-300">
      A diverse collection of cars, showcasing innovation, design elegance, and technological advancements in the automotive industry
      </p>
    </header>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1555353540-64580b51c258?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2Fyc3xlbnwwfDF8MHx8fDA%3D"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-slate-900 pt-3">
            <h3 className="text-2xl text-center font-semibold text-gray-100 group-hover:underline group-hover:underline-offset-4 p-3">
              Herno
            </h3>

          
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1541348263662-e068662d82af?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnN8ZW58MHwxfDB8fHww"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-slate-900 pt-3">
          <h3 className="text-2xl text-center font-semibold text-gray-100 group-hover:underline group-hover:underline-offset-4 p-3">
              Lessoa
            </h3>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnN8ZW58MHwxfDB8fHww"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-gray-900 pt-3">
          <h3 className="text-2xl text-center font-semibold text-gray-100 group-hover:underline group-hover:underline-offset-4 p-3">
              Zordix
            </h3>

            
          </div>
        </a>
      </li>

      <li>
        <a href="#" className="group block overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhcnN8ZW58MHwxfDB8fHww"
            alt=""
            className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
          />

          <div className="relative bg-gray-900 pt-3">
          <h3 className="text-2xl text-center font-semibold text-gray-100 group-hover:underline p-3 group-hover:underline-offset-4">
              CAirossa
            </h3>

            
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>
  )
}

export default Collection
