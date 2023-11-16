import Image from "next/image";

export function TestSubmenu() {
  return (
    <div className="hero bg-sky-50">
      <div className="hero-content flex-col lg:flex-row">
        <Image
          src="/assets/logo.png"
          alt="User Profile"
          height={90}
          width={64}
          className="max-w-sm rounded-lg shadow-2xl"
        />

        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
