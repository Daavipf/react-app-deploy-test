<<<<<<< HEAD
import Profile from "./Profile"

function Container({ children }) {
  return (
    <main className="">
      <div className="h-[12vh] min-h-24 w-screen relative bg-JReal-200">
        <div className="absolute end-4 mt-[3.5%]">
          <Profile />
        </div>

      </div>
      <div className="ml-80 mr-8 my-16">
        {children}
      </div>

    </main>
  )
}

=======
import Profile from "./Profile"

function Container({ children }) {
  return (
    <main className="">
      <div className="h-[12vh] min-h-24 w-screen relative bg-JReal-200">
        <div className="absolute end-4 mt-[3.5%]">
          <Profile />
        </div>

      </div>
      <div className="ml-80 mr-8 my-16">
        {children}
      </div>

    </main>
  )
}

>>>>>>> 8c17a86729ee79e00cd7a469a359c1522ca2ce8f
export default Container