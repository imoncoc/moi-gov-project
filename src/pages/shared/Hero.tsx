const Hero = () => {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1481537788063-bc8855ddbe46?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        // height: "calc(100vh - 100px)",
        height: "80vh",
      }}
    >
      <div className="container mx-auto  h-full text-white flex justify-center items-center">
        <div className="flex flex-col gap-5">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl "
            style={{
              textShadow:
                "1px 1px 2px rgb(132 204 22), 0 0 1em rgb(132 204 22), 0 0 0.2em rgb(132 204 22)",
            }}
          >
            Minister of Information and Broadcasting
          </h1>
          <p
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl"
            style={{
              // textShadow: "2px 2px 4px rgba(255, 255, 255, 0.4)"
              textShadow:
                "1px 1px 2px white, 0 0 1em rgb(132 204 22), 0 0 0.2em white",
            }}
          >
            Government of the People's Republic of Bangladesh
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
